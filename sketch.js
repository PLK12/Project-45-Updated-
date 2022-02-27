var backgroundImg;
var Hero, Hero1Img, Hero2Img;
var Ogre, OgreImg;
var OgreCount = 0;
var SwordSlash;
var Swordslashsprite;

var OgreGroup;
var SlashGroup

function preload()
{
  backgroundImg = loadImage("./Images/Forest Scary png.png ");
  Hero1Img = loadImage("./Images/Hero-1.png");
  Hero2Img = loadImage("./Images/Hero Without Bg.png");
  OgreImg = loadImage("./Images/Ogre wo bg.png");
  SwordSlash = loadImage("./Images/Sword Slash.png");
}



function setup() {
  createCanvas(windowWidth,windowHeight);

  Hero = createSprite(displayWidth -1200, displayHeight-300, 50,50);
  Hero.addImage(Hero2Img);

  OgreGroup = new Group();
  SlashGroup = new Group();

  
}

function draw() {
  background(backgroundImg);  

  
  if(frameCount% 200 === 0)
  {
    if(OgreCount <20)
  {
    OgreCount++;
    Ogre = createSprite(displayWidth -50,random(300,500),50,50);
    Ogre.addImage(OgreImg);
    Ogre.velocityX = -5;
    Ogre.scale = 0.5
    Ogre.debug= true;


   OgreGroup.add(Ogre);
  }

  if(SlashGroup.length !== 0 )
  {
    for(var i = 0; i< OgreGroup.length; i++)
    {
      if(OgreGroup[i].collide(SlashGroup))
      {
        OgreGroup[i].destroy();
        SlashGroup.destroyEach();
      }
    }
  }

  }




  
  heroControls();

  drawSprites();
  textSize(20)
  text(OgreCount, 500,50);
  
}

function heroControls()
{
  if(keyDown(UP_ARROW))
  {
    Hero.y -= 3;
  }

  if(keyDown(DOWN_ARROW))
  {
    Hero.y += 3;
  }

  if(keyDown(RIGHT_ARROW))
  {
    Hero.x += 3;
  }

  if(keyDown(LEFT_ARROW))
  {
    Hero.x -=3;
  }

  if(keyWentDown("SPACE"))
  {
    Swordslashsprite = createSprite(Hero.x, Hero.y);
    Swordslashsprite.addImage(SwordSlash);
    Swordslashsprite.velocityX = 5;
    Swordslashsprite.scale = 0.4;

    Swordslashsprite.debug = true;
    Swordslashsprite.setCollider("rectangle", 0,0,50,50);

    SlashGroup.add(Swordslashsprite);
  }

}