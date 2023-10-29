export function createRegisterContext(ctx, rectX, rectY, text, value) {
    var rectHeight = 50;
    var rectWidth = 100;

    ctx.lineWidth = 4;
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#abc";
    roundRect(ctx, rectX, rectY, rectWidth, rectHeight, 10, true);
    ctx.font = "20px Georgia";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#000000";
    ctx.fillText(value, rectX + rectWidth / 2, rectY + rectHeight / 2);
    ctx.fillText(text, rectX + rectWidth / 2, rectY - 15);
    return ctx;
}

export function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == "undefined") {
        stroke = true;
    }
    if (typeof radius === "undefined") {
        radius = 5;
    }
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height
    );
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.moveTo(25, -100);

    ctx.closePath();
    if (stroke) {
        ctx.stroke();
    }
    if (fill) {
        ctx.fill();
    }
}

export function drawArrow(points) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
	
	ctx.moveTo(points[0][0], points[0][1]);

	for (var key of points) {
		ctx.lineTo(key[0], key[1]);
	}




	//arrow
	ctx.lineWidth = 1.5;

    ctx.stroke();
}