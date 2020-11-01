var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green"
  movingRect = createSprite(300,200,70,40);
  movingRect.shapeColor="black"
}

function draw() {
  background("white");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;


  if(movingRect.x - fixedRect.x <fixedRect.width/2 + movingRect.width/2  &&
     fixedRect.x-movingRect.x <fixedRect.width/2 + movingRect.widht/2 &&
     movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
     fixedRect.y - movingRect.y <fixedRect.height/2 + movingRect.height/2)
     {
       console.log("Hello")
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}