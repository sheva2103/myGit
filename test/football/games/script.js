

///////////////////////////////////////////////////////////////////////////////////////////// создаём группы
function arrayRandElement222(arr1, arr2, arr3, arr4, obj1, obj2, obj3, obj4) {

    shuffle(arr1)
    shuffle(arr2)
    shuffle(arr3)
    shuffle(arr4)
    console.log(arr1)
    console.log(arr2)
    console.log(arr3)
    console.log(arr4)

    for ( i = 0 ; i < 4 ; i++) {
        
        obj1[i].name = arr1[0]

        arr1.shift()

        obj2[i].name = arr1[0]

        arr1.shift()

        obj3[i].name = arr1[0]

        arr1.shift()

        obj4[i].name = arr1[0]

        arr1.shift()

        if (obj1[0].name !== 0) arr1 = arr2

        if (obj1[1].name !== 0) arr1 = arr3

        if (obj1[2].name !== 0) arr1 = arr4

    }

}

arrayRandElement222(basket_1, basket_2, basket_3, basket_4, group_a, group_b, group_c, group_d)

////////////////////////////////////////////////////  ф-я присвоения рейтинга
function assignRating (group) {

    for (let key in group) {

        if (group[key].name == 'argentina') {group[key].rating = arg}
        if (group[key].name == 'brazil') {group[key].rating = br}
        if (group[key].name == 'germany') {group[key].rating = ger}
        if (group[key].name == 'France') {group[key].rating = fr}
        if (group[key].name == 'usa') {group[key].rating = usa}
        if (group[key].name == 'mexico') {group[key].rating = mex}
        if (group[key].name == 'ukraine') {group[key].rating = ua}
        if (group[key].name == 'russia') {group[key].rating = ru}
        if (group[key].name == 'Uruguay') {group[key].rating = urug}
        if (group[key].name == 'Paraguay') {group[key].rating = par}
        if (group[key].name == 'Australia') {group[key].rating = aus}
        if (group[key].name == 'Japan') {group[key].rating = jap}
        if (group[key].name == 'Senegal') {group[key].rating = sen}
        if (group[key].name == 'Nigeria') {group[key].rating = nig}
        if (group[key].name == 'South Africa') {group[key].rating = uar}
        if (group[key].name == 'Iran') {group[key].rating = ir}
    
    }

}

assignRating(group_a)
assignRating(group_b)
assignRating(group_c)
assignRating(group_d)


/////////////////////////////////////////////////////////////////////////////////////// ф-я рандома забитых голов
const random = (min, max) => {         
    return Math.floor(Math.random() * (max - min + 1)) + min;          
}
/////////////////////////////////////////////////////////////////////////////////

console.log(group_a)
console.log(group_b)
console.log(group_c)
console.log(group_d)

let tableA = document.querySelector('.table')
let tableB = document.querySelector('.table_2')
let tableC = document.querySelector('.table_3')
let tableD = document.querySelector('.table_4')
let nameGroupA = "Группа А"
let nameGroupB = "Группа B"
let nameGroupC = "Группа C"
let nameGroupD = "Группа D"
let arr14 = []
let arr12 = []

////////////////////////////////////////////////////////////////////////////// ф-я вывода таблиц в html
function createTableA(a, b, c) {           

    a.innerHTML = `<tr>
        <th>${c}</th>
        <th>В</th>
        <th>Н</th>
        <th>П</th>
        <th>И</th>
        <th>ЗМ</th>
        <th>ПМ</th>
        <th>О</th>
    </tr>
    <tr>
        <td>${b[0].name}</td><td>${b[0].victories}</td><td>${b[0].draw}</td><td>${b[0].defeat}</td><td>${b[0].games}</td><td>${b[0].scored}</td><td>${b[0].missed}</td><td>${b[0].points}</td>
    </tr>
    <tr>
        <td>${b[1].name}</td><td>${b[1].victories}</td><td>${b[1].draw}</td><td>${b[1].defeat}</td><td>${b[1].games}</td><td>${b[1].scored}</td><td>${b[1].missed}</td><td>${b[1].points}</td>
    </tr>
    <tr>
        <td>${b[2].name}</td><td>${b[2].victories}</td><td>${b[2].draw}</td><td>${b[2].defeat}</td><td>${b[2].games}</td><td>${b[2].scored}</td><td>${b[2].missed}</td><td>${b[2].points}</td>
    </tr>
    <tr>
        <td>${b[3].name}</td><td>${b[3].victories}</td><td>${b[3].draw}</td><td>${b[3].defeat}</td><td>${b[3].games}</td><td>${b[3].scored}</td><td>${b[3].missed}</td><td>${b[3].points}</td>
    </tr>`

}
/////////////////////////////////////////////////////////////////////////перерисовываю таблицу с результатами
function updateTable() {
createTableA(tableA, group_a, nameGroupA)
createTableA(tableB, group_b, nameGroupB)
createTableA(tableC, group_c, nameGroupC)
createTableA(tableD, group_d, nameGroupD)
}

