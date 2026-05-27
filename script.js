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

let i = 0;

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

  const interval =
  setInterval(()=>{

    typing.innerHTML += text[i];

    i++;

    if(i >= text.length){

      clearInterval(interval);

    }

  },100);

}

/* GALLERY */

const images = [

  "Image1.jpg",
  "Image2.jpg",
  "Image3.jpg",
  "Image4.PNG",
  "Image5.PNG",
  "Image6.PNG"

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

  const slide =
  setInterval(()=>{

    current++;

    /* END */

    if(current >= images.length){

      clearInterval(slide);

      galleryPage.classList.add("hidden");

      endingPage.classList.remove("hidden");

      return;
    }

    /* TRANSITION */

    galleryImage.style.opacity = 0;

    galleryImage.style.filter =
    "blur(10px)";

    setTimeout(()=>{

      galleryImage.src =
      images[current];

      galleryImage.style.opacity = 1;

      galleryImage.style.filter =
      "blur(0px)";

      updateProgress();

    },600);

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