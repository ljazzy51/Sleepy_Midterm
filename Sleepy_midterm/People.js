// this is the class for the charachters used in the script

class SleepyPerson{

    // variables need this.
    constructor(x, y, s){
      this.x_ = x;
      this.y_ = y;
      this.s_ = s;
    }
    // this. allows for a varaible accross a class in various methods so it can be seen 
    // this is a method. something the objects can do
    display(s_) {
      noStroke();
      fill(s_);
      ellipse(this.x_, this.y_, 50, 50);
      
    }
  
    move() {
      this.x_ = this.x_+1;
      if(this.x_ > width){
        clickCount ++
        this.x_ = 140;
        if (clickCount >= 5 ){
          clickCount = 0;
        }
      }
    }
  
    // the color fades as the character looses energy through doing things 
    // clickCount = 0 -> fully energized 
    // clickCount = 4 -> fully drained 
    fade() {
      if(clickCount <= 5){
        if (clickCount == 1){
          rs = 230;
          gs = 14;
          bs = 172;
          os = 90;
        }
        else if (clickCount == 2){
          rs = 204;
          gs = 12;
          bs = 153;
          os = 80;
        }
        else if (clickCount == 3){
          rs = 166;
          gs = 10;
          bs = 124;
          os = 65;
        }
        else if (clickCount == 4){
          rs = 102;
          gs = 6;
          bs = 76;
          os = 40;
        }
      }
  
    } 
  }