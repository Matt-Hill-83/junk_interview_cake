function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f');
}
clear();

calculator = function(str) {
	str = remove_spaces(str)

	while (true) {
		console.log(str);

		indices = get_item_index(str);
		console.log(indices)
		if (indices[0] == null) {
			break;
		}

		item = excise_item(indices, str);

		sum = add_numbers(item);
		str = rebuild_str(str, indices, sum);

		console.log('item: ', item)
		console.log("sum: ", sum)
		console.log('str', str)
		console.log()
	}
}

rebuild_str = function(str, indices, sum){
	part_1 = str.slice(0,indices[0]);
	part_2 = str.slice(indices[1]+ 1, str.length)
	return part_1 + sum + part_2;
}

add_numbers = function(item) {
	running_sum = 0
	running_sum += Number(item[0])
	pos = 1
	while (pos < item.length) {

		console.log('char: ', item[pos]);

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
	var open_paren_idx = null;
	var close_paren_idx = null;
	i = 0;
	while (i < len) {
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


str = '(1+ (4 +1+2 ) -3)-(6+ 2)'
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