// @flow

import './spin.css'

function changeTone (src, maxFreq, time) {
  setTimeout(() => {
    src.frequency.value = Math.random() * maxFreq
    console.log(time)
    changeTone(src, maxFreq, time)
  }, time)
}


// LFO FILTER
const ctx = new AudioContext();
const oscillator = ctx.createOscillator()
const LFO = ctx.createOscillator()
const VCA = ctx.createGain()
const gain = ctx.createGain()

LFO.connect(VCA.gain)
oscillator.connect(VCA)
VCA.connect(gain)
gain.connect(ctx.destination)

gain.gain.value = 0.04
LFO.frequency.value = 7

LFO.start(0)
oscillator.start(0)

window.ctx = ctx
window.lfo = LFO
window.osc = oscillator
window.gain = VCA

changeTone(oscillator, 2000)
