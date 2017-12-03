import './sandbox.css'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth/4
const height = window.innerHeight/4
canvas.width = width
canvas.height = height

ctx.fillStyle = '#e97';
ctx.strokeStyle = '#fb9';

function draw() {
  ctx.clearRect(0, 0, width, height)
  ctx.beginPath();

  for (let i = 0; i < 4000; i ++) {
    const x = Math.round(Math.random() * width)
    const y = Math.round(Math.random() * height)
    ctx.moveTo(x, y);
    ctx.arc(x, y, 3, 0, Math.PI * 2, true);
  }

  ctx.fill();

}


setInterval(draw, 1000/30)
draw()


