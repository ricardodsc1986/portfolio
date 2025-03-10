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


function moveCarousel(direction, carouselId) {
    const carousel = document.querySelector(`.${carouselId} .carousel-container`);
    const slides = document.querySelectorAll(`.${carouselId} .carousel-slide`);
    const totalSlides = slides.length;
    let currentIndex = parseInt(carousel.dataset.index || "0");

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    carousel.dataset.index = currentIndex;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveToSlide(index, carouselId) {
    const carousel = document.querySelector(`.${carouselId} .carousel-container`);
    carousel.dataset.index = index;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function updateCarousel(carouselType, index) {
    const carouselContainer = document.querySelector(`.${carouselType} .carousel`);
    carouselContainer.style.transform = `translateX(-${index * 100}%)`;

    const dots = document.querySelectorAll(`.${carouselType} .dot`);
    dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === index);
    });
}
