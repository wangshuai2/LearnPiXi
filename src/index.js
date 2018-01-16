const PIXI = require("pixi.js");


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


const app = new PIXI.Application(windowWidth, 102);
app.renderer.backgroundColor = 0xFFFFFF;
app.renderer.autoResize = true;

document.body.appendChild(app.view);

const whiteContent = new PIXI.Container();
app.stage.addChild(whiteContent);
const blackContent = new PIXI.Container();
app.stage.addChild(blackContent);

// const keycount = 52;
const keycount = 52;
const blackCount = 36;
const whiteWidth = Math.floor(windowWidth / keycount * 10000) / 10000;
const blackWidth = Math.floor(whiteWidth * 0.65 * 10000) / 10000;
console.log(whiteWidth, blackWidth);

const keys = [];

function drawWhiteKey(x, y) {
    const whiteRectangle = new PIXI.Graphics();

    whiteRectangle.lineStyle(1, 0x333333, 0.8);
    whiteRectangle.beginFill(0xFFFFFF);
    whiteRectangle.drawRect(0, 0, whiteWidth, 100);
    whiteRectangle.endFill();

    whiteRectangle.x = x;

    whiteRectangle.interactive = true;
    whiteRectangle.buttonMode = true;

    let white = {
        info: whiteRectangle,
        color: 0
    }
    keys.push(white);
    whiteContent.addChild(whiteRectangle);
}

function drawBlackKey(x, y) {
    const blackRectangle = new PIXI.Graphics();

    // blackRectangle.lineStyle(1, 0x333333, 0.7);
    blackRectangle.beginFill(0x000000);
    blackRectangle.drawRect(0, 0, blackWidth, 60);
    blackRectangle.endFill();

    blackRectangle.x = x;

    blackRectangle.interactive = true;
    blackRectangle.buttonMode = true;

    let black = {
        info: blackRectangle,
        color: 1
    }
    keys.push(black);
    blackContent.addChild(blackRectangle);
}

window.keyOnClick = function(n) {
    const key = keys[n];

    if(key.color == 0) {
        key.info.beginFill(0xFF0000);
        key.info.drawRect(0, 0, key.info.width, 100);
        key.info.endFill();
    }else{
        key.info.beginFill(0xFF0000);
        key.info.drawRect(0, 0, key.info.width, 60);
        key.info.endFill();
    }
}

window.keyOffClick = function(n) {
    const key = keys[n];

    if(key.color == 0) {
        key.info.beginFill(0xFFFFFF);
        key.info.drawRect(0, 0, key.info.width, 100);
        key.info.endFill();
    }else{
        key.info.beginFill(0x000000);
        key.info.drawRect(0, 0, key.info.width, 60);
        key.info.endFill();
    }
}


window.whiteOnClick = function(n) {
    // console.log(this.fillColor);

    keys[n].beginFill(0xFF0000);
    keys[n].drawRect(0, 0, keys[n].width, 100);
    keys[n].endFill();

    // console.log(this.x);
    // console.log(this.fillColor);
}

window.whiteOffClick = function(n) {
    // console.log(this.fillColor);

    keys[n].beginFill(0xFFFFFF);
    keys[n].drawRect(0, 0, keys[n].width, 100);
    keys[n].endFill();

    // console.log(this.x);
    // console.log(this.fillColor);
}
window.blackOnClick = function(n) {
    // console.log(this.fillColor);

    keys[n].beginFill(0xFF0000);
    keys[n].drawRect(0, 0, keys[n].width, 60);
    keys[n].endFill();

    // console.log(this.x);
    // console.log(this.fillColor);
}

window.blackOffClick = function(n) {
    // console.log(this.fillColor);

    keys[n].beginFill(0x000000);
    keys[n].drawRect(0, 0, keys[n].width, 60);
    keys[n].endFill();
    // console.log(this.x);
    // console.log(this.fillColor);
}


// drawWhiteKey(0, 0);
// console.log(whitekeys[0].x);


