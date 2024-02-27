let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
});

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

function changeSlide(step) {
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

// Для автоматического переключения слайдов
setInterval(() => {
    changeSlide(1);
}, 3000); // Интервал в 3 секунды

// Инициализация первого слайда
showSlide(slideIndex);
