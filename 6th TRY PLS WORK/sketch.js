const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player;
var playerimg;
var enemy;
var enemyimg;
var shot;

function preload(){
    playerimg=loadImage("Rocketsprite.png");
    enemyimg=loadImage("302-3021780_spaceship-sprite-bmp-hd-png-download.png");


}




function setup(){
    var canvas = createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;

    player = createSprite(250,700,40,40);
    player.addImage(playerimg);
    player.scale = 0.2;

    enemy = createSprite(250,100,40,40);
    enemy.addImage(enemyimg);
    enemy.scale = 0.2;
    
    
    shot = createSprite(250,700,5,10);


}

function draw(){
    background("white");
    if(KeyWentDown(UP_ARROW)){
    shot.velocityY = 5;
    }
    drawSprites();
    Engine.update(engine);




}










