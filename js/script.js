

var drug_class = ["Glycylcyclines","Oxazolidinones","Lincosamides","Glycopeptides","Cyclic Lipopeptides","Short-Acting Lipoglycopeptides"];

var antibiotic = ["Tigecycline","Linezolid","Clindamycin","Vancomycin","Daptomycin","Telavancin"];

var MOA = ["Bind to the bacterial ribosome at the 30S subunit, preventing the docking of transfer RNA",
"protein synthesis inhibitors that bind to the 50S ribosomal subunit, blocking the formation of a stable 70S initiation complex and preventing translation",
"Binds at a site on the 50S ribosome and acts by preventing protein synthesis by preventing the ",
"Bind to terminal D-ala-D-ala chains on peptidoglycan in the cell well, preventing further elongation",
"Inserts into the cell membrane of Gram-positive organisms, leading to the leakage of intracellular cations that maintain membrane polarization leading to rapid depolarization and cell death",
"Bind to terminal D-ala-D-ala chains on peptidoglycan in the cell well, preventing further elongation + interferes with the cell membrane also, disrupting membrane function"];

var spectrum = ["Good: atypicals, enterococci (including VRE), staphylococci (including MRSA), S. pneumoniae | Moderate: most GNRs, anaerobes",
"Good: MSSA, MRSA, streptococci (including multidrug-resistant Streptococcus pneumoniae), enterococci (including VRE), Nocardia | Moderate: some atypicals, Mycobacterium tuberculosis",
"Good: many Gram + anaerobes, Plasmodium species (malaria), S. pyogenes | Moderate: Staphylococcus aureus (including many MRSA), Gram -anaerobes, Chlamydia trachomatis",
"Good: MSSA, MRSA, Streptococci, C.Diff | Moderate: enterococci",
"Good: MSSA, MRSA, streptococci | Moderate: enterococci",
"Good: MSSA, MRSA, Streptococci, C.Diff | Moderate: enterococci | Weak: VanA"
]










var option = ["a","b","c","d"]

var option1 = ["a1","b1","c1","d1"]

var option2 = ["a2","b2","c2","d2"]

function refreshall(){
	refresh();
	refresh1();
	refresh2();
}

function refresh(){
	
	//location.reload();
	
	let temp_antibiotic = antibiotic.slice();
	let temp_option = option.slice();
	// console.log(temp)
		
	var length = 6
	
	var question_answer_position = Math.floor(Math.random() * 6);
	
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
		
	var length = 6
	
	var question_answer_position = Math.floor(Math.random() * 6);
	
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


function refresh2(){
	
	//location.reload();
	
	let temp_spectrum = spectrum.slice();
	let temp_option = option2.slice();
	// console.log(temp)
		
	var length = 6
	
	var question_answer_position = Math.floor(Math.random() * 6);
	
	document.getElementById("antibioticname1").innerHTML = antibiotic[question_answer_position]; // getting question blank
	
	document.getElementById("answer2").innerHTML = temp_spectrum[question_answer_position]; // getting corresponding answer for question blank
	
	temp_spectrum.splice(question_answer_position,1) // removing answer from list of options
	length--;
	
	var correct_choice = Math.floor(Math.random() * 4); // getting random position from 4 MCQ options where correct answer will be placed
	
	// document.getElementById("b").innerHTML = document.getElementById("answer").innerHTML;
	
	for (i=0;i<temp_option.length;i++){
		
		if(i==correct_choice){
			document.getElementById(temp_option[i]).innerHTML = document.getElementById("answer2").innerHTML;
			// length--;
			// temp_antibiotic.splice(pos,1);
		}
		else{
			
			let pos = Math.floor(Math.random() * length);
			
			document.getElementById(temp_option[i]).innerHTML = temp_spectrum[pos];
			length--;
			temp_spectrum.splice(pos,1);
		
		}
		
		
	}
	
	
	document.getElementById("answerblock2").style.display = 'none'
}




function showanswer(){
	
	document.getElementById("answerblock").style.display = 'block'
	document.getElementById("answerblock1").style.display = 'block'
	document.getElementById("answerblock2").style.display = 'block'
	
}
	
	
