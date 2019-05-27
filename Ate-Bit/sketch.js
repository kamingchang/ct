function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(500,500);
  buttonX = 10
  buttonY = 10
  button2X = 100
  button2Y = 50
  button3X = 10
  button3Y = 70
}

function draw()
{
  //create a background using RGB values
  background(0,0,0)
  fill(255,0,0);

  rect(buttonX,buttonY,button2X,button2Y);
  rect(button3X,button3Y,button2X,button2Y);

  fill(0,0,0);

  text("Start Game",25,40);
  text("Instructions",25,100);

  if(mouseX > buttonX && mouseX < buttonX + button2X && mouseY > buttonY && mouseY < buttonY + button2Y && mouseIsPressed)
  {
    window.open("game/index.html","_self");
  }

  if(mouseX > button3X && mouseX < button3X + button2X && mouseY > button3Y && mouseY < button3Y + button2Y && mouseIsPressed)
  {
    window.open("instructions.html","_self");
  }

}
