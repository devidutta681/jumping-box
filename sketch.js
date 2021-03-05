var canvas;
var music;
var box
var block1,block2,block3,block4;
var gamestate = "play"

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    createCanvas(500,600);
    block1 = createSprite(400,450,90,20)
    block1.shapeColor = "red"

    block2 = createSprite(100,450,90,20)
    block2.shapeColor = "green"

    block3 = createSprite(200,450,90,20)
    block3.shapeColor = "orange"

    block4 = createSprite(300,450,90,20)
    block4.shapeColor = "blue"
    //create box sprite and give velocity
    box = createSprite(Math.round(random(20,270)),250,20,20)
    box.shapeColor = "purple"
    box.velocityX  = 10
    box.velocityY = 9
}

function draw() {
    background("white")
    if(gamestate === "play"){
        if(box.x > 498 || box.x < 1){
            box.velocityX =   box.velocityX * -1
        }
        if(box.y > 498 || box.y < 1){
            box.velocityY = box.velocityY * -1
        }
            if(block1.isTouching(box)){
                music.play();
                box.bounceOff(block1)
                box.shapeColor = "red"
            }
            if(block2.isTouching(box)){
                music.play();
                box.bounceOff(block2)
                box.shapeColor =  "green" 
            }
            if(block3.isTouching(box)){
                box.shapeColor  = "orange"
                music.stop();
                box.velocityX = 0;
                box.velocityY = 0;
                gamestate = "end"
            }
            if(block4.isTouching(box)){
                music.play();
                box.bounceOff(block4)
                box.shapeColor = "blue"
            }
    }
    if(gamestate === "end"){
        music.stop();
        stroke("black")
        textSize(25)
        text("press R to restart",150,250)
        if(keyWentDown("r")){
            box.velocityX  = 10
            box.velocityY = 9
            box.y = 250
            gamestate = "play"
        }
    }
    //create edgeSprite
    //add condition to check if box touching surface and make it box
    drawSprites();
}
