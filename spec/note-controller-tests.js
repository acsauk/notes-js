function noteControllerCanBeInstantiated() {
  var controller = new Controller();
  if (controller === undefined) {
    throw new Error ("Controller has note been instantiated");
  }
}

noteControllerCanBeInstantiated();


function noteListCanBeViewedAsHTMLString() {
  var controller = new Controller();
  controller.displayNotes();
  var element = document.createElement('div',{id: "app"})
  // console.log(element)
  document.getElementById = function(){
    return element;
  };
  console.log(element);
  console.log((document.getElementById()).innerHTML);
  if (document.getElementById().innerHTML !== "<ul><li><div>I am a note</div></li></ul>") {
    throw new Error ("Note list is not in page in HTML");
  }
}

noteListCanBeViewedAsHTMLString()
