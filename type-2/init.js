var bgcolors = ["#CC543A", "#B481BB", "#3A8FB7", "#1560BD", "#6D2E5B", "#8B81C3", "#51A8DD", "#006284", "#B5495B", "#EB7A77", "#C1693C", "#9ACD32", "#81C7D4", "#86C166", "#F05E1C", "#BFDAE5", "#33CC00", "#0C0C0C", "#FEDFE1", "#EEA9A9", "#E87A90", "#096148", "#5DAC81", "#EEED09", "#FFB11B", "#899BA9"]

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeydown = function (e) {
  console.log("key down", event);
  document.querySelectorAll(".colors").forEach(a => {
    a.style.display = "none";
  })
  document.body.style.backgroundColor = "#000000";
  cursor.style.display = "block";
  if (e.key == " ") { return };
  cursor.style.display = "none";
  document.body.style.backgroundColor = bgcolors[e.keyCode - 65];
  if (e.key == "Enter") { 
    var randomIndex = Math.floor(Math.random() * bgcolors.length);
    var randomBGColor = bgcolors[randomIndex];
    var randomLetter = letter[randomIndex];
    document.getElementById(randomLetter).style.display = "block";
    document.body.style.backgroundColor = randomBGColor;
  }
  else {
    document.getElementById(e.key).style.display = "block";
  }
}