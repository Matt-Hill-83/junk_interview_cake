var is_palidrome = function(str) {
	rev = str.split('').reverse().join('');
	ana = str == rev

	console.log(ana)
}


str = 'kayak'
is_palidrome(str)
