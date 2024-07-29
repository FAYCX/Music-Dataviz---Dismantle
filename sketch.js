let t = 0;
let numLines = 100;
let amp;
let song;
let button;
let level;
let hue;

function preload() {
  song = loadSound("https://raw.githubusercontent.com/FAYCX/Music-Dataviz---Dismantle/main/Dismantle.mp3");
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('sketch-container');
  amp = new p5.Amplitude();
  button = select('#startButton');
  button.mousePressed(toggleSong);
  colorMode(HSB, 360, 100, 100, 2);
}

function draw() {
  background(0, 0.05);
  translate(width / 2, height / 2);
  
  level = amp.getLevel();

  for (let i = 0; i < numLines; i++) {
    let angle = TWO_PI / numLines * i;
    let vol = map(level, 0, 1, 0, 600);
    
    let x1 = sin(angle) * vol / 2 + cos(t * angle);
    let y1 = cos(angle) * vol / 2 + sin(t * angle);

    let x2 = sin(angle) * vol + cos(t * angle);
    let y2 = cos(angle) * vol + sin(t * angle);
    
    hue = (vol * 2) % 360;
    strokeWeight(1);
    stroke(hue, 60, 60);
    line(x1, y1, x2, y2);
  }
  t += 0.1;
}

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
    button.html("Play the Music");
  } else {
    song.play();
    button.html("Pause the Music");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
