game.levels.initLevel = function (_level) {

    // Delete messages
    game.variables.messages=[]

    // Create platforms
    game.sprites.platform.cloneDeleteAll()
    for (let _pltf of _level._platforms) {
        game.sprites.platform.init(_pltf)
      }

    // Create numbers
    game.sprites.numbers.cloneDeleteAll()
    for (let _num of _level._numbers) {
        game.sprites.numbers.init(_num)
      }

    // Create backgrounds
    game.sprites.background.cloneDeleteAll()
    for (let _bkg of _level._backgrounds) {
        game.sprites.background.init(_bkg,_level._camera)
      }

    // Initialise player  
    game.sprites.player.X = _level._player.X
    game.sprites.player.Y = _level._player.Y

    // Initialise camera 
    game.variables.camX = _level._camera.X
    game.variables.camY = _level._camera.Y

    // Setup victory conditions
    game.variables.victoryPtlfId = _level._victory._plt
    game.variables.victoryNumId =  _level._victory._num

}


game.levels.createLevels = function () {
  // LEVEL 1
  game.levels.push({
        _backgrounds:[{_id:'1',_width:1300,_height:750,X:3000,Y:-100,_scrollRatio:0,_fillStyle:game.patterns.violetBkg1},
                      {_id:'2',_width:5000,_height:1500,X:3000,Y:-550,_scrollRatio:0.5,_fillStyle:game.patterns.violetBkg2},
                      {_id:'3',_width:7000,_height:1500,X:3000,Y:-500,_scrollRatio:0.75,_fillStyle:game.patterns.violetBkg3},
                      {_id:'4',_width:200,_height:100,X:2400,Y:-48,_scrollRatio:1,_image:game.images.numberLand}],
        _platforms:[{_id:'1',_width:3900,_height:300,X:0,Y:0,_fillStyle:game.patterns.violetBlockLosange},
            {_id:'1bis',_width:600,_height:30,X:1830,Y:0,_actionable:{_message:'TEXT_BOX:HI 13, WELCOME TO NUMBERLAND!:640:550'}},
                    {_id:'2',_width:570,_height:2700,X:3300,Y:-2700,_fillStyle:game.patterns.violetBlockLosange},
                    {_id:'3',_width:1800,_height:90,X:0,Y:-90,_fillStyle:game.patterns.violetBlockLosange,_radiusStyle:[0,10]},
                    {_id:'4',_width:1440,_height:180,X:0,Y:-270,_fillStyle:game.patterns.violetBlockLosange,_radiusStyle:[0,10]},
                    {_id:'4bis',_width:360,_height:30,X:400,Y:-270,_fillStyle:'black'},
                    {_id:'5',_width:180,_height:30,X:1900,Y:-200,_fillStyle:game.patterns.violetBlockLosange,_radiusStyle:10},
                    {_id:'6',_width:180,_height:30,X:1620,Y:-310,_fillStyle:game.patterns.violetBlockLosange,_radiusStyle:10},
                    {_id:'7',_width:210,_height:30,X:1310,Y:-420,_fillStyle:game.patterns.violetBlockLosange,_radiusStyle:10},
                    {_id:'7bis',_width:150,_height:25,X:1310,Y:-420,_actionable:{_message:'NUM_DETECTED:56'}},
                    {_id:'7ter',_width:150,_height:25,X:1310,Y:-420,_actionable:{_message:'TEXT_BOX:IT SEEMS NUMBERS ARE AFRAID WHEN THEY SEE YOU:640:150'}},
                    {_id:'8',_width:30,_height:160,X:850,Y:-270,_fillStyle:'#582970',_movesTo:{X:850,Y:-430,_velocityX:0,_velocityY:-1000}},
                    {_id:'9',_width:1000,_height:30,X:-150,Y:-430,_fillStyle:'red'},
                    {_id:'10',_width:180,_height:30,X:1000,Y:-490,_fillStyle:'blue'},
                    {_id:'11',_width:1000,_height:300,X:-500,Y:-730,_fillStyle:'green'},
                    {_id:'12',_width:180,_height:30,X:500,Y:-650,_fillStyle:'yellow'},
                    {_id:'12bis',_width:90,_height:10,X:545,Y:-620,_fillStyle:'red',_actionable:{_message:'PLTF_DESTROY:8'}}],
        _player:{X:3000,Y:-100},
        _numbers:[{_id:'56',X:1400,Y:-306,
                  _Xmin:1300,_Xmax:1420,_velocityX:50,
                  _Xescape:800,_velocityEscape:-400,
                  _Yfall:-305,_velocityFall:200,_fallMessage:'PLTF_MOVE:8',
                  _XminFallen:-100000,_XmaxFallen:800, _velocityXFallen:50,
                  _textNormal:'',_textEscape:'FEAR!',_textFallen:'',
                  _bodyFill:'#390052',_textFill:'#390052'}],
        _victory:{_plt:'4bis',_num:'Player'},
        _camera:{X:3000,Y:-100}})
        
  // LEVLEL2
  game.levels.push({
    _backgrounds:[],
    _platforms:[{_id:'11',_width:2700,_height:270,X:0,Y:0,_fillStyle:game.patterns.level1BlockGreat},
                {_id:'5',_width:180,_height:30,X:1900,Y:-200,_fillStyle:game.patterns.level1BlockDiv,_radiusStyle:10},
                {_id:'10',_width:40,_height:40,X:1350,Y:-460,_fillStyle:'#417029',_pushable:{_Xmin:900,_Xmax:1400,_Xfall:1300,_Yfall:-290,_fallSide:'left'}}],
    _player:{X:2200,Y:-100},
    _numbers:[{_id:'56',X:1400,Y:-306,
              _Xmin:1200,_Xmax:1420,_velocityX:100,
              _Xescape:800,
              _bodyFill:'#390052',_textFill:'#390052'}],
    _victory:{_plt:'5',_num:'Player'},
    _camera:{X:2000,Y:-100}})
  // LEVEL 3
  }
