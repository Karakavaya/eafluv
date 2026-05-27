/* ELEMENT */

const intro =
document.getElementById("intro");

const main =
document.getElementById("main");

const gallery =
document.getElementById("gallery");

const ending =
document.getElementById("ending");

const openBtn =
document.getElementById("openBtn");

const galleryBtn =
document.getElementById("galleryBtn");

const music =
document.getElementById("music");

const typing =
document.getElementById("typing");

const galleryImage =
document.getElementById("galleryImage");

const progressBar =
document.getElementById("progressBar");

/* OPEN PAGE */

openBtn.addEventListener(
"click",
()=>{

  music.play();

  intro.classList.remove("active");

  main.classList.add("active");

  startTyping();

});

/* TYPING */

const text =
"Hai Sayang 🤍";

let index = 0;

function startTyping(){

  const interval =
  setInterval(()=>{

    typing.innerHTML +=
    text.charAt(index);

    index++;

    if(index >= text.length){

      clearInterval(interval);

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

galleryBtn.addEventListener(
"click",
()=>{

  main.classList.remove("active");

  gallery.classList.add("active");

  startGallery();

});

function startGallery(){

  updateProgress();

  const slide =
  setInterval(()=>{

    current++;

    if(current >= images.length){

      clearInterval(slide);

      gallery.classList.remove("active");

      ending.classList.add("active");

      return;
    }

    galleryImage.style.opacity = 0;

    setTimeout(()=>{

      galleryImage.src =
      images[current];

      galleryImage.style.opacity = 1;

      updateProgress();

    },500);

  },3500);

}

/* PROGRESS */

function updateProgress(){

  const percent =
  ((current + 1)
  / images.length) * 100;

  progressBar.style.width =
  percent + "%";

}