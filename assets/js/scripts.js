document.addEventListener("DOMContentLoaded", function() {
    // Vérifie si l'utilisateur a déjà fait un choix
    if (!localStorage.getItem("cookieConsent")) {
        document.getElementById("cookie-banner").style.display = "block";
    }
});

function acceptCookies() {
    localStorage.setItem("cookieConsent", "accepted");
    document.getElementById("cookie-banner").style.display = "none";
}

function declineCookies() {
    localStorage.setItem("cookieConsent", "declined");
    document.getElementById("cookie-banner").style.display = "none";
}
