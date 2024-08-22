let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);
