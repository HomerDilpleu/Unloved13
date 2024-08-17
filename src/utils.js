game.utils.checkColisionBox = function (_box1, _box2) {
    if (!(_box1.xMin>_box2.Xmax || _box2.Xmin>_box1.xMax || _box1.yMin>_box2.Ymax || _box2.Ymin>_box1.yMax)) {return true} 
}