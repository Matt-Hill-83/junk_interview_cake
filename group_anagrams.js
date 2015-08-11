function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f');
}

var group_agrams = function(list) {
	clear();
	storage = {}

	for (var i = 0; i < list.length; i++) {
		var word = list[i];
		sorted_word = sort_word(word);

		if (storage[sorted_word]) {
			storage[sorted_word].push(word)
		} else {
			storage[sorted_word] = [word];
		};

	};
	
	for (var key in storage) {
		storage[key] = storage[key].sort();
		console.log(storage[key]);
	}
}

var sort_word = function(word){
	return word.toLowerCase().split('').reverse().sort().join('')
}

list = ["eat", "tea", "tan", "ate", "nat", "bat"]
group_agrams(list)

