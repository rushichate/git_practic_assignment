let str = "abca";
let count=0;
	for(let i =0; i<=(str.length-1)/2; i++){
		if(str[i]!= str[str.length-1-i]){
      count+=0;
    }
	}
	if(count==0){
		console.log(str, "is a pelindrome ");
	}
          else{
		console.log(str, "is not a pelindrome ");
	}