game.sprites.background.init = function(_bkgConfig,_camConfig) {

    // Create a clone of himself
    let _clone = game.sprites.background.cloneCreate()
    // Standard properties
    _clone.width = _bkgConfig._width || mge.game.width
    _clone.height = _bkgConfig._height || mge.game.height
    // Positionning
    _clone.X = _bkgConfig.X + mge.game.width / 2
    _clone.Y = _bkgConfig.Y + mge.game.height / 2
    _clone.camXinit = _camConfig.X
    _clone.camYinit = _camConfig.Y
    _clone._scrollRatio = _bkgConfig._scrollRatio
    // Style
    _clone._fillStyle = _bkgConfig._fillStyle
    // Return clone    
    return _clone
  
}

game.sprites.background.update = function () {
    // Camera scroll
    let _deltaCamX = this.camXinit - game.variables.camX
    let _scrolledCamX = this.camXinit - _deltaCamX * this._scrollRatio
    let _deltaCamY = this.camYinit - game.variables.camY
    let _scrolledCamY = this.camYinit - _deltaCamY * this._scrollRatio
    
    this.x = this.X - _scrolledCamX
    this.y = this.Y - _scrolledCamY
}


game.sprites.background.drawFunction = function (ctx) {
    ctx.fillStyle = this._fillStyle
    ctx.fillRect(0,0,this.width,this.height)
}