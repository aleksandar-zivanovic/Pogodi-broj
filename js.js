let brojacPokusaja = 1;
let unetiBroj;
let generisaniBroj = Math.ceil(Math.random() * maxNum);
let testDiv = document.getElementById('test');

function proizvoljneIndexVrednosti() {
    document.getElementById('min_num').innerHTML = minNum;
    document.getElementById('max_num').innerHTML = maxNum;
    document.getElementById('dozvoljen_br_pokusaja').innerHTML = dozBrPokusaja;
}

function unosBroja() {
    unetiBroj = parseInt(prompt('Upiši broj'));
    document.getElementById('uneto').innerHTML = unetiBroj;
    proveraPogotka();
    return unetiBroj;
}

function proveraPogotka() {
    if (unetiBroj == generisaniBroj) {
        let tekst = "Bravo. Tačan pogodak.";
        testDiv.style.backgroundColor = "lightgreen";
        testDiv.innerHTML = "<h2>" + tekst + "</h2>";
        disableButton('unos_broja_button');
        enableNoviPokusajiButton();
    } else {
        izvestajOProveri(unetiBroj > generisaniBroj ? 'veći' : 'manji');
    }
}

function izvestajOProveri(vrednost) {
    let tekst = "Uneti broj je <strong>" + vrednost + "</strong> od zamišljenog broja."
    testDiv.innerHTML = tekst;
}

function brojanjePokusaja() {
    unosBroja();
    brojacPokusaja++;

    if (brojacPokusaja > dozBrPokusaja) {
        document.getElementById("novi_pokusaji_button").setAttribute('disabled', 'true');
        disableButton('unos_broja_button');
        enableNoviPokusajiButton();
    }

    document.getElementById('br_pokusaja').innerHTML = brojacPokusaja - 1;
    document.getElementById('preostali_pokusaji').innerHTML = (dozBrPokusaja + 1) - brojacPokusaja;
}

function ponovnoUcitavanje() {
    location.reload();
    disableButton('disable_button');
}

function enableNoviPokusajiButton() {
    document.getElementById("novi_pokusaji_button").removeAttribute('disabled');
}

function disableButton(id) {
    document.getElementById(id).setAttribute('disabled', 'true');
}

document.getElementById('zamisljeno').innerHTML = generisaniBroj;