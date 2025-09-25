// Valitaan lomake DOM:sta
const form = document.querySelector("#surveyForm");

// Lisätään tapahtumankuuntelija lomakkeen lähetykselle
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Estetään lomakkeen oletustoiminto (uudelleenlataus)

    // Haetaan käyttäjän syöttämät tiedot
    const userData = {
        fname: document.querySelector('input[name="fname"]').value,
        lname: document.querySelector('input[name="lname"]').value,
        address: document.querySelector('input[name="address"]').value,
        puhelin: document.querySelector('input[name="puhelin"]').value,
        palaute: document.querySelector('input[name="palaute"]').value,
    };

    console.log("Käyttäjän tiedot:", userData);
    
    sendtoBackend(userData);

    // Ohjataan käyttäjä toiselle sivulle

});
// Lähetetään tiedot palvelimelle
function sendtoBackend(userData){
    console.log("läheteään backendiin");
    fetch("http://127.0.0.1:8000/collect/",{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}