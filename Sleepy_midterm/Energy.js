// this is the class for the recharging things

class Energy{

    constructor(x, y){
        this.x_ = x;
        this.y_ = y;
    }
    
    nighty_night() {
        noStroke();
        //bed
        fill(190,236,255);
        rect(this.x_, this.y_, 100, 50);
        //sheet
        fill(141,157,222);
        rect(this.x_+ 25, this.y_, 75, 50);
        //pillows
        fill(126,193,235);
        rect(this.x_, this.y_, 10, 20);
        rect(this.x_, this.y_ + 25, 10, 20);
        //close legs
        fill(145,82,9);
        rect(this.x_, this.y_ + 50, 15, 15);
        rect(this.x_ + 85, this.y_ + 50, 15, 15);
        //far legs
        fill(143,85,23);
        rect(this.x_+20, this.y_ + 50, 10, 10);
        rect(this.x_ + 70, this.y_ + 50, 10, 10); 
      }

    yum(){
        stroke(0);
        //handle
        noFill();
        strokeWeight(3);
        ellipse(this.x_+ 40, this.y_ - 5, 30, 30);
        //cup
        strokeWeight(2);
        fill(255);
        rect(this.x_ - 40, this.y_ - 40, 80, 100);
        //coffee - mouth part
        fill(112,75,49);
        ellipse(this.x_, this.y_-40, 80, 30);
        //sleeve
        fill(145,82, 9, 57);
        rect(this.x_ - 40, this.y_ + 10, 80, 20);
    }

}