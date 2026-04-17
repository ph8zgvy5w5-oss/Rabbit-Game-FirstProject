class Game {
   
    constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
    this.scoreboard = document.getElementById("game-screen");
    this.eggcount = document.querySelector("#egg-count");
    this.level = document.querySelector("#level");
    this.height = 600;
    this.width = 1500;
    this.player = null;
    this.egg = 0;
    this.level = 3;
    this.gameOver = false;
    this.obstacles = [];
    this.baskets = [];
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60;

} 

startGame () {
   console.log("gameStarted")
   this.startScreen.style.display = "none";
   this.gameScreen.style.display = "flex";

   this.gameScreen.style.width = this.width + "px";
   this.gameScreen.style.height = this.height + "px";
   
   this.player = new Player(this.gameScreen, 240, 600, 60, 300)


   this.gameIntervalId = setInterval(() => {
    //console.log("gameIntervalId")
    this.gameLoop()
   }, 
   this.gameLoopFrequency)

};

gameLoop() {
    this.update()
    if(this.gameIsOver){
         clearInterval(this.gameIntervalId)
}
}

update() {
this.player.move()

if (Math.random() > 0.98 && this.obstacles.length < 1)
this.obstacles.push(new Obstacles(this.gameScreen))
}

};
