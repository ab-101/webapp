

var drug_class = ["Glycylcyclines","Oxazolidinones","Lincosamides","Glycopeptides"];

var antibiotic = ["Tigecycline","Linezolid","Clindamycin","Vancomycin"];

var MOA = ["Bind to the bacterial ribosome at the 30S subunit, preventing the docking of transfer RNA",
"protein synthesis inhibitors that bind to the 50S ribosomal subunit, blocking the formation of a stable 70S initiation complex and preventing translation",
"Binds at a site on the 50S ribosome and acts by preventing protein synthesis by preventing the ",
"Bind to terminal D-ala-D-ala chains on peptidoglycan in the cell well, preventing further elongation"];

var option = ["a","b","c","d"]

var option1 = ["a1","b1","c1","d1"]

function refreshall(){
	refresh();
	refresh1();
}

function refresh(){
	
	//location.reload();
	
	let temp_antibiotic = antibiotic.slice();
	let temp_option = option.slice();
	// console.log(temp)
		
	var length = 4
	
	var question_answer_position = Math.floor(Math.random() * 4);
	
	document.getElementById("drugclassname").innerHTML = drug_class[question_answer_position]; // getting question blank
	
	document.getElementById("answer").innerHTML = temp_antibiotic[question_answer_position]; // getting corresponding answer for question blank
	
	temp_antibiotic.splice(question_answer_position,1) // removing answer from list of options
	length--;
	
	var correct_choice = Math.floor(Math.random() * 4); // getting random position from 4 MCQ options where correct answer will be placed
	
	// document.getElementById("b").innerHTML = document.getElementById("answer").innerHTML;
	
	for (i=0;i<option.length;i++){
		
		if(i==correct_choice){
			document.getElementById(option[i]).innerHTML = document.getElementById("answer").innerHTML;
			// length--;
			// temp_antibiotic.splice(pos,1);
		}
		else{
			
			let pos = Math.floor(Math.random() * length);
			
			document.getElementById(option[i]).innerHTML = temp_antibiotic[pos];
			length--;
			temp_antibiotic.splice(pos,1);
		
		}
		
		
	}
	
	
	document.getElementById("answerblock").style.display = 'none'
}

function refresh1(){
	
	//location.reload();
	
	let temp_MOA = MOA.slice();
	let temp_option = option1.slice();
	// console.log(temp)
		
	var length = 4
	
	var question_answer_position = Math.floor(Math.random() * 4);
	
	document.getElementById("antibioticname").innerHTML = antibiotic[question_answer_position]; // getting question blank
	
	document.getElementById("answer1").innerHTML = temp_MOA[question_answer_position]; // getting corresponding answer for question blank
	
	temp_MOA.splice(question_answer_position,1) // removing answer from list of options
	length--;
	
	var correct_choice = Math.floor(Math.random() * 4); // getting random position from 4 MCQ options where correct answer will be placed
	
	// document.getElementById("b").innerHTML = document.getElementById("answer").innerHTML;
	
	for (i=0;i<temp_option.length;i++){
		
		if(i==correct_choice){
			document.getElementById(temp_option[i]).innerHTML = document.getElementById("answer1").innerHTML;
			// length--;
			// temp_antibiotic.splice(pos,1);
		}
		else{
			
			let pos = Math.floor(Math.random() * length);
			
			document.getElementById(temp_option[i]).innerHTML = temp_MOA[pos];
			length--;
			temp_MOA.splice(pos,1);
		
		}
		
		
	}
	
	
	document.getElementById("answerblock1").style.display = 'none'
}



function showanswer(){
	
	document.getElementById("answerblock").style.display = 'block'
	document.getElementById("answerblock1").style.display = 'block'
	
}
	
	
