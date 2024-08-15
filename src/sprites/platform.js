game.sprites.platform.init = function() {
    // Init sprite properties
    this.X = 0
    this.Y = 0
}

game.sprites.platform.update = function () {
    // Scroll camera
    this.x = this.X - game.variables.camX
    this.y = this.Y - game.variables.camY
}

game.sprites.platform.drawFunction = function (ctx) {
    ctx.fillStyle='white'
    ctx.fillRect(0,0,this.width,this.height)
}

game.sprites.platform.clone = function (_width,_height,X,Y) {
    // Create a clone of himself
    let _clone = game.sprites.platform.cloneCreate()
    _clone.width = _width
    _clone.height = _height
    _clone.X = X
    _clone.Y= Y
    return _clone
}