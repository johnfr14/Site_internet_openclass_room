const elt = document.getElementById('banniere_image');    // On récupère l'élément sur lequel on veut détecter le clic
const elt2 = document.getElementById('bouton');

    // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function(event) {  
	event.preventDefault();           // On écoute l'événement click
    elt.innerHTML = "C'est cliqué !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
});

elt2.addEventListener('click', function(event) {  
	event.preventDefault();           // On écoute l'événement click
	event.stopPropagation();           // On écoute l'événement click
    elt2.style.background = "green";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
});