// for (let i = 1; i < keycount; i++) {
//     drawWhiteKey(whiteWidth * i, 0);
//     const bx = i % 7;
//     if(bx == 0 || bx == 1 || bx == 4 || bx == 5 || bx == 3) {
//         let l = whiteWidth * (i+1) - blackWidth / 2;
//         drawBlackKey(l, 0);
//     }
// }


for(let i = 0; i < keycount; i++) {
    drawWhiteKey(whiteWidth * i, 0);
    // if(i = 1) {
    //     let l = whiteWidth * (i+1) - blackWidth / 2;
    //     drawBlackKey(l, 0);
    // }
    if(i >= 2 && i < keycount - 1){ 
        const bx = (i - 2) % 7;
        if(bx == 0 || bx == 1 || bx == 4 || bx == 5 || bx == 3){
            let l = whiteWidth * (i+1) - blackWidth / 2;
            drawBlackKey(l, 0);
        }
    }else if(i == 0){
        let l = whiteWidth * (i+1) - blackWidth / 2;
        drawBlackKey(l, 0);
    }
}

// keys[0].beginFill(0xFF0000);
// keys[0].drawRect(0, 0, whiteWidth, 100);
// keys[0].endFill();


const r = [[72], [76], [72], [67], [67], [72], [76], [72], [67], [79], [77], [76], [74], [72], [71], [72], [71], [72], [74], [72], [71], [69], [67], [0], [-1], [0], [72], [76], [72], [67], [67], [76], [79], [76], [72], [76], [72], [74], [71], [72], [69], [71], [67], [69], [66], [67], [69], [71], [72], [74], [76], [78], [79], [69], [0], [81], [0], [81], [0], [81], [0], [71], [72], [74], [76], [78], [79], [81], [83], [72], [0], [84], [0], [84], [0], [84], [0], [74], [79], [83], [86], [84], [83], [81], [79], [78], [76], [79], [78], [81], [79], [78], [76], [76], [74], [72], [71], [74], [72], [71], [69], [67], [0], [0], [0], [-1], [0], [71], [74], [71], [67], [67], [72], [75], [72], [67], [79], [77], [74], [75], [72], [71], [72], [74], [71], [67], [67], [79], [67], [79], [67], [79], [67], [79], [67], [79], [67], [79], [67], [79], [67], [79], [67], [74], [75], [77], [74], [77], [75], [74], [72], [71, 79], [-1], [-1], [0], [0], [0], [60], [64], [60], [55], [55], [60], [64], [60], [55], [67], [65], [64], [62], [60], [59], [60], [59], [60], [62], [60], [59], [57], [55], [0], [-1], [0], [60], [55], [60], [64], [64], [64], [60], [64], [67], [72], [64, 67], [62, 65], [60, 64], [59, 62], [60], [62], [64], [65], [67], [69], [71], [72], [62], [0], [74], [0], [74], [0], [74], [0], [64], [65], [67], [69], [71], [72], [74], [76], [65], [0], [77], [0], [77], [0], [77], [0], [67], [72], [76], [79], [77], [76], [74], [72], [81], [79], [77], [76], [74], [72], [71], [69], [67], [69], [65], [67], [64], [65], [62], [64], [60], [0], [-1], [0], [-1], [0]];

const l = [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]];

function getKey(m) {
    if(m > 0) {
        r[m-1].forEach(function(rk) {

            if(rk == 0 || rk == -1) {
                return false;
            }
            let rkn = rk - 21;
            keyOffClick(rkn);
        })
        r[m].forEach(function(rk) {
            if(rk == 0 || rk == -1) {
                return false;
            }
            let rkn = rk - 21;
            keyOnClick(rkn);
        })
    }else{
        r[m].forEach(function(rk) {
            let rkn = rk - 21;
            keyOnClick(rkn);
        })
    }
}

let x = 0;
setInterval(function() {
    if(x < r.length) {
        console.log(x);
        getKey(x);
        x++;
    }
}, 300);



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

