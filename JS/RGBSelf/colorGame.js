// Defining variables:
var colors=["rgb(0, 0, 255)",
			"rgb(255, 0, 0)", 
			"rgb(0, 255, 0)",
			"rgb(255, 255, 0)",
			"rgb(0, 255, 255)",
			"rgb(255, 0, 255)"];

var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var pickedColor=colors[2];

//Events



for(var i =0; i<colors.length; i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){
		if(pickedColor===this.style.backgroundColor){
			alert("right");
		} else{
			this.style.backgroundColor="black";
		}

	})
}