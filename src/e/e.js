// @flow

import './e.css'
import { applyToHex } from '../utils/colors'

const AudioContext = window.AudioContext || window.webkitAudioContext;
const MAX_VOLUME = 0.04

const noop = () => {}
function times<T>(n: number, cb?: (number) => T = noop): Array<T> {
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(cb(i))
  }
  return out;
}

function btwn(x, y) {
  const high = Math.max(x, y)
  const low = Math.min(x, y)

  return (Math.random() * (high - low)) + low
}


const elemsPerWidth = 12;
const elemsPerHeight = 7;
const movementTime = 1200;
const movement = 80;


const elems = []
function renderElem ({ left, top, size }) {
  const elem = document.createElement('div')
  Object.assign(elem.style, {
    backgroundColor: applyToHex('#ff0000', { h: btwn(75, 30) }),
    opacity: btwn(0.9, 0.75),
    height: `${size}px`,
    width: `${size}px`,
    position: 'absolute',
    top: `${top * btwn(0.9, 1.1)}px`,
    left: `${left * btwn(0.9, 1.1)}px`,
    borderRadius: '100%',
    transition: `${btwn(movementTime * 1.6, movementTime * 1.9)}ms`,
    zIndex: Math.round(Math.random() * 20)
  })
  elem.setAttribute('class', 'elem')
  document.getElementById('container').appendChild(elem)
  elems.push(elem)
}

times(elemsPerWidth, w => {
  times(elemsPerHeight, h => {
    const size = btwn(125, 225)
    const left = w * ((window.innerWidth) / elemsPerWidth) - 20
    const top = h * ((window.innerHeight) / elemsPerHeight) - 20
    renderElem({ left, top, size })
  })
})

const fadeOut = (gain, time, mod = 1) => {
  gain.gain.value = MAX_VOLUME * mod

  // should be some value between 0 and .05
  const fadeRate = 0.0015
  const amt = 1 - fadeRate

  if (amt > 1) {
    console.error('This is going to be too loud...')
    console.error(amt)
    debugger
    throw 'NOOOOOOOO'
    return
  }

  const interval = setInterval(
    () => {
      gain.gain.value = gain.gain.value * amt;
    },
    time / 100
  )

  setTimeout(() => clearInterval(interval), time - 5)
}

const transitionFreq = (src, to, duration) => {
  const steps = 100
  const from_ = src.frequency.value

  const amt = (to - from_) / steps
  const interval = setInterval(
    () => {
      src.frequency.value = src.frequency.value + amt;
    },
    duration / steps
  )

  setTimeout(() => clearInterval(interval), duration)
}

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

const { source, gain } = createSource()
const { source: source2, gain: gain2 } = createSource()
const BASE_FREQ = 100
source.frequency.value = BASE_FREQ
source2.frequency.value = BASE_FREQ


let direction = 1

const changeDirection = (t = 1200) => {
  const soundDelay = Math.random() * 0.1
  setTimeout(() => {
    if (direction === -1) {
      transitionFreq(source, BASE_FREQ, t)
      transitionFreq(source2, BASE_FREQ, t)
    } else {
      const newFreq = btwn(BASE_FREQ*6, BASE_FREQ*20)
      transitionFreq(source, newFreq, t)
      transitionFreq(source2, newFreq * 0.9, t)
    }
  }, soundDelay)

  fadeOut(gain, t)
  fadeOut(gain2, t, 0.3)

  elems.forEach(e => {
    // if (direction === -1) e.style.transition = `${0}ms`
    // else e.style.transition = `${btwn(movementTime * 1.6, movementTime * 1.9)}ms`
    setTimeout(() => {
      if (direction === -1) {
        e.style.marginTop = 0;
        e.style.marginLeft = 0;
      } else {
        e.style.opacity = btwn(0.9, 0.75)
        e.style.marginTop = `${Math.random() * movement}px`;
        e.style.marginLeft = `${Math.random() * movement}px`;
      }
    }, Math.random() * movementTime)
  })
  console.log(direction)
  direction = direction * -1
}

const changeDirectionInterval = (t) => {
  setTimeout(() => {
    const time = btwn(movementTime * 0.8, movementTime * 2)
    changeDirection(time)
    changeDirectionInterval(time)
  }, t)
}

changeDirection()
changeDirection()
changeDirectionInterval(1200)
