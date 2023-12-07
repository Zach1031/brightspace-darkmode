var elem = document.querySelector('d2l-expand-collapse-content');

console.log(elem);
var sRoot = elem.shadowRoot;
var style = document.createElement('style');
style.innerHTML = 'p{color: #FFFFFF;}';
sRoot.appendChild(style);
