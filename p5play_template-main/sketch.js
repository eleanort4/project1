
var Box;



function setup() {
  createCanvas(400,400);

  Box = createSprite (200,200,50,50)
}






function draw() 
{
  background(30);
  
  background("yellow");



  if(keyDown("right")){
    Box.x = Box.x + 2;
    background("red");
  }
  drawSprites ();

}




