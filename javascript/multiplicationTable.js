document.write('<table>');
document.write('<tbody>');

for (let i = 1; i < 10; i++) {
    document.write(`<tr>
                    <td>2</td>    
                        <td>X</td>    
                        <td>${i}</td>
                        <td>=</td>   
                        <td>${2 * i}</td>
                    </tr>`);
}

document.write('</tbody>');
document.write('</table>');
document.write('<br>');

// for(let i = 2; i < 10; i++) {
//     document.write('<div>');
//     for (let j = 1; j < 10; j++) {
//         document.write(`
//         <p>${i} X ${j} = ${i * j}</p>`);
//     }
//     document.write('</div>');
// }

const table_num = [2,3,4,5,6,7,8,9];
const multiply_num = [1,2,3,4,5,6,7,8,9];

for (const num1 of table_num) {
    document.write('<div>');
    for (const num2 of multiply_num) {
        document.write(`<p>${num1} X ${num2} = ${num1 * num2}</p>`);
    }
    document.write('</div>');
}




























// class Man{
//     constructor(a, b){
//         this.a = a;
//         this.b = b;
//     }
// }

// let man1 = new Man('kim', 'punch');
// let man2 = new Man('lee', 'punch2');
// console.log(man1)
// console.log(man2)