game.sprites.eye.init = function() {
    // Init sprite properties
    this.width = game.images.openEye.width
    this.height = game.images.openEye.height
    // Animation
    this._curAnimation = 'normal'
    this._lastAnimation = ''
    // Load aniamtion extension
    mge.animation.loadExtention(this)
    this.animation.timeBetweenFrames = 100
}

game.sprites.eye.drawFunction = function (ctx) {

    // Update animation
    if (this._curAnimation != this._lastAnimation ) {
        if(this._curAnimation == 'normal') {
            this.animation.frames = game.animations.eye
        }
        this.animation.restart()
    }
    this._lastAnimation = this._curAnimation

    // Draw animation
    this.animation.draw(ctx)
}