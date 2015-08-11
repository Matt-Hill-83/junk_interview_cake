function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f');
}
clear();

calculator = function(str) {
	str = remove_spaces(str)
	console.log(str);
	indices = get_item_index(str);
	item = excise_item(indices, str);

	sum = add_numbers(item);


	console.log(item)
	console.log(sum)
}

add_numbers = function(item) {
	running_sum = 0
	running_sum += Number(item[0])
	pos = 1
	while (pos < item.length) {
		if (item[pos] === '+') {
			running_sum += Number(item[pos+1]);
		} else if (item[pos] === '-') {
			running_sum -= Number(item[pos+1]);
		} else {
			console.log('Error: invalid character');
		}

		pos += 2
	}
	return running_sum
}

excise_item = function(indices, str) {
	return str.slice(indices[0]+ 1, indices[1]);
}

	
get_item_index = function(str) {
	len = str.length
	idx = 0;
	var open_paren_idx = null;
	var close_paren_idx = null;
	i = 0;
	while (idx < len) {
		charr = str[i]
		if (charr === '(') {
			open_paren_idx = i;
		}
		if (charr === ')') {
			close_paren_idx = i
			break
		}
	i++
	}

	return [open_paren_idx, close_paren_idx];

}

remove_spaces = function(str) {
	len = str.length
	str_no_spaces = '';
	for (var i = 0; i < len; i++) {
		charr = str[i]
		if (charr != ' '){
			str_no_spaces += charr
		}
	}
	return str_no_spaces	
}


str = '(1+ (4+5+2 ) -3)+(6+8)'
calculator(str)


/*
- remove spaces
- while searh position is less than string length:
	- search for open parenthesis followed by closed paren with no other open intervening
		-- search until you find open, set var start
		-- if you find another open, set var start
		-- if you find a closed set var end
	- split string into 3 sections: pre, item, post
	- convert item to number
		- create running total
		- add first char to running total and advande to next position
		- loop while pointer < item.length - 1; pointer = 1
			if char is + add char to running total and advance pointer by 2
		- return running total
	- rejoin string with number in place of parenthesesed item






*/