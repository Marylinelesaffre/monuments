// déclaration des variables pour stocker les informations
let title;
let pays;
let info;


function maFonction(monument) {
    // Supprime l'effet noir et blanc de toutes les images
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.classList.add('grayscale'); // Ajoute l'effet noir et blanc à toutes les images
    });
    
    // Supprime l'effet noir et blanc uniquement de l'image sélectionnée
    document.getElementById(monument).classList.remove('grayscale');
    
        //permet de vérifier quel monument correspond
    if (monument === 'tour_eiffel') { 
        //définie les information que doit contenir le monument correspondant 
        title = "Tour Eiffel";
        pays = "Paris, <span class='span'>France</span>";
        info = "La tour Eiffel est un monument emblématique de Paris, construit par Gustave Eiffel pour l'Exposition universelle de 1889. Mesurant 330 mètres de hauteur, elle est faite de fer et a été initialement critiquée, mais elle est devenue un symbole mondial de la France et de l'ingénierie moderne. Elle attire des millions de visiteurs chaque année pour sa vue panoramique sur la ville.";
    } else if (monument === 'notre_dame') {
        title = "Notre-Dame de Paris";
        pays = "Paris, <span class='span'>France</span>";
        info = "Notre-Dame est une cathédrale gothique située sur l'île de la Cité, construite entre le 12e et le 14e siècle.Elle est célèbre pour son architecture spectaculaire, ses vitraux, et ses gargouilles, attirant des millions de visiteurs chaque année. Bien qu'elle ait subi des dégâts importants lors de l'incendie de 2019, des efforts de restauration sont en cours pour préserver cet important symbole culturel français.";
    } else if (monument === 'arc_de_triomphe') {
        title = "Arc de Triomphe";
        pays = "Paris, <span class='span'>France</span>";
        info = "L'Arc de Triomphe est un monument emblématique situé à Paris, commandé par Napoléon Bonaparte en 1806 pour honorer les victoires militaires françaises. Ce chef-d'œuvre néoclassique mesure 50 mètres de haut et est décoré de sculptures représentant des batailles célèbres et des figures historiques. Aujourd'hui, il symbolise non seulement la fierté nationale, mais abrite également la tombe du Soldat Inconnu, rendant hommage aux soldats morts pour la France.";
    } else if (monument === 'mont_saint_michel') {
        title = "Mont Saint-Michel";
        pays = "Normandie, <span class='span'>France</span>";
        info = "Le Mont Saint-Michel est une île fortifiée située en Normandie, célèbre pour son abbaye médiévale perchée au sommet d'un rocher. Classé au patrimoine mondial de l'UNESCO, ce site attire des millions de visiteurs chaque année grâce à son architecture unique et son ambiance mystique. Entouré de marées impressionnantes, le Mont est un symbole de l'ingéniosité humaine et de la beauté naturelle de la région.";
    } else if (monument === 'versailles') {
        title = "Château de Versailles";
        pays = "Versailles, <span class='span'>France</span>";
        info = "Le Château de Versailles est un somptueux palais royal situé à Versailles, près de Paris, et est un symbole de la puissance de la monarchie française sous Louis XIV. Construit au XVIIe siècle, il est célèbre pour ses jardins à la française, ses appartements richement décorés et la galerie des Glaces, qui illustre le faste de l'époque. Classé au patrimoine mondial de l'UNESCO, Versailles est aujourd'hui un site touristique majeur, attirant des millions de visiteurs qui viennent découvrir son histoire et son architecture impressionnante.";
    }

    // permet d'aller selectionner mon id dans mon html pour contenire du texte (title, pays, info)
    document.querySelector("#title").textContent = title;
    document.querySelector("#pays").innerHTML = pays;
    document.querySelector("#info").textContent = info;

    //pour l'animation de chaque bouton
    titleElement.textContent = title;
    paysElement.innerHTML = pays;
    infoElement.textContent = info;

    titleElement.classList.add('animationTexte');


}






