


window.addEventListener('click', (e) => {

    if(e.target == document.querySelector('.btn-primary')) {
        if( window.innerWidth < 1169 ) {
            document.getElementById('sidedrawer').classList.remove('active')
            //document.body.classList.remove('mui-scroll-lock')
            //document.querySelector('.modal-backdrop').remove()
        }
    }
})