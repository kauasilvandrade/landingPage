// ABRIR E FECHAR MENU
let btnMenu = document.getElementById('secaoTopo__btnMenu');
function menuShow(event) {
    
    // MENU
    let listaMenu = document.querySelector('.secaoTopoCabecalho__listaMenu');
    listaMenu.classList.toggle('ativado');
    window.addEventListener('scroll', () => listaMenu.classList.remove('ativado'))
    
    // BOTÃO MENU
    btnMenu.classList.toggle('ativado');
    window.addEventListener('scroll', () => btnMenu.classList.remove('ativado'))
    
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

// MOSTRAR NOVO CABEÇALHO AO SER SCROLADO
let cabecalho = document.querySelector('.secaoTopoCabecalho');
window.addEventListener('scroll', () => cabecalho.classList.toggle('scroll', window.scrollY > 50));

// ANIMAÇÃO SCROLL
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args)
    };
};



const target = document.querySelectorAll('[data-anime');
const animationClass = 'animate';

function animeScoll() {

    const windowTop = window.scrollY + (window.innerHeight * 3 / 4);
    
    target.forEach(function(elemento) {

        if ((windowTop) > elemento.offsetTop) {
            elemento.classList.add(animationClass);
        } else {
            elemento.classList.remove(animationClass);
        }

    })
}

animeScoll();

if (target.length) {
    window.addEventListener('scroll', debounce(animeScoll, 200));
}
