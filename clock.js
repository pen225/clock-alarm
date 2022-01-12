let afficheHorloge = document.querySelector('.heure');
let dates = document.querySelector('.date');


function heure() {
    const date = new Date();
    const heure = date.getHours();
    const minute = date.getMinutes();
    const seconde = date.getSeconds();

    afficheHorloge.innerHTML = `${heure} : ${minute} : ${seconde}`;
}
function date() {
    const date = new Date();
    const annee = date.getUTCFullYear();
    const mois = date.getUTCMonth();
    const jour = date.getDay();
    const listJour = ["Dimanche", "Lundi", "mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const listmois = ["Janvier" , "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juiellet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]
    console.log(jour);
    dates.innerHTML = `${listJour[jour]} ${date.getDate()} ${listmois[mois]}  ${annee}`;
}

setInterval(heure, 1000);
setInterval(date, 1000);