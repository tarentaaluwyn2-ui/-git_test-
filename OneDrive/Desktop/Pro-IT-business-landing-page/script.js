const carousal = document.querySelector("#carousal");
const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");

let currentIndex = 0;


let arrayOfImages = [
    "images/controller2.jpg",
    "images/gaming-pc.jpg",
    "images/laptop2.jpg",
    "images/motherboard2.jpg",
    "images/pc fan.jpg",
    "images/ram2.jpg"
];

function updateGallery() {
    carousal.src = arrayOfImages[currentIndex];
}

updateGallery()

leftBtn.addEventListener("click", () => {
    currentIndex--;

if (currentIndex < 0) {
    currentIndex = arrayOfImages.length - 1;
}
updateGallery();

});

rightBtn.addEventListener("click", () => {
    currentIndex++;
if (currentIndex >= arrayOfImages.length) {
    currentIndex = 0;
}

updateGallery();
});
