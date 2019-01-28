
function setup()
{
  createCanvas(700,500);


}

function draw()
{
	background(125,125,125)


	if (mouseX > 10 && mouseX < 10 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(0,0,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,100,50);
	}
	else
	{
		fill(255,255,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,100,50);
	}

	fill(255,0,0);
	stroke(0,0,0);
  strokeWeight(0);
	textSize(12);
	text("Ka Ming",40,40);

}
