$(document).ready(function () {
    var worldCanvas = document.getElementById("world");
    if (worldCanvas === null) {
        console.log("Not able to get the world canvas");
    }
    else {
        var world = new World(worldCanvas);
        world.draw();
        karel = new Karel(worldCanvas, world);
    }

});
$("#back-button").click(function () {
    var program = $("#codeArea").val();
    eval(program);
});
$("#turnLeft-button").click(function () {
    var program = "turnLeft();";
    eval(program);
});
$("#move-button").click(function () {
    var program = "move();";
    eval(program);
});
$("#draw-button").click(function () {
    var world = new World(document.getElementById("world"));
    world.draw();
    karel = new Karel(document.getElementById("world"), world);
});
function turnLeft() {
    karel.turnLeft();
}
function move() {
    karel.move();
}
var karel = undefined;