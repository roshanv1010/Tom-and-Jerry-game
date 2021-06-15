var bg,bgImg
var tom,jerry,Img1,Img2,Img3,Img4,Img5,Img6;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    Img1 = loadImage("images/cat1.png");
    Img2 = loadImage("images/mouse1.png");
    Img3 = loadAnimation("images/mouse2.png","images/mouse3.png");
    Img4 = loadAnimation("images/cat2.png","images/cat3.png");
    Img5 = loadImage("images/mouse4.png");
    Img6 = loadImage("images/cat4.png");
    Img7 = loadImage("images/mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800,600);
    tom.addImage(Img1);
    tom.scale = 0.3;

    jerry = createSprite(220,600);
    jerry.addImage(Img2);
    jerry.scale = 0.2;

    bg = createSprite(500,400);
    bg.addImage(bgImg);
    bg.scale = 1.1;

    tom.depth = bg.depth;
    tom.depth = tom.depth + 1;

    jerry.depth = bg.depth;
    jerry.depth = jerry.depth + 1;
}

function draw() {

    background(255);
    //Write condition here to evaluate if tom and jerry collide
    if(tom.x - jerry.x<(tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addImage("tomImg",Img6);
        tom.x = 300;
        tom.scale = 0.3;
        tom.changeImage("tomImg");
        jerry.addImage("jerryImg",Img7);
        jerry.scale = 0.2;
        jerry.changeAnimation("jerryImg");

        tom.depth = bg.depth;
        tom.depth = bg.depth+1;
        jerry.depth = bg.depth;
        jerry.depth = jerry.depth + 1;
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left_arrow")){
    tom.velocityX = - 5;
    tom.scale = 0.3;
    tom.addAnimation("tomRunning",Img4);
    tom.changeAnimation("tomRunning");

    jerry.addAnimation("jerryRunning",Img3);
    jerry.changeAnimation("jerryRunning");
  }

}