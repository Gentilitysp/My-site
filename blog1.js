    // Blog Section Interactivity
    document.addEventListener('DOMContentLoaded', () => {
        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const blogsSlide = document.querySelector('.blogs-slide');

        let scrollAmount = 0;
        let maxScroll = blogsSlide.scrollWidth - blogsSlide.clientWidth;

        nextBtn.addEventListener('click', () => {
            scrollAmount += blogsSlide.clientWidth;
            if (scrollAmount > maxScroll) {
                scrollAmount = 0;
            }
            blogsSlide.style.transform = `translateX(-${scrollAmount}px)`;
        });

        prevBtn.addEventListener('click', () => {
            scrollAmount -= blogsSlide.clientWidth;
            if (scrollAmount < 0) {
                scrollAmount = maxScroll;
            }
            blogsSlide.style.transform = `translateX(-${scrollAmount}px)`;
        });

        // Read More Button Click
        const readMoreBtns = document.querySelectorAll('.readMore-btn');
        readMoreBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                window.location.href = `#full-blog`; // Navigate to the full blog section
                // Load the corresponding blog content
            });
        });

        // Back to Home Button
        function goBack() {
            window.location.href = "index.html"; // Adjust the URL as needed
        }

        // Auto-scroll functionality
        setInterval(() => {
            nextBtn.click();
        }, 5000); // Adjust timing for slower auto-scroll

    });



    <!-- Blog Section -->
    <section id="blogs">
        <div class="container">
            <h2>Blog News</h2>
            <div class="blogs-carousel">
                <button class="carousel-btn prev-btn">&#10094;</button>
                <div class="blogs-wrapper">
                    <div class="blogs-slide">
                        <div class="blog-posts">
                            <img src="assets/img/IMG-20231001-WA0022.jpg" frameborder="0" allowfullscreen></img>
                            <h3>Blog Post 1</h3>
                            <p>Description of the Blog News.</p>
                            <button class="readMore-btn">Read more</button>
                        </div>
                        <div class="blog-posts">
                            <iframe src="https://player.vimeo.com/video/975351736" frameborder="0" allowfullscreen></iframe>
                            <h3>Blog Postl 2</h3>
                            <p>Description of the Blog News.</p>
                            <button class="readMore-btn">Read more</button>
                        </div>
                        <div class="blog-posts">
                            <img src="assets/img/IMG-20231001-WA0022.jpg" frameborder="0" allowfullscreen></img>
                            <h3>Blog Post 3</h3>
                            <p>Description of the Blog News.</p>
                            <button class="readMore-btn">Read more</button>
                        </div>
                        <div class="blog-posts">
                            <iframe src="https://player.vimeo.com/video/975351736" frameborder="0" allowfullscreen></iframe>
                            <h3>Blog Postl 4</h3>
                            <p>Description of the Blog News.</p>
                            <button class="readMore-btn">Read more</button>
                        </div>
                        <div class="blog-posts">
                            <img src="assets/img/IMG-20231001-WA0040.jpg" frameborder="0" allowfullscreen></img>
                            <h3>Blog Post 5</h3>
                            <p>Description of the Blog News.</p>
                            <button class="readMore-btn">Read more</button>
                        </div>
                        <div class="blog-posts">
                            <iframe src="https://player.vimeo.com/video/975351736" frameborder="0" allowfullscreen></iframe>
                            <h3>Blog Postl 6</h3>
                            <p>Description of the Blog News.</p>
                            <button class="readMore-btn">Read more</button>
                        </div>
                        <div class="blog-posts">
                            <img src="assets/img/IMG-20231001-WA0022.jpg" frameborder="0" allowfullscreen></img>
                            <h3>Blog Post 1</h3>
                            <p>Description of the Blog News.</p>
                            <button class="readMore-btn">Read more</button>
                        </div>
                        <div class="blog-posts">
                            <iframe src="https://player.vimeo.com/video/975351736" frameborder="0" allowfullscreen></iframe>
                            <h3>Blog Postl 2</h3>
                            <p>Description of the Blog News.</p>
                            <button class="readMore-btn">Read more</button>
                        </div>
                        <!-- Add more blog posts here -->
                    </div>
                </div>
                <button class="carousel-btn next-btn">&#10095;</button>
            </div>
        </div>
    </section>

    <!-- <section id="blog">
        <div class="container">
            <h2>Blog News</h2>
            <div class="blog-carousel">
                <button class="carousel-control-prev" onclick="prevSlide()">&#10094;</button>
                
                <div class="blog-posts">
                    <div class="post">
                        <img src="assets/img/IMG-20231001-WA0040.jpg" alt="Blog Post 1">
                        <h3>Blog Post 1</h3>
                        <p>Introduction to the post...</p>
                        <a href="blog-page1.html" class="read-more">Read more</a>
                    </div>
                    <div class="post">
                        <iframe src="https://vimeo.com/975351736" frameborder="0" allowfullscreen></iframe>
                        <h3>Blog Post 2</h3>
                        <p>Introduction to the post...</p>
                        <a href="blog-page2.html" class="read-more">Read more</a>
                    </div>
                    <div class="post">
                        <img src="assets/img/IMG-20231001-WA0040.jpg" alt="Blog Post 1">
                        <h3>Blog Post 3</h3>
                        <p>Introduction to the post...</p>
                        <a href="blog-page1.html" class="read-more">Read more</a>
                    </div>
                    <div class="post">
                        <iframe src="https://vimeo.com/975351736" frameborder="0" allowfullscreen></iframe>
                        <h3>Blog Post 4</h3>
                        <p>Introduction to the post...</p>
                        <a href="blog-page2.html" class="read-more">Read more</a>
                    </div>
                    <div class="post">
                        <img src="assets/img/IMG-20231001-WA0040.jpg" alt="Blog Post 1">
                        <h3>Blog Post 5</h3>
                        <p>Introduction to the post...</p>
                        <a href="blog-page1.html" class="read-more">Read more</a>
                    </div>
                    <div class="post">
                        <iframe src="https://vimeo.com/975351736" frameborder="0" allowfullscreen></iframe>
                        <h3>Blog Post 6</h3>
                        <p>Introduction to the post...</p>
                        <a href="blog-page2.html" class="read-more">Read more</a>
                    </div>
                   
                </div>
                
                <button class="carousel-control-next" onclick="nextSlide()">&#10095;</button>
            </div>
        </div>
    </section> -->
    
    <section id="full-blog">
        <div class="container">
            <button onclick="goBack()" class="back-button">Back to Home</button>
            <div class="current-post">
                <h2>Current Blog Post Title</h2>
                <img src="path/to/current-blog-image.jpg" alt="Current Blog Post">
                <div class="post-content">
                    <!-- Blog content here... -->
                </div>
            </div>
            <div class="related-posts">
                <h3>Other Blogs</h3>
                <div class="related-slider">
                    <!-- Related blog posts to be displayed here as a slider... -->
                </div>
            </div>
        </div>
    </section>


    /* Blog Section */
