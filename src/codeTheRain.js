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