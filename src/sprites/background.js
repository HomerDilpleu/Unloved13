game.sprites.background.init = function(_bkgConfig,_camConfig) {

    // Create a clone of himself
    let _clone = game.sprites.background.cloneCreate()
    // Standard properties
    _clone.width = _bkgConfig._width || mge.game.width
    _clone.height = _bkgConfig._height || mge.game.height
    // Positionning
    _clone.X = _bkgConfig.X + mge.game.width / 2
    _clone.Y = _bkgConfig.Y + mge.game.height / 2
    _clone._camXinit = _camConfig.X
    _clone._camYinit = _camConfig.Y
    _clone._scrollRatio = _bkgConfig._scrollRatio
    // Style
    _clone._fillStyle = _bkgConfig._fillStyle || ''
    _clone._image = _bkgConfig._image || ''
    // Return clone    
    return _clone
  
}

game.sprites.background.update = function () {
    // Camera scroll
    let _deltaCamX = this._camXinit - game.variables.camX
    let _scrolledCamX = this._camXinit - _deltaCamX * this._scrollRatio
    let _deltaCamY = this._camYinit - game.variables.camY
    let _scrolledCamY = this._camYinit - _deltaCamY * this._scrollRatio
    
    this.x = this.X - _scrolledCamX
    this.y = this.Y - _scrolledCamY
}


game.sprites.background.drawFunction = function (ctx) {
    if (this._fillStyle!='') {
        ctx.fillStyle=this._fillStyle
        ctx.beginPath()
        ctx.fillRect(0,0,this.width,this.height)
        ctx.fill()
    } 
    if (this._image!='') {
        this._image.draw(ctx)
    }
}