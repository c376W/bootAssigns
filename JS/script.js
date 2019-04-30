// for(var i=5;i<=50;i++){
// 	if(i%3===0 && i%5===0){
// 		console.log(i);
// 	}
// }

//isEven

const isEven=(num)=>{
	if(num%2===0){
		return true;
	}
	return false;
}

//factorial

const factorial=(num)=>{
	let fact=num;
	if(num===0){
		fact=1;
	}

	while((num-1)>0){
		fact=fact*(num-1);
		num--;
	}
	return fact;
}

//kebabToSnake

const kebabToSnake=(str)=>{
	let newStr="";
	for(var i=0;i<str.length;i++){
		if(str[i]!=="-"){
			newStr=newStr+str[i];
		}
		else{
			newStr=newStr+"_";
		}
	}
	return newStr;
}

//Print Reverse

const printReverse=(list)=>{
	list.forEach(function(item,i){
		console.log(list[list.length-1-i]);
	})

}

//isUniform

const isUniform=(list)=>{
	let flag=true;
	list.forEach(function(item){
		if(item!==list[list.length-1]){
			flag= false;
		}
	})
	return flag;
}

//sumArray

const sumArray=(arr)=>{
	let sum=0;
	arr.forEach(function(num){
		sum=sum+num;
	})
	return sum;
}

//max

const max=(arr)=>{
	maxNum=-1000000000;
	arr.forEach(function(num){
		if(num>maxNum){
			maxNum=num;
		}
	})
	return maxNum;
}

//Change color of the background:

let button=document.querySelector("button");
let bg=document.querySelector("body");

button.addEventListener("click",changeColor)

function changeColor(){
	bg.style.background="black";
}