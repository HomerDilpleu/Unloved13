game.sprites.player.init = function() {
    // Init sprite properties
    this.x = mge.game.width / 2
    this.y = mge.game.height / 2
    this.width = 100
    this.height = 50
    this.X = 0
    this.Y = 0
    this.left = false
    this.right = false
}

game.sprites.player.update = function () {

    // Controls
    if(mge.keyboard.isKeyPressed('ArrowRight') && !mge.keyboard.isKeyPressed('ArrowLeft')) {this.right = true} else {this.right = false}
    if(mge.keyboard.isKeyPressed('ArrowLeft') && !mge.keyboard.isKeyPressed('ArrowRight')) {this.left = true} else {this.left = false}

    // Update player position
    if (this.left) {this.X+=-10}
    if (this.right) {this.X+=10}
 
}

game.sprites.player.drawFunction = function (ctx) {
    ctx.fillStyle='green'
    ctx.fillRect(0,0,this.width,this.height)

}

