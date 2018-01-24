/*      ~ LES EVENEMENTS ~      
Les évènements vont me permettre de déclancher une 
fonction, c'est à dire une serie d'instructions ;
suite à une action de mon utilisateur...        

OBJETCTIF : Etre en mesure de capturer ces évènements
afin d'executer une fonction.

Les évènements  : MOUSE (Souris)

    click       : au clic sur un élément
    mouseenter  : la souris passe au dessus de la zone d'un élèment.
    mouseleave  : la souris sors de cette zone

Les évènements  : KEYBOARD (Clavier)
    
    keydown     : une touche du clavier est enfoncée ;
    keyup       : une touche du clavier a été relachée.

Les évenements  : WINDOW (Fenêtre)

    scroll      : defilement de la fenêtre ;
    resize      : redimensionnement de la fenêtre.

Les évenements  : FORM (Formulaire)

    change      : pour les éléments <input>, <select> et <textarea>
    submit      : à l'envoi (soumission) du formulaire ;
    input       : pour capter la saisie d'un utilisateur sur un champ <input>

######### LES ECOUTEURS D'EVENEMENTS ##########

Pour attacher un évènement à un élément, ou autrement dit,
pour déclarer un écouteur d'évènement qui se chargera de 
déclencher une fonction, je vais utiliser la syntaxe suivante :
*/

var p = document.getElementById("MonParagraphe");

// ~~ Je souhaite que mon paragraphe soit rouge au clic de la souris.

function changerLaCouleurEnRouge() {
    p.style.color ="red";
}

p.addEventListener("click", changerLaCouleurEnRouge);

/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

// -- Création du champ input
var input = document.createElement('input');
document.body.appendChild(p);

// -- Attribution d'un Attribut
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Saisissez un Contenu...');

//-- Attribution d'un ID
input.id = "MonID";

// -- Ajout dans la page
document.body.appendChild(input);

function voirLaSaisieDeMonInput() {
    console.log(input.value);
    alert(input.value);
}

input.addEventListener('change', voirLaSaisieDeMonInput);



