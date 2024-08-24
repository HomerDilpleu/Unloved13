// Game description
game = {
  // Structure of the game
  state: 'boot',
  scenes: {
    boot : {},
    main : {},
    cinematic : {}
  },
  images:{
    logoDilpleu: mge.image.create(),
    playButton: mge.image.create(),
    playerBody: mge.image.create(),
    openEye: mge.image.create(),
    closeEye: mge.image.create(),
    legsIdle: mge.image.create(),
    legsWalk1: mge.image.create(),
    legsWalk2: mge.image.create(),
    legsWalk3: mge.image.create(),
    legsWalk4: mge.image.create(),
    level1BlockDiv: mge.image.create(),
    level1BlockGreat: mge.image.create(),
    level1Background1: mge.image.create(),
    level1Background2: mge.image.create(),
    level1Background3: mge.image.create()
  },
  animations:{},
  patterns:{},
  sprites:{
    logoDilpleu: mge.game.createSprite(),
    playButton: mge.game.createSprite(),
    platform: mge.game.createSprite(),
    player: mge.game.createSprite(),
    eye: mge.game.createSprite(),
    legs: mge.game.createSprite(),
    numbers: mge.game.createSprite(),
    background: mge.game.createSprite(),
    textBox: mge.game.createSprite()
  },
  variables:{
    // Settings
    camMaxOffsetX:200,
    camMaxOffsetY:100,
    numberWidth:60,
    numberHeight:70,
    gravity:5000,
    // Initialisation
    curlevel:0,
    camX:0,
    camY:0,
    messages:[],
    victoryPtlfId:'1',
    victoryPtlfBox:{xMin:0,xMax:0,yMin:0,yMax:0},
    victoryNumId:'1',
    victoryNumBox:{xMin:10,xMax:10,yMin:10,yMax:10}
  },
  instruments:{},
  songs:{
    mainSong: mge.song.create()
  },
  utils:{},
  levels:[]

}

// Remove "Loading" div and start the game
window.addEventListener("load", (event) => {
  let loading = document.getElementById("loading")
  loading.remove()
  mge.game.width = 1280
  mge.game.height = 720
  mge.game.start(game.scenes.boot)
}
)