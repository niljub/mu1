export class MU1 {
    constructor(){
        this.registers = {
            acc : new Register('ACC', 125, 300),
            sp : new Register('SP', 250, 300),
            pc: new Register('PC', 375, 300),
            ir: new Register('IR',700 , 300),
            din: new Register('Din',825, 300),
            dout: new Register('Dout',250, 100),
        };

        this.memory = []; 

        

    }

    loadProgram(program) {
		if (program.length > 4096) {
			console.log("Program size exceeds memory capacity.");
			return;
		}
		for (let i = 0; i < program.length; i++) {
			mu1.memory[i] = program[i];
		}
	}


	emulateStep() {
		const instruction = mu1.memory[mu1.pc];
		switch (instruction) {

			case 0x01: // Load value into accumulator from adress S| LDA S 
                this.registers.acc = mu1.memory[]
				mu1.acc = mu1.memory[mu1.pc + 1];
				mu1.pc += 2;
				drawCanvas(mu1.acc, mu1.pc);
				break;
			case 0x02: // Store accumulator value to memory
				mu1.memory[mu1.pc + 1] = mu1.acc;
				mu1.pc += 2;
				drawCanvas(mu1.acc, mu1.pc);
				break;
			case 0x03: // Add value to accumulator
				mu1.acc += mu1.memory[mu1.pc + 1];
				mu1.pc += 2;
				drawCanvas(mu1.acc, mu1.pc);
				break;
			// Add more cases for other instructions
			default:
				console.log("Unknown instruction encountered.");
				return;
		}
	}

}