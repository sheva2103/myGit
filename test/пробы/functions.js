

////////////////////////////////////////проверка форм

function checkUser (e) {

    
    
    loginForm.loginInput.setCustomValidity("")
    loginForm.passwordInput.setCustomValidity("")
    
    let user = false
    for(let i = 0; i < users.length; i++) {
        if(loginForm.loginInput.value == users[i].login && loginForm.passwordInput.value == users[i].password) {

            console.log('вы вошли в систему')
            user = true
            loginForm.loginInput.setCustomValidity("")
            loginForm.passwordInput.setCustomValidity("")
            localStorage.setItem('statusUser', JSON.stringify({login: users[i].login, status: true, admin: users[i].super, banned: users[i].banned}))
            break
        }
        if(loginForm.loginInput.value == users[i].login && loginForm.passwordInput.value != users[i].password) {

            loginForm.passwordInput.setCustomValidity("Ху*та (Неправильный пароль)")
            user = true
            break
        }        
    }
    if(user == false) {
        
            loginForm.loginInput.setCustomValidity("Нет такого пользователя")
        }
    return user
}

////////////////////////////////////////////////////

function checkLogin () {
    
    let check = true
    for(let i = 0; i < users.length; i++) {
        if(users[i].login === loginForm.loginInput.value) {

            let errorLogin = document.querySelector('.modal_content_login').firstElementChild
                errorLogin.textContent = "Занято, выбери другое"
                errorLogin.style.color = "red"
                setTimeout(() => {
                    errorLogin.textContent = "Введите имя пользователя"
                    errorLogin.style.color = "rgb(231, 231, 231)"}, 2000)
                loginForm.loginInput.setCustomValidity('Есть такой, всё ху*ня, давай сначала')
                check = false
                console.log('занято')                               ///тут ошибка, но я не пойму в чём дело,срабатывает два раза
                break
        }
        else{loginForm.loginInput.setCustomValidity("")}
    }
    return check        
}

///////////////////////////////////////////////////////////

function checkPassword () {

    let check = true
    if(loginForm.passwordInput.value.length <= 5) {

        let errorPassword = document.querySelector('#textPassword')
            errorPassword.textContent = "Не менее шести символов"
            errorPassword.style.color = "red"
                setTimeout(() => {
                    errorPassword.textContent = "Пароль"
                    errorPassword.style.color = "rgb(231, 231, 231)"}, 2000)
                loginForm.passwordInput.setCustomValidity('Нужно больше символов')
                check = false
                console.log('мало')                           ///////тут ошибка, но я не пойму в чём дело,срабатывает два раза и более
                return check                
    }
    else{
        loginForm.passwordInput.setCustomValidity("")
        return check
    }        
}

function addNewUser() {

    if(checkLogin() == true && checkPassword() == true) {
        
        console.log('вы зарегестрированы')

        let newUser = {login: loginForm.loginInput.value, password: loginForm.passwordInput.value, super: false, banned: false, message: []}
        let quantityKeys = onlyKeysUsersOfLocalStorage.length                                      //ВНИМАНИЕ !!! каждое обращение в не этого блока влечёт -1
            localStorage.setItem(quantityKeys, JSON.stringify(newUser))
    }
}

function searchMessage(text) {
    let searchResult = []
    document.querySelectorAll('.message_text').forEach(item => {
        if(item.textContent.includes(text)) {
            if(!item.closest('.comments')) {
                searchResult.push(item.closest('.element').outerHTML)
            }
        }
    })
    //console.log(searchResult)
    localStorage.setItem('activeSearch', JSON.stringify(searchResult))
    return searchResult
}

function darkMode () {
    document.querySelector('body').classList.add('dark_body')
    document.querySelectorAll('.element').forEach(item => item.classList.add('dark_element'))
    document.querySelectorAll('.element_name').forEach(item => item.classList.add('dark_element_name'))
    document.querySelectorAll('.message_text').forEach(item => item.classList.add('dark_message_text'))
    document.querySelectorAll('.comments > span').forEach(item => item.classList.add('dark_comments_span'))
    document.querySelector('.sidebar_time span').classList.add('dark_sidebar_time')
}

function darkModeOff () {
    document.querySelector('body').classList.remove('dark_body')
    document.querySelectorAll('.element').forEach(item => item.classList.remove('dark_element'))
    document.querySelectorAll('.element_name').forEach(item => item.classList.remove('dark_element_name'))
    document.querySelectorAll('.message_text').forEach(item => item.classList.remove('dark_message_text'))
    document.querySelectorAll('.comments > span').forEach(item => item.classList.remove('dark_comments_span'))
    document.querySelector('.sidebar_time span').classList.remove('dark_sidebar_time')
}
