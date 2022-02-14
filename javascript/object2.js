// 내장 객체
let nuberArray = new Array();
let str = new String('abc');
let num = new Number(1);
let isAdult = new Boolean(true);
let today = new Date();

// 문자열 관련 메소드
str = 'Hello';
console.log(str.length);

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// charAt(indexValue)
console.log(str.charAt(4));
for (let i = 0; i < str.length; i++) {
    console.log(str.charAt[i]);
}

// concat
let newStr = str.concat(' world')
console.log(newStr);

// indexOf
let ind = newStr.indexOf('w');
console.log(ind);

let names = '홍길동, 김민수, 박시현, 최우진';
if (names.indexOf('김민수') != -1) {
    console.log('김민수를 포함하고 있습니다.');
}

if (names.includes('김민수')) {
    console.log('김민수를 포함하고 있습니다.')
}

// replace
let newNames = names.replace('김민수', '박민수');
console.log(newNames);

// substring(start, end)
console.log(names.substring(5,8));
console.log(names.substring(10));

// slice(start, end)
console.log(names.slice(5,8));
console.log(names.slice(10));
console.log(names.slice(-8, -5));

let jumin = '000101-3456789';
let jumin2 = '000102-4456789';
let jumin3 = '0001024456789';


function checkGender(juminArg) {
    let newJumin = '';
    if (juminArg.length = 14) {
        newJumin = juminArg.replace('-', '')
    }
    switch(newJumin.slice(-7,7)) {
        case '3':
            return 'male';
        case '4':
            return 'female';
        default:
            break;
    }
}

console.log(checkGender(jumin));
console.log(checkGender(jumin2));
console.log(checkGender(jumin3));
