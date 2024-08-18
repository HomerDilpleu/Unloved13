game.levels.initLevel = function (_level) {

    // Create platforms
    game.sprites.platform.cloneDeleteAll()
    for (let _pltf of _level._platforms) {
        game.sprites.platform.init(_pltf)
      }

    // Delete platform message
    game.variables.platformMessage=''

    // Initialise player  
    game.sprites.player.X = _level._player.X
    game.sprites.player.Y = _level._player.Y

    // Initialise camera 
    game.variables.camX = _level._camera.X
    game.variables.camY = _level._camera.Y

}

game.levels.level1 = {
    _platforms:[{_id:'1',_width:50,_height:1000,X:-120,Y:210,_image:game.images.pltf1},
                {_id:'2',_width:50,_height:50,X:400,Y:460,_pushable:{_Xmin:400,_Xmax:1000,_Xfall:535,_Yfall:660,_fallSide:'right'}, _autoJumpForce:2000},
                {_id:'3',_width:50,_height:50,X:100,Y:460,_pushable:{_Xmin:-100,_Xmax:300,_Xfall:-35,_Yfall:660,_fallSide:'left'}},
                {_id:'4',_width:500,_height:30,X:250,Y:500},
                {_id:'5',_width:1400,_height:30,X:600,Y:700},
                {_id:'6',_width:50,_height:50,X:750,Y:665, _autoJumpForce:2000}
              ],
    _player:{X:200,
             Y:300},
    _camera:{X:200,
             Y:0}
}