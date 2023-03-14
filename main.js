let licznik = 0;

function increase(){
    licznik += 1;
    document.getElementById("counter").innerHTML = licznik;
}

function decrease(){
    licznik -= 1;
    document.getElementById("counter").innerHTML = licznik;
}