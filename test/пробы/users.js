let users = [

    {login: 'slavaariec',
    password: '12345678',
    super: true,
    banned: false,
    message: ['qqq'],
    qwe: 'qqqqqqqqqqq'
    }
]

////////////////////
let onlyKeysUsersOfLocalStorage = []   //только ключи объектов с пользователями
for( let i = 0; i < localStorage.length; i++) {
    if(isFinite(localStorage.key(i))) {
        onlyKeysUsersOfLocalStorage.push(localStorage.key(i))
    }    
}

onlyKeysUsersOfLocalStorage.forEach(item => {
    users.push(JSON.parse(localStorage.getItem(item)))
})


// const p = new Promise(function(resolve, reject) {
//     setTimeout(()=> {
//         console.log('start')
//         let qwe = 777
//         resolve(qwe)}, 2000)
// }
// )
// p.then((qwe)=> {console.log('konec', qwe)})

/////////////////////////////////////////////



