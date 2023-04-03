// this is the class for the charachters used in the script

class SleepyPerson{

    // variables need this.
    constructor(x, y, s){
      this.x_ = x;
      this.y_ = y;
      this.s_ = s;
      this.size = 50;
    }
    // this. allows for a varaible accross a class in various methods so it can be seen 
    // this is a method. something the objects can do
    display(s_) {
      noStroke();
      fill(s_);
      ellipse(this.x_, this.y_, this.size, this.size);
      
    }

    // Code used for scene one mostly but some (like fade) reused throughout 
    move() {
      this.x_ = this.x_+ vel;
      if(this.x_ > width){
        clickCount ++
        vel = vel - 0.75;
        this.x_ = 140;
        this.y_ = this.y_ + 150;
        if(this.y_ >= 700){
          this.y_ = 35;
          this.secondTime = true;
        }
        if(vel <= 1){
          vel = 1;
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
          vel = 2;
          this.secondTime = false;
          reenergized = true;
        }
      }
    }

    scene_1(){
      if(scene_1_run == false){
        this.display(color(rs, gs, bs, os));
        this.fade();
        this.move();
        this.scene_1_changes();
      }
      if (reenergized == true){
        scene_1_run = true;
        clickCount = 0;
        this.fade();
        this.display(color(rs, gs, bs, os));
      }
    }

    // resets the scene to the original placement and size of ash 
    reset_scene(){
      clickCount = 0;
      this.display(color(rs, gs, bs, os));
      this.x_ = 140;
      this.y_ = 35;
    }

    // start of code thats used in scene 2
    display_coworkers(){
      noStroke();
      fill(this.s_);
      ellipse(this.x_, this.y_, this.size, this.size);
    }

    move_2(){
      this.x_ = this.x_+ random(0.5,1.5);
      this.y_ = this.y_ + random(-1,1);
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
      if(bed == true){
        if(this.size > 50){
          this.size = this.size - 1;
        }
        sleep.nighty_night();
        if(this.size == 50){
          clickCount = 0;
          this.fade();
          bed = false;
        }
      }
      if(bed == false){
        this.x_ = 400;
        this.y_ = 400;
        this.x_ = 140;
        this.y_ = 35;
        reenergized2 = true;
      }
    }

    checkTouch(){
      for(let i = coworkers.length - 1; i >= 0; i--){
        let c = coworkers[i];
        let cx = c.x_;
        let cy = c.y_;
        
        let d = dist(this.x_, this.y_, cx, cy);
        if((d) < (50)){
          //this.fade();
         // clickCount += 1;
          touchesC = true;
        } 

         /* Got the idea on how to use the distance formula to detect touching from youtuber Chris Courses --
         "How to code: Collision Detection pt 1". This just checks to see where the distance of ash is in relation
         to any of the 'coworkers' and if it is less than the combined radii of the coworker and ash (50)
         then the scene changes because that means that ash touched one of them and changed the boolean to true
         */

      }
      this.touch_changes();
    }

    touch_changes(){
      
      if(touchesC == true){
        workRun = false;
        coworkers.splice(0,25);
        this.x_ = 400;
        this.y_ = 400;
        if(this.size <= width && grow != false){
          grow = true;
          this.size = this.size + 1;
          if(this.size % 100 == 0){
            clickCount++;
            this.fade();
          }
        }
        if(this.size > width){
          grow = false;
        }
        if(grow == false && bed != true){
          bed = true;
        }
      }
    }

    scene_2(){
      this.display(color(rs, gs, bs, os));
      this.move_2();
      work();
      this.checkTouch();
      this.scene_2_changes();
      if(reenergized2 == true){
        scene_2_run = true;
      }
    }

    // start of code for scene 3 
    put_on_hat(){
      if((this.y_ < 240) || (this.x_ < 475)){
        party_hat(450, 265);
        this.x_ = this.x_+ 2;
        if(this.x_ > width){
          this.x_ = 35;
          this.y_ = this.y_ + 50;
        }
      }
    }

    hat_on(){
      if((this.x_ == 475 && this.y_ == 240) || (this.x_ >= 475 && this.y_ >= 240)){
        party_hat(this.x_ - 25, this.y_ - 25);
        party_hat_on = true;
      }
    }

    dance(){
      if(party_hat_on == true){
        party_hat(this.x_ - 25, this.y_ - 25);
        timeStart = millis();
        if(timeStart % 2 == 0){
          this.x_ = random(100, 650);
          this.y_ = random(100, 650);
        }
      }
    }

    display_guests(){
      noStroke();
      fill(this.s_);
      ellipse(this.x_, this.y_, this.size, this.size);
    }
    
    getting_sleepy(){
      check_time();
      print(time_control);
      if(time_control > 10){
        clock(250,250);
        getting_late = true;
      }
    }

    tired(){
      if(getting_late == true){
        check_time();
        if (time_control > 15){
          frameRate(7);
          alert = true;
          clickCount ++;
          this.fade();
          if(time_control > 20){
            party_guests.splice(0,party_guests.length);
            bedtime = true;
            lights = false;
            fade_background();
          }
        } 
      }
    }

    time_for_bed(){
      if(bedtime == true){
        frameRate(30);
        party_on = false;
        sleep.nighty_night();
        if(bed == true){
          background(0);
          this.x_ = 400;
          this.y_ = 400;
          party_hat_on = false;
          sleep.nighty_night();
          clickCount = 0;
          this.fade();
          this.display(color(rs, gs, bs, os));
        }
      }
    }



    scene_3(){
      //clickCount = 0;
      this.display(color(rs, gs, bs, os));
      if (party_hat_on == false && bedtime == false){
        this.put_on_hat();
      }
      this.hat_on();
      if(party_hat_on == true){
        this.dance();
        party_people();
        lights_change();
        this.getting_sleepy();
        this.tired();
      }
      if(bedtime == true){
        this.time_for_bed();
      }
      scene_3_run = true;
    }

  }

  