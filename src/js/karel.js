
function Karel(element, world) {
    var row = 0, col = 0,scr=2,lcr=5;
    var direction = "N";

    var context = element.getContext("2d");
    this.draw = function () {
        world.draw();
        var cellCenter = world.getCellCenter(row, col);
        switch (direction) {
            case "N":
                circle(context, cellCenter.x, cellCenter.y - scr, scr);
                circle(context, cellCenter.x, cellCenter.y + lcr, lcr);
                break;
            case "W":
                circle(context, cellCenter.x - scr, cellCenter.y, scr);
                circle(context, cellCenter.x + lcr, cellCenter.y, lcr);
                break;
            case "S":
                circle(context, cellCenter.x, cellCenter.y + scr, scr);
                circle(context, cellCenter.x, cellCenter.y - lcr, lcr);
                break;
            case "E":
                circle(context, cellCenter.x + scr, cellCenter.y, scr);
                circle(context, cellCenter.x - lcr, cellCenter.y, lcr);
                break;
        }
    };
    this.move = function () {
        var worldSize = world.getSize();

        switch (direction) {
            case "N":
                if (row === 0) alert("cannot move");
                else row = row - 1;
                break;
            case "W":
                if (col === 0) alert("cannot move");
                else col = col - 1;
                break;
            case "S":
                if (row === worldSize.height-1) alert("cannot move");
                else row = row + 1;
                break;
            case "E":
                if (col === worldSize.width-1) alert("cannot move");
                else col = col + 1;
                break;
        }
        setInterval(this.draw, 1000);
    };
    this.turnLeft = function () {
        switch (direction) {
            case "N": direction = "W"; break;
            case "W": direction = "S"; break;
            case "S": direction = "E"; break;
            case "E": direction = "N"; break;
        }
        setTimeout(this.draw, 1000);
        //this.draw();
    };
    //Starting the cons logic
    this.draw();
}
function circle(context,x,y,r){
context.beginPath();
                context.strokeStyle = "red";
                context.lineWidth = 1;
                context.arc(x, y, r, 0, (Math.PI / 180) * 360, false);
                context.stroke();
                context.closePath();
}
