// déclaration des variables pour stocker les informations
let title;
let pays;
let info;


function maFonction(monument) {
        //permet de vérifier quel monument correspond
    if (monument === 'tour_eiffel') { 
        //définie les information que doit contenir le monument correspondant 
        title = "Tour Eiffel";
        pays = "Paris, France";
        info = "La tour Eiffel est un monument emblématique de Paris, construit par Gustave Eiffel pour l'Exposition universelle de 1889. Mesurant 330 mètres de hauteur, elle est faite de fer et a été initialement critiquée, mais elle est devenue un symbole mondial de la France et de l'ingénierie moderne. Elle attire des millions de visiteurs chaque année pour sa vue panoramique sur la ville.";
    } else if (monument === 'notre_dame') {
        title = "Notre-Dame de Paris";
        pays = "Paris, France";
        info = "Notre-Dame est une cathédrale gothique située sur l'île de la Cité, construite entre le 12e et le 14e siècle.";
    } else if (monument === 'arc_de_triomphe') {
        title = "Arc de Triomphe";
        pays = "Paris, France";
        info = "L'Arc de Triomphe est un monument situé à Paris, commandé par Napoléon après la victoire d'Austerlitz en 1805.";
    } else if (monument === 'mont_saint_michel') {
        title = "Mont Saint-Michel";
        pays = "Normandie, France";
        info = "Le Mont Saint-Michel est une île fortifiée située en Normandie, célèbre pour son abbaye.";
    } else if (monument === 'versailles') {
        title = "Château de Versailles";
        pays = "Versailles, France";
        info = "Le château de Versailles est un palais royal, ancien centre du pouvoir français sous Louis XIV.";
    }

    // permet d'aller selectionner mon id dans mon html pour contenire du texte (title, pays, info)
    document.querySelector("#title").textContent = title;
    document.querySelector("#pays").textContent = pays;
    document.querySelector("#info").textContent = info;
}






