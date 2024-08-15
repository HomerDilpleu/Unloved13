game.sprites.player.init = function() {
    // Usual properties
    this.x = mge.game.width / 2
    this.y = mge.game.height / 2
    this.width = 100
    this.height = 50
    // Absolute coordonates
    this.X = 200
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
    this.HitBoxSize = 1
    this.hitBoxRight = {}
    this.hitBoxLeft = {}
    this.hitBoxUp = {}
    this.hitBoxDown = {}
    // Movement settings
    this.moveForce = 500
    this.gravity = 50
    this.maxVelocity = 5000
    this.frictionRate = 0.2 
    // Sprite movement values
    this.accelerationX=0
    this.accelerationY=0
    this.velocityX=0
    this.velocityY=0
    
}

game.sprites.player.update = function () {

    // Calculate time since last frame
    let deltaTime = 1/mge.game.fps

    // Keep track of last position
    let lastX = this.X
    let lastY = this.Y

    // Get Controlers
    if(mge.keyboard.isKeyPressed('ArrowRight') && !mge.keyboard.isKeyPressed('ArrowLeft')) {this.ControllerRight = true} else {this.ControllerRight = false}
    if(mge.keyboard.isKeyPressed('ArrowLeft') && !mge.keyboard.isKeyPressed('ArrowRight')) {this.ControllerLeft = true} else {this.ControllerLeft = false}
    if(mge.keyboard.isKeyPressed('ArrowUp') && !mge.keyboard.isKeyPressed('ArrowDown')) {this.ControllerUp = true} else {this.ControllerUp = false}
    if(mge.keyboard.isKeyPressed('ArrowDown') && !mge.keyboard.isKeyPressed('ArrowUp')) {this.ControllerDown = true} else {this.ControllerDown = false}

    // Update player acceleration
    this.accelerationX=0
    if (this.ControllerLeft) {this.accelerationX=-this.moveForce}
    if (this.ControllerRight) {this.accelerationX=this.moveForce}
    
    this.accelerationY=this.gravity

    // Update player velocity
    this.velocityX+=this.accelerationX
    this.velocityX=this.velocityX*(1-this.frictionRate)
    if (this.velocityX > 0 && this.velocityX>this.maxVelocity) {this.velocityX=this.maxVelocity}
    if (this.velocityX < 0 && this.velocityX<-this.maxVelocity) {this.velocityX=-this.maxVelocity}

    this.velocityY+=this.accelerationY
    

    // Update player position
    this.X+=Math.round(this.velocityX*deltaTime)
    this.Y+=Math.round(this.velocityY*deltaTime)


/*
    // Update player position
    if (this.ControllerLeft) {this.X+=-10}
    if (this.ControllerRight) {this.X+=10}
    if (this.ControllerUp) {this.Y+=-10}
    if (this.ControllerDown) {this.Y+=10}
*/
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
    
    // Manage collisions
    if (this.collidesRight || this.collidesLeft) {
        this.X = lastX
        this.velocityX = 0
    }
    if (this.collidesUp) {this.Y += 1}
    if (this.collidesDown) {        
        this.Y = lastY
        this.velocityY = 0}
 
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

