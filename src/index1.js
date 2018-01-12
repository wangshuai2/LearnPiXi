const PIXI = require("pixi.js");

const app = new PIXI.Application();

document.body.appendChild(app.view);

// load the texture we need
PIXI.loader.add('bunny', 'stave.png').load((loader, resources) => {
    // This creates a texture from a 'bunny.png' image
    const bunny = new PIXI.Sprite(resources.bunny.texture);

    // Setup the position of the bunny
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;

    // Rotate around the center
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    app.renderer.backgroundColor = 0xFFFF00;

    // Add the bunny to the scene we are building
    app.stage.addChild(bunny);

    // Listen for frame updates
    app.ticker.add(() => {
         // each frame we spin the bunny around a bit
        bunny.rotation += 0.01;
        // bunny.x += 0.1;
    });
});