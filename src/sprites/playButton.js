game.sprites.playButton.init = function() {
    
    // Init sprite properties
    this.width = game.images.playButton.width
    this.height = game.images.playButton.height
    this.x = 640
    this.y = 300
}

game.sprites.playButton.update = function () {
    // If clicked, then change scene
    if (this.isClicked) {
        mge.game.changeScene(game.scenes.main)
    }
}

game.sprites.playButton.drawFunction = function (ctx) {
    game.images.playButton.draw(ctx)
}