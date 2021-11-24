let hellowWorld = 'privet';
let plus = 28 - 18 / 2;
let slova = 'sheva' + '2103';
let hey = 85 * 6; 
let heyHey = hey - 100;
let vau = plus + heyHey - hey;
let ogo = vau + ' ' + slova;

console.log(hellowWorld);
console.log(plus);
console.log(typeof plus);
console.log(slova);
console.log(typeof slova);
console.log(hey);
console.log(typeof hey);
console.log(heyHey);
console.log(vau);
console.log(typeof vau);
console.log(ogo);
console.log(typeof ogo);

let addUser = 5;
    addUser++;

console.log(addUser);

let userCounter = 0;
    ++userCounter;
let newUser = 2 * userCounter;
console.log(newUser);

console.log(9 > 8);
console.log(3 > 5);

console.log('привет' > 'приветствую');
console.log('03' == 3);

let userAge = 31;
console.log(userAge);
console.log(typeof userAge);
userAge = String(userAge);//меняем тип данных с числа на строку
console.log(userAge);
console.log(typeof userAge);

let userAge2 = "31";
console.log(userAge2);
console.log(typeof userAge2);
userAge2 = Number(userAge2);//меняем тип данных со строки на число
console.log(userAge2);
console.log(typeof userAge2);

let userName = '';
let userNickName = 'sheva2103'
let user = userName || userNickName || 'пусто';
console.log(user);

let messege = 'привет';
if (8 > 7) {
    console.log(messege);
}

let messegeOne = 4; //меняем на другую цыфру чтоб было false
let messegeTwo = 4;
if (messegeOne === messegeTwo) {
    console.log(messege);
} else {
    console.log('не выполняется')
}

let messegeEnd = 8 < 7 ? "верно" : "неверно";//сокращёная запись
console.log(messegeEnd);

let qwe = "5";
let qwerty = "3";
console.log(qwe + qwerty);
console.log(+qwe + +qwerty);//преобразовуется в число

let name;
console.log(name ?? "без имени");

//циклы

let num = 0;
while (num < 5) { //выполняется пока значение будет true
    console.log(num);
    num++;
}

for (let num = 0; num < 5; num++) {
    console.log(num);
}

let numOne = 0;
for (; numOne < 5; numOne++) {
    console.log(numOne);
    if (numOne == 2) break/*continue*/; //останавливает цикл на значении 2,continue пропускает 2
}
console.log(`Работа окончена, num = ${numOne}`);

//функции

function showMassage() {
    console.log('показать сообщение');
}
showMassage();//выводим сообщение в консоль

function getSumm() {
    let numOne, numTwo;

    function getNumOne() {
        numOne = 1;
    }
    function getNumTwo() {
        numTwo = 2;
    }
    getNumOne();                   //вложеность функций
    getNumTwo();
    let numSumm = numOne + numTwo;
    console.log(numSumm);
}
getSumm();

function calcSumm(numOne, numTwo) {
    console.log(`переменная numOne:${numOne}`);
    console.log(`переменная numOne:${numTwo}`);
    let numSumm = numOne + numTwo;
    console.log(`сумма:${numSumm}`);
}
calcSumm(1, 2);//передаём значение переменой в функцию

function calcSumm(numOne, numTwo) {
    if (numTwo === 1) {
        return numOne;
    }
    else {
        return numOne * calcSumm(numOne, numTwo - 1);
    }
}
console.log(calcSumm(2, 3));