game.sprites.platform.init = function (_pltfConfig) {
    // Create a clone of himself
    let _clone = game.sprites.platform.cloneCreate()
    // Standard properties
    _clone.width = _pltfConfig._width
    _clone.height = _pltfConfig._height
    //_clone.drawBoundaries = true
    // Physics
    _clone.X = _pltfConfig.X
    _clone.Y = _pltfConfig.Y
    _clone._accelerationY=0
    _clone._velocityY=0
    _clone._isColliding=false
    // Other
    _clone._id = _pltfConfig._id || ''
    _clone._image = _pltfConfig._image || ''
    _clone._fillStyle = _pltfConfig._fillStyle || ''
    _clone._pushable = _pltfConfig._pushable || ''
    _clone._autoJumpForce = _pltfConfig._autoJumpForce || 0
    _clone._actionable = _pltfConfig._actionable || ''
    // Return clone    
    return _clone
}

game.sprites.platform.drawFunction = function (ctx) {
    if (this._fillStyle!='') {
        ctx.fillStyle=this._fillStyle
        ctx.fillRect(0,0,this.width,this.height)
    } 
    if (this._image!='') {
        this._image.draw(ctx)
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
                this._accelerationY=game.const.gravity
                this._velocityY+=this._accelerationY*_deltaTime
                this.Y = Math.min(this.Y+this._velocityY*_deltaTime,this._pushable._Yfall)
            }
        }
    }
    // ******************************************************
    // * APPLY PLATFORM MOVEMENTS
    // ******************************************************
    this.x = this.X - game.variables.camX + mge.game.width / 2
    this.y = this.Y - game.variables.camY + mge.game.height / 2
    
    // ******************************************************
    // * SEND MESSAGE
    // ******************************************************
    if (this._actionable!=''&&this._isColliding) {
        if (!game.variables.platformMessage.includes(this._actionable._message)) {
            game.variables.platformMessage.push(this._actionable._message)
        }
        if (this._actionable._fillStyle!='') {this._fillStyle=this._actionable._fillStyle}
        if (this._actionable._image!='') {this._image=this._actionable._image}
    }
    // ******************************************************
    // * APPLY MESSAGES
    // ******************************************************
    for (let _message of game.variables.platformMessage) {
        if(_message=='DESTROY:'+this._id) {this.cloneDelete()}
      }
}
