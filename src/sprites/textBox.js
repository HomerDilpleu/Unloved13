game.sprites.textBox.init = function() {
    
    // Init sprite properties
    this.width = 800
    this.height = 50
    this.x = mge.game.width/2
    this.y = this.height/2
    this._text = ''
}

game.sprites.textBox.drawFunction = function (ctx) {
    if (this._text != '') {
        ctx.fillStyle = '#390052'
        ctx.fillRect(0,0,this.width,this.height)
        ctx.font = '24px serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = '#ccafdf'
        ctx.fillText(this._text, this.width/2, this.height/2)
    }
}