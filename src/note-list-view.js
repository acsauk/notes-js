(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.toHTML = function() {
    var listLength = this.noteList.notes.length;
    var stringList = this.noteList.notes.join();
    var htmlListStart = "<li><div>";
    var htmlListEnd = "</li></div>";
    var joinedList;
    var string;

    for(var i = 0; i < listLength; i++) {
      if (i < listLength) {
        string = this.noteList.notes[i].text;
        joinedList += htmlListStart + string + htmlListEnd;
      } else {
        string = this.noteList.notes[i].text;
        joinedList += htmlListStart + string + htmlListEnd;
        joinedList += "<ul>" + joinedList + "</ul>";
      }
      return joinedList;
    }
  };

  exports.NoteListView = NoteListView;
})(this);
