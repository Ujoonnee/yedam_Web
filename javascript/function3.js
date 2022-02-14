const member1 = {
    mem_id: 1001,
    first_name: '준우',
    last_name: '조',
    math_score: 80,
    eng_score: 90
}
const member2 = {
    mem_id: 1002,
    first_name: '홍제',
    last_name: '이',
    math_score: 82,
    eng_score: 88
}
const member3 = {
    mem_id: 1003,
    first_name: '이경',
    last_name: '박',
    math_score: 85,
    eng_score: 89
}

const members = [member1,member2,member3];

function makeTr(){
    let tr = '';
    for (let i = 0; i < members.length; i++) {
        tr += `

        <tr>
            <td>${members[i].mem_id}</td>
            <td>${members[i].last_name + members[i].first_name}</td>
            <td>${members[i].eng_score}</td>
            <td>${members[i].math_score}</td>
            <td><button>삭제</button></td>
        </tr>`;
    }
    return tr;
}

document.write(`
    <table border="1" style="text-align: center;">
        <thead>
            <tr>
                <th>순번</th>
                <th>이름</th>
                <th>영어점수</th>
                <th>수학점수</th>
                <th>기능</th>
            </tr>
        </thead>
        <tbody>
            ${makeTr()}
        </tbody>
    </table>`);