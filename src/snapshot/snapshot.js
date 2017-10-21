// @flow

import './snapshot.css'

setTimeout(
  () => location.reload(),
  Math.max(150, 1300 * Math.random())
)

const AudioContext = window.AudioContext || window.webkitAudioContext;
function createSource(srcType?: string = 'sine') {
  const ctx = new AudioContext();

  const source = ctx.createOscillator();
  const gain = ctx.createGain();

  source.connect(gain)
  gain.connect(ctx.destination)

  // window.gain = gain
  gain.gain.value = 0.04
  source.type = srcType
  source.start()
  return source;
}

function randomDirection(magnitude?: number = 1): number {
  const direction = Math.random() < 0.5 ? -1 : 1;
  const ammount = Math.random() * magnitude;
  const logAmmount = direction < 0 ? ammount : (ammount / (1 - ammount))
  return 1 + (logAmmount * direction);
}

function changeTone (maxFreq, time, cb) {
  const newTime = Math.max(17, time * randomDirection(0.2))
  const newFreq = Math.random() * maxFreq
  cb(newFreq, time)
  setTimeout(
    () => changeTone(maxFreq, newTime, cb),
    Math.random() * time
  )
}

const low = document.getElementById('low')
const medium = document.getElementById('medium')
const high = document.getElementById('high')

const srcA = createSource()
const srcC = createSource()
const srcE = createSource()


// A
const maxFreqA = 550
const startTimeA = 700
const maxSizeA = 40
low.style.maxWidth = `${maxSizeA}vw`
low.style.maxHeight = `${maxSizeA}vw`
changeTone(maxFreqA, startTimeA, (freq, time) => {
  const size = ((1 - freq/maxFreqA) * maxSizeA/100) * window.innerWidth

  srcA.frequency.value = freq
  low.style.transition = `${time}ms`
  low.style.top = `${(1 - freq/maxFreqA) * window.innerHeight}px`
  low.style.left = `${Math.random() * window.innerWidth}px`
  low.style.height = `${size}px`
  low.style.width = `${size}px`
  low.style.filter = `hue-rotate(${freq/maxFreqA * 360}deg)`
})

// C
const maxFreqC = 1300
const startTimeC = 200
const maxSizeC = 30
medium.style.maxWidth = `${maxSizeC}vw`
medium.style.maxHeight = `${maxSizeC}vw`
changeTone(maxFreqC, startTimeC, (freq, time) => {
  srcC.frequency.value = freq
  const size = ((1 - freq/maxFreqC) * maxSizeC/100) * window.innerWidth
  medium.style.transition = `${time}ms`
  medium.style.top = `${(1 - freq/maxFreqC) * window.innerHeight}px`
  medium.style.left = `${Math.random() * window.innerWidth}px`
  medium.style.height = `${size}px`
  medium.style.width = `${size}px`
  medium.style.filter = `hue-rotate(${freq/maxFreqA * 360}deg)`
})

// E
const maxFreqE = 3200
const startTimeE = 600
const maxSizeE = 20
high.style.maxWidth = `${maxSizeE}vw`
high.style.maxHeight = `${maxSizeE}vw`
changeTone(maxFreqE, startTimeE, (freq, time) => {
  srcE.frequency.value = freq
  const size = ((1 - freq/maxFreqE) * maxSizeE/100) * window.innerWidth
  high.style.transition = `${time}ms`
  high.style.top = `${(1 - freq/maxFreqE) * window.innerHeight}px`
  high.style.left = `${Math.random() * window.innerWidth}px`
  high.style.height = `${size}px`
  high.style.width = `${size}px`
  high.style.filter = `hue-rotate(${freq/maxFreqA * 360}deg)`
})


