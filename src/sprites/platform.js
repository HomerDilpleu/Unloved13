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
    // Min and Max of current sprite
    let _x1Min = this.X-this.width / 2
    let _x1Max = this.X+this.width / 2
    let _y1Min = this.Y-this.height / 2
    let _y1Max = this.Y+this.height / 2
    // RIGHT hit box
    if (game.sprites.platform.checkHitBoxCollision(_x1Min, _x1Max, _y1Min, _y1Max, game.sprites.player.hitBoxRight)) {
        _p.collidesRight = true
    } 
    // LEFT hit box
    if (game.sprites.platform.checkHitBoxCollision(_x1Min, _x1Max, _y1Min, _y1Max, game.sprites.player.hitBoxLeft)) {
        _p.collidesLeft = true
    } 
    // UP hit box
    if (game.sprites.platform.checkHitBoxCollision(_x1Min, _x1Max, _y1Min, _y1Max, game.sprites.player.hitBoxUp)) {
        _p.collidesUp = true
    } 
    // DOWN hit box
    if (game.sprites.platform.checkHitBoxCollision(_x1Min, _x1Max, _y1Min, _y1Max, game.sprites.player.hitBoxDown)) {
        _p.collidesDown = true
    } 
}

game.sprites.platform.checkHitBoxCollision = function (_x1Min, _x1Max, _y1Min, _y1Max, _hitBox) {
    if (!(_x1Min>_hitBox.Xmax || _hitBox.Xmin>_x1Max || _y1Min>_hitBox.Ymax || _hitBox.Ymin>_y1Max)) {return true} 
}

