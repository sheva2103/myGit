


let basket_1 = ['argentina','brazil','germany','France']
let basket_2 = ['usa','mexico','ukraine','russia']
let basket_3 = ['Uruguay','Paraguay','Australia','Japan']
let basket_4 = ['Senegal','Nigeria','South Africa','Iran']

//////////////////////////////////////////////////////////////// ф-я перемешивает массив
function shuffle(array) {                          
    array.sort(() => Math.random() - 0.5);
    return array
}
//////////////////////////////////////////////////////////////////        

let group_a = {
    0 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},
    1 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},
    2 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},
    3 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},

    countPoints : function () {
        this[0].points = this[0].victories * 3 + this[0].draw * 1
        this[1].points = this[1].victories * 3 + this[1].draw * 1
        this[2].points = this[2].victories * 3 + this[2].draw * 1
        this[3].points = this[3].victories * 3 + this[3].draw * 1
        for ( i=0 ; i<this[0].games + 1; i++) {
            this[i].scored = this[i].scored.reduce((summ, elem) => summ + elem, 0)
            this[i].missed = this[i].missed.reduce((summ, elem) => summ + elem, 0)
            this[i].goalDifference = this[i].scored - this[i].missed
        }
        
    }
}

let group_b = {
    0 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},
    1 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},
    2 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},
    3 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},

    countPoints : group_a.countPoints
}

let group_c = {
    0 : {name : 99, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},
    1 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},
    2 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},
    3 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},

    countPoints : group_a.countPoints
}

let group_d = {
    0 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},
    1 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},
    2 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},
    3 : {name : 0, victories : 0, draw : 0, defeat : 0, games : 0, scored : [], missed : [], goalDifference : 0, points : 0},

    countPoints : group_a.countPoints
}

const arg = 1750;
const br = 1826;
const ger = 1648;
const fr = 1786;
const ua = 1532;
const ru = 1493;
const usa = 1647;
const par = 1454;
const urug = 1596;
const mex = 1638;
const sen = 1561;
const uar = 1358;
const aus = 1511;
const jap = 1531;
const nig = 1478;
const ir = 1557;
