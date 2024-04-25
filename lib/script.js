let antwoordEen = false;
let antwoordTwee = false;
let antwoordDrie = false;
let antwoordVier = false;
let antwoordVijf = false;
let antwoordZes = false;
let antwoordZeven = false;

let mkb = document.getElementById("MKB");
let groot = document.getElementById("Groot");
let xl = document.getElementById("XL");
let jasje = document.getElementById("Jasje");


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
    }else if(groot.classList.contains("active")){
        antwoordTwee = true;
        window.location.href = 'vraag2.html';
    }else if(xl.classList.contains("active")){
        antwoordDrie = true;
        window.location.href = 'vraag2.html';
    }else if(jasje.classList.contains("active")){
        antwoordVier = true;
        window.location.href = 'vraag3-1.html';
    }else {
        alert("Kies een antwoord");
    }
}

function checkIfActive1() {
    if(jasje.classList.contains("active")){
        antwoordVier = true;
        window.location.href = 'vraag3-1.html';
    }else {
        alert("Kies een antwoord");
    }
}
