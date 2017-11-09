// @flow

import './fall.css'
import { applyToHex } from '../utils/colors'

// const ctx = new AudioContext();
// const oscillator = ctx.createOscillator()
// const gain = ctx.createGain()

// oscillator.connect(gain)
// gain.connect(ctx.destination)

// gain.gain.value = 1
// oscillator.frequency.value = 18

// window.gain = gain
// window.oscillator = oscillator

// oscillator.start(0)

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

let direction = 1

const changeDirection = () => {
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
changeDirection()
setInterval(changeDirection, movementTime)
