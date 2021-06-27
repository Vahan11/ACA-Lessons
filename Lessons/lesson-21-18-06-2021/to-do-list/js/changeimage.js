let imageArray = ["img/morning.jpg", "img/evening.jpg", "img/night.jpg"];

let imageIndex = 0;

function changeImage() {
  document.getElementById("header").style.backgroundImage =
    "url(" + imageArray[imageIndex] + ")";
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

setInterval(changeImage, 28800000);
