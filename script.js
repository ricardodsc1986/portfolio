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
