import os
import buildUtils

inputFiles = ['../src/lib/mge_V1.0.0.js',\
              '../src/lib/mge_imageExtension_V0.0.1.js',\
              '../src/lib/mge_animationExtension_V0.0.1.js',\
              '../src/lib/mge_songExtension_V0.0.1.js',\
              '../src/game.js',\
              '../src/assets/animations.js',\
              '../src/assets/images.js',\
              '../src/assets/instruments.js',\
              '../src/assets/songs.js',\
              '../src/scenes/boot.js',\
              '../src/scenes/main.js',\
              '../src/sprites/logoDilpleu.js',\
              '../src/sprites/playButton.js'\
              ]


stringsToUglify=[]

#########################################
# MGE _Audio
#########################################
# _applyADSR.js
stringsToUglify+=['_applyADSR','_envelop','_audioParam', '_startTime', '_duration', '_minValue', '_maxValue']
# _create.js
stringsToUglify+=['_create','_audioContext','_audioGain']
# _playSound.js
stringsToUglify+=['_playSound','_synthConfig','_outputNode','_frequency','_startTime','_duration','_volume','_applyADSR','_context','_oscType']
stringsToUglify+=['_filterType','_volumeADSR','_pitchADSR','_detuneADSR','_filterFreqADSR','_filterQADSR','_oscGainADSR','_oscVolume','_filter','_osc']
# _setVolume.js
stringsToUglify+=['_setVolume','_volume']
# _volumeToGain.js
stringsToUglify+=['_volumeToGain','_volume','_maxDBReduction']
# Namespace
stringsToUglify+=['_audio']
#########################################
# MGE _Canvas
#########################################
# _create.js
stringsToUglify+=['_create','_width','_height','_id', '_renderCanvas', '_renderContext']
# _fitToScreen.js
stringsToUglify+=['_fitToScreen','_HtmlCanvas','_scaleX', '_scaleY', '_scale']
# Namespace
stringsToUglify+=['_canvas']
#########################################
# MGE _Game
#########################################
# _create.js
stringsToUglify+=['_create','_width','_height','_curScene', '_nextScene','_spritesList']
# _createSprite.js
stringsToUglify+=['_createSprite','_renderContext']
# _sceneChange.js
stringsToUglify+=['_sceneChange','_scene']
# _start.js
stringsToUglify+=['_start','_scene']
#_getClonesNb
stringsToUglify+=['_clonesNb','_getClonesNb']
# Namespace
stringsToUglify+=['_game']
#########################################
# MGE _Keyboard
#########################################
# _create.js
stringsToUglify+=['_create','_keyPressedDetected','_keyPressed']
# _isKeyPressed.js
stringsToUglify+=['_isKeyPressed']
# _onKeyDown.js
stringsToUglify+=['_onKeyDown','_key']
# _onKeyUp.js
stringsToUglify+=['_onKeyUp','_key']
# _reset.js
stringsToUglify+=['_reset']
# _update.js
stringsToUglify+=['_update']
# Namespace
stringsToUglify+=['_keyboard']
#########################################
# MGE _Loop
#########################################
# _create.js
stringsToUglify+=['_create','_lastTick','_currentTick','_elapsedTick','_fps','_status']
# _start.js
stringsToUglify+=['_start']
# _stop.js
stringsToUglify+=['_stop']
# _tick.js
stringsToUglify+=['_tick','_spritesList']
# Namespace
stringsToUglify+=['_loop']
#########################################
# MGE _Mouse
#########################################
# _create.js
stringsToUglify+=['_create','_HtmlCanvas','_isClicked','_xDetected','_yDetected','_clickDetected']
# _onClick.js
stringsToUglify+=['_onClick']
# _onMove.js
stringsToUglify+=['_onMove']
# _onOut.js
stringsToUglify+=['_onOut']
# _reset.js
stringsToUglify+=['_reset']
# _reset.js
stringsToUglify+=['_update']
# Namespace
stringsToUglify+=['_mouse']
#########################################
# MGE _Sprite
#########################################
# _create.js
stringsToUglify+=['_create','_ctx','_drawFunction','_width','_height','_scaleX','_scaleY','_isVisible','_drawBoundaries']
# _draw.js
stringsToUglify+=['_draw']
# _isColliding.js
stringsToUglify+=['_isColliding','_spriteToCheck','_minXDistance','_minYDistance','_realXDistance','_realYDistance']
# _isClicked.js
stringsToUglify+=['_isClicked','_xTouched','_yTouched','_click']
# _isTouched.js
stringsToUglify+=['_isTouched','_xTouched','_yTouched','_xMaxSprite','_xMinSprite','_yMaxSprite','_yMinSprite']
# _cloneCleanList.js
stringsToUglify+=['_cloneCleanList','_cleanedList']
# _cloneCreate.js
stringsToUglify+=['_cloneCreate','_cloneIsValid','_clonesList']
# _cloneDeleteAll.js
stringsToUglify+=['_cloneDeleteAll','_clonesList']
# _cloneDelete.js
stringsToUglify+=['_cloneDelete','_cloneIsValid']
# _cloneExecuteForEach.js
stringsToUglify+=['_cloneExecuteForEach','_clonesList']
# _listCollisionsWithClones.js
stringsToUglify+=['_listCollisionsWithClones','_spriteToCheck','_touchedClones','_clonesList','_clone']
# Namespace
stringsToUglify+=['_sprite']
#########################################
# MGE _Sequencer
#########################################
# _create.js
stringsToUglify+=['_create','_tracks','_bpm','_nextBarNum','_nextBarStartTime','_nextBarTriggerTime','_status']
# _createTrack.js
stringsToUglify+=['_createTrack','_bars','_instrument','_volume','_tracks','_track','_newTrack']
# _noteToFrequency.js
stringsToUglify+=['_noteToFrequency','_noteToEvaluate','_notesFrequence','_octave','_note','_frequency']
# _playTrackBar.js
stringsToUglify+=['_playTrackBar','_track','_barNum','_instrument','_volume','_bar','_curTime','_noteFrequency','_note','_duration']
# _play.js
stringsToUglify+=['_play','_currentAudioTime','_track']
# _start.js
stringsToUglify+=['_start']
# _stop.js
stringsToUglify+=['_stop']
# _track.js
stringsToUglify+=['_track','_bars','_instrument','_volume','_setVolume','_getBar','_numBar']
# Namespace
stringsToUglify+=['_sequencer']

