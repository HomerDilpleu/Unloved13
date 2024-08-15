//////////////////////
// Start scene 
//////////////////////
game.scenes.main.start = function() {

        // Create platforms
        game.sprites.platform.init()
        pltf0 = game.sprites.platform.clone(500,30,300,50)
        pltf1 = game.sprites.platform.clone(300,50,200,300)
        pltf2 = game.sprites.platform.clone(50,300,100,0)

        // Create player
        game.sprites.player.init()

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