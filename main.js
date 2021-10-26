const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let partikelArray = [];

const mouse = {
    x: null,
    y: null,
    radius: 150
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x, mouse.y);
});

ctx.fillStyle = 'white';
ctx.font = '30px Verdana';
ctx.fillText('A', 0, 30);
const data = ctx.getImageData(0,0,100,100);


class Particle {
    constructor(x,yy){
        this.x = x;
        this.y = yy;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random()* 50) +1;
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.closePath();
        ctx.fill();
    }
    update(){
        let dx = mouse.x - this.x;
        let dy = mouse.y -this.y;
        let distance = Math.sqrt(dx*dx+dy*dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        
        if(distance <300){
            this.x += forceDirectionX *3;
            this.y += forceDirectionY *3;
        }else{
            this.size = 3;
        }
    }
}

function init(){
    partikelArray = [];
    for(let i = 0; i < 10000; i++){
        let y = Math.random() * 1500;
        let x = Math.random() * 1500;
       
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
        partikelArray[i].update();
    }
    requestAnimationFrame(animate);
}

animate();
