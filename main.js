let bg = document.querySelector(".main")

let images = document.querySelectorAll(".content__main--img")
let numberOfImage = images.length
let currentImage = numberOfImage
console.log(numberOfImage)

function changeBackground(number) {
    url = "./assets/img/" + String(number) + ".jpg"
    bg.style.backgroundImage = `url("${url}")`
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
        changeBackground(currentImage)
    }
})

let navNext = document.querySelector(".content__nav--right")
navNext.addEventListener("click", () => {
    if(currentImage != 1) {
        currentImage -= 1
        changeBackground(currentImage)
    }
})
