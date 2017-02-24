var uniqueEditorIds = ""
var editors = $(".pub-contributor-link.link.u-colorLightGrey.u-fontWeight400.u-fontSize12px");
for(var i = 0; i < editors.length; i++) {
  var current = editors[i].innerHTML.trim()
  if(uniqueEditorIds.indexOf(current) > -1) continue
  uniqueEditorIds += "@" +current + " "
}
console.log(uniqueEditorIds)
