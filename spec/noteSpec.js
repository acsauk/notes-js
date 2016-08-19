describe( "Note Model", function () {
  var note = new Note("Ruby trumps javascript");

  it( "Can create a note", function () {
    asserts.isTrue( note.text === "Ruby trumps javascript" );
    });

    it( "Can display its text", function () {
    asserts.isTrue(note.getText() === "Ruby trumps javascript");
    });

    it("Notes can have unique ids", function() {
      asserts.isTrue(note.id === 0);
    });


});
