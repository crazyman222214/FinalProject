let clipSlideshow = document.getElementById("clipSlideshow");
let clipsFilePath = ["./clips/clip1.mp4", "./clips/clip2.mp4", "./clips/clip3.mp4"];
let currentClip = 0;

clipSlideshow.onended = (event) => {
    currentClip++;
    if (currentClip == clipsFilePath.length) {
        currentClip = 0;
    }
    clipSlideshow.src = clipsFilePath[currentClip];
};