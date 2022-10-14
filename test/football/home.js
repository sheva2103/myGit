

let menu = document.querySelector('.menu')
let start = document.querySelector('.start')
let text = document.querySelector('.text')
let icon = document.querySelector('.icon_xp')
start.addEventListener('click', hideMenu)
document.addEventListener('click', ggg)

function startClick() {
    start.classList.remove('start_click')
}

function hideMenu() {
    if(!menu.classList.contains('menu_hide')) {
        start.classList.add('start_click')
        setTimeout(startClick, 150)
        menu.classList.add('menu_hide')
        return
    }
    else {
        menu.classList.remove('menu_hide')
        start.classList.add('start_click')
        setTimeout(startClick, 150)
    }
}

function getClick() {
    if (start) {
        console.log(222)
        return
    }
    else {
        console.log(555)
    }
}


function ggg(event) {
    let target = event.target; // где был клик?

    console.log(target)
    if (target == start || target == text || target == icon) return
    else {
        if (!menu.classList.contains('menu_hide')) {

            menu.classList.add('menu_hide')
        }
    }
};
