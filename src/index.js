// @flow

import './index.css'

const AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();

const source = ctx.createOscillator();
const gain = ctx.createGain();

source.connect(gain)
gain.connect(ctx.destination)
source.start()
