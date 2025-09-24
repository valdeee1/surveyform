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

    // Ohjataan käyttäjä toiselle sivulle
    window.location.href = "thankyou.html"; window.location.href = "thankyou.html";

});