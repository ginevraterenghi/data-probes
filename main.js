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
  // Determine which page is active based on current URL
  const currentPath = window.location.pathname;
  let activeElementId = null;

  if (currentPath.includes('index.html') || currentPath.endsWith('/')) {
    activeElementId = 'textlocation-desktop';
  } else if (currentPath.includes('physical-variable-apparatus.html')) {
    // For physical variables page, we need to target that menu item
    activeElementId = 'physical-variables-menu';
  } else if (currentPath.includes('phd-thesis.html')) {
    activeElementId = 'phd-thesis-menu';
  }

  // Apply random colors only to the active page's menu item
  var textElement = document.getElementById(activeElementId || 'textlocation-desktop');
  if (textElement) {
    var text = textElement.innerText;
    var html = text.split('').map(function (letter) {
      var randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      return '<font color="' + randomColor + '">' + letter + '</font>';
    }).join('');
    textElement.innerHTML = html;
  }

  // Mobile version
  var textElementMobile = document.getElementById('textlocation-mobile');
  if (textElementMobile) {
    var textMobile = textElementMobile.innerText;
    var htmlMobile = textMobile.split('').map(function (letter) {
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
    .sort((a, b) => {
      // Sort by chapter/section number if available
      // Extract leading numbers: "1. Intro" -> 1, "1.1 Research" -> 1.1
      const getNum = (str) => {
        const match = str.match(/^(\d+(\.\d+)*)/);
        return match ? match[0].split('.').map(Number) : [Infinity];
      };

      const numA = getNum(a.data.name);
      const numB = getNum(b.data.name);

      // Compare arrays of numbers
      for (let i = 0; i < Math.max(numA.length, numB.length); i++) {
        const valA = numA[i] !== undefined ? numA[i] : -1; // shorter array comes first? usually parent comes before child, but here we are sorting siblings.
        // Actually, siblings will have same depth. "1" vs "2". "1.1" vs "1.2".
        const valB = numB[i] !== undefined ? numB[i] : -1;
        if (valA !== valB) return valA - valB;
      }
      return 0;
    });

  const treemapLayout = d3.treemap()
    .size([width, height])
    .paddingInner(2) // Reduced padding
    .paddingOuter(2)
    .paddingTop(15) // Space for labels
    .round(true);

  // Configure treemap layout - increased padding to match reference
  d3.treemap()
    .size([width, height])
    .paddingTop(50) // More space for chapter/subchapter labels
    .paddingInner(5) // Larger gaps between siblings for visible white space
    .paddingOuter(8) // Larger gap between parent and children
    .round(true)
    (root);

  // Render ALL descendants to show nesting (excluding root)
  const allNodes = root.descendants().filter(d => d.depth > 0);

  // Chapter frame colors (User specified)
  const chapterColors = [
    "#0040ff", // Chapter 1
    "#ae00ff", // Chapter 2
    "#00ff99", // Chapter 3
    "#f67375", // Chapter 4
    "#c5c500", // Chapter 5
    "#f6dbff", // Chapter 6
    "#00c6d4", // Chapter 7
    "#763267"  // Chapter 8
  ];

  // Helper to determine text color
  const textColors = [
    "#ffffff", // Ch 1
    "#ffffff", // Ch 2
    "#000000", // Ch 3
    "#000000", // Ch 4
    "#000000", // Ch 5
    "#000000", // Ch 6
    "#000000", // Ch 7
    "#ffffff"  // Ch 8
  ];

  // Assign colors to nodes based on their chapter
  allNodes.forEach(d => {
    // Rename RQs if needed
    if (d.data.name.startsWith("RQ1")) d.data.name = "RQ1";
    if (d.data.name.startsWith("RQ2")) d.data.name = "RQ2";
    if (d.data.name.startsWith("RQ3")) d.data.name = "RQ3";

    // Find the ancestor at depth 1 (the chapter)
    let chapterNode = d;
    while (chapterNode.depth > 1) chapterNode = chapterNode.parent;

    // Determine color index
    const match = chapterNode.data.name.match(/^(\d+)/);
    const idx = match ? parseInt(match[1]) - 1 : 0;
    d.color = chapterColors[idx % chapterColors.length];
    d.textColor = textColors[idx % textColors.length];

    // Store chapter ID for scrolling
    if (d.depth === 1) {
      d.chapterId = `chapter-${idx + 1}`;
    }
  });

  const tooltipSelection = d3.select('#treemap-tooltip');

  const nodeSelection = containerSelection.selectAll('div.treemap-node')
    .data(allNodes)
    .enter()
    .append('div')
    .attr('class', d => {
      // Add classes for depth and type
      let cls = 'treemap-node';
      if (d.depth === 1) cls += ' chapter-node';
      else if (!d.children) cls += ' leaf-node';
      else cls += ' intermediate-node';
      return cls;
    })
    .style('left', d => d.x0 + 'px')
    .style('top', d => d.y0 + 'px')
    .style('width', d => Math.max(0, d.x1 - d.x0) + 'px')
    .style('height', d => Math.max(0, d.y1 - d.y0) + 'px')
    .style('border-color', d => d.color) // Apply chapter color to border of ALL nodes
    .style('border-style', d => {
      // "only strokes of the last sections, the one without the number in the title must be dotted. others are continuative"
      // Check if name starts with a number (e.g., "1.", "1.1", "5.1.2")
      const hasNumber = /^\d+(\.\d+)*\b/.test(d.data.name);
      if (!hasNumber) return 'dotted'; // Dotted for sections without numbers
      return 'solid'; // Solid for all numbered sections
    })
    .style('border-width', d => {
      // Thicker borders like in reference image
      if (d.depth === 1) return '6px'; // Main chapters - very thick
      if (d.depth === 2) return '3px'; // Subchapters - medium
      return '2px'; // Sections - thinner but still visible
    })
    .on('click', (event, d) => {
      event.stopPropagation();

      let targetId = d.data.sectionId;

      // If it's a chapter node, use the chapter ID
      if (d.depth === 1 && d.chapterId) {
        targetId = d.chapterId;
      }

      if (!targetId) return;

      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const originalBg = el.style.backgroundColor;
        el.style.backgroundColor = "#ffffcc";
        setTimeout(() => (el.style.backgroundColor = originalBg), 2000);
      }
    })
    .on('mouseenter', function (event, d) {
      // Hover effect: set background to the node's assigned color
      d3.select(this).style('background-color', d.color);

      // Change text color on hover to ensure readability against the fill
      d3.select(this).select('.node-label').style('color', d.textColor);

      if (!tooltipSelection.empty()) {
        // Start the root from chapter n., not "thesis"
        // d.ancestors() returns [node, parent, ..., root]
        // reverse() -> [root, ..., parent, node]
        // slice(1) -> remove root
        const path = d.ancestors().reverse().slice(1).map(n => n.data.name).join(' → ');
        tooltipSelection
          .style('opacity', 1)
          .html(path);
      }
    })
    .on('mousemove', function (event) {
      if (!tooltipSelection.empty()) {
        tooltipSelection
          .style('left', (event.clientX + 8) + 'px')
          .style('top', (event.clientY + 8) + 'px');
      }
    })
    .on('mouseleave', function (event, d) {
      // Reset background color
      d3.select(this).style('background-color', null);

      // Reset text color (to black as per default CSS, or whatever it was)
      d3.select(this).select('.node-label').style('color', null);

      if (!tooltipSelection.empty()) {
        tooltipSelection.style('opacity', 0);
      }
    });

  // Add labels
  nodeSelection.append('div')
    .attr('class', 'node-label')
    .style('display', d => {
      // "make sure to read all the titles. if the space is not enought, leave empty the rectanlge of subsections, not the other which must have tht title."
      // Prioritize numbered sections (chapters, subchapters).
      // If it's a numbered section, try to show it even if small? Or just prioritize them in logic.
      // Let's say: if it has a number, show it unless extremely small.
      // If it has NO number (subsection/leaf), hide it if small.

      const hasNumber = /^\d+(\.\d+)*\b/.test(d.data.name);
      const width = d.x1 - d.x0;
      const height = d.y1 - d.y0;

      if (hasNumber) {
        // Show numbered sections even if somewhat small, but maybe not microscopic
        return (width > 20 && height > 10) ? 'block' : 'none';
      } else {
        // Hide non-numbered sections if they are small
        return (width > 40 && height > 20) ? 'block' : 'none';
      }
    })
    .text(d => d.data.name);
}

/**
 * Initialize the treemap: load JSON and render once.
 */
/**
 * Initialize the treemap: load all chapter JSONs, merge them, and render.
 */
function initTreemap() {
  const treemapElement = document.getElementById('treemap');
  if (!treemapElement) return;

  if (typeof d3 === 'undefined') {
    console.warn('D3 is not loaded; treemap will not be rendered.');
    return;
  }

  // Fetch all chapter JSONs
  Promise.all(CHAPTER_JSON_URLS.map(url => fetch(url).then(res => res.json())))
    .then(dataArray => {
      // Merge into a single master object
      const masterData = {
        name: "Thesis",
        children: []
      };

      dataArray.forEach(chapterData => {
        // Each chapter JSON is { name: "Thesis", children: [ { name: "X. Chapter", ... } ] }
        // We want to extract the "X. Chapter" node
        if (chapterData.children && chapterData.children.length > 0) {
          masterData.children.push(chapterData.children[0]);
        }
      });

      treemapData = masterData;
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

window.addEventListener('scroll', function () {
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
buttons.forEach(function (button) {
  button.addEventListener('mouseenter', function () {
    button.style.backgroundColor = getRandomButtonColor();
  });

  button.addEventListener('mouseleave', function () {
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
window.addEventListener('resize', function () {
  resizeImageContainer();
  // Only re-render if treemap exists
  if (document.getElementById('treemap')) {
    renderTreemap();
  }
});

// Initialise treemap & thesis content once DOM is fully loaded
// Use a small delay to ensure all dynamic content is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePage);
} else {
  // DOM is already ready
  initializePage();
}

function initializePage() {
  // Small delay to ensure any dynamically loaded content is ready
  setTimeout(() => {
    initTreemap();
    // D3 treemap is initialized in d3-treemap.js
    initThesisContent();
  }, 100);
}

