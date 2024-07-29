let t=0;
let numLines = 100;
let amp;
//let ampHistory=[];
let song;
let button;
let level;
let hue;

function setup() {
  createCanvas(600,600);
  amp=new p5.Amplitude();
  button =createButton("play");
  button.mousePressed(toggleSong);
  button.position(515,600);
  colorMode(HSB,360,100,100,2);
}

function preload(){
  song=loadSound("Dismantle.mp3");
}

function draw() {
  background(0,0.05);
  translate(width / 2, height / 2);
  
  level = amp.getLevel();

  for (let i = 0; i < numLines; i++) {
    let angle = TWO_PI/numLines * i;
    let vol = map(level,0,1,0,600);
    
    let x1 = sin(angle)*vol/2+ cos(t*angle);
    let y1 = cos(angle)*vol/2+ sin(t*angle);

    let x2 = sin(angle)*vol+ cos(t*angle);
    let y2 = cos(angle)*vol+ sin(t*angle);
    
    hue = (vol * 2) % 360;
    strokeWeight(1);
    stroke(hue,60,60);
    line(x1, y1, x2, y2);
    
  }
   t +=0.1;
}

function toggleSong(){
  if(song.isPlaying()){
    song.pause();
    button.html("play");
  }else{
    song.play();
    button.html("pause");
  }
  
}

function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
 background(0);
}
