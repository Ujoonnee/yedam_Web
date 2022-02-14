let sum2 = [], sum3 = [], sum6 = [], sumEtc = [];

let sum = 0;

while (true) {
    let temp = Math.floor(Math.random()*10 +1);
    // console.log(temp);
    if (temp%6 === 0) {
        sum6.push(temp);
        sum += temp;
    } else if (temp%2 === 0) {
        sum2.push(temp);
        sum += temp;
    } else if (temp%3 === 0) {
        sum3.push(temp);
        sum += temp;
    } else {
        sumEtc.push(temp);
        sum += temp;
    }
    
    
    
    if (sum >= 100) {
        break;
    }
}

console.log('2의 배수 : ' + sum2);
console.log('3의 배수 : ' + sum3);
console.log('6의 배수 : ' + sum6);
console.log('그 외의 값 : ' + sumEtc);
console.log('total : ' + sum);

