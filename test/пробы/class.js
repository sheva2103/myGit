class Post {

    _temp = false
    _tempOne

    constructor(options) {

        this.wrapper = document.querySelector(options.wrapper)
        this.amount = options.length
        this.userName = this.statusUser.login
        this.content = this.textNewMessage
        this.edit = options.edit
        this.delete = options.delete
    }

    render(place = this.wrapper, e = false, comment = true) {

        let elementNew = document.createElement('div')
        elementNew.classList.add('element')

        place.append(elementNew)
        Array.from(document.querySelectorAll('.element')).forEach(item => {
            if(!item.hasChildNodes()) {

                let userName = document.createElement('div')
                    userName.classList.add('element_name')
                    userName.textContent = this.userName
                    item.append(userName)
                let newNode = document.createElement('div')
                    newNode.classList.add('element_message')

                    let text = document.createElement('div')
                        text.classList.add('message_text')
                        text.textContent = this.content
                        newNode.append(text)
                    if(comment == true) {
                        let comments = document.createElement('div')
                            comments.classList.add('comments')
                        let commentsSpan = document.createElement('span')
                            commentsSpan.textContent = "Добавить комментарий"
                            comments.append(commentsSpan)
                        newNode.append(comments)
                    }

                    item.append(newNode)
                let edit = document.createElement('img')
                    edit.setAttribute('src', this.edit)
                    edit.setAttribute('id', 'edit')
                    edit.style.display = 'block'
                    item.append(edit)
                let deletePost = document.createElement('img')
                    deletePost.setAttribute('src', this.delete)
                    deletePost.setAttribute('id', 'delete')
                    deletePost.style.display = 'block'
                    item.append(deletePost)
            }
        })
        if(e.nextElementSibling) {
            e.closest('.comments').style.flexDirection = 'column'
            e.closest('.element').querySelectorAll('img').forEach(item => {
                item.style.alignSelf = 'start'
            })
        }
        if(localStorage.getItem('darkMode')) {darkMode()}
    }

    deletePost(i) {
        i.parentElement.classList.add('delpost')
        setTimeout(() => {i.parentElement.remove()
            saveElementsHTML()}, 1000)        
    }


    editPost(e, i) {

            if (i === e) {                
                if(i.getAttribute('src') == 'ok.png') {
                    let ooo = i.previousElementSibling.querySelector('textarea').value
                    i.setAttribute('src', 'pen.svg')
                    i.previousSibling.firstChild.innerHTML = `
                    <div class="message_text">${ooo}</div>
                    `
                    saveElementsHTML()
                }
                else {
                    console.log(document.querySelectorAll('.message_text > textarea').length)
                    if(document.querySelectorAll('.message_text > textarea').length == 1) {return}
                    let temp = i.previousSibling.querySelector('.message_text').textContent
                    let lengthText = temp.length
                    let textareaHeight

                    if(lengthText <= 100) textareaHeight = 2
                    if(lengthText <= 200) textareaHeight = 3
                    if(lengthText <= 300) textareaHeight = 4
                    if(lengthText <= 400) textareaHeight = 5
                    if(lengthText >= 500) textareaHeight = 6

                    i.previousSibling.firstChild.innerHTML = `
                    <textarea name="test" rows="${textareaHeight}">${temp}</textarea>`
                    i.setAttribute('src', 'ok.png')
                }
            }        
    }

    modalOpen(type = "") {

        if(document.querySelector('#mod_window').dataset.open == "open") return

        let login = this.wrapper
            document.querySelector('.modal_content_login').firstElementChild.textContent = type
            document.querySelector('#mod_window').dataset.open = "open"
            document.querySelector('.modal').style.display = "block"
            login.addEventListener('click', (e) => {
                if (e.target === document.querySelector('.modal_close') || e.target === document.querySelector('.modal_body')) {
                    document.querySelector('#mod_window').dataset.open = "close"
                    document.querySelector('.modal').style.display = "none"
                    document.forms.loginForm.loginInput.value = ""
                    document.forms.loginForm.passwordInput.value = ""
                    document.forms.loginForm.loginInput.removeEventListener('blur', checkLogin)
                    document.forms.loginForm.passwordInput.removeEventListener('blur', checkPassword)
                    document.querySelector("#submit").removeEventListener('click', addNewUser)                    
                }                
            })            
    }

    get statusUser() {       //вошел ли пользователь в систему

        if(!localStorage.getItem('statusUser')) return false
        return JSON.parse(localStorage.getItem('statusUser'))
    }
    get time() {return new Date}

    set textNewMessage(value) {
        this.content = value
    }

}

const t = new Post({
    wrapper: '.wrapper',
    edit: "pen.svg",
    delete: "trash-fill.svg",
    length: 3
})













