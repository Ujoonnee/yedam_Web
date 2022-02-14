let str = 'hello';
let age = 27;
str = "I'm 29\nMy name is hhh";
console.log(str);

str = `I'm 29
My name is hhh`;
console.log(str);

str = `I'm ${age}
My name is hhh`;
console.log(str);

const members = ['이효림', '장예빈', '윤희철 더 프론트킹', '이웅재'];

let tag = `<ul>`
for (let member of members) {
    tag += `<li>이름은 ${member} 입니다.</li>`;
}
tag += `</ul>`

document.write(tag);

