const caesar = require('../src/caesar');

test('Caesar cipher letter', () => {
	expect(caesar("a", 5)).toMatch("f");
});
