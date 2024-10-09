var titre = document.getElementById("Title");
var destination = document.getElementById("destination");
var departure = document.getElementById("departure");
var returnDate = document.getElementById("return");

function validerFormulaire() {
    if (titre.value.length < 3) {
        alert("Le titre doit contenir au moins 3 caractères.");
    } else if (/\d/.test(destination.value) || destination.value.length < 3) {
        alert("La destination doit contenir au moins 3 lettres et ne pas contenir de chiffres.");
    } else if (returnDate.value < departure.value) {
        alert("La date de retour doit être supérieure à la date de départ.");
    }
}

document.getElementById("felsa").onclick = validerFormulaire;
