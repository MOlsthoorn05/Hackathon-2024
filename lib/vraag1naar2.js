let antwoordEen = false;
let antwoordTwee = false;
let antwoordDrie = false;


let mkb = document.getElementById("MKB");
let groot = document.getElementById("Groot");
let xl = document.getElementById("XL");

const antwoorden = document.querySelectorAll(".antwoord");

antwoorden.forEach(antwoord => {
    antwoord.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        antwoord.classList.add('active');
    })
});

function checkIfActive() {
    if (mkb.classList.contains("active")) {
        antwoordEen = true;
        window.location.href = 'vraag2.html';
    } else if (groot.classList.contains("active")) {
        antwoordTwee = true;
        window.location.href = 'vraag2.html';
    } else if (xl.classList.contains("active")) {
        antwoordDrie = true;
        window.location.href = 'vraag2.html';
    } else {
        alert("Kies een antwoord");
    }
}