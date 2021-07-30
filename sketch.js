let p5js_namespace = function(sketch) {
    let canvas, lineWidth, drawing;
    let offsetX = 0;
    let offsetY = 0;

    sketch.setup = function() {
        canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
        canvas.position(offsetX, offsetY);
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
     * @desc Ctrl-Shift-Z and clicked to draw. Ctrl-Shift-Up to increase line width. 
     * Ctrl-Shift-Down to decrease line width. Ctrl-Shift-M to clear all drawings.
     */
    sketch.keyPressed = function() {
        // 17 is Ctrl, 16 is Shift
        if (sketch.keyIsDown(17) && sketch.keyIsDown(16)) {
            if (sketch.keyCode === 90) {
                drawing = !drawing;
                canvas.style('pointer-events', drawing ? 'auto': 'none');
            } else if (sketch.keyCode === 40 && lineWidth > 1) {
                lineWidth--;
            } else if (sketch.keyCode === 38) {
                lineWidth++;
            } else if (sketch.keyCode === 77) {
                sketch.clear();
            }
        }
    }
}

let p5js_instance = new p5(p5js_namespace);
