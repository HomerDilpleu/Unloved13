game.levels.initLevel = function (_level) {

    // Shortcuts
    let _player = game.sprites.player
    
    // Create platforms
    game.sprites.platform.cloneDeleteAll()
    for (let _pltf of _level._platforms) {
        game.sprites.platform.clone(_pltf)
      }

    // Initialise player  
    _player.X = _level._player.X
    _player.Y = _level._player.Y

}

game.levels.level1 = {
    _platforms:[
        {_width:30,_height:5000,X:15,Y:2500},
        {_width:5000,_height:30,X:2500,Y:5015},
        {_width:30,_height:2500,X:4985,Y:3750},
        {_width:500,_height:30,X:250,Y:500},
        {_width:30,_height:500,X:500,Y:735},
        {_width:500,_height:30,X:750,Y:700},
        {_width:500,_height:30,X:1750,Y:900}
    ],
    _player:{X:300,
             Y:0
        }
}