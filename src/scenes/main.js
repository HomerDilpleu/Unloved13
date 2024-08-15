//////////////////////
// Start scene 
//////////////////////
game.scenes.main.start = function() {

        // Create platforms
        game.sprites.platform.init()
        pltf0 = game.sprites.platform.clone(500,10,20,20)
        pltf1 = game.sprites.platform.clone(300,50,200,300)
        pltf2 = game.sprites.platform.clone(50,300,1000,300)

}

//////////////////////
// Update scene
//////////////////////
game.scenes.main.update = function() {

        // Camera
        if(mge.keyboard.isKeyPressed('ArrowRight')) {game.variables.camX+=10} 
        if(mge.keyboard.isKeyPressed('ArrowLeft')) {game.variables.camX+=-10} 
        if(mge.keyboard.isKeyPressed('ArrowUp')) {game.variables.camY+=-10} 
        if(mge.keyboard.isKeyPressed('ArrowDown')) {game.variables.camY+=10} 

        // Update platforms
        game.sprites.platform.cloneExecuteForEach('update')

}

//////////////////////
// Draw scene
//////////////////////
game.scenes.main.draw = function() {

        // Draw platforms
        game.sprites.platform.cloneExecuteForEach('draw')

}