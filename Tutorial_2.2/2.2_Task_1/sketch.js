var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 200;
  button2Y = 100;


}

function draw()
{
	background(125,125,125)

	strokeWeight(3);

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y + 50)
	{
		fill(248,89,255);
		if (mouseIsPressed)
		{
      rect(button2X,button2Y,100,50);
			fill(47,247,114);
      textSize(12);
      fill(255,255,255);
      stroke(0,0,0);
      text("Academy",button2X+30-5,button2Y+30+2);
		}
    else {
      rect(button2X,button2Y,100,50);
      textSize(12);
      fill(255,255,255);
      stroke(0,0,0);
      text("Shanghai",button2X+30-5,button2Y+30+2);
    }

	}
	else
	{
		fill(255,113,53);
		rect(button2X,button2Y,100,50);
		textSize(12);
		fill(255,255,255);
		stroke(0,0,0);
		text("Victoria",button2X+30,button2Y+30);
	}

}
