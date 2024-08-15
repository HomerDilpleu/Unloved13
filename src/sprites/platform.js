game.sprites.platform.init = function() {
    // Init sprite properties
    this.X = 0
    this.Y = 0
}

game.sprites.platform.update = function () {
    // Scroll camera
    this.x = this.X - game.variables.camX + mge.game.width / 2
    this.y = this.Y - game.variables.camY + mge.game.height / 2
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

game.sprites.platform.checkPlayerCollision = function () {
    let _p = game.sprites.player
    let _HBR = game.sprites.player.hitBoxRight
    let _HBL = game.sprites.player.hitBoxLeft
    let _HBU = game.sprites.player.hitBoxUp
    let _HBD = game.sprites.player.hitBoxDown
    // Min and Max of current sprite
    let _x1Min = this.X-this.width / 2
    let _x1Max = this.X+this.width / 2
    let _y1Min = this.Y-this.height / 2
    let _y1Max = this.Y+this.height / 2
    // RIGHT hit box
    let _x2Min = _HBR.Xmin
    let _x2Max = _HBR.Xmax
    let _y2Min = _HBR.Ymin
    let _y2Max = _HBR.Ymax
    if (!(_x1Min>_x2Max || _x2Min>_x1Max || _y1Min>_y2Max || _y2Min>_y1Max)) {game.sprites.player.collidesRight = true} 
    // LEFT hit box
    _x2Min = _HBL.Xmin
    _x2Max = _HBL.Xmax
    _y2Min = _HBL.Ymin
    _y2Max = _HBL.Ymax
    if (!(_x1Min>_x2Max || _x2Min>_x1Max || _y1Min>_y2Max || _y2Min>_y1Max)) {game.sprites.player.collidesLeft = true} 
    // UP hit box
    _x2Min = _HBU.Xmin
    _x2Max = _HBU.Xmax
    _y2Min = _HBU.Ymin
    _y2Max = _HBU.Ymax
    if (!(_x1Min>_x2Max || _x2Min>_x1Max || _y1Min>_y2Max || _y2Min>_y1Max)) {game.sprites.player.collidesUp = true} 
    // DOWN hit box
    _x2Min = _HBD.Xmin
    _x2Max = _HBD.Xmax
    _y2Min = _HBD.Ymin
    _y2Max = _HBD.Ymax
    if (!(_x1Min>_x2Max || _x2Min>_x1Max || _y1Min>_y2Max || _y2Min>_y1Max)) {game.sprites.player.collidesDown = true} 

}

