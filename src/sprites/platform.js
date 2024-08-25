game.sprites.platform.init = function (_pltfConfig) {
    // Create a clone of himself
    let _clone = game.sprites.platform.cloneCreate()
    // Standard properties
    _clone.width = _pltfConfig._width
    _clone.height = _pltfConfig._height
    _clone.drawBoundaries = true
    //_clone.drawBoundaries = true
    // Physics
    _clone.X = _pltfConfig.X+_pltfConfig._width/2
    _clone.Y = _pltfConfig.Y+_pltfConfig._height/2
    _clone._accelerationY=0
    _clone._velocityY=0
    _clone._isColliding=false
    // Other
    _clone._id = _pltfConfig._id || ''
    _clone._image = _pltfConfig._image || ''
    _clone._fillStyle = _pltfConfig._fillStyle || ''
    _clone._radiusStyle = _pltfConfig._radiusStyle || 0
    _clone._pushable = _pltfConfig._pushable || ''
    _clone._autoJumpForce = _pltfConfig._autoJumpForce || 0
    _clone._actionable = _pltfConfig._actionable || ''
    _clone._movesTo = _pltfConfig._movesTo || ''
    _clone._isMoving = false
    // Return clone    
    return _clone
}

game.sprites.platform.drawFunction = function (ctx) {
    // Draw only if platform in screen
    if (game.utils.checkColisionBox({xMin:this.x-this.width/2,xMax:this.x+this.width*2,yMin:this.y-this.height/2,yMax:this.y+this.height/2},{xMin:0,xMax:mge.game.width,yMin:0,yMax:mge.game.height})) {
        if (this._fillStyle!='') {
            ctx.fillStyle=this._fillStyle
            ctx.beginPath()
            ctx.roundRect(0,0,this.width,this.height,this._radiusStyle)
            ctx.fill()
        } 
        if (this._image!='') {
            this._image.draw(ctx)
        }
    }
}

game.sprites.platform.managePlatformCollisions = function () {
    // ******************************************************
    // * INIT
    // ******************************************************
    let _p = game.sprites.player
    let _deltaTime = 1/mge.game.fps
    this._isColliding = false
    // Min and Max of current sprite
    let _spriteBox = {xMin: this.X-this.width / 2,
                      xMax: this.X+this.width / 2,
                      yMin: this.Y-this.height / 2,
                      yMax: this.Y+this.height / 2}
    // ******************************************************
    // * MANAGE COLISIONS WITH PLAYER
    // ******************************************************
    // RIGHT hit box
    if (game.utils.checkColisionBox(_spriteBox, _p.hitBoxRight)) {
        _p.collidesRight = true
        this._isColliding = true
        // Pushable platform
        if (this._pushable!='' && _p.velocityX > 0) {
            this.X = _p.X+_p.width/2+this.width/2 + _p.HitBoxSize
            _p.collidesRight = false
            _p.velocityX = 0
            if (this.X>=this._pushable._Xmax) {
                this.X = this._pushable._Xmax
                _p.collidesRight = true
            }
        }
    } 
    // LEFT hit box
    if (game.utils.checkColisionBox(_spriteBox, _p.hitBoxLeft)) {
        _p.collidesLeft = true
        this._isColliding = true
        // Pushable platform
        if (this._pushable!='' && _p.velocityX < 0) {
            this.X = _p.X-_p.width/2-this.width/2 - _p.HitBoxSize
            _p.collidesLeft = false
            _p.velocityX = 0
            if (this.X<=this._pushable._Xmin) {
                this.X = this._pushable._Xmin
                _p.collidesLeft = true
            }
        }
    } 
    // UP hit box
    if (game.utils.checkColisionBox(_spriteBox, _p.hitBoxUp)) {
        _p.collidesUp = true
        this._isColliding = true
    } 
    // DOWN hit box
    if (game.utils.checkColisionBox(_spriteBox, _p.hitBoxDown)) {
        _p.collidesDown = true
        this._isColliding = true
        // Autojumb platform
        if (this._autoJumpForce != 0) {
            game.sprites.player.velocityY = -this._autoJumpForce
            game.sprites.player.Y = this.Y - this.height/2 - game.sprites.player.height/2
            _p.collidesDown = false
        }
    } 
    // ******************************************************
    // * APPLY PLATFORM MOVEMENTS
    // ******************************************************
    // Apply gravity on pushable platforms
    if (this._pushable!='') {
        // If platform has not fallen yet
        if (this.Y < this._pushable._Yfall) {
            // If platform is falling
            if((this._pushable._fallSide == 'right' && this.X >= this._pushable._Xfall) || (this._pushable._fallSide == 'left' && this.X <= this._pushable._Xfall)) {
                this._accelerationY=game.variables.gravity
                this._velocityY+=this._accelerationY*_deltaTime
                this.Y = Math.min(this.Y+this._velocityY*_deltaTime,this._pushable._Yfall)
            }
        }
    }
    // Apply movement on platform that moves automatically
    if (this._movesTo!='' && this._isMoving) {

        if (this._movesTo._velocityY<0) {
            this.Y = Math.max(this.Y+this._movesTo._velocityY*_deltaTime,this._movesTo.Y+this._height/2)
        } else {
            this.Y = Math.min(this.Y+this._movesTo._velocityY*_deltaTime,this._movesTo.Y+this._height/2)
        }
        if (this._movesTo._velocityX<0) {
            this.X = Math.max(this.X+this._movesTo._velocityX*_deltaTime,this._movesTo.X+this._width/2)
        } else {
            this.X = Math.min(this.X+this._movesTo._velocityX*_deltaTime,this._movesTo.X+this._width/2)
        }
    }

    // ******************************************************
    // * CAMERA SCROLL
    // ******************************************************
    this.x = this.X - game.variables.camX + mge.game.width / 2
    this.y = this.Y - game.variables.camY + mge.game.height / 2

    // ******************************************************
    // * UPDATE VICTORY CONDITIONS
    // ******************************************************
    if (this._id == game.variables.victoryPtlfId) {
        game.variables.victoryPtlfBox={xMin:this.x-this.width/2,xMax:this.x+this.width/2,yMin:this.y-this.height/2,yMax:this.y+this.height/2}
    }
    
    // ******************************************************
    // * ACTIONABLE PLATFORM
    // ******************************************************
    if (this._actionable!=''&&this._isColliding) {
        // Send message
        if (!game.variables.messages.includes(this._actionable._message)) {
            game.variables.messages.push(this._actionable._message)
        }
        // Apply new style
        this._fillStyle=this._actionable._fillStyle||''
        this._image=this._actionable._image||''
        // Remove actionable property
        this._actionable=''
    }
    // ******************************************************
    // * APPLY MESSAGES
    // ******************************************************
    for (let _message of game.variables.messages) {
        // DESTROY
        if(_message=='PLTF_DESTROY:'+this._id) {
            this.cloneDelete()
            game.variables.messages=game.variables.messages.filter(e => e !== _message)
        }
        // MOVES
        if(_message=='PLTF_MOVE:'+this._id) {
            this._isMoving = true
            game.variables.messages=game.variables.messages.filter(e => e !== _message)
        }
      }
}
