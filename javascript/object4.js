let today = new Date('2022-10-05T15:00:00');

today.setDate(4);
today.setMonth(12);
today.setHours(16);
today.setMinutes(30);
today.setSeconds(30);

console.log(today.toDateString());
console.log(today.toTimeString());

console.log(today.toString());

console.clear();
function printNow() {
    today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() +1;
    let date = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    let now = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초 ${ampm}`;
    console.log(now);
}

// printNow();

setInterval(printNow, 1000);