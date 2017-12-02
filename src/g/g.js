import './g.css'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ctx.translate(0.5, 0.5);

function draw() {
  const width = window.innerWidth
  const height = window.innerHeight

  const w = Math.round(width/5)
  const h = Math.round(height/5)

  ctx.clearRect(0, 0, width, height)
  ctx.beginPath();

  for (let i = 0; i < 5000; i ++) {
    // for (let j = 0; j < height; j += h) {
    const x = Math.round(Math.random() * (width/3)) + 0.5
    const y = Math.round(Math.random() * (height/3)) + 0.5
    ctx.moveTo(x, y);
    ctx.arc(x, y, 3, 0, Math.PI * 2, true);
  }

  ctx.strokeStyle = '#fa8';
  ctx.stroke();
}


setInterval(draw, 1000/60)
draw()

const sample = (arr) => arr[Math.floor(arr.length * Math.random())]

function btwn(x, y) {
  const high = Math.max(x, y)
  const low = Math.min(x, y)

  return (Math.random() * (high - low)) + low
}

const AudioContext = window.AudioContext || window.webkitAudioContext;
const MAX_VOLUME = 0.04

function createSource(srcType?: string = 'sine') {
  const ctx = new AudioContext();

  const source = ctx.createOscillator();
  const gain = ctx.createGain();

  source.connect(gain)
  gain.connect(ctx.destination)

  // window.gain = gain
  gain.gain.value = MAX_VOLUME
  source.type = srcType
  source.start()
  return {source, gain};
}

const { source: src1, gain: gain1 } = createSource()
const { source: src2, gain: gain2 } = createSource()
const { source: src3, gain: gain3 } = createSource()
const { source: src4, gain: gain4 } = createSource()
const { source: src5, gain: gain5 } = createSource()

src1.frequency.value = 400
gain4.gain.value = MAX_VOLUME / 3
gain5.gain.value = MAX_VOLUME / 3

function randInterval(cb, i) {
  cb()
  setTimeout(() => randInterval(cb, i), btwn(...i))
}

const ratios = [1.005,1.05, 1.25, 1.3333333, 2, 1.5, 1.125]

randInterval(() => {
  src2.frequency.value = src1.frequency.value * sample(ratios)
}, [20, 2000])

randInterval(() => {
  src3.frequency.value = src1.frequency.value * sample(ratios)
}, [20, 2000])

randInterval(() => {
  src4.frequency.value = src1.frequency.value * sample(ratios)
  // src3.frequency.value = src1.frequency.value * sample(ratios)
}, [10, 30])

randInterval(() => {
  src5.frequency.value = src1.frequency.value * sample(ratios)
}, [10, 30])

