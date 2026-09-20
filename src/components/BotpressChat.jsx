import { useEffect } from 'react';

const BOTPRESS_INJECT_SRC = 'https://cdn.botpress.cloud/webchat/v3.7/inject.js';
const BOTPRESS_CONFIG_SRC = 'https://files.bpcontent.cloud/2026/09/20/16/20260920160549-J734G0BV.js';
const BOTPRESS_INJECT_ID = 'botpress-webchat-inject';
const BOTPRESS_CONFIG_ID = 'botpress-webchat-config';

function appendScript({ id, src, defer = false }) {
  const existingScript = document.getElementById(id);
  if (existingScript) return existingScript;

  const script = document.createElement('script');
  script.id = id;
  script.src = src;
  script.defer = defer;
  document.head.appendChild(script);
  return script;
}

function loadBotpressConfig() {
  appendScript({ id: BOTPRESS_CONFIG_ID, src: BOTPRESS_CONFIG_SRC, defer: true });
}

export default function BotpressChat() {
  useEffect(() => {
    const injectScript = document.getElementById(BOTPRESS_INJECT_ID);
    if (injectScript) {
      if (injectScript.dataset.loaded === 'true') {
        loadBotpressConfig();
      } else {
        injectScript.addEventListener('load', loadBotpressConfig, { once: true });
      }
      return;
    }

    const newInjectScript = appendScript({ id: BOTPRESS_INJECT_ID, src: BOTPRESS_INJECT_SRC });
    newInjectScript.addEventListener('load', () => {
      newInjectScript.dataset.loaded = 'true';
      loadBotpressConfig();
    }, { once: true });
  }, []);

  return null;
}
