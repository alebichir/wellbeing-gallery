function showHomePage() {
  document.getElementById("home").style.display = "block";
  document.getElementById("values").style.display = "none";
  document.getElementById("aboutMe").style.display = "none";
  document.getElementById("aboutGallery").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function showValuesPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("values").style.display = "block";
  document.getElementById("aboutMe").style.display = "none";
  document.getElementById("aboutGallery").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("studio").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function showAboutMePage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("values").style.display = "none";
  document.getElementById("aboutMe").style.display = "block";
  document.getElementById("aboutGallery").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("studio").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function showAboutGalleryPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("values").style.display = "none";
  document.getElementById("aboutMe").style.display = "none";
  document.getElementById("aboutGallery").style.display = "block";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("studio").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function showGalleryPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("values").style.display = "none";
  document.getElementById("aboutMe").style.display = "none";
  document.getElementById("aboutGallery").style.display = "none";
  document.getElementById("gallery").style.display = "block";
  document.getElementById("studio").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function showStudioPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("values").style.display = "none";
  document.getElementById("aboutMe").style.display = "none";
  document.getElementById("aboutGallery").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("studio").style.display = "block";
  document.getElementById("contact").style.display = "none";
}

function showContactPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("values").style.display = "none";
  document.getElementById("aboutMe").style.display = "none";
  document.getElementById("aboutGallery").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("studio").style.display = "none";
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
