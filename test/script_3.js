//числа и строки

let someBigNum = 1e6;   // 1 * 1000000=1000000
//let someBigNum = 1e-6;   // 1 / 1000000=0,000001
console.log(someBigNum);

let numOne = Math.floor(5.8);  //округление в меньшую сторону 
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);
console.log(numOne);
console.log(numTwo);
console.log(numThree);

/*let numOne = Math.ceil(5.8);  //округление в большую сторону 
let numTwo = Math.ceil(2.2);
let numThree = Math.ceil(-2.2);
console.log(numOne);
console.log(numTwo);
console.log(numThree);
let numOne = Math.round(5.8);  //округление до ближайшего целого 
let numTwo = Math.round(2.2);
let numThree = Math.round(-2.2);
console.log(numOne);
console.log(numTwo);
console.log(numThree);*/
let numQ = Math.round(5.845 * 10) / 10; //округление до десятых
console.log(numQ);

let numW = 5.845;
console.log(numW.toFixed(1)); //1 - сколько цыфр будет после запятой(получаем строку)
console.log(+/*или Number()*/numW.toFixed(1)); // переводим строку в число

// Проверка isFinite
/*
преобразует аргумент в число и возвращает true,
если оно является обычным числом
*/
console.log(isFinite("25")); // "25" -> 25 -> true
console.log(isFinite("Привет!")); // NaN -> false
console.log(isFinite(10 / 0)); // Infinity -> false
////////////////////////////////
//parseFloat и parseInt

let valueOne = parseInt("150.58px"); // parseInt получаем целое число из строки
console.log(valueOne);           //если первой будет буква то не стработает
console.log(typeof valueOne);

let valueTwo = parseFloat("150.58px"); // parseFloat получаем число с запятой
console.log(valueTwo);
console.log(typeof valueTwo);

////////////////////////////
console.log(Math.random()); //выводит рандомное число от 0 до 1

console.log(Math.max(5, 85, -49)); // возвращает макс число из перечисленных аргументов
console.log(Math.min(5, 85, -49)); // возвращает мин число

let num = -58;
console.log(Math.abs(num)); //возвращает абсолютное значение числа

console.log(Math.pow(5, 8)); // возвращает 5 в 8 степени
//////////////////////////////////////СТРОКИ

let yo = `привет  
я изучаю
js`
console.log(yo); //перенос строки с помощью обратных кавычек или перед словом можно ставить \n
let yoB = "привет\nя пытаюсь \n\t\tизучить js" // отступы
console.log(yoB);

let textQ = "Привет";
console.log(textQ.length); //свойство length - получаем длину строки
let firstSimbol = textQ[0]; //получаем первый символ в строке
console.log(firstSimbol);
console.log(textQ.toUpperCase()); // строка выводится большими буквами или toLowerCase маленькими
console.log(textQ.indexOf('рив')); // ищет в строке совпадение и выводит позицию
console.log(textQ.includes('рив')); // если совпадение есть то выводит тру
console.log(textQ.slice(1, 2)); // получаем часть строки с заданой позиции (-2, -1 слева направо). в скобках указано ночало и конец
console.log("А" > "Б"); //сравнение строк



let user = ['vanya', 'ishvan',]
console.log(user);
user.push('olya');
console.log(user);
user[1] = 'petya';
console.log(user);
let userNew = user.splice(0, 1);
console.log(userNew);
user.unshift('masha', 'pasha');
console.log(user);
let str = 'vanya, ishvan, masha';
let newStr = str.split(',');
console.log(newStr);

