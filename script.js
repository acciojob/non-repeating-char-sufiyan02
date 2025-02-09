function firstNonRepeatedChar(str) {
	for(let i=0;i<str.length;i++){
	    if(str.indexOf(str[i]) == str.indexOf(str[i])){
	        return alert(atr[i])
	    }
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
