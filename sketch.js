var canvas;
var music;
var surface1, surface2, surface3, surface4;
var le, re, be, te;

var box;

function preload(){
    music = loadSound("music.mp3");

    
    
}



function setup(){
    canvas = createCanvas(800,600);
    box= createSprite(500,100,50,50);
    surface1= createSprite(100,575,185,35);
    surface2= createSprite(302.5,575,185,35);
    surface3= createSprite(505,575,185,35);
    surface4= createSprite(705,575,185,35);
    le= createSprite(0.025,200,0.5,800);
    re= createSprite(800,200,10,800);
    be= createSprite(800,600,5000,10);
    ue= createSprite(80,1,5000,10);
    
    

    
    //create 4 different surfaces
    
   

    
    //create box sprite and give velocity
box.velocityX= -5;
box.velocityY= 8;
}

function draw() {
    background(rgb(169,169,169));
    be.shapeColor= rgb(169,169,169)
    re.shapeColor= rgb(169,169,169)
    ue.shapeColor= rgb(169,169,169)
    box.shapeColor= rgb(255,128,0);

    if(surface1.isTouching(box)){
        box.bounceOff(surface1)
        surface1.shapeColor= rgb(146,76,154);
    

       
        
        box.velocityY=-13;
        box.velocityX=-5;
    }
   
    if(surface2.isTouching(box)){
        box.bounceOff(surface2)
        music.play();
        box.velocityY=-15;
        box.velocityX=5;

        surface3.shapeColor= rgb(211,94,96);
    }

    if(surface3.isTouching(box)){
        box.bounceOff(surface3)
        box.velocityY=-10;
        box.velocityX=10;
    

        surface4.shapeColor= rgb(62,180,81)
    }

    if(surface4.isTouching(box)){
        box.bounceOff(surface4)
        music.stop(); 
        box.velocityY=12;
        box.velocityX=-8
        surface2.shapeColor= rgb(144,147,203)
    }
   
    
    //create edgeSprite


    box.bounceOff(le)
    box.bounceOff(be)
    box.bounceOff(re)
    box.bounceOff(ue)
    box.bounceOff(surface1)
    box.bounceOff(surface2)
    box.bounceOff(surface3)
    box.bounceOff(surface4)

    //add condition to check if box touching surface and make it box
    surface1.display()
    surface2.display()
    surface3.display()
    surface4.display()
    box.display()
    le.display()
    re.display()
    be.display()
    ue.display()
    
    
}
