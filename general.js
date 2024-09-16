document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('#menu-toggle');
    const navMenu = document.querySelector('#navmenu');
    const searchIcon = document.querySelector('#search-icon');
    const searchContainer = document.querySelector('#search-container');
    const searchClose = document.querySelector('#search-close');
    const searchInput = document.querySelector('#search-input');
    const searchButton = document.querySelector('#search-btn');
    const searchableItems = document.querySelectorAll('.searchable-item');

    // Toggle navmenu on hamburger click
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Show search bar when search icon is clicked
    searchIcon.addEventListener('click', function (e) {
        e.preventDefault();
        searchContainer.classList.toggle('active');
    });

    // Close search bar on clicking close button
    searchClose.addEventListener('click', function () {
        searchContainer.classList.remove('active');
        searchInput.value = ''; 
        resetResults();
    });

    // Function to reset all searchable items (display everything)
    function resetResults() {
        searchableItems.forEach(item => {
            item.style.setProperty('display', 'block', 'important'); // Ensure all items are shown
            console.log('Showing all items initially');
        });
        hideResultsContainer(); // Hide results container initially
    }

    // Function to show the container for displaying search results
    function showResultsContainer() {
        const resultsContainer = document.querySelector('.results-container');
        resultsContainer.style.display = 'block'; // Show the container
    }

    // Function to hide the results container
    function hideResultsContainer() {
        const resultsContainer = document.querySelector('.results-container');
        resultsContainer.style.display = 'none'; // Hide the container
    }

    // Function to filter search results across searchable items
    function filterResults() {
        const query = searchInput.value.toLowerCase().trim(); // Get search query

        // Reset results if the query is empty
        if (query === "") {
            resetResults();
        } else {
            let matchFound = false;

            searchableItems.forEach(item => {
                // Check if the item text includes the search query
                if (item.innerText.toLowerCase().includes(query)) {
                    item.style.setProperty('display', 'block', 'important'); // Show the matching item
                    matchFound = true;
                } else {
                    item.style.setProperty('display', 'none', 'important'); // Hide the non-matching item
                }
            });

            if (matchFound) {
                console.log('Match found for:', query);
                showResultsContainer(); // Show results only if matches are found
            } else {
                console.log('No matches found for query:', query); // Debug message for no matches
                hideResultsContainer(); // Hide results if no matches are found
            }
        }
    }

    // Search button click event
    searchButton.addEventListener('click', function () {
        filterResults(); // Trigger search on button click
    });

    // Search using the "Enter" key
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent page refresh
            filterResults(); // Trigger search on Enter press
        }
    });
});


// Hero Section JS
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide'); // Get all slides
    const exploreBtn = document.querySelector('.btn'); // "Explore My Work" button
    let currentSlide = 0; // Starting with the first slide
    const slideInterval = 5000; // Set time interval to 5 seconds

    // Function to switch to the next slide
    function showNextSlide() {
        slides[currentSlide].classList.remove('active'); // Remove 'active' class from the current slide
        currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide, loop back to the first slide if at the end
        slides[currentSlide].classList.add('active'); // Add 'active' class to the new current slide
    }

    // Auto-slide function: transitions between slides every 5 seconds
    setInterval(showNextSlide, slideInterval);

    // "Explore My Work" button click event - smooth scroll to the portfolio section
    exploreBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default action (if using a link)
        document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the portfolio section
    });
});


// About Us page integration
document.addEventListener('DOMContentLoaded', function () {
    const aboutLink = document.querySelector('a[href="#about"]');
    const skillsLink = document.querySelector('a[href="#skills"]');

    const aboutSection = document.querySelector('#about');
    const skillsSection = document.querySelector('#skills');

    aboutLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        aboutSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the About section
    });

    skillsLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        skillsSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the About section
    });
});



