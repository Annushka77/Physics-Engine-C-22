const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options ={
        restitution: 0.8
    }
    var box_options ={
        restitution: 0.8
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
ball= Bodies.circle(150,100,25,ball_options);
box = Bodies.rectangle(250,300,40,75,box_options);
World.add(world,ball);
    World.add(world,box);
    console.log(box);
}


function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y, 25,25);
    rect(box.position.x,box.position.y,40,75);
}