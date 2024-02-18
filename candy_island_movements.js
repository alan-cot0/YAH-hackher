document.onload = docReady();
const movement = 20;
const horizBound = -1800; // originally 1440
const vertBound = -1580; // originally 1200
const scale = 1;
const gumdropX = -1240; // originally -860
const gumdropY = -600; // originally -140
const topConnectionX = -780;
const topConnectionY = 0;
const tomatoX = -1600;
const tomatoY = -1180;
const leftConnectionX = 0;
const leftConnectionY = -940;


const keyMap = {
  37: { pressed: false, func: right },
  38: { pressed: false, func: down },
  39: { pressed: false, func: left },
  40: { pressed: false, func: up },
}

function falsifyKeyMap() {
  keyMap[37].pressed = false;
  keyMap[38].pressed = false;
  keyMap[39].pressed = false;
  keyMap[40].pressed = false;
}

function moveImage() {
  img2.style.left = pos + 'px';
}

function left() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  if (posX > horizBound * scale) {
    e.style.left = posX - movement + 'px';
  }
}

function right() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  if (posX < 0) {
    e.style.left = posX + movement + 'px';
  }
}

function up() {
  var e = document.getElementById("isle2");
  var posY = parseInt(e.style.top);
  if (posY > vertBound * scale) {
    e.style.top = posY - movement + 'px';
  }
}

function down() {
  var e = document.getElementById("isle2");
  var posY = parseInt(e.style.top);
  if (posY < 0) {
    e.style.top = posY + movement + 'px';
  }
}

function up_left() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY > vertBound * scale) {
    e.style.top = posY - movement + 'px';
  }
  if (posX > horizBound * scale) {
    e.style.left = posX - movement + 'px';
  }
}

function up_right() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY > vertBound * scale) {
    e.style.top = posY - movement + 'px';
  }
  if (posX < 0) {
    e.style.left = posX + movement + 'px';
  }
}

function down_left() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY < 0) {
    e.style.top = posY + movement + 'px';
  }
  if (posX > horizBound * scale) {
    e.style.left = posX - movement + 'px';
  }
}

function down_right() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY < 0) {
    e.style.top = posY + movement + 'px';
  }
  if (posX < 0) {
    e.style.left = posX + movement + 'px';
  }
}

function checkTopRedGumdrop(x, y, message) {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);

  if (posX == x && posY == y) {
    alert(message);
    falsifyKeyMap();
  }
}

function tryWarpUpwards() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);

  if(posX == topConnectionX && posY == topConnectionY) {
    window.location.replace("test_island.html");
  }
  // Add another condition in case it's the vegetable island instead of the other 1.
  if(posX == tomatoX && posY == tomatoY) {
    window.location.replace("tomato_cutscene.html");
  }
  // Add another condition in case it's the vegetable island instead of the other 1.
  if(posX == gumdropX && posY == gumdropY) {
    window.location.replace("sweet_potato_cutscene.html");
  }

  if(posX == leftConnectionX && posY == leftConnectionY) {
    window.location.replace("broccoli_forest.html");
  }
}

function docReady() {
  var img2 = document.getElementById("img2");
  var posX = 50;
  var posY = 50;
  /*window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 37:
        right();
        break;
      case 38:
        down();
        break;
      case 39:
        left();
        break;
      case 40:
        up();
        break;
      default:
        ;
        break;
    }
  });*/
  window.addEventListener('keydown', function(event) {
    if (keyMap[event.keyCode]) {
      keyMap[event.keyCode].pressed = true;
    }
    // Movements
    console.log(keyMap[37].pressed); // Right
    console.log(keyMap[38].pressed); // Down
    console.log(keyMap[39].pressed); // Left
    console.log(keyMap[40].pressed); // Up

    if (keyMap[37].pressed && keyMap[38].pressed) {
      down_right();
      checkTopRedGumdrop(gumdropX, gumdropY, "Press [Enter] to enter the gumdrop mountains!");
    } else if (keyMap[38].pressed && keyMap[39].pressed) {
      down_left();
      checkTopRedGumdrop(gumdropX, gumdropY, "Press [Enter] to enter the gumdrop mountains!");
    } else if (keyMap[39].pressed && keyMap[40].pressed) {
      up_left();
      checkTopRedGumdrop(gumdropX, gumdropY, "Press [Enter] to enter the gumdrop mountains!");
    } else if (keyMap[40].pressed && keyMap[37].pressed) {
      up_right();
      checkTopRedGumdrop(gumdropX, gumdropY, "Press [Enter] to enter the gumdrop mountains!");
    } else if (keyMap[37].pressed) {
      right();
      checkTopRedGumdrop(gumdropX, gumdropY, "Press [Enter] to enter the gumdrop mountains!");
    } else if (keyMap[38].pressed) {
      down();
      checkTopRedGumdrop(gumdropX, gumdropY, "Press [Enter] to enter the gumdrop mountains!");
    } else if (keyMap[39].pressed) {
      left();
      checkTopRedGumdrop(gumdropX, gumdropY, "Press [Enter] to enter the gumdrop mountains!");
    } else if (keyMap[40].pressed) {
      up();
      checkTopRedGumdrop(gumdropX, gumdropY, "Press [Enter] to enter the gumdrop mountains!");
    } else {
      ;
    }
    // Sends alert at the bridge to the starting island.
    if(event.keyCode != 13) {
      // falsifyKeyMap();
      checkTopRedGumdrop(topConnectionX, topConnectionY, "Press [Enter] to go to the starting island.");
      checkTopRedGumdrop(tomatoX, tomatoY, "Press [Enter] to go to the tomato garden.");
      checkTopRedGumdrop(leftConnectionX, leftConnectionY, "Press [Enter] to enter the broccoli forest.");
    }
    if(event.keyCode == 13) {
      // Warp
      falsifyKeyMap();
      tryWarpUpwards();
    }
  })

  window.addEventListener('keyup', function(event) {
    if (keyMap[event.keyCode]) {
      keyMap[event.keyCode].pressed = false;
    }
  })

}