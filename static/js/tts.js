// Lectura en voz alta del contenido de la pagina (Web Speech API nativa).
// ponytail: usa la API nativa del navegador, sin backend ni API key.
// Tres formas de disparar la lectura: boton de la barra (pagina completa),
// boton junto a cada titulo (esa seccion), o seleccionar texto con el mouse
// (lee solo lo seleccionado).
(function () {
  'use strict';

  var state = 'idle'; // idle | playing | paused
  var utterance = null;
  var activeTrigger = null;
  var selectionBtn = null;

  function pickSpanishVoice(voices) {
    return (
      voices.find(function (v) { return v.lang === 'es-ES'; }) ||
      voices.find(function (v) { return v.lang === 'es-MX'; }) ||
      voices.find(function (v) { return v.lang && v.lang.indexOf('es') === 0; }) ||
      null
    );
  }

  function getContentText() {
    var content = document.querySelector('.md-content__inner');
    return content ? content.innerText : '';
  }

  function updateTriggerLabel(trigger, newState) {
    if (!trigger) return;
    if (trigger.id === 'tts-button') {
      if (newState === 'playing') trigger.title = 'Pausar lectura';
      else if (newState === 'paused') trigger.title = 'Reanudar lectura';
      else trigger.title = 'Leer en voz alta';
    } else if (trigger.classList && trigger.classList.contains('pv-tts-section-btn')) {
      trigger.classList.toggle('pv-tts-active', newState === 'playing' || newState === 'paused');
    }
  }

  function resetAllTriggers() {
    if (activeTrigger) updateTriggerLabel(activeTrigger, 'idle');
    activeTrigger = null;
  }

  function speakText(text, trigger) {
    var synth = window.speechSynthesis;
    if (!synth) {
      alert('Tu navegador no soporta lectura en voz alta.');
      return;
    }

    // Mismo disparador clickeado de nuevo: alternar pausa/reanudar.
    if (activeTrigger === trigger && state !== 'idle') {
      if (state === 'playing') {
        synth.pause();
        state = 'paused';
      } else {
        synth.resume();
        state = 'playing';
      }
      updateTriggerLabel(trigger, state);
      return;
    }

    synth.cancel();
    resetAllTriggers();
    if (!text) return;

    utterance = new SpeechSynthesisUtterance(text);
    var voice = pickSpanishVoice(synth.getVoices());
    if (voice) utterance.voice = voice;
    utterance.lang = voice ? voice.lang : 'es-ES';

    utterance.onend = function () {
      state = 'idle';
      updateTriggerLabel(trigger, state);
      activeTrigger = null;
    };
    utterance.onerror = function () {
      state = 'idle';
      updateTriggerLabel(trigger, state);
      activeTrigger = null;
    };

    synth.speak(utterance);
    state = 'playing';
    activeTrigger = trigger;
    updateTriggerLabel(trigger, state);
  }

  function stopSpeech() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    resetAllTriggers();
    state = 'idle';
  }

  // --- Botón de la barra superior: lee la página completa ---

  function createHeaderButton() {
    if (document.getElementById('tts-button')) return;
    var header = document.querySelector('.md-header__inner');
    if (!header) return;

    var btn = document.createElement('button');
    btn.id = 'tts-button';
    btn.type = 'button';
    btn.className = 'md-header__button md-icon';
    btn.title = 'Leer en voz alta';
    btn.setAttribute('aria-label', 'Leer en voz alta');
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" width="24" height="24">' +
      '<path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>' +
      '</svg>';
    btn.addEventListener('click', function () { speakText(getContentText(), btn); });

    var searchEl = document.querySelector('.md-header__source') || document.querySelector('.md-search');
    header.insertBefore(btn, searchEl || null);
  }

  // --- Botones por sección: uno junto a cada H2/H3 del contenido ---

  function collectSectionText(heading) {
    var parts = [heading.textContent.trim()];
    var el = heading.nextElementSibling;
    while (el && !/^H[1-6]$/.test(el.tagName)) {
      parts.push(el.innerText || el.textContent || '');
      el = el.nextElementSibling;
    }
    return parts.join('. ');
  }

  function addSectionButtons() {
    var content = document.querySelector('.md-content__inner');
    if (!content) return;
    var headings = content.querySelectorAll('h2, h3');
    headings.forEach(function (h) {
      if (h.querySelector('.pv-tts-section-btn')) return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'pv-tts-section-btn';
      btn.title = 'Leer esta sección';
      btn.setAttribute('aria-label', 'Leer esta sección');
      btn.textContent = '🔊'; // 🔊
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        speakText(collectSectionText(h), btn);
      });
      h.appendChild(btn);
    });
  }

  // --- Leer texto seleccionado con el mouse ---

  function removeSelectionButton() {
    if (selectionBtn) {
      selectionBtn.remove();
      selectionBtn = null;
    }
  }

  function handleSelection() {
    var sel = window.getSelection();
    var text = sel ? sel.toString().trim() : '';
    removeSelectionButton();
    if (!text || text.length < 2) return;

    var content = document.querySelector('.md-content__inner');
    if (!content || !sel.anchorNode || !content.contains(sel.anchorNode)) return;

    var rect = sel.getRangeAt(0).getBoundingClientRect();
    if (!rect || (rect.width === 0 && rect.height === 0)) return;

    var btn = document.createElement('button');
    btn.id = 'pv-tts-selection-btn';
    btn.type = 'button';
    btn.textContent = '🔊 Leer esto';
    btn.style.top = Math.max(rect.top - 36, 4) + window.scrollY + 'px';
    btn.style.left = rect.left + window.scrollX + 'px';
    document.body.appendChild(btn);
    selectionBtn = btn;

    btn.addEventListener('mousedown', function (e) { e.preventDefault(); });
    btn.addEventListener('click', function () {
      speakText(text, btn);
      removeSelectionButton();
    });
  }

  function injectStyles() {
    var css = [
      '.pv-tts-section-btn{background:none;border:none;cursor:pointer;font-size:.8em;',
      'margin-left:.4em;opacity:.5;vertical-align:middle;}',
      '.pv-tts-section-btn:hover,.pv-tts-section-btn.pv-tts-active{opacity:1;}',
      '#pv-tts-selection-btn{position:absolute;z-index:1001;background:#3f51b5;color:#fff;',
      'border:none;border-radius:4px;padding:.25rem .6rem;font-size:.75rem;cursor:pointer;',
      'box-shadow:0 2px 6px rgba(0,0,0,.3);}'
    ].join('');
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  function init() {
    injectStyles();
    createHeaderButton();
    addSectionButtons();
    document.addEventListener('mouseup', function () { setTimeout(handleSelection, 0); });
    document.addEventListener('mousedown', function (e) {
      if (selectionBtn && e.target !== selectionBtn) removeSelectionButton();
    });
    window.addEventListener('beforeunload', stopSpeech);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
