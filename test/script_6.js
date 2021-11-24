//события
const button = document.querySelector('.button');
console.log(button);

button.onclick = function () { //обработчик событий
    console.log('я нажал');
}
//или
/*function zrada() {
    console.log('я нажал');
}
button.onclick = zrada; */

// Опции

const options = {
	"capture": false, // фаза, на которой должен сработать обработчик
	"once": true, // если true, тогда обработчик будет
	//автоматически удалён после выполнения.
	"passive": false // если true, то указывает, что обработчик
	//никогда не вызовет preventDefault()
}

button.addEventListener("click", function (e) { //addEventListener добавляем исполняемый код при клике
    console.log('клик 1')
});
button.addEventListener("click", function (e) { //и еще один
    console.log('клик 2')
});
//или
function func() {
    console.log('так тоже можно');
    //button.removeEventListener("click", func); срабатует один раз и отключается
}
button.addEventListener("click", func, options); //подключаются дополнительные опции

//навешуем обработчик для нескольких кнопок через их родителя
const lesson = document.querySelector('.lesson');
function rasta() {
    console.log('rrrrrrr'); //то что увидим в консоле при клике
}
lesson.addEventListener("click", function (event) {
    if (event.target.closest('button')) { //проверяем является ли это кнопкой
        rasta();
    }
});


