class Game {
   
    constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
    this.scoreboard = document.getElementById("game-screen");
    this.eggcount = document.querySelector("#egg-count");
    this.livesElement = document.querySelector("#level");
    this.height = 400;
    this.width = 800;
    this.player = null;
    this.egg = [];
    this.life = 3;
    this.counter = 0;
    this.gameOver = false;
    this.obstacles = [];
    this.baskets = [];
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60;

} ;

startGame () {
   //console.log("gameStarted")
   this.startScreen.style.display = "none";
   this.gameScreen.style.display = "flex";

   this.gameScreen.style.width = this.width + "px";
   this.gameScreen.style.height = this.height + "px";
   
   this.player = new Player(this.gameScreen, 240, 300, 120, 120)


   this.gameIntervalId = setInterval(() => {
    //console.log("gameIntervalId")
    this.gameLoop()
   }, 
   this.gameLoopFrequency)

  // this.startGame.obstaclesInterval = setInterval(() => {
  //generateObstacles()
//}, 6000)

};

gameLoop() {
    this.update()
    this.counter++
    if(this.gameIsOver){
         clearInterval(this.gameIntervalId)
         this.gameScreen.style.display = "none"
         this.endScreen.style.display = "block"
}
};

update() {   
    
this.player.move()
if(this.counter % 100 === 0) {
this.obstacles.push(new Obstacles(this.gameScreen))
}
//this.obstacles.push(new Obstacles(this.gameScreen))

 for ( let i=0; i < this.obstacles.length; i++ ) {
    const obstacle = this.obstacles[i]
    obstacle.move()
   if (this.player.didCollide(obstacle)) {
        obstacle.element.remove()
        this.obstacles.splice(i, 1)
        this.egg++
  
      this.eggcount.innerText = this.egg
 }

 if(obstacle.top > 400) {
    obstacle.element.remove()
    this.obstacles.splice(i, 1)
 this.life--
 this.livesElement.innerText = this.life
 }

 if(this.life === 0 ) {
    this.gameIsOver = true
 }

};

}
}


