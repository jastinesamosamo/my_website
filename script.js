
const supabaseUrl = "https://epqmynznltdljtldkbii.supabase.co/rest/v1/";
const supabaseKey = "sb_publishable_BhbPXNF1b_axloycjch5Hw_RHT3GSaa";

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
async function registerUser() {

	  
const firstName = document.getElementById("name").value;
const secondName = document.getElementById("name2").value;
const thirdName = document.getElementById("name3").value;

const name = firstName + " " + secondName + " " + thirdName;

	  const phone = document.getElementById("phone").value;
	  const email = document.getElementById("email").value;
	  const gender = document.getElementById("gender").value;
	  const birthday = document.getElementById("birthday").value;
	  const age = document.getElementById("age").value;
	  const education = document.getElementById("education").value;

	  const { data, error } = await supabaseClient
	    .from("users")
	    .insert([
		          {
				          name: name,
				          phone: phone,
				          email: email,
				          gender: gender,
				          birthday: birthday,
				          age: age,
				          education: education
				        }
		        ]);

	  if (error) {
		      alert("Imeshindikana: " + error.message);
		    } else {
			        alert("Usajili umefanikiwa!");
			      }

}



function showLogin() {
    document.getElementById("registerSection").classList.add("hidden");
    document.getElementById("loginSection").classList.remove("hidden");
}

function showRegister() {
    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("registerSection").classList.remove("hidden");
}

function register() {

    let email =
        document.getElementById("regEmail").value;

    let password =
        document.getElementById("regPassword").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Account Created Successfully!");

    showLogin();
}

function login() {

    let email =
        document.getElementById("loginEmail").value;

    let password =
        document.getElementById("loginPassword").value;

    let savedEmail =
        localStorage.getItem("email");

    let savedPassword =
        localStorage.getItem("password");

    if (
        email === savedEmail &&
        password === savedPassword
    ) {

        document.getElementById("loginSection")
            .classList.add("hidden");

        document.getElementById("formSection")
            .classList.remove("hidden");

    } else {

        alert("Email au Password sio sahihi");

    }
}
