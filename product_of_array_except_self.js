function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f');
}
clear();


array_prod = function(arr) {

	output = [];
	console.log('orig: ' , arr);

	pre_products = get_pre_products(arr);
	console.log('pre_products: ' , pre_products);

	post_products = get_post_products(arr);
	console.log('post_products: ' , post_products);

	for (var i = 0; i < arr.length; i++) {
		product = pre_products[i] * post_products[i];
		output.push(product);
	}

	console.log(output);
	return output

}


get_pre_products = function(arr) {
	running_product_pre = 1;
	pre_products = [];

	for (var i = 0; i < arr.length; i++) {
		pre_products.push(1);
	}

	for (var i = 0; i < arr.length - 1; i++) {
		running_product_pre *= arr[i];
		pre_products[i+ 1] = (running_product_pre);
	}



	return pre_products
}

get_post_products = function(arr) {
	running_product_post = 1;
	post_products = [];

	for (var i = 0; i < arr.length; i++) {
		post_products.push(1);
	}


	for (var i = 0; i < arr.length - 1; i++) {

		pos = arr.length - i -1

		running_product_post *= arr[pos];
		post_products[pos -1] = running_product_post;
	}



	return post_products
}


arr = [1,2,3,4]
array_prod(arr);