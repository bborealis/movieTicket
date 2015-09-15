function Ticket(movieName, movieTime, ageBracket) {
    this.movieName = movieName;
    this.movieTime = movieTime;
    this.ageBracket = ageBracket;
}

Ticket.prototype.movieTicket = function() {
    return this.movieName + " at " + this.movieTime + " Ticket type: " + this.ageBracket;
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

        var timeArrayObject = {
            time1 : "1:30 pm",
            time3 : "3:00 pm",
            time4 : "4:30 pm",
            time5 : "5:30 pm",
            time6 : "6:30 pm",
            time7 : "7:30 pm",
            time8 : "8:30 pm",
            time9 : "9:30 pm",
        };

        inputtedMovieTime = timeArrayObject[timeCode];

        var ageArrayObject = {
            child : "Child",
            youth : "Youth",
            student : "Student",
            adult : "Adult",
            senior : "Senior"
        };

        inputtedAgeBracket = ageArrayObject[ageCode];

        var newTicket = new Ticket(inputtedMovieName, inputtedMovieTime, inputtedAgeBracket);

        $("ul#movie").append("<li>" + newTicket.movieTicket() + "</li>");

        resetFields();

    });
});
