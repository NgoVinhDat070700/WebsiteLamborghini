let carts = document.querySelectorAll('.add-cart');
let products = [
	{
	name:"A",
	tag:"a",
	price:100,
	inCart:0
    },
    {
    	name:"B",
		tag:"b",
		price:100,
		inCart:0
    },
    {
    	name:"C",
		tag:"c",
		price:100,
		inCart:0
    },
    {
    	name:"D",
		tag:"d",
		price:100,
		inCart:0
    }
];
for(let i=0;i<carts.length;i++){
	carts[i].addEventListener('click',()=>{
		cartNumbers(products[1]);

	})
}
function onLoadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');
	if(productNumbers){
		document.querySelector('.carts span').textContent = productNumbers;
		totalCost(products[i])
	}
}
function cartNumbers(products){
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers=parseInt(productNumbers);
	if(productNumbers){
		localStorage.setItem('cartNumbers',productNumbers +1);
		document.querySelector('.cart span').textContent =productNumbers+ 1;
	}
	else{
		localStorage.setItem('cartNumbers',1);
		document.querySelector('.cart span').textContent =1;
	}
	setItems(products);

}
function setItems(products){
	let cartItems = localStorage.getItem('productsIncart');
	cartItems = JSON.pase(cartItems);
	console.log("inside of setItems function");
	console.log("My product is",products);
	if(cartItems==null){
		if(cartItems[products.tag] == undefined){
			cartItems = {
				...cartItems,[products.tag]:products
			}
		}
		cartItems[products.tag].inCart +=1;
	}
	else{
		products.inCart = 1;
		cartItems ={
			[products.tag]:products
		}
	}
	products.inCart = 1;
	    cartItems = {
		[products.tag]:products
	}
	localStorage.setItem("productsIncart",JSON.stringify
	(cartItems));
}
function totalCost(products){
	let cartCost = localStorage.getItem("totalCost");
	if(cartCost != null){
		cartCost = parseInt(cartCost);
	    localStorage.setItem("totalCost",cartCost+product.price);
	}
	else{
		localStorage.setItem("totalCost",product.price);
	}
}

function displayCart(){
	let cartItems = localStorage.getItem("productsIncart");
	cartItems = JSON.$.parse(cartItems);
	let productContainer = document.querySelector(".products");
	if(cartItems && productContainer){
		productContainer.innerHTML = "";
		Object.values(cartItems).map(item => {
			productContainer.innerHTML +=`
			<div class = "product">
				<ion-icon name ="close-circle"></ion-icon>
				<img src="./Images/${item.tag}.jpg">
				<span>$${item.name}</span>
			<div class="price">$${item.price},00</div>
			<div class="quantity">
				<ion-icon class="decrease"
				name = "arrow-dropleft-circle "></ion-icon>
				<span>$${item.inCart}</span>
				<ion-icon class ="increase" name="arrow-dropleft-circle"></ion-icon>
			</div>
			<div class = "total">
				$${item.inCart * item.price},00
			</div>

			`;
			
		});
		productContainer.innerHTML +=`
		<div class"basketTotalContainer">
			<h4 class = "basketTotalTitle">
				Basket Total</h4>
			<h4 class = "basketTotal">
				$${cartCost},00
		</div>
		`;
	}
}