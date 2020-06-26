const caesar = require('../src/caesar');

test('Caesar cipher (1) letter', () => {
	expect(caesar("a", 5)).toMatch("f");
});

test('Caesar cipher (2) word', () => {
	expect(caesar("andres", 5)).toMatch("fsiwjx");
});
