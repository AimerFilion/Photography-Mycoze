const galleryImages = document.querySelectorAll(".gallery-img");
const getLatestOpenedImg = false;
const windowWidth = window.innerWidth;

if (galleryImages) {
  galleryImages.forEach((image) => {
    image.onclick = function () {};
  });
}
