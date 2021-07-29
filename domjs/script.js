let btup = document.querySelectorAll(".up");
let qt = document.querySelectorAll(".qts");
let btdown = document.querySelectorAll(".down");
let price = document.querySelectorAll(".prix")
let totprix = document.querySelectorAll(".totpr")
let totalp = document.getElementById("totalprix")
const Liker = document.querySelectorAll(".like");
const Delete = document.querySelectorAll(".delet");
const Arti = document.querySelectorAll(".aritcle");


console.log(Arti)


for (let i = 0; i < btup.length; i++) {
    btup[i].addEventListener("click", function() {

        qt[i].innerHTML++;

        totprix[i].innerHTML = price[i].innerHTML * qt[i].innerHTML
        totprix[i].innerHTML = totprix[i].innerHTML
        total();


    });

    btdown[i].addEventListener("click", function() {
        if (qt[i].innerHTML > 0) {
            qt[i].innerHTML--
                totprix[i].innerHTML = price[i].innerHTML * qt[i].innerHTML
            totprix[i].innerHTML = totprix[i].innerHTML
            total();


        };


    });
    Liker[i].addEventListener("click", function() {

        if (Liker[i].style.color == "red") {
            Liker[i].style.color = "black";
        } else {
            Liker[i].style.color = "red";
        }
    });

    Delete[i].addEventListener("click", function() {
        Arti[i].remove();

        total();
    })

}

function total() {
    let somme = 0;
    let qt = document.querySelectorAll(".qts");
    let price = document.querySelectorAll(".prix")
    for (let i = 0; i < qt.length; i++) {

        somme = somme + qt[i].innerHTML * price[i].innerHTML.replace("DT", "");

    }
    totalp.innerHTML = somme;


}