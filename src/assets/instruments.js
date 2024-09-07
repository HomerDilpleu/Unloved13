game.instruments.kick = {
    play: function (_frequency, _startTime, _duration, _volume) {
        let _synthConfig = {volumeADSR: {a:0.01, d:0.4, s:0, r:0, minValue:0, maxValue: _volume},
                            oscType:'sine',
                            pitchADSR: {a:0.01, d:0.4, s:0, r:0, minValue:65, maxValue: 130}
                        }
        if (!isNaN(_frequency)) { 
            mge.audio.playSound(_synthConfig, 100, _startTime, _duration, _volume)
        }
    }
}

game.instruments.snare = {
    play: function (_frequency, _startTime, _duration, _volume) {
        let _synthConfigNoise = {volumeADSR: {a:0.01, d:0.3, s:0, r:0, minValue:0, maxValue: _volume},
                            oscType:'noise',
                            filterType:'highpass',
                            filterFreqADSR: {a:0.01, d:0.3, s:0, r:0, minValue:300, maxValue: 2000}
                        }
        let _synthConfigSine = {volumeADSR: {a:0.01, d:0.1, s:0, r:0, minValue:0, maxValue: _volume*8},
                            oscType:'sine',
                            pitchADSR: {a:0.01, d:0.4, s:0, r:0, minValue:130, maxValue: 260}
                        }
        if (!isNaN(_frequency)) { 
            mge.audio.playSound(_synthConfigNoise, 65, _startTime, _duration, _volume)
            mge.audio.playSound(_synthConfigSine, 65, _startTime, _duration, _volume)
        }
    }
}

game.instruments.piano = {
    play: function (_frequency, _startTime, _duration, _volume) {
        let _synthConfig = {volumeADSR: {a:0.015, d:0.3, s:0.8, r:0.2, minValue:0, maxValue: _volume},
                            oscType:'sine',
                            filterType:'lowpass',
                            filterFreqADSR: {a:0.15, d:0.5, s:0.9, r:0.2, minValue:_frequency/2, maxValue: _frequency*5}
                                    }
        let _detune1 = Object.create(_synthConfig)
        let _detune2 = Object.create(_synthConfig)
        let _detune3 = Object.create(_synthConfig)
        _detune1.detuneADSR = {a:0.5, d:0.5, s:1, r:0, minValue:-3, maxValue: 3}
        _detune2.detuneADSR = {a:0.7, d:0.7, s:1, r:0, minValue:5, maxValue: -5}
        _detune2.detuneADSR = {a:0.8, d:0.6, s:1, r:0, minValue:-5, maxValue: 5}
        mge.audio.playSound(_synthConfig, _frequency, _startTime, _duration, _volume)
        mge.audio.playSound(_detune1, _frequency, _startTime, _duration, _volume)
        mge.audio.playSound(_detune2, _frequency, _startTime, _duration, _volume)
        mge.audio.playSound(_detune3, _frequency, _startTime, _duration, _volume)
    }
}


game.instruments.brass = {
    play: function (_frequency, _startTime, _duration, _volume) {
        let _synthConfig = {volumeADSR: {a:0.015, d:0.3, s:0.8, r:0.2, minValue:0, maxValue: _volume},
                            oscType:'sawtooth',
                            filterType:'lowpass',
                            filterFreqADSR: {a:0.15, d:0.5, s:0.9, r:0.2, minValue:_frequency/2, maxValue: _frequency*5}
                                    }
        let _detune1 = Object.create(_synthConfig)
        let _detune2 = Object.create(_synthConfig)
        let _detune3 = Object.create(_synthConfig)
        _detune1.detuneADSR = {a:0.5, d:0.5, s:1, r:0, minValue:-3, maxValue: 3}
        _detune2.detuneADSR = {a:0.7, d:0.7, s:1, r:0, minValue:5, maxValue: -5}
        _detune2.detuneADSR = {a:0.8, d:0.6, s:1, r:0, minValue:-5, maxValue: 5}
        mge.audio.playSound(_synthConfig, _frequency, _startTime, _duration, _volume)
        mge.audio.playSound(_detune1, _frequency, _startTime, _duration, _volume)
        mge.audio.playSound(_detune2, _frequency, _startTime, _duration, _volume)
        mge.audio.playSound(_detune3, _frequency, _startTime, _duration, _volume)
    }
}

// Effects
game.instruments.explosion = {
    volumeADSR: {a:0.01, d:0.3, s:0.2, r:0.2, minValue:0, maxValue: 20},
    oscType:'noise',
    filterType:'lowpass',
    filterFreqADSR: {a:0.01, d:0.3, s:0.2, r:0.2, minValue:100, maxValue: 3000}
}

game.instruments.superJump = {
    volumeADSR: {a:0.01, d:0.3, s:0.2, r:0.2, minValue:0, maxValue: 10},
    oscType:'sine',
    pitchADSR: {a:0.8, d:0.2, s:0.9, r:0.2, minValue:100, maxValue: 3000}
}
