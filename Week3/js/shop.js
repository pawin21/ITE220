var shop = {
	customerName: "Pawin",
	totalPrice: 0,
	products: [
		"Brooklyn T-shirt White",
		"Brooklyn T-shirt Black",
		"Apple Watch",
		"Android Phone"
	],
	prices: [10,10,199,159],

	displayCustomerName: function() {
		var customerElement = document.getElementById("customer-name");
		customerElement.textContent = this.customerName;
	},	
		
	displayProductList: function(){
		var productsText ="";
		var productsElement = document.getElementById("product-list");

		productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[0]+"</span>" + this.products[0]+"</li>";
		productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[1]+"</span>" + this.products[1]+"</li>";
		productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[2]+"</span>" + this.products[2]+"</li>";		
		productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[3]+"</span>" + this.products[3]+"</li>";

		productsElement.innerHTML = productsText;
	}
	
	//calculateTotalPrice: function() {
	//	return (this.prices[0]+this.prices[1]+this.prices[2]+this.prices[3]*0.75;
	//},

	//displayTotalPrices: function() {
	//	this.totalPrice = this.calculateTotalPrice();
	//	var totalPriceElement = document.getElementById("total-price");
	//	totalPriceElement.textContent = this.totalPrice;
	//}	
}


shop.displayCustomerName();
shop.displayTotalPrices();
shop.displayProductList();
