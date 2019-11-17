//week 2-3

function avg(data) {
  var i;
  var result=0;
  for(let i = 0; i < data.products.length; i++) {
    result += data.products[i].price;
  }
  result /= data.products.length;
  
console.log('The average price of all products is ' + result); 
}

avg({
  size: 3,
  products: [
    {name: 'Product 1', price: 100},
    {name: 'Product 2', price: 700},
    {name: 'Product 3', price: 250},
  ]
});   