// carousel.js
document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const blogsSlide = document.querySelector('.blogs-slide');
    const blogPosts = document.querySelectorAll('.blog-posts');
    const totalPosts = blogPosts.length;
    const postWidth = blogPosts[0].clientWidth + 30; // width + gap
    let currentIndex = 0;
    let autoSlideInterval;
    const autoSlideTime = 7000; // 7 seconds

    // Function to update the carousel position
    function updateCarousel() {
        blogsSlide.style.transform = `translateX(-${currentIndex * postWidth}px)`;
    }

    // Next Slide
    function nextSlide() {
        if (currentIndex < totalPosts - getVisiblePosts()) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to start
        }
        updateCarousel();
    }

    // Previous Slide
    function prevSlideFunc() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalPosts - getVisiblePosts(); // Loop to last
        }
        updateCarousel();
    }

    // Determine number of visible posts based on screen width
    function getVisiblePosts() {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 2;
        if (window.innerWidth <= 1024) return 3;
        return 8; // Default for larger screens
    }

    // Event Listeners for buttons
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlideFunc();
        resetAutoSlide();
    });

    // Auto Slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, autoSlideTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    // Start auto-sliding
    startAutoSlide();

    // Pause auto-slide on mouseover
    blogsSlide.addEventListener('mouseover', stopAutoSlide);
    blogsSlide.addEventListener('mouseout', startAutoSlide);

    // Swipe Support
    let startX;
    let isSwiping = false;

    blogsSlide.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
        stopAutoSlide();
    });

    blogsSlide.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;
        if (diff > 50) {
            nextSlide();
            resetAutoSlide();
            isSwiping = false;
        } else if (diff < -50) {
            prevSlideFunc();
            resetAutoSlide();
            isSwiping = false;
        }
    });

    blogsSlide.addEventListener('touchend', () => {
        isSwiping = false;
        startAutoSlide();
    });

    // Adjust carousel on window resize
    window.addEventListener('resize', () => {
        updateCarousel();
    });

    // Initialize carousel position
    updateCarousel();
});


// Handle "Read More" Button Clicks
document.querySelectorAll('.readMore-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        window.location.href = `blog.html?id=${id}`;
    });
});


// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: false, // Hide navigation on very small screens
        },
    },
});

// Handle "Read More" Button Clicks with Swiper
document.querySelectorAll('.readMore-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        window.location.href = `blog.html?id=${id}`;
    });
});

