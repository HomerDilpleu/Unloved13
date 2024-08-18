game.levels.initLevel = function (_level) {

    // Shortcuts
    let _player = game.sprites.player
    
    // Create platforms
    game.sprites.platform.cloneDeleteAll()
    for (let _pltf of _level._platforms) {
        game.sprites.platform.init(_pltf)
      }

    // Initialise player  
    _player.X = _level._player.X
    _player.Y = _level._player.Y

}

game.levels.level1 = {
    _platforms:[{_width:30,_height:500,X:-100,Y:250,_image:game.images.pltf1},
                {_width:50,_height:50,X:400,Y:460,_pushable:{_Xmin:400,_Xmax:1000,_Xfall:535,_Yfall:660,_fallSide:'right'}, _autoJumpForce:2000},
                {_width:50,_height:50,X:100,Y:460,_pushable:{_Xmin:-100,_Xmax:300,_Xfall:-35,_Yfall:660,_fallSide:'left'}},
                {_width:500,_height:30,X:250,Y:500},
                {_width:1400,_height:30,X:600,Y:700},
                {_width:50,_height:50,X:750,Y:665, _autoJumpForce:2000}
              ],
    _player:{X:200,
             Y:0}
}