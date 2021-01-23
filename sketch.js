var canvas;
var music;
var  Boxy, Box1,Box2,Box3,Box4
var fake_edge1,fake_edge2
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   Box1=createSprite(100,590,200,10)
   Box1.shapeColor="yellow"
   Box2=createSprite(300,590,200,10)
   Box2.shapeColor="red"
   Box3=createSprite(500,590,200,10)
   Box3.shapeColor="green"
   Box4=createSprite(700,590,200,10)
   Box4.shapeColor="purple"
   Boxy=createSprite(random(20,750),580,20,20)
   Boxy.shapeColor="white"
   Boxy.velocityX=5
   fake_edge1=createSprite(0,600,30,1000)
   fake_edge1.visible = false;
   fake_edge2=createSprite(800,600,30,1000)
   fake_edge2.visible = false;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
    Boxy.bounceOff(fake_edge1)
    Boxy.bounceOff(fake_edge2)
    if (Boxy.isTouching(Box1)){
    Boxy.shapeColor="yellow"
    }
    if (Boxy.isTouching(Box2)){
        Boxy.shapeColor="red"
    }
    if (Boxy.isTouching(Box3)){
            Boxy.shapeColor="green"
    }
    if (Boxy.isTouching(Box4)){
        Boxy.shapeColor="purple"
    }

drawSprites ()

    //add condition to check if box touching surface and make it box
}
