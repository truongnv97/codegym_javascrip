const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1010;
canvas.height = 560;
class Hero {
  constructor(canvas1) {
    this.speed = 30;
    this.image = new Image();
    this.image.src = "miku.gif";
    this.canvas1 = canvas1;
    this.ctx1 = canvas1.getContext("2d");
    this.size = {
      w: 200,
      h: 200,
    };
    this.position = {
      x: 0,
      y: 0,
    };
  }
  getHeroElement() {
    this.image.onload = () => {
      this.ctx1.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.size.w,
        this.size.h
      );
    };
  }
  draw() {
    this.ctx1.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
    );
  }
  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  move(direct) {
    this.clear();
    switch (direct) {
      case "up":
        if (this.position.y > 0) {
          this.position.y -= this.speed;
        }
        break;
      case "right":
        if (this.position.x + this.size.w < canvas.width) {
          this.position.x += this.speed;
        }
        break;
      case "down":
        if (this.position.y + this.size.h < canvas.height) {
          this.position.y += this.speed;
        }
        break;
      case "left":
        if (this.position.x > 0) {
          this.position.x -= this.speed;
        }
        break;
    }
    this.draw();
  }
}
// function control(key, char) {
//   switch (key.keyCode) {
//       case 37:
//           char.move("left");
//           break;
//       case 38:
//           char.move("up");
//           break;
//       case 39:
//           char.move("right");
//           break;
//       case 40:
//           char.move("down");
//           break;
//   }
// }
const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
};

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = true;
      miku.move("right");
      break;
    case "a":
      keys.a.pressed = true;
      miku.move("left");
      break;
    case "w":
      keys.w.pressed = true;
      miku.move("up");
      break;
    case "s":
      keys.s.pressed = true;
      miku.move("down");
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "w":
      keys.w.pressed = false;
      break;
  }
});

const gameCanvas = document.getElementById("game");
const miku = new Hero(gameCanvas);
miku.getHeroElement();
