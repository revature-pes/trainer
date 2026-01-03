const trainer = {
	name : 'nithin',
	tech2() {
		console.log('this:', this);
	},
	tech1 : (tr) => {
		console.log('this:', tr.name);
	}
};

const walk1 = trainer.tech1;
walk1(trainer); // nithin

const walk2 = trainer.tech2;
walk2(); //