game.animations.init = function() {
    game.animations.eye = Array(20).fill(game.images.openEye)
    game.animations.eye.push(game.images.closeEye)

    game.animations.legsIdle=[game.images.legsIdle]

    game.animations.legsWalk=[game.images.legsWalk1,game.images.legsWalk2,game.images.legsWalk3,game.images.legsWalk4]
}

