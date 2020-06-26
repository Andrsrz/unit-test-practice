const caesar = (letter, key) => {
	let cipher = String.fromCharCode(letter.charCodeAt(0) + key);
	return cipher;
}
module.exports = caesar;
