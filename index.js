function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function showHomePage() {
  hide("values");
  hide("aboutMe");
  hide("aboutGallery");
  hide("gallery");
  hide("gallery");
  hide("studio");
  hide("contact");
  show("home");
}

function showValuesPage() {
  hide("home");
  hide("aboutMe");
  hide("aboutGallery");
  hide("gallery");
  hide("studio");
  hide("contact");
  show("values");
}

function showAboutMePage() {
  hide("home");
  hide("values");
  hide("aboutGallery");
  hide("gallery");
  hide("studio");
  hide("contact");
  show("aboutMe");
}

function showAboutGalleryPage() {
  hide("home");
  hide("values");
  hide("aboutMe");
  hide("gallery");
  hide("studio");
  hide("contact");
  show("aboutGallery");
}

function showGalleryPage() {
  hide("home");
  hide("values");
  hide("aboutMe");
  hide("aboutGallery");
  hide("studio");
  hide("contact");
  show("gallery");
}

function showStudioPage() {
  hide("home");
  hide("values");
  hide("aboutMe");
  hide("aboutGallery");
  hide("gallery");
  hide("contact");
  show("studio");
}

function showContactPage() {
  hide("home");
  hide("values");
  hide("aboutMe");
  hide("aboutGallery");
  hide("gallery");
  hide("studio");
  show("contact");
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
