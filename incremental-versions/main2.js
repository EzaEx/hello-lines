//canvas set-up
const w = 1000;
const rw = w / 1000;

const canv = document.getElementById("canvas");
canv.width = w; canv.height = w;
const ctx = canv.getContext("2d");

//background
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, w, w)
ctx.fillStyle = "#000000";

//make off-screen canvas
const buffer = document.createElement("canvas");
buffer.width = w; buffer.height = w;
const bufferCtx = buffer.getContext("2d", { willReadFrequently: true });


//draw hello world off-screen
bufferCtx.font = rw * 140 + "px monospace";
bufferCtx.fillText("Hello, world ", rw * 43, rw * 500);

let step = 10;
for (let y = 0; y < w; y += step) {
    for (let x = 0; x < w; x += step) {
        if (bufferCtx.getImageData(x, y, 1, 1).data[3]) {
            ctx.beginPath()
            ctx.arc(x, y, 4, 0, 2 * Math.PI, false);
            ctx.fill();
        }
    }
}