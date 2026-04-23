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
    this.egg = 0;
    this.life = 3;
    this.counter = 0;
    this.gameOver = false;
    this.obstacles = [];
   // this.goldEgg = [];
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60;
    this.jumpSong = new Audio('./sounds/rabbitJumpSong.mp3');
    this.jumpSong.volume = 0.2;
    this.gameOverSound = new Audio('./sounds/gameOverSound.mp3');
    this.pingEgg = new Audio('./sounds/ping.mp3');
    this.pingEgg.volume = 0.2
    this.goldSound = new Audio('./sounds/goldSound.mp3')
    //this.generateLivesImg = document.querySelector("#level")
};

startGame () {
   //console.log("gameStarted")
   this.startScreen.style.display = "none";
   this.gameScreen.style.display = "flex";

   this.gameScreen.style.width = this.width + "px";
   this.gameScreen.style.height = this.height + "px";
  //  this.livesElement.innerText = this.life

   this.player = new Player(this.gameScreen, 240, 300, 120, 120)


   this.gameIntervalId = setInterval(() => {
    //console.log("gameIntervalId")
    this.gameLoop()
   }, 
   this.gameLoopFrequency)

  // this.startGame.obstaclesInterval = setInterval(() => {
  //generateObstacles()
//}, 6000)

//this.generateLivesImg()

};

//generateLivesImg() {
  // for (let i = 0; i < 3; i++) {
  //    const livesImg = document.createElement("img")
   //   if (i < this.life) {
    //     livesImg.src('../Images/oeufSsFond.jpg')
   //   }else {
   //      livesImg.src('../Images/oeufSsFond 2.png')
   //   }
   //   livesImg.classList.add("eggLives");
    //  this.livesElement.appendchild(livesImg);
 //  }
//}

gameLoop() {
    this.update()
    this.counter++
    if(this.gameIsOver){
         clearInterval(this.gameIntervalId)
         this.gameScreen.style.display = "none"
         this.endScreen.style.display = "block"
}
};

generateEgg() {
    let egg = document.createElement("img")

    egg.style.position = "absolute"
    let top = 0
    let left = Math.floor(Math.random() * 450)

    egg.style.top = top + "px"
    egg.style.left = left + "px"


}

update() {   
    
this.player.move()
if(this.counter % 100 === 0) {
//this.obstacles.push(new Obstacles(this.gameScreen));
const newObstacle = new Obstacles(this.gameScreen);

if (this.egg >= 10 && Math.random() > 0.7) { 
    newObstacle.element.style.width = "70px";
    newObstacle.element.style.height = "70px";
    newObstacle.element.src = "./Images/goldEgg2.png";
    newObstacle.isGold = true;
   } else {
    newObstacle.isGold = false;
   }

   this.obstacles.push(newObstacle);

}

 for ( let i=0; i < this.obstacles.length; i++ ) {
    const obstacle = this.obstacles[i]
    obstacle.move()
   if (this.player.didCollide(obstacle)) {
      if (obstacle.isGold === true){
      this.goldSound.play()
      this.egg += 3;
      } else {
      this.egg +=1
    }
    this.eggcount.innerText = this.egg

        obstacle.element.remove()
        this.obstacles.splice(i, 1)
        this.pingEgg.play()
        i--

 }



   if (obstacle.top > 400) {
    obstacle.element.remove()
       this.obstacles.splice(i, 1)
       const fullEgg = document.querySelector(`#life${this.life}`)
       fullEgg.src = "./Images/oeufSsFond2.png"
       this.life--
      //  this.livesElement.innerText = this.life
 }

   if(this.life === 0 ) {
       this.gameIsOver = true
       this.gameOverSound.play()
 }


};

}

playRabbitJumpSound () {
   this.jumpSong.play();
}

}


