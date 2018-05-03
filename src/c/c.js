// @flow

import './c.css'

const sample = (arr) => arr[Math.floor(arr.length * Math.random())]

const AudioContext = window.AudioContext || window.webkitAudioContext;
const MAX_VOLUME = 0.04
const MAX_TIME = 15000
const MIN_TIME = 3000
const MIN_FREQ = 800

// obj: gain.gain or source.frequency
const smoothTo = (obj, ctx) => (value) => {
  obj.exponentialRampToValueAtTime(value, ctx.currentTime + 0.3)
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
  return {source, gain, ctx};
}

function randomDirection(magnitude?: number = 1): number {
  const direction = Math.random() < 0.5 ? -1 : 1;
  const ammount = Math.random() * magnitude;
  const logAmmount = direction < 0 ? ammount : (ammount / (1 - ammount))
  return 1 + (logAmmount * direction);
}

function changeTone (getTone, time, cb) {
  const newTime = Math.min(
    Math.max(MIN_TIME, time * randomDirection(0.2)),
    MAX_TIME
  )
  const newFreq = getTone()
  cb(newFreq, time)
  setTimeout(
    () => changeTone(getTone, newTime, cb),
    Math.random() * time
  )
}

const fadeOut = (gain, style, time) => {
  gain.gain.value = MAX_VOLUME * 2
  style.opacity = 0.5

  // should be some value between 0 and .05
  const fadeRate = 0.003
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
      style.opacity = style.opacity * amt
    },
    time / 100
  )

  setTimeout(() => clearInterval(interval), time - 5)
}

const low = document.getElementById('low')
const medium = document.getElementById('medium')
const high = document.getElementById('high')

const { source: srcA, gain: gainA, ctx: ctxA } = createSource()
const { source: srcC, gain: gainC, ctx: ctxC } = createSource()
const { source: srcE, gain: gainE, ctx: ctxE } = createSource()


let toneA = 0;
// A
const maxFreqA = MIN_FREQ
const startTimeA = 4000
const maxSizeA = 80
low.style.maxWidth = `${maxSizeA}vw`
low.style.maxHeight = `${maxSizeA}vw`
const getToneA = () => {
  toneA = Math.random() * maxFreqA
  return toneA;
}

const smoothA = smoothTo(srcA.frequency, ctxA)
changeTone(getToneA, startTimeA, (freq, time) => {
  // console.log(freq, time)
  const size = ((1 - freq/maxFreqA) * maxSizeA/100) * window.innerWidth

  smoothA(freq)
  low.style.transition = `${time* 1.5}ms`
  low.style.top = `${(1 - freq/maxFreqA) * (window.innerHeight - size/2)}px`
  low.style.left = `${Math.random() * (window.innerWidth - size/2)}px`
  low.style.height = `${size}px`
  low.style.width = `${size}px`
  low.zIndex = Math.round(size)
  low.style.filter = `hue-rotate(${freq/maxFreqA * 360}deg)`
  // low.style.color = 'white'
  // low.innerHTML = `${freq}, ${time}`

  fadeOut(gainA, low.style, time, freq)
})


// C
const maxFreqC = MIN_FREQ * 1.5
const startTimeC = 1500
const maxSizeC = 60
medium.style.maxWidth = `${maxSizeC}vw`
medium.style.maxHeight = `${maxSizeC}vw`
const getToneC = () => toneA * sample([1.005,1.05, 1.25])
const smoothC = smoothTo(srcC.frequency, ctxC)

changeTone(getToneC, startTimeC, (freq, time) => {
  // console.log(freq, time)
  smoothC(freq)
  const size = ((1 - freq/maxFreqC) * maxSizeC/100) * window.innerWidth
  medium.style.transition = `${time* 1.5}ms`
  medium.style.top = `${(1 - freq/maxFreqC) * (window.innerHeight - size/2)}px`
  medium.style.left = `${Math.random() * (window.innerWidth - size/2)}px`
  medium.style.height = `${size}px`
  medium.style.width = `${size}px`
  medium.zIndex = Math.round(size)

  medium.style.filter = `hue-rotate(${freq/maxFreqA * 360}deg)`
  // medium.innerHTML = `${freq}, ${time}`
  fadeOut(gainC, medium.style, time, freq)

})

// E
const maxFreqE = MIN_FREQ * 2
const startTimeE = 1000
const maxSizeE = 40
high.style.maxWidth = `${maxSizeE}vw`
high.style.maxHeight = `${maxSizeE}vw`
const getToneE = () => toneA * sample([1.5005, 1.2505])
const smoothE = smoothTo(srcE.frequency, ctxE)

changeTone(getToneE, startTimeE, (freq, time) => {
  // console.log(freq, time)
  smoothE(freq)

  const size = ((1 - freq/maxFreqE) * maxSizeE/100) * window.innerWidth
  high.style.transition = `${time* 1.5}ms`
  high.style.top = `${(1 - freq/maxFreqE) * (window.innerHeight - size/2)}px`
  high.style.left = `${Math.random() * (window.innerWidth - size/2)}px`
  high.style.height = `${size}px`
  high.style.width = `${size}px`
  high.zIndex = Math.round(size)

  high.style.filter = `hue-rotate(${freq/maxFreqA * 360}deg)`
  // high.innerHTML = `${freq}, ${time}`
  fadeOut(gainE, high.style, time, freq)

})





// I like how in this example the space continues to expand as the ratio of time/startTime increases past 1

// // A
// const maxFreqA = 550
// const startTimeA = 2000
// changeTone(maxFreqA, startTimeA, (freq, time) => {
//   console.log(freq, time)
//   srcA.frequency.value = freq
//   low.style.left = `${(freq/maxFreqA) * window.innerWidth}px`
//   low.style.top = `${(time/startTimeA) * window.innerHeight}px`
//   low.style.transition = `${time}ms`
// })

// // C
// const maxFreqC = 1308
// const startTimeC = 200
// changeTone(maxFreqC, startTimeC, (freq, time) => {
//   console.log(freq, time)
//   srcC.frequency.value = freq
//   medium.style.left = `${(freq/maxFreqC) * window.innerWidth}px`
//   medium.style.top = `${(time/startTimeC) * window.innerHeight}px`
//   medium.style.transition = `${time}ms`
// })

// // E
// const maxFreqE = 3296
// const startTimeE = 600
// changeTone(maxFreqE, startTimeC, (freq, time) => {
//   console.log(freq, time)
//   srcE.frequency.value = freq
//   high.style.left = `${(freq/maxFreqE) * window.innerWidth}px`
//   high.style.top = `${(time/startTimeE) * window.innerHeight}px`
//   high.style.transition = `${time}ms`
// })
