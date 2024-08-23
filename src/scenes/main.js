//////////////////////
// Start scene 
//////////////////////
game.scenes.main.start = function() {

        // Delete eyes and legs
        game.sprites.eye.cloneDeleteAll()
        game.sprites.legs.cloneDeleteAll()

        // Create player
        game.sprites.player.init()

        // Create current level
        game.levels.initLevel(game.levels[game.variables.curlevel])

        // Create textBox
        game.sprites.textBox.init()

        // Update state
        game.state = 'running'

}

//////////////////////
// Update scene
//////////////////////
game.scenes.main.update = function() {

        // Update player and platforms
        game.sprites.player.update()

        // Update camera X
        if (game.variables.camX<game.sprites.player.X-game.variables.camMaxOffsetX) {
                game.variables.camX=game.sprites.player.X-game.variables.camMaxOffsetX
        }
        if (game.variables.camX>game.sprites.player.X+game.variables.camMaxOffsetX) {
                game.variables.camX=game.sprites.player.X+game.variables.camMaxOffsetX
        }
        // Update camera Y
        if (game.variables.camY<game.sprites.player.Y-game.variables.camMaxOffsetY) {
                game.variables.camY=game.sprites.player.Y-game.variables.camMaxOffsetY
        }
        if (game.variables.camY>game.sprites.player.Y+game.variables.camMaxOffsetY) {
                game.variables.camY=game.sprites.player.Y+game.variables.camMaxOffsetY
        }

        // Update numbers
        game.sprites.numbers.cloneExecuteForEach('update')

        // Get messages
        for (let _message of game.variables.messages) {
                // UPDATE TEXT BOX
                if(_message.split(':')[0]=='TEXT_BOX') {
                        game.sprites.textBox._text = _message.split(':')[1]
                        game.variables.messages=game.variables.messages.filter(e => e !== _message)
                }
              }

        // Check victory condition
        if (game.utils.checkColisionBox(game.variables.victoryPtlfBox,game.variables.victoryNumBox)) {
                game.state = 'completed'
                if(game.variables.curlevel < game.levels.length-1) {
                        game.variables.curlevel+=1
                } else {
                        game.variables.curlevel=0
                }
                mge.game.changeScene(game.scenes.cinematic)
        } 

}

//////////////////////
// Draw scene
//////////////////////
game.scenes.main.draw = function() {

        // Draw platforms
        game.sprites.platform.cloneExecuteForEach('draw')

        // Draw numbers
        game.sprites.numbers.cloneExecuteForEach('draw')

        // Draw player
        game.sprites.player.draw()

        // Draw eyes
        game.sprites.eye.cloneExecuteForEach('draw')

        // Draw legs
        game.sprites.legs.cloneExecuteForEach('draw')

        // Draw text box
        game.sprites.textBox.draw()


}