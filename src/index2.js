const PIXI = require("pixi.js");


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


const app = new PIXI.Application({
    width: windowWidth
});
app.renderer.backgroundColor = 0xFFFFFF;
app.renderer.autoResize = true;

document.body.appendChild(app.view);

const whitekeys = [];

function drawWhiteKey(x, y) {
    const rectangle = new PIXI.Graphics();

    rectangle.lineStyle(1, 0x333333, 0.8);
    rectangle.beginFill(0xFFFFFF);
    rectangle.drawRect(x, y, 50, 220);
    rectangle.endFill();

    console.log(rectangle);
    console.log(rectangle.x);
    whitekeys.push(rectangle);
    app.stage.addChild(rectangle);
}

const blackkeys = [];
function drawBlackKey(x, y) {
    const black = new PIXI.Graphics();

    black.lineStyle(1, 0x333333, 0.7);
    black.beginFill(0x000000);
    black.drawRect(x, y, 30, 140);
    black.endFill();

    blackkeys.push(black);
    app.stage.addChild(black);
}

// drawWhiteKey(0, 0);
// console.log(whitekeys[0].x);
for (let i = 0; i < 21; i++) {
    drawWhiteKey(50 * i, 0);
}

drawBlackKey(35, 0);
drawBlackKey(85, 0);
drawBlackKey(185, 0);
drawBlackKey(235, 0);
drawBlackKey(285, 0);
drawBlackKey(385, 0);
drawBlackKey(435, 0);
drawBlackKey(535, 0);
drawBlackKey(585, 0);
drawBlackKey(635, 0);
drawBlackKey(735, 0);
drawBlackKey(785, 0);
drawBlackKey(885, 0);
drawBlackKey(935, 0);
drawBlackKey(985, 0);

blackkeys[2].beginFill(0xFF0000);
blackkeys[2].endFill();

app.stage.addChild(blackkeys[2]);