(function(){
	var game = {
		randomNumber:11, //random this number later
		init:function() {
			this.bindEvent();
		},
		bindEvent: function(){
			//get element and bind event to it
			var self=this;
			var button1 =  document.getElementById("one");
			button1.addEventListener("click", this.clickNumberButton);
			document.getElementById("two").addEventListener("click",this.clickNumberButton);
			document.getElementById("three").addEventListener("click",this.clickNumberButton);
			document.getElementById("four").addEventListener("click",this.clickNumberButton);
			document.getElementById("five").addEventListener("click",this.clickNumberButton);
			document.getElementById("six").addEventListener("click",this.clickNumberButton);
			document.getElementById("seven").addEventListener("click",this.clickNumberButton);
			document.getElementById("eight").addEventListener("click",this.clickNumberButton);
			document.getElementById("nine").addEventListener("click",this.clickNumberButton);
			document.getElementById("zero").addEventListener("click",this.clickNumberButton);
		var guessBtn = document.getElementById("guess");
		guessBtn.addEventListener("click", function(){
			self.guess(self);
		});
		},
		clickNumberButton:function(e) {
			//alert("button one is clicked");
			var userNumber = document.getElementById("userNumber");
			userNumber.value += e.target.textContent;
		},
		guess:function(self){
			//alert(self.randomNumber);
			var userNumber = document.getElementById("userNumber");
			var alertMsg= document.getElementById("alertContainer");
			alertMsg.innerHTML='<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Warning!</strong> Better check yourself, youre not looking too good.</div>';
			if(userNumber.value == self.randomNumber){
				alert("yes");
			}
			else{
				alert("no");
			}
		}
	};
game.init();
})();