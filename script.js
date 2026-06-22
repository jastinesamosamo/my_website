function register(){

	let name = document.getElementById("fname").value;


	if(name==""){

		alert("Please enter your name");

	}

	else{

		alert("Registration successful");


		document.getElementById("registerBox").style.display="none";


		document.getElementById("loginBox").style.display="block";


	}

}




function login(){

	alert("Login button clicked");

}
