const caesar = (word, key) => {
	let cipher = '';
	for(let i = 0; i < word.length; i++){
		cipher += String.fromCharCode(word.charCodeAt(i) + key);
	}
	return cipher;
}
module.exports = caesar;
