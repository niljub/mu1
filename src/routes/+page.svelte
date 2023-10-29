<script>
	import { onMount } from "svelte";

	import { drawArrow } from "$lib/components/helpers/draw";

	import { Register } from "$lib/components/mu1/register";

	let mu1 = {
		memory: new Uint8Array(4096),
		pc: 0,
		acc: 0,
	};

	let registers = {
		acc : new Register('ACC', 125, 300),
		sp : new Register('SP', 250, 300),
		pc: new Register('PC', 375, 300),
		ir: new Register('IR',700 , 300),
		din: new Register('Din',825, 300),
		dout: new Register('Dout',250, 100),
	};



	onMount(() => {
		
		const program = [0x01, 0x05, 0x03, 0x03, 0x02, 0x00]; // Sample program bytes
		drawCanvas();
	});



	//start turning end




	function drawCanvas(accValue = "NULL", spValue = "NULL", pcValue = "NULL") {
		registers.acc.drawRegister(accValue);
		registers.sp.drawRegister(spValue);
		registers.pc.drawRegister(pcValue);
		registers.dout.drawRegister(pcValue);
		registers.ir.drawRegister(pcValue);
		registers.din.drawRegister(pcValue);

		var test = [[175,350],[175,400],[300, 400],[300, 410]];
		var test2 = [[175,300],[175,250],[300, 250]];

		var test3 = [[300,350], [300, 400]];
		var test4 = [[425,350],[425,400],[300, 400],[300, 410]];
		var test5 = [[300,300],[300,150]];



		drawArrow(test);
		drawArrow(test2);
		drawArrow(test3);
		drawArrow(test4);
		drawArrow(test5);



	}

</script>

<div>
	<canvas
		id="myCanvas"
		width="1000"
		height="600"
		style="border:1px solid grey"
	/>

	<h2>Current Values</h2>
	<p>Accumulator (ACC): {mu1.acc}</p>
	<p>Program Counter (PC): {mu1.pc}</p>
	<button>Step</button>
</div>

<style>

</style>
