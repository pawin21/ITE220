var product =[
	"Brooklyn T-shirt White",
	"Brooklyn T-shirt Black",
	"Apple WAtch",
	"Android Phone"
];
var prices = [10,10,199,159];
var productText ="";
var productElement = document.getElementById("product-list");

productText += "<li class='list-group-item'><span class='badge'>$" + prices[0]+"</span>" + product[0]+"</li>";
productText += "<li class='list-group-item'><span class='badge'>$" + prices[1]+"</span>" + product[1]+"</li>";
productText += "<li class='list-group-item'><span class='badge'>$" + prices[2]+"</span>"  + product[2]+"</li>";		
productText += "<li class='list-group-item'><span class='badge'>$" + prices[3]+"</span>" + product[3]+"</li>";

productElement.innerHTML = productText;

totalPrice = prices[0]+prices[1]+prices[2]+prices[3];

var totalPriceElement = document.getElementById("total-price");
totalPriceElement.textContent=totalPrice;

var customerName="Pawin";
var price= 10;
var quantity= 2;

var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function myFunction() {
    var d = new Date();
    var x = document.getElementById("demo");
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    x.innerHTML = h + ":" + m + ":" + s;
}

