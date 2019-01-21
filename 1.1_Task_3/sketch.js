function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(2110,1560);

}

function draw()
{
  //create a background using RGB values
  background(255,0,0)

  // change the paint brush to a specific color according to RGB values
  fill(0,0,255);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(10,10,100,50);
  rect(110,60,200,100);
  rect(310,160,300,200);
  rect(610,360,400,300);
  rect(1010,660,500,400);
  rect(1510,1060,600,500);

}
