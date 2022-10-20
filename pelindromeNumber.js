let str = "abca";
let peli = "";
	for(let i =str.length-1; i>=0; i--){
	peli += str[i];
    	}
	
	if(peli == str){
		console.log(str, "is a pelindrome ");
	}
          else{
		console.log(str, "is not a pelindrome ");
	}