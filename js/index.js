const slideshowFilePaths = ["./img/PicOfMe.jpg", "./img/CraneMantis.jpg",  "./img/KyleHillAndI.jpg"];
let slideshowImage = document.getElementById("slideshowImage");
let slideshowPosition = 0;
let slideshowSpeed = 2;


window.onload = (event) => {
    setInterval(function() {slideshow()}, 2000); 
} 

function slideshow() {
    let imgPath = slideshowFilePaths[slideshowPosition]; 
    slideshowImage.src = imgPath;
    slideshowPosition = (slideshowPosition >= slideshowFilePaths.length-1) ? 0 : slideshowPosition + 1;
}