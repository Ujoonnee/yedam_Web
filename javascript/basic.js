var age = 10;
age = 12.3;
var fullName = '홍길동';
var marriage = false;
console.log(typeof hobby); // undefined

var hobby;
hobby = null;
hobby = 'reading';
hobby = 200;
var hobby = false;
hobby = '';

// fullName = prompt('이름을 입력하세요 : ');
// age = prompt('나이를 입력하세요 : ');

console.log(typeof hobby); // object

console.log('이름은 ' + fullName + ', 나이는 ' + age);

if (hobby) {
    console.log('취미는 ' + hobby);
}

var sum = 100 - 90;
if (sum) {
    console.log('sum : ' + sum)
}

for (let i = 0; i < 10; i++) {
    sum += i;
    console.log(sum + ' ' + i)
}
console.log('sum : ' + sum)

fullName = ['홍길동', '김민수', '박이현', '최성식'];
let translateName = '';
for (let i = 0; i < fullName.length; i++) {
    translateName += ' ' + fullName[i];
}
console.log(translateName);

translateName = '';
for (let name of fullName) {
    translateName += ' ' + name
}
console.log(translateName);

// object
const person = {
    first_name: 'kildong',
    last_name: 'Hong',
    age: [15, 20, 25, 30],
    phone: '010-1111-2222'
}
let field = 'phone';

person.first_name = '길동';
person['last_name'] = '홍';
person[field] = '010-1234-5678';

console.log('이름 : ' + person.first_name);
console.log('나이는 ' + person['age']);
console.log('연락처: ' + person[field]);

document.write('<h2>홍길동의 정보</h2>');
document.write('<ul>')
document.write('<li>이름 : ' + person.first_name + '</li>');
document.write('<li>나이는 ' + person['age'] + '</li>');
document.write('<li>연락처 : ' + person[field] + '</li>');
document.write('</ul>')

document.write('<button onclick="alert(person.first_name)">클릭</button>')