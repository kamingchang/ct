function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(1400,1000);

}

function draw()
{
  //create a background using RGB values
  background(255,0,0)

  // change the paint brush to a specific color according to RGB values
  fill(0,0,255);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(10,10,100,50);
  rect(110,60,100,50);
  rect(210,110,100,50);
  rect(310,160,100,50);
  rect(410,210,100,50);
  rect(510,260,100,50);

}
