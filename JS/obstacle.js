class Obstacles{
 constructor(gameScreen){
    this.gameScreen = gameScreen
    this.left = Math.floor(Math.random() * 500)
    this.top = 0
    this.width = 80
    this.height = 1
    this.element = document.createElement("img")

    this.element.src = "../Images/oeufSsFond.jpg"
    this.element.style.position = "asolute"
    this.element.style.left = this.left + "px"
    this.element.style.top = this.top + "px"
    this.element.style.width = this.width + "px"
    this.gameScreen.appendChild(this.element)
 }

 move() {
this.top +=3
this.updatePosition()
}

updatePosition() {
    this.element.style.top = top + px
}
}