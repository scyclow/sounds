// @flow

import './b.css'

function btwn(x, y) {
  const high = Math.max(x, y)
  const low = Math.min(x, y)

  return (Math.random() * (high - low)) + low
}

function changeTone (smooth, freq, time) {
  setInterval(() => smooth(freq()), time)
}

// LFO FILTER
const ctx = new (window.AudioContext || window.webkitAudioContext);
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

const smoothTo = (obj, ctx) => value => {
  obj.exponentialRampToValueAtTime(value, ctx.currentTime + 0.3)
}

changeTone(
  (f) => smoothTo(oscillator.frequency, ctx)(f),
  () => btwn(1200, 600),
  125
)
