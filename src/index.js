// @flow

import './index.css'

const AudioContext = window.AudioContext || window.webkitAudioContext;
function createSource() {
  const ctx = new AudioContext();

  const source = ctx.createOscillator();
  source.connect(ctx.destination)

  source.start()
  return source;
}

function changeTone (src, maxFreq) {
  setTimeout(() => {
    src.frequency.value = Math.random() * maxFreq
    changeTone(src, maxFreq)
  }, Math.random() * 200)
}

const src1 = createSource()
const src2 = createSource()

changeTone(src1, 3500)
changeTone(src2, 4000)
