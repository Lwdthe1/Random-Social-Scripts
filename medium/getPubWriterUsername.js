var uniqueEditorIds = ""
var editors = document.getElementsByClassName("link link--primary link--accent u-accentColor--textNormal u-accentColor--hoverTextNormal");
for(var i = 0; i < editors.length; i++) {
  if(editors[i].href.indexOf("/@") < 0) {continue;}
  var current = editors[i].href.trim().split("/@")[1].split("?")[0]
  if(uniqueEditorIds.indexOf(current) > -1) continue
  uniqueEditorIds += "@" +current + " "
}
console.log(uniqueEditorIds)
