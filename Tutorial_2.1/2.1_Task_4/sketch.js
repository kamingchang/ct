
var buttonX
var buttonY

function setup()
{
  createCanvas(700,500);
  buttonX = 600;
  buttonY = 450;

}

function draw()
{
	background(125,125,125)


	if (mouseX > 0 && mouseX < 0 + 100 && mouseY > 450 && mouseY < 450+50)
	{
		fill(0,0,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(0,450,100,50);
	}
	else
	{
		fill(255,255,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(0,450,100,50);
	}

	fill(255,0,0);
	stroke(0,0,0);
  strokeWeight(0);
	textSize(12);
	text("Ka Ming",30,480);

  if (mouseX > buttonX && mouseX < buttonX + 100 && mouseY > buttonY && mouseY < buttonY + 50)
  {
    fill(0,0,255);
    stroke(0,0,0);
    strokeWeight(3);
    rect(buttonX,buttonY,100,50);
  }
  else
  {
    fill(255,0,0);
    stroke(0,0,0);
    strokeWeight(3);
    rect(buttonX,buttonY,100,50);
  }

  fill(255,255,0);
  stroke(0,0,0);
  strokeWeight(0);
  textSize(12);
  text("Chang",buttonX + 30,buttonY + 30);

}
