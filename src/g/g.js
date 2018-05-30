import './g.css'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth/4
const height = window.innerHeight/4
canvas.width = width
canvas.height = height

ctx.fillStyle = '#e97';
ctx.strokeStyle = '#fb9';

const amt = (window.innerWidth * window.innerHeight) / 135

function draw() {
  ctx.clearRect(0, 0, width, height)
  ctx.beginPath();

  for (let i = 0; i < amt; i ++) {
    const x = Math.round(Math.random() * width)
    const y = Math.round(Math.random() * height)
    ctx.moveTo(x, y);
    ctx.arc(x, y, 3, 0, Math.PI * 2, true);
  }

  ctx.stroke();
}


setInterval(draw, 1000/30)
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
  return {source, gain, ctx};
}

const { source: src1, gain: gain1, ctx: ctx1 } = createSource()
const { source: src2, gain: gain2, ctx: ctx2 } = createSource()
const { source: src3, gain: gain3, ctx: ctx3 } = createSource()
const { source: src4, gain: gain4, ctx: ctx4 } = createSource()
const { source: src5, gain: gain5, ctx: ctx5 } = createSource()


const BASE_FREQ = 400
const MAX_TIME = 2000
const MIN_TIME = 20
const ratios = [1.005,1.05, 1.25, 1.3333333, 2, 1.5, 1.125]

src1.frequency.value = BASE_FREQ
gain4.gain.value = MAX_VOLUME / 3
gain5.gain.value = MAX_VOLUME / 3

const sizeUnit = window.innerWidth > window.innerHeight
  ? 'vh'
  : 'vw'

function createElement() {
  const el = document.createElement('div')
  el.setAttribute('class', 'elem')
  el.style.transition = MAX_TIME + 'ms'
  document.getElementById('sub-container').appendChild(el)
  const changeSize = (size: number) => {
    el.style.width = size + sizeUnit;
    el.style.height = size + sizeUnit;
  }
  changeSize(10)
  return changeSize
}

const change1 = createElement()
const change2 = createElement()
const change3 = createElement()
const change4 = createElement()
const change5 = createElement()
const change6 = createElement()

function randInterval(cb, [high, low]) {
  cb()
  setTimeout(() => randInterval(cb, [high, low]), btwn(high, low))
}

let audioTransitionTime = 0.2
setInterval(() => audioTransitionTime += 0.02, 1000)

const smoothTo = (obj, ctx) => value => {
  obj.exponentialRampToValueAtTime(value, ctx.currentTime + audioTransitionTime)
}

const smoothFreq2 = smoothTo(src2.frequency, ctx2)
const smoothFreq3 = smoothTo(src3.frequency, ctx3)
const smoothFreq4 = smoothTo(src4.frequency, ctx4)
const smoothFreq5 = smoothTo(src5.frequency, ctx5)

randInterval(() => {
  smoothFreq2(src1.frequency.value * sample(ratios))
  change1(Math.random() * 90)
  change2(Math.random() * 90)
  change3(Math.random() * 90)
}, [MAX_TIME, MIN_TIME])

randInterval(() => {
  smoothFreq3(src1.frequency.value * sample(ratios))
  change4(Math.random() * 90)
  change5(Math.random() * 90)
  change6(Math.random() * 90)
}, [MAX_TIME, MIN_TIME])

randInterval(() => {
  smoothFreq4(src1.frequency.value * sample(ratios))
}, [10, 30])

randInterval(() => {
  src5.frequency.value = src1.frequency.value * sample(ratios)
}, [10, 30])
