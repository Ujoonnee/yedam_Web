let sum = 0;
for (let i = 0; i < 10; i++) {
    sum += i;
}
console.log('sum : ' + sum);


console.clear();

let cnt = 0;
// while (cnt < 10) {
//     let randomVal = Math.floor(Math.random() * 6);
//     console.log(randomVal)
//     if (randomVal === 4) {
//         break;
//     }

//     cnt++;
// }

// isTrue = true;
// cnt = 1;
// do {
//     if (Math.floor(Math.random() * 6) === 4) {
//         isTrue = false;
//     }
//     console.log(cnt);
//     cnt++;
// } while (isTrue);


// sum = 0;
// cnt = 1;
// while (true) {
//     let rNum = Math.floor(Math.random()*10+1);
    
//     console.log(cnt + '회');
//     console.log('rNum : ' + rNum);
    
//     sum += rNum;
//     cnt++;
//     if (rNum === 5) {
//         console.log('ends with : ' + sum);
//         break;
//     }
// }

sum = 0;
while(true) {
    let input = prompt('input');
    sum += parseInt(input);
    if (input == 0) {
        console.log('sum : ' + sum);
        break;
    }
    console.log('input : ' + input);
}