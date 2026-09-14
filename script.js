//your JS code here. If required.
const codes = documet.querySelectorAll(".code");
codes[0].focus();
codes.forEach((input, index) =>{
	input.addEventListener("input", function (){
		this.value = this.value.replace(/\D/g, "");
		if(this.value && index < codes.length -1){
			codes[index +1].focus();
		}
	});

	input.addEventListner("keydown", fucntion (event){
		if(event.key === "Backspace"){
			if(this.value === "" && index > 0){
				codes[index -1].focus();
				codes[index -1].value = "";
			}
		}
	});
});