var colors = [
    "#00C6D4", "#00FF99", "#9CF7FF", "#AE00FF", "#FF00E5", "#FF7800", "#0040FF", "#00D0FF",
    "#1F77B4", "#239857", "#55C131", "#5AEEE0", "#67673C", "#6C7196", "#763267", "#7B7B7B",
    "#9A5F28", "#9B84FF", "#ACAC84", "#B6B622", "#C5C500", "#F67375", "#F6DBFF", "#F78DFF",
    "#FF0066", "#FFA6D6", "#FFCC00", "#FFCE9C"
];

var textElement = document.getElementById('textlocation');
var text = textElement.innerText;
var html = text.split('').map(function(letter) {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  return '<font color="' + randomColor + '">' + letter + '</font>';
}).join('');

textElement.innerHTML = html;

// Menu words blurred when scrolling
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 10) {
    nav.classList.add('blur-text');
  } else {
    nav.classList.remove('blur-text');
  }
});

// Button background random color
const buttonColors = [ "#00C6D4", "#00FF99", "#9CF7FF", "#AE00FF", "#FF00E5", "#FF7800", "#0040FF", "#00D0FF",
    "#1F77B4", "#239857", "#55C131", "#5AEEE0", "#67673C", "#6C7196", "#763267", "#7B7B7B",
    "#9A5F28", "#9B84FF", "#ACAC84", "#B6B622", "#C5C500", "#F67375", "#F6DBFF", "#F78DFF",
    "#FF0066", "#FFA6D6", "#FFCC00", "#FFCE9C"];

function getRandomColor() {
  return buttonColors[Math.floor(Math.random() * buttonColors.length)];
}

// Get all buttons with the 'read-more-button' class
const buttons = document.querySelectorAll('.read-more-button');

buttons.forEach(function(button) {
  button.addEventListener('mouseenter', function() {
    button.style.backgroundColor = getRandomColor();
  });

  button.addEventListener('mouseleave', function() {
    button.style.backgroundColor = ''; // Resets the color when not hovering
  });
});

// Menu words blurred when scrolling past 10rem
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 4 * 16) { // 10rem = 10 * 16px (assuming 1rem = 16px)
      nav.classList.add('blur-text');
    } else {
      nav.classList.remove('blur-text');
    }
  });

  function toggleSelected(btn) {
    btn.classList.toggle('selected');
  }



  function toggleOverlay(button) {
    const image = document.getElementById('overlayImg'); // Get the image
    const remediesText = document.querySelector('.remedies'); // Get the remedies text
  
    // Toggle the 'selected' class on the button to change its appearance
    button.classList.toggle('selected');
  
    // Toggle visibility of the image (dp1-alternative.png)
    if (image.style.display === 'none') {
      image.style.display = 'block'; // Show the image if it's hidden
    } else {
      image.style.display = 'none'; // Hide the image if it's visible
    }
  
    // Toggle the 'active' class on the remedies text to turn it blue
    remediesText.classList.toggle('active');
  }
  
  // Make sure the button is selected and the image is visible by default when the page loads
  document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.alternative-remedies');
    const image = document.getElementById('overlayImg');
    const remediesText = document.querySelector('.remedies');
  
    // Ensure the button is selected by default (filled in blue)
    button.classList.add('selected');
  
    // Ensure the image is visible by default
    image.style.display = 'block';
  
    // Ensure the remedies text is black by default
    remediesText.classList.remove('active');
  });