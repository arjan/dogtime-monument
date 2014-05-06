$(function() {
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
    
    $.ajax('/data.json').done(function(data) {

        _.each(data, function(row, yearIndex) {
            globalMax = Math.max(globalMax, row.length-1);
        });

        _.each(data, function(row, yearIndex) {

            var year = row[0];
            var names = row.slice(1);
            globalCount += names.length;
            
            personData[yearIndex] = [];
            _.each(names, function(r, personIndex) {
                var person = {name: r[0], study: r[1], elem: createCircle(yearIndex, personIndex)};
                personData[yearIndex][personIndex] = person;
            });
        });

    });

    $(document.body).on('keyup', function() {
        $.ajax({method: 'post', url: '/shoot'});
    });        
    
});

