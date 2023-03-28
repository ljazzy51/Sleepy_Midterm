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
        this.y_ = this.y_ + 150;
        if(this.y_ >= 700){
          this.y_ = 35;
          this.secondTime = true;
        }
      }
    }
  
    // the color fades as the character looses energy through doing things 
    // clickCount = 0 -> fully energized 
    // clickCount = 4 -> fully drained 
    fade() {
      if(clickCount <= 5){
        if (clickCount == 0){
          rs = 242;
          gs = 15;
          bs = 182;
          os = 95;
        }
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

    // brings the coffee cup up after the second pass through the screen
    // when ash hits the coffee cup their energy is restored and they continue to move across the screen
    scene_1_changes(){
      if(this.secondTime == true){
        drink.yum();
        if ((this.x_ >= 400) && (this.y_ >= 185)) {
          clickCount = 0;
          this.display(color(rs, gs, bs, os));
          this.secondTime = false;
        }
      }
    }

    scene_1(){
      this.display(color(rs, gs, bs, os));
      this.fade();
      this.move();
      this.scene_1_changes();
      scene_1_run = true;
    }

    reset_scene(){
      clickCount = 0;
      this.display(color(rs, gs, bs, os));
      this.x_ = 140;
      this.y_ = 35;
    }


    display_coworkers(){
      noStroke();
      fill(this.s_);
      ellipse(this.x_, this.y_, 50, 50);
    }

    move_2(){
      this.x_ = this.x_+1;
      if(this.x_ > width){
        this.x_ = 140;
        this.y_ = this.y_ + 150;
        if(this.y_ >= 700){
          this.y_ = 35;
          this.secondTime = true;
        }
      }
    }

    scene_2_changes(){
      if((touchesC == true)&&(secondTime == true)){
        sleep.nighty_night();
        if ((this.x_ >= 400) && (this.y_ >= 335)) {
          clickCount = 0;
          this.display(color(rs, gs, bs, os));
          this.secondTime = false;
        }
      }
    }

    checkTouch(){
      for(let i = coworkers.length - 1; i >= 0; i--){
        let c = coworkers[i];
        let cx = c.x_;
        let cy = c.y_;
        
        let d = dist(this.x_, this.y_, cx, cy);
        if((d) < (50)){
          clickCount ++;
          this.fade();
        }
      }
    }

    scene_2(){
      this.display(color(rs, gs, bs, os));
      this.move_2();
      work();
      this.checkTouch();
      this.scene_2_changes();
      scene_2_run = true;
    }

  
  }

  