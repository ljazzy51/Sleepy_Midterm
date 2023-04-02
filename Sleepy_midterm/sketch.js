// when working in p5.js you always have a libraries folder as well as an index.html file
// the sketch.js is where you write the p5 code but it all works together
// to run your code in the browser you open the index file  

let ash;
let drink;
let sleep;
let rs, gs, bs, os;
let clickCount;
clickCount = 0;
rs = 242;
gs = 15;
bs = 182;
os = 95;

let bed;
let coffee;

let secondTime = false;
let scene_1_run = false;
let scene_2_run = false;

let coworkers = [];
let timeStart;
let c;
let touchesC = false;
let workRun = true;
let grow;

let party_hat_on = false;
let green_light = [105, 247, 101, 20];
let blue_light = [12, 115, 247, 20];
let pink_light = [255, 0, 178, 20];
let orange_light = [247, 154, 12, 20];

let background_colors = [];
let colors_random;



function setup(){
  createCanvas(800,800);
  background(250,237, 203, 98);
  ash = new SleepyPerson(140, 35, color(rs, gs, bs, os));
  drink = new Energy(400,185);
  sleep = new Energy(350,375);
  c = new SleepyPerson ()
  testCoworker = new SleepyPerson(600, 35, color(0));
}

function draw(){
  background(250,237, 203, 98);
  
  // scene 1
  /* Ash goes through the motions of a busy day by bouncing around the screen. When he leave the screen
   he fades in color to show gaining sleepiness. When he reaches peak sleepiness (The darkest shade) 
   a coffee appears for him and he goes to drink the coffee. When he drinks the coffee his energy is restored
   and he moves onto scene 2 */
  //ash.scene_1();


  // scene 2
  /* Scene 2 is a busy day at work where ash is going about his day and trying to avoid talking to other people. 
   When he talks to other people (touches them) then he becomes so frustrated with sleepiness that everything else
   goes away and he grows and grows with frustration and then when the bed appears he calms down and goes to sleep. 
   Sleeping restores ashes color and he goes on to scene 3 */ 
  //ash.scene_2();

  // scene 3
  /* Scene 3 is the party scene. After his nap from a long day of moving around and work, he remembers that he was going 
   to a party tonight! He puts on his party hat and then other people begin to arrive. The lights are going crazy and he 
   is having so much fun but as time goes on he is getting sleepier and sleepier. Eventually, he sees that it is late and 
   he goes off to sleep. This is the end of the program 
  */
  
  //lights_change();
  ash.scene_3();
  
}

function work(){
  if (workRun == true){
    timeStart = millis();
    if ((timeStart % 5 == 0) && (coworkers.length <=25)){
      coworkers.push(new SleepyPerson(random(150, 700),random(150, 700),color(60,177,246,96)));
    }
    for(let i = coworkers.length - 1; i >= 0; i--){
      let c = coworkers[i];
      c.display_coworkers();
    }
  }
}

function party_hat(x1,y1){
  noStroke();
  //base
  fill(24,126,245);
  triangle(x1,y1, x1 + 50, y1, x1 + 25, y1 - 50);
  //stripes
  fill(211, 235, 84);
  beginShape();
    vertex(x1 + 2, y1 - 4);
    vertex(x1 + 5, y1 - 11);
    vertex(x1 + 45, y1 - 11);
    vertex(x1 + 48, y1 - 4);
  endShape();
  beginShape();
    vertex(x1 + 8, y1 - 17);
    vertex(x1 + 11, y1 - 22);
    vertex(x1 + 39, y1 - 22);
    vertex(x1 + 42, y1 - 17);
  endShape();
  beginShape();
    vertex(x1 + 14, y1 - 29);
    vertex(x1 + 17, y1 - 35);
    vertex(x1 + 33, y1 - 35);
    vertex(x1 + 36, y1 - 29);
  endShape();
  beginShape();
    vertex(x1 + 20, y1 - 40);
    vertex(x1 + 22, y1 - 44);
    vertex(x1 + 28, y1 - 44);
    vertex(x1 + 30, y1 - 40);
  endShape();
  //pompom
  fill(245,189,88);
  ellipse(x1 + 25, y1 - 54, 9, 9);
}

function lights_change(){
  background_colors = [green_light, blue_light, pink_light, orange_light];
  //frameRate(3);
  let pick_random = Math.round(random(0,3));
  if(pick_random == 0){
    fill(background_colors[0]);
  }
  if(pick_random == 1){
    fill(background_colors[1]);
  }
  if(pick_random == 2){
    fill(background_colors[2]);
  }
  if(pick_random == 3){
    fill(background_colors[3]);
  }
  rect(0,0, 800,800);
}