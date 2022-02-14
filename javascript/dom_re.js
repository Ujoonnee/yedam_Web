// 미완성
// DOM : Document Object Model

console.dir(document.getElementById('name'));
console.log(document.getElementsByTagName('input'));

let name = document.getElementsByTagName('input')[0].value;
console.log(name);
document.getElementsByTagName('input')[0].value = 'none';

document.getElementById('btn').addEventListener('click', () =>  {
    name = document.getElementsByTagName('input')[0].value;
    let age = document.getElementsByTagName(input)[1].value;
    let score = document.getElementsByTagName(input)[2].value;

    if(name == '' || age == '' || score == '') {
        alert('필수값을 입력하세요.')
        return;
    }

    let li = document.createElement('li');
    li.innerText = name + ' ' + age + ' ' + score;

    document.getElementById('list').appendChild(li);

    document.getElementsByTagName('input')[0].value = '';
    document.getElementsByTagName(input)[1].value = '';
    document.getElementsByTagName(input)[2].value = '';
});

const members = [
    {fname:'홍길동',age:20,score:80},
    {fname:'김만수',age:27,score:83},
    {fname:'최성식',age:31,score:77},
    {fname:'황인우',age:23,score:89}
];

document.querySelector('#mod').addEventListener('click', function() {
    let keyName = document.querySelector('#name').value;
    let modTr = document.getElementById(keyName);
    modTr.childNodes[1].innerText = document.getElementById('age').value;
    modTr.childNodes[2].innerText = document.getElementById('score').value;


})

// let field = 'score';
// console.log(members[0].fname);
// console.log(members[1]['age']);
// console.log(members[2][field]);

for(let member of members) {
    for(let field in member) {
        console.log(member[field]);
    }
}

let table = document.createElement('table');
table.setAttribute('border', '1');
table.setAttribute('id', 'table');
// table.setAttribute('class', 'main');
table.className = 'main';

let thead = document.createElement('thead');
table.appendChild(thead);

const titles =['이름','나이','점수','삭제'];
let tr = document.createElement('tr');
for(let title of titles) {
    let th = document.createElement('th');
    th.innerText = title;
    tr.appendChild(th);
}
thead.appendChild(tr);








let tbody = document.createElement('tbody');
for(let member of members) {
    tr = document.createElement('tr');
    tbody.appendChild(tr);
    for(let field in member) {
        let td = document.createElement('td');
        td.innerText = member[field];
        tr.appendChild(td);
    }
    td = document.createElement('td');
    let button = document.createElement('button');
    button.innerText = '삭제';
    button.addEventListener('click', function () {
        console.log(this)
        this.parentElement.parentElement.remove();
   });
    td.appendChild(button);

    button = document.createElement('button');
    button.innerText = '선택';
    button.addEventListener('click', function () {
        let selectedTR = this.parentNode.parentNode;
        let sname = selectedTR.querySelector('th:nth-child(1)').innerText;
        let sage = selectedTR.querySelector('th:nth-child(2)').innerText;
        let sscore = selectedTR.querySelector('th:nth-child(3)').innerText;

        document.getElementById('name').value = sname;
        document.getElementById('age').value = sage;
        document.getElementById('score').value = sscore;
    });
    td.appendChild(button);

   tr.appendChild(td);
}
table.appendChild(tbody);

document.getElementById('show').appendChild(table);