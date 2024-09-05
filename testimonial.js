document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelector('.testimonials-grid');
    const prevButton = document.querySelector('.test-prev-btn');
    const nextButton = document.querySelector('.test-next-btn');
    const cards = document.querySelectorAll('.testimonial-card');
    let startIndex = 0;
    let visibleCardsCount = 4;
    
    
    function calculateVisibleCardsCount() {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1200) {
            visibleCardsCount = 4;
        } else if (screenWidth >=768) {
            visibleCardsCount =3.5;
        } else if (screenWidth >= 450) {
            visibleCardsCount = 3;
        } else {
            visibleCardsCount = 2;
        }
    }
    

    function updateGrid() {
        // Hide all cards initially
        cards.forEach(card => {
            card.style.display = 'none';
        });

        // Show the next set of cards starting from startIndex
        for (let i = startIndex; i < startIndex + visibleCardsCount; i++) {
            if (cards[i]) {
                cards[i].style.display = 'block';
            }
        }
    }

    function showSlide(index) {
        startIndex = index;
        updateGrid();
    }

    prevButton.addEventListener('click', function () {
        if (startIndex - 1 >= 0) {
            startIndex -= 1; // Move backward by 2 cards
        } else {
            startIndex = Math.max(0, cards.length - visibleCardsCount); // Go to the last full set
        }
        showSlide(startIndex);
    });

    nextButton.addEventListener('click', function () {
        if (startIndex + visibleCardsCount < cards.length) {
            startIndex += 1; // Move forward by 2 cards
        } else {
            startIndex = 0; // Reset to the beginning if at the end
        }
        showSlide(startIndex);
    });

    // Auto-slide feature
    setInterval(function () {
        if (startIndex + visibleCardsCount < cards.length) {
            startIndex += 1; // Move forward by 2 cards
        } else {
            startIndex = 0; // Reset to the beginning if at the end
        }
        showSlide(startIndex);
    }, 7000); // Change every 7 seconds

    // Initial grid update
    calculateVisibleCardsCount();
    updateGrid();

    // Update the number of visible cards on the window resize
    window.addEventListener('resize', function () {
        calculateVisibleCardsCount();
        updateGrid();
    });
});
