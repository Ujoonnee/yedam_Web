class Member {
    constructor(first_name, last_name, age, score) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.score = score;
        this.fullName = last_name + ' ' + first_name;
        this.isAdult = age >= 20;
    }
}

const member1 = new Member('Kildong', 'Hong', 20, 80);

console.log(member1.isAdult ? member1.fullName + '은 성인입니다.' : member1.fullName + '은 미성년입니다.');


// document.getElementById('hobby').value = 'mountain climbing';
console.log(document.getElementById('hobby').value);

document.getElementById('add').addEventListener('click', function () {
    let userInputVal = document.getElementById('hobby').value;
    console.log(userInputVal);
    document.write(`<h3>${userInputVal}</h3>`);
});

