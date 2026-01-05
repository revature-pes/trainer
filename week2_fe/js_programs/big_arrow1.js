const trainer = {
	name : this,
	tech1() {
		console.log('this:', this);
	},
	tech2 : () => {
        console.log('this:', this);
		console.log('this:', this.name); // this here references to no object. Thus accessing some member via no object leads to undefined.  
	}
};

const walk1 = trainer.tech1; 
walk1()
const walk2 = trainer.tech2;
walk2()