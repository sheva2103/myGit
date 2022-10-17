function fetchTest (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json[0].name))
    //.then(name => console.log(json[0].name))
    .catch(er => console.error('упс', er))
}


document.getElementById('test1').addEventListener('click', fetchTest)