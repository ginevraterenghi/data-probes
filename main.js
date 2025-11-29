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

const isSubdirectory = window.location.pathname.includes('/pages/');
const basePath = isSubdirectory ? '../' : '';

// Treemap JSON path (root: table-of-contents.json)
const TREEMAP_DATA_URL = basePath + 'table-of-contents.json';

// Chapter JSONs (chapter-1.json … chapter-8.json)
const CHAPTER_COUNT = 8;
const CHAPTER_JSON_URLS = Array.from({ length: CHAPTER_COUNT }, (_, i) =>
  basePath + `chapter-${i + 1}.json`
);

// Will store treemap JSON once loaded so we can re-render on resize
let treemapData = null;


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

  // Toggle text color class (note: textElement here is not defined; kept as in original)
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
        const inner = temp.querySelector('.impressum')
          ? temp.querySelector('.impressum').innerHTML
          : data;

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
        data = data.replace(/href="index\.html"/g, 'href="../index.html"');
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
        data = data.replace(/href="fav\.png"/g, 'href="../fav.png"');
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

    let overflow = document.querySelector('body').style.overflow === 'hidden' ? 'visible' : 'hidden';
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
// TREEMAP LOGIC
// ==========================================

/**
 * Render the treemap using the globally stored treemapData.
 * Called after data is loaded and on window resize.
 */
function renderTreemap() {
  // If no data, or no treemap container, or D3 missing, do nothing
  if (!treemapData || typeof d3 === 'undefined') return;

  const treemapElement = document.getElementById('treemap');
  if (!treemapElement) return;

  const containerSelection = d3.select('#treemap');

  // Clear any existing nodes/frames before re-rendering
  containerSelection.selectAll('*').remove();

  const containerNode = containerSelection.node();
  const width = containerNode.clientWidth;
  const height = containerNode.clientHeight;

  if (width === 0 || height === 0) return;

  const root = d3.hierarchy(treemapData)
    .sum(d => d.value || 0)
    .sort((a, b) => b.value - a.value);

  const treemapLayout = d3.treemap()
    .size([width, height])
    .paddingInner(4)
    .paddingOuter(6)
    .round(true);

  treemapLayout(root);

  const chapters = root.children || [];

  // Chapter frame colors – align these with your Illustrator design
  const chapterColors = [
    "#00C6D4", // Chapter 1
    "#AE00FF", // Chapter 2
    "#00FF99", // Chapter 3
    "#000000", // Chapter 4
    "#0040FF", // Chapter 5
    "#67673C", // Chapter 6
    "#9B84FF", // Chapter 7
    "#FF7800"  // Chapter 8
  ];

  const tooltipSelection = d3.select('#treemap-tooltip');

  // Chapter frames (big coloured rectangles, pointer-events: none in CSS)
  const chapterFrames = containerSelection.selectAll('div.chapter-frame')
    .data(chapters)
    .enter()
    .append('div')
    .attr('class', 'chapter-frame')
    .style('left', d => d.x0 + 'px')
    .style('top', d => d.y0 + 'px')
    .style('width', d => (d.x1 - d.x0) + 'px')
    .style('height', d => (d.y1 - d.y0) + 'px')
    .style('border-color', (d, i) => chapterColors[i % chapterColors.length]);

  chapterFrames.append('div')
    .attr('class', 'chapter-label')
    .text(d => d.data.name);

  // Leaf nodes (sections/subsections)
  const leaves = root.leaves();

  const nodes = containerSelection.selectAll('div.node')
    .data(leaves)
    .enter()
    .append('div')
    .attr('class', 'node')
    .style('left', d => d.x0 + 'px')
    .style('top', d => d.y0 + 'px')
    .style('width', d => (d.x1 - d.x0) + 'px')
    .style('height', d => (d.y1 - d.y0) + 'px')
    .on('click', (event, d) => {
      const id = d.data.sectionId;
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    })
    .on('mouseenter', function(event, d) {
      if (!tooltipSelection.empty()) {
        const path = d.ancestors().reverse().map(n => n.data.name).join(' → ');
        tooltipSelection
          .style('opacity', 1)
          .html(path);
      }
    })
    .on('mousemove', function(event) {
      if (!tooltipSelection.empty()) {
        tooltipSelection
          .style('left', (event.clientX + 8) + 'px')
          .style('top', (event.clientY + 8) + 'px');
      }
    })
    .on('mouseleave', function() {
      if (!tooltipSelection.empty()) {
        tooltipSelection.style('opacity', 0);
      }
    });

  nodes.append('div')
    .attr('class', 'node-label')
    .text(d => d.data.name);
}

