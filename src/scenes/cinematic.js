//////////////////////
// Start scene 
//////////////////////
game.scenes.cinematic.start = function() {

    // Timer
    this._startScene=Date.now()

    // Delete particles
    game.sprites.particle.cloneDeleteAll()

    // Create particles
    game.sprites.particle.generator({
        _nbParticles:100,
        _xMin:100,
        _xMax:1000,
        _yMin:200,
        _yMax:250,
        _sizeMin:5,
        _sizeMax:15,
        _vxMin:-5,
        _vxMax:5,
        _vyMin:-20,
        _vyMax:0,
        _fillStyle:['red','blue','yellow','green'],
        _gravity: 1
})
}

//////////////////////
// Update scene
//////////////////////
game.scenes.cinematic.update = function() {

    // Update particles
    game.sprites.particle.cloneExecuteForEach('update')

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

    // Particles
    game.sprites.particle.cloneExecuteForEach('draw')
}