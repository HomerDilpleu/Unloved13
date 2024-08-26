game.sprites.player.init = function() {
    // Usual properties
    this.x = mge.game.width / 2
    this.y = mge.game.height / 2
    this.width = game.variables.numberWidth
    this.height = game.variables.numberHeight
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
    this.HitBoxSize = 10
    this.hitBoxRight = {}
    this.hitBoxLeft = {}
    this.hitBoxUp = {}
    this.hitBoxDown = {}
    // Movement settings
    this.moveForce = 10000
    this.moveForceWhenNoTouching = 8000
    this.jumpForce = 70000
    this.maxVelocity = 3000
    this.frictionRate = 0.3 
    // Sprite movement values
    this.accelerationX=0
    this.accelerationY=0
    this.velocityX=0
    this.velocityY=0
    // Eye
    this._eye = game.sprites.eye.cloneCreate()
    mge.animation.activateOwnCloneAnimation(this._eye)
    // Legs
    this._legs = game.sprites.legs.cloneCreate()
    mge.animation.activateOwnCloneAnimation(this._legs)
    
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
    this.accelerationY+=game.variables.gravity

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
    this.hitBoxRight = {xMin:this.X + this.width/2,
                        xMax:this.X + this.width/2 + this.HitBoxSize,
                        yMin:this.Y - this.height/2 + this.HitBoxSize,
                        yMax:this.Y + this.height/2 - this.HitBoxSize}
    this.hitBoxLeft =  {xMin:this.X - this.width/2 - this.HitBoxSize,
                        xMax:this.X - this.width/2,
                        yMin:this.Y - this.height/2 + this.HitBoxSize,
                        yMax:this.Y + this.height/2 - this.HitBoxSize}
    this.hitBoxUp =    {xMin:this.X - this.width/2 + this.HitBoxSize,
                        xMax:this.X + this.width/2 - this.HitBoxSize,
                        yMin:this.Y - this.height/2,
                        yMax:this.Y - this.height/2 + this.HitBoxSize}
    this.hitBoxDown =  {xMin:this.X - this.width/2 + this.HitBoxSize,
                        xMax:this.X + this.width/2 - this.HitBoxSize,
                        yMin:this.Y + this.height/2 - this.HitBoxSize,
                        yMax:this.Y + this.height/2}

    // Manage collisions with platforms
    this.collidesRight = false
    this.collidesLeft = false
    this.collidesUp = false
    this.collidesDown = false
    game.sprites.platform.cloneExecuteForEach('managePlatformCollisions')
    
    // If player is collinding a platform
    if (this.collidesRight & !(this.ControllerLeft)) {
        this.X = lastX
        this.velocityX = 0
    }
    if (this.collidesLeft & !(this.ControllerRight)) {
        this.X = lastX
        this.velocityX = 0
    }

    if (this.collidesDown) {        
        this.Y = lastY
        this.velocityY = 0}

    if (this.collidesUp) {        
        this.Y = lastY+5
        this.velocityY = 0}


    // Camera scroll
    this.x = this.X - game.variables.camX + mge.game.width / 2
    this.y = this.Y - game.variables.camY + mge.game.height / 2

    // Update Victory conditions
    if (game.variables.victoryNumId == 'Player') {
        game.variables.victoryNumBox={xMin:this.x-this.width/2-10,xMax:this.x+this.width/2+10,yMin:this.y-this.height/2-10,yMax:this.y+this.height/2+10}
    }
    if (game.variables.victoryPtlfId == 'Player') {
        game.variables.victoryPtlfBox={xMin:this.x-this.width/2,xMax:this.x+this.width/2,yMin:this.y-this.height/2,yMax:this.y+this.height/2}
    }
}

game.sprites.player.drawFunction = function (ctx) {

    // Body
    game.images.playerBody.draw(ctx)

    // Eye
    if (this.velocityX <=0 ) {
        this._eye._curAnimation = 'normal'
        this._eye.x = this.x-5
        this._eye.y = this.y-25
        this._eye.scaleX = 1
    } else {
        this._eye._curAnimation = 'normal'
        this._eye.x = this.x
        this._eye.y = this.y-25
        this._eye.scaleX = -1
    }

    // Legs
    if (!(this.ControllerRight || this.ControllerLeft)) {
        this._legs._curAnimation = 'idle'
        this._legs.x = this.x
        this._legs.y = this.y+29
        this._legs.scaleX = 1
    }
    if (this.ControllerLeft) {
        this._legs._curAnimation = 'walk'
        this._legs.x = this.x
        this._legs.y = this.y+29
        this._legs.scaleX = -1
    }
    if (this.ControllerRight) {
        this._legs._curAnimation = 'walk'
        this._legs.x = this.x
        this._legs.y = this.y+29
        this._legs.scaleX = 1
    }

}