createTableA(tableA, group_a, nameGroupA)
createTableA(tableB, group_b, nameGroupB)
createTableA(tableC, group_c, nameGroupC)
createTableA(tableD, group_d, nameGroupD)

//////////////////////////////////////////////////////////////////////////ф-я запуска всех игр в группе
function runGame(team_1) {

    function game() {

        let a = random(0, 5)
        let b = random(0, 5)

        console.log(team_1[p].name+' '+a+':'+b+' '+team_1[i].name)

        if( a > b) {
            team_1[p].victories++
            team_1[i].defeat++
            team_1[p].games++
            team_1[i].games++
            team_1[p].scored.push(a)
            team_1[p].missed.push(b)
            team_1[i].scored.push(b)
            team_1[i].missed.push(a)

        }
        if( a < b) {
            team_1[i].victories++
            team_1[p].defeat++
            team_1[p].games++
            team_1[i].games++
            team_1[p].scored.push(a)
            team_1[p].missed.push(b)
            team_1[i].scored.push(b)
            team_1[i].missed.push(a)
        }
        if( a == b) {
            team_1[p].draw++
            team_1[i].draw++
            team_1[p].games++
            team_1[i].games++
            team_1[p].scored.push(a)
            team_1[p].missed.push(b)
            team_1[i].scored.push(a)
            team_1[i].missed.push(b)
        }
    }


    for ( i = 1, p=0; i<4; i++) {game()}

    for ( i = 2, p=1; i<4; i++) {game()}

    for ( i = 3, p=2; i<4; i++) {game()}

    team_1.countPoints()

}
////////////////////////////////////////////////////////////////////////////////////// отображение прогрессбара

    let counter = 0
    function progressDemo() {
        
        counter++;
        document.getElementById( 'demo-progress-bar' ).value = counter;
        if( counter == 100 ) {
            let prog = document.querySelector('.progress')
                prog.classList.remove('progress_bar')
                mmm.removeEventListener('click', getProgressBar)
                mmm.classList.add('disabled')

//////////////////////////////////////////////////////////отбражение 1/8
                createTablePlayOff(0, 3)
                createTablePlayOff(1, 2)
                createTablePlayOff(4, 7)
                createTablePlayOff(5, 6)
        }
        
        }
                        
    function getProgressBar() {
        let prog = document.querySelector('.progress')
            prog.classList.add('progress_bar')
            var timer = setInterval( progressDemo, 20 );
            setTimeout(() => { clearInterval(timer) }, 2000);
    }    

///////////////////////////////////////////////////////////////////////////////////// навешиваем оброботчик событий на кнопку

