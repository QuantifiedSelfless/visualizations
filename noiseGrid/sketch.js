var xstart, xnoise, ynoise;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(102, 70, 45);
  xstart = random(10);
  xnoise = xstart;
  ynoise = random(10);
  
  for (var y=0; y<=height; y+=3){
    ynoise += .1;
    xnoise = xstart;
    for (var x=0; x<=width; x+=3){
      xnoise+=0.1;
      drawBox(x, y, noise(xnoise, ynoise));
    }
  }
}

function drawBox(x, y, nfac) {
  push();
    translate(x, y);
    alph = 100 + (nfac * 120);
    // grey = 150 + (nfac * 120); 
    noStroke();
    fill(64, 130, 73, alph);
    beginShape();
      vertex(random(10) * nfac, random(10) * nfac);
      vertex(random(10) * nfac, random(10) * nfac);
      vertex(random(10) * nfac, random(10) * nfac);
      vertex(random(10) * nfac, random(10) * nfac);
      vertex(random(10) * nfac, random(10) * nfac);
    endShape(CLOSE);
  pop();
  // len = 10 * nfac;
  // rect(x,y,len,len);
}