// @flow

import './progress.css'

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
  setTimeout(() => {
    const newTime = time * randomDirection(0.2)
    const newFreq = Math.random() * maxFreq

    cb(newFreq, time)
    changeTone(maxFreq, newTime, cb)
  }, Math.random() * time)
}

const low = document.getElementById('low')
const medium = document.getElementById('medium')
const high = document.getElementById('high')

const srcA = createSource('triangle')
const srcC = createSource()
const srcE = createSource()


// A
const maxFreqA = 550
const startTimeA = 2000
changeTone(maxFreqA, startTimeA, (freq, time) => {
  console.log(freq, time)
  srcA.frequency.value = freq
  low.style.left = `${(freq/maxFreqA) * window.innerWidth}px`
  low.style.top = `${Math.random() * window.innerHeight}px`
  low.style.transition = `${time}ms`
})

// C
const maxFreqC = 1308
const startTimeC = 200
changeTone(maxFreqC, startTimeC, (freq, time) => {
  console.log(freq, time)
  srcC.frequency.value = freq
  medium.style.left = `${(freq/maxFreqC) * window.innerWidth}px`
  medium.style.top = `${Math.random() * window.innerHeight}px`
  medium.style.transition = `${time}ms`
})

// E
const maxFreqE = 3296
const startTimeE = 600
changeTone(maxFreqE, startTimeC, (freq, time) => {
  console.log(freq, time)
  srcE.frequency.value = freq
  high.style.left = `${(freq/maxFreqE) * window.innerWidth}px`
  high.style.top = `${Math.random() * window.innerHeight}px`
  high.style.transition = `${time}ms`
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
