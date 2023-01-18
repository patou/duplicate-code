function codeTheRain() {
  const rainDrops = [];
  const numRainDrops = 300;
  const rainSpeed = 3;

  function setup() {
    createCanvas(640, 480);
    frameRate(30);
    for (let i = 0; i < numRainDrops; i++) {
      rainDrops.push([random(0, width), random(-500, -50)]);
    }
  }

  function draw() {
    background(220);
    stroke(0);
    fill(0);
    for (let i = 0; i < numRainDrops; i++) {
      rainDrops[i][1] += rainSpeed;
      ellipse(rainDrops[i][0], rainDrops[i][1], 5, 10);
      if (rainDrops[i][1] > height) {
        rainDrops[i][1] = random(-500, -50);
      }
    }
  }

  new p5(setup, draw);
}










const width = 640;
const height = 480;
class p5 {
  constructor(setup: () => void, draw: () => void) {
    setup();
    draw();
  }
}
function createCanvas(arg0: number, arg1: number) {
    throw new Error("Function not implemented.");
}


function frameRate(arg0: number) {
    throw new Error("Function not implemented.");
}


function random(arg0: number, width: any) {
    throw new Error("Function not implemented.");
}


function background(arg0: number) {
    throw new Error("Function not implemented.");
}


function stroke(arg0: number) {
    throw new Error("Function not implemented.");
}


function fill(arg0: number) {
    throw new Error("Function not implemented.");
}


function ellipse(arg0: any, arg1: any, arg2: number, arg3: number) {
    throw new Error("Function not implemented.");
}
