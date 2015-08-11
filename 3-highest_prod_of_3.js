function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f');
}

clear();

function compareNumbers(a, b) {
  return a - b;
}


find_prod = function(nums) {
	highest_nums = []
	lowest_nums = []

	for (var i = 0; i < nums.length; i++) {
		var new_num = nums[i];
		highest_nums = get_highest(highest_nums, new_num)
		lowest_nums = get_lowest(lowest_nums, new_num)

		var get_some = new GetSome(highest_nums, new_num);
		test = get_some.push_and_sort();
		console.log(test);

	};
	console.log(highest_nums);
	console.log(lowest_nums);
};


get_highest = function(highest_nums, new_num) {
	highest_nums.push(new_num)
	highest_nums.sort(compareNumbers)

	if (highest_nums.length == 4) {
		highest_nums = highest_nums.slice(0,3);
	};

	return highest_nums

}

get_lowest = function(lowest_nums, new_num) {
	lowest_nums.push(new_num)
	lowest_nums.sort(compareNumbers)

	if (lowest_nums.length == 4) {
		lowest_nums = low_slicer(lowest_nums)
	};

	return lowest_nums

}

low_slicer = function(num_list) {
	return num_list.slice(1,4);
}



var GetSome = function(num_list, new_num){
	this.num_list = num_list;
	this.new_num = new_num;
};


GetSome.prototype.push_and_sort = function(){
	this.num_list.push(this.new_num)
	this.num_list.sort(compareNumbers)

	if (this.num_list.length == 4) {
		this.num_list = this.slicer(this.num_list)
	};

	return this.num_list
};

GetSome.prototype.slicer = function(num_list) {
	this.num_list = num_list.slice(0,3);
};

var GetLow = function(num_list, new_num) {
	GetSome.call(this, num_list, new_num);
};

GetLow.prototype = Object.create(GetSome.prototype);
GetLow.prototype.constructor = GetLow;

GetLow.prototype.slicer = function() {
	this.num_list = num_list.slice(1,4);
 };






num_array = [2,3,7,1]
find_prod(num_array)