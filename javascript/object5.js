console.log(Math.round(.4));
console.log(Math.floor(3.7));
console.log(Math.ceil(3.1));
console.log(Math.abs(-10));
console.log(Math.max(10, 20, 100, 5));
console.log(Math.min(20, 40, -10, -20));
console.log(Math.pow(3, 3));

console.log(Math.PI);
console.log(Math.E);

let numbers = [30, 25, 12, 55, 37, 92];
let result = Math.max.apply(null, numbers);
console.log(result);

let people = [{
        fName: 'Hong',
        age: 20,
        score: 80
    },
    {
        fName: 'Hwang',
        age: 22,
        score: 85
    },
    {
        fName: 'choi',
        age: 23,
        score: 83
    }
];

function getMaxObject(args) {
    let max = args[0];
    
    for (let p of args) {
        max.score <= p.score ? max = p : '';
    }
    return max;
}
result = getMaxObject(people);
console.log(`최고점수자 : ${result.fName}, 점수 : ${result.score}`);