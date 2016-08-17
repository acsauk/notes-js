(function(exports) {

  function NotesList(){
    this.notes = [];

  };

  NotesList.prototype.getNotes = function(){
    return this.notes;
  };

  NotesList.prototype.createNote = function(txt) {
    var note = new Note(txt);
    this.notes.push(note);
  };

  exports.NotesList = NotesList;

})(this);
