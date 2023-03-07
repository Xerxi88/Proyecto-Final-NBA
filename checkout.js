
function validate() {
	// Get the input fields
	var fPassword = document.getElementById("fPassword");
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorPassword = document.getElementById("errorPassword");
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorPhone = document.getElementById("errorPhone");  
	
	// Validate fields entered by the user: name, phone, password, and email
	let formulario = document.querySelector("form");
	formulario.addEventListener("submit", function (event) {
	if (!formulario.checkValidity()) {
		event.preventDefault();
		event.stopPropagation();
		errorPassword.style.display="block";
		fPassword.style.borderColor="red";
	} else {
		errorPassword.style.display="none";
		fPassword.style.borderColor="green";
	}
	if (!fName.checkValidity()) {
		event.preventDefault();
		event.stopPropagation();
		errorName.style.display="block";
		fName.style.borderColor="red";
	} else {
		errorName.style.display="none";
		fName.style.borderColor="green";
	}
	if (!fPhone.checkValidity()) {
		event.preventDefault();
		event.stopPropagation();
		errorPhone.style.display="block";
		fPhone.style.borderColor="red";
	} else {
		errorPhone.style.display="none";
		fPhone.style.borderColor="green";
	}
	if (!Email.checkValidity()) {
		event.preventDefault();
		event.stopPropagation();
		errorEmail.style.display="block";
		fEmail.style.borderColor="red";
	} else {
		errorEmail.style.display="none";
		fEmail.style.borderColor="green";
	}
	})
	}

	function check(id){
	let valid = document.getElementById(id);
	if(valid == fPassword && !fPassword.checkValidity()){
		errorPassword.style.display="block";
		fPassword.style.borderColor="red";
	} else if (fPassword.checkValidity()) {
		errorPassword.style.display="none";
		fPassword.style.borderColor="green";
	} 
	if(valid == nombre && !nombre.checkValidity()){
		errorName.style.display="block";
		fName.style.borderColor="red";
	} else if (nombre.checkValidity()){
		errorName.style.display="none";
		fName.style.borderColor="green";
	}
	if (valid == fPphone && !fPhone.checkValidity()) {
		errorPhone.style.display="block";
		fPhone.style.borderColor="red";
	} else if (fPhone.checkValidity()) {
		errorPhone.style.display="none";
		fPhone.style.borderColor="green";
	}
	if (valid == fEmail && !fEmail.checkValidity()) {
		errorEmail.style.display="block";
		fEmail.style.borderColor="red";
	} else if (fEmail.checkValidity()) {
		errorEmail.style.display="none";
		fEmail.style.borderColor="green";
	}
	}
	
