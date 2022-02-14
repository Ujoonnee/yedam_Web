class Member {
    constructor(first_name, last_name, age, score) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.score = score;
        this.fullName = last_name + ' ' + this.first_name;
        this.isAdult = age >= 20 ? '성인' : '청소년';
    }
}

const member1 = new Member('이박','김',15,80);
const member2 = new Member('정강','최',30,90);
const member3 = new Member('윤장','조',45,100);

const members = [member1, member2, member3];

let table = `
<table border="1" style="width: 300px; height: 200px; text-align: center; border-collapse: collapse;">
    <thead>
        <tr>
            <th>이름</th>
            <th>나이</th>
            <th>점수</th>
            <th>구분</th>
        </tr>
    </thead>
<tbody>`;

members.forEach((m) => { 
    table = table + `
    <tr>
        <td>${m.fullName}</td>
        <td>${m.age}</td>
        <td>${m.score}</td>
        <td>${m.isAdult}</td>
    </tr>`;
});


table = table + `
    </tbody>
</table>`; 

document.write(table);