#blogs {
    padding: 30px 0;
    background-color: #777;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

#blogs h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 40px;
}

/* Carousel Wrapper */
.blogs-wrapper {
    display: flex;
    overflow: hidden; /* Hide scroll bar */
    width: 100%;
    scroll-behavior: smooth;
}

.blogs-slide {
    display: flex;
    flex-shrink: 0;
    width: calc(5.5); /* Show 4 blog posts fully visible + part of the 5th */
    justify-content: space-between;
    transition: transform 0.3s ease;
    gap: 30px;
}

.blog-posts {
    background-color: #fff;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    flex: 0 1 calc(100% - 30px); /* Adjust width to fit 4 posts with gaps */
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-posts img,
.blog-posts iframe {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    margin-bottom: 15px;
}

.blog-posts h3 {
    font-size: 1.5rem;
    color: #007acc;
    margin-bottom: 10px;
}

.blog-posts p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 20px;
}

.blog-posts:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.readMore-btn,
.fullscreen-btn {
    background-color: #007acc;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 5px;
    transition: background-color 0.3s ease;
}

.readMore-btn:hover,
.fullscreen-btn:hover {
    background-color: #005f99;
}

/* Carousel Buttons */
.carousel-btn {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: #fff;
    font-size: 2rem;
    /* padding: 10px 20px; */
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    z-index: 10;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 5px; /* Position buttons 5px-10px away from the page width */
}

.carousel-btn:hover {
    background-color: rgba(183, 172, 172, 0.8);
}

.prev-btn {
    left: 5px;
}

.next-btn {
    right: 5px;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .blogs-slide {
        width: calc(100% / 2.5); /* Adjust to 2 posts fully visible + part of the 3rd */
    }
    .carousel-btn {
        font-size: 1.5rem;
        padding: 8px 16px;
    }
}

@media (max-width: 768px) {
    .blogs-slide {
        width: 100%; /* Only one post fully visible at a time */
    }
    .carousel-btn {
        display: none; /* Hides carousel buttons on small screens */
    }
}

@media (max-width: 480px) {
    #blogs h2 {
        font-size: 2rem;
    }

    .blog-posts h3 {
        font-size: 1.2rem;
    }

    .blog-posts p {
        font-size: 0.9rem;
    }
}

/* Full Blog Section */
#full-blog {
    padding: 50px 0;
    background-color: #f9f9f9;
}

#full-blog .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.back-button {
    background-color: #007acc;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: background-color 0.3s ease;
}

.back-button:hover {
    background-color: #005f99;
}

.current-post {
    text-align: center;
    margin-bottom: 50px;
}

.current-post img {
    width: 100%;
    max-width: 800px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.current-post h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
}

.post-content {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
}

.related-posts {
    margin-top: 50px;
}

.related-posts h3 {
    font-size: 2rem;
    color: #007acc;
    margin-bottom: 30px;
}

.related-slider {
    display: flex;
    overflow: hidden;
    width: 100%;
    scroll-behavior: smooth;
}

.related-posts .post {
    flex: 0 0 33.33%; /* Show 3 related posts at a time */
    padding: 0 15px;
    box-sizing: border-box;
    transition: transform 0.3s ease;
}

.related-posts .post:hover {
    transform: translateY(-5px);
}

.related-posts img
.related-posts img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
}