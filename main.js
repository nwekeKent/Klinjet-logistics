const menubar = document.querySelector('.menu-bar')
const burger = document.querySelector('.burger')
const hide = document.querySelector('.delete')
const nav = document.querySelector('.the-nav')

function showNav() {
    menubar.style.display = 'block'
    burger.style.display = 'none'
    hide.style.display = 'block'
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    
}
function hideNav() {
    menubar.style.display = 'none'
    burger.style.display = 'block'
    hide.style.display = 'none'
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    
}

burger.addEventListener('click',showNav)
hide.addEventListener('click',hideNav)
