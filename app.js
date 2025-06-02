function aparecimento() {
    let menubile = document.querySelector('.menubile');
    if (menubile.classList.contains('aberto')) {
        menubile.classList.remove('aberto');
    } else {
        menubile.classList.add('aberto')
    }
    
}
