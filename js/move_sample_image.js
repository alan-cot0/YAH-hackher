/* const img1 = document.querySelector("img");
img1.src = "./images/Sample_Graphic.png";
img1.x = 50;
img1.y = 50; */

function moveImage() {
	img2.style.left = pos + 'px';
}

var id = null;
document.addEventListener('keydown', function(event) {
	// var img2 = document.getElementById(
	var posX = 50;
	var posY = 50;
	clearIntevral(id);
	if(event.key === 37) {
		document.body.innerHTML += posX.toString();
		posX--;
	}
	if(event.key === 39) {
		document.body.innerHTML += posX.toString();
		posX++;
	}
	img2.style.left = posX + 'px';
});

