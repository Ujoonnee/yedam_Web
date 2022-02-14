// document.write('<h1 ondblclick="h1Click(event)">Hello</h1>')
// document.write('<p>nice</p>')

// function h1Click(e) {
//     console.log('h1Click');
//     console.log(typeof e);
// }

const img = document.getElementsByTagName('img');
const switchButton = document.getElementById('bulbSwitch');

switchButton.onmouseover = onOff;

function onOff() {
    img[0].src === 'https://www.w3schools.com/js/pic_bulboff.gif'
    ? img[0].src = 'https://www.w3schools.com/js/pic_bulbon.gif'
    : img[0].src = 'https://www.w3schools.com/js/pic_bulboff.gif';
}



const colorBtn = document.getElementsByClassName('color');

function changeColor(e) {
    const show = document.getElementById('show');
    show.style.backgroundColor = e.target.value;
}

for (let i = 0; i < colorBtn.length; i++) {
    // colorBtn[i].onmouseover = changeColor;
    colorBtn[i].addEventListener('click', changeColor);
}