document.onload = docReady();

function moveImage() {
  img2.style.left = pos + 'px';
}

function left(posX) {
  var e = document.getElementById("img2");
  e.style.left = parseInt(e.style.left) - 10 + 'px';
}

function right(posX) {
  var e = document.getElementById("img2");
  e.style.left = parseInt(e.style.left) + 10 + 'px';
}

function docReady() {
  var img2 = document.getElementById("img2");
  var posX = 50;
  var posY = 50;
  window.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
      left(posX);
      document.body.innerHTML += posX.toString();
    }
    if (event.keyCode == 39) {
      right(posX);
      document.body.innerHTML += posX.toString();
    }
    // img2.style.left = posX + 'px';
  });
}