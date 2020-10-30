var fixedRect, movingRect
var rect1, rect2
function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(400,100,50,80);
  rect1.velocityY = 5
  rect2 = createSprite(400,800,80,30);
  rect2.velocityY = -5
  fixedRect = createSprite(600, 400, 50, 80); 
  fixedRect.shapeColor = "green"; fixedRect.debug = true; 
  movingRect = createSprite(400,200,80,30); 
  movingRect.shapeColor = "green"; 
  movingRect.debug = true;

}

function draw() {
  background(0); 
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2&&
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2&&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2&&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    console.log("hello")
    fixedRect.shapeColor = "Red"
    movingRect.shapeColor = "Red"
  }
  else{
    fixedRect.shapeColor = "blue"
    movingRect.shapeColor = "blue"
  }
 if(rect1.x-rect2.x<rect1.width/2+rect2.width/2&&
    rect2.x-rect1.x<rect1.width/2+rect2.width/2){
      rect1.velocityX = rect1.velocityX*-1
      rect2.velocityX = rect1.velocityX*-1
    }
 if(rect1.y-rect2.y<rect1.height/2+rect2.height/2&&
      rect2.y-rect1.y<rect1.height/2+rect2.height/2){
        rect1.velocityY = rect1.velocityY*-1
        rect2.velocityY = rect1.velocityY*-1
      }
  drawSprites();
}