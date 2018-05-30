// @flow

import './a.css'

const AudioContext = window.AudioContext || window.webkitAudioContext;
function createSource() {
  const ctx = new AudioContext();

  const source = ctx.createOscillator();
  const gain = ctx.createGain();
  const panner = ctx.createStereoPanner();

  source.connect(gain)
  gain.connect(panner)
  panner.connect(ctx.destination)

  gain.gain.value = 0.04
  source.start()
  return {source, panner, ctx};
}

function randomDirection(magnitude?: number = 1): number {
  const direction = Math.random() < 0.5 ? -1 : 1;
  const ammount = Math.random() * magnitude;
  const logAmmount = direction < 0 ? ammount : (ammount / (1 - ammount))
  return 1 + (logAmmount * direction);
}

function changeTone (change, maxFreq, time) {
  setTimeout(() => {
    change(Math.random() * maxFreq)
    changeTone(change, maxFreq, time)
  }, Math.random() * time)
}

function changePanner(panner, direction) {
  let d = direction
  setInterval(() => {
    d = d * -1
    panner.pan.value = d
  }, 2500)
}

const { source: source1, panner: panner1, ctx: ctx1 } = createSource()
const { source: source2, panner: panner2, ctx: ctx2 } = createSource()


const smoothTo = (obj, ctx) => value => {
  obj.exponentialRampToValueAtTime(value, ctx.currentTime + 0.2)
}
changeTone(smoothTo(source1.frequency, ctx1), 3500, 300)
changeTone(smoothTo(source2.frequency, ctx2), 4000, 200)

changePanner(panner1, 1)
changePanner(panner2, -1)

// changeTone(createSource(), 1750, 300)
// changeTone(createSource(), 2000, 200)
// changeTone(createSource(), 100, 50)

// const src3 = createSource()
// changeTone(createSource(), 3500, 200);
// changeTone(createSource(), 4000, 750);
// changeTone(createSource(), 400, 500);

//////////////////////////////////////

