const token = localStorage.getItem("auth_token");

if (!token) {
    window.location = "login.html";
}

function logout() {
    localStorage.clear();
    window.location = "login.html";
}