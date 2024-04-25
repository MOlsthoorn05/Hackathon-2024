let antwoordEen = false;
let antwoordTwee = false;
let antwoordDrie = false;
let antwoordVier = false;
let antwoordVijf = false;
let antwoordZes = false;
let antwoordZeven = false;
let antwoordAcht = false;
let antwoordNegen = false;
let antwoordTien = false;
let antwoordElev = false;
let antwoordTwaalef = false;
let antwoordDertien = false;
let antwoordViertien = false;
let antwoordVijftien = false;
let antwoordZestien = false;
let antwoordZeventien = false;
let antwoordAchtien = false;
let antwoordNegentien = false;
let antwoordTwintig = false;

let mkb = document.getElementById("MKB");
let groot = document.getElementById("Groot");
let xl = document.getElementById("XL");
let jasje = document.getElementById("Jasje");
let niveau = document.getElementById("niveau");
let regelgeving = document.getElementById("regelgeving");
let goed = document.getElementById("goed");
let inrichten = document.getElementById("inrichten");
let koppelvlakken = document.getElementById("koppelvlakken");
let organische = document.getElementById("organische");
let vergroten = document.getElementById("Vergroten");
let structureren = document.getElementById("structureren");
let it = document.getElementById("IT");
let automatiseren = document.getElementById("automatiseren");


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
    }else if(niveau.classList.contains("active")){
        antwoordVijf = true;
        window.location.href = 'vraag3-2.html';
    }else if(regelgeving.classList.contains("active")){
        antwoordZes = true;
        window.location.href = 'vraag3-3.html';
    }else if(goed.classList.contains("active")){
        antwoordZeven = true;
        window.location.href = 'vraag3-4.html';
    }else {
        alert("Kies een antwoord");
    }
}

function checkIfActive2() {
    if(vergroten.classList.contains("active")){
        antwoordAcht = true;
        window.location.href = '';
    }else if(structureren.classList.contains("active")){
        antwoordNegen = true;
        window.location.href = '';
    }else if(it.classList.contains("active")){
        antwoordTien = true;
        window.location.href = '';
    }else {
        alert("Kies een antwoord");
    }
}

function checkIfActive3() {
    if(organische.classList.contains("active")){
        antwoordElev = true;
        window.location.href = 'animatie.html';
    }else if(fusie.classList.contains("active")){
        antwoordTwaalef = true;
        window.location.href = 'animatie.html';
    }else {
        alert("Kies een antwoord");
    }
}

function checkIfActive4() {
    if(vergroten.classList.contains("active")){
        antwoordDertien = true;
        window.location.href = 'animatie.html';
    }else if(structureren.classList.contains("active")){
        antwoordViertien = true;
        window.location.href = 'animatie.html';
    }else if(it.classList.contains("active")){
        antwoordVijftien = true;
        window.location.href = 'animatie.html';
    }
    else {
        alert("Kies een antwoord");
    }
}

function checkIfActive5() {
    if(inrichten.classList.contains("active")){
        antwoordZestien = true;
        window.location.href = 'animatie.html';
    }else if(automatiseren.classList.contains("active")){
        antwoordZeventien = true;
        window.location.href = 'animatie.html';
    }else {
        alert("Kies een antwoord");
    }
}

function checkIfActive6() {
    if(koppelvlakken.classList.contains("active")){
        antwoordAchtien = true;
        window.location.href = 'animatie.html';
    }else if(samenwerking.classList.contains("active")){
        antwoordNegentien = true;
        window.location.href = 'animatie.html';
    }else if(adequaat.classList.contains("active")){
        antwoordTwintig = true;
        window.location.href = 'animatie.html';
    }
    else {
        alert("Kies een antwoord");
    }
}
