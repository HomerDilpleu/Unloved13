game.sprites.numbers.init = function (_numfConfig) {
    // Create a clone of himself
    let _clone = game.sprites.numbers.cloneCreate()
    // Standard properties
    _clone.width = game.variables.numberWidth
    _clone.height = game.variables.numberHeight
    _clone.drawBoundaries = true
    // Physics
    _clone.X = _numfConfig.X
    _clone.Y = _numfConfig.Y
    //_clone._accelerationY=0
    //_clone._velocityY=0
    //_clone._isColliding=false
    // Other
    _clone._id = _numfConfig._id || ''
    // Eye
    _clone._eye = game.sprites.eye.cloneCreate()
    mge.animation.activateOwnCloneAnimation(_clone._eye)
    // Legs
    _clone._legs = game.sprites.legs.cloneCreate()
    mge.animation.activateOwnCloneAnimation(_clone._legs)
    // Return clone    
    return _clone
}


game.sprites.numbers.update = function () {
/*
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
                        Ymin:this.Y - this.height/2,
                        Ymax:this.Y - this.height/2 + this.HitBoxSize}
    this.hitBoxDown =  {Xmin:this.X - this.width/2 + this.HitBoxSize,
                        Xmax:this.X + this.width/2 - this.HitBoxSize,
                        Ymin:this.Y + this.height/2 - this.HitBoxSize,
                        Ymax:this.Y + this.height/2}

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
*/ 

    // Camera scroll
    this.x = this.X - game.variables.camX + mge.game.width / 2
    this.y = this.Y - game.variables.camY + mge.game.height / 2

}

game.sprites.numbers.drawFunction = function (ctx) {

    // Body
    ctx.font = '50px serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = 'yellow'
    ctx.fillText(this._id, this._width/2, this._height/2+5)
    
    // Eye
    this._eye._curAnimation = 'normal'
    this._eye.x = this.x-5
    this._eye.y = this.y-25
    this._eye.scaleX = 1
    
    /*if (this.velocityX <=0 ) {
        _eye._curAnimation = 'normal'
        _eye.x = this.x-5
        _eye.y = this.y-25
        _eye.scaleX = 1
    } else {
        _eye._curAnimation = 'normal'
        _eye.x = this.x
        _eye.y = this.y-25
        _eye.scaleX = -1
    }*/

    // Legs
    this._legs._curAnimation = 'idle'
    this._legs.x = this.x
    this._legs.y = this.y+29
    this._legs.scaleX = 1

    /*
    if (Math.abs(this.velocityX) < 1) {
        _legs._curAnimation = 'idle'
        _legs.x = this.x
        _legs.y = this.y+29
        _legs.scaleX = 1
    }
    if (this.velocityX <= -1) {
        _legs._curAnimation = 'walk'
        _legs.x = this.x
        _legs.y = this.y+29
        _legs.scaleX = -1
    }
    if (this.velocityX >= 1) {
        _legs._curAnimation = 'walk'
        _legs.x = this.x
        _legs.y = this.y+29
        _legs.scaleX = 1
    }
    if (Math.abs(this.velocityY > 0)) {
        _legs._curAnimation = 'idle'
        _legs.x = this.x
        _legs.y = this.y+29
        _legs.scaleX = 1
    }*/

}

