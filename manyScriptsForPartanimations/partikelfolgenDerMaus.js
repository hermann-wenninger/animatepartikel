//partikel folgen der Maus


let canvas = document.getElementById("root");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas.width, canvas.height);
let partArray = [];

const mouse = {
  x: null,
  y: null,
  radius: 150,
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  //console.log(mouse.x, mouse.y);
});

ctx.fillStyle = "white";
ctx.font = "30px Verdana";
ctx.fillText("Dieser ganze Zoo", 30, 30);
ctx.strokeStyle = "white";
ctx.strokeRect(0, 0, 550, 500);

const data = ctx.getImageData(0, 0, 350, 500);

class Partikel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 30 + 1;
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirX = dx / distance;
    let forceDirY = dy / distance;

    if (distance < 100) {
      this.x += forceDirX * 2;
      this.y += forceDirY * 2;
    } else {
      this.size = 3;
    }
  }
}
function init() {
  partArray = [];
  for (let i = 0; i < 1000; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    partArray.push(new Partikel(x, y));
  }
}
init();
//console.log(partArray);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < partArray.length; i++) {
    partArray[i].draw();
    partArray[i].update();
  }
  requestAnimationFrame(animate);
}
animate();
