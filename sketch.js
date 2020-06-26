function setup() {
  createCanvas(displayWidth,displayHeight);
  angleMode(DEGREES);
}

function draw() {
  translate(500,500);

  rotate(-90);
  background(0,0,0);


  stroke('#35212A')
  ellipse(0,0,500,500);
  noFill();
  stroke('#F148FB');
  strokeWeight(6)
  let arc2 = map(second(),0,60,0,360);
arc(0, 0, 480, 480, 0,arc2);

stroke('#7122FA');
strokeWeight(6)
let arc1 = map(minute(),0,60,0,360);
arc(0, 0, 460, 460, 0,arc1);

stroke('#75D5FD');
strokeWeight(6)
let arc3 = map(hour()%12,0,12,0,360);
arc(0, 0, 440, 440,0,arc3);

push();
rotate(arc3);
line(0,0,130,0);
pop();

push();
stroke('#F148FB');


rotate(arc2);
line(0,0,180,0);
pop();

push();
stroke('#7122FA');

rotate(arc1);
line(0,0,150,0);
pop();
stroke('#E8E500');
point(0, 0);

}
