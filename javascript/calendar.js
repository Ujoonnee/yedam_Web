document.write('<div class="container">');

const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];


days.forEach(element => {
    document.write(`<div class="day"><span>${element}</span></div>`)
});


let startday = 7;
for (let i = 0; i < getMonthDay(4); i++) {
    document.write(`<div class="date">&nbsp;</div>`)
}

for (let i = 1; i <= getLastDate(4); i++) {
    document.write(`<div class="date"><span>${i}</span></div>`)
}

document.write('</div>');