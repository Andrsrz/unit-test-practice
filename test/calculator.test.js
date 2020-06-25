const Calculator = require('../src/calculator');

test('Add Method (1) Positive Numbers', () => {
	expect(Calculator.add(5, 7)).toBe(12);
});

test('Add Method (2) Negative Numbers', () => {
	expect(Calculator.add(-5, -7)).toBe(-12);
});

test('Add Method (3) Positive and Negative Numbers', () => {
	expect(Calculator.add(-5, 7)).toBe(2);
});

test('Add Method (4) No Numbers', () => {
	expect(Calculator.add()).toBe(0);
});

test('Subtract Method (1) Positive Numbers', () => {
	expect(Calculator.subtract(5, 7)).toBe(-2);
});

test('Subtract Method (2) Negative Numbers', () => {
	expect(Calculator.subtract(-5, -7)).toBe(2);
});

test('Subtract Method (3) Positive and Negative Numbers', () => {
	expect(Calculator.subtract(5, -7)).toBe(12);
});

test('Subtract Method (4) No Numbers', () => {
	expect(Calculator.subtract()).toBe(0);
});

test('Divide Method (1) Positive Numbers', () => {
	expect(Calculator.divide(5, 10)).toBe(0.5);
});

test('Divide Method (2) Negative Numbers', () => {
	expect(Calculator.divide(-200, -10)).toBe(20);
});

test('Divide Method (3) Positive and Negative Numbers', () => {
	expect(Calculator.divide(50, -10)).toBe(-5);
});

test('Divide Method (4) Divide by 0', () => {
	expect(Calculator.divide(5, 0)).toMatch("No divide by 0");
});

test('Multiply Method (1) Positive Numbers', () => {
	expect(Calculator.multiply(5, 10)).toBe(50);
});

test('Multiply Method (2) Negative Numbers', () => {
	expect(Calculator.multiply(-200, -10)).toBe(2000);
});

test('Multiply Method (3) Positive and Negative Numbers', () => {
	expect(Calculator.multiply(50, -10)).toBe(-500);
});

test('Multipyl Method (4) No Numbers', () => {
	expect(Calculator.multiply()).toBe(0);
});
