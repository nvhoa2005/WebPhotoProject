let bg = document.querySelector(".main");

let images = document.querySelectorAll(".content__main--img");
let contentMain = document.querySelector(".content__main");
let contentDesc = document.querySelector(".content__move");
let contentPenguin = document.querySelector(".content__main--move")
let numberOfImage = images.length;
let currentImage = numberOfImage;
let pointer = 1;
let imageDistanceMove = 0;
let descImageDistanceMove = 0;
let contentPenguinDistanceMove = 1050;

function preloadImages() {
    let imagePaths = [];
    document.querySelectorAll(".content__main--img").forEach(img => {
        imagePaths.push(img.src);
    });

    imagePaths.forEach(src => {
        let img = new Image();
        img.src = src;
    });
}

preloadImages(); // Gọi ngay khi trang tải xong

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

const changeBackgroundDebounced = debounce(changeBackground, 300);

function changeBackground(number) {
  url = "./assets/img/" + String(number) + ".jpg";
  bg.style.backgroundImage = `url("${url}")`;
}

function imageMovePrev() {
  imageDistanceMove += 320;
  images.forEach((image) => {
    image.style.transform = `translate3d(${imageDistanceMove}px, 0, 0)`;
  })
}

function imageMoveNext() {
  imageDistanceMove -= 320;
  images.forEach((image) => {
    image.style.transform = `translate3d(${imageDistanceMove}px, 0, 0)`;
  });
}

images.forEach((image) => {
  image.addEventListener("click", () => {
    let url = image.getAttribute("src");
    if (url.length == 19) {
      currentImage = parseInt(url.substring(13, 15));
    } else if (url.length == 18) {
      currentImage = parseInt(url.substring(13, 14));
    } else if (url.length == 20) {
      currentImage = parseInt(url.substring(13, 16));
    }
    changeBackgroundDebounced(currentImage);
  });
});

let navPrev = document.querySelector(".content__nav--left");
navPrev.addEventListener("click", () => {
  if (currentImage != numberOfImage) {
    currentImage += 1;
    pointer -= 1;
    console.log(pointer);
    if (pointer == 1 && currentImage != numberOfImage) {
      imageMovePrev();
      pointer = 2;
    } else if (pointer == 1 && currentImage == numberOfImage) {
      pointer = 1;
    }
    descImageDistanceMove += 274.188;
    contentDesc.style.transform = `translateY(${descImageDistanceMove}px)`
    if(pointer == 1) {
      contentPenguinDistanceMove = 1050
      contentPenguin.style.left = `${contentPenguinDistanceMove}px`
    } else if (pointer == 2) {
      contentPenguinDistanceMove = 1370
      contentPenguin.style.left = `${contentPenguinDistanceMove}px`
    }
    changeBackgroundDebounced(currentImage);
  }
});

let navNext = document.querySelector(".content__nav--right");
navNext.addEventListener("click", () => {
  if (currentImage != 1) {
    currentImage -= 1;
    pointer += 1;
    console.log(pointer);
    if (pointer == 3 && currentImage != 1) {
      imageMoveNext();
      pointer = 2;
    } else if (pointer == 3 && currentImage == 1) {
      pointer = 3;
    }
    descImageDistanceMove -= 274.188;
    contentDesc.style.transform = `translateY(${descImageDistanceMove}px)`
    if(pointer == 2) {
      contentPenguinDistanceMove = 1370
      contentPenguin.style.left = `${contentPenguinDistanceMove}px`
    } else if (pointer == 3) {
      contentPenguinDistanceMove = 1690
      contentPenguin.style.left = `${contentPenguinDistanceMove}px`
    }
    changeBackgroundDebounced(currentImage);
  }
});
