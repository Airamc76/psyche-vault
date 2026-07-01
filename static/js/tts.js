// Lectura en voz alta del contenido de la pagina (Web Speech API nativa).
// ponytail: usa la API nativa del navegador, sin backend ni API key.
(function () {
  'use strict';

  var state = 'idle'; // idle | playing | paused
  var utterance = null;

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

  function setLabel(newState) {
    var btn = document.getElementById('tts-button');
    if (!btn) return;
    if (newState === 'playing') btn.title = 'Pausar lectura';
    else if (newState === 'paused') btn.title = 'Reanudar lectura';
    else btn.title = 'Leer en voz alta';
  }

  function stopSpeech() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    state = 'idle';
    setLabel(state);
  }

  function toggleSpeech() {
    var synth = window.speechSynthesis;
    if (!synth) {
      alert('Tu navegador no soporta lectura en voz alta.');
      return;
    }

    if (state === 'playing') {
      synth.pause();
      state = 'paused';
      setLabel(state);
      return;
    }
    if (state === 'paused') {
      synth.resume();
      state = 'playing';
      setLabel(state);
      return;
    }

    var text = getContentText();
    if (!text) return;

    utterance = new SpeechSynthesisUtterance(text);
    var voice = pickSpanishVoice(synth.getVoices());
    if (voice) utterance.voice = voice;
    utterance.lang = voice ? voice.lang : 'es-ES';

    utterance.onend = function () { state = 'idle'; setLabel(state); };
    utterance.onerror = function () { state = 'idle'; setLabel(state); };

    synth.cancel();
    synth.speak(utterance);
    state = 'playing';
    setLabel(state);
  }

  function createButton() {
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
    btn.addEventListener('click', toggleSpeech);

    var searchEl = document.querySelector('.md-header__source') || document.querySelector('.md-search');
    header.insertBefore(btn, searchEl || null);
  }

  document.addEventListener('DOMContentLoaded', function () {
    createButton();
    window.addEventListener('beforeunload', stopSpeech);
  });
})();
