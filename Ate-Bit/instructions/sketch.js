function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(500,500);
  buttonX = 10
  buttonY = 10
  button2X = 100
  button2Y = 50
}

function draw()
{
  //create a background using RGB values
  background(0,0,0)
  fill(255,0,0);

  rect(buttonX,buttonY,button2X,button2Y);

  fill(0,0,0);

  text("Back",25,40);

  if(mouseX > buttonX && mouseX < buttonX + button2X && mouseY > buttonY && mouseY < buttonY + button2Y && mouseIsPressed)
  {
    window.open("../index.html","_self");
  }

  fill(255,255,255)
  text("Shoot with spacebar",25,100);
  text("Move with a and d",25,120);
  text("Shoot all the incorrect equations",25,140);
  text("Leave all the correct ones",25,160);
  text("You have four lives",25,180);
  text("Good luck and get a high score!",25,200);

}
