///////////////////////////////////
// Main song
///////////////////////////////////
game.songs.mainSong.config = {"_str": [0,0,1],"_p": [ {"_b": [["D2",2,"D2",2],["G2",2,"G2",2],["C2",2,"C2",2],["A2",2,"A2",2]],"_s": [[0,1,2,2],[3,0,1,1]]},{"_b": [["D4",4],["G4",4],["C4",4],["A4",4]],"_s": [[0,1,2,2],[3,0,1,1]]}]}
game.songs.mainSong.playSongElectricPiano = function() {

    // Restart mge sequencer
    mge.sequencer.stop()
    mge.sequencer.reset()

    // Create the orchestra (list of instruments)
    let orchestra = []
    orchestra.push(game.instruments.electricPiano )
    orchestra.push(game.instruments.electricPiano )

    // Create the mix
    let mix = [1,0.9]

    // Define the tempo
    let bpm = 120

    // And finally play the song
    game.songs.mainSong.play(bpm,orchestra,mix)
}    