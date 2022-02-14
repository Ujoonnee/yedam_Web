let title = document.getElementsByTagName('title');
console.log(title);
document.addEventListener('DOMContentLoaded', () => {
    let show = document.getElementById('show');
    console.log(show);
    
    let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    let strArr = text.split(' ');
    console.log(strArr);
    strArr.forEach(val => {
        let li = document.createElement('li');
        let textN = document.createTextNode(val);
        li.appendChild(textN);

        list.appendChild(li);
    });

    let listElements = document.getElementsByTagName('li');
    let newStrArr = [];
    for (const item of listElements) {
        console.log(item.innerText);
        newStrArr.push(item.innerText);
    }
    console.log(newStrArr);
});