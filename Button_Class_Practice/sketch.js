var menu

function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(500,500);
  buttonX = 10
  buttonY = 10
  button2X = 100
  button2Y = 50
  menu = new Button(10,10,100,50)
}

function draw()
{
  //create a background using RGB values
  background(255,255,255)
  fill(255,0,0);
  menu.setText("Menu")
  menu.setTextOver("Go")
  menu.showButton()
  if (menu.getButtonState() == 1)
  {
    window.open("Menu/index.html","_self")
  }

}
