




var images = [];

images[0] = "images/250X110571325734.jpg";
images[1] = "images/250X110668568400.jpg";
images[2] = "images/banner_atar.jpg";
images[3] = "images/paz_250x110059890678.jpg";
images[4] = "images/paz_250x110103131473.jpg";
var index = 0;

function changeImage() {
  document.getElementById("changeImage").src = images[index];
  if (index == 4) {
    index = 0;
  } else {
    index++;
  }
  
}

setInterval(changeImage,3000)


