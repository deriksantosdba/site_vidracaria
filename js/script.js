document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll('.animar');

    function animarScroll() {
        const topoTela = window.scrollY + window.innerHeight * 0.85;

        elementos.forEach(el => {
            if (topoTela > el.offsetTop) {
                el.classList.add('ativo');
            }
        });
    }

    window.addEventListener('scroll', animarScroll);
    animarScroll();

});