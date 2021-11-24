//массивы

let masiv = [  //масив
    'саша', 
    31,
    'rayon',
]
console.log(masiv[1]); //выводит первую позицию массива

let arrTwo = [
    "Sanya",
    {
        type: "js",      //объект внутри массива
        age: 31,
    },
    true,
    function () {                //функция внутри массива
        console.log('привет, я Саша');
    }
];
console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type); //вызывает свойство объекта внутри массива
arrTwo[3]();  //вызов функции внутри массива

let matrix = [  //многомерный массив
    [1, 2, 3],  //0
    [4, 5, 6],  //1
    [7, 8, 9]   //2
]; 
console.log(matrix);
console.log(matrix[0][1]); //[0]- обращаемся к нулевой позиции(первый ряд), [1] первая позиция(второй симво первой строки)
console.log(matrix.length);  // length выводит длину масива

let arr = ['sanya', 'kuc', 'sheva'];
console.log(arr);
let arrNew = arr;  //копирование массива
arrNew.length = 2; //укарачиваем массив до двух значений
console.log(arr);

let arrQ = ['sanya', 'kuc', 'sheva'];
arrQ[0] = 'valera';         //изменяем значение
console.log(arrQ);
arrQ[3] = 'pilya'; //добавляем новое значение, [3] обращаемся к несуществующей позиции
console.log(arrQ);


// Метод push - добавляет элемент в конец массива

let arrE = ['Ваня', 'Иштван', 'Оля',];
arrE.push('Вася');
console.log(arrE);

arrE.push('Дима', 'Катя');
console.log(arrE);

//------------------------

// Метод shift - удаляет элемент в начале,
// так что второй элемент становится первым.

let arrR = ['Ваня', 'Иштван', 'Оля',];
arrR.shift();
console.log(arrR);

//------------------------


// Метод pop  - удаляет последний элемент

let arrA = ['Ваня', 'Иштван', 'Оля',];
arrA.pop();
console.log(arrA);

//------------------------


// Метод unshift  - добавляет элемент в начало массива

let arrS = ['Ваня', 'Иштван', 'Оля',];
arrS.unshift('Вася');
console.log(arrS);

arrS.unshift('Дима', 'Катя');
console.log(arrS);

////////////////////////////////////////////////////////

// Удаление/добавление/изменение конкретных элементов


// Метод splice. Позволяет добавлять, удалять и заменять элементы.
// Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])

// Удаляем элемент
let arrOne = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (Иштван), удаляем один элемент
arrOne.splice(1, 1);
console.log(arrOne);

// Удаляем элемент и возвращаем его в переменную
let arrTwoo = ['Ваня', 'Иштван', 'Оля',];
let removed = arrTwoo.splice(1, 1);
console.log(removed);

// Заменяем элементы
let arrThree = ['Ваня', 'Иштван', 'Оля',];
// Начиная с нулевой позиции (Ваня), заменяем один элемент
arrThree.splice(0, 1, 'Коля');
console.log(arrThree);

// Добавляем элементы
let arrFour = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (перед 'Иштван'), добавляем два элемента
arrFour.splice(1, 0, 'Коля', 'Маша');
console.log(arrFour);

// Удаляем элемент
let arrFive = ['Ваня', 'Иштван', 'Оля',];
// Начиная с последней позиции (Оля), удаляем один элемент
arrFive.splice(-1, 1);
console.log(arrFive);
////////////////////////////////////////////////////////////////

// Метод slice.
// Cоздаёт новый массив, в который копирует часть либо весь массив
// Синтаксис arr.slice([start], [end]) Не включая [end]

// Копируем часть массива
let arrOneT = ['Ваня', 'Иштван', 'Оля',];

// Начиная с 1й позиции 'Иштван',
// до 2й позиции 'Оля' (не включая)
let arrTwoT = arrOneT.slice(1, 2);
console.log(arrTwoT);

// Начиная с предпоследней позиции 'Иштван',
// до последней 'Оля' (не включая)
let arrThreeT = arrOneT.slice(-2, -1);
console.log(arrThreeT);

// Копируем весь массив
let arrFourY = arrOneT.slice();
console.log(arrFourY);
//////////////////////////////////////////////////////////////////////////////
//дублирование массива concat.
// Cоздаёт новый массив, в который копирует данные из других массивов
// и дополнительные значения (в конец массива)
// Синтаксис arr.concat(arg1, arg2...)
let dubOne = ['Ваня', 'Иштван', 'Оля',];
let dubTwo = dubOne.concat('петя');
console.log(dubTwo);

///////////////////////////////////////////////////////////////////////
//ПОИСК В МАССИВЕ

let arrT = ['sanya', 'valera', 'slava'];
console.log(arrT.indexOf('valera'));  // ищет валеру
console.log(arrT.indexOf('sheva'));  //его нет и выдаёт -1
console.log(arrT.indexOf('valera', 2));  //ищет валеру начиная с второй позиции
console.log(arrT.lastIndexOf('valera')); //ищет справа налево

console.log(arrT.includes('valera')); //если найдено то возвращает тру если нет то фолс

// find и findIndex
// поиск в массиве объектов с определённым условием

