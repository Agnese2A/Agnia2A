var N_of_q = 1;
			var A_of_qs = 3;		
			function NEXTquestion() {
				document.getElementById('q' + N_of_q).className = "class_none"; 
				N_of_q ++;
				

				if (N_of_q == A_of_qs) {
				  document.getElementById('buttonNEXT').innerHTML = "Check";
				  document.getElementById('q' + N_of_q).className = "class_block";
				}
				else if (N_of_q > A_of_qs) {
				  document.getElementById('buttonNEXT').className = "class_none";
				  check();
				}
				else {
				   document.getElementById('q' + N_of_q).className = "class_block";
				}
			}
		
		
			function check() {
				score = 0;
				
				correct_answer = [78,
								  28,
								   1];
				
				for(N_of_q = 1; N_of_q <= A_of_qs; N_of_q += 1){
					answer = document.getElementById('texti' + N_of_q).value;
					if (answer == correct_answer [N_of_q - 1]) {
					score += 1;
					}
				}
				
				percent = score/A_of_qs * 100;
				
				document.getElementById('result').innerHTML = "Tasks completed correctly "+percent+"%.";
			}