const cavePosX = 600; // Adjust the cave's initial X position
const cavePosY = 250; // Adjust the cave's initial Y position

document.onload = docReady();

function docReady() {
    const cave = document.getElementById("CAVE");
    cave.style.left = cavePosX + 'px';
    cave.style.top = cavePosY + 'px';

    window.addEventListener('keydown', function(event) {
        if (event.keyCode === 37 || event.keyCode === 39 || event.keyCode === 38 || event.keyCode === 40) {
            moveCave(); // Move the cave when arrow keys are pressed
        }
    });
}

function moveCave() {
    const cave = document.getElementById("CAVE");
    const background = document.getElementById("isle2");

    const backgroundX = parseInt(background.style.left) || 0;
    const backgroundY = parseInt(background.style.top) || 0;

    // Calculate the position of the cave relative to the background's movement
    var relativeX = cavePosX - backgroundX;
    var relativeY = cavePosY - backgroundY;

    cave.style.left = relativeX + 'px';
    cave.style.top = relativeY + 'px';
}