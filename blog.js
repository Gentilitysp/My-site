// blog.js
document.addEventListener('DOMContentLoaded', () => {
    // Function to retrieve URL parameters
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const id = getQueryParam('id');

    // Define your blog posts data
    const blogPostsData = {
        1: {
            title: 'Blog Post 1',
            image: 'assets/img/IMG-20231001-WA0022.jpg',
            content: `
                <p>This is the full content of Blog Post 1. It includes detailed information, images, and possibly embedded videos.</p>
                <iframe src="https://player.vimeo.com/video/975351736" frameborder="0" allowfullscreen></iframe>
            `,
        },
        2: {
            title: 'Blog Post 2',
            image: 'assets/img/IMG-20231001-WA0040.jpg',
            content: `
                <p>This is the full content of Blog Post 2. It includes detailed information, images, and possibly embedded videos.</p>
                <img src="assets/img/another-image.jpg" alt="Additional Image">
            `,
        },
        3: {
            title: 'Blog Post 3',
            image: 'assets/img/IMG-20231001-WA0022.jpg',
            content: `
                <p>This is the full content of Blog Post 1. It includes detailed information, images, and possibly embedded videos.</p>
                <iframe src="https://player.vimeo.com/video/975351736" frameborder="0" allowfullscreen></iframe>
            `,
        },
        4: {
            title: 'Blog Post 4',
            image: 'assets/img/IMG-20231001-WA0040.jpg',
            content: `
                <p>This is the full content of Blog Post 2. It includes detailed information, images, and possibly embedded videos.</p>
                <img src="assets/img/another-image.jpg" alt="Additional Image">
            `,
        },
        5: {
            title: 'Blog Post 5',
            image: 'assets/img/IMG-20231001-WA0022.jpg',
            content: `
                <p>This is the full content of Blog Post 1. It includes detailed information, images, and possibly embedded videos.</p>
                <iframe src="https://player.vimeo.com/video/975351736" frameborder="0" allowfullscreen></iframe>
            `,
        },
        6: {
            title: 'Blog Post 6',
            image: 'assets/img/IMG-20231001-WA0040.jpg',
            content: `
                <p>This is the full content of Blog Post 2. It includes detailed information, images, and possibly embedded videos.</p>
                <img src="assets/img/another-image.jpg" alt="Additional Image">
            `,
        },
        7: {
            title: 'Blog Post 7',
            image: 'assets/img/IMG-20231001-WA0022.jpg',
            content: `
                <p>This is the full content of Blog Post 1. It includes detailed information, images, and possibly embedded videos.</p>
                <iframe src="https://player.vimeo.com/video/975351736" frameborder="0" allowfullscreen></iframe>
            `,
        },
        8: {
            title: 'Blog Post 8',
            image: 'assets/img/IMG-20231001-WA0040.jpg',
            content: `
                <p>This is the full content of Blog Post 2. It includes detailed information, images, and possibly embedded videos.</p>
                <img src="assets/img/another-image.jpg" alt="Additional Image">
            `,
        },
        // Add more blog posts as needed
    };

    const postTitle = document.getElementById('post-title');
    const postImage = document.getElementById('post-image');
    const postContent = document.getElementById('post-content');

    if (id && blogPostsData[id]) {
        const post = blogPostsData[id];
        postTitle.textContent = post.title;
        postImage.src = post.image;
        postImage.alt = post.title;
        postContent.innerHTML = post.content;
    } else {
        // Handle case when id is missing or invalid
        postTitle.textContent = 'Blog Post Not Found';
        postImage.style.display = 'none';
        postContent.innerHTML = '<p>The blog post you are looking for does not exist.</p>';
    }

    // Function to go back to the homepage
    window.goBack = function() {
        window.location.href = 'index.html'; // Adjust the path as needed
    }
});
