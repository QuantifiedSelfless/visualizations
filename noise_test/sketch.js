function setup() {
  createCanvas(500, 100);
  background(255);
  strokeWeight(5);
  stroke(0, 30);
  line(20, 50, 480, 50);
  
  stroke(20, 50, 70);
  
  step=10;
  lastx=-999;
  lasty=-999;
  ynoise = random(10);
  for (x=20; x<=480; x+=step){
    y = 10 + noise(ynoise) * 80;
    if(lastx > -999){
      line(x, y, lastx, lasty);
    }
    lastx = x;
    lasty = y;
    ynoise += .1;
  }
}

function draw() {
  
}