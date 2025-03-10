document.addEventListener("DOMContentLoaded", function () {
    const photoElement = document.getElementById("profilePhoto");
    const images = ["RICARDO_FOTO.jpg", "RC_DEV logo_novo.jpg"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;
        photoElement.style.opacity = "0";

        setTimeout(() => {
            photoElement.src = images[index];
            photoElement.style.opacity = "1";
        }, 700);
    }, 4000);
});


        let currentIndexA = 0;
        let currentIndexB = 0;

        function moveCarousel(direction, carouselType) {
            const slides = document.querySelectorAll(`.${carouselType} .carousel-slide`);
            const totalSlides = slides.length;

            if (carouselType === 'portfolio-b') {
                currentIndexB += direction;
                if (currentIndexB < 0) {
                    currentIndexB = totalSlides - 1;
                } else if (currentIndexB >= totalSlides) {
                    currentIndexB = 0;
                }
                updateCarousel('portfolio-b', currentIndexB);
            } else {
                currentIndexA += direction;
                if (currentIndexA < 0) {
                    currentIndexA = totalSlides - 1;
                } else if (currentIndexA >= totalSlides) {
                    currentIndexA = 0;
                }
                updateCarousel('portfolio', currentIndexA);
            }
        }

        function moveToSlide(index, carouselType) {
            const slides = document.querySelectorAll(`.${carouselType} .carousel-slide`);
            const totalSlides = slides.length;

            if (index < 0 || index >= totalSlides) return;

            if (carouselType === 'portfolio-b') {
                currentIndexB = index;
                updateCarousel('portfolio-b', currentIndexB);
            } else {
                currentIndexA = index;
                updateCarousel('portfolio', currentIndexA);
            }
        }

        function updateCarousel(carouselType, index) {
            const carouselContainer = document.querySelector(`.${carouselType} .carousel-container`);
            carouselContainer.style.transform = `translateX(-${index * 100}%)`;


            const dots = document.querySelectorAll(`.${carouselType} .dot`);
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === index);
            });
        }
