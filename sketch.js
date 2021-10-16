var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,50)
}

function draw() 
{
  background(255,255,0);
  if(keyDown(RIGHT_ARROW))
  {
   box.x += 1 
  }
  if(keyDown(LEFT_ARROW))
  {
   box.x -= 1 
  }
  if(keyIsDown(UP_ARROW))
  {
   box.y -= 1 
  }
  if(keyIsDown(DOWN_ARROW))
  {
   box.y += 1 
  }
  drawSprites()
}




