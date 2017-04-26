var uniqueEditorIds = ""
var editors = $(".writer-username-holder");
for(var i = 0; i < editors.length; i++) {
  var current = editors[i].innerHTML.trim()
  if(uniqueEditorIds.indexOf(current) > -1) continue
  uniqueEditorIds += "@" +current + " "
}
console.log(uniqueEditorIds)
