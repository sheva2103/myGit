let players = {
    player1: {
        id: 1,
        name: "Sasha",
        skill: 0,
        games: 0,
    },
    player2: {
        id: 2,
        name: "Slava",
        skill: 0,
        games: 0,
    },
    player3: {
        id: 3,
        name: "Valera",
        skill: 0,
        games: 0,
    },
    player4: {
        id: 4,
        name: "Sanya",
        skill: 0,
        games: 0,
    }
}
//////////////////////////////////////////////////общие количество побед
let totalScoreOne = 0;
let totalScoreTwo = 0;
///////////////////////////////////////////
let skill1 = players.player1.skill
let skill2 = players.player2.skill

///////////////////////////////////////////////////общий запуск игры
function game () {

let player1 = 0
let player2 = 0
//let play1 = players.player1.id;
//let play2 = players.player2.id;
let points1 = 0;
let points2 = 0;
let one = 0;
let two = 0;
///////////////////////////////////////////////


let iii = +prompt("Выбери первого игрока\r 1 - Саша, 2 - Слава, 3 - Валера, 4 - Саня");
switch(iii) {
    case 1:
        player1 = players.player1.name;
        document.querySelector('.top').innerHTML = players.player1.name;
        one = players.player1.skill;
        break;
    case 2:
        player1 = players.player2.name;
        document.querySelector('.top').innerHTML = players.player2.name;
        one = players.player2.skill
        break;
    case 3:
        player1 = players.player3.name;
        document.querySelector('.top').innerHTML = players.player3.name;
        one = players.player3.skill
        break;
    case 4:
        player1 = players.player4.name;
        document.querySelector('.top').innerHTML = players.player4.name;
        one = players.player4.skill
        break;
    default:
        alert('Чувак, камон, не гони еб**ь\r выбери кого-то')
        return
        /*iii = 1
        player1 = players.player1.name;
        document.querySelector('.top').innerHTML = players.player1.name;
        one = players.player1.skill
        break;*/
}

let ddd = +prompt("Выбери второго игрока\r 1 - Саша, 2 - Слава, 3 - Валера, 4 - Саня");
switch(ddd) {
    case 1:
        player2 = players.player1.name;
        document.querySelector('.top2').innerHTML = players.player1.name;
        two = players.player1.skill
        break;
    case 2:
        player2 = players.player2.name;
        document.querySelector('.top2').innerHTML = players.player2.name;
        two = players.player2.skill;
        break;
    case 3:
        player2 = players.player3.name;
        document.querySelector('.top2').innerHTML = players.player3.name;
        two = players.player3.skill
        break;
    case 4:
        player2 = players.player4.name;
        document.querySelector('.top2').innerHTML = players.player4.name;
        two = players.player4.skill
        break;
    default:
        alert('Чувак, камон, не гони еб**ь\r выбери кого-то')
        return
        /*ddd = 2
        player2 = players.player2.name;
        document.querySelector('.top2').innerHTML = players.player2.name;
        two = players.player2.skill
        break;*/
}

//////////////////////////////////////////////////
console.log(`PvP: ${player1} против ${player2}`)

/////////////////////////////////////////////////
const random = (min, max) => {                                         
     return Math.floor(Math.random() * (max - min + 1)) + min;          
}

/////////////////////////////////////////////////////узнаём кто подаёт первым и в дальнейшем кто начинает больше-меньше
let bbb = random(1, 2) == random(1, 2)

/////////////////////////////////////////////////////кто первый подаёт
if (bbb) {
    console.log(`Подаёт первым ${player1}`)
        while (points1 < 11 && points2 < 11) {
            movePlayerOne();
            movePlayerTwo()  
            
            if (points1 == 10 && points2 == 10) {
                console.log(`больше меньше ${points1} : ${points2}`)
                break
    }

        }
}
else {
    console.log(`Подаёт первым ${player2}`)
    while (points1 < 11 && points2 < 11) {
            movePlayerTwo();
            movePlayerOne() 
            
            if (points1 == 10 && points2 == 10) {
                console.log(`больше меньше ${points1} : ${points2}`)
                break
    }

        }
}
///////////////////////////////////////////////////////////// две подачи для первого игрока                                                                     
function movePlayerOne() {

    for (let i = 0; i < 2; i++) {
        function serveTheBall() {
        if (hitTheBall(one) == hitTheBall(two)) {
            console.log(`${player2} otbil`)
            if (hitTheBall(two) == hitTheBall(one)) {
                console.log(`${player1} otbil`)
                serveTheBall()
            }
            else {
                points2++
                console.log(`${player2} zabil`)
                console.log(`Счёт ${points1} : ${points2}`)
            }
        }
        else {
            points1++
            console.log(`${player1} zabil`)
            console.log(`Счёт ${points1} : ${points2}`)
        }
        }

        if (points1 == 11 || points2 == 11) {
            return
        }
        serveTheBall()
    }
}

///////////////////////////////////////////////////////////////////// две подачи для второго
function movePlayerTwo() {
    for (let i = 0; i < 2; i++) {
        function serveTheBall() {
        if (hitTheBall(two) == hitTheBall(one)) {
            console.log(`${player1} otbil`)
            if (hitTheBall(one) == hitTheBall(two)) {
                console.log(`${player2} otbil`)
                serveTheBall()
            }
            else {
                points1++
                console.log(`${player1} zabil`)
                console.log(`Счёт ${points1} : ${points2}`)
            }
        }
        else {
            points2++
            console.log(`${player2} zabil`)
            console.log(`Счёт ${points1} : ${points2}`)
        }
        }

        if (points1 == 11 || points2 == 11) {
            return
        }
        if (points1 == 6 && points2 == 0 || points1 == 0 && points2 == 6) {
            console.log(`сухая ${player1} : ${player2}`)
            return
        }

        serveTheBall()
    }
}
////////////////////////////////////////////////////////////////определяем в какую сторону идёт подача или в какой стороне отбивать
    function hitTheBall(min) {
        if (min <= 3) {
            let aaa = random(1, 3)
            return aaa
        }
        if (min <= 6) {
            let aaa = random(1, 6)
            return aaa
        }
        if (min <= 50) {
            let aaa = random(1, 9)
            return aaa
        }
    }


//////////////////////////////////////////////////////////////по одной подаче (для больше-меньше)
let qqq = points1;
let www = points2;
if (points1 == 10 && points2 == 10) {
    console.log("ggggggggggggggggggggggggggggggggggggggggggg")

    while (qqq - www < 1 || www - qqq < 1 ) {
        if (bbb) {
            podachaS()
            podachaSl()
        }
        else {
            podachaSl()
            podachaS()
        }
        
    
        if (qqq - www == 2 || www - qqq == 2) {
            break
            }
        }
}
/////////////для первого игрока одна (больше-меньше)

function podachaS() {
    if (hitTheBall(one) == hitTheBall(two)) {
        console.log(`${player2} otbil`)
        if (hitTheBall(two) == hitTheBall(one)) {
            console.log(`${player1} otbil`)
            podachaS()
        }
        else {
            www++
            console.log(`${player2} zabil`)
            console.log(`Счёт ${qqq} : ${www}`)
        }
}
    else {
        qqq++
        console.log(`${player1} zabil`)
        console.log(`Счёт ${qqq} : ${www}`)
    }
    }    
    /////////////для второго игрока одна одна (больше-меньше)
    function podachaSl() {
    if (hitTheBall(two) == hitTheBall(one)) {
        console.log(`${player1} otbil`)
        if (hitTheBall(one) == hitTheBall(two)) {
            console.log(`${player2} otbil`)
            podachaSl()
        }
        else {
            qqq++
            console.log(`${player1} zabil`)
            console.log(`Счёт ${qqq} : ${www}`)
        }
}
    else {
        www++
        console.log(`${player2} zabil`)
        console.log(`Счёт ${qqq} : ${www}`)
    }
    }
/////////////////////////////////////////////////////конец игры и повышение скила
    console.log(`Конец игры ${qqq} : ${www}`)
    document.querySelector('.bottom').innerHTML = qqq;
    document.querySelector('.bottom2').innerHTML = www;
    skillUp();
    levelSkill();
    
    ////////////////////////////////////////////повышаем скил после победы
    function skillUp() {
        if (iii == 1 && qqq > www) {
            players.player1.skill += 2
            document.querySelector('.scoreone').innerHTML = players.player1.skill;
            skillDown()
        }
        if(iii == 2 && qqq > www) {
            players.player2.skill += 2
            document.querySelector('.scoretwo').innerHTML = players.player2.skill;
            skillDown()
        }
        if(iii == 3 && qqq > www) {
            players.player3.skill += 2
            document.querySelector('.scorethree').innerHTML = players.player3.skill;
            skillDown()
        }
        if(iii == 4 && qqq > www) {
            players.player4.skill += 2
            document.querySelector('.scorefour').innerHTML = players.player4.skill;
            skillDown()
        }
        

        if (ddd == 1 && qqq < www) {
            players.player1.skill += 2
            document.querySelector('.scoreone').innerHTML = players.player1.skill;
            skillDown()
        }
        if(ddd == 2 && qqq < www) {
            players.player2.skill += 2
            document.querySelector('.scoretwo').innerHTML = players.player2.skill;
            skillDown()
        }
        if(ddd == 3 && qqq < www) {
            players.player3.skill += 2
            document.querySelector('.scorethree').innerHTML = players.player3.skill;
            skillDown()
        }
        if(ddd == 4 && qqq < www) {
            players.player4.skill += 2
            players.player4.games++
            document.querySelector('.scorefour').innerHTML = players.player4.skill;
            skillDown()
        }
        
    }
    ///////////////////////////////////////////////////////////////понижаем скил после поражения
    function skillDown() {

        if (qqq > www) {

            if (ddd == 1) {
                if (players.player1.skill == 0) return
                players.player1.skill--
                document.querySelector('.scoreone').innerHTML = players.player1.skill;
            }

            if (ddd == 2) {
                if (players.player2.skill == 0) return
                players.player2.skill--
                document.querySelector('.scoretwo').innerHTML = players.player2.skill;
            }
    
            if (ddd == 3) {
                if (players.player3.skill == 0) return
                players.player3.skill--
                document.querySelector('.scorethree').innerHTML = players.player3.skill;
            }
    
            if (ddd == 4) {
                if (players.player4.skill == 0) return
                players.player4.skill--
                document.querySelector('.scorefour').innerHTML = players.player4.skill;
            }
        }
        if (qqq < www) {

            if (iii == 1) {
                if (players.player1.skill == 0) return
                players.player1.skill--
                document.querySelector('.scoreone').innerHTML = players.player1.skill;
            }

            if (iii == 2) {
                if (players.player2.skill == 0) return
                players.player2.skill--
                document.querySelector('.scoretwo').innerHTML = players.player2.skill;
            }
    
            if (iii == 3) {
                if (players.player3.skill == 0) return
                players.player3.skill--
                document.querySelector('.scorethree').innerHTML = players.player3.skill;
            }
    
            if (iii == 4) {
                if (players.player4.skill == 0) return
                players.player4.skill--
                document.querySelector('.scorefour').innerHTML = players.player4.skill;
            }
        }
    }
    ///////////////////////////////////////////////останавливаем игру и показываем победителя
    if ( players.player1.skill >= 10) {
        document.querySelector('.victory_name').innerHTML = 'Победил' + ' ' + players.player1.name
        button.removeEventListener("click", game)
        document.querySelector('.victory').classList.add('victory_get')
        button.classList.add('disabled')
    }

    if ( players.player2.skill >= 10) {
        document.querySelector('.victory_name').innerHTML = 'Победил' + ' ' + players.player2.name
        button.removeEventListener("click", game)
        document.querySelector('.victory').classList.add('victory_get')
        button.classList.add('disabled')
    }

    if ( players.player3.skill >= 10) {
        document.querySelector('.victory_name').innerHTML = 'Победил' + ' ' + players.player3.name
        button.removeEventListener("click", game)
        document.querySelector('.victory').classList.add('victory_get')
        button.classList.add('disabled')
    }

    if ( players.player4.skill >= 10) {
        document.querySelector('.victory_name').innerHTML = 'Победил' + ' ' + players.player4.name
        button.removeEventListener("click", game)
        document.querySelector('.victory').classList.add('victory_get')
        button.classList.add('disabled')
    }

}
//////////////////////////////////////запускаем игру
const button = document.querySelector('.button');
button.addEventListener("click", game)


