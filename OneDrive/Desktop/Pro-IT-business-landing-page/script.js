const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
});

let arrayOfImages = [ 
    "images/controller.jpg",
    "images/fan.png",
    "images/gaming-pc.jpg",
    "images/repair1.jpg",
    "images/motherboard.jpg",
    "images/laptop1.jpg",
    "images/ram.jpg"
];

arrayOfImages.splice(3, 1);
arrayOfImages.splice(1, 1);


let newArray = arrayOfImages.map((image) => {
    if (image === "images/controller.jpg") {
        return "images/controller2.jpg";
    }
    if (image === "images/motherboard.jpg") {
        return "images/motherboard2.jpg";
    } 
    if (image === "images/laptop1.jpg") {
        return "images/laptop2.jpg";
    }
    if (image === "images/ram.jpg") {
        return "images/ram2.jpg";
    }
return image;
});



console.log(newArray);

let currentIndex = 0;

let useNewGallery = true;

const slideGallery = document.getElementById("slide-corousal");
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");

function updateCorousal() {
    slideGallery.src = arrayOfImages[currentIndex]
};

/*trying to update the images inside the new array that i have made.
Because it does not seem to be working correctly i want it to update the photos on the document. 
so i have created a new variable and gave it the value true and created a new function called newImages.
Than i grab the slideGallery variable that contains the class of the slide-corousal and reasign it 
with the new Images variable */


function newImages() {
    slideGallery.src = newArray[currentIndex]
};

function activeCorousal() {
    if (useNewGallery === true) {
        newImages()
    } else {
        updateCorousal();
    }
};

rightBtn.addEventListener("click", () => {
    currentIndex++;

    let currentLength = useNewGallery ? newArray.length : arrayOfImages.length;


if (currentIndex >= currentLength) {
currentIndex = 0;
}

activeCorousal();

});

leftBtn.addEventListener("click", () => {
    currentIndex--;

    let currentLength = useNewGallery  ? newArray.length : arrayOfImages.length;

    if (currentIndex < 0) {
        currentIndex = currentLength.length - 1;
    }

    activeCorousal()
});

activeCorousal();






