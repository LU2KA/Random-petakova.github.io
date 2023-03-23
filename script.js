const data = [
    ["Elementární funkce a jejich vlastnosti", "23", "4", "f1"],
    ["Elementární funkce a jejich vlastnosti", "23", "4", "f2"],
    ["Elementární funkce a jejich vlastnosti", "23", "4", "f3"],
    ["Elementární funkce a jejich vlastnosti", "23", "4", "f4"],
    ["Elementární funkce a jejich vlastnosti", "23", "4", "f5"],
    ["Elementární funkce a jejich vlastnosti", "23", "4", "f6"],
    ["Elementární funkce a jejich vlastnosti", "23", "4", "f10"],
    ["Elementární funkce a jejich vlastnosti", "23", "4", "f11"],
    ["Elementární funkce a jejich vlastnosti", "23", "4", "f12"],
    ["Elementární funkce a jejich vlastnosti", "23", "4", "f13"],
    ["Elementární funkce a jejich vlastnosti", "23", "4", "f14"],
    ["Elementární funkce a jejich vlastnosti", "24", "11", ""],
    ["Elementární funkce a jejich vlastnosti", "25", "23", "h3"],
    ["Elementární funkce a jejich vlastnosti", "23", "23", "h6"],
    ["Elementární funkce a jejich vlastnosti", "23", "23", "h9"],
    ["Elementární funkce a jejich vlastnosti", "23", "23", "h10"],
    ["Elementární funkce a jejich vlastnosti", "23", "23", "h11"],
    ["Elementární funkce a jejich vlastnosti", "23", "23", "h12"],
    ["Elementární funkce a jejich vlastnosti", "27", "30", ""],
    ["Elementární funkce a jejich vlastnosti", "27", "31", ""],
    ["Elementární funkce a jejich vlastnosti", "28", "40", "f4"],
    ["Elementární funkce a jejich vlastnosti", "28", "40", "m2"],
    ["Elementární funkce a jejich vlastnosti", "28", "40", "g2"],
    ["Elementární funkce a jejich vlastnosti", "28", "40", "g3"],
    ["Elementární funkce a jejich vlastnosti", "28", "40", "g4"],
    ["Elementární funkce a jejich vlastnosti", "28", "41", "b"],
    ["Elementární funkce a jejich vlastnosti", "29", "46", ""],
    ["Elementární funkce a jejich vlastnosti", "29", "47", ""],
    ["Elementární funkce a jejich vlastnosti", "29", "48", ""],
    ["Elementární funkce a jejich vlastnosti", "29", "49", ""],
    ["Elementární funkce a jejich vlastnosti", "29", "50", ""],
  ];
  
  function generateRandomRow() {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomRow = data[randomIndex];
    const randomRow_z=["Téma: "+ randomRow[0],"Stránka: " + randomRow[1],"Cvičení: "+ randomRow[2],"Příklad: "+ randomRow[3]];
    const randomRowString = randomRow_z.join(", ");
    document.getElementById("random-row").innerHTML = randomRowString;
  }