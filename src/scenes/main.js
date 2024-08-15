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

        // Update player
        game.sprites.player.update()

        // Update Camera position
        game.variables.camX = game.sprites.player.X
        game.variables.camY = game.sprites.player.Y

        // Update platforms
        game.sprites.platform.cloneExecuteForEach('update')



}

//////////////////////
// Draw scene
//////////////////////
game.scenes.main.draw = function() {

        // Draw platforms
        game.sprites.platform.cloneExecuteForEach('draw')

        // Draw player
        game.sprites.player.draw()

}