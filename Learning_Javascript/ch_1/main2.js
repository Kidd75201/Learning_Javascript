
$(document).ready(function () {
    'use strict';
    paper.install(window); // Installs Paper.js in the global scope
    paper.setup(document.getElementById("mainCanvas")); // attach Paper.js to the <canvas>

    // Draw a 'hello world' circle in the center
    let tool = new Tool();
    let c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    let text = new PointText(200,200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';


    // Draw a circle anywhere on mouse click

    tool.onMouseDown = function(event) {
        let c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    };

    paper.view.draw();
});

