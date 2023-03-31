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
  //ash.scene_1();


  // scene 2
  ash.scene_2();
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

