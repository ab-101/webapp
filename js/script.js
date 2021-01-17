
var question_list = ["Which of the following antibiotics belong to the drug class",
"What is the mechanism of action of",
"What is the spectrum of activity of"
]

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
	// refresh1();
	// refresh2();
}

function refresh(){
	
	var length = 0;
	
	const selected_drugs = document.querySelectorAll('input[name="drugclasses"]'); // getting which drug classes were selected by user
	
	for (const item of selected_drugs){
		if (item.checked) {
			if(item.value=="classa"){
				console.log("works");
				length = 2;
				console.log(length);
			}
			
			if(item.value=="classb"){
				console.log("works");
				length = 4;
				console.log(length);
			}
			
			if(item.value=="classc"){
				console.log("works");
				length = 5;
				console.log(length);
			}
			
			if(item.value=="classd"){
				console.log("works");
				length = 6;
				console.log(length);
			}
                    
		}
	}
	
	// random question (start)
	
	var question_index = Math.floor(Math.random()*3);
	
	document.getElementById("question").innerHTML = question_list[question_index];
	
	// console.log(question_index);
	// random question (end)
	
	//location.reload();
	
	let temp_question_blank = [];
	let temp_question_answers = [] ;
	
	if(question_index==0){
		// console.log("check one");
		temp_question_blank = drug_class.slice();
		temp_question_answers = antibiotic.slice();
	
	} else if (question_index==1){
		// console.log("check two");
		temp_question_blank = antibiotic.slice();
		temp_question_answers = MOA.slice(); 
	
	} else {
		// console.log("check three");
		temp_question_blank = antibiotic.slice();
		temp_question_answers = spectrum.slice();
		
	}
	
	// console.log(temp_question_blank);
	
	// let temp_question_answers = antibiotic.slice();
	let temp_option = option.slice();
	// console.log(temp)
		

	
	var question_answer_position = Math.floor(Math.random() * length);
	
	document.getElementById("questionblank").innerHTML = temp_question_blank[question_answer_position]; // getting question blank
	
	document.getElementById("answer").innerHTML = temp_question_answers[question_answer_position]; // getting corresponding answer for question blank
	
	temp_question_answers.splice(question_answer_position,1) // removing answer from list of options
	length--;
	
	var correct_choice = Math.floor(Math.random() * 4); // getting random position from 4 MCQ options where correct answer will be placed
	
	// document.getElementById("b").innerHTML = document.getElementById("answer").innerHTML;
	
	for (i=0;i<option.length;i++){
		
		if(i==correct_choice){
			document.getElementById(option[i]).innerHTML = document.getElementById("answer").innerHTML;
			// length--;
			// temp_question_answers.splice(pos,1);
		}
		else{
			
			let pos = Math.floor(Math.random() * length);
			
			document.getElementById(option[i]).innerHTML = temp_question_answers[pos];
			length--;
			temp_question_answers.splice(pos,1);
		
		}
		
		
	}
	
	
	document.getElementById("answerblock").style.display = 'none'
}

// function refresh1(){
	
	// location.reload();
	
	// let temp_MOA = MOA.slice();
	// let temp_option = option1.slice();
	// console.log(temp)
		
	// var length = 6
	
	// var question_answer_position = Math.floor(Math.random() * 6);
	
	// document.getElementById("antibioticname").innerHTML = antibiotic[question_answer_position]; // getting question blank
	
	// document.getElementById("answer1").innerHTML = temp_MOA[question_answer_position]; // getting corresponding answer for question blank
	
	// temp_MOA.splice(question_answer_position,1) // removing answer from list of options
	// length--;
	
	// var correct_choice = Math.floor(Math.random() * 4); // getting random position from 4 MCQ options where correct answer will be placed
	
	// document.getElementById("b").innerHTML = document.getElementById("answer").innerHTML;
	
	// for (i=0;i<temp_option.length;i++){
		
		// if(i==correct_choice){
			// document.getElementById(temp_option[i]).innerHTML = document.getElementById("answer1").innerHTML;
			// length--;
			// temp_blank.splice(pos,1);
		// }
		// else{
			
			// let pos = Math.floor(Math.random() * length);
			
			// document.getElementById(temp_option[i]).innerHTML = temp_MOA[pos];
			// length--;
			// temp_MOA.splice(pos,1);
		
		// }
		
		
	// }
	
	
	// document.getElementById("answerblock1").style.display = 'none'
// }


// function refresh2(){
	
	// location.reload();
	
	// let temp_spectrum = spectrum.slice();
	// let temp_option = option2.slice();
	// console.log(temp)
		
	// var length = 6
	
	// var question_answer_position = Math.floor(Math.random() * 6);
	
	// document.getElementById("antibioticname1").innerHTML = antibiotic[question_answer_position]; // getting question blank
	
	// document.getElementById("answer2").innerHTML = temp_spectrum[question_answer_position]; // getting corresponding answer for question blank
	
	// temp_spectrum.splice(question_answer_position,1) // removing answer from list of options
	// length--;
	
	// var correct_choice = Math.floor(Math.random() * 4); // getting random position from 4 MCQ options where correct answer will be placed
	
	// document.getElementById("b").innerHTML = document.getElementById("answer").innerHTML;
	
	// for (i=0;i<temp_option.length;i++){
		
		// if(i==correct_choice){
			// document.getElementById(temp_option[i]).innerHTML = document.getElementById("answer2").innerHTML;
			// length--;
			// temp_blank.splice(pos,1);
		// }
		// else{
			
			// let pos = Math.floor(Math.random() * length);
			
			// document.getElementById(temp_option[i]).innerHTML = temp_spectrum[pos];
			// length--;
			// temp_spectrum.splice(pos,1);
		
		// }
		
		
	// }
	
	
	// document.getElementById("answerblock2").style.display = 'none'
// }




function showanswer(){
	
	document.getElementById("answerblock").style.display = 'block'
	// document.getElementById("answerblock1").style.display = 'block'
	// document.getElementById("answerblock2").style.display = 'block'
	
}
	
	
