// ==========================================
// DATA & CONSTANTS
// ==========================================

const COLORS = [
  "#00C6D4", "#00FF99", "#9CF7FF", "#AE00FF", "#FF00E5", "#FF7800", "#0040FF", "#00D0FF",
  "#1F77B4", "#239857", "#55C131", "#5AEEE0", "#67673C", "#6C7196", "#763267", "#7B7B7B",
  "#9A5F28", "#9B84FF", "#ACAC84", "#B6B622", "#C5C500", "#F67375", "#F6DBFF", "#F78DFF",
  "#FF0066", "#FFA6D6", "#FFCC00", "#FFCE9C"
];

const BUTTON_COLORS = [
  "#00C6D4", "#00FF99", "#9CF7FF", "#AE00FF", "#FF00E5", "#FF7800", "#0040FF", "#00D0FF",
  "#1F77B4", "#239857", "#55C131", "#5AEEE0", "#67673C", "#6C7196", "#763267", "#7B7B7B",
  "#9A5F28", "#9B84FF", "#ACAC84", "#B6B622", "#C5C500", "#F67375", "#F6DBFF", "#F78DFF",
  "#FF0066", "#FFA6D6", "#FFCC00", "#FFCE9C"
];

const INITIAL_SELECTORS = [
  '.treatments-button', '.complexity-button', '.recurrences-button', '.urine-button',
  '.lower-abdomen-button', '.fever-button', '.back-pain-button', '.discomfort-button',
  '.pain-button', '.infection-button', '.causes-button', '.doctor-button',
  '.nose-button', '.throat-button', '.joint-pain-button', '.neck-pain-button',
  '.shoulder-pain-button', '.headache-button', '.bellyache-button', '.constipation-button',
  '.fatigue-button', '.isolation-button', '.insomnia-button', '.normality-button',
  '.bloated-stomach-button'
];

const INITIAL_OVERLAYS = [
  'overlay.treatments', 'overlayComplexity', 'overlayRecurrences', 'overlayUrine',
  'overlayLowerAbdomen', 'overlayFever', 'overlayBackPain', 'overlayDiscomfort',
  'overlayPain', 'overlayInfection', 'overlayCauses', 'overlayDoctor',
  'overlayNose', 'overlayThroat', 'overlayjointPain', 'overlayNeckPain',
  'overlayShoulderPain', 'overlayHeadache', 'overlayBellyache', 'overlayConstipation',
  'overlayFatigue', 'overlayIsolation', 'overlayInsomnia', 'overlayNormality',
  'overlayBloatedStomach'
];

const INITIAL_CLASSES = [
  '.treatments', '.complexity', '.recurrences', '.urine', '.lower-abdomen',
  '.fever', '.back-pain', '.discomfort', '.pain', '.infection', '.causes',
  '.doctor', '.nose', '.throat', '.joint-pain', '.neck-pain', '.shoulder-pain',
  '.headache', '.bellyache', '.constipation', '.fatigue', '.isolation',
  '.insomnia', '.normality', '.bloated-stomach'
];

const isSubdirectory = window.location.pathname.includes('/data-probes/');
const basePath = isSubdirectory ? '../' : '';


// ==========================================
// FUNCTIONS
// ==========================================

function initUI() {
  // Data probes: title colour
  var textElement = document.getElementById('textlocation-desktop');
  if (textElement) {
    var text = textElement.innerText;
    var html = text.split('').map(function(letter) {
      var randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      return '<font color="' + randomColor + '">' + letter + '</font>';
    }).join('');
    textElement.innerHTML = html;
  }
  var textElementMobile = document.getElementById('textlocation-mobile');
  if (textElementMobile) {
    var textMobile = textElementMobile.innerText;
    var htmlMobile = textMobile.split('').map(function(letter) {
      var randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      return '<font color="' + randomColor + '">' + letter + '</font>';
    }).join('');
    textElementMobile.innerHTML = htmlMobile;
  }
}

