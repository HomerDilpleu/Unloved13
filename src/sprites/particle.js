game.sprites.particle.generator = function(_param) {
    for (let i=0; i < _param._nbParticles; i++) {
        let _config = {
            x:game.utils.getRandomInteger(_param._x*0.9,_param._x*1.1),
            y:game.utils.getRandomInteger(_param._y*0.9,_param._y*1.1),
            size:game.utils.getRandomInteger(_param._size*0.9,_param._size*1.1),
            Vx:game.utils.getRandomInteger(_param._vX*-1,_param._vX),
            Vy:game.utils.getRandomInteger(-10,0),
            fillStyle:game.utils.getRandomItem(_param._fillStyle)
        }
        game.sprites.particle.init(_config)
      }
}

game.sprites.particle.init = function(_config) {
    let c = game.sprites.particle.cloneCreate()
    c.x=_config.x
    c.y=_config.y
    c.w=_config.size
    c.h=_config.size
    c.Vx=_config.Vx
    c.Vy=_config.Vy
    c.fillStyle=_config.fillStyle
}

game.sprites.particle.update = function() {
    this.Vy+=1
    this.x+=this.Vx
    this.y+=this.Vy
}

game.sprites.particle.drawFunction = function (ctx) {
    ctx.fillStyle = this.fillStyle
    ctx.fillRect(0,0,this.w,this.h)
}