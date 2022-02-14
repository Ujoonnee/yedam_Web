const members = ['이효림', '장예빈', '킹희철', '이웅재'];
let table = '<table border="1">';
table = table + '<thead>';
table = table + '<tr>';
table = table + '<th>순번</th>';
table = table + '<th>이름</th>';
table = table + '<th>버튼</th>';
table = table + '</tr>';
table = table + '</thead>';
table = table + '<tbody>';
// for (let i = 0; i < members.length; i++ ){
//     table = table + '<tr>';
//     table = table + '<td>' + (i + 1) + '</td>';
//     table = table + '<td>' + members[i] + '</td>';
//     table = table + '</tr>';
// }

// let i = 1;
// for (let name of members) {
//     table = table + '<tr>';
//     table = table + '<td>' + i + '</td>';
//     table = table + '<td>' + name + '</td>';
//     table = table + '</tr>';
//     i++;
// }

let num = 0;
for (let member of members) {
    if (num % 2 == 0) {
        table = table + '<tr>';
    } else {
        table = table + '<tr style="background-color: yellow;">';
    }
    table = table + `<td>${++num}</td>`;
    table = table + `<td>${member}</td>`;
    table += '<td><button>삭제</button></td>';
    table = table + '</tr>';
    
}
table = table + '</tbody>';
table = table + '</table>';

document.write(table);