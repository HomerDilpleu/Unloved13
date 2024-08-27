//////////////////////
// Start scene 
//////////////////////
game.scenes.cinematic.start = function() {

    // Timer
    this._startScene=Date.now()

    // Delete particles
    game.sprites.particles.cloneDeleteAll()

}

//////////////////////
// Update scene
//////////////////////
game.scenes.cinematic.update = function() {

    // Update particles
    game.sprites.particles.cloneExecuteForEach('update')

    // Check is playButton is clicked
    if(Date.now()-this._startScene>1000) {
        game.sprites.playButton.update()
    }
 
}

//////////////////////
// Draw scene
//////////////////////
game.scenes.cinematic.draw = function() {

    // Text box
    game.sprites.textBox._text='LEVEL COMPLETED'
    game.sprites.textBox.x=mge.game.width/2
    game.sprites.textBox.y=100
    game.sprites.textBox.draw()
    
    // Draw play button
    if(Date.now()-this._startScene>1000) {
        game.sprites.playButton.draw()
    }

}