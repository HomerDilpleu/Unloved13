game.sprites.background.init = function(_bkgConfig,_camConfig) {

    // Create a clone of himself
    let c = game.sprites.background.cloneCreate()
    // Standard properties
    c.width = _bkgConfig._width || mge.game.width
    c.height = _bkgConfig._height || mge.game.height
    // Positionning
    c.X = _bkgConfig.X + mge.game.width / 2
    c.Y = _bkgConfig.Y + mge.game.height / 2
    c._camXinit = _camConfig.X
    c._camYinit = _camConfig.Y
    c._scrollRatio = _bkgConfig._scrollRatio
    // Style
    c._fillStyle = _bkgConfig._fillStyle || ''
    c._image = _bkgConfig._image || ''
    // Return clone    
    return c
  
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