var bgcolors = ["#CC543A", "#B481BB", "#3A8FB7", "#1560BD", "#6D2E5B", "#8B81C3", "#51A8DD", "#006284", "#B5495B", "#EB7A77", "#C1693C", "#9ACD32", "#81C7D4", "#86C166", "#F05E1C", "#BFDAE5", "#33CC00", "#0C0C0C", "#FEDFE1", "#EEA9A9", "#E87A90", "#096148", "#5DAC81", "#EEED09", "#FFB11B", "#899BA9"]

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeydown = function (e) {
  console.log("key down", event);
  cursor.style.display = "none";
  if (e.keyCode == 65) { 
    document.getElementById("a").style.display = "block";
    document.body.style.backgroundColor = "#cc543a";
  };
  if (e.keyCode == 66) { 
    document.getElementById("b").style.display = "block";
    document.body.style.backgroundColor = "#b481bb";
  };
  if (e.keyCode == 67) { 
    document.getElementById("c").style.display = "block";
    document.body.style.backgroundColor = "#3a8fb7";
  };
  if (e.keyCode == 68) { 
    document.getElementById("d").style.display = "block";
    document.body.style.backgroundColor = "#1560bd";
  };
  if (e.keyCode == 69) { 
    document.getElementById("e").style.display = "block";
    document.body.style.backgroundColor = "#6D2E5B";
  };
  if (e.keyCode == 70) { 
    document.getElementById("f").style.display = "block";
    document.body.style.backgroundColor = "#8B81C3";
  };
  if (e.keyCode == 71) { 
    document.getElementById("g").style.display = "block";
    document.body.style.backgroundColor = "#51A8DD";
  };
  if (e.keyCode == 72) { 
    document.getElementById("h").style.display = "block";
    document.body.style.backgroundColor = "#006284";
  };
  if (e.keyCode == 73) { 
    document.getElementById("i").style.display = "block";
    document.body.style.backgroundColor = "#B5495B";
  };
  if (e.keyCode == 74) { 
    document.getElementById("j").style.display = "block";
    document.body.style.backgroundColor = "#EB7A77";
  };
  if (e.keyCode == 75) { 
    document.getElementById("k").style.display = "block";
    document.body.style.backgroundColor = "#C1693C";
  };
  if (e.keyCode == 76) { 
    document.getElementById("l").style.display = "block";
    document.body.style.backgroundColor = "#9ACD32";
  };
  if (e.keyCode == 77) { 
    document.getElementById("m").style.display = "block";
    document.body.style.backgroundColor = "#81C7D4";
  };
  if (e.keyCode == 78) { 
    document.getElementById("n").style.display = "block";
    document.body.style.backgroundColor = "#86C166";
  };
  if (e.keyCode == 79) { 
    document.getElementById("o").style.display = "block";
    document.body.style.backgroundColor = "#F05E1C";
  };
  if (e.keyCode == 80) { 
    document.getElementById("p").style.display = "block";
    document.body.style.backgroundColor = "#BFDAE5";
  };
  if (e.keyCode == 81) { 
    document.getElementById("q").style.display = "block";
    document.body.style.backgroundColor = "#33CC00";
  };
  if (e.keyCode == 82) { 
    document.getElementById("r").style.display = "block";
    document.body.style.backgroundColor = "#0C0C0C";
  };
  if (e.keyCode == 83) { 
    document.getElementById("s").style.display = "block";
    document.body.style.backgroundColor = "#FEDFE1";
  };
  if (e.keyCode == 84) { 
    document.getElementById("t").style.display = "block";
    document.body.style.backgroundColor = "#EEA9A9";
  };
  if (e.keyCode == 85) { 
    document.getElementById("u").style.display = "block";
    document.body.style.backgroundColor = "#E87A90";
  };
  if (e.keyCode == 86) { 
    document.getElementById("v").style.display = "block";
    document.body.style.backgroundColor = "#096148";
  };
  if (e.keyCode == 87) { 
    document.getElementById("w").style.display = "block";
    document.body.style.backgroundColor = "#5DAC81";
  };
  if (e.keyCode == 88) { 
    document.getElementById("x").style.display = "block";
    document.body.style.backgroundColor = "#EEED09";
  };
  if (e.keyCode == 89) { 
    document.getElementById("y").style.display = "block";
    document.body.style.backgroundColor = "#FFB11B";
  };
  if (e.keyCode == 90) { 
    document.getElementById("z").style.display = "block";
    document.body.style.backgroundColor = "#899BA9";
  };
  if (e.keyCode == 13) { 
    var randomIndex = Math.floor(Math.random() * bgcolors.length); 
    var randomBGColor = bgcolors[randomIndex];
    var randomLetter = letter[randomIndex];
    document.getElementById(randomLetter).style.display = "block";
    document.body.style.backgroundColor = randomBGColor;
  };
};

