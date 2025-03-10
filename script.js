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


let currentIndex = 0;

function moveCarousel(direction, carouselType) {
    const slides = document.querySelectorAll(`.${carouselType} .carousel-slide`);
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateCarousel(carouselType, currentIndex);
}

function moveToSlide(index, carouselType) {
    updateCarousel(carouselType, index);
}

function updateCarousel(carouselType, index) {
    const carouselContainer = document.querySelector(`.${carouselType} .carousel`);
    carouselContainer.style.transform = `translateX(-${index * 100}%)`;

    
    const dots = document.querySelectorAll(`.${carouselType} .dot`);
    dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === index);
    });

   
    currentIndex = index;
}


