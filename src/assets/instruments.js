game.instruments.electricPiano = {
    play: function (_frequency, _startTime, _duration, _volume) {
        let _synthConfig = {volumeADSR: {a:0.01, d:0.2, s:0.8, r:0.1, minValue:0, maxValue: _volume},
                            oscType:'sine'
                        }
        let _detune1 = Object.create(_synthConfig)
        let _detune2 = Object.create(_synthConfig)
        let _detune3 = Object.create(_synthConfig)
        _detune1.detuneADSR = {a:0.5, d:0.5, s:1, r:0, minValue:-3, maxValue: 3}
        _detune2.detuneADSR = {a:0.7, d:0.7, s:1, r:0, minValue:5, maxValue: -5}
        _detune2.detuneADSR = {a:0.8, d:0.6, s:1, r:0, minValue:-5, maxValue: 5}
        let _noise = {volumeADSR: {a:0.01, d:0.3, s:0, r:0, minValue:0, maxValue: _volume},
                oscType:'noise',
                filterType:'lowpass',
                filterFreqADSR: {a:0.01, d:0.4, s:0, r:0, minValue:500, maxValue: 500}
    }
        mge.audio.playSound(_synthConfig, _frequency, _startTime, _duration, _volume)
        mge.audio.playSound(_detune1, _frequency, _startTime, _duration, _volume)
        mge.audio.playSound(_detune2, _frequency, _startTime, _duration, _volume)
        mge.audio.playSound(_detune3, _frequency, _startTime, _duration, _volume)
        mge.audio.playSound(_noise, _frequency, _startTime, _duration, _volume)
    }
}