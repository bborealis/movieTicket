describe('Ticket', function() {
    it("creates a new ticket with the given specifications", function() {
        var testTicket = new Ticket("Jurassic Park", 3, "senior");
        expect(testTicket.movieName).to.equal("Jurassic Park");
        expect(testTicket.movieTime).to.equal(3);
        expect(testTicket.ageBracket).to.equal("senior");
    });

});