function getRandomButtonColor() {
  return BUTTON_COLORS[Math.floor(Math.random() * BUTTON_COLORS.length)];
}

function toggleSelected(btn) {
  btn.classList.toggle('selected');
}

function toggleOverlay(button, imageId, textClass) {
  const image = document.getElementById(imageId);
  const textElements = document.querySelectorAll(`.${textClass}`);

  textElements.forEach(el => el.classList.toggle('active'));

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

function loadFooter() {
  fetch(basePath + 'footer.html')
    .then(response => response.text())
    .then(data => {
      const footer = document.querySelector('footer');
      if (footer) footer.innerHTML = data;

      const impressums = document.querySelectorAll('.impressum');
      impressums.forEach(el => {
        const temp = document.createElement('div');
        temp.innerHTML = data;
        const inner = temp.querySelector('.impressum') ? temp.querySelector('.impressum').innerHTML : data;
        
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
        loadFooter();
      } else {
        const body = document.querySelector('body');
        if (body) {
          const temp = document.createElement('div');
          temp.innerHTML = data;
          const children = Array.from(temp.children);
          
          const wrapper = document.querySelector('.page-wrapper');
          const targetParent = wrapper || body;
          const referenceNode = wrapper ? wrapper.firstChild : body.firstChild;

          children.forEach(child => {
            targetParent.insertBefore(child, referenceNode);
          });
          initUI();
          loadFooter();
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
        data = data.replace(/href="fav.png"/g, 'href="../fav.png"');
      }
      document.head.innerHTML += data;
    })
    .catch(err => console.error('Error loading head:', err));
}

function resizeImageContainer() {
  const baseImage = document.querySelector('.base-image');
  const itemContainerWrapper = document.querySelector('.image-container');

  if (baseImage && itemContainerWrapper) {
    if (baseImage.complete && baseImage.naturalWidth > 0) {
      const aspectRatio = baseImage.naturalHeight / baseImage.naturalWidth;
      const currentImageWidth = baseImage.offsetWidth;
      itemContainerWrapper.style.height = (currentImageWidth * aspectRatio) + 'px';
    } else {
      baseImage.addEventListener('load', resizeImageContainer);
    }
  }
}

function toggleNavigationItem(itemId) {
  const item = document.getElementById(itemId);
  if (item) {
    item.classList.toggle('active');
    
    const homeItem = document.querySelector('#home');
    if (homeItem) {
      const expandButton = homeItem.querySelector('.expand-button');
      if (expandButton) {
        expandButton.textContent = item.classList.contains('active') ? ' - ' : ' + ';
      }
    }

    let overflow = document.querySelector('body').style.overflow == 'hidden' ? 'visible' : 'hidden';
    document.querySelector('body').style.overflow = overflow;

    const nav = document.getElementById('navigation-header');
    if (nav) {
      if (window.scrollY > 10) {
        nav.classList.add('blur-text');
      } else {
        nav.classList.remove('blur-text');
      }
    }
  }
}


// ==========================================
// MAIN LOGIC
// ==========================================

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

const buttons = document.querySelectorAll('.read-more-button');
buttons.forEach(function(button) {
  button.addEventListener('mouseenter', function() {
    button.style.backgroundColor = getRandomButtonColor();
  });

  button.addEventListener('mouseleave', function() {
    button.style.backgroundColor = '';
  });
});

loadMenu();
loadHead();

INITIAL_SELECTORS.forEach(selector => {
  const el = document.querySelector(selector);
  if (el) el.classList.add('selected');
});

INITIAL_OVERLAYS.forEach(id => {
  const el = document.getElementById(id);
  if (el) el.style.display = 'block';
});

INITIAL_CLASSES.forEach(cls => {
  const el = document.querySelector(cls);
  if (el) el.classList.remove('active');
});

resizeImageContainer();
window.addEventListener('resize', resizeImageContainer);
