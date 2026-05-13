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
    /* MENU MOBILE */
        const menuToggle = document.querySelector(".menu-toggle");
        const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", () => {
         nav.classList.toggle("ativo");
    });
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
       link.addEventListener("click", () => {
         nav.classList.remove("ativo");
        });
    });
    /* LISTA DE ALUNOS FOOTER */
    const btnAlunos = document.getElementById("btnAlunos");
    const listaAlunos = document.getElementById("listaAlunos");

    btnAlunos.addEventListener("click", () => {
       listaAlunos.classList.toggle("ativo");
      btnAlunos.classList.toggle("ativo");
    });
    /* LOADING SCREEN */
    window.addEventListener("load", () => {

        const loading = document.getElementById("loading");

        setTimeout(() => {
            loading.style.opacity = "0";

            setTimeout(() => {
                loading.style.display = "none";
            }, 600);

        }, 1800);

    });

});