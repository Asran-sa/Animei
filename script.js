function playVideo(videoUrl) {
    document.getElementById("video").src = videoUrl;
    document.getElementById("video-player").classList.remove("hidden");
}

function closeVideo() {
    document.getElementById("video-player").classList.add("hidden");
    document.getElementById("video").pause();
}