//Create variables here
var dog,happydog;
var foodStock,database;
function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happydog = loadImage = ("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500)
  dog = createSprite(250,300);
  happydog = createSprite(250,300);
}

function draw() {  
  background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }

    dog.display();
    happydog.display();
    foodStack.display();

  drawSprites();
}

function writePosition(x,y){
  database.ref("/position").set({
      x:foodStack.x +x,
      y:foodStack.y +y
  })
  foodStack.x = foodStack.x + x;
  foodStack.y = foodStack.y + y;
}

function readop(data){
positions = data.val();
foodStack.x = positions.x;
foodStack.y = positions.y;
}


