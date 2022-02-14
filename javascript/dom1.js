console.log(document);
let show = document.getElementById('show');
console.log(show);
let head = show.getElementsByTagName('h3');
console.log(head);

let pTag = document.createElement('p');
pTag.setAttribute('id', 'hello');
pTag.setAttribute('class', 'world');

let text = document.createTextNode('Hello, World!');
pTag.appendChild(text);
console.log(pTag);
// show.appendChild(pTag);
document.body.appendChild(pTag);

let liTag = document.createElement('li');
text = document.createTextNode('이우준');
liTag.appendChild(text);
document.getElementById('list').appendChild(liTag);

console.log(document.getElementById('list').childNodes);