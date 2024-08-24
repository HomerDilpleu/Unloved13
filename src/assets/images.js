game.images.init = function () {
    /////////////////////////
    // CERATE AND LOAD IMAGES
    /////////////////////////
    game.images.logoDilpleu = mge.image.create()
    game.images.logoDilpleu.config = {"_s":{"_w":400,"_h":400},"_p":[{"_fs":["C","#a301e6"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["M","60","170"],["Q","75","70","200","60"],["Q","317","70","350","170"],["Q","310","130","280","165"],["Q","240","130","205","165"],["Q","170","130","135","165"],["Q","96","130","60","170"]],"_t":[8,8,8,"","","","",""]},{"_fs":["N",""],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["M","205","165"],["L","205","275"],["M","60","193"],["Q","100","191","105","230"],["Q","100","268","60","266"],["L","60","193"],["M","153","215"],["Q","144","281","167","275"],["M","185","355"],["L","185","291"],["Q","223","287","220","310"],["Q","223","335","185","330"],["M","315","254"],["Q","312","293","330","293"],["Q","354","293","350","255"]],"_t":[8,8,8,"","","","",""]},{"_fs":["N",""],"_ss":["#a301e6","5","round","round"],"_gp":[],"_c":[["M","120","275"],["Q","111","312","135","310"],["M","245","250"],["Q","239","314","260","310"],["M","295","250"],["Q","264","251","262","233"],["Q","264","210","282","210"],["Q","305","210","303","232"],["L","263","232"],["M","120","260"],["C","120","260","2"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.logoDilpleu.scale = 0.3
    game.images.logoDilpleu.load()

    game.images.playButton = mge.image.create()
    game.images.playButton.config = {"_s":{"_w":200,"_h":100},"_p":[{"_fs":["LG","0","0","0","12"],"_ss":["#0b3956","3","round","round"],"_gp":[[0,"#f7f7f7"],[1,"#2678ab"]],"_c":[["R","0","0","200","100"]]},{"_fs":["C","#0c3b59"],"_ss":["#0c3b59","1","round","round"],"_gp":[],"_c":[["M","0","0"]],"_t":["100","54","50","normal","Arial","center","middle","PLAY"]}]}
    game.images.playButton.load()

    game.images.playerBody = mge.image.create()
    game.images.playerBody.config = {"_s":{"_w":300,"_h":350},"_p":[{"_fs":["RG","110","175","0","150","175","133"],"_ss":["#cb5252","5","round","round"],"_gp":[[0,"#f5c6c6"],[1,"#e66465"]],"_c":[["M","15","124"],["Q","31","72","73","70"],["Q","118","72","113","110"],["L","111","212"],["L","117","213"],["Q","122","183","135","170"],["Q","122","168","115","101"],["Q","115","69","157","66"],["L","241","62"],["Q","294","69","252","138"],["Q","340","237","242","280"],["Q","167","301","133","259"],["Q","124","290","77","286"],["Q","3","289","4","249"],["Q","3","226","38","210"],["L","37","157"],["Q","12","151","15","124"]],"_t":[8,8,8,"","","","",""]},{"_fs":["N",""],"_ss":["#b64343","15","round","round"],"_gp":[],"_c":[["M","51","126"],["L","77","107"],["L","73","247"],["M","42","249"],["L","101","246"],["M","160","143"],["L","154","103"],["L","234","98"],["L","191","163"],["Q","269","161","252","228"],["Q","201","284","159","227"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.playerBody.scale = 0.2
    game.images.playerBody.load()

    game.images.openEye = mge.image.create()
    game.images.openEye.config = {"_s":{"_w":130,"_h":140},"_p":[{"_fs":["C","#ffffff"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["C","60","70","45"],["M","75","25"],["Q","80","16","102","11"],["M","85","32"],["Q","86","25","108","21"],["M","92","38"],["Q","100","33","114","34"]],"_t":[8,8,8,"","","","",""]},{"_fs":["C","#000000"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["C","45","80","15"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.openEye.scale = 0.2
    game.images.openEye.load()

    game.images.closeEye = mge.image.create()
    game.images.closeEye.config = {"_s":{"_w":130,"_h":140},"_p":[{"_fs":["C","#ffffff"],"_ss":["#000000","5","round","round"],"_gp":[],"_c":[["C","60","70","45"],["M","25","100"],["Q","11","99","5","110"],["M","35","110"],["Q","19","111","12","125"],["M","50","115"],["Q","40","114","35","130"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.closeEye.scale = 0.2
    game.images.closeEye.load()

    game.images.legsIdle = mge.image.create()
    game.images.legsIdle.config = {"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","30","31","32","68"],["L","14","66"],["M","98","3"],["Q","103","31","96","67"],["L","117","64"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.legsIdle.scale = 0.2
    game.images.legsIdle.load()

    game.images.legsWalk1 = mge.image.create()
    game.images.legsWalk1.config = {"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","34","31","32","68"],["L","51","66"],["M","98","3"],["Q","132","31","92","55"],["L","109","65"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.legsWalk1.scale = 0.2
    game.images.legsWalk1.load()

    game.images.legsWalk2 = mge.image.create()
    game.images.legsWalk2.config = {"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","24","31","13","65"],["L","30","69"],["M","98","3"],["Q","103","31","108","67"],["L","119","64"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.legsWalk2.scale = 0.2
    game.images.legsWalk2.load()

    game.images.legsWalk3 = mge.image.create()
    game.images.legsWalk3.config = {"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","61","24","19","56"],["L","36","64"],["M","98","3"],["Q","99","31","97","69"],["L","114","69"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.legsWalk3.scale = 0.2
    game.images.legsWalk3.load()

    game.images.legsWalk4 = mge.image.create()
    game.images.legsWalk4.config = {"_s":{"_w":130,"_h":80},"_p":[{"_fs":["N",""],"_ss":["#000000","20","round","round"],"_gp":[],"_c":[["M","35","0"],["Q","39","24","48","71"],["L","62","66"],["M","97","3"],["Q","93","31","89","59"],["L","103","69"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.legsWalk4.scale = 0.2
    game.images.legsWalk4.load()

    game.images.level1BlockDiv = mge.image.create()
    game.images.level1BlockDiv.config = {"_s":{"_w":30,"_h":30},"_p":[{"_fs":["RG","15","15","0","15","15","15"],"_ss":["#390052","0","round","round"],"_gp":[[0,"#9974ae"],[1,"#582970"]],"_c":[["R","0","0","30","30"]],"_t":[8,8,8,"","","","",""]},{"_fs":["N",""],"_ss":["#ccafdf","2","round","round"],"_gp":[],"_c":[["M","7","15"],["L","23","15"],["M","15","8"],["C","15","8","1"],["M","15","22"],["C","15","22","1"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.level1BlockDiv.load()

    game.images.level1BlockGreat = mge.image.create()
    game.images.level1BlockGreat.config = {"_s":{"_w":90,"_h":90},"_p":[{"_fs":["RG","45","45","0","45","45","45"],"_ss":["#390052","0","round","round"],"_gp":[[0,"#9974ae"],[1,"#582970"]],"_c":[["R","0","0","90","90"]],"_t":[8,8,8,"","","","",""]},{"_fs":["N",""],"_ss":["#ccafdf","3","round","round"],"_gp":[],"_c":[["M","36","28"],["L","56","45"],["L","34","62"],["M","39","66"],["L","59","51"],["M","15","22"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.level1BlockGreat.load()

    game.images.level1Background1 = mge.image.create()
    game.images.level1Background1.config = {"_s":{"_w":1300,"_h":750},"_p":[{"_fs":["LG","0","0","0","750"],"_ss":["#000000","1","round","round"],"_gp":[[0,"#ccafdf"],[1,"#ffffff"]],"_c":[["R","0","0","1300","750"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.level1Background1.load()

    game.images.level1Background2 = mge.image.create()
    game.images.level1Background2.config = {"_s":{"_w":1300,"_h":750},"_p":[{"_fs":["C","#c8a2e2"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","0","375"],["L","250","300"],["L","1000","450"],["L","1300","375"],["L","1300","750"],["L","0","750"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.level1Background2.load()

    game.images.level1Background3 = mge.image.create()
    game.images.level1Background3.config = {"_s":{"_w":1300,"_h":750},"_p":[{"_fs":["C","#a26ac8"],"_ss":["#000000","0","round","round"],"_gp":[],"_c":[["M","0","500"],["L","131","600"],["L","1000","400"],["L","1300","500"],["L","1300","750"],["L","0","750"]],"_t":[8,8,8,"","","","",""]}]}
    game.images.level1Background3.load()

    /////////////////////////
    // CREATE PATTERNS
    /////////////////////////
    game.patterns.level1BlockDiv = mge._canvas._renderContext.createPattern(game.images.level1BlockDiv._bitmap, 'repeat')
    game.patterns.level1BlockGreat = mge._canvas._renderContext.createPattern(game.images.level1BlockGreat._bitmap, 'repeat')
    game.patterns.level1Background1 = mge._canvas._renderContext.createPattern(game.images.level1Background1._bitmap, 'repeat')
    game.patterns.level1Background2 = mge._canvas._renderContext.createPattern(game.images.level1Background2._bitmap, 'repeat')
    game.patterns.level1Background3 = mge._canvas._renderContext.createPattern(game.images.level1Background3._bitmap, 'repeat')

}

