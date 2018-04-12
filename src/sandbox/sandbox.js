
import './sandbox.css';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth/4
const height = window.innerHeight/4
canvas.width = width
canvas.height = height

ctx.fillStyle = '#e97';
ctx.strokeStyle = '#fb9';

const amt = (window.innerWidth * window.innerHeight) / 135

function draw() {
  ctx.clearRect(0, 0, width, height)
  ctx.beginPath();

  for (let i = 0; i < amt; i ++) {
    const x = Math.round(Math.random() * width)
    const y = Math.round(Math.random() * height)
    ctx.moveTo(x, y);
    ctx.arc(x, y, 3, 0, Math.PI * 2, true);
  }

  ctx.stroke();
}


setInterval(draw, 1000/30)
draw()


const sample = (arr) => arr[Math.floor(arr.length * Math.random())]

function btwn(x, y) {
  const high = Math.max(x, y)
  const low = Math.min(x, y)

  return (Math.random() * (high - low)) + low
}
