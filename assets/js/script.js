// ABRIR E FECHAR MENU
let btnMenu = document.getElementById('secaoTopo__btnMenu');
function menuShow(event) {
    
    // MENU
    let listaMenu = document.querySelector('.secaoTopoCabecalho__listaMenu');
    listaMenu.classList.toggle('ativado');
    
    // BOTÃO MENU
    btnMenu.classList.toggle('ativado');
    
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