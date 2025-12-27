const student = {
	name : 'mani',
	techStudent() {
		console.log(this);
	}
};

const trainer = {
	name : 'Nithin',
	techTrainer() {
		console.log(this);
	}
};

const walk1 = trainer.techTrainer.bind(student);
walk1();

const walk2 = trainer.techTrainer;
walk2();

const walk3 = trainer.techTrainer.bind(trainer);
walk3();