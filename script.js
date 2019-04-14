var alphabets = {
  standard: {
    "A": "Alpha",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliet",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whisky",
    "X": "X-ray",
    "Y": "Yankee",
    "Z": "Zulu",
    "0": "Zero",
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine"
  },
  alternate: {
    "A": "Armor",
    "B": "Blunt",
    "C": "Clock",
    "D": "Dentures",
    "E": "Eggplant",
    "F": "Flower",
    "G": "Goggles",
    "H": "Horse",
    "I": "Interval",
    "J": "Jonathan",
    "K": "Kite",
    "L": "Levi",
    "M": "Monster",
    "N": "Nickel",
    "O": "Olive",
    "P": "Pickle",
    "Q": "Quincy",
    "R": "Ring",
    "S": "Sandwich",
    "T": "Top",
    "U": "Underneath",
    "V": "Victory",
    "W": "Watermelon",
    "X": "X-ray",
    "Y": "Yearbook",
    "Z": "Zebra",
    "0": "Zero",
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine"
  },
  random: {
    "A": "Anchovy",
    "B": "Butter",
    "C": "Coverage",
    "D": "Duck",
    "E": "Empathy",
    "F": "Finicky",
    "G": "Gopher",
    "H": "Hunting",
    "I": "Inspector",
    "J": "Jovial",
    "K": "Kids",
    "L": "Lint",
    "M": "Munch",
    "N": "North",
    "O": "Optometrist",
    "P": "Purse",
    "Q": "Quench",
    "R": "Redcort",
    "S": "Sickle",
    "T": "Twinkle",
    "U": "Uncle",
    "V": "Vintage",
    "W": "Warzone",
    "X": "X-ray",
    "Y": "Yard",
    "Z": "Zoo",
    "0": "Zero",
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine"
  }
}

var currentAlphabet = alphabets.standard;




function changeAlphabet(alphabet) {

  currentAlphabet = window.alphabets[alphabet];

  generateRows(document.getElementById('key-input').value.toUpperCase());

  var alphabets = document.getElementsByClassName("alphabet");
  for (var i=0; i<alphabets.length; i++) {
    if (alphabets[i].id === alphabet) {
      alphabets[i].classList.add("selected-alphabet");
    } else {
      alphabets[i].classList.remove("selected-alphabet");
    }
  }

}




function generateRows(string) {

  string = string.toUpperCase();

  var html = '';

  var rowHtml = '<div class="letter-row"><div class="letter-column"><div class="letter-wrapper"><span class="letter">{{letter}}</span></div></div><div class="word-column"><div class="word">{{word}}</div></div></div>';

  for (var i=0; i<string.length; i++) {
    // if current character exists in the wordAlphabet
    if (currentAlphabet[string[i]]) {
      // create a new row and insert the content
      var newRow = rowHtml.replace("{{letter}}",string[i]).replace("{{word}}",currentAlphabet[string[i]]);
      html += newRow;
    }
  }

  // replace the main-content with new HTML
  document.getElementById('main-content').innerHTML = html;

  equalizeRows();

  adjustVerticalLine();

}




function adjustVerticalLine() {

  var lineHeight = document.getElementById('main-content').offsetHeight - 200;

  if (lineHeight < 0) {
    lineHeight = 0;
  }

  document.getElementById("vertical-line").style.height = lineHeight.toString() + "px";

}




function equalizeRows() {
  var longestRow = 0;
  // get the width of the longest row
  var rows = document.getElementsByClassName("letter-row");
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].offsetWidth > longestRow) {
      longestRow = rows[i].offsetWidth;
    }
  }
  // make all row widths equal to the longest row
  for (var i = 0; i < rows.length; i++) {
      rows[i].style.width = longestRow.toString() + "px";
  }
}
