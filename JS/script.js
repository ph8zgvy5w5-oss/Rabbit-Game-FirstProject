window.onload = function () {
const startButton = document.querySelector("#start-button")
const restartButton = document.querySelector("#restart-button")
let game = null
let player = null

startButton.addEventListener("click", function() {
startGame();
})

restartButton.addEventListener("click", function() {
window.location.reload();
})

}

function startGame () {
    const newGame = new Game()
   // player = new Player()


   //document.onkeydown(() => {})is the same like the addEventListener

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        if (newGame.player.top >350){
        //console.log("down")
        newGame.player.directionY = 3
    }
    }

    if (e.key === "ArrowUp") {
        newGame.player.directionY = -3
    }

    if (e.key === "ArrowLeft") {
    newGame.player.directionX = -3
    }

    if (e.key === "ArrowRight") {
        newGame.player.directionX = 3
    }

   

})
   document.addEventListener("keyup", () => {
    newGame.player.directionX = 0
    newGame.player.directionY = 0
}) 

//game.player = Player
    newGame.startGame()

};

//const div = document.createElement("div")
//div.style.backgroundColor = "red"
//div.style.width = "1000px"

