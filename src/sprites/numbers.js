game.sprites.numbers.init = function (_numfConfig) {
    // Create a clone of himself
    let _clone = game.sprites.numbers.cloneCreate()
    // Standard properties
    _clone.width = game.variables.numberWidth
    _clone.height = game.variables.numberHeight
    //_clone.drawBoundaries = true
    // Physics
    _clone.X = _numfConfig.X
    _clone.Y = _numfConfig.Y
    // Other
    _clone._id = _numfConfig._id || ''
    _clone._Xmin = _numfConfig._Xmin || _clone.X
    _clone._Xmax = _numfConfig._Xmax || _clone.X
    _clone._velocityX = _numfConfig._velocityX || 200
    _clone._velocityY = 0
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

    // Calculate time since last frame
    let deltaTime = Math.min(1/mge.game.fps,0.04)

    // Keep track of last position
    let lastX = this.X
    let lastY = this.Y

    // Update number position
    this.X+=Math.round(this._velocityX*deltaTime)
    this.Y+=Math.round(this._velocityY*deltaTime)

    // Check X range
    if (this.X > this._Xmax || this.X < this._Xmin) {
        this.X = lastX
        this._velocityX = this._velocityX * -1
    }

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
    
    if (this._velocityX <=0 ) {
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
    if (Math.abs(this._velocityX) < 1) {
        this._legs._curAnimation = 'idle'
        this._legs.x = this.x
        this._legs.y = this.y+29
        this._legs.scaleX = 1
    }
    if (this._velocityX <= -1) {
        this._legs._curAnimation = 'walk'
        this._legs.x = this.x
        this._legs.y = this.y+29
        this._legs.scaleX = -1
    }
    if (this._velocityX >= 1) {
        this._legs._curAnimation = 'walk'
        this._legs.x = this.x
        this._legs.y = this.y+29
        this._legs.scaleX = 1
    }
    if (Math.abs(this._velocityY > 0)) {
        this._legs._curAnimation = 'idle'
        this._legs.x = this.x
        this._legs.y = this.y+29
        this._legs.scaleX = 1
    }

}

