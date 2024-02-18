document.onload = docReady();
const movement = 20;
const horizBound = -1800; // originally 1440
const vertBound = -1580; // originally 1200
const scale = 1;
const caveX = -1080;
const caveY = -240;
const forestX = -340;
const forestY = -20;
const artifactX = 400;
const artifactY = 1250;
const houseY = -320;

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
  var f = document.getElementById("(Some other image ID)");
  var posX = parseInt(e.style.left);
  if (posX > horizBound * scale + 470) {
    e.style.left = posX - movement + 'px';
  }
}

function right() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  if (posX < 230) {
    e.style.left = posX + movement + 'px';
  }
}

function up() {
  var e = document.getElementById("isle2");
  var posY = parseInt(e.style.top);
  if (posY > vertBound * scale + 600) {
    e.style.top = posY - movement + 'px';
  }
}

function down() {
  var e = document.getElementById("isle2");
  var posY = parseInt(e.style.top);
  if (posY < 180) {
    e.style.top = posY + movement + 'px';
  }
}

function up_left() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY > vertBound * scale + 600) {
    e.style.top = posY - movement + 'px';
  }
  if (posX > horizBound * scale + 470) {
    e.style.left = posX - movement + 'px';
  }
}

function up_right() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY > vertBound * scale + 600) {
    e.style.top = posY - movement + 'px';
  }
  if (posX < 230 ) {
    e.style.left = posX + movement + 'px';
  }
}

function down_left() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY < 180) {
    e.style.top = posY + movement + 'px';
  }
  if (posX > horizBound * scale + 470) {
    e.style.left = posX - movement + 'px';
  }
}

function down_right() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if (posY < 180) {
    e.style.top = posY + movement + 'px';
  }
  if (posX < 230) {
    e.style.left = posX + movement + 'px';
  }
}

function docReady() {
  var img2 = document.getElementById("img2");
  var posX = 50;
  var posY = 50;
  
const xcoordpath = -280
const ycoordpath = -980
  
  function checkBottomPathway(x, y) {
    var e = document.getElementById("isle2");
    var posX = parseInt(e.style.left);
    var posY = parseInt(e.style.top);

    if (posX == xcoordpath && posY == ycoordpath) {
      alert("Press [Enter] to go to Candy Island!");
      falsifyKeyMap();
      //e.style.top = posY + movement + 'px';
      //e.style.left = posX + movement + 'px';
    }
  }

  /*function checkCaveEntrance(x, y) {
    var e = document.getElementById("isle2");
    var posX = parseInt(e.style.left);
    var posY = parseInt(e.style.top);

    if (posX == caveX && posY == caveY) {
      alert("Press [Enter] to go to the weird cave!");
      falsifyKeyMap();
      //e.style.top = posY + movement + 'px';
      //e.style.left = posX + movement + 'px';
    }
  }*/
  
function promptWarpForest() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if(forestX == posX && forestY == posY) {
    alert("Press [Enter] to go in the forest.");
    falsifyKeyMap(); // probably unnecessary
  }
}

  function promptWarpArtifact() {
    var e = document.getElementById("isle2");
    var posX = parseInt(e.style.left);
    var posY = parseInt(e.style.top);
    
    if(artifactX == posX && artifactY == posY) {
      alert("Press [Enter] to go to the next room.");
      falsifyKeyMap(); // probably unnecessary
    }
  }
  
function promptWarpCave() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if(caveX == posX && caveY == posY) {
    alert("Press [Enter] to go in the cave.");
    falsifyKeyMap();
  }
}
  
function promptWarpHouse() {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if(posX == 240 && posY == houseY) {
    alert("Press [Enter] to go in the house.");
    falsifyKeyMap();
  }
}
  
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

    if(keyMap[37].pressed && keyMap[38].pressed) {
      down_right();
      promptWarpArtifact();
      checkBottomPathway(xcoordpath, ycoordpath);
      promptWarpCave();
      promptWarpForest();
      promptWarpHouse();
    } else if(keyMap[38].pressed && keyMap[39].pressed) {
      down_left();
      promptWarpArtifact();
      checkBottomPathway(xcoordpath, ycoordpath);
      promptWarpCave();
      promptWarpForest();
      promptWarpHouse();
    } else if(keyMap[39].pressed && keyMap[40].pressed) {
      up_left();
      promptWarpArtifact();
      checkBottomPathway(xcoordpath, ycoordpath);
      promptWarpCave();
      promptWarpForest();
      promptWarpHouse();
    } else if(keyMap[40].pressed && keyMap[37].pressed) {
      up_right();
      promptWarpArtifact();
      checkBottomPathway(xcoordpath, ycoordpath);
      promptWarpCave();
      promptWarpForest();
      promptWarpHouse();
    } else if(keyMap[37].pressed) {
      right();
      promptWarpArtifact();
      checkBottomPathway(xcoordpath, ycoordpath);
      promptWarpCave();
      promptWarpForest();
      promptWarpHouse();
    } else if(keyMap[38].pressed) {
      down();
      promptWarpArtifact();
      checkBottomPathway(xcoordpath, ycoordpath);
      promptWarpCave();
      promptWarpForest();
      promptWarpHouse();
    } else if(keyMap[39].pressed) {
      left();
      promptWarpArtifact();
      checkBottomPathway(xcoordpath, ycoordpath);
      promptWarpCave();
      promptWarpForest();
      promptWarpHouse();
    } else if(keyMap[40].pressed) {
      up();
      promptWarpArtifact();
      checkBottomPathway(xcoordpath, ycoordpath);
      promptWarpCave();
      promptWarpForest();
      promptWarpHouse();
    } else {
      ;
    }
    if(event.keyCode == 13) {
      falsifyKeyMap();
      var e = document.getElementById("isle2");

      var posX = parseInt(e.style.left);
      var posY = parseInt(e.style.top);

      if (posX == xcoordpath && posY == ycoordpath) {
        console.log("Redirecting...");
        window.location.replace("candy_island.html");
      }
      tryWarp(caveX, caveY, "walking_cave_scene.html");
      tryWarp(forestX, forestY, "forest.html");
      tryWarp(240, houseY, "house.html");
      
    }
    
  })

  window.addEventListener('keyup', function(event) {
    if (keyMap[event.keyCode]) {
      keyMap[event.keyCode].pressed = false;
    }
  })

}

function tryWarp(targetX, targetY, location) {
  var e = document.getElementById("isle2");
  var posX = parseInt(e.style.left);
  var posY = parseInt(e.style.top);
  if(posX == targetX && posY == targetY) {
    window.location.replace(location);
  }
}