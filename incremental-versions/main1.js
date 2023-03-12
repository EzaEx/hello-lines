//canvas set-up
const w = 1000;
const rw = w / 1000;

const canv = document.getElementById("canvas");
canv.width = w; canv.height = w;
const ctx = canv.getContext("2d");

//background
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, w, w)

//text
ctx.fillStyle = "#000000";
ctx.font = 140 * rw + "px monospace";
ctx.fillText("Hello, world ", 43 * rw, 500 * rw);

