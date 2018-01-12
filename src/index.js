const PIXI = require("pixi.js");


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


const app = new PIXI.Application({
    width: windowWidth
});
app.renderer.backgroundColor = 0xFFFFFF;
app.renderer.autoResize = true;

document.body.appendChild(app.view);

const whiteContent = new PIXI.Container();
app.stage.addChild(whiteContent);
const blackContent = new PIXI.Container();
app.stage.addChild(blackContent);

// const keycount = 52;
const keycount = 28;
const whiteWidth = Math.floor(windowWidth / keycount * 100) / 100;
const blackWidth = whiteWidth * 0.6;
const whitekeys = [];

function drawWhiteKey(x, y) {
    const rectangle = new PIXI.Graphics();

    rectangle.lineStyle(1, 0x333333, 0.8);
    rectangle.beginFill(0xFFFFFF);
    rectangle.drawRect(0, 0, whiteWidth, 220);
    rectangle.endFill();

    rectangle.x = x;

    whitekeys.push(rectangle);
    whiteContent.addChild(rectangle);
}

const blackkeys = [];
function drawBlackKey(x, y) {
    const black = new PIXI.Graphics();

    black.lineStyle(1, 0x333333, 0.7);
    black.beginFill(0x000000);
    black.drawRect(0, 0, blackWidth, 140);
    black.endFill();

    black.x = x;
    blackkeys.push(black);
    blackContent.addChild(black);
}

// drawWhiteKey(0, 0);
// console.log(whitekeys[0].x);
for (let i = 0; i < keycount; i++) {
    drawWhiteKey(whiteWidth * i, 0);
    const bx = i % 7;
    if(bx == 0 || bx == 1 || bx == 4 || bx == 5 || bx == 3) {
        let l = whiteWidth * (i+1) - blackWidth / 2;
        drawBlackKey(l, 0);
    }
}

console.log(blackkeys[0]);
blackkeys[0].fillColor = 0xFF0000;
console.log(blackkeys[0]);

// drawBlackKey(35, 0);
// drawBlackKey(85, 0);
// drawBlackKey(185, 0);
// drawBlackKey(235, 0);
// drawBlackKey(285, 0);
// drawBlackKey(385, 0);
// drawBlackKey(435, 0);
// drawBlackKey(535, 0);
// drawBlackKey(585, 0);
// drawBlackKey(635, 0);
// drawBlackKey(735, 0);
// drawBlackKey(785, 0);
// drawBlackKey(885, 0);
// drawBlackKey(935, 0);
// drawBlackKey(985, 0);

