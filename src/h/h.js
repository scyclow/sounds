
import './h.css';

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

src1.frequency.value = 400
src2.frequency.value = 403
