const member1 = {
    first_name: '준우',
    last_name: '조',
    math_score: 80,
    eng_score: 90
}
const member2 = {
    first_name: '홍제',
    last_name: '이',
    math_score: 82,
    eng_score: 88
}
const member3 = {
    first_name: '이경',
    last_name: '박',
    math_score: 85,
    eng_score: 89
}

const members = [member1,member2,member3];

// 두번째 멤버의 이름을 변경 : 정성훈.
members[1].first_name = '성훈';
members[1].last_name = '정';

console.log(`첫번째 멤버의 이름 : ${members[0].first_name}`)
console.log(`두번째 멤버의 수학, 이름 : ${members[1].math_score}, ${members[1].first_name}, ${members[1].last_name}`)
console.log(`세번째 멤버의 이름과 성씨 : ${members[2].first_name}, ${members[2].last_name}`)

document.write('<table border="1">');
document.write('<thead><tr><th>이름</th><th>영어</th><th>수학</th></tr></thead>');
document.write('<tbody>')
members.forEach(member => {
    console.log(member, member['first_name'], member['last_name']);
    document.write('<tr>');
    document.write(`<td>${member['first_name']}-${member['last_name']}</td><td>${member['eng_score']}</td><td>${member['math_score']}</td>`);
    document.write('</tr>');
});
document.write('</tbody>')
document.write('</table>')
