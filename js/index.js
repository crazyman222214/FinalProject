const slideshowFilePaths = ["./img/PicOfMe.jpg", "./img/CraneMantis.jpg",  "./img/KyleHillAndI.jpg"];
const slideshowImage = document.getElementById("slideshowImage");
let slideshowPosition = 0;
let slideshowSpeed = 2;

window.onload = (event) => {
    
}

function slideshow() {
    slideshowImage.src = slideshowFilePaths[slideshowPosition];
    slideshowPosition++;
    console.log("YAY");
}