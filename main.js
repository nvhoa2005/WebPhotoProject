let bg = document.querySelector(".main")

let images = document.querySelectorAll(".content__main--img")
let contentMain = document.querySelector(".content__main")
let numberOfImage = images.length
let currentImage = numberOfImage
let pointer = 1
let distanceMove = 0

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

const changeBackgroundDebounced = debounce(changeBackground, 300);

function changeBackground(number) {
    url = "./assets/img/" + String(number) + ".jpg"
    bg.style.backgroundImage = `url("${url}")`
}

function imageMovePrev() {
    distanceMove += 320
    images.forEach(image => {
        image.style.transform = `translate3d(${distanceMove}px, 0, 0)`;
    })
}

function imageMoveNext() {
    distanceMove -= 320
    images.forEach(image => {
        image.style.transform = `translate3d(${distanceMove}px, 0, 0)`;
    })
}

images.forEach(image => {
    image.addEventListener("click", () => {
        let url = image.getAttribute("src")
        if(url.length == 19){
            currentImage = parseInt(url.substring(13, 15))
        }
        else if(url.length == 18) {
            currentImage = parseInt(url.substring(13, 14))
        }
        else if(url.length == 20) {
            currentImage = parseInt(url.substring(13, 16))
        }
        changeBackground(currentImage)
    })
});

let navPrev = document.querySelector(".content__nav--left")
navPrev.addEventListener("click", () => {
    if(currentImage != numberOfImage) {
        currentImage += 1
        pointer -= 1
        console.log(pointer)
        if(pointer == 1 && currentImage != numberOfImage) {
            imageMovePrev()
            pointer = 2
        }
        else if (pointer == 1 && currentImage == numberOfImage) {
            pointer = 1
        }
        changeBackgroundDebounced(currentImage);
    }
})

let navNext = document.querySelector(".content__nav--right")
navNext.addEventListener("click", () => {
    if(currentImage != 1) {
        currentImage -= 1
        pointer += 1
        console.log(pointer)
        if(pointer == 3 && currentImage != 1) {
            imageMoveNext()
            pointer = 2
        }
        else if (pointer == 3 && currentImage == 1) {
            pointer = 3
        }
        changeBackgroundDebounced(currentImage);
    }
})

