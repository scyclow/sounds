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

function changeTone (src, maxFreq, time) {
  setTimeout(() => {
    src.frequency.value = Math.random() * maxFreq
    console.log(time)
    changeTone(src, maxFreq, time * randomDirection(0.2))
  }, Math.random() * time)
}




changeTone(createSource('triangle'), 550, 200) // A
changeTone(createSource(), 1308, 300) // C
changeTone(createSource(), 3296, 400) // E

// window.s = createSource()

// const s1 = createSource('triangle')
// const s2 = createSource()
// const s3 = createSource()

// s1.frequency.value =
// s2.frequency.value = 654/2
// s3.frequency.value = 1648/2


// var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// var osc = audioCtx.createOscillator();

// const frequency = 440;
// // Buffer size of 4096, 0 input channels, 1 output channel.
// const scriptProcessorNode = audioCtx.createScriptProcessorNode(4096, 0, 1);
// scriptProcessorNode.onaudioprocess = function(event) {
//     const startTime = audioCtx.currentTime;
//     const samples = event.outputBuffer.getChannelData(0);
//     for (var i = 0; i < 4096; i++) {
//         const t = startTime + (i / audioCtx.sampleRate);
//         // samples is a Float32Array
//         samples[i] = Math.sin(t * frequency);
//     }
// };
// osc.connect(scriptProcessorNode)
// scriptProcessorNode.connect(audioCtx.destination);
