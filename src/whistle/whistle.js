// @flow

import './whistle.css'

const AudioContext = window.AudioContext || window.webkitAudioContext;
function createSource() {
  const ctx = new AudioContext();

  const source = ctx.createOscillator();
  source.connect(ctx.destination)

  source.start()
  return source;
}

function changeTone (src, maxFreq, time) {
  setTimeout(() => {
    src.frequency.value = Math.random() * maxFreq
    changeTone(src, maxFreq, time)
  }, Math.random() * time)
}



changeTone(createSource(), 3500, 300)
changeTone(createSource(), 4000, 200)
// changeTone(createSource(), 100, 50)

// const src3 = createSource()
// changeTone(src1, 3500, 200);
// changeTone(src2, 4000, 750);
// changeTone(src3, 400, 500);

//////////////////////////////////////

// const ctx = new AudioContext();

// const source = ctx.createOscillator();
// const biquad = ctx.createBiquadFilter();
// window.bq = biquad
// source.connect(biquad)
// biquad.connect(ctx.destination)
// source.start()

// setInterval(() => {
//   source.frequency.value = Math.random() * 2500
// }, 500)

// LFO FILTER
// const ctx = new AudioContext();
// const oscillator = ctx.createOscillator()
// const LFO = ctx.createOscillator()
// const VCA = ctx.createGain()

// LFO.connect(VCA.gain)
// oscillator.connect(VCA)
// VCA.connect(ctx.destination)

// LFO.frequency.value = 7

// LFO.start(0)
// oscillator.start(0)

// window.ctx = ctx
// window.lfo = LFO
// window.osc = oscillator
// window.gain = VCA

// changeTone(oscillator, 2000)