#########################################
# MGE API
#########################################
# audio
stringsToUglify+=['currentAudioTime','volume','playSound','audio']
# sequencer
stringsToUglify+=['createTrack','sequencer']
# game
stringsToUglify+=['clonesNb','changeScene','createSprite']
# keyboard
stringsToUglify+=['keysPressed','isKeyPressed','keyboard']
# mouse
stringsToUglify+=['isClicked','mouse']
# _sprite
stringsToUglify+=['drawFunction','scaleX','scaleY','isVisible','drawBoundaries','isTouched','isClicked','cloneCreate','cloneDeleteAll','cloneDelete']
stringsToUglify+=['cloneExecuteForEach','listCollisionsWithClones']


#########################################
# MGE IMAGE EXTENTION
#########################################
stringsToUglify+=['_extensionImage','_images','_list','_imageObject']
stringsToUglify+=['_setConfig','_config','_isLoaded','_bitmap']
stringsToUglify+=['_setScale','_scale']
stringsToUglify+=['_load','_offScreenCanvas','_gradient','_imageObject']
stringsToUglify+=['_create']
stringsToUglify+=['_draw']
stringsToUglify+=['_createImage','_newImage','_list']
stringsToUglify+=['_loadNextImage','_lst','_nbImagesLoaded','_hasLoadedOneImage','_lstLength']

#########################################
# MGE SONG EXTENTION
#########################################
stringsToUglify+=['_extensionSong','_songs','_list','_songObject']
stringsToUglify+=['_create','_config','_isLoaded','_tracks']
stringsToUglify+=['_load']
stringsToUglify+=['_play','_defaultInstrument','_curTrack','_tracks']
stringsToUglify+=['_setConfig']
stringsToUglify+=['_createSong','_newSong']
stringsToUglify+=['_loadNextSong','_nbSongsLoaded','_hasLoadedOneSong','_lstLength']

#########################################
# MGE ANIMATION EXTENTION
#########################################
stringsToUglify+=['_extensionAnimation','_animationObject']
stringsToUglify+=['_loadExtension']
stringsToUglify+=['_draw']
stringsToUglify+=['_setFrames','_frames']
stringsToUglify+=['_create','_currentFrame','_lastFrameTime','_timeBetweenFrames']
stringsToUglify+=['_restart']


#########################################
# UNLOVED 13
#########################################


outputFile='main.js'

buildUtils.build(inputFiles,stringsToUglify,outputFile)