function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar/ocultar el botón según el scroll
window.onscroll = function() {
    const btn = document.querySelector('.scroll-top-btn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
};