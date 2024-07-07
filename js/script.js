const closeMenu = document.getElementById('closeMenu')
const openMenu = document.getElementById('openMenu')
const closeWhatsapp = document.getElementById('closeWhatsapp')
const whatsapp = document.getElementById('whatsapp')

closeMenu.addEventListener('click', menu)
openMenu.addEventListener('click', menu)
closeWhatsapp.addEventListener('click', closedWhatsapp)
whatsapp.addEventListener('click', sendWhatsapp)

function menu() {
    const menu = document.getElementById('menu')

    if (openMenu.dataset.condition === 'on') {
        openMenu.dataset.condition = 'off'
        openMenu.style.display = 'none'
        closeMenu.style.display = 'inline'
        menu.style.width = '100vw'
        // menu.style.display = 'flex'
    } else {
        openMenu.dataset.condition = 'on'
        openMenu.style.display = 'inline'
        closeMenu.style.display = 'none'
        menu.style.width = '0vw'
        // menu.style.display = 'none'
    }
}

function closedWhatsapp() {
    const btnWhatsapp = document.getElementById('btnWhatsapp')
    btnWhatsapp.style.display = 'none'
}

function sendWhatsapp() {
    const message = 'Olá, quero marcar uma avaliação!'
    const phone = "945298541"
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
}
