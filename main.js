$(document).ready(function () {

    //Visualizzare in pagina 5 numeri casuali.
    //Da lì parte un timer di 30 secondi.
    //Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
    //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    //BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi

    var listaNumeriRandom = [];

    $( ".box-info p" ).each(function() {
        $(this).append(listaNumeriRandom);
    });

    for (var i = 0; i < 5; i++) {
        var numeroRandom = getRndInteger(1, 100);
        listaNumeriRandom.push(numeroRandom);
    }

    console.log(listaNumeriRandom);

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
});
