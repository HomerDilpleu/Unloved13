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

    // Level up sound
    game.instruments.brass.play(261, mge.audio.currentAudioTime,0.2,0.9)
    game.instruments.brass.play(330, mge.audio.currentAudioTime,0.2,0.9)
    game.instruments.brass.play(261, mge.audio.currentAudioTime+0.2,0.2,0.9)
    game.instruments.brass.play(330, mge.audio.currentAudioTime+0.2,0.2,0.9)
    game.instruments.brass.play(330, mge.audio.currentAudioTime+0.4,0.2,0.9)
    game.instruments.brass.play(392, mge.audio.currentAudioTime+0.4,0.2,0.9)
    game.instruments.brass.play(330, mge.audio.currentAudioTime+0.6,0.2,0.9)
    game.instruments.brass.play(392, mge.audio.currentAudioTime+0.6,0.2,0.9)
    game.instruments.brass.play(392, mge.audio.currentAudioTime+0.8,0.4,0.9)
    game.instruments.brass.play(523, mge.audio.currentAudioTime+0.8,0.4,0.9)
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
    if (game.variables.curlevel == 1) {game.sprites.textBox._text='TUTORIAL COMPLETE!'}
    else if (game.variables.curlevel == 2) {game.sprites.textBox._text='NUMBER 56 IS NO LONGER SCARED OF YOU!!'}
    else if (game.variables.curlevel == 3) {game.sprites.textBox._text='NUMBER 72 IS NOW YOUR FRIEND!'}
    else if (game.variables.curlevel == 4) {game.sprites.textBox._text='NUMBER 45 IS GRATEFUL!'}
    else {game.sprites.textBox._text = 'NUMBER 13 YOU NOW HAVE REAL FRIENDS!'}

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