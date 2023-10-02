var activePage = "home";

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function showHomePage() {
  hide(activePage);
  show("home");
  activePage = "home";
}

function showValuesPage() {
  hide(activePage);
  show("values");
  activePage = "values";
}

function showAboutMePage() {
  hide(activePage);
  show("aboutMe");
  activePage = "aboutMe";
}

function showAboutGalleryPage() {
  hide(activePage);
  show("aboutGallery");
  activePage = "aboutGallery";
}

function showGalleryPage() {
  hide(activePage);
  show("gallery");
  activePage = "gallery";
}

function showStudioPage() {
  hide(activePage);
  show("studio");
  activePage = "studio";
}

function showContactPage() {
  hide(activePage);
  show("contact");
  activePage = "contact";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

showHomePage();

var homeLink = document.querySelectorAll("#top-menu-bar a")[0];
homeLink.addEventListener("click", showHomePage);

var valuesLink = document.querySelectorAll("#top-menu-bar a")[1];
valuesLink.addEventListener("click", showValuesPage);

var aboutMeLink = document.querySelectorAll("#top-menu-bar a")[2];
aboutMeLink.addEventListener("click", showAboutMePage);

var aboutGalleryLink = document.querySelectorAll("#top-menu-bar a")[3];
aboutGalleryLink.addEventListener("click", showAboutGalleryPage);

var galleryLink = document.querySelectorAll("#top-menu-bar a")[4];
galleryLink.addEventListener("click", showGalleryPage);

var studioLink = document.querySelectorAll("#top-menu-bar a")[5];
studioLink.addEventListener("click", showStudioPage);

var contactLink = document.querySelectorAll("#top-menu-bar a")[6];
contactLink.addEventListener("click", showContactPage);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
