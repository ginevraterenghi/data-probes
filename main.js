// Data probes: title colour
var colors = [
    "#00C6D4", "#00FF99", "#9CF7FF", "#AE00FF", "#FF00E5", "#FF7800", "#0040FF", "#00D0FF",
    "#1F77B4", "#239857", "#55C131", "#5AEEE0", "#67673C", "#6C7196", "#763267", "#7B7B7B",
    "#9A5F28", "#9B84FF", "#ACAC84", "#B6B622", "#C5C500", "#F67375", "#F6DBFF", "#F78DFF",
    "#FF0066", "#FFA6D6", "#FFCC00", "#FFCE9C"
];

var textElement = document.getElementById('textlocation-desktop');
if (textElement) {
    var text = textElement.innerText;
    var html = text.split('').map(function(letter) {
      var randomColor = colors[Math.floor(Math.random() * colors.length)];
      return '<font color="' + randomColor + '">' + letter + '</font>';
    }).join('');
    
    textElement.innerHTML = html;
}

var textElementMobile = document.getElementById('textlocation-mobile');
if (textElementMobile) {
    var textMobile = textElementMobile.innerText;
    var htmlMobile = textMobile.split('').map(function(letter) {
      var randomColor = colors[Math.floor(Math.random() * colors.length)];
      return '<font color="' + randomColor + '">' + letter + '</font>';
    }).join('');
    
    textElementMobile.innerHTML = htmlMobile;
}

// Menu words blurred when scrolling
window.addEventListener('scroll', function() {
  const nav = document.getElementById('navigation-header');
  if (nav) {
      if (window.scrollY > 10) {
        nav.classList.add('blur-text');
      } else {
        nav.classList.remove('blur-text');
      }
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
    if (image) {
        if (image.style.display === 'none') {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
    }
  
    // Toggle text color class
    if (typeof textElement !== 'undefined' && textElement) {
        textElement.classList.toggle('active');
    }
  }
  
  // Initialize default state on page load
  document.addEventListener("DOMContentLoaded", function () {
    const selectors = [
        '.treatments-button', '.complexity-button', '.recurrences-button', '.urine-button',
        '.lower-abdomen-button', '.fever-button', '.back-pain-button', '.discomfort-button',
        '.pain-button', '.infection-button', '.causes-button', '.doctor-button',
        '.nose-button', '.throat-button', '.joint-pain-button', '.neck-pain-button',
        '.shoulder-pain-button', '.headache-button', '.bellyache-button', '.constipation-button',
        '.fatigue-button', '.isolation-button', '.insomnia-button', '.normality-button',
        '.bloated-stomach-button'
    ];

    selectors.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.classList.add('selected');
    });

    const overlays = [
        'overlay.treatments', 'overlayComplexity', 'overlayRecurrences', 'overlayUrine',
        'overlayLowerAbdomen', 'overlayFever', 'overlayBackPain', 'overlayDiscomfort',
        'overlayPain', 'overlayInfection', 'overlayCauses', 'overlayDoctor',
        'overlayNose', 'overlayThroat', 'overlayjointPain', 'overlayNeckPain',
        'overlayShoulderPain', 'overlayHeadache', 'overlayBellyache', 'overlayConstipation',
        'overlayFatigue', 'overlayIsolation', 'overlayInsomnia', 'overlayNormality',
        'overlayBloatedStomach'
    ];

    overlays.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'block';
    });

    const classes = [
        '.treatments', '.complexity', '.recurrences', '.urine', '.lower-abdomen',
        '.fever', '.back-pain', '.discomfort', '.pain', '.infection', '.causes',
        '.doctor', '.nose', '.throat', '.joint-pain', '.neck-pain', '.shoulder-pain',
        '.headache', '.bellyache', '.constipation', '.fatigue', '.isolation',
        '.insomnia', '.normality', '.bloated-stomach'
    ];

    classes.forEach(cls => {
        const el = document.querySelector(cls);
        if (el) el.classList.remove('active');
    });

  });

function resizeImageContainer() {
  const baseImage = document.querySelector('.base-image');
  const itemContainerWrapper = document.querySelector('.image-container');

  if (baseImage && itemContainerWrapper) {
    if (baseImage.complete && baseImage.naturalWidth > 0) { // Check if image is loaded and has dimensions
      const aspectRatio = baseImage.naturalHeight / baseImage.naturalWidth;
      const currentImageWidth = baseImage.offsetWidth;
      itemContainerWrapper.style.height = (currentImageWidth * aspectRatio) + 'px';
    } else {
      // If the image isn't loaded yet, wait for it
      baseImage.addEventListener('load', resizeImageContainer);
    }
  }
}

// Call the function on initial load and on window resize
window.addEventListener('DOMContentLoaded', resizeImageContainer);
window.addEventListener('resize', resizeImageContainer);

// Initial call in case the image is already cached and loaded
// or if the load event has already fired.
document.addEventListener('DOMContentLoaded', resizeImageContainer);

// Fake hamburger menu on title - commenting out as we are replacing the menu
/*
var title = document.getElementById('title');
var menu = document.getElementById('menu-elements-toggle');
if (title && menu) {
    title.addEventListener('click', function(){
      menu.classList.toggle('menu-visible');
      console.log(menu.classList);
    })
}
*/

function toggleNavigationItem(itemId) {
    const item = document.getElementById(itemId);
    if (item) {
        item.classList.toggle('active');
        
        // Find the expand button within the specific navigation item (home) that triggered this
        // Since the button calls this with 'navigation-header', we need to look for the button in the home item
        const homeItem = document.querySelector('#home');
        if (homeItem) {
             const expandButton = homeItem.querySelector('.expand-button');
             if (expandButton) {
                  expandButton.textContent = item.classList.contains('active') ? ' - ' : ' + ';
             }
        }

        let overflow = document.querySelector('body').style.overflow == 'hidden' ? 'visible' : 'hidden';
        document.querySelector('body').style.overflow = overflow;
    }
}
