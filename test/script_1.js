let hellow = 'world';
console.log(hellow);

function privet() {
    let numone = 2;
    let numtwo = 3;
    let summa = numone + numtwo;
    console.log(summa);
}
privet()

//функции

function showMessege() {
    console.log('сообщение');
}
showMessege();

//////////////////////////////////

function getSummX() {
    let numOne, numTwo;
    function getNumOne() {
        numOne = 1;
    }
    function getNumTwo() {
        numTwo = 2;
    }
    getNumOne();
    getNumTwo();
    let numSumm = numOne + numTwo;
    console.log(numSumm);
}
getSummX();

///////////////////////////////////////////

let message;
function showMessegeOne() {
    message = "сообщение";
}
showMessegeOne();
console.log(message);

/////////////////////////////////////////////

function calcSumm(numOne, numTwo) {
    console.log(`переменная numOne:${numOne}`);
    console.log(`переменная numTwo:${numTwo}`);
    let numSumm= numOne + numTwo;
    console.log(`сумма:${numSumm}`);
}
calcSumm(5, 5);

/////////////////////////////////////////////
function calcSumm(numOne, numTwo) {
    let numSumm = numOne + numTwo;
    return numSumm; //остановка и возврат,код дальше не выполняется
}
let funcRezult = calcSumm(1, 2);
console.log(`сумма:${funcRezult}`);

////////////////////////////////////////////////

function getSumm(numOne, numTwo) {
    let numSumm = calcSumm(numOne, numTwo); //рекурсия-функ.вызывает сама себя
    console.log(numSumm);
}
function calcSumm(numOne, numTwo) {
    return numOne + numTwo;
}
getSumm(5, 5);

////////////////////////////////////////

function calcSummY(numOneY, numTwoY) {
    if (numTwoY === 1) {
        return numOneY;
    }
    else {
        return numOneY * calcSummY(numOneY, numTwoY - 1);
    }
}
console.log(calcSummY(2, 3));

///////////////////////////////////////////////

let showMassageX = function () { //функциональное выражение
    console.log('привет');
}
showMassageX();

let getMessage = (text, name) => text + ', ' + name + '!';  //однострочная стрелочная функция
console.log(getMessage('привет', 'вася'));

let getMessageO = (text, name) => {        //многострочная стрелочная функция
    let message = text + ', ' + name + '!';
    return message;
};
console.log(getMessage('привет', 'вася'));

////////////////////////////////////////////////////////////

/*обьеденение функций*/

//соеденение строк
function createMessage(text, name) {
    return `${text}, ${name}`;
}
//вывод в консоль
function showMassageU(message) {
    console.log(message);
}
//обьединяющая функция которая вызывает обе функции
function initMessage(text, name) {
    showMassageU(createMessage(text, name));
}
initMessage('привет', 'ученик');

//////////////////////////////////////////////////////////

function showMassageI(text, name) {
    console.log(`${text}, ${name}!`);
}
setTimeout(showMassageI, 2000, 'привет', 'саша'); //вызов функции один раз через определённое время
/*или setInterval - регулярно вызывает функцию через опредилённый интервал*/


function showNumber(num) {
    console.log(num);
    if (num < 5) {
        setTimeout(showNumber, 1000, ++num); //выполнение функции до 5 и остановка
    }
}
setTimeout(showNumber, 1000, 1);

function showNumberE(num) {
    console.log(num);
    let timeId = setTimeout(showNumberE, 4000, ++num );
    if (num === 6) {
        clearTimeout(timeId); //останавливаем работу setTimeout при определённом условии 
    }
}
setTimeout(showNumberE, 3000, 1);

////////////////////////////////////////////////////////

