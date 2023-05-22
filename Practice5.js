function check() {
	answer_1 = document.querySelector('input[name="texti1"]:checked').value; // 1, 2, 3, 4
	correct_answer_1 = 1;
	
	if(answer_1 == correct_answer_1) {
		document.getElementById('result').innerHTML = "Correct";
	}else {
		document.getElementById('result').innerHTML = "Uncorrect";
	}
	
	
	
	
}