function showNavList() {
    document.getElementById("trigram").style.display = "none";
    document.getElementById("cross").style.display = "block";
    document.getElementById("navList").style.display = "block";
}

function hideNavList() {
    document.getElementById("trigram").style.display = "block";
    document.getElementById("cross").style.display = "none";
    document.getElementById("navList").style.display = "none";
}

function toggle() {
    document.getElementById("navList").style.display = "none";
    document.getElementById("trigram").style.display = "block";
    document.getElementById("cross").style.display = "none";
}