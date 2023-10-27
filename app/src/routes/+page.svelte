<script>
	import { onMount } from "svelte";

	let mu1 = {
		memory: new Uint8Array(4096),
		pc: 0,
		acc: 0,
	};

	function initialize() {
		mu1.pc = 0;
		mu1.acc = 0;
		// Initialize memory and other components
	}

	function loadProgram(program) {
		if (program.length > 4096) {
			console.log("Program size exceeds memory capacity.");
			return;
		}
		for (let i = 0; i < program.length; i++) {
			mu1.memory[i] = program[i];
		}
	}

	function emulateStep() {
		const instruction = mu1.memory[mu1.pc];
		switch (instruction) {
			case 0x01: // Load value into accumulator
				mu1.acc = mu1.memory[mu1.pc + 1];
				mu1.pc += 2;
				drawStuff(mu1.acc, mu1.pc);
				break;
			case 0x02: // Store accumulator value to memory
				mu1.memory[mu1.pc + 1] = mu1.acc;
				mu1.pc += 2;
				drawStuff(mu1.acc, mu1.pc);
				break;
			case 0x03: // Add value to accumulator
				mu1.acc += mu1.memory[mu1.pc + 1];
				mu1.pc += 2;
				drawStuff(mu1.acc, mu1.pc);
				break;
			// Add more cases for other instructions
			default:
				console.log("Unknown instruction encountered.");
				return;
		}
	}

	onMount(() => {
		const program = [0x01, 0x05, 0x03, 0x08, 0x02, 0x00]; // Sample program bytes
		loadProgram(program);
		drawStuff();
	});
	function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
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

	function drawAcc(value) {
		if (document.getElementById("myCanvas") != null) {
			const canvas = document.getElementById("myCanvas");
			const ctx = canvas.getContext("2d");
			
			var rectX = 25;
			var rectY = 450;

			ctx.lineWidth = 4;
			ctx.strokeStyle = "#000000";
			ctx.fillStyle = "#abc";
			roundRect(ctx, rectX, rectY, 100, 50, 10, true);
			ctx.font = "20px Georgia";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "#000000";
			var rectHeight = 50;
			var rectWidth = 100;
			ctx.fillText(value, rectX + rectWidth / 2, rectY + rectHeight / 2);
			ctx.fillText("ACC", rectX + rectWidth / 2, rectY-15);
		} else {
			alert("Canvas not found!");
		}
	}


	function drawPc(value) {
		if (document.getElementById("myCanvas") != null) {
			const canvas = document.getElementById("myCanvas");
			const ctx = canvas.getContext("2d");
			
			var rectX = 150;
			var rectY = 450;
			
			ctx.lineWidth = 4;
			ctx.strokeStyle = "#000000";
			ctx.fillStyle = "#abc";
			roundRect(ctx, rectX, rectY, 100, 50, 10, true);
			ctx.font = "20px Georgia";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "#000000";
			var rectHeight = 50;
			var rectWidth = 100;
			ctx.fillText(value, rectX + rectWidth / 2, rectY + rectHeight / 2);
			ctx.fillText("PC", rectX + rectWidth / 2, rectY-15);
		} else {
			alert("Canvas not found!");
		}
	}


	function drawStuff(acc = "NULL", pc = "NULL"){
		drawAcc(acc);
		drawPc(pc);
	}
</script>

<div>
	<canvas
		id="myCanvas"
		width="600"
		height="600"
		style="border:1px solid grey"
	/>

	<h2>Current Values</h2>
	<p>Accumulator (ACC): {mu1.acc}</p>
	<p>Program Counter (PC): {mu1.pc}</p>
	<button on:click={emulateStep}>Step</button>
</div>

<style>
	/* Add your styles here */
</style>
