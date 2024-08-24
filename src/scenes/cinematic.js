//////////////////////
// Start scene 
//////////////////////
game.scenes.cinematic.start = function() {

    // Timer
    this._startScene=Date.now()

}

//////////////////////
// Update scene
//////////////////////
game.scenes.cinematic.update = function() {

    // Check is playButton is clicked
    if(Date.now()-this._startScene>2000) {
        mge.game.changeScene(game.scenes.main)
    }
 
}

//////////////////////
// Draw scene
//////////////////////
game.scenes.cinematic.draw = function() {

    // Draw message
    game.sprites.textBox._text='LEVEL COMPLETED'
    game.sprites.textBox.draw()

}