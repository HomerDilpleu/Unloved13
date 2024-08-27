game.utils.checkColisionBox = function (_box1, _box2) {
    if (!(_box1.xMin>_box2.xMax || _box2.xMin>_box1.xMax || _box1.yMin>_box2.yMax || _box2.yMin>_box1.yMax)) {return true} 
}

game.utils.getRandomInteger = function(min,max) {
    return Math.floor(Math.random() * (max - min) + min)
}