document.onkeyup = function(e) {
  console.log("key up", event);
  document.getElementById("cursor").style.display = "block";
  document.body.style.backgroundColor = "#000000";
  document.querySelectorAll(".colors").forEach(a => {
    a.style.display = "none";
  })
  // if (e.keyCode == 65) { 
  //   document.getElementById("a").style.display = "none";
  // };
  // if (e.keyCode == 66) { 
  //   document.getElementById("b").style.display = "none";
  // };
  // if (e.keyCode == 67) { 
  //   document.getElementById("c").style.display = "none";
  // };
  // if (e.keyCode == 68) { 
  //   document.getElementById("d").style.display = "none";
  // };
  // if (e.keyCode == 69) { 
  //   document.getElementById("e").style.display = "none";
  // };
  // if (e.keyCode == 70) { 
  //   document.getElementById("f").style.display = "none";
  // };
  // if (e.keyCode == 71) { 
  //   document.getElementById("g").style.display = "none";
  // };
  // if (e.keyCode == 72) { 
  //   document.getElementById("h").style.display = "none";
  // };
  // if (e.keyCode == 73) { 
  //   document.getElementById("i").style.display = "none";
  // };
  // if (e.keyCode == 74) { 
  //   document.getElementById("j").style.display = "none";
  // };
  // if (e.keyCode == 75) { 
  //   document.getElementById("k").style.display = "none";
  // };
  // if (e.keyCode == 76) { 
  //   document.getElementById("l").style.display = "none";
  // };
  // if (e.keyCode == 77) { 
  //   document.getElementById("m").style.display = "none";
  // };
  // if (e.keyCode == 78) { 
  //   document.getElementById("n").style.display = "none";
  // };
  // if (e.keyCode == 79) { 
  //   document.getElementById("o").style.display = "none";
  // };
  // if (e.keyCode == 80) { 
  //   document.getElementById("p").style.display = "none";
  // };
  // if (e.keyCode == 81) { 
  //   document.getElementById("q").style.display = "none";
  // };
  // if (e.keyCode == 82) { 
  //   document.getElementById("r").style.display = "none";
  // };
  // if (e.keyCode == 83) { 
  //   document.getElementById("s").style.display = "none";
  // };
  // if (e.keyCode == 84) { 
  //   document.getElementById("t").style.display = "none";
  // };
  // if (e.keyCode == 85) { 
  //   document.getElementById("u").style.display = "none";
  // };
  // if (e.keyCode == 86) { 
  //   document.getElementById("v").style.display = "none";
  // };
  // if (e.keyCode == 87) { 
  //   document.getElementById("w").style.display = "none";
  // };
  // if (e.keyCode == 88) { 
  //   document.getElementById("x").style.display = "none";
  // };
  // if (e.keyCode == 89) { 
  //   document.getElementById("y").style.display = "none";
  // };
  // if (e.keyCode == 90) { 
  //   document.getElementById("z").style.display = "none";
  // };
};