function yyy() {
        runGame(group_a)
        runGame(group_b)
        runGame(group_c)
        runGame(group_d)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
yyy()


    let mmm = document.querySelector('.button')
    mmm.addEventListener('click', getProgressBar)
    mmm.addEventListener('click', progressDemo)
    mmm.addEventListener('click', function(){setTimeout(updateTable, 2000)})
    mmm.addEventListener('click', function(){setTimeout(addStyle, 2000)}, {"once": true})
    mmm.addEventListener('click', function(){setTimeout(removeStyle, 4000)}, {"once": true})

    let jjj = document.querySelector('.button18')
    jjj.addEventListener('click', sim14)
    let kkk = document.querySelector('.button12')
    kkk.addEventListener('click', sim12)
    let fff = document.querySelector('.button_final')
    fff.addEventListener('click', final)
///////////////////////////////////////////////////////////////// стадия плэй-оф, определяем команды


function sort(group) {

    let lo = [group[0], group[1], group[2], group[3]]
    lo.sort(function(x1,x2) {

        if (x1.points > x2.points) return -1;
        if (x1.points < x2.points) return 1;

        // при равных points сортируем по goalDifference
        if (x1.goalDifference > x2.goalDifference) return -1;
        if (x1.goalDifference < x2.goalDifference) return 1;

        // при равных goalDifference сортируем по rating
        if (x1.rating > x2.rating) return -1;
        if (x1.rating < x2.rating) return 1;

        return 0;
    });
    
    arr14.push(lo[0].name, lo[1].name)
    return lo

}
group_a = sort(group_a)
group_b = sort(group_b)
group_c = sort(group_c)
group_d = sort(group_d)

///////////////////////////////////////////////////////////// выводми пары в таблицы

function createTablePlayOff(a, b, c = '  ', d = ' ', e = document.querySelector('.playoff')) {


    function draw() {
        if ( c === d) {
            c = random(0, 5)
            d = random(0, 5)
            if ( c === d) draw()
        }
    }
    draw()

    if ( typeof c === 'number') {
        c > d ? arr12.push(arr14[a]) : arr12.push(arr14[b])
        console.log(arr14[a] + ' ' + c + ':' + d + ' ' + arr14[b])
    }

    //if (document.querySelector('.playoff12').hasChildNodes()) { //проверка вложенных узлов

    let g1 = e
    let g2 = document.createElement('table')
    g2.style.margin = "10px"
    g1.append(g2)

    g2.innerHTML = `<tr>
        <td>${arr14[a]}</td>
        <td>${c}</td>
    </tr>
    <tr>
        <td>${arr14[b]}</td>
        <td>${d}</td>
    </tr>`


    let temp = document.querySelector('.button18')
    if(temp.classList.contains("disabled")) temp.classList.remove('disabled')
    
}
/////////////////////////////////////////////////////////симуляция 1/4

function sim14() {

    if(document.querySelector('.button18').classList.contains("disabled")) return

    let removeTable = document.querySelectorAll('.playoff>table')
    removeTable.forEach(table => table.remove())

    createTablePlayOff(0, 3, random(0, 5), random(0, 5), document.querySelector('.playoff'))
    createTablePlayOff(1, 2, random(0, 5), random(0, 5), document.querySelector('.playoff'))
    createTablePlayOff(4, 7, random(0, 5), random(0, 5), document.querySelector('.playoff'))
    createTablePlayOff(5, 6, random(0, 5), random(0, 5), document.querySelector('.playoff'))

    document.querySelector('.button18').classList.add('disabled')
    document.querySelector('.button12').classList.remove('disabled')

    arr14.splice(0)
    arr14 = arr12.slice(0)
    arr12.splice(0)
    
}
/////////////////////////////////////////////////////////симуляция 1/2
function sim12() {

    if(document.querySelector('.button12').classList.contains("disabled")) return
    createTablePlayOff(0, 1, random(0, 5), random(0, 5), document.querySelector('.playoff12'))
    createTablePlayOff(2, 3, random(0, 5), random(0, 5), document.querySelector('.playoff12'))

    let temp = document.querySelector('.button18')
    if(!temp.classList.contains("disabled")) temp.classList.add('disabled')
    document.querySelector('.button12').classList.add('disabled')
    document.querySelector('.button_final').classList.remove('disabled')

    arr14.splice(0)
    arr14 = arr12.slice(0)
    arr12.splice(0)
}
/////////////////////////////////////////////////////////симуляция финала
function final() {

    if(document.querySelector('.button_final').classList.contains("disabled")) return
    createTablePlayOff(0, 1, random(0, 5), random(0, 5), document.querySelector('.final'))
    document.querySelector('.button_final').classList.add('disabled')
    document.querySelector('.button18').classList.add('disabled')
}

///////////////////////////////////////////////////////////////////  подсвечиваем победителей
var styleNode;
function addStyle() {
    
    styleNode = document.createElement("style");
    styleNode.innerText = "tr:nth-child(-n+3) td{background-color:#4EE59D;transition: 3s;}";
    document.body.appendChild(styleNode);
}

function removeStyle() {
    styleNode.parentNode.removeChild(styleNode);
}

//////////////////////////////////////////////////////////кнопка выключения звука на странице
let volume = document.querySelector('.qwe')
let video = document.querySelector('.bg_video')
volume.addEventListener('click', function() {
    video.muted = (video.muted == false) ? true : false;
    
    if(document.querySelector('.icon_mute')) {
        let one = document.querySelector('.qwe')
        document.querySelector('.qwe>img').remove()
        one.insertAdjacentHTML("afterBegin", '<img src="icon3.png" alt="qwe" class="icon_vol">');
        return
    }
    if(document.querySelectorAll('.icon_vol')) {
        let one = document.querySelector('.qwe')
        document.querySelector('.qwe>img').remove()
        one.insertAdjacentHTML("afterBegin", '<img src="icon.png" alt="qwe" class="icon_mute">');
    }
    
});
///////////////////////////////////////////////////////////////////


