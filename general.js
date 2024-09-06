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

