alert('hello world from inside this testing folder!');
const script = window.document.createElement('script');
const first = window.document.getElementsByTagName('script')[0];
script.type = 'module';
script.src = 'http://127.0.0.1:8080/test2.js';
script.defer = true;
script.crossOrigin = 'anonymous';
// Insert our script next to the frist script element
first.parentNode.insertBefore(script, first);
