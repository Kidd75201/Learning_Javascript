
$(document).ready(function () {
    'use strict';
    paper.install(window); // Installs Paper.js in the global scope
    paper.setup(document.getElementById("mainCanvas")); // attach Paper.js to the <canvas>

    // Crating 64 circles. The x and y coordinates are the important piece of information
    // we expliciitly specify where the circles will start and how far apart they'll be spaced.
    let c;
    for (let x = 25; x < 400; x+=50) {
        for (let y = 25; y < 400; y+=50){
            c = Shape.Circle(x,y, 20);
            c.fillColor = 'green';
        }
        
    }

    paper.view.draw();
});
