// Defining variables:
var mode="hard";
var colors=assignColor(mode);
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var pickedColor=colors[2];
var title=document.querySelector("#title");
var newColor=document.querySelector("#newColor");



//Events

	// Assigning initial values:
colorDisplay.textContent=pickedColor.toUpperCase();
for(var i =0; i<colors.length; i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){
		if(pickedColor===this.style.backgroundColor){
			paintAll(pickedColor);
			title.style.backgroundColor=pickedColor;

		} else{
			this.style.backgroundColor="black";
		}

	})
}

	//New color event:
newColor.addEventListener("click",function(){
	//Assign random colors to each squares.
})


//functions:

	//When right color is chosen, change the colors of all the squares.
const paintAll=(color)=>{
	for(var j=0; j<squares.length; j++){
		squares[j].style.backgroundColor=color;
	}
}

	//Create random colors:
function randomColor(){
	let r=Math.floor(Math.random()*256);
	let g=Math.floor(Math.random()*256);
	let b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
	//Assigning random colors to each square:
function assignColor(mode){
	var arr=[];
	if(mode==="hard"){
		for(var x=0;x<6;x++){
			randomClr=randomColor();
			arr.push(randomClr);
		}
	}else{
		for(var x=0;x<3;x++){
			var randomClr=randomColor();
			arr.push(randomClr);
		}
	}
	return arr;
}

