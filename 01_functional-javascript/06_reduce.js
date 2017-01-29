function countWords(inputWords){
	return inputWords.reduce(function(obj, item){
		if(!obj[item]){
			obj[item] = 0;
		}
		obj[item]++;
		return obj;
	}, {})
}

module.exports = countWords;
