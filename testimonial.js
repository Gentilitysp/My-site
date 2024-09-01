document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelector('.testimonials-slider');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    const slides = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showSlide(index) {
        testimonials.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    // Optional: Auto-slide feature
    setInterval(function () {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    }, 5000); // Change every 5 seconds
});
