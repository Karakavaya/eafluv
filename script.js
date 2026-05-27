const text = "Hai Sayang 🤍";

let i = 0;

/* ELEMENT */

const intro =
document.getElementById("intro");

const mainPage =
document.getElementById("mainPage");

const galleryPage =
document.getElementById("galleryPage");

const endingPage =
document.getElementById("endingPage");

const openBtn =
document.getElementById("openBtn");

const galleryImage =
document.getElementById("galleryImage");

const progressBar =
document.getElementById("progressBar");

const music =
document.getElementById("bgMusic");

/* TYPING */

function typingEffect(){

  if(i < text.length){

    document.getElementById("typing")
    .innerHTML += text.charAt(i);

    i++;

    setTimeout(typingEffect,100);
  }

}

/* OPEN LETTER */

function openLetter(){

  music.play();

  intro.classList.add("hidden");

  mainPage.classList.remove("hidden");

  typingEffect();

}

/* EVENT FIX */

openBtn.addEventListener("click", openLetter);

openBtn.addEventListener("touchstart", openLetter);

/* OPEN GALLERY */

function showGallery(){

  mainPage.classList.add("hidden");

  galleryPage.classList.remove("hidden");

  startSlideshow();

}

/* ENDING */

function showEnding(){

  galleryPage.classList.add("hidden");

  endingPage.classList.remove("hidden");

}

/* IMAGES */

const images = [

  "Image1.jpg",
  "Image2.jpg",
  "Image3.jpg",
  "Image4.jpg",
  "Image5.jpg",
  "Image6.jpg"

];

let currentImage = 0;

/* NEXT IMAGE */

function nextImage(){

  currentImage++;

  if(currentImage >= images.length){

    showEnding();

    return;
  }

  galleryImage.style.opacity = 0;

  galleryImage.style.filter =
  "blur(10px)";

  galleryImage.style.transform =
  "scale(.92)";

  setTimeout(() => {

    galleryImage.src =
    images[currentImage];

    galleryImage.style.opacity = 1;

    galleryImage.style.filter =
    "blur(0px)";

    galleryImage.style.transform =
    "scale(1)";

    updateProgress();

  },700);

}

/* AUTO STORY */

function startSlideshow(){

  updateProgress();

  setInterval(() => {

    nextImage();

  },4000);

}

/* PROGRESS */

function updateProgress(){

  const percent =
  ((currentImage + 1)
  / images.length) * 100;

  progressBar.style.width =
  percent + "%";

}

/* PARALLAX */

document.addEventListener("mousemove",
(e)=>{

  const x =
  (window.innerWidth / 2 - e.pageX)
  / 40;

  const y =
  (window.innerHeight / 2 - e.pageY)
  / 40;

  galleryImage.style.transform =
  `translate(${x}px, ${y}px)`;

});