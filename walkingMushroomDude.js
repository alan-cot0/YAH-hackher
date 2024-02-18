document.onload = docReady();
const movement = 10;
const horizBound = 0; 
const vertBound = 401;
const horizStart = 1220;
const vertStart = 400;
const exitX = -440;
const caveX = -160;
const caveY = -320;
const artifactX = 1200;
const artifactY = 400;
const scrollX = 590;
const scrollY = 550;
const artifactExitX = 0;
const artifactExitY = 550;
const tunnelExitX = 10;
const tunnelExitY = 400;

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
      up_left();
       promptWarpArtifact();
      findArtifact();
       tryWarpOutArtifact();
      freeFromTheTunnels();

    } else if (keyMap[38].pressed && keyMap[39].pressed) {
      up_right();
       promptWarpArtifact();
      findArtifact();
       tryWarpOutArtifact();
      freeFromTheTunnels();

    } else if (keyMap[39].pressed && keyMap[40].pressed) {
      down_right();
       promptWarpArtifact();
      findArtifact();
       tryWarpOutArtifact();
      freeFromTheTunnels();

    } else if (keyMap[40].pressed && keyMap[37].pressed) {
      down_left();
       promptWarpArtifact();
      findArtifact();
       tryWarpOutArtifact();
      freeFromTheTunnels();

    } else if (keyMap[37].pressed) {
      left();
       promptWarpArtifact();
      findArtifact();
       tryWarpOutArtifact();
      freeFromTheTunnels();

    } else if (keyMap[38].pressed) {
      up();
       promptWarpArtifact();
      findArtifact();
       tryWarpOutArtifact();
      freeFromTheTunnels();

    } else if (keyMap[39].pressed) {
      right();
       promptWarpArtifact();
      findArtifact();
       tryWarpOutArtifact();
      freeFromTheTunnels();
      
      

    } else if (keyMap[40].pressed) {
        down();
       promptWarpArtifact();
      findArtifact();
       tryWarpOutArtifact();
      freeFromTheTunnels();

    } else {
      ;
    }
    // Sends alert at the bridge to the starting island.
    if(event.keyCode != 13) {
      // falsifyKeyMap();

    }
    if(event.keyCode == 13) {
      // Warp
      falsifyKeyMap();
      tryWarp();
    }
  })

  window.addEventListener('keyup', function(event) {
    if (keyMap[event.keyCode]) {
      keyMap[event.keyCode].pressed = false;
    }
  })

}

function left() {
  var e = document.getElementById("WalkingMushroom");
  var posX = parseInt(e.style.left);
  if (posX > horizBound) {
    e.style.left = posX - movement + 'px';
  }
}

function right() {
  var e = document.getElementById("WalkingMushroom");
  var posX = parseInt(e.style.left);
  if (posX < horizStart) {
    e.style.left = posX + movement + 'px';
  }
}

function up() {
  var e = document.getElementById("WalkingMushroom");
  var posY = parseInt(e.style.top);
  if (posY > vertBound) {
    e.style.top = posY - movement + 'px';
  }
}

function down() {
  var e = document.getElementById("WalkingMushroom");
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
  var e = document.getElementById("WalkingMushroom");
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
  var e = document.getElementById("WalkingMushroom");
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
  var e = document.getElementById("WalkingMushroom");
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
  var e = document.getElementById("WalkingMushroom");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY < vertStart) {
    e.style.top = posY + movement + 'px';
  }
  if (posX < horizStart) {
    e.style.left = posX + movement + 'px';
  }
}

function promptWarpArtifact() {
  var e = document.getElementById("WalkingMushroom");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);

  if(artifactX == posX && artifactY == posY) {
    alert("Press [Enter] to go to the next room.");
    falsifyKeyMap(); // probably unnecessary
  }
}

function findArtifact() {
  var e = document.getElementById("WalkingMushroom");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);

  if(scrollX == posX && scrollY == posY) {
    alert("Woah! That scroll is floating! What does it say? I need a closer look...");
    lookAtScroll();
    falsifyKeyMap(); // probably unnecessary
  }
}

function lookAtScroll() {
  var f = document.getElementById("scroll");
  var scrollh = parseInt(f.style.left);
  f.style.left = 0;
  var scrollv = parseInt(f.style.top);
  f.style.top = 0;
}

function tryWarp() {
  /*alert("Returning to the Starting Island...");*/
  window.location.replace("artifactroom.html");
}

function tryWarpOutArtifact() {
  /*alert("Returning to the Starting Island...");*/
  var e = document.getElementById("WalkingMushroom");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);

  if(artifactExitX == posX && artifactExitY == posY) {
    alert("Let's go.");
    window.location.replace("walking_cave_scene.html");
    falsifyKeyMap(); // probably unnecessary
  }
  
}

function freeFromTheTunnels() {
  /*alert("Returning to the Starting Island...");*/
  var e = document.getElementById("WalkingMushroom");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);

  if(tunnelExitX == posX && tunnelExitY == posY) {
    alert("I can see the light at the end of the tunnel...");
    window.location.replace("starting_island.html");
    falsifyKeyMap(); // probably unnecessary
  }

}
