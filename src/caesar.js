// 97 - 122 lower case letters
// 65 - 90 upper case letters

const caesar = (word, key) => {
	let cipher = '';
	for(let i = 0; i < word.length; i++){
		let charCode = word.charCodeAt(i);
		if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
			cipher += String.fromCharCode(charCode + key);
		}else{
			cipher += word[i];
		}
	}
	return cipher;
}
module.exports = caesar;
