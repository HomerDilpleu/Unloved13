game.sprites.playButton.init = function() {
    
    // Init sprite properties
    this.width = 500
    this.height = 100
    this.x = mge.game.width/2
    this.y = mge.game.height/2
    this._text = 'PLAY'
}

game.sprites.playButton.update = function () {
    // If clicked, then change scene
    if (this.isClicked || mge.keyboard.isKeyPressed('ArrowUp')) {
        // Play main song
        if (game.state == 'ready') {game.songs.mainSong.playSong()}
        // Go to main scene
        mge.game.changeScene(game.scenes.main)
    }
}

game.sprites.playButton.drawFunction = function (ctx) {
    // Box
    ctx.strokeStyle = '#582970'
    ctx.lineWidth = 6
    ctx.strokeRect(0,0,this.width,this.height)
    // Text
    ctx.font = '60px serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = '#582970'
    if (game.state == 'ready') {this._text = 'PLAY'} else {this._text = 'CLICK OR JUMP'}
    ctx.fillText(this._text, this.width/2, this.height/2)

}