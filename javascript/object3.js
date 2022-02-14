let arr = new Array();
arr[0] = 1;
arr[1] = 10;
arr[3] = 100;

delete arr[0];
arr[0] = 12;
arr[arr.length] = 50;
arr[arr.length] = 60;
arr[arr.length] = 70;

console.log(arr);
console.log(arr.length);

// push, pop
let newArr = [];
newArr.push(10);
newArr.push(100);
newArr.push(200);

newArr.pop();
newArr.pop();

// unshift, shift
newArr.unshift(100);
newArr.unshift(1000);


newArr.shift();
newArr.shift();

// splice
newArr.splice(0, 1, '10', '20');
newArr.splice(0, 2, 30);

console.log(newArr);
console.log(newArr.length);

let names = ['황우석', '이영식', '정영택', '홍길동'];
names.splice(1, 1, '김영식');
names.splice(1, 1, '이창호');
console.log(names);

// concat
let numbers = [1, 2, 3, 4];
let newNum = numbers.concat(10, 20);
console.log(newNum, typeof newNum);

console.log(newNum.indexOf(100));

// join
let newStr = newNum.join(',');
console.log(newStr, typeof newStr);
0

console.clear();
// every
// newNum.every((a,b,c) => {console.log(a,b,c);});
let all = newNum.every(function (val, ind, arr) {
    console.log(val, ind, arr);
    return val > 2;
});
console.log(all);

console.clear();
// forEach
let sum = 0;
newNum.forEach(callBackSum);

function callBackSum(val, ind, arr) {
    console.log(val, ind, arr);
    if (ind % 2 == 0) {
        sum += val;
    }
}

console.log(`합계 : ${sum}`);

console.clear();
// filter
console.log(newNum.filter((val, ind, arr) => val >= 10));

names = ['user1', 'user2', 'guest1', 'guest2', 'admin'];

let userNames = [];
for (let i = 0; i < names.length; i++) {
    if (names[i].indexOf('user') != -1) {
        userNames.push(names[i]);
    }
}
console.log(userNames);

userNames = [];
for (let name of names) {
    if (name.indexOf('user') != -1) {
        userNames.push(name);
    }
}
console.log(userNames);

userNames = [];
names.forEach((val, ind, arr) => {
    if (val.indexOf('user') != -1) {
        userNames.push(val);
    }
});
console.log(userNames);

userNames = names.filter(val => val.includes('user'));
console.log(userNames);


console.clear();
// arrow function
function oper(first = 0, last = 0, operFnc) {
    return operFnc(first, last);
}

let result = oper(10, 20, (a, b) => a / b);
console.log(result);

function sum1(a, b) {
    return a + b;
}

function multi(a, b) {
    return a * b;
}

// sort
let numbers2 = [1, 4, 3, 7, 2, 11];
let cnt = 0;
numbers2.sort((num1, num2) => {
    cnt++;
    return num1 - num2;
});
// numbers2.reverse();
console.log('cnt', cnt);
console.log(numbers2);

let fruits = ['cherry', 'berry', 'apple', 'banana'];
fruits.sort();
console.log(fruits);

let sortNum = [1, 3, 2, 9, 4];
for (let j = 0; j < sortNum.length - 1; j++) {
    for (let i = 0; i < sortNum.length - 1; i++) {
        if (sortNum[i] > sortNum[i + 1]) {
            let temp = sortNum[i + 1];
            sortNum[i + 1] = sortNum[i];
            sortNum[i] = temp;
        }
    }
}
console.log(sortNum);


console.clear();
// slice
let newSortNum = sortNum.slice(1,3);
console.log(newSortNum);

fruits.slice(1,3);

const array1 = ['a','b','c','d','e'];
console.log(array1.copyWithin(3,1,5));