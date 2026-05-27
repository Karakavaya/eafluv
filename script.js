/* ELEMENT */

const intro =
document.getElementById("intro");

const mainPage =
document.getElementById("mainPage");

const galleryPage =
document.getElementById("galleryPage");

const endingPage =
document.getElementById("endingPage");

const galleryImage =
document.getElementById("galleryImage");

const progressBar =
document.getElementById("progressBar");

const music =
document.getElementById("bgMusic");

const typing =
document.getElementById("typing");

/* TEXT */

const text =
"Hai Sayang 🤍";

let typingIndex = 0;

/* OPEN LETTER */

function openLetterPage(){

  music.play();

  intro.classList.add("hidden");

  mainPage.classList.remove("hidden");

  startTyping();

}

/* TYPING */

function startTyping(){

  typing.innerHTML = "";

  typingIndex = 0;

  const interval =
  setInterval(()=>{

    typing.innerHTML +=
    text.charAt(typingIndex);

    typingIndex++;

    if(typingIndex >= text.length){

      clearInterval(interval);

    }

  },100);

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

let current = 0;

/* SHOW GALLERY */

function showGallery(){

  mainPage.classList.add("hidden");

  galleryPage.classList.remove("hidden");

  startSlideshow();

}

/* SLIDESHOW */

function startSlideshow(){

  updateProgress();

  const slideInterval =
  setInterval(()=>{

    current++;

    /* END */

    if(current >= images.length){

      clearInterval(slideInterval);

      galleryPage.classList.add("hidden");

      endingPage.classList.remove("hidden");

      return;
    }

    /* TRANSITION */

    galleryImage.style.opacity = 0;

    setTimeout(()=>{

      galleryImage.src =
      images[current];

      galleryImage.style.opacity = 1;

      updateProgress();

    },500);

  },4000);

}

/* PROGRESS */

function updateProgress(){

  const percent =
  ((current + 1)
  / images.length) * 100;

  progressBar.style.width =
  percent + "%";

}