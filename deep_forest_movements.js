document.onload = docReady();
const movement = 10;
const horizBound = -480; 
const vertBound = -420;
const horizStart = -100;
const vertStart = -280;
const exitX = -440;
const witchHutX = -160;
const witchHutY = -320;

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

    if (keyMap[37].pressed && keyMap[38].pressed) {
      down_right();
      
    } else if (keyMap[38].pressed && keyMap[39].pressed) {
      down_left();
      
    } else if (keyMap[39].pressed && keyMap[40].pressed) {
      up_left();
      
    } else if (keyMap[40].pressed && keyMap[37].pressed) {
      up_right();
      
    } else if (keyMap[37].pressed) {
      right();
      
    } else if (keyMap[38].pressed) {
      down();
      
    } else if (keyMap[39].pressed) {
      left();
      
    } else if (keyMap[40].pressed) {
      up();
      
    } else {
      ;
    }

    tryWarpIntoWitchHut();
    
    // Sends alert at the bridge to the starting island.
    if(event.keyCode != 13) {
      // falsifyKeyMap();
      
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
  var e = document.getElementById("map");
  var posX = parseInt(e.style.left);
  if (posX > horizBound) {
    e.style.left = posX - movement + 'px';
  }
}

function right() {
  var e = document.getElementById("map");
  var posX = parseInt(e.style.left);
  if (posX < horizStart) {
    e.style.left = posX + movement + 'px';
  }
}

function up() {
  var e = document.getElementById("map");
  var posY = parseInt(e.style.top);
  if (posY > vertBound) {
    e.style.top = posY - movement + 'px';
  }
}

function down() {
  var e = document.getElementById("map");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY < vertStart) {
    e.style.top = posY + movement + 'px';
  }
  // Special warp
  if(posY == vertBound && posX == exitX) {
    tryWarp();
  }
}

function up_left() {
  var e = document.getElementById("map");
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
  var e = document.getElementById("map");
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
  var e = document.getElementById("map");
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
  var e = document.getElementById("map");
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
  alert("Returning to the Starting Island...");
  window.location.replace("starting_island.html");
}

function tryWarpIntoWitchHut() {
  var e = document.getElementById("map");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if(posX == witchHutX && posY == witchHutY) {
    alert("Entering the Witch Hut...");
    window.location.replace("witchFloor1.html");
  }
}