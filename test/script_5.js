//DOM

const htmlElement = document.documentElement; //вызываем весь html
const headElement = document.head; // вызываем head
console.log(htmlElement);
console.log(headElement);

//вызываем первый и последний дочерний элемент (.firstChild,.lastChild)
const bodyElement = document.body; //получаем объкт body
const firstChildNode = bodyElement.firstChild; //вызываем первый объкт в боди
const lastChildNode = bodyElement.lastChild;
console.log(firstChildNode);
console.log(lastChildNode);

//коллекция childNodes содержит список всех дочерних элементов включая текстовые узлы
const childNodes = bodyElement.childNodes;
console.log(childNodes);
const bodyChildren = bodyElement.children; //получаем список ТОЛЬКО дочерних эелементов
console.log(bodyChildren);

//hasChildNodes() эта ф-я проверяет наличие дочерних узлов
console.log(bodyElement.hasChildNodes());

//перебор коллекции
for (let node of childNodes) {
    console.log(node);  //показует все узлы из коллекции
}
//навигация по документу
const previousSiblingNode = bodyElement.previousSibling; //получаем предыдущий узел .previousSibling
const nextSiblingNode = bodyElement.nextSibling; //получаем следующий узел .nextSibling
const parendNode = bodyElement.parentNode; //получаем родителя объекта .parentNode 
console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parendNode);
//первый и последний дочерние элементы (толбко элементы без узлов)
const firstChild = bodyElement.firstElementChild; //.firstElementChild;
const lastChild = bodyElement.lastElementChild;
console.log(firstChild);
console.log(lastChild);

//соседние и родительские элементы(без узлов)
const previousSibling = bodyElement.previousElementSibling; //получаем предыдущий элемент
const nextSibling = bodyElement.nextElementSibling; //слудующий
const parendElement = bodyElement.parentElement; // родительский элемент
console.log(previousSibling);
console.log(nextSibling);
console.log(parendElement);
//////////////////////////////////////////////////////////////////////////
//поиск элементов по классам .querySelectorAll
const elemsOne = document.querySelectorAll('.lesson__list'); // получаем объект с классом .lesson__list
console.log(elemsOne);
const elemsTwo = document.querySelectorAll('li');  //поиск по тегу
const elemsThree = document.querySelectorAll('li.lesson__item-list'); //поиск по смешеному селектору тега и класса
const elemsFour = document.querySelectorAll('.lesson__list>li'); //поиск по тегу первого уровня вложености
const elemsFive = document.querySelectorAll('.lesson__list, lesson__text'); //поиск по нескольким классам
const elemsSix = document.querySelectorAll('.lesson__list .lesson__text'); //поиск по вложеным классам
const elemsSeven = document.querySelectorAll('#listItem'); //поиск по айди
const elemsEight = document.querySelectorAll('[data-item]'); //поиск по атрибуту
//const elemsEight = document.querySelectorAll('[data-item="85"]'); //поиск по атрибуту c конкретным значением

const elems = document.querySelectorAll('div');
console.log(elems[2]); // выводим третий объкт из коллекции

//перебор коллекции
for(let item of elems) { 
    console.log(item);
}
//или метод forEach
elems.forEach(item => {console.log(item)})

//живой поиск объектов
const subList = document.querySelectorAll('.lesson__text');  
const subItem = subList[0].querySelectorAll('div'); //ищем не по всему документу а по конкретному объекту
console.log(subItem);

const lesson__text = document.querySelector('div'); //возвращает не все,а первый попавшийся объект
console.log(lesson__text);

const elemsZ = document.getElementById('privet'); //поиск по уникальному айди
console.log(elemsZ);

const elemsZz = document.getElementsByTagName('div'); //ищет элементы с данным тегом и возвращает их коллекцию('*'вместо тега получаем потомков)
console.log(elemsZz); //getElementsByTagName тоже самое но с классом

const elemsZs = document.querySelector('.h3');  //
const parentList = elemsZs.closest('.lesson__text'); //ищет ближайшего предка 
console.log(parentList);

//проверка matches
const elemsXx = document.querySelectorAll('.lesson__text');
for (let ggg of elemsXx) {
    if (ggg.matches('div')) { //проверяет наличие элемента с тегом div
        console.log('red');  //можно и класса но у меня не получается
    } else if (ggg.matches('span')) {
        console.log('blue');
    }
}
//изменение документа innerHTML 
const textElement = document.querySelector('.h3'); //выбираем класс и
const textElCon = textElement.innerHTML; //получаем содержимое объекта вместе с html кодом
console.log(textElCon);
textElement.innerHTML = `c тебя`; //перезаписываем содержимое объекта

textElement.innerHTML = `<p>${textElCon}</p> <p>нет</p>`; //дописуем содержимое объекта (можно указывать любые html теги с класами и атрибутами)
console.log(textElement.innerHTML);

const textElementA = document.querySelector('.h3');
const textElCont = textElementA.textContent; // получаем только текст без html кода
console.log(textElCont);

//создание элементов и узлов
const newElem = document.createElement('div'); //.createElement создаём новый тег
console.log(newElem);
newElem.innerHTML = `создал новый див`; //наполняем новы див
console.log(newElem);

const newText = document.createTextNode('привет'); //создаём новый текстовый узел
console.log(newText);
//созданые объекты находятся в константах,но не являются частью документа

//вставляем новый элемент в код
textElementA.before(newElem, " можно ещё и текст"); //вставляем перед выбраным объектом
//textElementA.after(newElem); //после
//textElementA.prepend(newElem); //внутрь в начало объекта
//textElementA.append(newElem); //внутрь в конец



