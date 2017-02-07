$(function(){
	var _obj = {
		baseDom:'.products1>ul>li',
		cloneSize: 20,
		url: 'data/products.txt',
		pageContainer: '#pagination-demo1',
		page: true
	};
	var products1 = new cloneDom(_obj);
	  console.log(products1)
	
})