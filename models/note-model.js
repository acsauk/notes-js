(function(exports) {

  var idCount = 0;

  function Note(string) {
    this.text = string;
    this.id = idCount++;
  }

  Note.prototype.getText = function () {
    return this.text;
  };

  // Note.prototype.id = function() {
  //   this.id += idCount + 1;
  // };

  exports.Note = Note;

})(this);
