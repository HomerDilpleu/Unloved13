game.levels.initLevel = function (_level) {

    // Create platforms
    game.sprites.platform.cloneDeleteAll()
    for (let _pltf of _level._platforms) {
        game.sprites.platform.init(_pltf)
      }

    // Delete platform message
    game.variables.platformMessage=[]

    // Initialise player  
    game.sprites.player.X = _level._player.X
    game.sprites.player.Y = _level._player.Y

    // Create numbers
    game.sprites.numbers.cloneDeleteAll()
    for (let _num of _level._numbers) {
        game.sprites.numbers.init(_num)
      }

    // Initialise camera 
    game.variables.camX = _level._camera.X
    game.variables.camY = _level._camera.Y

}

game.levels.createLevels = function () {
  // LEVEL 1
  game.levels.level1 = {
    _platforms:[{_id:'1',_width:2700,_height:270,X:0,Y:0,_fillStyle:game.patterns.level1BlockGreat},
                {_id:'2',_width:270,_height:2700,X:2430,Y:-2700,_fillStyle:game.patterns.level1BlockGreat},
                {_id:'3',_width:1800,_height:90,X:0,Y:-90,_fillStyle:game.patterns.level1BlockGreat},
                {_id:'4',_width:1440,_height:270,X:0,Y:-360,_fillStyle:game.patterns.level1BlockGreat},
                {_id:'5',_width:240,_height:30,X:1900,Y:-220,_fillStyle:game.patterns.level1BlockDiv},
                {_id:'6',_width:90,_height:30,X:1720,Y:-345,_fillStyle:game.patterns.level1BlockDiv},
                {_id:'7',_width:150,_height:30,X:1600,Y:-345,_fillStyle:game.patterns.level1BlockDiv}
    ],
    _player:{X:2200,
             Y:-100},
    _numbers:[{_id:'56',X:1400,Y:-396,_Xmin:1200,_Xmax:1420,_velocityX:-100}],
    _camera:{X:2000,
             Y:-100}
  }
}

/*

  game.levels.level1 = {
    _platforms:[{_id:'1',_width:50,_height:1000,X:-120,Y:210,_fillStyle:'#F0C4B5'},
                {_id:'2',_width:30,_height:30,X:400,Y:470,_fillStyle:'#F0C4B5',_pushable:{_Xmin:400,_Xmax:1000,_Xfall:535,_Yfall:660,_fallSide:'right'}, _autoJumpForce:2000},
                {_id:'3',_width:50,_height:50,X:100,Y:460,_fillStyle:'#F0C4B5',_pushable:{_Xmin:-100,_Xmax:300,_Xfall:-35,_Yfall:660,_fallSide:'left'}},
                {_id:'4',_width:600,_height:30,X:250,Y:500,_fillStyle:game.patterns.level1BlockDiv},
                {_id:'5',_width:1400,_height:180,X:600,Y:700,_fillStyle:game.patterns.level1BlockGreat},
                {_id:'6',_width:50,_height:50,X:750,Y:660,_fillStyle:'#F0C4B5', _autoJumpForce:2000},
                {_id:'7',_width:50,_height:50,X:900,Y:660,_fillStyle:'#E4080A',_actionable:{_message:'DESTROY:1',_fillStyle:'#54E41C',_image:''}}],
    _player:{X:600,
             Y:300},
    _numbers:[{_id:'5',X:200,Y:650,_Xmin:100,_Xmax:300,_velocityX:-100},
              {_id:'7',X:400,Y:650,_Xmin:300,_Xmax:500,_velocityX:100},
              {_id:'12',X:700,Y:650,_Xmin:600,_Xmax:800,_velocityX:100}],
    _camera:{X:200,
             Y:0}
  }


game.levels.level1 = {
  _platforms:[{_id:'1',_width:50,_height:1000,X:-120,Y:210,_image:game.images.pltf1},
              {_id:'2',_width:50,_height:50,X:400,Y:460,_fillStyle:'#F0C4B5',_pushable:{_Xmin:400,_Xmax:1000,_Xfall:535,_Yfall:660,_fallSide:'right'}, _autoJumpForce:2000},
              {_id:'3',_width:50,_height:50,X:100,Y:460,_fillStyle:'#F0C4B5',_pushable:{_Xmin:-100,_Xmax:300,_Xfall:-35,_Yfall:660,_fallSide:'left'}},
              {_id:'4',_width:500,_height:30,X:250,Y:500,_fillStyle:'#522617'},
              {_id:'5',_width:1400,_height:30,X:600,Y:700,_fillStyle:game.patterns.test},
              {_id:'6',_width:50,_height:50,X:750,Y:660,_fillStyle:'#F0C4B5', _autoJumpForce:2000},
              {_id:'7',_width:50,_height:50,X:900,Y:660,_fillStyle:'#E4080A',_actionable:{_message:'DESTROY:1',_fillStyle:'#54E41C',_image:''}}],
  _player:{X:200,
           Y:300},
  _numbers:[{_id:'5',X:200,Y:650,_Xmin:100,_Xmax:300,_velocityX:-100},
            {_id:'7',X:400,Y:650,_Xmin:300,_Xmax:500,_velocityX:100},
            {_id:'12',X:700,Y:650,_Xmin:600,_Xmax:800,_velocityX:100}],
  _camera:{X:200,
           Y:0}
}*/