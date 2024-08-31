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
        _backgrounds:[{_id:'B',_width:5000,_height:1500,X:3000,Y:-600,_scrollRatio:0.5,_fillStyle:game.patterns.violetBkg1},
                      {_id:'C',_width:7000,_height:1500,X:3000,Y:-510,_scrollRatio:0.75,_fillStyle:game.patterns.violetBkg2},
                      {_id:'D',_width:200,_height:100,X:2400,Y:-48,_scrollRatio:1,_image:game.images.numberLand},
                      {_id:'E',_width:1000,_height:200,X:330,Y:-320,_scrollRatio:1,_fillStyle:'#a26ac8'}],
        _platforms:[{_id:'1',_width:3900,_height:300,X:0,Y:0,_fillStyle:'#582970'},
                    {_id:'1bis',_width:600,_height:30,X:1830,Y:0,_actionable:{_message:'TEXT_BOX:HI 13, WELCOME TO NUMBERLAND!:640:550'}},
                    {_id:'2',_width:570,_height:2700,X:3300,Y:-2700,_fillStyle:'#582970'},
                    {_id:'3',_width:1800,_height:90,X:0,Y:-90,_fillStyle:'#582970',_radiusStyle:[0,10]},
                    {_id:'4',_width:1440,_height:180,X:0,Y:-270,_fillStyle:'#582970',_radiusStyle:[0,10]},
                    {_id:'4bis',_width:360,_height:30,X:400,Y:-270},
                    {_id:'5',_width:180,_height:30,X:1900,Y:-200,_fillStyle:game.patterns.violetBlockCircle,_radiusStyle:10},
                    {_id:'6',_width:180,_height:30,X:1620,Y:-310,_fillStyle:game.patterns.violetBlockCircle,_radiusStyle:10},
                    {_id:'7',_width:210,_height:30,X:1310,Y:-420,_fillStyle:game.patterns.violetBlockCircle,_radiusStyle:10},
                    {_id:'7bis',_width:150,_height:25,X:1310,Y:-420,_actionable:{_message:'NUM_RUN:56'}},
                    {_id:'7ter',_width:150,_height:25,X:1310,Y:-420,_actionable:{_message:'TEXT_BOX:IT SEEMS NUMBERS ARE AFRAID WHEN THEY SEE YOU:640:150'}},
                    {_id:'8',_width:30,_height:160,X:820,Y:-270,_fillStyle:'#582970',_movesTo:{X:820,Y:-400,_velocityX:0,_velocityY:-1000}},
                    {_id:'9',_width:1000,_height:30,X:-145,Y:-430,_fillStyle:game.patterns.violetBlockCircle,_strokeStyle:'#582970',_radiusStyle:[0,10,10,0]},
                    {_id:'10',_width:180,_height:30,X:1000,Y:-490,_fillStyle:game.patterns.violetBlockCircle,_radiusStyle:10},
                    {_id:'11',_width:990,_height:600,X:-510,Y:-1000,_fillStyle:game.patterns.violetBlock,_strokeStyle:'#582970'},
                    {_id:'12',_width:150,_height:30,X:550,Y:-640,_fillStyle:game.patterns.violetBlockCircle,_radiusStyle:10},
                    {_id:'12bis',_width:90,_height:10,X:582,Y:-610,_fillStyle:'#d10c0c',_actionable:{_message:'PLTF_DESTROY:8'},_radiusStyle:[0,0,10,10]}],
        _player:{X:3000,Y:-100},
        _numbers:[{_id:'56',X:1400,Y:-306,
                  _Xmin:1300,_Xmax:1400,_velocityX:50,
                  _runX:820, _runVX:-500, _message:'PLTF_MOVE:8',
                  _newXmin:500, _newXmax:750, _newVelocityX:50,
                  _bodyFill:'#582970',_textFill:'#582970'}],
        _victory:{_plt:'4bis',_num:'Player'},
        _camera:{X:3000,Y:-100}})
        
  // LEVLEL2
  game.levels.push({
    _backgrounds:[{_id:'A',_width:5000,_height:7500,X:0,Y:0,_scrollRatio:1,_fillStyle:'#a26ac8'}],
    _platforms:[
                {_id:'1bis',_width:500,_height:30,X:800,Y:100,_actionable:{_message:'TEXT_BOX:OFFER THIS CUPCAKE TO 37 TO BECOME FRIENDS:640:50'}},       
                {_id:'10bis',_width:605,_height:3000,X:-630,Y:-605,_fillStyle:'#582970'},
                {_id:'1',_width:500,_height:990,X:800,Y:100,_fillStyle:game.patterns.violetBlock,_strokeStyle:'#582970'},
                {_id:'2',_width:450,_height:30,X:-50,Y:-100,_fillStyle:'#582970'},
                {_id:'3',_width:30,_height:1146,X:435,Y:-250,_fillStyle:'#582970'},
                {_id:'4',_width:495,_height:795,X:-60,Y:100,_fillStyle:'#582970',_fillStyle:game.patterns.violetBlock,_strokeStyle:'#582970'},
                {_id:'5',_width:40,_height:40,X:300,Y:-139,_image:game.images.cake,_pushable:{_Xmin:80,_Xmax:500,_Xfall:418,_Yfall:81,_fallSide:'right'}},
                {_id:'6',_width:1350,_height:300,X:-45,Y:1300,_fillStyle:game.patterns.violetBlock},
                {_id:'7',_width:500,_height:3000,X:1290,Y:-605,_fillStyle:game.patterns.violetBlock},
                {_id:'7bis',_width:5,_height:710,X:1287,Y:-610,_fillStyle:'#582970'},
                {_id:'7ter',_width:5,_height:210,X:1287,Y:1090,_fillStyle:'#582970'},
                {_id:'8',_width:30,_height:404,X:435,Y:896,_fillStyle:'#582970'},
                {_id:'9',_width:150,_height:15,X:970,Y:1091,_fillStyle:'#d10c0c',_actionable:{_message:'PLTF_DESTROY:8'},_radiusStyle:[0,0,10,10]},
                {_id:'10',_width:600,_height:3000,X:-630,Y:-605,_fillStyle:game.patterns.violetBlock},
                {_id:'11',_width:50,_height:50,X:150,Y:1250,_image:game.images.jump,_pushable:{_Xmin:80,_Xmax:1200,_Xfall:1300,_Yfall:1250,_fallSide:'right'},_autoJumpForce:4000},
                {_id:'12',_width:5,_height:992,X:800,Y:99,_fillStyle:'#582970'},
                {_id:'13',_width:120,_height:60,X:660,Y:375,_fillStyle:game.patterns.violetBlockCircle,_radiusStyle:10},
                {_id:'14',_width:120,_height:60,X:570,Y:575,_fillStyle:game.patterns.violetBlockCircle,_radiusStyle:10},
                {_id:'15',_width:120,_height:60,X:660,Y:775,_fillStyle:game.patterns.violetBlockCircle,_radiusStyle:10},
                {_id:'16',_width:120,_height:60,X:570,Y:975,_fillStyle:game.patterns.violetBlockCircle,_radiusStyle:10}],
    _player:{X:900,Y:0},
    _numbers:[{_id:'37',X:300,Y:65,
               _Xmin:250,_Xmax:410,_velocityX:50,
               _bodyFill:'#582970',_textFill:'#582970'}],
    _victory:{_plt:'5',_num:'37'},
    _camera:{X:700,Y:300}})
  // LEVEL 3
  }
