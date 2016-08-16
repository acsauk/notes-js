var isTrue = require("../src/asserts").isTrue;
var NoteList = require("../src/note-list-model").NoteList;
var NoteListView = require("../src/note-list-view").NoteListView;
var Note = require("../src/note-model").Note;

function notesToHMTL() {
  var notelist = new NoteList;
  notelist.saveNote("I am a note");
  notelist.saveNote("I am also a note");
  var notelistview = new NoteListView(notelist);
  var htmlList = notelistview.toHTML();
  isTrue(htmlList == "<ul><li><div>I am a note</div></li><li><div>I am also a note</li></div></ul>");
}

notesToHMTL();
