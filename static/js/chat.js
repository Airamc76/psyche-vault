// Chat con Groq para consultar/afinar el contenido de la pagina actual.
// ponytail: client-side puro, sin backend. La API key del usuario se guarda
// solo en localStorage de su propio navegador, nunca se commitea al repo.
(function () {
  'use strict';

  var STORAGE_KEY = 'psyche-vault-groq-key';
  var STORAGE_MODEL = 'psyche-vault-groq-model';
  var DEFAULT_MODEL = 'llama-3.3-70b-versatile';
  var MAX_CONTEXT_CHARS = 12000;
  var API_URL = 'https://api.groq.com/openai/v1/chat/completions';

  var messages = []; // {role, content}
  var panelOpen = false;

  function injectStyles() {
    var css = [
      '#pv-chat-fab{position:fixed;bottom:24px;right:24px;width:56px;height:56px;',
      'border-radius:50%;background:#3f51b5;color:#fff;border:none;cursor:pointer;',
      'box-shadow:0 2px 8px rgba(0,0,0,.3);z-index:1000;display:flex;',
      'align-items:center;justify-content:center;}',
      '#pv-chat-panel{position:fixed;bottom:92px;right:24px;width:360px;max-width:90vw;',
      'height:480px;max-height:70vh;background:var(--md-default-bg-color,#fff);',
      'color:var(--md-default-fg-color,#000);border-radius:8px;',
      'box-shadow:0 4px 16px rgba(0,0,0,.3);z-index:1000;display:none;',
      'flex-direction:column;overflow:hidden;font-size:.75rem;}',
      '#pv-chat-panel.open{display:flex;}',
      '#pv-chat-header{padding:.6rem .8rem;background:#3f51b5;color:#fff;',
      'display:flex;justify-content:space-between;align-items:center;}',
      '#pv-chat-messages{flex:1;overflow-y:auto;padding:.6rem;}',
      '.pv-chat-msg{margin-bottom:.5rem;padding:.4rem .6rem;border-radius:6px;',
      'white-space:pre-wrap;}',
      '.pv-chat-msg.user{background:#e8eaf6;margin-left:1.5rem;}',
      '.pv-chat-msg.assistant{background:#f5f5f5;margin-right:1.5rem;}',
      '.pv-chat-msg.error{background:#ffebee;color:#c62828;}',
      '#pv-chat-input-row{display:flex;border-top:1px solid #ddd;padding:.4rem;}',
      '#pv-chat-input{flex:1;border:1px solid #ccc;border-radius:4px;padding:.3rem .5rem;',
      'font-size:.75rem;}',
      '#pv-chat-send{margin-left:.4rem;background:#3f51b5;color:#fff;border:none;',
      'border-radius:4px;padding:.3rem .7rem;cursor:pointer;}',
      '#pv-chat-settings{padding:.8rem;}',
      '#pv-chat-settings input{width:100%;box-sizing:border-box;margin-bottom:.5rem;',
      'padding:.3rem .5rem;border:1px solid #ccc;border-radius:4px;font-size:.75rem;}',
      '#pv-chat-settings a{color:#3f51b5;}',
      '.pv-chat-icon-btn{background:none;border:none;color:#fff;cursor:pointer;',
      'font-size:1rem;}'
    ].join('');
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  function getPageContext() {
    var content = document.querySelector('.md-content__inner');
    var title = document.title || '';
    var text = content ? content.innerText : '';
    if (text.length > MAX_CONTEXT_CHARS) text = text.slice(0, MAX_CONTEXT_CHARS);
    return { title: title, text: text };
  }

  function getKey() { return localStorage.getItem(STORAGE_KEY) || ''; }
  function setKey(k) { localStorage.setItem(STORAGE_KEY, k); }
  function getModel() { return localStorage.getItem(STORAGE_MODEL) || DEFAULT_MODEL; }
  function setModel(m) { localStorage.setItem(STORAGE_MODEL, m || DEFAULT_MODEL); }

  function renderMessages() {
    var box = document.getElementById('pv-chat-messages');
    if (!box) return;
    box.innerHTML = '';
    messages.forEach(function (m) {
      if (m.role === 'system') return;
      var div = document.createElement('div');
      div.className = 'pv-chat-msg ' + m.role;
      div.textContent = m.content;
      box.appendChild(div);
    });
    box.scrollTop = box.scrollHeight;
  }

  function showError(text) {
    var box = document.getElementById('pv-chat-messages');
    if (!box) return;
    var div = document.createElement('div');
    div.className = 'pv-chat-msg error';
    div.textContent = text;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
  }

  function renderSettings() {
    var panel = document.getElementById('pv-chat-panel');
    panel.querySelector('.pv-chat-body').innerHTML =
      '<div id="pv-chat-settings">' +
      '<p>Pegá tu API key de Groq. Se guarda solo en este navegador, nunca se sube a ningún lado.</p>' +
      '<input id="pv-chat-key-input" type="password" placeholder="gsk_..." value="' + getKey().replace(/"/g, '&quot;') + '">' +
      '<p>Modelo (por defecto ' + DEFAULT_MODEL + '):</p>' +
      '<input id="pv-chat-model-input" type="text" placeholder="' + DEFAULT_MODEL + '" value="' + getModel().replace(/"/g, '&quot;') + '">' +
      '<p><a href="https://console.groq.com/keys" target="_blank" rel="noopener">Conseguir una key en console.groq.com</a></p>' +
      '<button id="pv-chat-save" class="pv-chat-icon-btn" style="background:#3f51b5;color:#fff;padding:.4rem .8rem;border-radius:4px;">Guardar</button>' +
      '</div>';
    document.getElementById('pv-chat-save').addEventListener('click', function () {
      var k = document.getElementById('pv-chat-key-input').value.trim();
      var m = document.getElementById('pv-chat-model-input').value.trim();
      setKey(k);
      setModel(m);
      if (k) renderChat();
    });
  }

  function renderChat() {
    var panel = document.getElementById('pv-chat-panel');
    panel.querySelector('.pv-chat-body').innerHTML =
      '<div id="pv-chat-messages"></div>' +
      '<div id="pv-chat-input-row">' +
      '<input id="pv-chat-input" type="text" placeholder="Preguntá algo sobre esta página...">' +
      '<button id="pv-chat-send">Enviar</button>' +
      '</div>';

    var ctx = getPageContext();
    messages = [{
      role: 'system',
      content: 'El usuario está leyendo esta página de un repositorio de estudio de psicología. ' +
        'Título: ' + ctx.title + '. Contenido:\n' + ctx.text + '\n\n' +
        'Ayudalo a entender el material, responder sus preguntas o afinar su comprensión. Respondé en español.'
    }];
    renderMessages();

    document.getElementById('pv-chat-send').addEventListener('click', sendMessage);
    document.getElementById('pv-chat-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') sendMessage();
    });
  }

  function sendMessage() {
    var input = document.getElementById('pv-chat-input');
    var text = input.value.trim();
    if (!text) return;
    input.value = '';
    messages.push({ role: 'user', content: text });
    renderMessages();
    callGroq();
  }

  function callGroq() {
    var key = getKey();
    if (!key) { showError('Falta configurar tu API key de Groq.'); return; }

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + key
      },
      body: JSON.stringify({ model: getModel(), messages: messages })
    })
      .then(function (r) { return r.json().then(function (data) { return { ok: r.ok, data: data }; }); })
      .then(function (result) {
        if (!result.ok) {
          var msg = (result.data && result.data.error && result.data.error.message) || 'Error desconocido de la API de Groq.';
          showError(msg);
          return;
        }
        var reply = result.data.choices && result.data.choices[0] && result.data.choices[0].message && result.data.choices[0].message.content;
        messages.push({ role: 'assistant', content: reply || '(sin respuesta)' });
        renderMessages();
      })
      .catch(function (e) {
        showError('Error de red: ' + e.message);
      });
  }

  function togglePanel() {
    var panel = document.getElementById('pv-chat-panel');
    panelOpen = !panelOpen;
    panel.classList.toggle('open', panelOpen);
    if (panelOpen) {
      if (getKey()) renderChat();
      else renderSettings();
    }
  }

  function createWidget() {
    if (document.getElementById('pv-chat-fab')) return;
    injectStyles();

    var fab = document.createElement('button');
    fab.id = 'pv-chat-fab';
    fab.title = 'Consultar sobre esta página';
    fab.innerHTML = '<svg viewBox="0 0 24 24" width="26" height="26"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>';
    document.body.appendChild(fab);

    var panel = document.createElement('div');
    panel.id = 'pv-chat-panel';
    panel.innerHTML =
      '<div id="pv-chat-header"><span>Consultá sobre esta página</span>' +
      '<span>' +
      '<button id="pv-chat-settings-btn" class="pv-chat-icon-btn" title="Configuración">&#9881;</button> ' +
      '<button id="pv-chat-close" class="pv-chat-icon-btn" title="Cerrar">&times;</button>' +
      '</span></div>' +
      '<div class="pv-chat-body"></div>';
    document.body.appendChild(panel);

    fab.addEventListener('click', togglePanel);
    panel.querySelector('#pv-chat-close').addEventListener('click', togglePanel);
    panel.querySelector('#pv-chat-settings-btn').addEventListener('click', renderSettings);
  }

  document.addEventListener('DOMContentLoaded', createWidget);
})();
