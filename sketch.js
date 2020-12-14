var board = [];
var test2 = [];
var activeMode;
let backgroundImg;
let backgroundBoxImage;
let piece1;
let piece2;
let piece3;
let piece4;
let piece5;
let piece6;
var scoreElem;
var timer;
var timer2;

const sketch = (p) => {
  p.preload = function() {
      backgroundBoxImage = p.loadImage('assets/img/chalkboard-517818_640.jp');
  }

  p.setup = function() {
    p.createCanvas(580, 670);

    p.rectMode(p.CORNER);

    game = new Game(this);
      
    backgroundBoxImage.resize(150, 425);
    p.image(backgroundBoxImage, 0, 15); 

    scoreElem = p.createDiv('0');
    scoreElem.position(35, 100);
    scoreElem.class('score-span');

    goBackButton = p.createButton('Menu');
    goBackButton.position(33, 360);
    goBackButton.mousePressed(p.goBackToMenu);
    goBackButton.class('btn-circle-menu');
    
    goBackButton = p.createButton('Hint');
    goBackButton.position(33, 280);
    goBackButton.mousePressed(p.showHint);
    goBackButton.class('btn-circle-menu');
    
    shufflingElem = p.createDiv('Shuffling');
    shufflingElem.position(15, 200);
    shufflingElem.class('shuffling-span');
    shufflingElem.hide();

    p.frameRate(30);
  }
  
  p.showHint = function(){
    game.showHint();
  }

  p.draw = function() {   
    p.fill(0);

    p.push();
    p.strokeWeight(1);
    p.stroke(255);
    p.fill(255);
    p.textSize(32);
    p.textFont('Comic Sans MS');
    p.text('Score', 35, 75);

    p.pop();

    game.showBoard();
    
    if (p.millis() - timer >= 2000) {
      game.checkIfGameActive();
      timer = p.millis();
    }
  }

  p.mouseClicked = function() {
    game.mouseClicked();
  }

  p.goBackToMenu = function() {
    p.remove();
    activeMode = 0;
    new p5(welcomeScreen);
  }

}

const welcomeScreen = (p) => {
  p.preload = function() {

    backgroundImg = p.loadImage('assets/img/blackboard-1906462_640.jpg');

    piece1 = p.loadImage('assets/img/golden_gemstone-removebg-preview.png');
    piece2 = p.loadImage('assets/img/blue_gemstone-removebg-preview.png');
    piece3 = p.loadImage('assets/img/green_gemstone-removebg-preview.png');
    piece4 = p.loadImage('assets/img/darkblue_gemstone-removebg-preview.png');
    piece5 = p.loadImage('assets/img/grey_gem-removebg-preview.png');
    piece6 = p.loadImage('assets/img/red_gemstone-removebg-preview.png');
  }

  p.setup = function() {
    p.createCanvas(1000, 1000);

    ClassicModeButton = p.createButton('Classic');
    ClassicModeButton.position(100, p.height / 2 - 20);
    ClassicModeButton.mousePressed(p.startClassicalMode);
    ClassicModeButton.class('btn-circle');
    
    ClassicModeButton = p.createButton('Zen');
    ClassicModeButton.position(250, p.height / 2 - 20);
    ClassicModeButton.mousePressed(p.startZenMode);
    ClassicModeButton.class('btn-circle');

    backgroundImg.resize(800,600);
    p.image(backgroundImg, 0, 0);

  }

  p.draw = function() {
    p.push();
    p.strokeWeight(2);
    p.stroke(0);
    p.fill(255);
    p.textAlign(p.CENTER);
    p.textSize(42);
    p.textFont('jazzy');
    p.text('Pair Them Up',-60, 150, p.width);
    p.pop();

    p.push();
    p.strokeWeight(2);
    p.stroke(0);
    p.fill(255);
    p.textSize(32);
    p.textAlign(p.CENTER);
    p.textFont('jazzy');
    p.text('Game Modes', -60, 360, p.width);
    p.pop();

    //p.rect(25, 260, p.width - 50, 100);

    p.image(piece1, 200, 230,50,50);
    p.image(piece2, 280, 230,50,50);
    p.image(piece3, 360, 230,50,50);
    p.image(piece4, 440, 230,50,50);
    p.image(piece5, 520, 230,50,50);
    p.image(piece6, 600, 230,50,50);
  }

  p.startClassicalMode = function() {
    p.remove();
    activeMode = 1;
    new p5(sketch);
  }
  
  p.startZenMode = function() {
    p.remove();
    activeMode = 2;
    new p5(sketch);
  }
}

new p5(welcomeScreen);