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

document.addEventListener('DOMContentLoaded', () => {
    const toggleDarkModeButton = document.getElementById("darkMode")
    const body = document.body;

    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
    }
    toggleDarkModeButton.addEventListener('click', toggleDarkMode);
});

document.addEventListener("DOMContentLoaded", function() {
    let timerInterval;
    let hours = 23;
    let minutes = 50;
    let seconds = 59;

    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    function startTimer() {
        timerInterval = setInterval(function() {
            if (seconds > 0) {
                seconds--;
            } else {
                if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    if (hours > 0) {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    } else {
                        clearInterval(timerInterval);
                    }
                }
            }

            hoursElement.textContent = hours < 10 ? "0" + hours : hours;
            minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
            secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
        }, 1000);
    }

    startTimer();
});

document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const carouselImage = document.getElementById("carouselImage");
    const imageUrls = ["./assets/image1carousel.jpg", "./assets/image2carousel.jpg", "./assets/image3carousel.jpg"];
    let currentIndex = 0;

    function nextImage() {
        currentIndex++;
        if (currentIndex >= imageUrls.length) {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = imageUrls.length - 1;
        }
        updateCarousel();
    }

    function updateCarousel() {
        carouselImage.src = imageUrls[currentIndex];
    }

    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);

    updateCarousel();
});