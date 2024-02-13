let billetter = [];


function kjopBillett() {
    //fjerner tidligere valideringsmelding
    document.getElementById("resultatAntallSjekk").innerHTML = "";
    document.getElementById("resultatFornavnSjekk").innerHTML = "";
    document.getElementById("resultatEtternavnsSjekk").innerHTML = "";
    document.getElementById("resultatTelefonNrSjekk").innerHTML = "";
    document.getElementById("resultatEpostSjekk").innerHTML = "";

    let antall = parseInt(document.getElementById("antallInput").value);
    let fornavn = document.getElementById("inputFornavn").value;
    let etternavn = document.getElementById("inputEtternavn").value;
    let telefonnr = document.getElementById("inputTelefonnr").value;
    let epost = document.getElementById("inputEpost").value;
    let film = document.getElementById("film").value;


    function validering() {
        //opretter bilett objekt
        const bilett = {
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost,
            antall: antall,
            film: film

        };
        //sjekker antall input
        let antallSjekk = true;
        if (antall == null || antall === '' || isNaN(antall) || antall < 1) {
            antallSjekk = false;
            document.getElementById("resultatAntallSjekk").innerHTML = "Du må kjøpe minst en bilett"
        }
        //definerer antall til bilett
        else{
            bilett.antall = antall;
        }
        //sjekker fornavn input
        let fornavnSjekk = true;
        if (fornavn.length === 0) {
            fornavnSjekk = false;
            document.getElementById("resultatFornavnSjekk").innerHTML = "Vennligst oppgi navn";

        }
        //definerer fornavn til bilett
        else {
            bilett.fornavn = fornavn;
        }
        //sjekker etternavn input
        let etternavnSjekk = true;
        if (etternavn.length === 0) {
            etternavnSjekk = false;
            document.getElementById("resultatEtternavnsSjekk").innerHTML = "Vennligst oppgi etternavn";
        }
        //definerer etternavn til bilett
        else {
            bilett.etternavn = etternavn;

        }
        //sjekker telefonnr input
        let telefonnrSjekk = true;
        if (telefonnr.length !== 8 ) {
            telefonnrSjekk = false;
            document.getElementById("resultatTelefonNrSjekk").innerHTML = "Vennligst oppgi gydlig telefonnr, med 8 siffer.";
        }
        //definerer telefonnr til bilett
        else {
            bilett.telefonnr = telefonnr;

        }
        //sjekker epost input
        let epostSjekk = true;
        if (epost.indexOf("@") === -1) {
            epostSjekk = false;
            document.getElementById("resultatEpostSjekk").innerHTML = "Vennligst oppgi gyldig epost";

        }
        //definerer epost til bilett
        else {
            bilett.epost = epost;
        }

        //pusher bilett om alle input er godkjent
        if (antallSjekk  && fornavnSjekk && etternavnSjekk && telefonnrSjekk && epostSjekk) {
            billetter.push(bilett);
            document.getElementById("inputFornavn").value = "";
            document.getElementById("inputEtternavn").value = "";
            document.getElementById("inputTelefonnr").value = "";
            document.getElementById("inputEpost").value = "";
            document.getElementById("antallInput").value = "";





        }
    }
    //kaller metodene
    validering();
    console.log(billetter);
    visBiletter();



}

function visBiletter(){
    let ut = "<table><tr>" +
        "<th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th><th>Antall</th><th>Film</th>" +
        "</tr>";
    for(let i of billetter){
        ut+= "<tr>";
        ut += "<td>" +  i.fornavn+"</td>" +
            "<td>" + i.etternavn + "</td>" +
            "<td>" + i.telefonnr + "</td>" +
            "<td>" + i.epost + "</td>" +
            "<td>" + i.antall + "</td>" +
            "<td>"+ i.film +"</td>";
        ut += "</tr>";
    }
    ut+= "</table>";
    document.getElementById("visBiletter").innerHTML = ut;
}




function slettBillett(){
    billetter = [];
    visBiletter();

}
