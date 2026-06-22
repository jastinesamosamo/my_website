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
const supabaseUrl = "WEKA_API_URL_YAKO";
const supabaseKey = "WEKA_PUBLIC_KEY_YAKO";

const supabaseClient = supabase.createClient(
	  supabaseUrl,
	  supabaseKey
);

async function uploadFile() {
	  const name = document.getElementById("name").value;
	  const file = document.getElementById("file").files[0];

	  if (!file) {
		      alert("Chagua document kwanza");
		      return;
		    }

	  const fileName = Date.now() + "-" + file.name;

	  const { error } = await supabaseClient.storage
	    .from("documents")
	    .upload(fileName, file);

	  if (error) {
		      alert(error.message);
		      return;
		    }

	  const { data } = supabaseClient.storage
	    .from("documents")
	    .getPublicUrl(fileName);

	  await supabaseClient
	    .from("documents")
	    .insert([
		          {
				          name: name,
				          file_url: data.publicUrl
				        }
		        ]);

	  alert("Document imepakiwa!");
}

function login(){

	alert("Login button clicked");

}
