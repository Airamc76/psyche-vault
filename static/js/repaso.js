// Repasador con repeticion espaciada, usando el contenido ya escrito en anki/*.md.
// ponytail: sin backend, sin apps externas. El estado vive en localStorage del
// navegador. Algoritmo simple: acertar duplica el intervalo, fallar lo resetea a 1 dia.
(function () {
  'use strict';

  var STORAGE_KEY = 'psyche-vault-srs';

  var DECKS = [
    { slug: '01-historia', label: '01 — Historia' },
    { slug: '02-psicoanalisis', label: '02 — Psicoanálisis' },
    { slug: '03-conductismo-cognitivismo', label: '03 — Conductismo y Cognitivismo' },
    { slug: '04-humanismo-existencial', label: '04 — Humanismo y Existencial' },
    { slug: '05-neurociencias', label: '05 — Neurociencias' },
    { slug: '06-psicologia-social', label: '06 — Psicología Social' },
    { slug: '07-desarrollo-humano', label: '07 — Desarrollo Humano' },
    { slug: '08-psicopatologia', label: '08 — Psicopatología' },
    { slug: '09-evaluacion-y-diagnostico', label: '09 — Evaluación y Diagnóstico' },
    { slug: '10-temas-propios', label: '10 — Temas Propios' },
    { slug: '11-metodologia', label: '11 — Metodología' },
    { slug: '12-procesos', label: '12 — Procesos' },
    { slug: '13-cognitiva', label: '13 — Cognitiva' },
    { slug: '14-personalidad', label: '14 — Personalidad' },
    { slug: '15-etica-profesional', label: '15 — Ética Profesional' },
    { slug: '16-psicologia-clinica', label: '16 — Clínica' },
    { slug: '17-psicobiologia', label: '17 — Psicobiología' },
    { slug: '18-psicofarmacologia', label: '18 — Psicofarmacología' },
    { slug: '19-psicologia-educacional', label: '19 — Psicología Educacional' },
    { slug: '20-psicologia-salud', label: '20 — Psicología de la Salud' },
    { slug: '21-neuropsicologia-clinica', label: '21 — Neuropsicología Clínica' },
    { slug: '22-psicologia-organizacional', label: '22 — Psicología Organizacional' }
  ];

  function hashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }

  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function todayISO() {
    return new Date().toISOString().slice(0, 10);
  }

  function addDays(days) {
    var d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  }

  async function fetchDeckCards(slug) {
    var base = window.location.pathname.replace(/\/repaso\/?$/, '');
    var url = base + '/anki/' + slug + '/';
    var res = await fetch(url);
    if (!res.ok) throw new Error('No pude cargar el mazo ' + slug);
    var html = await res.text();
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var blocks = doc.querySelectorAll('.md-content__inner details.question');
    var cards = [];
    blocks.forEach(function (block) {
      var summary = block.querySelector('summary');
      if (!summary) return;
      var question = summary.textContent.trim();
      var clone = block.cloneNode(true);
      clone.querySelector('summary').remove();
      var answer = clone.textContent.trim();
      var id = slug + ':' + hashCode(question);
      cards.push({ id: id, question: question, answer: answer });
    });
    return cards;
  }

  function dueCards(cards, state) {
    var today = todayISO();
    return cards.filter(function (c) {
      var s = state[c.id];
      return !s || s.dueDate <= today;
    });
  }

  function grade(cardId, remembered, state) {
    var prev = state[cardId];
    var interval = remembered ? (prev ? prev.intervalDays * 2 : 1) : 1;
    state[cardId] = { intervalDays: interval, dueDate: addDays(interval) };
    saveState(state);
  }

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function renderDeckSelector(root) {
    root.innerHTML = '';
    var list = el('div', { style: 'display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.5rem;' });
    DECKS.forEach(function (d) {
      var btn = el('button', { class: 'md-button', style: 'text-align:left;cursor:pointer;' }, d.label);
      btn.addEventListener('click', function () { startSession(root, d); });
      list.appendChild(btn);
    });
    root.appendChild(list);
  }

  async function startSession(root, deck) {
    root.innerHTML = '<p>Cargando mazo…</p>';
    var state = loadState();
    var cards;
    try {
      cards = await fetchDeckCards(deck.slug);
    } catch (e) {
      root.innerHTML = '<p>Error cargando el mazo: ' + e.message + '</p>';
      return;
    }
    var pending = dueCards(cards, state);
    if (pending.length === 0) pending = cards.slice(); // nada pendiente: repasar todo igual

    var idx = 0;
    var showingAnswer = false;

    function renderCard() {
      root.innerHTML = '';
      var back = el('button', { class: 'md-button', style: 'margin-bottom:1rem;cursor:pointer;' }, '← Elegir otro módulo');
      back.addEventListener('click', function () { renderDeckSelector(root); });
      root.appendChild(back);

      if (idx >= pending.length) {
        root.appendChild(el('p', {}, '¡Listo! Repasaste ' + pending.length + ' tarjetas de ' + deck.label + '.'));
        return;
      }

      var card = pending[idx];
      root.appendChild(el('p', {}, (idx + 1) + ' de ' + pending.length + ' — ' + deck.label));

      var box = el('div', { style: 'border:1px solid #ccc;border-radius:8px;padding:1.2rem;margin:.5rem 0;' });
      box.appendChild(el('p', { style: 'font-weight:600;' }, card.question));

      if (showingAnswer) {
        box.appendChild(el('p', {}, card.answer));
        var okRow = el('div', { style: 'display:flex;gap:.5rem;margin-top:1rem;' });
        var noBtn = el('button', { class: 'md-button', style: 'cursor:pointer;' }, 'No me acordé');
        var yesBtn = el('button', { class: 'md-button md-button--primary', style: 'cursor:pointer;' }, 'Sí, me acordé');
        noBtn.addEventListener('click', function () {
          grade(card.id, false, state);
          idx++; showingAnswer = false; renderCard();
        });
        yesBtn.addEventListener('click', function () {
          grade(card.id, true, state);
          idx++; showingAnswer = false; renderCard();
        });
        okRow.appendChild(noBtn);
        okRow.appendChild(yesBtn);
        box.appendChild(okRow);
      } else {
        var showBtn = el('button', { class: 'md-button md-button--primary', style: 'cursor:pointer;margin-top:.8rem;' }, 'Mostrar respuesta');
        showBtn.addEventListener('click', function () { showingAnswer = true; renderCard(); });
        box.appendChild(showBtn);
      }
      root.appendChild(box);
    }

    renderCard();
  }

  function init() {
    var root = document.getElementById('pv-repaso-root');
    if (!root) return; // no estamos en la pagina de repaso
    renderDeckSelector(root);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
