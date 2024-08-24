//////////////////////
// Start scene 
//////////////////////
game.scenes.boot.start = function() {

    // Load images and patterns
    game.images.init()

    // Load animations
    game.animations.init()

    // Load songs of the game
    while (mge.song.loadNextSong() < 1) {
    }
    
    // Init sprites
    game.sprites.logoDilpleu.init()
    game.sprites.playButton.init()
    game.sprites.eye.init()
    game.sprites.legs.init()
    game.sprites.textBox.init()

    // Create levels
    game.levels.createLevels()

    // Change game state
    game.state = 'ready'

}

//////////////////////
// Update scene
//////////////////////
game.scenes.boot.update = function() {

    // Check is playButton is clicked
    game.sprites.playButton.update()

}

//////////////////////
// Draw scene
//////////////////////
game.scenes.boot.draw = function() {

    // Draw sprites
    game.sprites.logoDilpleu.draw()
    game.sprites.playButton.draw()

}