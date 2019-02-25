var hardmode;

function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(500,500);
  hardmode = new Button(10,10,100,50);
  hardmode.setText("Hard Mode")
  hardmode.setTextOver("Go")
  hardmode.showButton()

}

function draw()
{
  //create a background using RGB values
  background(255,255,255)
  fill(255,0,0);
  hardmode.showButton()

  if (hardmode.getButtonState() == 1)
  {
    window.open("hard/index.html","_self")
  }

}
