const Engine = Matter,Engine;
const World = Matter,World;
const Bodies = Matter,Bodies;
var thunder,thunder1,thunder2,thunder3,thunder4;

var engine,world;
var drops = [];
var rand;

var maxDrops = 100;
var thunderCreateFrame = 0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
   createCanvas(500,500);
    umbrella = new Umbrella(200,500);

    engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 === 0){


        for(var i=0; i<maxDrops; i++){
            drops.puch(new createDrop(random(0,400), random(0,400)));
        }
    }
}


