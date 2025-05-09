

// Data probes: title colour
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


  function toggleOverlay(button, imageId, textClass) {
    const image = document.getElementById(imageId);
    const textElements = document.querySelectorAll(`.${textClass}`);
textElements.forEach(el => el.classList.toggle('active'));
  
    // Toggle button appearance
    button.classList.toggle('selected');
  
    // Toggle image visibility
    if (image.style.display === 'none') {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  
    // Toggle text color class
    textElement.classList.toggle('active');
  }
  
  // Initialize default state on page load
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.treatments-button').classList.add('selected');
    document.querySelector('.complexity-button').classList.add('selected');
    document.querySelector('.recurrences-button').classList.add('selected');
    document.querySelector('.urine-button').classList.add('selected');
    document.querySelector('.lower-abdomen-button').classList.add('selected');
    document.querySelector('.fever-button').classList.add('selected');
    document.querySelector('.back-pain-button').classList.add('selected');
    document.querySelector('.discomfort-button').classList.add('selected');
    document.querySelector('.pain-button').classList.add('selected');
    document.querySelector('.infection-button').classList.add('selected');
    document.querySelector('.causes-button').classList.add('selected');
    document.querySelector('.doctor-button').classList.add('selected');
    document.querySelector('.nose-button').classList.add('selected');
    document.querySelector('.throat-button').classList.add('selected');
    document.querySelector('.joint-pain-button').classList.add('selected');
    document.querySelector('.neck-pain-button').classList.add('selected');
    document.querySelector('.shoulder-pain-button').classList.add('selected');
    document.querySelector('.headache-button').classList.add('selected');
    document.querySelector('.bellyache-button').classList.add('selected');
    document.querySelector('.constipation-button').classList.add('selected');
    document.querySelector('.fatigue-button').classList.add('selected');
    document.querySelector('.isolation-button').classList.add('selected');
    document.querySelector('.insomnia-button').classList.add('selected');
    document.querySelector('.normality-button').classList.add('selected');
    document.querySelector('.bloated-stomach-button').classList.add('selected');
  
    document.getElementById('overlay.treatments').style.display = 'block';
    document.getElementById('overlayComplexity').style.display = 'block';
    document.getElementById('overlayRecurrences').style.display = 'block';
    document.getElementById('overlayUrine').style.display = 'block';
    document.getElementById('overlayLowerAbdomen').style.display = 'block';
    document.getElementById('overlayFever').style.display = 'block';
    document.getElementById('overlayBackPain').style.display = 'block';
    document.getElementById('overlayDiscomfort').style.display = 'block';
    document.getElementById('overlayPain').style.display = 'block';
    document.getElementById('overlayInfection').style.display = 'block';
    document.getElementById('overlayCauses').style.display = 'block';
    document.getElementById('overlayDoctor').style.display = 'block';
    document.getElementById('overlayNose').style.display = 'block';
    document.getElementById('overlayThroat').style.display = 'block';
    document.getElementById('overlayjointPain').style.display = 'block';
    document.getElementById('overlayNeckPain').style.display = 'block';
    document.getElementById('overlayShoulderPain').style.display = 'block';
    document.getElementById('overlayHeadache').style.display = 'block';
    document.getElementById('overlayBellyache').style.display = 'block';
    document.getElementById('overlayConstipation').style.display = 'block';
    document.getElementById('overlayFatigue').style.display = 'block';
    document.getElementById('overlayIsolation').style.display = 'block';
    document.getElementById('overlayInsomnia').style.display = 'block';
    document.getElementById('overlayNormality').style.display = 'block';
    document.getElementById('overlayBloatedStomach').style.display = 'block';
  
    document.querySelector('.treatments').classList.remove('active');
    document.querySelector('.complexity').classList.remove('active');
    document.querySelector('.recurrences').classList.remove('active');
    document.querySelector('.urine').classList.remove('active');
    document.querySelector('.lower-abdomen').classList.remove('active');
    document.querySelector('.fever').classList.remove('active');
    document.querySelector('.back-pain').classList.remove('active');
    document.querySelector('.discomfort').classList.remove('active');
    document.querySelector('.pain').classList.remove('active');
    document.querySelector('.infection').classList.remove('active');
    document.querySelector('.causes').classList.remove('active');
    document.querySelector('.doctor').classList.remove('active');
    document.querySelector('.nose').classList.remove('active');
    document.querySelector('.throat').classList.remove('active');
    document.querySelector('.joint-pain').classList.remove('active');
    document.querySelector('.neck-pain').classList.remove('active');
    document.querySelector('.shoulder-pain').classList.remove('active');
    document.querySelector('.headache').classList.remove('active');
    document.querySelector('.bellyache').classList.remove('active');
    document.querySelector('.constipation').classList.remove('active');
    document.querySelector('.fatigue').classList.remove('active');
    document.querySelector('.isolation').classList.remove('active');
    document.querySelector('.insomnia').classList.remove('active');
    document.querySelector('.normality').classList.remove('active');
    document.querySelector('.bloated-stomach').classList.remove('active');

  });