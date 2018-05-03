
import './sandbox.css';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth
const height = window.innerHeight
canvas.width = width
canvas.height = height

ctx.fillStyle = '#000';
ctx.strokeStyle = '#fb9';

const sample = (arr) => arr[Math.floor(arr.length * Math.random())]

function btwn(x, y) {
  const high = Math.max(x, y)
  const low = Math.min(x, y)

  return (Math.random() * (high - low)) + low
}

const amt = (window.innerWidth * window.innerHeight) / 200

let t = 0

let stuff = (new Array(90)).fill(1).map(() => ({
  radius: Math.random() * 50,
  direction: Math.random() < 0.5 ? 1 : -1,
  x: Math.random() * width,
  y: Math.random() * height,
}))

const update = () => {
  stuff = stuff.map(s => {
    let radius = s.radius + (1 * s.direction);
    let direction = s.direction;
    let x = s.x
    let y = s.y
    if (s.direction > 0 && radius > (50 * Math.random())) {
      direction = s.direction * -1
    } else if (radius < 0) {
      radius = 0;
      direction = 1;
      x = Math.random() * width
      y = Math.random() * height
    }

    return {
      x,
      y,
      radius,
      direction
    }
  })
}

// ctx.shadowBlur = 40
// ctx.shadowColor = 'black'

function frame() {
  update()
  ctx.beginPath();

  stuff.forEach(s => {
    ctx.moveTo(s.x, s.y)
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2, true);
  })

  ctx.stroke();
  ctx.fill();
}

const draw = i => {
  ctx.clearRect(0, 0, width, height)
  frame(i)
  // setTimeout(() =>
    window.requestAnimationFrame(draw)
  // , 300)
}
draw()


