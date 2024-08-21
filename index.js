var activePage = "contact";

function $(selector) {
  return document.querySelector(selector);
}

function hide(id) {
  $("#" + id).style.display = "none";
}

function show(id) {
  $(`#${id}`).style.display = "block";
}

function showPage(id) {
  hide(activePage);
  $(`#top-menu-bar a[data-page="${activePage}"]`).classList.remove("active");
  show(id);
  $(`#top-menu-bar a[data-page="${id}"]`).classList.add("active");
  activePage = id;
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

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
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

showPage(activePage);

$("#top-menu-bar").addEventListener("click", function (e) {
  var id = e.target.dataset.page;
  console.info("click on menu bar", id);
  if (id) {
    showPage(id);
  }
});

var contactDetails = [
  "Cluj-Napoca, România",
  "ds@wellbeinggallery.com",
  "0744 548 753",
];
var contactDetailsMapResult = contactDetails.map(function (contactDetail) {
  console.info("inside map", contactDetail);
  return `<li>${contactDetail}</li>`;
});
//console.warn("result", contactDetailsMapResult);
$("#contact ul").innerHTML = contactDetailsMapResult.join("");
