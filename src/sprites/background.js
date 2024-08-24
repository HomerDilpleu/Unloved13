game.sprites.background.init = function(_bkgConfig,_camConfig) {

    // Create a clone of himself
    let _clone = game.sprites.background.cloneCreate()
    // Standard properties
    _clone.width = _bkgConfig._width || mge.game.width
    _clone.height = _bkgConfig._height || mge.game.height
    // Positionning
    _clone.X = _camConfig.X + mge.game.width / 2
    _clone.Y = _camConfig.Y + mge.game.height / 2
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
/*    this.x = (this.X - game.variables.camX) * this._scrollRatio //+ mge.game.width / 2
    this.y = (this.Y - game.variables.camY) * this._scrollRatio //+ mge.game.height / 2
    let _deltaXCam = this.X-game.variables.camX
    let _deltaYCam = this.X-game.variables.camX
    this.x = this.X-_deltaXCam * this._scrollRatio
    this.y = this.Y-_deltaYCam * this._scrollRatio*/
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