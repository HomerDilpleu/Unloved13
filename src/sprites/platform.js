game.sprites.platform.init = function (_pltfConfig) {
    // Create a clone of himself
    let _clone = game.sprites.platform.cloneCreate()
    // Initialise properties
    _clone.width = _pltfConfig._width
    _clone.height = _pltfConfig._height
    _clone.X = _pltfConfig.X
    _clone.Y = _pltfConfig.Y
    _clone.image = _pltfConfig._image
    return _clone
}

game.sprites.platform.update = function () {
    // Scroll camera
    this.x = this.X - game.variables.camX + mge.game.width / 2
    this.y = this.Y - game.variables.camY + mge.game.height / 2
}

game.sprites.platform.drawFunction = function (ctx) {
    if (this.image!='') {
        this.image.draw(ctx)
    } else {
        ctx.fillStyle='white'
        ctx.fillRect(0,0,this.width,this.height)
    }
}

game.sprites.platform.checkPlayerCollision = function () {
    // Min and Max of current sprite
    let _spriteBox = {xMin: this.X-this.width / 2,
                      xMax: this.X+this.width / 2,
                      yMin: this.Y-this.height / 2,
                      yMax: this.Y+this.height / 2}
    // RIGHT hit box
    if (game.utils.checkColisionBox(_spriteBox, game.sprites.player.hitBoxRight)) {
        game.sprites.player.collidesRight = true
    } 
    // LEFT hit box
    if (game.utils.checkColisionBox(_spriteBox, game.sprites.player.hitBoxLeft)) {
        game.sprites.player.collidesLeft = true
    } 
    // UP hit box
    if (game.utils.checkColisionBox(_spriteBox, game.sprites.player.hitBoxUp)) {
        game.sprites.player.collidesUp = true
    } 
    // DOWN hit box
    if (game.utils.checkColisionBox(_spriteBox, game.sprites.player.hitBoxDown)) {
        game.sprites.player.collidesDown = true
    } 
}


