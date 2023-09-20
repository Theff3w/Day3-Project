document.addEventListener("DOMContentLoaded", function() {
    const boutonAfficherChat = document.getElementById("afficherChat");
    const boutonAfficherChien = document.getElementById("afficherChien");
    const boutonAfficherRongeur = document.getElementById("afficherRongeur");
    const boutonToutAfficher = document.getElementById("toutAfficher");
    const divs = document.querySelectorAll("div");

    boutonAfficherChat.addEventListener("click", function() {
        afficherDivsAvecClasse("chat");
    });

    boutonAfficherChien.addEventListener("click", function() {
        afficherDivsAvecClasse("chien");
    });

    boutonAfficherRongeur.addEventListener("click", function() {
        afficherDivsAvecClasse("rongeur");
    });

    boutonToutAfficher.addEventListener("click", function() {
        for (const div of divs) {
            div.style.display = "block";
        }
    });

    function afficherDivsAvecClasse(classe) {
        for (const div of divs) {
            const classes = div.classList;
            if (classes.contains(classe)) {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        }
    }
});