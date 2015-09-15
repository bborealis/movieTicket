function Ticket(movieName, movieTime, ageBracket) {
    this.movieName = movieName;
    this.movieTime = movieTime;
    this.ageBracket = ageBracket;
}

Ticket.prototype.movieTicket = function() {
    return this.movieName + " at " + this.movieTime + " ticket type: " + this.ageBracket;
}

function resetFields() {
    $("input#movie-name").val("");
    $("input#movie-time").val("");
    $("input#age-bracket").val("");
    $(".removable").remove();
}

$(document).ready(function() {

    $("form#new-ticket").submit(function(event) {
        event.preventDefault();

        var movieCode = $("#new-movie-name option:selected").val();
        var timeCode = $("#new-movie-time option:selected").val();
        var ageCode = $("#new-age-bracket option:selected").val();

        var movieArrayObject = {
            danceswithwolves : "Dances With Wolves",
            robinhood : "Robin Hood: Prince of Thieves",
            waterworld : "WaterWorld",
            fieldofdreams : "Field Of Dreams",
            thepostman : "The Postman",
            theuntouchables : "The Untouchables",
            thebodyguard : "The Bodyguard",
            bulldurham : "Bull Durham",
            tincup : "Tin Cup"
        };

        inputtedMovieName = movieArrayObject[movieCode];

        // var timeArrayObject = [
        //     1 : "1:30 pm",
        //     3 : "3:00 pm",
        //     4 : "4:30 pm",
        //     5 : "5:30 pm",
        //     6 : "6:30 pm",
        //     7 : "7:30 pm",
        //     8 : "8:30 pm",
        //     9 : "9:30 pm",
        // ];

        inputtedMovieTime = "7";

        inputtedAgeBracket = "senior";

        var newTicket = new Ticket(inputtedMovieName, inputtedMovieTime, inputtedAgeBracket);

        $("ul#movie").append("<li>" + newTicket.movieTicket() + "</li>");

        resetFields();

    });
});
