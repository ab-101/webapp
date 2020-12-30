function revealMessage() {
	document.getElementById("hiddenMessage").style.display = 'block';
}


function countDown(){
	var currentVal = document.getElementById("countDownButton").innerHTML;
	var newval = 0;
	
	if (currentVal>0){
		newval = currentVal - 1;
	}
	
	document.getElementById("countDownButton").innerHTML = newval;
	
}
	
	