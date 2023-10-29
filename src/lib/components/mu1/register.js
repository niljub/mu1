import { roundRect } from "../helpers/draw";


export class Register {
    constructor(registerName, positionX, positionY, value = 'NULL') {
        this.registerName = registerName;
        this.positionX = positionX;
        this.positionY = positionY;
        this.value = value;
    }

    drawRegister() {
        const canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        var rectHeight = 50;
        var rectWidth = 100;

        ctx.lineWidth = 4;
        ctx.strokeStyle = "#000000";
        ctx.fillStyle = "#abc";

        roundRect(ctx, this.positionX, this.positionY, rectWidth, rectHeight, 10, true);

        ctx.font = "20px Georgia";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000000";

        ctx.fillText(this.value, this.positionX + rectWidth / 2, this.positionY + rectHeight / 2);
        ctx.fillText(this.registerName, this.positionX + rectWidth / 2, this.positionY - 15);

        return ctx;
    }

    writeRegister(value) {
        this.value = value;
    }
}
