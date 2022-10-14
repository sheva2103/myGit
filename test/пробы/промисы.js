console.log('Request data...')
const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

// p.then((backendData) => {
//     //console.log('Promise resolved', backendData)
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             backendData.modified = true
//             resolve(backendData)
//         }, 2000)
//     })
//     p2.then(clientData => {
//         console.log('Data recilved', clientData)
//     })
// })                                                      первый варинт, немного длиней

p.then((backendData) => { //аргумент который передели в resolved (тут можно давать любое имя и с ним дальше работать)

    return new Promise((resolve, reject) => {  //можно возвращать и обычные данные
        setTimeout(() => {
            backendData.modified = true
            resolve(backendData) //аргумент функции resolved будет передаваться в следующий then
            //reject(backendData) //вызываем вместо resolve чтоб обработать ошибку и обращаемся к ней через .catch
        }, 2000)
    })
})
.then(clientData => {
    console.log('Data recilved', clientData)
    clientData.fromPromise = true
    return clientData //возвращаем обычные данные
})
.then(data => {console.log('Modified', data)}) //получаем те самые обычные данные
.catch((err) => {console.error('Error: ', err)}) //тут обрабатываем ошибку
.finally(() => console.log('Finaly')) //вызывается в любом случае (хоть есть ошибка хоть нет)


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
} //вызываем ниже(раскоментировать нужно)

//sleep(5000).then(() => console.log('After 5 sec')) //ф-я добавляет определённую задержку

Promise.all([sleep(5000), sleep(6000)]) //принимает массив промисов и выполняется когда они все завершатся
    .then(() => {
        console.log('All promises')
    })

Promise.race([sleep(5000), sleep(6000)]) //принимает массив промисов и выполняется когда любой первый промис выполнется
    .then(() => {
        console.log('Race promises')
    })