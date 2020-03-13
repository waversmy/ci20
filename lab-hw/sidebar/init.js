var pages = ["home", "writings", "drawings", "sketchbook", "prints", "travel", "organizations", "contact", "links"];

var div01 = document.createElement('div');
div01.className = 'sidebar';
// document.body.appendChild(div01);

var div02 = document.createElement('div');
div01.className = 'content';
// document.getElementsByTagName('body').appendChild(div02);

for ( var i =0; i < pages.length; i = i + 1) {
  var a = document.createElement('a');
  var linkText = pages[i];
  // a.appendChild(linkText);
  // a.title = "";
  // a.href = "";
  document.body.appendChild(a);
}