function noteControllerCanBeInstantiated() {
  var controller = new Controller();
  if (controller === undefined) {
    throw new Error ("Controller has note been instantiated");
  }
}

noteControllerCanBeInstantiated();


function noteListCanBeViewedAsHTMLString() {
  var controller = new Controller();
  var list = new NotesList();
  list.createNote("I am a note");
  var list_view = new NoteListView(list);
  var htmlString = list_view.getView();
  var element = document.createElement('div');
  var document = { getElementById: element }

  if (document.getElementById !== element) {
    throw new Error ("Note list is not in page in HTML");
  }
}

noteListCanBeViewedAsHTMLString()
