




document.addEventListener('click', (e) => {

    let loginForm = document.forms.loginForm

    if(document.querySelector('.newMessageModal') && !e.target.closest('.newMessageModal')) {
        document.querySelector('.newMessageModal').remove()
    }

    if(e.target === document.querySelector('#login')) {
        
        t.modalOpen('Логин', 'input')
        document.querySelector("#submit").textContent = "Войти"
        document.querySelector("#submit").addEventListener('click', /*sleep*/checkUser)
    }

    if(e.target === document.querySelector('#registration')) {

        t.modalOpen('Введите имя пользователя', 'input')
        document.querySelector("#submit").textContent = "Зарегистрироваться"
        loginForm.loginInput.addEventListener('blur', checkLogin)
        loginForm.passwordInput.addEventListener('blur', checkPassword)
        document.querySelector("#submit").addEventListener('click', addNewUser)
        
    }

    

    if(e.target == document.querySelector('#exit > a')) {
        localStorage.setItem('statusUser', false)
        localStorage.removeItem('activeSearch')        
    }

    if(e.target == document.querySelector('#addMessage')) {
        t.wrapper.insertAdjacentHTML('beforeend', newMessageModal())
    }

    if(e.target == document.querySelector('.newMessage_confirm > button')) {

        t.textNewMessage = document.querySelector('.newMessage_text > textarea').value
        if(document.querySelector('.newMessage_text > textarea').value <= 0) return
        if(t._temp) {t.render(t._temp, t._tempOne, false)}
        else {t.render()}
        saveElementsHTML()
        //////////////////////////////////////////////////
        onlyKeysUsersOfLocalStorage.forEach(item => {
            if(JSON.parse(localStorage.getItem(item)).login == JSON.parse(localStorage.getItem('statusUser')).login) {
                let temp = JSON.parse(localStorage.getItem(item))
                    temp.message.push(document.querySelector('.newMessage_text > textarea').value)
                    localStorage.setItem(item, JSON.stringify(temp))
            }
        })
        //////////////////////////////////////////////////////
        document.querySelector('.newMessageModal').remove()
        t._temp = false
        t._tempOne = false
        
    }

    if(document.querySelectorAll('#edit').forEach(item => {
        if(e.target == item) {t.editPost(e.target, item)}
    })) {   } //раковство конкретное

    if(document.querySelectorAll('#delete').forEach(item => {
        if(e.target == item) {t.deletePost(item)} //раковство конкретное, но я не знаю как иначе 
    })) {}

    if(e.target.closest('.comments > span')) {
        
        t._temp = e.target.closest('.comments')
        t._tempOne = e.target
        console.log(t._temp)
        t.wrapper.insertAdjacentHTML('afterend', newMessageModal())
    }

    if(e.target == document.querySelector('#search_button')) {

        if(document.querySelector('#search_button').textContent == 'поиск') {
            e.preventDefault()
            document.querySelector('#search_button').textContent = "OK"
            document.querySelector('.search_input').style.display = 'inline-block'
            setTimeout(() => {document.querySelector('.search_input').style.width = '300px'}, 200)
        }
        if(document.querySelector('#search_button').textContent == "OK" && document.querySelector('.search_input').value.length != 0) { //я не пойму почему условия срабатывает если оно не действительно
            searchMessage(document.querySelector('.search_input').value)
            document.querySelector('.search_input').value = ""            
        }
    }

    if(e.target == document.querySelector('.sidebar_darkWhiteMode_wrapper')) {
        document.querySelector('.sidebar_darkMode').classList.toggle('sidebar_whiteMode')
        if(document.querySelector('.sidebar_whiteMode')) {
            localStorage.setItem('darkMode', true)
            darkMode()
        }
        else {
            darkModeOff()
            localStorage.removeItem('darkMode')
        }
    }
})



if(localStorage.getItem('allPost')) {

    JSON.parse(localStorage.getItem('allPost')).forEach(item => {
            document.querySelector('.wrapper').insertAdjacentHTML("beforeend", item)})
}

if(t.statusUser.status == true) {

    document.querySelector('.sidebar_login').style.display = "none"
    document.querySelector('.sidebar_user').style.display = "flex"
    document.querySelector('.openUser').textContent = " " + t.statusUser.login
    document.querySelector('.newMessage').style.display = "inline-block"
    document.querySelectorAll('.element > img').forEach(item => {
        if(item.parentElement.firstElementChild.textContent == t.statusUser.login) {
            item.style.display = 'block'
        }
        else {item.style.display = 'none'}
    })
    if(localStorage.getItem('darkMode')) {
        document.querySelector('.sidebar_darkMode').classList.toggle('sidebar_whiteMode')
        darkMode()
    }
    else {darkModeOff()}    
    if(t.statusUser.admin == true) {
        document.querySelector('#admin').style.display = 'block'
        document.querySelectorAll('.element > img').forEach(item => item.style.display = 'block')
    }
    if(t.statusUser.banned == true) {document.querySelector('#addMessage').style.display = 'none'}
}
else {

    document.querySelector('.sidebar_login').style.display = "block"
    document.querySelector('.sidebar_user').style.display = "none"
    document.querySelector('.newMessage').style.display = "none"
    document.querySelector('.searchMessage').style.display = "none"
    document.querySelectorAll('.element > img').forEach(item => {
        item.style.display = 'none'
    })
    document.querySelectorAll('.comments > span').forEach(item => {
        item.style.display = 'none'
    })
    darkModeOff()
}


//console.log(t.statusUser)
// console.log(users)
// let temp = {login: 'rr', password: 'nnnn'}
// localStorage.setItem(0, JSON.stringify(temp))
// let temp1 = localStorage.getItem(0)
// console.log(temp1)
// //console.log(JSON.parse(temp1))
// let temp2 = {login: 'uuuu', password: 'jjjj'}
// localStorage.setItem(1, JSON.stringify(temp2))
// let temp3 = localStorage.getItem(1)
// //console.log(JSON.parse(temp3))
// for ( let i = 0; i<localStorage.length; i++) {
//     console.log(JSON.parse(localStorage.getItem(i)))   //или
//     console.log(localStorage.key(i))                   //или, но так лучше
// }
// console.log(localStorage.length)

setInterval(() => {document.querySelector('.sidebar_time > span').textContent = t.time}, 1000)

document.querySelector('.sidebar_darkWhiteMode_wrapper').addEventListener('click', (e) => {
    
})
