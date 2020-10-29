$(document).ready(function () {

    //Visualizzare in pagina 5 numeri casuali.
    var listaNumeriRandom = [];

    $( ".box-info p" ).each(function() {
        $(this).append(listaNumeriRandom);
    });

    for (var i = 0; i < 5; i++) {
        var numeroRandom = getRndInteger(1, 100);
        listaNumeriRandom.push(numeroRandom);
    }

    console.log(listaNumeriRandom);

    $('.box-info p').append(listaNumeriRandom.join(' , '));

    //Da lì parte un timer di 30 secondi.
    var tempoRimanente = 4;
    var displayTimer = $('.box-info h2');

    var timerId = setInterval(countdown, 1000);

    function countdown() {
      if (tempoRimanente == -1) {
        clearInterval(timerId);
        getUserInput();
      } else {
        //BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi
        $('.box-info h2').text('Timer: ' + tempoRimanente + ' secondi rimanenti!');
        tempoRimanente--;
      }
    }

    //Dopo 30 secondi, vengono rimossi i numeri dalla pagina
    function getUserInput() {

        $( ".box-info p" ).toggleClass('active');
        $('.box-info h2').toggleClass('active');

        var waitToggleClassTimeout = setTimeout(promptFunction, 1000);

    }

    //e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
    function promptFunction() {

        var listaNumeriUtente = [];

        for (var i = 0; i < 5; i++) {
            var sceltaUtente = parseInt(prompt("Digita uno dei numeri!"));
            listaNumeriUtente.push(sceltaUtente);
        }

        console.log(listaNumeriUtente);
    }

    //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

    //
    //

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
});
