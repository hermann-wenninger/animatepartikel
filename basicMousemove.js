const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let partikelArray = []

const mouse = {
    x: null,
    y: null,
    radius: 120
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    //console.log(mouse.x, mouse.y)
});

ctx.fillStyle = 'grey';
ctx.font = '30px Verdana';
ctx.fillText('A', 0, 30);

const data = ctx.getImageData(0,0,100,100);


class Particle {
    constructor(x,y=30){
        this.x = x;
        this.y = y;
        this.size = 330;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random()* 30) +1;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.beginPath();
        ctx.fill();
    }
}

function init(){
    partikelArray = [];
    for(let i = 0; i < 100; i++){
        let x = Math.random()*canvas.width;
        let y = 34//Math.random()*canvas.heigth;
        partikelArray.push(new Particle(x, y));
    }
    //partikelArray.push(new Particle(80, 80));
    //partikelArray.push(new Particle(180, 180));
    //partikelArray.push(new Particle(280, 280));
}
init();
console.log(partikelArray)

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    for(let i = 0; i< partikelArray.length; i++){
        partikelArray[i].draw();
    }
    requestAnimationFrame(animate);
}
animate();
