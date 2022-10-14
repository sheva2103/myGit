function newMessageModal() {

    return `
    <div class="newMessageModal">
        <div class="newMessage_text">
            <textarea name="" id="" cols="30" rows="4"></textarea>
        </div>
        <div class="newMessage_confirm">
            <button class="sliding-button">ОТПРАВИТЬ</button>
        </div>
    </div>`
}

function textNewMessage () {
    return document.querySelector('.newMessage_text > textarea').value
}


function saveElementsHTML() {

    let allPosts = []
    document.querySelectorAll('.wrapper > .element').forEach(item => {
        allPosts.push(item.outerHTML) ///создали строку
    })
    localStorage.setItem('allPost', JSON.stringify(allPosts))
    return allPosts
}

////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', (e) => {

//     window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

//     let openDB = indexedDB.open('elementHTML', 1)

//         openDB.onupgradeneeded = (event) => {

//             let DB = event.target.result
//             if(!DB.objectStoreNames.contains('Tasks')) {

//                 var ObjectStore = DB.createObjectStore('Tasks', {keyPath: 'id', autoIncrement: true})
//                     ObjectStore.createIndex('LoginValue', 'login', { unique: true })
//             }
//         }

//         openDB.onsuccess = (event) => {
            
//             console.log('база даных открыта')
//             db = event.target.result
//             showUser()
//         }

//         openDB.onerror = (event) => {
//             console.log('произошла ошибка')
//         }
// })

// function addUser(newUser) {

//     let transaction = db.transaction(['Tasks'], 'readwrite')
//     let store = transaction.objectStore('Tasks')
//     let Tasks = newUser
//     let req = store.add(Tasks)
//         req.onsuccess = (event) => {
//             alert('всё ок')

//         }
//         req.onerror = (event) => {
//             alert('ошибка')
//         }
// }

// function showUser(event) {

//     let transaction = db.transaction(['Tasks'], 'readonly')
//     let store = transaction.objectStore('Tasks')
//     let index = store.index('LoginValue')
//         index.openCursor().onsuccess = (event) => {

//             let cursor = event.target.result
            
//             if(cursor) {
//                 console.log(cursor.value.login)
//                 cursor.continue()
//             }
//         }
//         index.onerror = (event) => {
//             alert('ошибка showUser')
//         }
// }
///////////////////////////////////////////////////////////////////////////////