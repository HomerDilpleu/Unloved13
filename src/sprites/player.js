game.sprites.player.init = function() {
    // Usual properties
    this.x = mge.game.width / 2
    this.y = mge.game.height / 2
    this.width = 60
    this.height = 70
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
    this.HitBoxSize = 5
    this.hitBoxRight = {}
    this.hitBoxLeft = {}
    this.hitBoxUp = {}
    this.hitBoxDown = {}
    // Movement settings
    this.moveForce = 15000
    this.moveForceWhenNoTouching = 5000
    this.jumpForce = 80000
    this.maxVelocity = 5000
    this.frictionRate = 0.3 
    // Sprite movement values
    this.accelerationX=0
    this.accelerationY=0
    this.velocityX=0
    this.velocityY=0
    
}

game.sprites.player.update = function () {

    // Calculate time since last frame
    let deltaTime = Math.min(1/mge.game.fps,0.04)

    // Keep track of last position
    let lastX = this.X
    let lastY = this.Y

    // Get Controlers
    if(mge.keyboard.isKeyPressed('ArrowRight') && !mge.keyboard.isKeyPressed('ArrowLeft')) {this.ControllerRight = true} else {this.ControllerRight = false}
    if(mge.keyboard.isKeyPressed('ArrowLeft') && !mge.keyboard.isKeyPressed('ArrowRight')) {this.ControllerLeft = true} else {this.ControllerLeft = false}
    if(mge.keyboard.isKeyPressed('ArrowUp') && !mge.keyboard.isKeyPressed('ArrowDown')) {this.ControllerUp = true} else {this.ControllerUp = false}
    if(mge.keyboard.isKeyPressed('ArrowDown') && !mge.keyboard.isKeyPressed('ArrowUp')) {this.ControllerDown = true} else {this.ControllerDown = false}

    // Update player X acceleration
    this.accelerationX=0
    if (this.ControllerLeft && this.collidesDown) {this.accelerationX=-this.moveForce}
    if (this.ControllerRight && this.collidesDown) {this.accelerationX=this.moveForce}
    if (this.ControllerLeft && !this.collidesDown) {this.accelerationX=-this.moveForceWhenNoTouching}
    if (this.ControllerRight && !this.collidesDown) {this.accelerationX=this.moveForceWhenNoTouching}
    
    // Update player Y acceleration
    this.accelerationY=0
    if (this.ControllerUp && this.collidesDown) {this.accelerationY=-this.jumpForce}
    this.accelerationY+=game.const.gravity

    // Update player X velocity
    this.velocityX+=this.accelerationX*deltaTime
    this.velocityX=this.velocityX*(1-this.frictionRate)
    if (this.velocityX > 0 && this.velocityX>this.maxVelocity) {this.velocityX=this.maxVelocity}
    if (this.velocityX < 0 && this.velocityX<-this.maxVelocity) {this.velocityX=-this.maxVelocity}
    // Update player Y velocity
    this.velocityY+=this.accelerationY*deltaTime
    
    // Update player position
    this.X+=Math.round(this.velocityX*deltaTime)
    this.Y+=Math.round(this.velocityY*deltaTime)

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

    // Manage collisions with platforms
    this.collidesRight = false
    this.collidesLeft = false
    this.collidesUp = false
    this.collidesDown = false
    game.sprites.platform.cloneExecuteForEach('managePlatformCollisions')
    
    // If player is collinding a platform
    if (this.collidesRight || this.collidesLeft) {
        this.X = lastX
        this.velocityX = 0
    }
    if (this.collidesDown || this.collidesUp) {        
        this.Y = lastY
        this.velocityY = 0}

    // Camera scroll
    this.x = this.X - game.variables.camX + mge.game.width / 2
    this.y = this.Y - game.variables.camY + mge.game.height / 2
 
}

game.sprites.player.drawFunction = function (ctx) {
    /*ctx.fillStyle='green'
    ctx.fillRect(0,0,this.width,this.height)*/
    game.images.playerBody.draw(ctx)
    if (this.velocityX >0 ) {
        game.images.playerRightEye.draw(ctx)
    } else {
        game.images.playerLeftEye.draw(ctx)
    }
    game.images.playerLegsIdle.draw(ctx)
/*
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
*/
}

