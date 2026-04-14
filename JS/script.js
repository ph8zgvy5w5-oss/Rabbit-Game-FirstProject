window.onload = function () {
const startButton = document.querySelector("#start-button")
const restartButton = document.querySelector("restart-button")
let game = null
let player = null

startButton.addEventListener("click", function() {
startGame();
});

function startGame () {
    const newGame = new Game()
   // player = new Player()

   //game.player = Player
    newGame.startGame()



}
};

//const div = document.createElement("div")
//div.style.backgroundColor = "red"
//div.style.width = "1000px"

