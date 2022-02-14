let n1 = 10;
n1 = 'ten';

const n2 = 20;
// n2 = 30; // 상수는 재할당 불가



function makeHead() {
    // title의 갯수만큼 th 생성
    const titles = ['이름','나이','성적','삭제'];
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    for (const title of titles) {
        let th = document.createElement('th');
        let text = document.createTextNode(title);
        th.appendChild(text);
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    return thead;
}

function makeBody(dataArr) {
    let tbody = document.createElement('tbody');

    members.forEach(val => {
        let tr = makeRow(val);
        tbody.appendChild(tr);
    });

    return tbody;
}

// tr 생성
function makeRow(obj) {
    let tr = document.createElement('tr');
        
    for (let property in obj) {
        let td = document.createElement('td');
        let text = document.createTextNode(obj[property]);
        td.appendChild(text);
        tr.appendChild(td);
    }

    // 버튼 추가
    let td = document.createElement('td');
    let btn = document.createElement('input');
    btn.type = 'button'
    btn.value = '삭제';
    
    td.appendChild(btn);
    tr.appendChild(td);

    return tr;
}


const members = [
    {fname:'홍길동',age:20,score:80},
    {fname:'김만수',age:27,score:83},
    {fname:'최성식',age:31,score:77},
    {fname:'황인우',age:23,score:89}
];


let table = document.createElement('table');
table.setAttribute('border', '1');
table.appendChild(makeHead());
table.appendChild(makeBody(members));

console.log(table);
document.getElementById('show').appendChild(table);

// 신규 추가
let newObj = {fname:'김익수',age:33,score:77}
let newTr = makeRow(newObj);
document.getElementsByTagName('tbody')[0].appendChild(newTr);

let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let score = document.getElementById('score').value;

    let newObj = {fname:name,age:age,score:score}
    let newTr = makeRow(newObj);
    document.getElementsByTagName('tbody')[0].appendChild(newTr);

    // 추가 후 값 초기화
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('score').value = '';
    document.getElementById('name').focus();
})