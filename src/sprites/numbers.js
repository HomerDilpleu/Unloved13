game.sprites.numbers.init = function (_numConfig) {
    // Create a clone of himself
    let _clone = game.sprites.numbers.cloneCreate()
    // Standard properties
    _clone.width = game.variables.numberWidth
    _clone.height = game.variables.numberHeight
    //_clone.drawBoundaries = true
    // Positioning
    _clone._id = _numConfig._id || ''
    _clone.X = _numConfig.X
    _clone.Y = _numConfig.Y
    // Settings 
    _clone._Xmin = _numConfig._Xmin || 0
    _clone._Xmax = _numConfig._Xmax || 0
    _clone._velocityX = _numConfig._velocityX || 200
    _clone._velocityY = 0
    _clone._Xescape = _numConfig._Xescape || 0
    _clone._velocityEscape = _numConfig._velocityEscape || 0
    _clone._Yfall = _numConfig._Yfall || 0
    _clone._velocityFall = _numConfig._velocityFall || 0
    _clone._fallMessage = _numConfig._fallMessage || ''
    _clone._XminFallen = _numConfig._XminFallen || 0
    _clone._XmaxFallen = _numConfig._XmaxFallen || 0
    _clone._velocityXFallen = _numConfig._velocityXFallen || 0
    // Detection
    _clone._isDetected = false
    // Appearence
    _clone._bodyFill = _numConfig._bodyFill || 'black'
    _clone._textFill = _numConfig._textFill || 'black'
    // Text
    _clone._textNormal = _numConfig._textNormal || ''
    _clone._textEscape = _numConfig._textEscape || ''
    _clone._textFallen = _numConfig._textFallen || ''
    _clone._speakTxt = ''
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

    // Update number position
    this.X+=Math.round(this._velocityX*deltaTime)
    this.Y+=Math.round(this._velocityY*deltaTime)

    // NUMBER NOT DETECTED, then patrol between xmin and xmax
    if (!this._isDetected) {
        if ((this.X > this._Xmax && this._velocityX > 0) || (this.X < this._Xmin && this._velocityX < 0)) {
            this._velocityX = this._velocityX * -1
            this._speakTxt = this._textNormal
        }
    } else {
        // NUMBER DETECTED BUT STILL NOT FALLING
        if ((this._velocityEscape < 0 && this.X > this._Xescape && this.Y < this._Yfall) || (this._velocityEscape > 0 && this.X < this._Xescape && this.Y < this._Yfall)) {
            this._velocityX = this._velocityEscape
            this._speakTxt = this._textEscape
        }
        // NUMBER FALLING
        if ((this._velocityEscape < 0 && this.X <= this._Xescape && this.Y < this._Yfall) || (this._velocityEscape > 0 && this.X >= this._Xescape && this.Y < this._Yfall)) {
            this._velocityX = 0
            this.X = this._Xescape
            this._velocityY = this._velocityFall
            // text
            this._speakTxt = this._textEscape
            // message
            if (this._fallMessage != '' && !game.variables.messages.includes(this._fallMessage)) {
                game.variables.messages.push(this._fallMessage)
            }
        }
        // NUMBER FALLEN
        if (this.Y >= this._Yfall) {
            this._velocityY = 0
            this.Y = this._Yfall
            this._speakTxt = this._textFallen
            if(this._velocityX == 0) {this._velocityX=this._velocityXFallen}
            if ((this.X > this._XmaxFallen && this._velocityX > 0) || (this.X < this._XminFallen && this._velocityX < 0)) {
                this._velocityX = this._velocityX * -1
            }
        }       
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
        if (_message=='NUM_DETECTED:'+this._id) {
            this._isDetected= true
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

    // text
    if (this._speakTxt !='') {
        ctx.fillStyle = 'white'
        ctx.strokeStyle = this._textFill
        ctx.beginPath()
        ctx.roundRect(-10,-45,80,35,10)
        ctx.fill()
        ctx.font = '24px serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = this._textFill
        ctx.fillText(this._speakTxt, this.width/2, -25)
    }


}

