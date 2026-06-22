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

const supabaseUrl = "https://yyttzjxjviryjfgwvaof.supabase.co/rest/v1/";
const supabaseKey = "sb_publishable_Bp5RhJN8D3mkHCIjQB9s0g_5YPKJ2Av";


function login(){

	alert("Login button clicked");

}
