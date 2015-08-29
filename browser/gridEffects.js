(function(GRASP, $) {

    var colors = new Array(
        [62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);

    var step = 0;
    //color table indices for: 
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0, 1, 2, 3];

    //transition speed
    var gradientSpeed = 0.002;
    var GRID_ROWS,
        GRID_COLS,
        GRID_ELEMENT,
        MATRIX_ROWS,
        MATRIX_COLS,
        MATRIXHEADER_ELEMENT,
        MATRIX_ELEMENT,
        A, C;

    GRASP.config = {
        gridContainer: "grid",
        matrixContainer: "matrix",
        matrixHeader: "matrixHeader"
    }

    function updateGradient() {

        if ($ === undefined) return;

        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

        $('#gradient').css({
            background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
        }).css({
            background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
        });

        step += gradientSpeed;
        if (step >= 1) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

        }
        //}

    };

    GRASP.start = function() {
        GRID_ROWS = 7;
        GRID_COLS = 50;
        MATRIX_ROWS = GRID_ROWS * 2 - 1;
        MATRIX_COLS = GRID_COLS * 2 - 1;
        // createGrid();

        createAutocorrelationMatrix();
        setInterval(updateGradient, 5);
        //animate();

    };


    function createAutocorrelationMatrix() {
        MATRIXHEADER_ELEMENT = $("#" + GRASP.config.matrixHeader);
        MATRIX_ELEMENT = $("#" + GRASP.config.matrixContainer);
        MATRIX_ELEMENT.html("");

        //MATRIXHEADER_ELEMENT.css("top", parseInt(GRID_ELEMENT.offset().top + (GRID_ROWS * 36)) + "px");
        MATRIX_ELEMENT.css("top", parseInt(MATRIXHEADER_ELEMENT.offset().top + MATRIXHEADER_ELEMENT.height()) + "px");

        var cellSize = Math.ceil((GRID_ROWS * 36) / MATRIX_ROWS);
        var coord;

        for (var i = 1; i <= MATRIX_ROWS; i++) {
            for (var j = 1; j <= MATRIX_COLS; j++) {
                coord = "" + i + "," + j;
                $(document.createElement("div"))
                    .addClass("autocorrMatrixCellWrapper")
                    .attr("alt", coord)
                    .css("left", parseInt((j - 1) * cellSize, 10) + "px")
                    .css("top", parseInt((i - 1) * cellSize, 10) + "px")
                    .data("row", i).data("col", j)
                    .appendTo("#" + GRASP.config.matrixContainer)
                    .on("mouseenter", {
                        isMatrix: true
                    }, cellMouseEnter)
                    .on("mouseleave", cellMouseLeave);

                $(document.createElement("div"))
                    .addClass("autocorrMatrixCell autocorrMatrixCellUnselected")
                    .attr("alt", coord)
                    .css("left", parseInt((j - 1) * cellSize, 10) + "px")
                    .css("top", parseInt((i - 1) * cellSize, 10) + "px")
                    .appendTo("#" + GRASP.config.matrixContainer);
            }
        }

        MATRIX_ELEMENT.height(36 * GRID_ROWS);
        MATRIX_ELEMENT.width(36 * GRID_COLS);
    }


    function cellMouseEnter(e) {
        var i = $(this).data("row");
        var j = $(this).data("col");

        var x = e.data.isMatrix ? Math.ceil((GRID_ROWS * 36) / MATRIX_ROWS) : 36;

        var div = $(document.createElement("div"))
            .addClass("cellCoordinates cellCoordText")
            .css("left", parseInt((j - 1) * x, 10) + "px")
            .css("top", parseInt((i - 1) * x, 10) + "px")
            .text(i + ", " + j);

        $(this).before(div);
    }

    function cellMouseLeave() {
        $(this).prev().remove();
    }

    // function animate() {
    //     $(document).keydown(function() {
    //         //$('#matrix').animate({left: '+=10px'}, 500);
            
    //     })
    // }

}(window.GRASP = window.GRASP || {}, jQuery));

$(document).ready(function() {


    var frequency = {};
    frequency['65']=[]; //a
    frequency['66']=[]; //w
    frequency['83']=[]; //s
    frequency['69']=[]; //e
    frequency['68']=[]; //d
    frequency['70']=[]; //f
    frequency['71']=[]; //g
    frequency['72']=[]; //h
    frequency['74']=[]; //j
    frequency['75']=[]; //k
    frequency['76']=[]; //l
    frequency['76']=[]; //t
    frequency['89']=[]; //y
    frequency['85']=[]; //u
    frequency['79']=[]; //o
    frequency['80']=[]; //p
    frequency['186']=[]; //semicolon
    frequency['222']=[]; //singlequote



    GRASP.start();
    $(document).keydown(animate);

    function animate(event)
    {
        var div = $(document).find('.autocorrMatrixCellWrapper');
        for(var i = 0; i < 910; i++){
            $(div[i.toString()]).css('opacity', '0.6');
        }
        var key = event.keyCode.toString();
        if(frequency[key]){
            var div = $(document).find('.autocorrMatrixCellWrapper');
           
            for(var i = 0; i < 13; i++){
                for(var j = 0; j < 70; j++){
                     var row = Math.floor(Math.random()*13);
                var column = Math.floor(Math.random()*70);
                    $(div[row*column.toString()]).css('opacity', '0.2');
                }
            }
            //$(div['222']).css('background', 'red');
        }

    }

});