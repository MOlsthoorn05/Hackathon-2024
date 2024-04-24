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
        alert("MKB werkt");
      // do something here if the class exists
    }else if(groot.classList.contains("active")){
        alert("GROOT werkt");
      // do something here if the class exists
    }else if(xl.classList.contains("active")){
        alert("XL werkt");
      // do something here if the class exists
    }else {
        alert("Class active has not been added");
      // do something else here if the class does not exist
    }
}
