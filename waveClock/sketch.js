var angnoise, radnoise;
var xnoise, ynoise;
var angle;
var radius;
var strokeCol = 254;
var strokeChange = -1;


function setup() {
  //Set Canvas
  createCanvas(windowWidth,windowHeight);
  background(150);
  frameRate(30);
  noFill();
  colorMode(RGB);
  angle = -PI/2
  
  //Establish noise parameters
  angnoise = random(10);
  radnoise = random(10);
  xnoise = random(10);
  ynoise = random(10);
  
}

function draw() {
  //Increment noise and turn to Perlin noise
  radnoise += .005;
  radius = (noise(radnoise) * (windowWidth - 50) ) + 1;
  
  angnoise += .005;
  angle += (noise(angnoise) * 6) - 3;
  if (angle > 360){angle -= 360;}
  if (angle < 0){angle += 360;}
  
  xnoise += .01;
  ynoise += .01;
  
  centerX = width/2 + (noise(xnoise)*100) - 50;
  centerY = height/2 + (noise(ynoise)*100) - 50;
  
  rad = radians(angle);
  x1 = centerX + (radius * cos(rad));
  y1 = centerY + (radius * sin(rad));
  
  opprad = rad + PI;
  x2 = centerX + (radius * cos(opprad));
  y2 = centerY + (radius * sin(opprad));
  
  // c1 = int(random(255));
  // c2 = int(random(255));
  // c3 = int(random(255));
  // strokeCol += strokeChange;
  // if (strokeCol > 254){strokeChange = -1;}
  // if (strokeCol < 0){strokeChange = 1; }
  hm = color(51, 135, 176, random(255));
  stroke(hm);
  
  line(x1, y1, x2, y2);
  
}