const gallerySlides = document.querySelectorAll(".gallery__item");
let currentGallerySlide = 0;
let galleryInterval;

function gallery() {
  galleryInterval = setInterval(function () {
    currentGallerySlide =
      currentGallerySlide < gallerySlides.length - 1
        ? ++currentGallerySlide
        : 0;
    changeGallerySlide(currentGallerySlide);
  }, 3000);
}
gallery();

function changeGallerySlide(num) {
  for (let i = 0; i < gallerySlides.length; i++) {
    gallerySlides[i].classList.remove("active");
  }
  gallerySlides[num].classList.add("active");
}
