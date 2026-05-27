window.onload = () => {

  const intro =
  document.getElementById("intro");

  const mainPage =
  document.getElementById("mainPage");

  const galleryPage =
  document.getElementById("galleryPage");

  const endingPage =
  document.getElementById("endingPage");

  const openLetter =
  document.getElementById("openLetter");

  const galleryImage =
  document.getElementById("galleryImage");

  const progressBar =
  document.getElementById("progressBar");

  const music =
  document.getElementById("bgMusic");

  const typing =
  document.getElementById("typing");

  const images = [

    "Image1.jpg",
    "Image2.jpg",
    "Image3.jpg",
    "Image4.jpg",
    "Image5.jpg",
    "Image6.jpg"

  ];

  let current = 0;

  /* LETTER CLICK */

  openLetter.onclick = () => {

    music.play();

    intro.classList.add("hidden");

    mainPage.classList.remove("hidden");

    startTyping();

  };

  /* TYPING */

  const text =
  "Hai Sayang 🤍";

  let i = 0;

  function startTyping(){

    const interval =
    setInterval(()=>{

      typing.innerHTML += text[i];

      i++;

      if(i >= text.length){

        clearInterval(interval);

      }

    },100);

  }

  /* OPEN GALLERY */

  window.showGallery = () => {

    mainPage.classList.add("hidden");

    galleryPage.classList.remove("hidden");

    startSlideshow();

  };

  /* SLIDESHOW */

  function startSlideshow(){

    updateProgress();

    const slide =
    setInterval(()=>{

      current++;

      if(current >= images.length){

        clearInterval(slide);

        galleryPage.classList.add("hidden");

        endingPage.classList.remove("hidden");

        return;
      }

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

};