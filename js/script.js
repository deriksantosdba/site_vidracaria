document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll('.animar');
    const links = document.querySelectorAll('nav a');

    function animarScroll() {
        const topoTela = window.scrollY + window.innerHeight * 0.85;

        elementos.forEach(el => {
            if (topoTela > el.offsetTop) {
                el.classList.add('ativo');
            }
        });

        let scrollPos = window.scrollY;

        document.querySelectorAll("section").forEach(sec => {
            const top = sec.offsetTop - 100;
            const height = sec.offsetHeight;
            const id = sec.getAttribute("id");

            if (scrollPos >= top && scrollPos < top + height) {
                links.forEach(link => {
                    link.classList.remove("ativo");

                    if (link.getAttribute("href") === "#" + id) {
                        link.classList.add("ativo");
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', animarScroll);
    animarScroll();

    /* LIGHTBOX GALERIA */
    const imagensGaleria = document.querySelectorAll(".galeria img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const fechar = document.getElementById("fechar");

    imagensGaleria.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    fechar.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

});