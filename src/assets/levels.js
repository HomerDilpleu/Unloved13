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
                    {_id:'1bis',_width:600,_height:30,X:1830,Y:0,_actionable:{_message:'TEXT_BOX:HI NUMBER 13!:640:550'}},
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
                  _newXmin:-400, _newXmax:-380, _newVelocityX:70,
                  _bodyFill:'#582970'}],
        _victory:{_plt:'4bis',_num:'Player'},
        _camera:{X:2800,Y:-300}})
        
  // LEVLEL2
  game.levels.push({
    _backgrounds:[{_id:'A',_width:5000,_height:7500,X:0,Y:0,_scrollRatio:1,_fillStyle:'#a26ac8'}],
    _platforms:[{_id:'1bis',_width:500,_height:30,X:800,Y:100,_actionable:{_message:'TEXT_BOX:OFFER THIS CUPCAKE TO 56 TO BECOME FRIENDS:640:50'}},       
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
    _numbers:[{_id:'56',X:300,Y:65,
               _Xmin:250,_Xmax:410,_velocityX:50,
               _bodyFill:'#582970'}],
    _victory:{_plt:'5',_num:'56'},
    _camera:{X:700,Y:300}})
    
    // LEVEL 3
    game.levels.push({
      _backgrounds:[{_id:'A',_width:5000,_height:1500,X:0,Y:3200,_scrollRatio:0.5,_fillStyle:game.patterns.violetBkg1},
                    {_id:'B',_width:7000,_height:1500,X:0,Y:3300,_scrollRatio:0.75,_fillStyle:game.patterns.violetBkg2},
                    {_id:'C',_width:1000,_height:200,X:300,Y:3700,_scrollRatio:1,_fillStyle:'#a26ac8'},
                    {_id:'D',_width:500,_height:1800,X:-200,Y:2700,_scrollRatio:1,_fillStyle:'#a26ac8'}],
      _platforms:[{_id:'1',_width:800,_height:30,X:0,Y:3600,_fillStyle:'#582970'},
                  {_id:'1.0',_width:1100,_height:30,X:-300,Y:3600,_actionable:{_message:'TEXT_BOX:NUMBER 72 IS STUCK HELP HIM ESCAPE!:640:50'}},
                  {_id:'1.1',_width:1100,_height:30,X:-300,Y:3600,_actionable:{_message:'PLTF_MOVE:4.1'}},
                  {_id:'1.2',_width:1100,_height:30,X:-300,Y:3600,_actionable:{_message:'PLTF_MOVE:4.2'}},
                  {_id:'1.3',_width:1100,_height:30,X:-300,Y:3600,_actionable:{_message:'PLTF_MOVE:4.3'}},
                  {_id:'1.4',_width:1100,_height:30,X:-300,Y:3600,_actionable:{_message:'PLTF_MOVE:4.4'}},
                  {_id:'1.5',_width:1100,_height:30,X:-300,Y:3600,_actionable:{_message:'PLTF_MOVE:4.5'}},
                  {_id:'1.6',_width:1100,_height:30,X:-300,Y:3600,_actionable:{_message:'PLTF_MOVE:4.6'}},
                  {_id:'2',_width:3000,_height:300,X:-300,Y:3800,_fillStyle:'#582970'},
                  {_id:'3',_width:200,_height:3000,X:0,Y:600,_fillStyle:'#582970'},
                  {_id:'4.1',_width:50,_height:60,X:8600,Y:3200,_fillStyle:'#775b86',_movesTo:{X:800,Y:3740,_velocityX:0,_velocityY:1500},_radiusStyle:[10,20,5,15]},
                  {_id:'4.2',_width:40,_height:60,X:820,Y:3000,_fillStyle:'#775b86',_movesTo:{X:820,Y:3680,_velocityX:0,_velocityY:1500},_radiusStyle:[5,15,10,10]},
                  {_id:'4.3',_width:60,_height:30,X:860,Y:3100,_fillStyle:'#775b86',_movesTo:{X:860,Y:3770,_velocityX:0,_velocityY:1500},_radiusStyle:[10,20,5,15]},
                  {_id:'4.4',_width:70,_height:80,X:880,Y:2900,_fillStyle:'#775b86',_movesTo:{X:880,Y:3690,_velocityX:0,_velocityY:1500},_radiusStyle:[15,20,5,10]},
                  {_id:'4.5',_width:50,_height:30,X:860,Y:2800,_fillStyle:'#775b86',_movesTo:{X:860,Y:3660,_velocityX:0,_velocityY:1500},_radiusStyle:[10,20,15,5]},
                  {_id:'4.6',_width:30,_height:30,X:810,Y:2600,_fillStyle:'#775b86',_movesTo:{X:810,Y:3650,_velocityX:0,_velocityY:1500},_radiusStyle:[20,10,5,15]},
                  {_id:'5',_width:40,_height:60,X:1110,Y:3740,_fillStyle:'#582970'},
                  {_id:'6',_width:50,_height:10,X:1105,Y:3739,_fillStyle:'#d10c0c',_radiusStyle:[10,10,0,0],_actionable:{_message:'PLTF_MOVE:7'}},
                  {_id:'6.1',_width:50,_height:10,X:1105,Y:3739,_actionable:{_message:'PLTF_DESTROY:4.1'}},
                  {_id:'6.2',_width:50,_height:10,X:1105,Y:3739,_actionable:{_message:'PLTF_DESTROY:4.2'}},
                  {_id:'6.3',_width:50,_height:10,X:1105,Y:3739,_actionable:{_message:'PLTF_DESTROY:4.3'}},
                  {_id:'6.4',_width:50,_height:10,X:1105,Y:3739,_actionable:{_message:'PLTF_DESTROY:4.4'}},
                  {_id:'6.5',_width:50,_height:10,X:1105,Y:3739,_actionable:{_message:'PLTF_DESTROY:4.5'}},
                  {_id:'6.6',_width:50,_height:10,X:1105,Y:3739,_actionable:{_message:'PLTF_DESTROY:4.6'}},
                  {_id:'7',_width:100,_height:60,X:750,Y:3750,_movesTo:{X:200,Y:3750,_velocityX:-250,_velocityY:0}},
                  {_id:'8',_width:140,_height:20,X:1060,Y:3680,_fillStyle:'#582970',_radiusStyle:[10,10,0,0]},
                  {_id:'9',_width:20,_height:100,X:1060,Y:3700,_fillStyle:'#582970'},
                  {_id:'9',_width:20,_height:100,X:1180,Y:3700,_fillStyle:'#582970'},
                  {_id:'11',_width:50,_height:50,X:1350,Y:3750,_image:game.images.jump,_autoJumpForce:2000},
                  {_id:'12',_width:50,_height:50,X:1540,Y:3450,_image:game.images.jump,_autoJumpForce:2000},
                  {_id:'13',_width:50,_height:50,X:1730,Y:3150,_image:game.images.jump,_autoJumpForce:2000},
                  {_id:'14',_width:50,_height:300,X:1540,Y:3500,_fillStyle:'#582970'},
                  {_id:'15',_width:190,_height:30,X:1590,Y:3580,_fillStyle:game.patterns.violetBlockCircle},
                  {_id:'16',_width:150,_height:10,X:1610,Y:3610,_fillStyle:'#d10c0c',_radiusStyle:[0,0,10,10],_actionable:{_message:'PLTF_DESTROY:8'}},
                  {_id:'17',_width:50,_height:400,X:1730,Y:3200,_fillStyle:'#582970'},
                  {_id:'18',_width:190,_height:30,X:1780,Y:3280,_fillStyle:game.patterns.violetBlockCircle},
                  {_id:'19',_width:50,_height:430,X:1950,Y:2880,_fillStyle:'#582970'},
                  {_id:'20',_width:50,_height:50,X:2300,Y:3750,_image:game.images.jump,_autoJumpForce:3200,_pushable:{_Xmin:1900,_Xmax:2400,_Xfall:10000,_Yfall:0,_fallSide:'right'}},
                  {_id:'21',_width:200,_height:3000,X:2500,Y:800,_fillStyle:'#582970'}],
      _player:{X:300,Y:3500},
      _numbers:[{_id:'72',X:400,Y:3765,
                _Xmin:300,_Xmax:600,_velocityX:50,
                _bodyFill:'#582970'}],
      _victory:{_plt:'7',_num:'72'},
      _camera:{X:700,Y:3700}})
    // LEVEL 4
  game.levels.push({
    _backgrounds:[{_id:'A',_width:6000,_height:7500,X:1000,Y:0,_scrollRatio:1,_fillStyle:game.patterns.violetBlockBright}],
    _platforms:[{_id:'16',_width:210,_height:30,X:2000,Y:3000,_fillStyle:game.patterns.violetBlockCircle,_radiusStyle:10,_movesTo:{X:1750,Y:3000,_velocityX:-50,_velocityY:0}},
                {_id:'1',_width:210,_height:30,X:2000,Y:3000,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'1bis',_width:210,_height:30,X:2000,Y:3000,_actionable:{_message:'TEXT_BOX:NUMBER 45 IS SCARED OF THE SPIDER. HELP HIM!:640:50'}},
                {_id:'2',_width:400,_height:30,X:2300,Y:2900,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'3',_width:30,_height:930,X:2510,Y:2400,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'4',_width:530,_height:30,X:2300,Y:3100,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'5',_width:90,_height:180,X:2650,Y:2920,_image:game.images.spider},
                {_id:'6',_width:210,_height:30,X:2000,Y:3200,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'7',_width:240,_height:30,X:2300,Y:3300,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'8',_width:500,_height:3300,X:2800,Y:540,_fillStyle:game.patterns.violetBlock},
                {_id:'9',_width:1630,_height:300,X:1195,Y:3525,_fillStyle:game.patterns.violetBlock},
                {_id:'10',_width:210,_height:30,X:2000,Y:3400,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'11',_width:210,_height:30,X:2000,Y:2800,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'12',_width:240,_height:30,X:2300,Y:2700,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'13',_width:240,_height:30,X:2300,Y:2500,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'14',_width:120,_height:10,X:2350,Y:2530,_fillStyle:'#d10c0c',_radiusStyle:[0,0,10,10],_actionable:{_message:'PLTF_MOVE:16'}},
                {_id:'17',_width:210,_height:30,X:1500,Y:3000,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'18',_width:210,_height:30,X:1200,Y:2912,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'19',_width:210,_height:30,X:1500,Y:2800,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'20',_width:210,_height:30,X:1200,Y:2701,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'21',_width:640,_height:30,X:1500,Y:2600,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'23',_width:210,_height:30,X:1200,Y:2506,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'22',_width:480,_height:3500,X:730,Y:600,_fillStyle:game.patterns.violetBlock},
                {_id:'24',_width:500,_height:30,X:1500,Y:2400,_fillStyle:'#582970',_radiusStyle:10},
                {_id:'25',_width:30,_height:120,X:1970,Y:2280,_fillStyle:'#a26ac8',_strokeStyle:'#582970',_radiusStyle:5,_pushable:{_Xmin:2015,_Xmax:2125,_Xfall:2020,_Yfall:2540,_fallSide:'right'}}],
    _player:{X:2100,Y:2930},
    _numbers:[{_id:'45',X:2600,Y:3065,
      _Xmin:2595,_Xmax:2605,_velocityX:60,
      _bodyFill:'#582970'}],
    _victory:{_plt:'5',_num:'Player'},
    _camera:{X:2300,Y:3200}})

    // LEVEL 5
game.levels.push({
  _backgrounds:[{_id:'A',_width:4300,_height:1800,X:800,Y:5,_scrollRatio:1,_fillStyle:game.patterns.violetBlockBright}],
  _platforms:[{_id:'1',_width:500,_height:30,X:100,Y:0,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'1.1',_width:500,_height:30,X:100,Y:0,_actionable:{_message:'TEXT_BOX:IT SEEMS THERE IS NOBODY TO HELP HERE:640:50'}},
              {_id:'2',_width:810,_height:30,X:600,Y:-120,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'2.1',_width:100,_height:10,X:1065,Y:-90,_fillStyle:'#d10c0c',_radiusStyle:[0,0,10,10],_actionable:{_message:'PLTF_DESTROY:4.1'}},
              {_id:'3',_width:1510,_height:30,X:-400,Y:-240,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'4',_width:30,_height:120,X:1100,Y:-240,_fillStyle:'#582970'},
              {_id:'4.1',_width:30,_height:200,X:1100,Y:-400,_fillStyle:'#582970'},
              {_id:'5',_width:700,_height:30,X:-600,Y:-120,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'6',_width:400,_height:30,X:-800,Y:0,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'7',_width:500,_height:30,X:-400,Y:120,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'8',_width:500,_height:30,X:600,Y:120,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'9',_width:30,_height:360,X:1400,Y:-120,_fillStyle:'#582970'},
              {_id:'10',_width:3000,_height:30,X:-800,Y:240,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'11',_width:900,_height:30,X:1400,Y:0,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'12',_width:30,_height:150,X:2200,Y:-120,_fillStyle:'#582970'},
              {_id:'13',_width:610,_height:30,X:1600,Y:-120,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'13.1',_width:600,_height:30,X:1600,Y:-120,_actionable:{_message:'TEXT_BOX:WHERE ARE THEY ALL?:640:50'}},
              {_id:'14',_width:600,_height:30,X:1900,Y:-240,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'15',_width:600,_height:30,X:1900,Y:120,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'16',_width:300,_height:30,X:2200,Y:360,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'17',_width:300,_height:30,X:1900,Y:480,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'18',_width:600,_height:30,X:1300,Y:360,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'19',_width:30,_height:150,X:1300,Y:360,_fillStyle:'#582970'},
              {_id:'20',_width:300,_height:30,X:1000,Y:480,_fillStyle:'#582970'},
              {_id:'21',_width:30,_height:150,X:1000,Y:480,_fillStyle:'#582970'},
              {_id:'22',_width:300,_height:30,X:700,Y:600,_fillStyle:'#582970'},
              {_id:'23',_width:30,_height:150,X:700,Y:600,_fillStyle:'#582970'},
              {_id:'24',_width:600,_height:30,X:1700,Y:600,_fillStyle:'#582970',_radiusStyle:10},
              {_id:'25',_width:3300,_height:300,X:-780,Y:725,_fillStyle:game.patterns.violetBlock},
              {_id:'26',_width:630,_height:1700,X:-1400,Y:-700,_fillStyle:game.patterns.violetBlock},
              {_id:'27',_width:600,_height:2000,X:2505,Y:-700,_fillStyle:game.patterns.violetBlock},
              {_id:'25.1',_width:250,_height:30,X:-190,Y:720,_actionable:{_message:'END'}},
              {_id:'25.2',_width:250,_height:30,X:-190,Y:720,_actionable:{_message:'TEXT_BOX:A PARTY FOR YOU LOVED 13!:640:50'}},
              {_id:'30',_width:50,_height:50,X:-600,Y:675,_image:game.images.jump}],
  _player:{X:400,Y:-100},
  _numbers:[{_id:'72',X:-210,Y:685,
            _Xmin:-500,_Xmax:-200,_velocityX:50,
            _bodyFill:'#582970'},
            {_id:'45',X:-300,Y:685,
            _Xmin:-500,_Xmax:-200,_velocityX:90,
            _bodyFill:'#582970'},
            {_id:'56',X:-400,Y:685,
            _Xmin:-500,_Xmax:-200,_velocityX:30,
            _bodyFill:'#582970'}],
  _victory:{_plt:'30',_num:'Player'},
  _camera:{X:400,Y:0}})


}
