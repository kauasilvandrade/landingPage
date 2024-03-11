let cabecalho = document.querySelector('.secaoTopoCabecalho')
let btnMenu = document.getElementById('secaoTopo__btnMenu');
let listaMenu = document.querySelector('.secaoTopoCabecalho__listaMenu');

btnMenu.addEventListener('click', function() {
    btnMenu.classList.toggle('ativado');
    listaMenu.classList.toggle('ativado');
})


document.addEventListener('scroll', function() {
    
    let pos = 1063;
    if (window.pageYOffset >= 1063) {
        cabecalho.classList.add('scroll')
    } else {
        cabecalho.classList.remove('scroll')
        btnMenu.classList.remove('ativado');
        listaMenu.classList.remove('ativado');
    }

})