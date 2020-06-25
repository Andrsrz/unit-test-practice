const Calculator = {
	add: (x, y) => {
		let myX = x ? x : 0;
		let myY = y ? y : 0;
		return myX + myY;
	},
	subtract: (x, y) => {
		let myX = x ? x : 0;
		let myY = y ? y : 0;
		return myX - myY;
	},
	divide: (x, y) => {
		let myX = x ? x : 0;
		if(y === 0){
			return "No divide by 0";
		}
		let myY = y ? y : 1;
		return myX / myY;
	},
	multiply: (x, y) => {
		let myX = x ? x : 0;
		let myY = y ? y : 0;
		return myX * myY;
	}
};
module.exports = Calculator;
