document.onload = docReady();
const movement = 15;
const horizBound = -450; 
const vertBound = -705;
const horizStart = -225;
const vertStart = -315;
const exitX = 0;
const exitY = -440;

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

function docReady() {
  window.addEventListener('keydown', function(event) {
    if (keyMap[event.keyCode]) {
      keyMap[event.keyCode].pressed = true;
    }
    // Movements

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
      checkTopRedGumdrop(tomatoX, tomatoY, "Press [Enter] to go to the tomato garden.")
    }
    if(event.keyCode == 13) {
      // Warp
      falsifyKeyMap();
    }
  })

  window.addEventListener('keyup', function(event) {
    if (keyMap[event.keyCode]) {
      keyMap[event.keyCode].pressed = false;
    }
  })

}

function left() {
  var e = document.getElementById("tomato");
  var posX = parseInt(e.style.left);
  if (posX > horizBound) {
    e.style.left = posX - movement + 'px';
  }
}

function right() {
  var e = document.getElementById("tomato");
  var posX = parseInt(e.style.left);
  if (posX < horizStart) {
    e.style.left = posX + movement + 'px';
  }
}

function up() {
  var e = document.getElementById("tomato");
  var posY = parseInt(e.style.top);
  if (posY > vertBound) {
    e.style.top = posY - movement + 'px';
  }
}

function down() {
  var e = document.getElementById("tomato");
  var posY = parseInt(e.style.top);
  if (posY < vertStart) {
    e.style.top = posY + movement + 'px';
  }
  // Special warp
  if(posY == vertBound) {
    tryWarp();
  }
}

function up_left() {
  var e = document.getElementById("tomato");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY > vertBound) {
    e.style.top = posY - movement + 'px';
  }
  if (posX > horizBound) {
    e.style.left = posX - movement + 'px';
  }
}

function up_right() {
  var e = document.getElementById("tomato");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY > vertBound) {
    e.style.top = posY - movement + 'px';
  }
  if (posX < horizStart) {
    e.style.left = posX + movement + 'px';
  }
}

function down_left() {
  var e = document.getElementById("tomato");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY < vertStart) {
    e.style.top = posY + movement + 'px';
  }
  if (posX > horizBound) {
    e.style.left = posX - movement + 'px';
  }
}

function down_right() {
  var e = document.getElementById("tomato");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY < vertStart) {
    e.style.top = posY + movement + 'px';
  }
  if (posX < horizStart) {
    e.style.left = posX + movement + 'px';
  }
}

function tryWarp() {
  alert("Returning to the Vegetable Island...");
  window.location.replace("vegetable_island.html");
}
