(function(exports) {

  function Controller() {

  };

  Controller.prototype.displayNotes = function () {
    window.onload = function() {
      var list = new NotesList();
      list.createNote("I am a note");
      var noteView = new NoteListView(list);
      htmlString = noteView.getView();
      var element = document.getElementById("app");
      element.innerHTML = htmlString
    }
  };


  exports.Controller = Controller;
})(this);

var controller = new Controller();
controller.displayNotes();
