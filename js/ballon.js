var popB;
function Ballon(imgPath) {
    this.sizex = 100;
    this.sizeY = 150;
    this.pos = createVector(random(width-this.sizeX), random(height- this.sizeY));
    this.ballon = loadImage(imgPath);
    this.filled = false;
    this.lifespan = 25550;
    this.pop = false;
   
    // this.acc = createVector(0, 0);
  
    // if (this.filled) {
    //   this.vel = createVector(0, random(-12, -8));
    // } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(2, 5));
    // }
  
    // this.applyForce = function(force) {
    //   this.acc.add(force);
    // };
  
    this.update = function() {
      if (!this.filled) {
        // this.vel.mult(0.9);
        this.lifespan -= 0.0001;
        // this.sizeX -= 0.001;
        // this.sizey -= 0.0015;
      }
        
    //   this.vel.add(this.acc);
    if(this.pos.x > width-100||this.pos.x < 0)
    this.vel.x *= -1;
    if(this.pos.y > height-100||this.pos.y < 0)
    this.vel.y *= -1;
      this.pos.add(this.vel);
    //   this.acc.mult(0);
    };
  
    this.done = function() {
      if (this.lifespan < 0) {
        return true;
      } else {
        return false;
      }
    };


    // this.mouseClicked = function(){
    //   this.pop;
    // }

    // this.pop = function(){
    //   popB = createAudio("audio/pop.mp3");
    //   popB.play(true);
    //   // fire.loop(true);
    //   // fireIndex = !fireIndex;
    // }


  
    this.show = function() {
    //   colorMode(HSB);
  
      if (!this.filled) {
        image(this.ballon,this.pos.x, this.pos.y,100,150);
      } else {
        // image(this.ballon,this.pos.x, this.pos.y,100,150);
      }
  
      
    };
  }