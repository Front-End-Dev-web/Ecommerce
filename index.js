let header  = document.querySelector('header')
let nav1  = document.querySelector('.nav1')
// let category = document.querySelector('.category a')
window.onscroll = ()=>{
    if(window.scrollY>50){
        header.classList.add('active')
        // category.classList.add('active-cat')
        nav1.classList.add('active-nav')
    }else if(window.scrollY<50){
        header.classList.remove('active')
        nav1.classList.remove('active-nav')
        // category.classList.remove('active-cat')
    }
}