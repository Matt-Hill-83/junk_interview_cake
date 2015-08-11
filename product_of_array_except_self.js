function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f');
}
clear();

array_prod = function(arr) {
	output = [];

	all_products = get_all_products(arr);
	pre_products = all_products[0];
	post_products = all_products[1];

	for (var i = 0; i < arr.length; i++) {
		product = pre_products[i] * post_products[i];
		output.push(product);
	}

	console.log('pre_products: ' , pre_products);
	console.log('post_products: ' , post_products);
	console.log('final_answer: ' , output);

	return output
}

get_all_products = function(arr) {
	running_pre_products = 1;
	pre_products = [];

	running_post_products = 1;
	post_products = [];

	for (var i = 0; i < arr.length; i++) {
		pre_products.push(1);
		post_products.push(1);
	}

	for (var i = 0; i < arr.length - 1; i++) {
		running_pre_products *= arr[i];
		pre_products[i+ 1] = (running_pre_products);

		pos = arr.length - i -1

		running_post_products *= arr[pos];
		post_products[pos -1] = running_post_products;
		
	}
	return [pre_products, post_products]
}


arr = [1,2,3,4]
array_prod(arr);