const closeMenu = document.getElementById('closeMenu')
const openMenu = document.getElementById('openMenu')

closeMenu.addEventListener('click', menu)
openMenu.addEventListener('click', menu)

function menu (){
    const menu = document.getElementById('menu')

    if (openMenu.dataset.condition === 'on'){
        openMenu.dataset.condition = 'off'
        openMenu.style.display = 'none'
        closeMenu.style.display = 'inline'
        menu.style.display = 'flex'
    } else {
        openMenu.dataset.condition = 'on'
        openMenu.style.display = 'inline'
        closeMenu.style.display = 'none'
        menu.style.display = 'none'
    }
}