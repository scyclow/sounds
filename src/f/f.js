import './f.css'

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

const baseWidth = 1020
const baseHeight = 680
const adjW = window.innerWidth / baseWidth
const adjH = window.innerHeight / baseHeight

const squares = times(40, n => {
  const div = document.createElement('div')
  const height = btwn(50, 200) * adjH
  const width = btwn(50, 200) * adjW
  Object.assign(div.style, {
    height: `${height}px`,
    width: `${width}px`,
    top: `${Math.random() * (window.innerHeight - height)}px`,
    left: `${Math.random() * (window.innerWidth - width)}px`,
  })
  div.setAttribute('class', 'thing')
  document.getElementById('container').appendChild(div)
  return div
})

let direction = 1
setInterval(() => {
  direction = direction * -1
  squares.forEach(square => {
    square.style.marginTop = direction * btwn(0, 5) + 'px'
    square.style.marginLeft = direction * btwn(0, 5) + 'px'
  })
}, 1000/60)

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

src1.frequency.value = 50
src2.frequency.value = 55
src3.frequency.value = 2000

gain1.gain.value = MAX_VOLUME * 8
gain2.gain.value = MAX_VOLUME * 8
gain3.gain.value = MAX_VOLUME/24
