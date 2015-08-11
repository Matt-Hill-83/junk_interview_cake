function compareNumbers(a, b) {
  return a - b;
}


find_prod = function(nums) {
	highest_nums = []
	lowest_nums = []

	for (var i = 0; i < nums.length; i++) {
		var new_num = nums[i];
		highest_nums = get_highest(highest_nums, new_num)
	};
	console.log(highest_nums);
};


get_highest = function(highest_nums, new_num) {
	highest_nums.push(new_num)
	highest_nums.sort(compareNumbers)

	if (highest_nums.length == 4) {
		highest_nums = highest_nums.slice(1,4);
	};

	return highest_nums

}










num_array = [2,3,7,1]
find_prod(num_array)