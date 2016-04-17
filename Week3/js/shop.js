// var myDateElement= document.getElementById("dateTime");
// var myDate = new Date(); 
 
  
// 	if (myDate.getHours() < 12 )  
// { 
//     var myDateElement = document.getElementById("dateTime"); 
//     myDateElement.textContent="Good Morning,"
// } 
// 		else 
// 	if (myDate.getHours() >= 12 && myDate.getHours() <= 17 ) 
// { 
//     var myDateElement = document.getElementById("dateTime"); 
//     myDateElement.textContent="Good Afternoon,"
// } 
// 		else  
// 	if (myDate.getHours() > 17 && myDate.getHours() <= 24 ) 
// { 
//     var myDateElement = document.getElementById("dateTime"); 
//     myDateElement.textContent="Good Evening,"
// } 
// 		else 
// { 
//     document.write("I'm not sure what time it is!"); 
// } 


// var product =[
// 	"Brooklyn T-shirt White",
// 	"Brooklyn T-shirt Black",
// 	"Apple Watch",
// 	"Android Phone"
// ];
// var prices = [10,10,199,159];
// var productText ="";
// var discountPrice = 0
// var productElement = document.getElementById("product-list");

// productText += "<li class='list-group-item'><span class='badge'>$" + prices[0]+"</span>" + product[0]+"</li>";
// productText += "<li class='list-group-item'><span class='badge'>$" + prices[1]+"</span>" + product[1]+"</li>";
// productText += "<li class='list-group-item'><span class='badge'>$" + prices[2]+"</span>" + product[2]+"</li>";		
// productText += "<li class='list-group-item'><span class='badge'>$" + prices[3]+"</span>" + product[3]+"</li>";

// productElement.innerHTML = productText;

// totalPrice = prices[0]+prices[1]+prices[2]+prices[3];
// discountPrice = totalPrice*0.75



// var totalPriceElement = document.getElementById("total-price");
// totalPriceElement.textContent=totalPrice;

// var discountPriceElement = document.getElementById("discount-price");
// discountPriceElement.textContent=discountPrice;


// var customerName="Pawin";
// var price= 10;
// var quantity= 2;

// var customerElement = document.getElementById("customer-name");
// customerElement.textContent = customerName;

var shop ={
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
		displayProductlist: function(){
			var productsText ="";
			var productsElement = document.getElementById("product-list");

		 	productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[0]+"</span>" + this.products[0]+"</li>";
			productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[1]+"</span>" + this.products[1]+"</li>";
			productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[2]+"</span>" + this.products[2]+"</li>";		
			productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[3]+"</span>" + this.products[3]+"</li>";

			productsElement.innerHTML = productsText;
		}

}
shop.displayCustomerName();
shop.displayProductlist();