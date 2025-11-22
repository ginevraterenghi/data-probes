
function initUI() {
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

  // Determine base path for shared resources
  const isSubdirectory = window.location.pathname.includes('/data-probes/');
  const basePath = isSubdirectory ? '../' : '';

  function loadImpressum() {
    fetch(basePath + 'footer.html')
      .then(response => response.text())
      .then(data => {
        // Inject into footer if present
        const footer = document.querySelector('footer');
        if (footer) footer.innerHTML = data;

        // Inject into header impressum(s) if present
        const impressums = document.querySelectorAll('.impressum');
        impressums.forEach(el => {
           // Check if it is the footer itself to avoid double injection (though innerHTML handles it)
           // but specifically target the header one or any other.
           // Since footer.html contains the *content* of the impressum div (wait, no, looking at footer.html it HAS the wrapper div)
           // Previous footer.html content: <div class="impressum">...</div>
           // If I inject that into <footer>, I get <footer><div class="impressum">...</div></footer>. Correct.
           // If I inject that into <div class="impressum"> (in header), I get <div class="impressum"><div class="impressum">...</div></div>.
           // This might double the padding/margin if CSS targets .impressum.
           // Let's check if we can extract innerHTML.
           
            const temp = document.createElement('div');
            temp.innerHTML = data;
            const inner = temp.querySelector('.impressum') ? temp.querySelector('.impressum').innerHTML : data;
            
            // Only update if empty to avoid overwriting if something else is there (or if we want to enforce it)
            // But for header, it is empty in menu.html. For footer, it is empty in index.html (removed by script previously?)
            // Actually, let's just set it.
            
            // If the element IS the impressum div (has class impressum), we should set its innerHTML to the innerHTML of data.
            if (el.classList.contains('impressum')) {
                el.innerHTML = inner;
            }
        });
      })
      .catch(error => console.error('Error loading footer:', error));
  }

  function loadMenu() {
      fetch(basePath + 'menu.html')
        .then(response => response.text())
        .then(data => {
            if (isSubdirectory) {
                data = data.replace(/href="index.html"/g, 'href="../index.html"');
            }
            const header = document.getElementById('navigation-header');
            if (header) {
                header.outerHTML = data;
                initUI();
                loadImpressum();
            } else {
                // Inject if missing (e.g. stripped from HTML)
                const body = document.querySelector('body');
                if (body) {
                    const temp = document.createElement('div');
                    temp.innerHTML = data;
                    const newHeader = temp.firstElementChild;
                    
                    // If we are stripping the header from the HTML, we need to insert it at the right place.
                    // In dp-*.html, the header was inside .page-wrapper.
                    // In index.html, the header was a direct child of body (before main).
                    
                    const wrapper = document.querySelector('.page-wrapper');
                    if (wrapper) {
                        wrapper.insertBefore(newHeader, wrapper.firstChild);
                    } else {
                        // For index.html (or if wrapper not found)
                        // Insert before main if main exists, else prepend to body
                        const main = document.querySelector('main');
                        if (main) {
                            body.insertBefore(newHeader, main);
                        } else {
                            body.insertBefore(newHeader, body.firstChild);
                        }
                    }
                    initUI();
                    loadImpressum();
                }
            }
        })
        .catch(err => console.error('Error loading menu:', err));
  }
  
  function loadHead() {
      fetch(basePath + 'head.html')
      .then(response => response.text())
      .then(data => {
          if (isSubdirectory) {
              data = data.replace(/href="css\//g, 'href="../css/');
          }
          document.head.innerHTML += data;
      })
      .catch(err => console.error('Error loading head:', err));
  }

  // Initialize default state on page load
  loadMenu();
  loadHead();

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
resizeImageContainer();
window.addEventListener('resize', resizeImageContainer);

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
