function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

const ele = document.getElementById("story");
const fonts = ['Arial', 'Helventica','Syncopate','Courier New', 'Georgia','Syne','Times New Roman', 'Verdana','Roboto Serif'];
let currentFontIndex = 0;

function changeFont() {
    // Set the font of the span element
    ele.style.fontFamily = fonts[currentFontIndex];
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
}

// Change the font every 2 seconds (2000 milliseconds)
setInterval(changeFont, 1000);
