let p5js_namespace = function(sketch) {
    let canvas, lineWidth, drawing;

    sketch.setup = function() {
        canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
        canvas.position(0, 0);
        canvas.style('pointer-events', 'none');
        sketch.clear();
        drawing = false;
        lineWidth = 4;
    }

    sketch.draw = function() {
        sketch.stroke(0);
        sketch.strokeWeight(lineWidth);
        if (drawing && sketch.mouseIsPressed) {
            sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        }
    }

    /**
     * @desc Ctrl-Shift-Z and clicked to draw. Up arrow to increase line width. Down arrow to
     * decrease line width. Ctrl-M to clear all drawings.
     */
    sketch.keyPressed = function() {
        if (sketch.keyCode === 90 && sketch.keyIsDown(17) && sketch.keyIsDown(16)) {
            drawing = !drawing;
            if (drawing) {
                canvas.style('pointer-events', 'auto');
            } else {
                canvas.style('pointer-events', 'none');
            }
        } else if (sketch.keyCode === 40 && sketch.keyIsDown(17) && sketch.keyIsDown(16)) {
            if (lineWidth > 1) {
                lineWidth--;
            }
        } else if (sketch.keyCode === 38 && sketch.keyIsDown(17) && sketch.keyIsDown(16)) {
            lineWidth++;
        } else if (sketch.keyCode === 77 && sketch.keyIsDown(17) && sketch.keyIsDown(16)) {
            sketch.clear();
        }
    }
}

var myp5 = new p5(p5js_namespace);
