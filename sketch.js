var playerCount,gameState=0;
var database;
var form,player,game;


function setup(){
    createCanvas(500,500);
    database=firebase.database();
    
    


}

function draw(){
    background("white");
   
    drawSprites();
}

