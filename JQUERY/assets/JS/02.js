/*      LES SELECTEURS JQUERY       */

// -- Format : $("selecteur");
// -- En jQuery, tout les sélecteurs CSS sont disponibles...

$(function() {
    // -- DOM READY !

    l = e => console.log(e);

    // -- Selectionner toutes les SPAN !
    l(document.getElementsByName("span"));
    l($("span"));

    // -- Je veux selectionner mon Menu grâce à son ID
    l(document.getElementById("menu"));
    l($("span"));

    // -- Selectionner une classe...
    l(document.getElementsByClassName("maClasse"));
    l($(".MaCmasse"));

    // -- Selectionner un Attribut
    l($('[href="https://www.google.fr"]'));

});