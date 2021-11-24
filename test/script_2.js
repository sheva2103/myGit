//объекты

let userInfoQ = new Object(); //когструктор объекта
let userInfoW = {}; //литарал объекта

let firstPart = "likes";
let userInfo = {
    name: "Саша", //ключ:свойство
    age: 31,
    "likes javascript": true,
    [firstPart]: true,
}
console.log(userInfo); //вызываем объект
console.log(userInfo.name); //вызываем конкретное свойство объекта
console.log(userInfo["likes javascript"]); //если свойство состоит с двух слов
console.log(userInfo[firstPart]); //получаем значение из переменной

let ids = Symbol("id"); //скрывает свойство и выводит только значение
let userInfoS = {
    name: "Саша", //ключ:свойство
    age: 31,
    [ids]: "некое значение"
};
console.log(userInfoS);
////////////////////////////////////////////////////

//получаем свойство объекта с переменной
function makeUserInfo (name, age) {
    return {
        name: name,
        age: age,
    }
}
let user = makeUserInfo("саша", 31);
console.log(user);
/////////////////////////////////////////////////////////////
//добавление свойств в объект
let userInfoE = {   //обычный маленький объект
    name: "саша",
}
console.log(userInfoE);

userInfoE.age = 31;
userInfoE["likes javascript"] = true;
userInfoE.adress = {     //объект внутри объекта
    city: "balakleya",
    street: "gubkina",
};
userInfoE.poh = "proba";
console.log(userInfoE);

delete userInfoE.poh; //удаляем свойство с объекта
console.log(userInfoE);

userInfoE.age = 17; //меняем значение свойств
console.log(userInfoE);

let userInfoR = {
    name: "sanyok",
    age: 31,
}
//////////////////////////////
//копирование

let userOne = userInfoR; //копируем в переменную значение объекта
userOne.age = 17;  //в скопированой переменной меняем значение свойства
console.log(userInfoR);
///////////////////////////////////////////////////
//дублирование объектов

let userDub = {
    name: "sanyok",
    age: 31,
}
let userTwo = Object.assign({}, userDub); //ДУБЛИРОВАНИЕ Object.assign(куда(объект), что(свойство #1), ...);
userTwo.age = 19; //меняем свойство дубликата не затрагуя изначально значение
console.log(userDub);
console.log(userTwo);

//можно и добавлять свойства с помощью object.asign
let userDubY = {
    name: "sanyok",
    age: 31,
}
Object.assign(userDubY, { ['likes javascript']: true, city: "rayon" });
console.log(userDubY);
///////////////////////////////////////////////
//проверка существования свойств
let userDubT = {
    name: "sasha",
    age: 31,
    adress: {
        //city: "balakleya",
    }
}
console.log(userDubT?.adress?.city); // ? - проверяет наличие свойства и если его нет то выдаёт undefined вместо ошибки

//если значение свойства будет undefined то для этого и нужен оператор in 
let userDubTt = {
    name: "sasha",
    age: 31,
    adress: {
        city: "balakleya",
    }
}
if ("name" in userDubTt) {    //оператор in проверяет свойство внутри объекта
    console.log(userDubTt.name);
}
//////////////////////////////////////////////
//цикл перебора всех свойст объекта
let userInfoC = {
    name: "alex",
    age: 30,
    adress: {
        city: "bal",
        street: "gub",
    }
}
for (let key in userInfoC) {     //создаём переменную key
    console.log(key);         //выводятся ключи(свойства)
    console.log(userInfoC[key]);  //выводим значения свойств
} 
//////////////////////////////////////////////
//методы объекта
let userInfoF = {
    name: "alex",
    age: 30,
    adress: {
        city: "bal",
        street: "gub",
    },
    showInfo () {   //функция как свойство(собирает значения в одну строку)
        console.log(`${userInfoF.name}, ${userInfoF.age} лет. адрес: г.${userInfoF.adress.city}, ул.${userInfoF.adress.street}`);
        //ниже более правильная запись
        //console.log(`${this.name}, ${this.age} лет. адрес: г.${this.adress.city}, ул.${this.adress.street}`); this выбирает текущий объект и привязуется к конкрктному объетку
        //let show = () => console.log(`${this.name}, ${this.age} лет. адрес: г.${this.adress.city}, ул.${this.adress.street}`);  стрелочная функция и для this не сущетвует вложености
    }
}
userInfoF.showInfo(); //запускаем выполнение функции

/////////////////////////////////////////
//создаём объекты с момощью конструктора
function UserInfo(name) {
	// this = {}; Создается пустой объект (неявно)   автоматически
	this.name = name;
	this.age = 30;
	// return this; Возвращается объект (неявно)    автоматически
}
console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));





let sudok = {
    name: "ris",
    age: "myaso",
    hey: "ukrop",
}

sudok.name = "grechka";
console.log(sudok);

Object.assign (sudok, {yoyo: "blabla"});
console.log(sudok);








