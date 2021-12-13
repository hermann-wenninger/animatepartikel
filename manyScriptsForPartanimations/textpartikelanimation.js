let canvas = document.getElementById("root");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas.width, canvas.height);
let adjustX = 2;
let adjustY = 2;
let partArray = [];

const mouse = {
  x: null,
  y: null,
  radius: 250,
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  //console.log(mouse.x, mouse.y);
});

ctx.fillStyle = "white";
ctx.font = "2.8em Verdana";
ctx.fillText("Dieser ganze Zoo", 5, 50);
ctx.strokeStyle = "white";
ctx.strokeRect(0, 0, 550, 500);
const textCords = ctx.getImageData(0, 0, 450, 600);

class Partikel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 1;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 30 + 2;
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
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirX * force * this.density;
    let directionY = forceDirY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}
console.log(textCords.data);
//init partikels
function init() {
  partArray = [];
  for (let y = 0, y2 = textCords.height; y < y2; y++) {
    for (let x = 0, x2 = textCords.width; x < x2; x++) {
      if (textCords.data[y * 4 * textCords.width + x * 4 + 3] > 128) {
        let positionX = x + adjustX;
        let positionY = y + adjustY;
        partArray.push(new Partikel(positionX * 2, positionY * 2));
      }
    }
  }
}
init();
console.log(partArray);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < partArray.length; i++) {
    partArray[i].draw();
    partArray[i].update();
    //console.log(partArray[i]);
  }
  requestAnimationFrame(animate);
}
animate();

function connect() {
  for (let a = 0; a < partArray.length; a++) {
    for (let b = a; b < partArray.length; b++) {
      //let dx = mouse.x - this.x;
      //let dy = mouse.y - this.y;
      //let distance = Math.sqrt(dx * dx + dy * dy);
      let dx = partArray[a].x - partArray[b].x;
      let dy = partArray[a].y - partArray[b].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
    }
  }
}
