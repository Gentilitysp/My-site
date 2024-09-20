document.addEventListener("DOMContentLoaded", function () {
    const mainVideo = document.getElementById("main-video");
    const transcription = document.getElementById("transcription");
    let currentVideoIndex = 0;

    // Sample data structure for tutorials and child videos
    const tutorialData = {
      1: {
        title: "Tutorial 1",
        videos: [
          { videoSrc: "assets/videos/VID-20240720-WA0001.mp4", title: "Part 1" },
          { videoSrc: "assets/videos/tutorial1-video2.mp4", title: "Part 2" },
          { videoSrc: "assets/videos/tutorial1-video3.mp4", title: "Part 3" },
          { videoSrc: "assets/videos/tutorial1-video4.mp4", title: "Part 4" },
          { videoSrc: "assets/videos/tutorial1-video5.mp4", title: "Part 5" }
        ],
        transcription: "This is the transcription of tutorial 1.",
        related: [
          { title: "Tutorial 2", videoSrc: "assets/videos/tutorial2.mp4" },
          { title: "Tutorial 3", videoSrc: "assets/videos/tutorial3.mp4" }
        ]
      }
      // Add more tutorials as needed
    };

    // Event listener for the "Watch Now" buttons
    document.querySelectorAll(".watch-btn").forEach(button => {
        button.addEventListener("click", function () {
            const tutorialId = this.getAttribute("data-id");
            openTutorial(tutorialId);
        });
    });

    function openTutorial(tutorialId) {
      const selectedTutorial = tutorialData[tutorialId];

      // Set the first video
      playInMainContainer(selectedTutorial.videos[0].videoSrc, selectedTutorial.transcription);

      // Populate child videos
      const childContainer = document.getElementById('child-list');
      childContainer.innerHTML = "";
      selectedTutorial.videos.forEach((video, index) => {
        const videoElement = document.createElement('div');
        videoElement.className = 'child-video-card';
        videoElement.innerHTML = `
          <video src="${video.videoSrc}" controls></video>
          <p>${video.title}</p>
        `;
        videoElement.onclick = () => loadChildVideo(tutorialId, index);
        childContainer.appendChild(videoElement);
      });

      // Populate related videos
      const relatedContainer = document.getElementById('related-list');
      relatedContainer.innerHTML = "";
      selectedTutorial.related.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'related-tutorial-card';
        videoElement.innerHTML = `
          <video src="${video.videoSrc}" controls></video>
          <p>${video.title}</p>
        `;
        videoElement.onclick = () => playInMainContainer(video.videoSrc, "Loading transcription...");
        relatedContainer.appendChild(videoElement);
      });

      // Show video display section and hide tutorials grid
      document.getElementById('tutorial-grid').classList.add('hidden');
      document.getElementById('video-display').classList.add('active');

      // Auto-play next video
      currentVideoIndex = 0;
      const videoPlayer = document.getElementById('video-player');
      videoPlayer.addEventListener('ended', () => playNextVideo(tutorialId));
    }

    function loadChildVideo(tutorialId, videoIndex) {
      const selectedTutorial = tutorialData[tutorialId];
      currentVideoIndex = videoIndex;
      playInMainContainer(selectedTutorial.videos[videoIndex].videoSrc, selectedTutorial.transcription);
    }

    function playNextVideo(tutorialId) {
      const selectedTutorial = tutorialData[tutorialId];
      currentVideoIndex++;
      if (currentVideoIndex < selectedTutorial.videos.length) {
        loadChildVideo(tutorialId, currentVideoIndex);
      } else {
        console.log("All tutorial videos completed.");
      }
    }

    function playInMainContainer(videoSrc, transcriptionText) {
      mainVideo.src = videoSrc;
      mainVideo.play();
      transcription.innerHTML = transcriptionText || "Transcription for the selected video is loading...";
    }

    // Sticky video container on scroll
    window.addEventListener("scroll", function () {
      const mainContainer = document.getElementById("main-video-container");
      if (window.scrollY > 200) {
        mainContainer.classList.add("sticky");
      } else {
        mainContainer.classList.remove("sticky");
      }
    });

    // Like button functionality
    document.getElementById("like-btn").addEventListener("click", function () {
      alert("You liked this video!");
    });

    // Submit comment functionality
    document.getElementById("submit-comment").addEventListener("click", function () {
      const comment = document.getElementById("comment-box").value;
      if (comment) {
        alert("Comment submitted: " + comment);
      }
    });

    // Video download feature for logged-in users
    function enableDownload() {
      const userLoggedIn = true; // Replace this with actual authentication check
      if (userLoggedIn) {
        const downloadLink = document.createElement('a');
        downloadLink.href = mainVideo.src;
        downloadLink.download = "tutorial.mp4";  // Set default download filename
        downloadLink.innerHTML = "Download Video";
        document.getElementById('main-video-container').appendChild(downloadLink);
      }
    }
});
