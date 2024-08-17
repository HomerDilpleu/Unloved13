game.sprites.platform.init = function (_pltfConfig) {
    // Create a clone of himself
    let _clone = game.sprites.platform.cloneCreate()
    // Standard properties
    _clone._width = _pltfConfig._width
    _clone._height = _pltfConfig._height
    // Physics
    _clone.X = _pltfConfig.X
    _clone.Y = _pltfConfig.Y
    _clone._accelerationY=0
    _clone._velocityY=0
    // Image
    _clone._image = _pltfConfig._image || ''
    // Type of platform
    _clone._type = _pltfConfig._type || ''
    _clone._typeParams = _pltfConfig._typeParams || {}
        
    return _clone
}

game.sprites.platform.update = function () {

    // Calculate time since last frame
    let _deltaTime = 1/mge.game.fps

    // Apply gravity on pushable platforms
    if (this._type=='pushable') {
        // If platform has not fallen yet
        if (this.Y < this._typeParams._Yfall) {
            // If platform is falling
            if((this._typeParams._fallSide == 'right' && this.X >= this._typeParams._Xfall) || (this._typeParams._fallSide == 'left' && this.X <= this._typeParams._Xfall)) {
                this._accelerationY=game.const.gravity
                this._velocityY+=this._accelerationY*_deltaTime
                this.Y = Math.min(this.Y+this._velocityY*_deltaTime,this._typeParams._Yfall)
            }
        }
    }

    // Scroll camera
    this.x = this.X - game.variables.camX + mge.game.width / 2
    this.y = this.Y - game.variables.camY + mge.game.height / 2
}

game.sprites.platform.drawFunction = function (ctx) {
    if (this._image!='') {
        this._image.draw(ctx)
    } else {
        ctx.fillStyle='white'
        ctx.fillRect(0,0,this.width,this.height)
    }
}

game.sprites.platform.managePlatformCollisions = function () {
    let _p = game.sprites.player
    // Min and Max of current sprite
    let _spriteBox = {xMin: this.X-this._width / 2,
                      xMax: this.X+this._width / 2,
                      yMin: this.Y-this._height / 2,
                      yMax: this.Y+this._height / 2}
    // RIGHT hit box
    if (game.utils.checkColisionBox(_spriteBox, _p.hitBoxRight)) {
        _p.collidesRight = true
        // Pushable platform
        if (this._type=='pushable' && _p.velocityX > 0) {
            this.X = _p.X+_p.width/2+this.width/2 + _p.HitBoxSize
            _p.collidesRight = false
            _p.velocityX = 0
            if (this.X>=this._typeParams._Xmax) {
                this.X = this._typeParams._Xmax
                _p.collidesRight = true
            }
        }
    } 
    // LEFT hit box
    if (game.utils.checkColisionBox(_spriteBox, _p.hitBoxLeft)) {
        _p.collidesLeft = true
        // Pushable platform
        if (this._type=='pushable' && _p.velocityX < 0) {
            this.X = _p.X-_p.width/2-this.width/2 - _p.HitBoxSize
            _p.collidesLeft = false
            _p.velocityX = 0
            if (this.X<=this._typeParams._Xmin) {
                this.X = this._typeParams._Xmin
                _p.collidesRight = true
            }
        }
    } 
    // UP hit box
    if (game.utils.checkColisionBox(_spriteBox, _p.hitBoxUp)) {
        _p.collidesUp = true
    } 
    // DOWN hit box
    if (game.utils.checkColisionBox(_spriteBox, _p.hitBoxDown)) {
        _p.collidesDown = true
    } 
}
