const slideshowFilePaths = ["./img/PicOfMe.jpg", "./img/CraneMantis.jpg",  "./img/KyleHillAndI.jpg"];
const slideshowImage = document.getElementById("slideshowImage");
let slideshowPosition = 0;
let slideshowSpeed = 2;


document.onload = () => {
    setInterval(slideshow, slideshowSpeed*1000);
};


function slideshow() {
    slideshowImage.src = slideShowFilePaths[slideshowPosition];
    slideshowPosition++;
}