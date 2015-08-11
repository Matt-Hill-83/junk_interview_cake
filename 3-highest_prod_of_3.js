inherit = function(baseclass, subclass) {
	// Assign subclass prototype to copy of baseclass prototype
	subclass.prototype = Object.create(baseclass.prototype);
	// Reorient the baseclass constructor so that it points to the subclass as a parent
	subclass.prototype.constructor = subclass;
}

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

		var get_some = new GetHigh(highest_nums, new_num);
		highest_nums = get_some.push_and_sort();
		
		var get_some = new GetLow(lowest_nums, new_num);
		lowest_nums = get_some.push_and_sort();

	};
	console.log('highest: ' + highest_nums);
	console.log('lowest: ' + lowest_nums);
};

// Create base class for list trimmer
var TrimList = function(num_list, new_num){
	this.num_list = num_list;
	this.new_num = new_num;
};

// Add functions to base class
TrimList.prototype.push_and_sort = function(){
	this.num_list.push(this.new_num)
	this.num_list.sort(compareNumbers)

	if (this.num_list.length == 4) {
		this.slicer()
	};
	return this.num_list
};

TrimList.prototype.slicer = function() {
	// Replace this with custom function in subclasses.
};

// Create subclass to get low elements
var GetLow = function(num_list, new_num) {
	TrimList.call(this, num_list, new_num);
};

inherit(TrimList, GetLow);

// Customize slicing function
GetLow.prototype.slicer = function() {
	this.num_list = this.num_list.slice(0,3);
 };


// Create subclass to get high elements
var GetHigh = function(num_list, new_num) {
	TrimList.call(this, num_list, new_num);
};

inherit(TrimList, GetHigh);

// Customize slicing function
GetHigh.prototype.slicer = function() {
	this.num_list = this.num_list.slice(1,4);
 };


num_array = [2,3,7,1]
find_prod(num_array)