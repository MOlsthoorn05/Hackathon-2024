let antwoordEen = false;
let antwoordTwee = false;
let antwoordDrie = false;
let antwoordVier = false;

let jasje = document.getElementById("jasje");
let niveau = document.getElementById("niveau");
let regelgeving = document.getElementById("regelgeving");
let goed = document.getElementById("goed");	

const antwoorden = document.querySelectorAll(".antwoord");

antwoorden.forEach(antwoord => {
    antwoord.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        antwoord.classList.add('active');
    })
});

function checkIfActive() {
    if (jasje.classList.contains("active")) {
        antwoordEen = true;
        window.location.href = '3-1.html';
    } else if (niveau.classList.contains("active")) {
        antwoordTwee = true;
        window.location.href = '3-2.html';
    } else if (regelgeving.classList.contains("active")) {
        antwoordDrie = true;
        window.location.href = '3-3.html';
    } else if (goed.classList.contains("active")) {
        antwoordVier = true;
        window.location.href = '3-4.html';
    } else {
        alert("Kies een antwoord");
    }
}
