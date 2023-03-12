//canvas set-up
const w = 1000;
const rw = w / 1000;

const canv = document.getElementById("canvas");
canv.width = w; canv.height = w;
const ctx = canv.getContext("2d");

//background
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, w, w)
ctx.strokeStyle = "#000000";
ctx.lineWidth = 0.25;

//make off-screen canvas
const buffer = document.createElement("canvas");
buffer.width = w; buffer.height = w;
const bufferCtx = buffer.getContext("2d", { willReadFrequently: true });


//draw hello world off-screen
bufferCtx.font = rw * 140 + "px monospace";
bufferCtx.fillText("Hello, world ", rw * 43, rw * 500);

let step = 5;
let y = 400 * rw; 

function row() {
    y += step;
    if (y > w - 300) return;

    for (let x = 0; x < w; x += step) {
        if (bufferCtx.getImageData(x, y, 1, 1).data[3]) {
            line(x, y, x + Math.random() - 0.5, y + Math.random() - 0.5)
            
        }
    }
    setTimeout(() => row(), 0)
}

row();


function line(x1, y1, x2, y2) {
    
    let angle = Math.atan2(y2 - y1, x2 - x1);
    
    ctx.save();

    ctx.translate(x1 - Math.cos(angle) * w * 1.5, y1 - Math.sin(angle) * w * 1.5);
    ctx.rotate(angle)

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(rw * 3000, 0);
    ctx.stroke();

    ctx.restore();

}

