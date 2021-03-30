var peopleWithMask, peopleWithMaskimg2, peopleWithoutMask, player, ground, peopleWithMaskGroup, peopleWithoutMaskGroup, peopleWithoutMaskimg1, peopleWithMaskimg1;
var score = 0;
var playerimg, backgroungimg
var peopleWithoutMaskimg2, peopleWithoutMaskimg3, peopleWithoutMaskimg4, peopleWithoutMaskimg5, peopleWithoutMaskimg6, peopleWithoutMaskimg7
var Cvirus
function preload(){
 peopleWithoutMaskimg1 = loadImage("image/bwithoutmask.jpg")
 peopleWithoutMaskimg2 = loadImage("image/gwithoutmask.jpg")
 peopleWithoutMaskimg3 = loadImage("image/without2.jpg")
 peopleWithoutMaskimg4 = loadImage("image/imageedit_24_4288903951.jpg")
 peopleWithoutMaskimg5 = loadImage("image/imageedit_25_2594517995.jpg")
 peopleWithoutMaskimg6 = loadImage("image/imageedit_26_8288151091.jpg")
 peopleWithoutMaskimg7 = loadImage("image/imageedit_27_7563752427.jpg")
 peopleWithMaskimg1 = loadImage("image/bwithmask.jpg")
 peopleWithMaskimg2 = loadImage("image/gwithmask.jpg")
 playerimg = loadAnimation("image/boy1.jpg", "image/boy2.jpg", "image/boy3.jpg", "image/boy4.jpg")
}

function setup(){
    createCanvas(1200, 600);
 
    player = createSprite(400, 400, 30, 30)
    player.addAnimation("Boy", playerimg)
    player.scale = 0.3
    ground = createSprite(400, 500, 1600, 10)
    peopleWithMaskGroup = new Group();
    peopleWithoutMaskGroup = new Group();



    //peopleWithoutMask.shapeColor("red")
    //ground.shapeColor = ("black")
}
function draw(){
    background("white")
    score = score+Math.round(frameCount/60);
    textSize(40)
    stroke(random(0, 225), random(0, 225), random(0, 225));
    text("SCORE :"+ score, 900, 100);
if(keyDown("space")||keyDown("UP_ARROW")&&player.y>=150){
    player.velocityY = -7;
}
if(keyDown("RIGHT_ARROW")){
 player.velocityX = +7;
 player.velocityY = 0;   
}
player.velocityY += 0.6;
player.collide(ground);
spawnPeopleWithMask();
spawnPeopleWithoutMask();
cVirus()
    drawSprites();
}
function spawnPeopleWithMask(){
    if(frameCount % 100 === 0){
    peopleWithMask = createSprite(1100, 450, 30, 30);
    //peopleWithMask.shapeColor("green");
    peopleWithMask.velocityX = -9
    peopleWithMask.lifetime = 150;
    peopleWithMaskGroup.add(peopleWithMask);
    }
}
function spawnPeopleWithoutMask(){
    if(frameCount % 60 === 0){
        peopleWithoutMask = createSprite(1100, 450, 30, 30);
        peopleWithoutMask.velocityX = -9
        var rand = Math.round(random (1, 7))
        switch(rand){
             case 1:peopleWithoutMask.addImage(peopleWithoutMaskimg1);
             break;
             case 2:peopleWithoutMask.addImage(peopleWithoutMaskimg2);
             break;
             case 3:peopleWithoutMask.addImage(peopleWithoutMaskimg3);
             break;
             case 4:peopleWithoutMask.addImage(peopleWithoutMaskimg4);
             break;
             case 5:peopleWithoutMask.addImage(peopleWithoutMaskimg5);
             break;
             case 6:peopleWithoutMask.addImage(peopleWithoutMaskimg6);
             break;
             case 7:peopleWithoutMask.addImage(peopleWithoutMaskimg7);
             break;
        }
        peopleWithoutMask.rotation = 10
        peopleWithoutMask.lifetime = 150;
        peopleWithoutMaskGroup.add(peopleWithoutMask);
    }
}
function cVirus(){
    function spawnCvirus(){
        if(frameCount % 120 === 0){
        Cvirus = createSprite(1100, 610, 30, 30);
        //peopleWithMask.shapeColor("green");
        Cvirus.velocityY = 9;
        if(Cvirus.isTouching(ground)){
            Cvirus.destroy();
        }
        
        Cvirus.lifetime = 150;
        Cvirus.add(peopleWithMask);
        }
    }
}