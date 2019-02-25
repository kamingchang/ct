var objX
var objY
var button

function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(500,500);
  objX = 250
  objY = 250
  button = new Button(10,10,100,50);
  button.setText("Level 2")
  button.setTextOver("Go")
  button.showButton()
}

function draw()
{
  //create a background using RGB values
  background(0,0,0)
  fill(255,0,0);

  if (mouseX > objX)
  {
    objX++;
  }
  if (mouseX < objX)
  {
    objX = objX - 1;
  }
  if (mouseY > objY)
  {
    objY++;
  }
  if (mouseY < objY)
  {
    objY = objY - 1;
  }

  ellipse(objX,objY,20,20);

  button.showButton()

  if (button.getButtonState() == 1)
  {
    window.open("level2/index.html","_self")
  }


}
