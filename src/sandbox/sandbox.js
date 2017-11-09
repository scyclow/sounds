

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

const { source: src1 } = createSource()
const { source: src2 } = createSource()
const { source: src3, gain: gain3 } = createSource()

src1.frequency.value = 50
src2.frequency.value = 55
src3.frequency.value = 2000
gain3.gain.value = MAX_VOLUME/32
console.log(gain3.gain.value)
