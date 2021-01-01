var medicine = ["Panadol","Augmentin","Ibuprofen","Acetaminophen","Losartan","Metformin","Amitriptyline"];

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
	
	var position = Math.floor(Math.random() * 7);      // returns a random integer from 0 to 2
	
	document.getElementById("medicinename").innerHTML = medicine[position];		// get random medicine name based on above generated random variable
	
}
	
	
