//////////////////////
// Start scene 
//////////////////////
game.scenes.main.start = function() {

        // Create player
        game.sprites.player.init()

        // Create level1
        game.levels.initLevel(game.levels.level1)

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
}

//////////////////////
// Draw scene
//////////////////////
game.scenes.main.draw = function() {

        // Draw platforms
        game.sprites.platform.cloneExecuteForEach('draw')

        // Draw player
        game.sprites.player.draw()

        // Draw eyes
        game.sprites.eye.cloneExecuteForEach('draw')

        // Draw legs
        game.sprites.legs.cloneExecuteForEach('draw')

}