document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });


    document.querySelectorAll(".nav-menu a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");

            });

        });


    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(element => {

        observer.observe(element);

    });


    /* ==========================================
       CATEGORY FILTER
    ========================================== */

    const categoryButtons =
        document.querySelectorAll(".category");

    const allGallery =
        document.querySelector(".all-gallery");

    const categoryGalleries =
        document.querySelectorAll(".category-gallery");


    categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selected =
                button.dataset.category;


            /* Active button */

            categoryButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");


            /* ALL */

            if (selected === "all") {

                allGallery.style.display = "grid";

                categoryGalleries.forEach(gallery => {

                    gallery.style.display = "none";

                });

                return;

            }


            /* CATEGORY */

            allGallery.style.display = "none";


            categoryGalleries.forEach(gallery => {

                gallery.style.display = "none";

            });


            const selectedGallery =
                document.querySelector(
                    `[data-gallery="${selected}"]`
                );


            if (selectedGallery) {

                selectedGallery.style.display =
                    "block";


                selectedGallery.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });


    /* ==========================================
       LIGHTBOX
    ========================================== */

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxTitle =
        document.getElementById("lightboxTitle");

    const downloadImage =
        document.getElementById("downloadImage");

    const closeLightbox =
        document.getElementById("closeLightbox");


    const galleryImages =
        document.querySelectorAll(
            ".gallery-card img"
        );


    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.classList.add("active");

            lightboxImage.src =
                image.src;

            lightboxImage.alt =
                image.alt;

            lightboxTitle.textContent =
                image.alt.toUpperCase();


            downloadImage.href =
                image.src;

            downloadImage.download =
                image.src.split("/").pop();


            document.body.style.overflow =
                "hidden";

        });

    });


    function closeViewer() {

        lightbox.classList.remove("active");

        document.body.style.overflow =
            "";

    }


    closeLightbox.addEventListener(
        "click",
        closeViewer
    );


    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target === lightbox ||
                event.target === lightboxImage
            ) {

                closeViewer();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                lightbox.classList.contains("active")
            ) {

                closeViewer();

            }

        }
    );


    /* ==========================================
       IMAGE HOVER EFFECT
    ========================================== */

    document.querySelectorAll(".gallery-card")
        .forEach(card => {

            card.addEventListener(
                "mouseenter",
                () => {

                    card.style.transform =
                        "translateY(-4px)";

                    card.style.transition =
                        ".3s";

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "translateY(0)";

                }
            );

        });


    /* ==========================================
       SMOOTH PARALLAX GRAFFITI
    ========================================== */

    const graffiti =
        document.querySelectorAll(".graffiti");


    window.addEventListener(
        "scroll",
        () => {

            const scrollY =
                window.scrollY;


            graffiti.forEach(
                (item, index) => {

                    const movement =
                        scrollY *
                        (index === 0 ? 0.025 : -0.02);


                    item.style.transform =
                        `translateY(${movement}px)
                         rotate(${index === 0 ? -8 : 0}deg)`;

                }
            );

        },

        {
            passive: true
        }

    );


    /* ==========================================
       PUBLICATION IMAGE LIGHTBOX
    ========================================== */

    const editImages =
        document.querySelectorAll(
            ".edit-image img"
        );


    editImages.forEach(image => {

        image.style.cursor = "zoom-in";

        image.addEventListener(
            "click",
            () => {

                lightbox.classList.add("active");

                lightboxImage.src =
                    image.src;

                lightboxImage.alt =
                    image.alt;

                lightboxTitle.textContent =
                    image.alt.toUpperCase();

                downloadImage.href =
                    image.src;

                downloadImage.download =
                    image.src.split("/").pop();

                document.body.style.overflow =
                    "hidden";

            }
        );

    });

});