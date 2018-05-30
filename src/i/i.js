
import './i.css';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth
const height = window.innerHeight
canvas.width = width
canvas.height = height

// ctx.fillStyle = '#000';
// ctx.strokeStyle = '#fb9';

const sample = (arr) => arr[Math.floor(arr.length * Math.random())]

function btwn(x, y) {
  const high = Math.max(x, y)
  const low = Math.min(x, y)

  return (Math.random() * (high - low)) + low
}

function *mapIter(fn, iter) {
  let i = 0
  for (let x of iter) {
    yield fn(x, i++)
  }
}

function *filterIter(fn, iter) {
  let i = 0
  for (let x of iter) {
    if (fn(x, i++)) {
      yield x
    }
  }
}

class Lazy {
  constructor(iter) {
    this.iter = iter
  }

  *[Symbol.iterator]() {
    yield* this.iter
  }

  map(fn) {
    return new Lazy(mapIter(fn, this.iter))
  }

  filter(fn) {
    return new Lazy(filterIter(fn, this.iter))
  }

  forEach(fn) {
    let i = 0
    for (let x of this.iter) {
      const result = fn(x ,i++)
      if (result === false) return
    }
  }

  call() {
    let output = []
    for (let x of this.iter) output.push(x)
    return output
  }

}


function* _times(n) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}

function times(n) {
  return new Lazy(_times(n))
}


function* newState() {
  let state = initialState()

  while (true) {
    const next = state.map(update).call()
    yield next
    state = new Lazy(next)
  }
}



// ctx.shadowBlur = 40
// ctx.shadowColor = 'black'

function* createFrames() {
  const state = newState()
  while (true) {
    ctx.clearRect(0, 0, width, height)
    ctx.beginPath();

    state.next().value.forEach(({ x, y, radius }) => {
      ctx.moveTo(x, y)
      ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    })

    ctx.stroke();
    ctx.fill();

    yield
  }
}

const frames = createFrames()
const draw = i => {
  frames.next()
  // setTimeout(() =>
    window.requestAnimationFrame(draw)
  // , 300)
}



const AudioContext = window.AudioContext || window.webkitAudioContext;
const MAX_VOLUME = 0.07
function createSource(srcType?: string = 'sawtooth') {
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

// Circle State
const initialState = () => times(1400).map(() => ({
  radius: 5,
  direction: Math.random() < 0.5 ? 1 : -1,
  x: Math.random() * width,
  y: Math.random() * height + 5,
}))

const update = ({ radius, x, y, direction }) => {
  radius = radius + (1 * direction);
  y -= 2
  if (direction > 0 && radius > (50 * Math.random())) {
    direction = direction * -1
  } else if (radius < 0) {
    radius = 0;
    direction = 1;
    x = Math.random() * width
    y = Math.random() * height + 5
  }

  return {
    x,
    y,
    radius,
    direction
  }
}

// Sound
// const { source: src1 } = createSource()
const { source: src2 } = createSource()
const { source: src3 } = createSource()

// src1.frequency.value = 3.054
src2.frequency.value = 7.14524
src3.frequency.value = 8.342

draw()
