var lvl1;

function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(500,500);
  lvl1 = new Button(10,10,100,50);
  lvl1.setText("Level 1")
  lvl1.setTextOver("Go")
  lvl1.showButton()

}

function draw()
{
  //create a background using RGB values
  background(255,255,255)
  fill(255,0,0);
  lvl1.showButton()

  if (lvl1.getButtonState() == 1)
  {
    window.open("level1/index.html","_self")
  }

}
