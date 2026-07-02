// Dashboard de progreso: agrega un resumen automatico arriba de progreso.md,
// usando las estadisticas ya guardadas por el repasador (static/js/repaso.js)
// en localStorage. No vuelve a traer los mazos: solo lee lo que ya esta guardado.
(function () {
  'use strict';

  var STORAGE_KEY = 'psyche-vault-srs';

  var DECK_LABELS = {
    '01-historia': '01 — Historia',
    '02-psicoanalisis': '02 — Psicoanálisis',
    '03-conductismo-cognitivismo': '03 — Conductismo y Cognitivismo',
    '04-humanismo-existencial': '04 — Humanismo y Existencial',
    '05-neurociencias': '05 — Neurociencias',
    '06-psicologia-social': '06 — Psicología Social',
    '07-desarrollo-humano': '07 — Desarrollo Humano',
    '08-psicopatologia': '08 — Psicopatología',
    '09-evaluacion-y-diagnostico': '09 — Evaluación y Diagnóstico',
    '10-temas-propios': '10 — Temas Propios',
    '11-metodologia': '11 — Metodología',
    '12-procesos': '12 — Procesos',
    '13-cognitiva': '13 — Cognitiva',
    '14-personalidad': '14 — Personalidad',
    '15-etica-profesional': '15 — Ética Profesional',
    '16-psicologia-clinica': '16 — Clínica',
    '17-psicobiologia': '17 — Psicobiología',
    '18-psicofarmacologia': '18 — Psicofarmacología',
    '19-psicologia-educacional': '19 — Psicología Educacional',
    '20-psicologia-salud': '20 — Psicología de la Salud',
    '21-neuropsicologia-clinica': '21 — Neuropsicología Clínica',
    '22-psicologia-organizacional': '22 — Psicología Organizacional'
  };

  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function buildStats(state) {
    var today = new Date().toISOString().slice(0, 10);
    var byModule = {};
    Object.keys(state).forEach(function (cardId) {
      var slug = cardId.split(':')[0];
      if (!byModule[slug]) byModule[slug] = { reviewed: 0, dueToday: 0 };
      byModule[slug].reviewed++;
      if (state[cardId].dueDate <= today) byModule[slug].dueToday++;
    });
    return byModule;
  }

  function render() {
    var root = document.getElementById('pv-dashboard-root');
    if (!root) return;

    var state = loadState();
    var stats = buildStats(state);
    var slugs = Object.keys(stats);

    if (slugs.length === 0) {
      root.innerHTML = '<p>Todavía no repasaste ninguna tarjeta. Andá a ' +
        '<a href="../repaso/">Repasar</a> para empezar.</p>';
      return;
    }

    var totalReviewed = 0, totalDue = 0;
    slugs.forEach(function (s) { totalReviewed += stats[s].reviewed; totalDue += stats[s].dueToday; });

    var html = '<p><strong>' + totalReviewed + '</strong> tarjetas repasadas en total, ' +
      '<strong>' + totalDue + '</strong> pendientes de repaso hoy.</p>';
    html += '<table><thead><tr><th>Módulo</th><th>Repasadas</th><th>Pendientes hoy</th></tr></thead><tbody>';
    slugs.sort().forEach(function (slug) {
      var label = DECK_LABELS[slug] || slug;
      html += '<tr><td>' + label + '</td><td>' + stats[slug].reviewed + '</td><td>' + stats[slug].dueToday + '</td></tr>';
    });
    html += '</tbody></table>';
    root.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
