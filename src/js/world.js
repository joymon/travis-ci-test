//Class World
function World(canvas) {
    this.cols = 9;
    this.rows = 9;
    this.context = canvas.getContext("2d");
    this.boardOffset = 0;
    this.boardWidth;
    this.size = {width:9,height:9};
}
World.prototype.getSize = function () {
    return this.size;
};
World.prototype.getScreenDimensions = function () {
    var w, h;
    if ($(window).width() > $(window).height()) {
        w = $(window).width();
        h = $(window).height();
    } else {
        h = $(window).width();
        w = $(window).height();
    }
};
World.prototype.getCellSize = function () {
    return {w:this.boardWidth / this.cols,h:this.boardHeight / this.rows};
};
World.prototype.getCellCenter = function (row, col) {
    var cellWidth=this.boardWidth / this.cols;
    var cellHeight = this.boardHeight / this.rows;
    return { x:(col*cellWidth) + (cellWidth/2) , y: (row* cellHeight) + (cellHeight/2) };
};
World.prototype.draw = function () {
    this.context.strokeStyle = "black";
    this.boardWidth = this.context.canvas.width;
    this.boardHeight = this.context.canvas.height;
    var x = this.boardOffset;
    var y = 0;

    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    this.iDrawSquares(x, y);
};
World.prototype.iDrawBoardSquare = function (x, y) {
    this.context.fillStyle = "black";
    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";
    this.context.strokeRect(x, y, this.boardWidth, this.boardHeight);
};
World.prototype.iDrawSquares = function (x, y) {
    this.context.strokeStyle = "grey";
    var cw = this.boardWidth / this.cols;
    var ch = this.boardHeight / this.rows;
    // draw all 81 little squares
    this.context.lineWidth = 1;
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
            this.context.strokeRect(x + (j * cw), y + (i * ch), cw, ch);
        }
    }
};