// JS to mute the videos from playing on their own
document.addEventListener('DOMContentLoaded', function() {
    // Select all video elements and mute icons
    const videos = document.querySelectorAll('.video-container video');
    const muteIcons = document.querySelectorAll('.mute-icon');

    // Function to mute all videos
    function muteAllVideos() {
        videos.forEach(video => {
            video.muted = true;
        });

        // Update all mute icons to the muted state
        muteIcons.forEach(icon => {
            icon.innerHTML = '&#x1F507;'; // Muted icon (Speaker with X)
            icon.setAttribute('data-muted', 'true');
        });
    }

    // Mute all videos on page load
    muteAllVideos();

    // Loop through each video and its corresponding mute icon
    videos.forEach((video, index) => {
        const muteIcon = muteIcons[index];

        // Autoplay the video on mute
        video.play();

        // Handle the click event on the mute icon
        muteIcon.addEventListener('click', function() {
            const isMuted = muteIcon.getAttribute('data-muted') === 'true';

            // Mute all videos before unmuting the clicked one
            muteAllVideos();

            // Toggle mute/unmute for the clicked video
            if (isMuted) {
                video.muted = false;
                muteIcon.innerHTML = '&#x1F50A;'; // Unmuted icon (Speaker with sound waves)
                muteIcon.setAttribute('data-muted', 'false');
            } else {
                video.muted = true;
                muteIcon.innerHTML = '&#x1F507;'; // Muted icon (Speaker with X)
                muteIcon.setAttribute('data-muted', 'true');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tutorialsWrapper = document.querySelector('.tutorials-wrapper');
    const tutorialSlide = document.querySelector('.tutorial-slide');
    const tutorialCards = document.querySelectorAll('.tutorial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    let visibleCards = 3.5; // Default for larger screens
    let totalCards = tutorialCards.length;

    // Function to determine the number of visible cards based on screen size
    function calculateVisibleCards() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 450) {
        visibleCards = 1; // For small screens
        } else if (screenWidth <= 768) {
        visibleCards = 2.5; // For medium screens
        } else {
            visibleCards = 3.5; // For large screens
        }

        // Set the correct flex-basis for the cards based on the screen size
        tutorialCards.forEach(card => {
            card.style.flex = `0 0 calc(100% / ${visibleCards})`;
            card.style.maxWidth = `calc(100% / ${visibleCards})`;
        });
    }

    // Function to calculate total width of all slides
    function getSlideWidth() {
        return tutorialCards[0].getBoundingClientRect().width + parseInt(window.getComputedStyle(tutorialCards[0]).marginRight);
    }

    // Scroll the carousel to the next set of slides
    function scrollCarousel(direction) {
        const slideWidth = getSlideWidth();

        if (direction === 'next') {
            currentIndex++;
            if (currentIndex > totalCards - visibleCards) {
                currentIndex = 0; // Loop back to start
            }
        } else if (direction === 'prev') {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = totalCards - Math.ceil(visibleCards); // Loop to the last set of slides
            }
     }

        tutorialSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Add event listeners for buttons
    nextBtn.addEventListener('click', () => scrollCarousel('next'));
    prevBtn.addEventListener('click', () => scrollCarousel('prev'));

    // Recalculate visible cards and slide widths on window resize
    window.addEventListener('resize', function () {
    calculateVisibleCards();
    });

    // Initial setup
    calculateVisibleCards();

    // Optional: Auto-scroll the carousel if needed
    setInterval(() => {
        scrollCarousel('next');
    }, 10000); // Auto-scroll every 10 seconds

    // Handle card click to expand and navigate
    tutorialCards.forEach((card, index) => {
        card.addEventListener('click', function () {
            // Set the clicked card to expand to 70% of the screen width
            tutorialCards.forEach(c => {
                c.style.flex = '0 0 30%'; // Shrink other cards to 30%
                c.style.maxWidth = '30%';
            });
            card.style.flex = '0 0 70%'; // Expand clicked card to 70%
            card.style.maxWidth = '70%';
        
            // Optional: Add a class for expanded view if necessary
            card.classList.add('expanded');

            // Redirect the user to the tutorial page (you can customize the URL here)
            window.location.href = `/tutorials/${index + 1}`; // Assuming the URL for the tutorial pages are structured this way
        });
    });
});



// Portfolio Homepage
document.addEventListener('DOMContentLoaded', () => {
    // Get all the "View Project" links
    const projectLinks = document.querySelectorAll('.project a');

    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
                
            // Get the project title and description from the clicked project
            const projectTitle = link.previousElementSibling.previousElementSibling.textContent;
            const projectDescription = link.previousElementSibling.textContent;

            // Store project details in localStorage to pass them to the portfolio page
            localStorage.setItem('projectTitle', projectTitle);
            localStorage.setItem('projectDescription', projectDescription);

            // Redirect to the portfolio page
            window.location.href = 'portfolio.html';
        });
    });
});

