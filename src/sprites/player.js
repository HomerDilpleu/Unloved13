game.sprites.player.init = function() {
    // Usual properties
    this.x = mge.game.width / 2
    this.y = mge.game.height / 2
    this.width = 100
    this.height = 50
    // Absolute coordonates
    this.X = 0
    this.Y = 0
    // Controllers
    this.ControllerLeft = false
    this.ControllerRight = false
    this.ControllerUp = false
    this.ControllerDown = false
    // Colliders flags
    this.collidesRight = false
    this.collidesLeft = false
    this.collidesUp = false
    this.collidesDown = false
    // HitBoxes
    this.HitBoxSize = 10
    this.hitBoxRight = {}
    this.hitBoxLeft = {}
    this.hitBoxUp = {}
    this.hitBoxDown = {}
    
}

game.sprites.player.update = function () {

    // Controlers
    if(mge.keyboard.isKeyPressed('ArrowRight') && !mge.keyboard.isKeyPressed('ArrowLeft')) {this.ControllerRight = true} else {this.ControllerRight = false}
    if(mge.keyboard.isKeyPressed('ArrowLeft') && !mge.keyboard.isKeyPressed('ArrowRight')) {this.ControllerLeft = true} else {this.ControllerLeft = false}
    if(mge.keyboard.isKeyPressed('ArrowUp') && !mge.keyboard.isKeyPressed('ArrowDown')) {this.ControllerUp = true} else {this.ControllerUp = false}
    if(mge.keyboard.isKeyPressed('ArrowDown') && !mge.keyboard.isKeyPressed('ArrowUp')) {this.ControllerDown = true} else {this.ControllerDown = false}

    // Update player position
    if (this.ControllerLeft) {this.X+=-1}
    if (this.ControllerRight) {this.X+=1}
    if (this.ControllerUp) {this.Y+=-1}
    if (this.ControllerDown) {this.Y+=1}

    // Update hitboxes positions
    this.hitBoxRight = {Xmin:this.X + this.width/2,
                        Xmax:this.X + this.width/2 + this.HitBoxSize,
                        Ymin:this.Y - this.height/2 + this.HitBoxSize,
                        Ymax:this.Y + this.height/2 - this.HitBoxSize}
    this.hitBoxLeft =  {Xmin:this.X - this.width/2 - this.HitBoxSize,
                        Xmax:this.X - this.width/2,
                        Ymin:this.Y - this.height/2 + this.HitBoxSize,
                        Ymax:this.Y + this.height/2 - this.HitBoxSize}
    this.hitBoxUp =    {Xmin:this.X - this.width/2 + this.HitBoxSize,
                        Xmax:this.X + this.width/2 - this.HitBoxSize,
                        Ymin:this.Y - this.height/2 - this.HitBoxSize,
                        Ymax:this.Y - this.height/2}
    this.hitBoxDown =  {Xmin:this.X - this.width/2 + this.HitBoxSize,
                        Xmax:this.X + this.width/2 - this.HitBoxSize,
                        Ymin:this.Y + this.height/2,
                        Ymax:this.Y + this.height/2 + this.HitBoxSize}

    // Check collisions
    this.collidesRight = false
    this.collidesLeft = false
    this.collidesUp = false
    this.collidesDown = false
    game.sprites.platform.cloneExecuteForEach('checkPlayerCollision')
    if (this.collidesRight) {this.X += -1}
    if (this.collidesLeft) {this.X += 1}
    if (this.collidesUp) {this.Y += 1}
    if (this.collidesDown) {this.Y += -1}
 
}

game.sprites.player.drawFunction = function (ctx) {
    ctx.fillStyle='green'
    ctx.fillRect(0,0,this.width,this.height)

    // Hitboxes debug
    ctx.strokeStyle = 'red'
    // Right
    ctx.strokeRect(this.width,this.HitBoxSize,this.HitBoxSize,this.height-2*this.HitBoxSize)
    // Left
    ctx.strokeRect(-this.HitBoxSize,this.HitBoxSize,this.HitBoxSize,this.height-2*this.HitBoxSize)
    // Up
    ctx.strokeRect(this.HitBoxSize,-this.HitBoxSize,this.width-2*this.HitBoxSize,this.HitBoxSize)
    // Down
    ctx.strokeRect(this.HitBoxSize,this.height,this.width-2*this.HitBoxSize,this.HitBoxSize)

}

