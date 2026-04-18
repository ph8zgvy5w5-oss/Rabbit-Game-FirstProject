class Player {
constructor(gameScreen, left, top, width, height){

    this.gameScreen = gameScreen
    this.left = left
    this.top = top
    this.width = width
    this.height = height
    this.directionX = 0
    this.directionY = 0
    this.element = document.createElement("img")

    this.element.src = "../Images/player3.1.png"
    this.element.style.position = "absolute"
    this.element.style.left = left + "px"
    this.element.style.top = top + "px"
    this.element.style.width = width + "px"
    this.element.style.height = height + "px"
    this.gameScreen.appendChild(this.element)
}

move(){
    this.left += this.directionX
    this.top += this.directionY
    this.updatePosition()
}

updatePosition(){
    this.element.style.left = this.left + "px"
    this.element.style.top = this.top + "px"
}
didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
     
}
  


// directionX - initially set to 0. It is used to specify the horizontal movement direction and can have the following values:

//0: not moving horizontally
//1: moving horizontally to the right
//-1: moving horizontally to the left
//directionY - initially set to 0. It is used to specify the vertical movement direction and can have the following values:

//0: not moving vertically
//1: moving vertically down
//-1: moving vertically up

