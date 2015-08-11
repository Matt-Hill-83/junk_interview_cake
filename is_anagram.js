var is_anagram = function(start_word, list) {
	rev_word = sort_word(start_word);
	new_list = []

	for (var i = 0; i < list.length; i++) {
		var word = list[i];
		word = sort_word(word);
		new_list.push(word);
	};
	
	console.log(rev_word);
	console.log(new_list);
	console.log(new_list.indexOf(rev_word) == 0)
}

var sort_word = function(word){
	return word.toLowerCase().split('').reverse().sort().join('')
}

start_word = 'sent'
list = ['nest', 'pots', 'part', 'cars']
is_anagram(start_word, list)
