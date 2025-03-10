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
    const carousel = document.querySelector(`#${carouselId} .carousel-container`);
    const slides = document.querySelectorAll(`#${carouselId} .carousel-slide`);
    let currentIndex = Array.from(slides).findIndex(slide => slide.style.display !== "none");

    slides[currentIndex].style.display = "none";
    let newIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[newIndex].style.display = "block";
}

function moveToSlide(index, carouselId) {
    const slides = document.querySelectorAll(`#${carouselId} .carousel-slide`);
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
}
