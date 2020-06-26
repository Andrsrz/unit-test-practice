const analyze = (arr) => {
	let quickMath = {
		average: average(arr) ? average(arr) : 0,
		min: min(arr) ? min(arr) : 0,
		max: max(arr) ? max(arr) : 0,
		length: arr.length
	};
	return quickMath;
}

const average = (arr) => {
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum / arr.length;
}

const min = (arr) => {
	let min = arr[0];
	for(let i = 0; i < arr.length; i++){
		min > arr[i] ? min = arr[i] : min;
	}
	return min;
}

const max = (arr) => {
	let max = arr[0];
	for(let i = 0; i < arr.length; i++){
		max < arr[i] ? max = arr[i] : max;
	}
	return max;
}

module.exports = analyze;
