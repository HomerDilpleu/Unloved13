game.sprites.textBox.init = function() {
    
    // Init sprite properties
    this.width = 800
    this.height = 50
    this.x = mge.game.width/2
    this.y = this.height/2 + 5
    this._text = ''
    this._lastText = ''
    this._lastChangeTime = Date.now()
}

game.sprites.textBox.drawFunction = function (ctx) {
    // Update last change time
    if (this._text != this._lastText) {
        this._lastChangeTime = Date.now()
        this._lastText = this._text
    }
    // Display text
    if (this._text != '' && Date.now()-this._lastChangeTime<4000) {
        // Box
        ctx.fillStyle = 'white'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillRect(0,0,this.width,this.height)
        ctx.strokeRect(0,0,this.width,this.height)
        // Text
        ctx.font = '24px serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = 'black'
        ctx.fillText(this._text, this.width/2, this.height/2)
        // Pi
        game.images.pi.draw(ctx)
    }
}