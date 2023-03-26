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


function setup(){
  createCanvas(800,800);
  background(250,237, 203, 98);
  ash = new SleepyPerson(140, 35, color(rs, gs, bs, os));
  drink = new Energy(400,400);
  sleep = new Energy(500,500);
}

function draw(){
  background(250,237, 203, 98);
  ash.display(color(rs, gs, bs, os));
  ash.fade();
  ash.move();

  drink.yum();
  sleep.nighty_night();

}



