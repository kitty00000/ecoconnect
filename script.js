const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

prevButton.addEventListener('click', () => {
    currentSlide = Math.max(currentSlide - 1, 0);
    track.style.transform = `translateX(-${currentSlide * 220}px)`;
});

nextButton.addEventListener('click', () => {
    const totalSlides = track.children.length;
    currentSlide = Math.min(currentSlide + 1, totalSlides - 1);
    track.style.transform = `translateX(-${currentSlide * 220}px)`;
});
