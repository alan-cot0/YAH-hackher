document.onload = docReady();
const movement = 10;
// Dummy, Floor 1, Floor 2, House
const leftBound = [255, 240, 260, 180];
const rightBound = [255, -720, 20, -700];
const topBound = [255, -220, -60, -200];
const bottomBound = [255, -220, -80, -220];
const exitX = 2147483647;

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
  switch (document.title) {
    case "Witch Hut - Floor 1":
      floor = 1;
      break;
    case "Witch Hut - Floor 2":
      floor = 2;
      break;
    default:
      floor = 3;
      break;
  }
  window.addEventListener('keydown', function(event) {
    if (keyMap[event.keyCode]) {
      keyMap[event.keyCode].pressed = true;
    }

    if (keyMap[37].pressed && keyMap[38].pressed) {
      down_right(floor);

    } else if (keyMap[38].pressed && keyMap[39].pressed) {
      down_left(floor);

    } else if (keyMap[39].pressed && keyMap[40].pressed) {
      up_left(floor);

    } else if (keyMap[40].pressed && keyMap[37].pressed) {
      up_right(floor);

    } else if (keyMap[37].pressed) {
      right(floor);

    } else if (keyMap[38].pressed) {
      down(floor);

    } else if (keyMap[39].pressed) {
      left(floor);

    } else if (keyMap[40].pressed) {
      up(floor);

    } else {
      ;
    }
    // Sends alert at the bridge to the starting island.
    if (event.keyCode != 13) {
      // falsifyKeyMap();

    }
    if (event.keyCode == 13) {
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

function left(floor) {
  var e = document.getElementById("map");
  var posX = parseInt(e.style.left);
  if (posX > rightBound[floor]) {
    e.style.left = posX - movement + 'px';
  }
  if (posX == leftBound[floor] && floor == 1) {
    tryWarpLeft();
  }
}

function right(floor) {
  var e = document.getElementById("map");
  var posX = parseInt(e.style.left);
  if (posX < leftBound[floor]) {
    e.style.left = posX + movement + 'px';
  }
  if (posX == rightBound[floor]) {
    tryWarpRight(floor);
  }
}

function up(floor) {
  var e = document.getElementById("map");
  var posY = parseInt(e.style.top);
  if (posY > bottomBound[floor]) {
    e.style.top = posY - movement + 'px';
  }
}

function down(floor) {
  var e = document.getElementById("map");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY < topBound[floor]) {
    e.style.top = posY + movement + 'px';
  }
  // Special warp
  if (posY == bottomBound[floor] && posX == exitX) {
    tryWarp();
  }
}

function up_left(floor) {
  var e = document.getElementById("map");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY > bottomBound[floor]) {
    e.style.top = posY - movement + 'px';
  }
  if (posX > rightBound[floor]) {
    e.style.left = posX - movement + 'px';
  }
}

function up_right(floor) {
  var e = document.getElementById("map");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY > bottomBound[floor]) {
    e.style.top = posY - movement + 'px';
  }
  if (posX < leftBound[floor]) {
    e.style.left = posX + movement + 'px';
  }
}

function down_left(floor) {
  var e = document.getElementById("map");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY < topBound[floor]) {
    e.style.top = posY + movement + 'px';
  }
  if (posX > rightBound[floor]) {
    e.style.left = posX - movement + 'px';
  }
}

function down_right(floor) {
  var e = document.getElementById("map");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY < topBound[floor]) {
    e.style.top = posY + movement + 'px';
  }
  if (posX < leftBound[floor]) {
    e.style.left = posX + movement + 'px';
  }
}

function tryWarpRight(floor) {
  if (floor == 1) {
    alert("Going up...");
    window.location.replace("witchFloor2.html");
  } else if (floor == 2) {
    alert("Going down...");
    window.location.replace("witchFloor1.html");
  } else {
    alert("Leaving the house...");
    window.location.replace("starting_island.html");
  }
}

function tryWarpLeft() {
  alert("Returning to the Forest...");
  window.location.replace("forest.html");
}