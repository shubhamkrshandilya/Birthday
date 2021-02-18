var divcontainer;
var img;
var imgIndex;
var fireIndex;
var ballonIndex;
var musicIndex;
var commentIndex;
var bulbBtn, fireworksBtn, ballonBtn, musicBtn, commentBtn, bulbId;
var alp;
var fireworks = [];
var gravity;
var ballon;
var ballArr = ["img/ballony.png","img/ballonb.png","img/ballong.png","img/ballonp.png","img/ballons.png"];
var musArr = ["audio/0.mp3", "audio/1.mp3","audio/2.mp3","audio/3.mp3", "audio/4.mp3","audio/5.mp3","audio/6.mp3","audio/7.mp3"];
var ballons = [];
var music;
var fire;
var pBlock;
var greet;
function setup() {
  var canvas = createCanvas(480, 480);
  divcontainer = select("#canvas") 
  // canvas.parent(divcontainer);
  divcontainer.parent(canvas);
  img = loadImage("img/Pic.jpg");
  bulbBtn = select(".bulb")
  fireworksBtn = select(".fireworks")
  ballonBtn = select(".ballon");
  musicBtn = select(".music");
  //commentBtn = select(".comment");
  bulbBtn.mouseClicked(bulbClicked);
  fireworksBtn.mouseClicked(fireworksClicked);
  ballonBtn.mouseClicked(ballonClicked);
  musicBtn.mouseClicked(musicClicked);
  commentBtn.mouseClicked(commentClicked);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  imgIndex = 0;
  fireindex = 0;
  ballonIndex = 0;
  musicIndex = 0;
  bulbId = select("#bulbId");
  
  for(var i=0; i<5;i++){
    ballons[i] = new Ballon(ballArr[floor(random(ballArr.length))]);
  }
  alp = 255;
}

function draw() {
  background(0,alp);
  if(imgIndex){
    image(img,0,0,width,height);
    
  }
  if(fireIndex){
    if (random(1) < 0.03) {
      fireworks.push(new Firework());
    }
  
    for (var i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();
  
      if (fireworks[i].done()) {
        fireworks.splice(i, 1);
      }
    }
  }
  if(ballonIndex){
    for(var i=0; i<ballons.length;i++){
      ballons[i].show();
      ballons[i].update();
  }
}
  
}


function bulbClicked(){
  if(!imgIndex){
  alp = 0;
  imgIndex = !imgIndex;
  }else{
    alp = 255;
    imgIndex = !imgIndex;
  }
  
  // image(img,0,0,width,height);
}

function fireworksClicked(){
 
 if(!fireIndex){
    fire = createAudio("audio/fire.mp3");
    // fire.play(true);
    fire.loop(true);
    fireIndex = !fireIndex;
  }else{
    fire.stop();
    fireIndex = !fireIndex;
  }
}

function ballonClicked(){
  // ballonIndex = 1;
  if(!ballonIndex){
    ballonIndex = !ballonIndex;
    }else{
      ballonIndex = !ballonIndex;
    }
}


function musicClicked(){
  
  if(!musicIndex){
    music = createAudio(musArr[floor(random(musArr.length))]);
    music.play(true);
    musicIndex = !musicIndex;
  }else{
    music.stop();
    musicIndex = !musicIndex;
  }
 }
 
//  function commentClicked(){
//   if(!commentIndex){
//     greet = createAudio("audio/birthday.mp3");
//     greet.play(true);
//     commentIndex = !commentIndex;
//   }else{
//     greet.stop();
//     commentIndex = !commentIndex;
//   }
//  }
