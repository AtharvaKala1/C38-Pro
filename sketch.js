var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
//var database;

var form, player, game;

var players, player1, player2, player3, player4;
var trackImage,player1Image,player2Image,player3Image,player4Image,groundImage;

function preload(){
  trackImage = loadImage("track.png");
  player1Image = loadImage("player1.png");
  player2Image = loadImage("player2.png");
  player3Image = loadImage("player3.png");
  player4Image = loadImage("player4.png");
  //groundImage = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  //database = firebase.database();
  game = new Game();
  //game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
