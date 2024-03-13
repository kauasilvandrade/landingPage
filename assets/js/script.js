let cabecalho = document.querySelector('.secaoTopoCabecalho');
let btnMenu = document.getElementById('secaoTopo__btnMenu');

function menuShow(event) {
    
    // MENU
    let listaMenu = document.querySelector('.secaoTopoCabecalho__listaMenu');
    listaMenu.classList.toggle('ativado');

    // ACESSIBILIDADE
    if (event.type == 'touchstart') event.preventDefault();    

    const menuAtivado = listaMenu.classList.contains('ativado');

    event.currentTarget.setAttribute('aria-expanded', menuAtivado)

    if (menuAtivado) {
        event.currentTarget.setAttribute('aria-label', 'Botão fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Botão abrir menu')
    }

}

btnMenu.addEventListener('click', menuShow)
btnMenu.addEventListener('touchstart', menuShow)


// document.addEventListener('scroll', function() {
    
//     let pos = 1173;
//     if (window.pageYOffset >= 1063) {
//         cabecalho.classList.add('scroll')
//     } else {
//         cabecalho.classList.remove('scroll')
//         btnMenu.classList.remove('ativado');
//         listaMenu.classList.remove('ativado');
//     }

// })