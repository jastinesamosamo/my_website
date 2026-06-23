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