let arrY = [
    { name: 'Вася', age: 36 },   //объектры внутри массива
    { name: 'Коля', age: 18 },
    { name: 'Оля', age: 'Не скажу' },
]
let resultOne = arrY.find(function (item, index, array) {  //где ищем(элемент,ключ,весь масив)
    return item.age === 18;    //условие
});
console.log(resultOne);

/*let resultOne = arr.find(item => item.age === 18);
console.log(resultOne);*/                      //тоже самое только стрелочной функцией
let resultTwo = arrY.findIndex(item => item.age === 18); //возвращает позицию искомого элемента
console.log(resultTwo);

// filter
// Метод ищет все элементы, на которых функция-колбэк вернёт true
// если true - элемент добавляется к результату, и перебор продолжается
	// возвращается пустой массив в случае, если ничего не найдено
    let arrU = [
        { name: 'Вася', age: 36 },
        { name: 'Коля', age: 18 },
        { name: 'Оля', age: 'Не скажу' },
    ]
    let result = arrU.filter(function (item, index, array) {
        return item.age >= 18;
    });
    console.log(result);

// Метод sort(fn)
// сортирует массив на месте, меняя в нём порядок элементов.
// Сотритовка чисел(можно и строки)
let arrTwoQ = [8, 22, 1,];
console.log(arrTwoQ.sort());

// Функция сортировки ,а обратная сортировка метод reverse

function compareNumeric(a, b) {
	console.log(`Сравниваем ${a} и ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;

	//return a - b // более короткая запись именно для этого примера
}

//console.log(arrTwoQ.sort((a, b) => a - b)); стрелочная ф-я которая делает всё тоже самое,более простая и правильная запись

console.log(arrTwoQ.sort(compareNumeric));

// Преобразование массивов

// Метод map.
// вызывает функцию для каждого элемента массива 
// и возвращает массив результатов выполнения этой функции.
let arrZ = ['Ваня', 'Иштван', 'Оля',];

let resultU = arrZ.map(function (item, index, array) {
	return item[0];  //возвращает первую позицию(букву)
});
//let result = arr.map(item => item[0]); стрелочная функция
console.log(arrZ);
console.log(resultU);

//split преобразовывает строку в массив по заданному разделителю

let str = 'Ваня,Иштван,Оля';
let arrX = str.split(',');  //строка преобразуется в массив
console.log(arrX);
let arrXtwo = str.split(',', 2 ); //ограничиваем количество объектов которые попадут в массив
console.log(arrXtwo);

//join преобразовывает массив в строку c заданным разделителем
let arrJ = ['Ваня', 'Иштван', 'Оля',];
let srtJ = arrJ.join('.');  //указываем разделитель между эелементами
console.log(srtJ);

// Проверка Array.isArray()
let obj = {};
let arrP = [];
if (Array.isArray(obj)) {   //проверяем является ли obj масивом
    console.log('Это массив');
}
else {
    console.log('это не массив');
}

// Перебор элементов с помощью циклов
let arrV = ['Ваня', 'Иштван', 'Оля',];
console.log(arrV.length); // длина массива

// Цикл FOR
for (let i = 0; i < arrV.length; i++) { //в этом цикле получаем значение и ключ массива
	console.log(arrV[i]);
}
// Цикл FOR...OF
// Можно использовать для вывода значений
let arrXx = ['Ваня', 'Иштван', 'Оля',];

for (let arrItem of arrXx) { //получаем только значение
	console.log(arrItem);
}

// Метод перебора forEach
// Выполняет функцию для каждого элемента массива

let arrXz = ['Ваня', 'Иштван', 'Оля',];
arrXz.forEach(function (item, index, array) {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});
/*
// Стрелочная функция
arrXz.forEach((item, index, array) => {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});
*/

// Методы reduce/reduceRight

/*
Итак, мы выяснили что если нам нужно перебрать
массив – мы можем использовать forEach, for или for..of.
Если нам нужно перебрать массив и вернуть
данные для каждого элемента – мы используем map.

Методы arr.reduce и arr.reduceRight похожи на эти методы,
но они немного сложнее и используются для вычисления
какого-нибудь единого значения на основе всего массива.
*/
/*
// Синтаксис
let value = arr.reduce(function(previousValue, item, index, array) {
  // ...
}, [initial]);
*/
/*
К привычным нам аргументам item, index, array
добавляется previousValue:

previousValue – результат предыдущего вызова этой функции,
равен initial при первом вызове (если передан initial),
item – очередной элемент массива,
index – его индекс,
array – сам массив.

Функция применяется по очереди ко всем элементам
массива и «переносит» свой результат на следующий вызов.
*/
let arrOneC = [1, 2, 3, 4];
let reduceValueOne = arrOneC.reduce(function (previousValue, item, index, array) {
	return item + previousValue;
}, 0);
console.log(reduceValueOne);
/*
let arrArrow = [1, 2, 3, 4];
let reduceValueArrow = arrArrow.reduce((pValue, item) => item + pValue, 0);
console.log(reduceValueArrow);
*/

let arrTwoC = ['Ваня', 'Иштван', 'Оля',];
/*Если не указать начальное значение, то оно будет равно
первому элементу массива (previousValue=Ваня)
А работа метода начнется со второго элемента (item=Иштван)*/
let reduceValueTwo = arrTwoC.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
	console.log(item);
	return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);
// Метод arr.reduceRight работает аналогично, 
// но проходит по массиву справа налево.

