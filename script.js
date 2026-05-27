const intro =
document.getElementById("intro");

const main =
document.getElementById("main");

const gallery =
document.getElementById("gallery");

const ending =
document.getElementById("ending");

const music =
document.getElementById("music");

const typing =
document.getElementById("typing");

const slide =
document.getElementById("slide");

const bar =
document.getElementById("bar");

/* OPEN */

function openPage(){

  music.play();

  intro.classList.add("hidden");

  main.classList.remove("hidden");

  typeText();

}

/* TYPING */

const text =
"Hai Sayang 🤍";

let i = 0;

function typeText(){

  const typingInterval =
  setInterval(()=>{

    typing.innerHTML +=
    text.charAt(i);

    i++;

    if(i >= text.length){

      clearInterval(
      typingInterval
      );

    }

  },100);

}

/* GALLERY */

const images = [

  "Image1.jpg",
  "Image2.jpg",
  "Image3.jpg",
  "Image4.jpg",
  "Image5.jpg",
  "Image6.jpg"

];

let current = 0;

function startGallery(){

  main.classList.add("hidden");

  gallery.classList.remove("hidden");

  startSlide();

}

function startSlide(){

  updateBar();

  const interval =
  setInterval(()=>{

    current++;

    if(current >= images.length){

      clearInterval(interval);

      gallery.classList.add("hidden");

      ending.classList.remove("hidden");

      return;
    }

    slide.style.opacity = 0;

    setTimeout(()=>{

      slide.src =
      images[current];

      slide.style.opacity = 1;

      updateBar();

    },500);

  },3500);

}

/* BAR */

function updateBar(){

  const percent =
  ((current + 1)
  / images.length) * 100;

  bar.style.width =
  percent + "%";

}