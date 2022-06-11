console.clear();

addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#main-canvas');
  const c = canvas.getContext('2d');

  canvas.width = innerWidth;
  canvas.height = innerHeight;
  
  let trails = 5;

  let balls = [];

  class Ball {
    constructor(x, y, size, xVel, yVel, density, hue) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.xVel = xVel;
      this.yVel = yVel;
      this.density = density;
      this.hue = hue;
      this.gravity = 0;
    }
    update() {
      this.x += this.xVel;
      this.y += this.yVel;

      // if hits border
      if (this.x + this.size >= canvas.width || this.x - this.size <= 0) {
        this.xVel *= -1;
      }
      if (this.y + this.size >= canvas.height || this.y - this.size <= 0) {
        this.yVel *= -1;
      }
      
      if (this.yVel < 6) {
        this.yVel += this.gravity;
      }
      
      if (this.y + this.size > canvas.height) {
        this.y = canvas.height - this.size;
      }

    }
    draw() {
      c.beginPath();
      c.fillStyle = `hsl(${this.hue}, 65%, 65%)`;
      c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      c.fill();
      c.closePath();
    }
  }

  const init = (num, size, speed) => {
    document.querySelector('#range-label').textContent = `Balls: ${num}`;
    document.querySelector('#size-label').textContent = `Size: ${size}`;
    document.querySelector('#speed-label').textContent = `Speed: ${speed}`;
    for (let i = 0; i < num; i++) {
      const s = size;
      const x = Math.random() * (canvas.width - s) + s;
      const y = Math.random() * (canvas.height - s) + s;
      const xVel = Math.random() * speed - (speed / 2);
      const yVel = Math.random() * speed - (speed / 2);
      const density = 1;
      const hue = Math.floor(Math.random() * 360);
      balls.push(new Ball(x, y, s, xVel, yVel, density, hue));
    }
  }
  init(20, 20, 5);

  const collide = (ball1, ball2) => {
    const angle = Math.atan2(ball1.y - ball2.y, 
                              ball1.x - ball2.x);
    const velocity = {
      x: Math.cos(angle),
      y: Math.sin(angle)
    }
    
    const resistance = 0.75;

    // improved velocity
    ball1.xVel = (ball1.xVel + velocity.x) * resistance;
    ball1.yVel = (ball1.yVel + velocity.y) * resistance;
    ball2.xVel = (ball2.xVel - velocity.x) * resistance;
    ball2.yVel = (ball2.yVel - velocity.y) * resistance;
    
    // initial velocity
    // ball1.xVel += velocity.x;
    // ball1.yVel += velocity.y;
    // ball2.xVel -= velocity.x;
    // ball2.yVel -= velocity.y;
  }

  const checkForCollision = (ball1, ball2) => {
    const xDist = ball1.x - ball2.x;
    const yDist = ball1.y - ball2.y;
    const dist = Math.sqrt(xDist**2 + yDist**2);
    if (dist < ball1.size + ball2.size) {
      collide(ball1, ball2);
    }
  }

  const animate = () => {
    c.fillStyle = `rgb(0 0 0 / ${trails / 50})`;
    c.fillRect(0,0,canvas.width,canvas.height);

    balls.forEach((ball, i) => {
      ball.update();
      ball.draw();
      for (let j = i + 1; j < balls.length; j++) {
        checkForCollision(balls[j], balls[i]);
      }
    })

    requestAnimationFrame(animate);
  }
  animate();
  
  

  const handleNumber = e => {
    balls = [];
    const size = document.querySelector('input#size-of-balls').value;
    const speed = document.querySelector('input#speed-of-balls').value;
    init(e.target.value, +size, +speed);
  }
  
  const handleSize = e => {
    balls = [];
    const num = document.querySelector('input#num-of-balls').value;
    const speed = document.querySelector('input#speed-of-balls').value;
    init(num, +e.target.value, +speed);
  }
  
  const handleSpeed = e => {
    balls = [];
    const num = document.querySelector('input#num-of-balls').value;
    const size = document.querySelector('input#size-of-balls').value;
    init(num, +size, +e.target.value);
  }
  
  const handleTrails = e => {
    trails = +e.target.value;
    document.querySelector('#trails-label').textContent = `Trails: ${e.target.value}`;
  }
  
  const handleGravity = e => {
    const gravity = e.target.value / 50;
    balls.forEach(ball => ball.gravity = gravity);
    document.querySelector('#gravity-label').textContent = `Gravity: ${e.target.value}`;
  }

  document.querySelector('input#num-of-balls').addEventListener('change', handleNumber);
  
  document.querySelector('input#size-of-balls').addEventListener('change', handleSize);
  
  document.querySelector('input#speed-of-balls').addEventListener('change', handleSpeed);
  
  document.querySelector('input#trails').addEventListener('change', handleTrails);
  
  document.querySelector('input#gravity-field').addEventListener('change', handleGravity);
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  })
})