class Game {
   
    constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
    this.scoreboard = document.getElementById("game-screen");
    this.eggcount = document.querySelector("#egg-count");
    this.level = document.querySelector("#level");
    this.height = 500;
    this.width = 500;
    this.player = null;
    this.egg = 0;
    this.level = 1;
    this.gameOver = false;
    this.obstacles = [];
    this.baskets = [];
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000/60;

} 

startGame () {
   console.log("gameStarted")
   this.startScreen.style.display = "none";
   this.gameScreen.style.display = "flex";

};

gameLoop() {}

update() {}

};
