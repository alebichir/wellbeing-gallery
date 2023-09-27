function hide(id) {
  document.getElementById(id).style.display = "none";
}

function showHomePage() {
  hide("values");
  hide("aboutMe");
  hide("aboutGallery");
  hide("gallery");
  hide("gallery");
  hide("studio");
  hide("contact");
  document.getElementById("home").style.display = "block";
}

function showValuesPage() {
  hide("home");
  hide("aboutMe");
  hide("aboutGallery");
  hide("gallery");
  hide("studio");
  hide("contact");
  document.getElementById("values").style.display = "block";
}

function showAboutMePage() {
  hide("home");
  hide("values");
  hide("aboutGallery");
  hide("gallery");
  hide("studio");
  hide("contact");
  document.getElementById("aboutMe").style.display = "block";
}

function showAboutGalleryPage() {
  hide("home");
  hide("values");
  hide("aboutMe");
  hide("gallery");
  hide("studio");
  hide("contact");
  document.getElementById("aboutGallery").style.display = "block";
}

function showGalleryPage() {
  hide("home");
  hide("values");
  hide("aboutMe");
  hide("aboutGallery");
  hide("studio");
  hide("contact");
  document.getElementById("gallery").style.display = "block";
}

function showStudioPage() {
  hide("home");
  hide("values");
  hide("aboutMe");
  hide("aboutGallery");
  hide("gallery");
  hide("contact");
  document.getElementById("studio").style.display = "block";
}

function showContactPage() {
  hide("home");
  hide("values");
  hide("aboutMe");
  hide("aboutGallery");
  hide("gallery");
  hide("studio");
  document.getElementById("contact").style.display = "block";
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
