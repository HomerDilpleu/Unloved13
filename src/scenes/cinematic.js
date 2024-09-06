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
        _x:mge.game.width/2,
        _y:200,
        _vX:20,
        _size:10,
        _fillStyle:['#582970','#a26ac8','white']})

    // Play explosion sound
    mge.audio.playSound(game.instruments.endLevel,440,mge.audio.currentAudioTime,0.2,0.9)
    mge.audio.playSound(game.instruments.endLevel,550,mge.audio.currentAudioTime,0.2,0.9)
    mge.audio.playSound(game.instruments.endLevel,660,mge.audio.currentAudioTime,0.2,0.9)
    mge.audio.playSound(game.instruments.endLevel,880,mge.audio.currentAudioTime,0.2,0.9)
    mge.audio.playSound(game.instruments.endLevel,440,mge.audio.currentAudioTime+0.2,0.5,0.9)
    mge.audio.playSound(game.instruments.endLevel,550,mge.audio.currentAudioTime+0.2,0.5,0.9)
    mge.audio.playSound(game.instruments.endLevel,660,mge.audio.currentAudioTime+0.2,0.5,0.9)
    mge.audio.playSound(game.instruments.endLevel,880,mge.audio.currentAudioTime+0.2,0.5,0.9)

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
    if (game.variables.curlevel == 1) {game.sprites.textBox._text='TUTO COMPLETED!'}
    else if (game.variables.curlevel == 2) {game.sprites.textBox._text='GREAT, NUMBER 56 IS NO LONGER SCARED BY YOU!!'}
    else if (game.variables.curlevel == 3) {game.sprites.textBox._text='CONGRATULATIONS, NUMBER 45 IS NOW YOUR FRIEND!'}
    else {game.sprites.textBox._text = 'MORE LEVELS TO COME...'}

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