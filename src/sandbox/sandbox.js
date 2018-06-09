
import './sandbox.css';


const AudioContext = window.AudioContext || window.webkitAudioContext;
const MAX_VOLUME = 0.07
function createSource(srcType?: string = 'sawtooth') {
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



