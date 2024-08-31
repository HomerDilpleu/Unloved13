game.sprites.numbers.init = function (_numConfig) {
    // Create a clone of himself
    let c = game.sprites.numbers.cloneCreate()
    // Standard properties
    c.width = game.variables.numberWidth
    c.height = game.variables.numberHeight
    // Positioning
    c._id = _numConfig._id || ''
    c.X = _numConfig.X
    c.Y = _numConfig.Y
    // Settings 
    c._Xmin = _numConfig._Xmin || 0
    c._Xmax = _numConfig._Xmax || 0
    c._velocityX = _numConfig._velocityX || 200
    c._runX = _numConfig._runX || 200
    c._runVX = _numConfig._runVX || 200
    c._message = _numConfig._message || ''
    c._newXmin = _numConfig._newXmin || 0
    c._newXmax = _numConfig._newXmax || 0
    c._newVelocityX = _numConfig._newVelocityX || 0
    // Current behaviour
    c._behaviour = 'PATROL'
    // Appearence
    c._bodyFill = _numConfig._bodyFill || 'black'
    // Eye
    c._eye = game.sprites.eye.cloneCreate()
    mge.animation.activateOwnCloneAnimation(c._eye)
    // Legs
    c._legs = game.sprites.legs.cloneCreate()
    mge.animation.activateOwnCloneAnimation(c._legs)
    // Return clone    
    return c
}


game.sprites.numbers.update = function () {

    // Calculate time since last frame
    let deltaTime = Math.min(1/mge.game.fps,0.02)

    // UPDATE X VELOCITY
        // Patrol behaviour
    if (this._behaviour == 'PATROL') {
        if ((this.X > this._Xmax && this._velocityX > 0) || (this.X < this._Xmin && this._velocityX < 0)) {
            this._velocityX = this._velocityX * -1
        }
    } else {
        // Run behaviour
        this._velocityX = this._runVX
    }

    // UPDATE X
    this.X+=Math.round(this._velocityX*deltaTime)

    // CHECK RUN IS ENEDED
    if (this._behaviour == 'RUN' && ((this._runVX < 0 && this.X < this. _runX) || (this._runVX > 0 && this.X > this. _runX) )) {
        this._behaviour = 'PATROL'
        this._Xmin = this._newXmin
        this._Xmax = this._newXmax
        this._velocityX = this._newVelocityX
        game.variables.messages.push(this._message)
    }

    // Camera scroll
    this.x = this.X - game.variables.camX + mge.game.width / 2
    this.y = this.Y - game.variables.camY + mge.game.height / 2

    // Update Victory conditions
    if (this._id == game.variables.victoryNumId) {
        game.variables.victoryNumBox={xMin:this.x-this.width/2,xMax:this.x+this.width/2,yMin:this.y-this.height/2,yMax:this.y+this.height/2}
    }

    // Apply messages
    for (let _message of game.variables.messages) {
        if (_message =='NUM_RUN:'+this._id) {
            this._behaviour = 'RUN'
            game.variables.messages=game.variables.messages.filter(e => e !== _message)
        }
    }
}

game.sprites.numbers.drawFunction = function (ctx) {
    // Body
    ctx.font = 'bold 50px serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = this._bodyFill
    ctx.fillText(this._id, this._width/2, this._height/2+7)
    // Eye
    this._eye._curAnimation = 'normal'
    this._eye.x = this.x-5
    this._eye.y = this.y-25
    this._eye.scaleX = 1
    if (this._velocityX>0) {this._eye.scaleX = -1}
    // Legs
    this._legs.x = this.x
    this._legs.y = this.y+29
    this._legs._curAnimation = 'idle' 
    this._legs.scaleX = 1
    if (this._velocityX <= -1) {
        this._legs._curAnimation = 'walk'
        this._legs.scaleX = -1
    }
    if (this._velocityX >= 1) {this._legs._curAnimation = 'walk'}
}

