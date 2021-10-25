const canvas = document.getElementById('canvasX')
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
    console.log(move.x, mouse.y)
})