game.sprites.particle.generator = function(_param) {
    for (let i=0; i < _param._nbParticles; i++) {
        let _config = {
            x:game.utils.getRandomInteger(_param._xMin,_param._xMax),
            y:game.utils.getRandomInteger(_param._yMin,_param._yMax),
            size:game.utils.getRandomInteger(_param._sizeMin,_param._sizeMax),
            Vx:game.utils.getRandomInteger(_param._vxMin,_param._vxMax),
            Vy:game.utils.getRandomInteger(_param._vyMin,_param._vyMax),
            fillStyle:_param._fillStyle,
            gravity:_param._gravity
        }
        game.sprites.particle.init(_config)
      }
}


game.sprites.particle.init = function(_config) {
    let _clone = game.sprites.particle.cloneCreate()
    _clone.x=_config.x
    _clone.y=_config.y
    _clone.width=_config.size
    _clone.height=_config.size
    _clone.Vx=_config.Vx
    _clone.Vy=_config.Vy
    _clone.fillStyle=_config.fillStyle
    _clone.gravity=_config.gravity
    return _clone
}

game.sprites.particle.update = function() {
    this.Vy+=this.gravity
    this.x+=this.Vx
    this.y+=this.Vy
}

game.sprites.particle.drawFunction = function (ctx) {
    ctx.fillStyle = this.fillStyle
    ctx.fillRect(0,0,this.width,this.height)
}