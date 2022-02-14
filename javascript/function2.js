const members = ['이효림', '장예빈', '킹희철', '이웅재'];

function makeTr(i, name) {
    let tr = `
    <tr>
        <td>${i+1}</td>
        <td>${name}</td>
        <td><button>삭제</button></td>
    </tr>`;
    return tr;
}

function makeTrLoop(){
    let tags = '';
    for (let i = 0; i < members.length; i++) {
        tags += makeTr(i, members[i]);
    }
    return tags;
}

let str = `
<table border="1">
    <thead>
        <tr>
            <th>순번</th>
            <th>이름</th>
            <th>기능</th>
        </tr>
    </thead>
    <tbody>
        ${makeTrLoop()}
    </tbody>
</table>`;

document.write(str);