///////////////////////////тест

function get() {
    console.log(players.player1.skill)
    console.log(players.player2.skill)
    //console.log(players.player3.skill)
    //console.log(players.player4.skill)
}
const buttonTwo = document.querySelector('.button-two');
buttonTwo.onclick = get;
///////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////изменяем полосу прокачки
function levelSkill() {
    if (players.player1.skill >= 3) {
        const element = document.querySelector('.first-level')
        element.classList.add('first-level_one')
    }
    if (players.player1.skill >= 6) {
        const element = document.querySelector('.second-level')
        element.classList.add('first-level_one')
    }
    if (players.player1.skill >= 9) {
        const element = document.querySelector('.third-level')
        element.classList.add('first-level_one')
    }


    if (players.player2.skill >= 3) {
        const element = document.querySelector('.scoretwo_skill .first-level')
        element.classList.add('first-level_one')
    }
    if (players.player2.skill >= 6) {
        const element = document.querySelector('.scoretwo_skill .second-level')
        element.classList.add('first-level_one')
    }
    if (players.player2.skill >= 9) {
        const element = document.querySelector('.scoretwo_skill .third-level')
        element.classList.add('first-level_one')
    }


    if (players.player3.skill >= 3) {
        const element = document.querySelector('.scorethree_skill .first-level')
        element.classList.add('first-level_one')
    }
    if (players.player3.skill >= 6) {
        const element = document.querySelector('.scorethree_skill .second-level')
        element.classList.add('first-level_one')
    }
    if (players.player3.skill >= 9) {
        const element = document.querySelector('.scorethree_skill .third-level')
        element.classList.add('first-level_one')
    }


    if (players.player4.skill >= 3) {
        const element = document.querySelector('.scorefour_skill .first-level')
        element.classList.add('first-level_one')
    }
    if (players.player4.skill >= 6) {
        const element = document.querySelector('.scorefour_skill .second-level')
        element.classList.add('first-level_one')
    }
    if (players.player4.skill >= 9) {
        const element = document.querySelector('.scorefour_skill .third-level')
        element.classList.add('first-level_one')
    }
}
///////////////////////////////////////////////////////////