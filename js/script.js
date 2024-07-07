const closeMenu = document.getElementById('closeMenu')
const openMenu = document.getElementById('openMenu')
const closeWhatsapp = document.getElementById('closeWhatsapp')
const whatsapp = document.getElementById('whatsapp')
const hirePlans1 = document.getElementById('HirePlans1')
const hirePlans2 = document.getElementById('HirePlans2')
const hirePlans3 = document.getElementById('HirePlans3')

closeMenu.addEventListener('click', menu)
openMenu.addEventListener('click', menu)
closeWhatsapp.addEventListener('click', closedWhatsapp)
whatsapp.addEventListener('click', function() { sendWhatsapp(0); })
hirePlans1.addEventListener('click', function() { sendWhatsapp(1); })
hirePlans2.addEventListener('click', function() { sendWhatsapp(2); })
hirePlans3.addEventListener('click', function() { sendWhatsapp(3); })

function menu() {
    const menu = document.getElementById('menu')

    if (openMenu.dataset.condition === 'on') {
        openMenu.dataset.condition = 'off'
        openMenu.style.display = 'none'
        closeMenu.style.display = 'inline'
        menu.style.width = '100vw'
    } else {
        openMenu.dataset.condition = 'on'
        openMenu.style.display = 'inline'
        closeMenu.style.display = 'none'
        menu.style.width = '0vw'
    }
}

function closedWhatsapp() {
    const btnWhatsapp = document.getElementById('btnWhatsapp')
    btnWhatsapp.style.display = 'none'
}

function sendWhatsapp(btn) {
    let message
    const phone = "945298541"
    if (btn === 0) {
        message = 'Olá, quero marcar uma avaliação!'
    } else if (btn === 1) {
        message = 'Olá, gostaria de contratar o *Plano Básico: Manutenção Preventiva*'
    } else if (btn === 2) {
        message = 'Olá, gostaria de contratar o *Plano Família: Cuidados Abrangentes*'
    } else if (btn === 3) {
        message = 'Olá, gostaria de contratar o *Plano Premium: Sorriso Completo*'
    }

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
}
