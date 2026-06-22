alert("JavaScript ipo sawa");


// SUPABASE CONNECTION

const supabaseUrl = "WEKA_URL_YAKO_HAPA";
const supabaseKey = "WEKA_ANON_KEY_YAKO_HAPA";

const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);


// REGISTER

function register(){

    let name = document.getElementById("fname").value;


    if(name == ""){

        alert("Please enter your name");

    }else{

        alert("Registration successful");


        document.getElementById("registerBox").style.display = "none";

        document.getElementById("loginBox").style.display = "block";

    }

}



// LOGIN

function login(){

    alert("Login button clicked");

}



// UPLOAD DOCUMENT

async function uploadFile(){

    const name = document.getElementById("name").value;

    const file = document.getElementById("file").files[0];


    if(!file){

        alert("Chagua document kwanza");

        return;

    }


    const fileName = Date.now() + "-" + file.name;



    const { error } = await supabaseClient.storage
    .from("documents")
    .upload(fileName, file);



    if(error){

        alert(error.message);

        return;

    }



    const { data } = supabaseClient.storage
    .from("documents")
    .getPublicUrl(fileName);



    const save = await supabaseClient
    .from("documents")
    .insert([
        {
            name:name,
            file_url:data.publicUrl
        }
    ]);



    if(save.error){

        alert(save.error.message);

        return;

    }



    alert("Document imepakiwa!");


}
const supabaseUrl = "https://yyttzjxjviryjfgwvaof.supabase.co/rest/v1/";
const supabaseKey = "sb_publishable_Bp5RhJN8D3mkHCIjQB9s0g_5YPKJ2Av";
