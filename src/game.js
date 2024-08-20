// Game description
game = {
  // Structure of the game
  state: 'boot',
  scenes: {
    boot : {},
    main : {}
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
    pltf1: mge.image.create()
  },
  animations:{},
  sprites:{
    logoDilpleu: mge.game.createSprite(),
    playButton: mge.game.createSprite(),
    platform: mge.game.createSprite(),
    player: mge.game.createSprite(),
    eye: mge.game.createSprite(),
    legs: mge.game.createSprite(),
    numbers: mge.game.createSprite()
  },
  variables:{
    camX:0,
    camY:0,
    camMaxOffsetX:300,
    camMaxOffsetY:100,
    numberWidth:60,
    numberHeight:70,
    platformMessage:[]
  },
  const:{
    gravity:5000
  },
  instruments:{},
  songs:{
    mainSong: mge.song.create()
  },
  utils:{},
  levels:{}

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