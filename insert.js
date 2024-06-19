let s=document.createElement('script');
s.type = 'text/javascript';
s.setAttribute('charset', 'UTF-8');
s.src=chrome.runtime.getURL('/main.js') + '?ver=' + Math.floor(Math.random() * 999999);
document.lastChild.appendChild(s);s.remove();