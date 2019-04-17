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