class Obstacles{
 constructor(gameScreen){
    this.gameScreen = gameScreen
    this.left = Math.floor(Math.random() * 500)
    this.top = 0
    this.width = 30
    this.height = 45
    this.element = document.createElement("img")

    this.element.src = "./Images/oeufSsFond.jpg"
    this.element.style.position = "absolute"
    this.element.style.left = this.left + "px"
    this.element.style.top = this.top + "px"
    this.element.style.width = this.width + "px"
    this.element.style.height = this.height + "px"
    this.gameScreen.appendChild(this.element)
    this.isGold = false
 }

 move() {
this.top += 4
this.updatePosition()
}

updatePosition() {
    this.element.style.top = this.top + "px";
    this.element.style.left = this.left + "px";

}

}