/**
 * Initialize the treemap: load JSON and render once.
 */
function initTreemap() {
  const treemapElement = document.getElementById('treemap');
  if (!treemapElement) return;

  if (typeof d3 === 'undefined') {
    console.warn('D3 is not loaded; treemap will not be rendered.');
    return;
  }

  fetch(TREEMAP_DATA_URL)
    .then(res => res.json())
    .then(data => {
      treemapData = data;
      renderTreemap();
    })
    .catch(err => console.error('Error loading treemap data:', err));
}


// ==========================================
// THESIS CONTENT LOGIC
// ==========================================

function initThesisContent() {
  const thesisContent = document.getElementById('thesis-content');
  if (!thesisContent) return;

  const bodies = document.querySelectorAll('.chapter-body');
  if (!bodies.length) return;

  // Load each chapter JSON and render into the matching .chapter-body
  CHAPTER_JSON_URLS.forEach((url, index) => {
    const chapterNumber = index + 1;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        renderChapterFromJson(chapterNumber, data);
      })
      .catch(err => console.error(`Error loading chapter ${chapterNumber} data:`, err));
  });
}

function renderChapterFromJson(chapterNumber, data) {
  const container = document.querySelector(`.chapter-body[data-chapter="${chapterNumber}"]`);
  if (!container) return;

  container.innerHTML = '';

  // Expect structure: { name: "Thesis", children: [ { name: "X. Chapter title", children: [...] } ] }
  if (!data || !Array.isArray(data.children) || !data.children.length) return;

  const chapterNode = data.children[0];

  if (!chapterNode.children || !chapterNode.children.length) return;

  chapterNode.children.forEach(child => {
    renderNodeIntoChapter(child, container, 1);
  });
}

function renderNodeIntoChapter(node, container, depth) {
  if (!node || !container) return;

  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const hasContent = typeof node.content === 'string' && node.content.trim().length > 0;

  // Decide heading level based on depth (1 => h3, 2 => h4, >=3 => h5)
  let headingTag = 'h3';
  if (depth === 2) headingTag = 'h4';
  else if (depth >= 3) headingTag = 'h5';

  // Create a wrapper for each node to keep things structured
  const sectionWrapper = document.createElement('section');
  sectionWrapper.className = 'thesis-section depth-' + depth;

  // Heading for this node (if it has a name)
  if (node.name) {
    const heading = document.createElement(headingTag);
    heading.textContent = node.name;

    if (node.sectionId) {
      heading.id = node.sectionId;
    }

    sectionWrapper.appendChild(heading);
  }

  // Content paragraph(s)
  if (hasContent) {
    const contentBlock = document.createElement('p');
    contentBlock.textContent = node.content;
    sectionWrapper.appendChild(contentBlock);
  }

  // Append this section to container before rendering children
  container.appendChild(sectionWrapper);

  // Children
  if (hasChildren) {
    node.children.forEach(child => {
      renderNodeIntoChapter(child, sectionWrapper, depth + 1);
    });
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

// Button hover colors
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

// Initial overlays & classes
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

// Images & treemap resize
resizeImageContainer();
window.addEventListener('resize', function() {
  resizeImageContainer();
  renderTreemap();
});

// Initialise treemap & thesis content once JS loads (HTML uses `defer`, so DOM is ready)
initTreemap();
initThesisContent();
