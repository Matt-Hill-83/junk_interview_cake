function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f');
}
clear();



(function master() {

tests = function (options) {
	console.log(options.arr)
	console.log(options.str)


}



options = {
	'arr': [1,2,3,4,5] ,
	str: '12345'
}

tests(options)

}());