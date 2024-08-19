game.sprites.legs.init = function() {
    // Init sprite properties
    this.width = game.images.legsIdle.width
    this.height = game.images.legsIdle.height
    // Animation
    this._curAnimation = 'idle'
    this._lastAnimation = ''
    // Load aniamtion extension
    mge.animation.loadExtention(this)
    this.animation.timeBetweenFrames = 100
}

game.sprites.legs.drawFunction = function (ctx) {

    // Update animation
    if (this._curAnimation != this._lastAnimation ) {
        if(this._curAnimation == 'idle') {
            this.animation.frames = game.animations.legsIdle
        }
        this.animation.restart()
    }
    this._lastAnimation = this._curAnimation

    // Draw animation
    this.animation.draw(ctx)
}