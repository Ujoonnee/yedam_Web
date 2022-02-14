const point = [6,2,2,5,0,3,5,1,4,6,2,4];

function getMonthDay(month) {
    return point[month-1];
}

function getLastDate(month) {
    
    let lastDate = 0;
    switch (month) {
        case 2:
            lastDate = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            lastDate = 30;
            break;
        default:
            lastDate = 31;
    }
    return lastDate;
}
