$(function() {

    var rawData = [
        [
            2008,
            ["Annelies Wina Doom", "bk"],
            ["Arjan van Amsterdam", "bk"],
            ["Caroline de Win", "bk"],
            ["Dirk Moons", "bk"],
            ["Hans Kuiper", "bk"],
            ["Leoniek Bontje ", "bk"],
            ["Luciano Pinna", "bk"],
            ["Mariken Wessels", "bk"],
            ["Marjon van Tongeren", "bk"],
            ["Nini Tervoort-Toepoel", "bk"],
            ["Pauline Mastenbroek", "bk"],
            ["Pieter de Kok", "bk"],
            ["Sander Stada", "bk"],
            ["Tzvetana Tchakarova", "bk"],
            ["Ulrike van der Lee", "bk"]
        ],

        [
            2009,
            ["Adriaan Beukema", "idum"],
            ["Arjan Scherpenisse", "idum"],
            ["Arthur van Beek", "idum"],
            ["Augusto Pereira Silva", "bk"],
            ["Bas Strunk", "idum"],
            ["Eelco Wagenaar", "idum"],
            ["Eva Thomassen", "bk"],
            ["Iti Westra", "bk"],
            ["Jabu Arnell", "bk"],
            ["Jacq van der Spek", "bk"],
            ["Jacqueline van der Horst", "bk"],
            ["Jelena Miskovic", "bk"],
            ["Judith van Bronswijk", "bk"],
            ["Laetitia Schoofs", "bk"],
            ["Marieke Warmelink", "bk"],
            ["Maritt Serena Kuipers", "bk"],
            ["Martin Caupain", "bk"],
            ["Mohamed Bouyzgarne", "bk"],
            ["Nathalie Snel", "bk"],
            ["Rosalie Ravensteijn", "bk"],
            ["Sabine Silberhorn", "bk"],
            ["Sander Cedee", "bk"],
            ["Sander Veenhof", "idum"],
            ["Sara Platon", "bk"],
            ["Sieto Noordhoorn", "idum"],
            ["Tabo Goudswaard", "bk"],
            ["Valeriy Petushynskyy", "bk"]
        ],

        [
            2010,
            ["Amber Zaal", "bk"],
            ["Ben Zahid Reinhold", "bk"],
            ["Charley Muhren", "idum"],
            ["Constantijn Smit", "idum"],
            ["Esther Verhamme", "idum"],
            ["Isabella Prins", "bk"],
            ["Jannemieke Oostra", "bk"],
            ["Jordy Wit", "bk"],
            ["Jurjan de Vries", "idum"],
            ["Lenka Dittrichová", "idum"],
            ["Maarten van der Heijden", "bk"],
            ["Marie-Jose van der Klugt", "bk"],
            ["Mieke Teelen", "bk"],
            ["Mirdije Sheji", "bk"],
            ["Mrova Zub", "idum"],
            ["Quintus Masius", "idum"],
            ["Roelof de Boer", "bk"],
            ["Sara Palomeque Monje", "idum"],
            ["Simonette van der Kuip", "bk"],
            ["Stefanie Wels", "bk"],
            ["Tina Pereira Filipe", "bk"],
            ["Zwaan Kuiper", "bk"]
        ],

        [
            2011,
            ["Anita Tortella", "bk"],
            ["Anne-Marie van Meel", "bk"],
            ["Bertha Graciela Acosta", "bk"],
            ["Cym", "idum"],
            ["Daniël de Zeeuw", "idum"],
            ["Douwe Mulder", "bk"],
            ["Femke Egas", "bk"],
            ["Jane Wang", "bk"],
            ["Jannemieke Versteegen", "bk"],
            ["Karla Hari", "bk"],
            ["Katarina Murinova", "bk"],
            ["Laura L.A. Cieraad", "bk"],
            ["Loes Degener", "bk"],
            ["Luis Rodil-Fernandez", "bk"],
            ["Marjolein Charlotte Hessels", "idum"],
            ["Martine Smids", "bk"],
            ["Michiel Hilbrink", "bk"],
            ["Minggus Dorpmans", "idum"],
            ["Nicoline Timmer", "bk"],
            ["Osira Verspyck", "bk"],
            ["Patrice Aaftink", "bk"],
            ["René Bosch", "bk"],
            ["Robbert Weide", "bk"],
            ["Simone van Groenestijn", "idum"],
            ["Sébastien Goy", "bk"],
            ["Tatjana Leutar", "bk"]
        ],

        [
            2012,
            ["Anneke de Visser", "bk"],
            ["Annette Vlug", "idum"],
            ["Claudia Mulder", "bk"],
            ["Daphne Koopman", "idum"],
            ["Dennis Verbeke", "bk"],
            ["Elize Lutz", "bk"],
            ["Isis Verberk", "bk"],
            ["Jeannette de Bruijn", "bk"],
            ["Jefta Hoed", "idum"],
            ["Marieke Gelissen", "bk"],
            ["Marieke Greeve", "idum"],
            ["Marlon van der Pas", "idum"],
            ["Muhabbat Huiskamp", "bk"],
            ["Paula Stam", "bk"],
            ["Péter Jánosi", "bk"],
            ["Tanya Keppel Hesselink", "bk"],
            ["Teresa van Twuijver", "bk"]
        ],

        [
            2013,
            ["Alexander Kraemer", "idum"],
            ["Alexander Schierl", "idum"],
            ["Asia Komarova", "bk"],
            ["Carlos van der Putten", "bk"],
            ["Cyrilla Verkooijen", "bk"],
            ["Dina Roussou", "bk"],
            ["Eugen Georg", "idum"],
            ["Gosia Kaczmarek", "idum"],
            ["Hester Kuis", "bk"],
            ["Inge Thoes", "bk"],
            ["Judy van Blaricon", "bk"],
            ["Maartje Hinse", "bk"],
            ["Maartje van den Heuvel", "bk"],
            ["Martien Suijkerbuijk", "bk"],
            ["Merel Schoutendorp", "bk"],
            ["Nathalie Ho-Kang-You", "bk"],
            ["Nil Ilkbasaran", "bk"],
            ["PJ Bruyniks", "bk"],
            ["Sebastian De Line", "bk"],
            ["Vera Visser", "bk"]
        ]
    ];

    console.log(1);

    var container = $(document.body);

    var globalMax = 0;
    var globalCount = 0;
    
    var totalWidth = container.width();
    var totalHeight = container.height();

    var vPadding = 100;
    var hPadding = 100;
    var cPadding = 10;
    var personData = [];

    var currentYear = 0;
    var currentPerson = 0;
    
    function createCircle(yearIndex, personIndex) {

        var diameter = ((totalWidth + cPadding - 2 * hPadding) / globalMax) - cPadding;

        var div = $("<div>")
            .addClass('circle')
            .width(diameter)
            .height(diameter);
        
        var x = hPadding + personIndex * (diameter + cPadding);
        var y = vPadding + yearIndex * (diameter + cPadding);
        div.css({left: x+'px', top: y+'px'});
        div.appendTo(container);
        return div;
    }

    var nextTime = 0;
    
    function queueNext() {
        var person = personData[currentYear][currentPerson];

        $("#announcement span.name").text(person.name);
        $("#announcement span.meta").text(
            (person.study == 'idum' ? 'IDUM' : 'BK') +
                ', graduated ' + (currentYear+2008));

        var t = 15000 + Math.random() * 15000;
        //t = 1000;
        nextTime = (new Date()).getTime() + t;
        updateCountdown();

        // queue the shoot
        setTimeout(function() {
            $.ajax({method: 'post', url: '/shoot'});
        }, t - 4000);

        setTimeout(shoot, t);
    }
    
    function shoot() {
        console.log('-shoot-');
        console.log(personData.length);

        var person = personData[currentYear][currentPerson];
        person.elem.addClass('white');

        currentPerson += 1;
        if (currentPerson == personData[currentYear].length) {
            currentYear++;
            currentPerson = 0;
            if (currentYear == personData.length) {
                currentYear = 0;
                currentPerson = 0;
                $(".circle").removeClass('white');
            }
        }

        $("#announcement div.chapeau").fadeOut();
        $("#announcement div.person").fadeOut(9000);
        $("#countdown").fadeOut();
        setTimeout(function() {
            $("#announcement div.chapeau").fadeIn();
            $("#announcement div.person").fadeIn();
            $("#countdown").fadeIn();
            queueNext();
        }, 10000);
    }
    
    setTimeout(function() {
        queueNext();
    }, 100);

    function updateCountdown() {
        var countdown = Math.max(0, Math.floor((nextTime - (new Date()).getTime())/1000));
        $("#countdown").text(countdown);
    }        
    setInterval(updateCountdown, 1000);
    
    //container.on('click', shoot);
    
    _.each(rawData, function(row, yearIndex) {
        globalMax = Math.max(globalMax, row.length-1);
    });

    _.each(rawData, function(row, yearIndex) {

        var year = row[0];
        var names = row.slice(1);
        globalCount += names.length;
        
        personData[yearIndex] = [];
        _.each(names, function(r, personIndex) {
            var person = {name: r[0], study: r[1], elem: createCircle(yearIndex, personIndex)};
            personData[yearIndex][personIndex] = person;
        });
    });

    $(document.body).on('keyup', function(e) {
        if (e.keyCode == 66) {
            $.ajax({method: 'post', url: '/shoot'});
        }
    });        
    
});

