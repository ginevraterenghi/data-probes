// Static TreeMap - Precise recreation from SVG reference
// Chapter colors as specified
const CHAPTER_COLORS = {
  1: "#0040ff", // Blue
  2: "#ae00ff", // Purple
  3: "#00ff99", // Green
  4: "#f67375", // Pink/Red
  5: "#c5c500", // Yellow
  6: "#f6dbff", // Light Purple  
  7: "#00c6d4", // Cyan
  8: "#763267"  // Dark Purple
};

// Initialize static treemap on page load  
function initStaticTreemap() {
  const treemapContainer = document.getElementById('static-treemap');
  if (!treemapContainer) return;

  try {
    // Build the static SVG treemap matching reference image exactly
    const svgContent = buildCompleteTreemapSVG();
    treemapContainer.innerHTML = svgContent;

    // Add interactivity
    addTreemapClickHandlers();
    addTreemapTooltipHandlers();
    console.log("Static treemap initialized successfully");
  } catch (e) {
    console.error("Error initializing static treemap:", e);
    treemapContainer.innerHTML = `<div style="color:red; padding:20px;">Error: ${e.message}</div>`;
  }
}

function buildCompleteTreemapSVG() {
  const width = 1600;
  const height = 860;

  return `
    <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" id="treemap-svg">
      ${buildChapter1()}
      ${buildChapter2()}
      ${buildChapter3()}
      ${buildChapter4()}
      ${buildChapter5()}
      ${buildChapter6()}
      ${buildChapter7()}
      ${buildChapter8()}
    </svg>
  `;
}

// Build each chapter based on reference image layout
// Build each chapter based on reference image layout
function buildChapter1() {
  const c = CHAPTER_COLORS[1];
  // Chapter 1: Blue - Fixed layout to avoid overlaps
  // Main: x=4, y=4, w=308, h=116

  return `
    <g class="chapter-group" data-chapter="1">
      <g class="chapter-main-content">
        <rect class="chapter-rect" x="4" y="4" width="308" height="116" 
              fill="white" stroke="${c}" stroke-width="2"
              data-section-id="chapter-1" data-path="1. Intro"/>
        <text class="chapter-title" x="10" y="20" font-size="11">1. Intro</text>
      </g>
      
      <!-- Col 1: 1.1 & 1.2 -->
      <g class="section-group">
        <rect class="section-rect" x="8" y="28" width="53" height="40"
              fill="white" stroke="${c}" stroke-width="1"
              data-section-id="sec-research-aims" data-path="1. Intro → 1.1 Research aims"/>
        <text class="section-label" x="12" y="42" font-size="7">1.1 Research</text>
        <text class="section-label" x="12" y="50" font-size="7">aims</text>
      </g>
      
      <g class="section-group">
        <rect class="section-rect" x="8" y="72" width="53" height="44"
              fill="white" stroke="${c}" stroke-width="1"
              data-section-id="sec-context" data-path="1. Intro → 1.2 Context"/>
        <text class="section-label" x="12" y="92" font-size="7">1.2 Context</text>
      </g>
      
      <!-- Col 2: 1.3 & 1.4 with RQs -->
      <g class="section-group">
        <rect class="section-rect" x="65" y="8" width="104" height="24"
              fill="white" stroke="${c}" stroke-width="1"
              data-section-id="sec-topic" data-path="1. Intro → 1.3 Topic"/>
        <text class="section-label" x="69" y="22" font-size="7">1.3 Topic</text>
      </g>
      
      <g class="section-group">
        <rect class="section-rect" x="65" y="36" width="104" height="80"
              fill="white" stroke="${c}" stroke-width="1"
              data-path="1. Intro → 1.4 Research questions"/>
        <text class="section-label" x="69" y="48" font-size="7">1.4 Research questions</text>
        
        <!-- RQ1 -->
        <g class="section-group">
          <rect class="subsection-rect dotted-border" x="69" y="54" width="96" height="18"
                fill="white" stroke="${c}" stroke-width="0.5"
                data-section-id="sec-rq1" data-path="1. Intro → 1.4 → RQ1"/>
          <text class="subsection-label" x="73" y="65" font-size="6">RQ1</text>
        </g>
        
        <!-- RQ2 -->
        <g class="section-group">
          <rect class="subsection-rect dotted-border" x="69" y="75" width="96" height="18"
                fill="white" stroke="${c}" stroke-width="0.5"
                data-section-id="sec-rq2" data-path="1. Intro → 1.4 → RQ2"/>
          <text class="subsection-label" x="73" y="86" font-size="6">RQ2</text>
        </g>
        
        <!-- RQ3 -->
        <g class="section-group">
          <rect class="subsection-rect dotted-border" x="69" y="96" width="96" height="16"
                fill="white" stroke="${c}" stroke-width="0.5"
                data-section-id="sec-rq3" data-path="1. Intro → 1.4 → RQ3"/>
          <text class="subsection-label" x="73" y="106" font-size="6">RQ3</text>
        </g>
      </g>
      
      <!-- Col 3: 1.5 & 1.6 -->
      <g class="section-group">
        <rect class="section-rect" x="173" y="8" width="135" height="50"
              fill="white" stroke="${c}" stroke-width="1"
              data-path="1. Intro → 1.5 O&O"/>
        <text class="section-label" x="177" y="22" font-size="7">1.5 Outputs & Outcomes</text>
        
        <g class="section-group">
          <rect class="subsection-rect" x="177" y="28" width="127" height="13"
                fill="white" stroke="${c}" stroke-width="0.5"
                data-section-id="sec-151-outputs" data-path="1. Intro → 1.5 → 1.5.1 Outputs"/>
          <text class="subsection-label" x="181" y="36" font-size="6">1.5.1 Outputs</text>
        </g>
        
        <g class="section-group">
          <rect class="subsection-rect" x="177" y="43" width="127" height="12"
                fill="white" stroke="${c}" stroke-width="0.5"
                data-section-id="sec-152-outcomes" data-path="1. Intro → 1.5 → 1.5.2 Outcomes"/>
          <text class="subsection-label" x="181" y="51" font-size="6">1.5.2 Outcomes</text>
        </g>
      </g>
      
      <g class="section-group">
        <rect class="section-rect" x="173" y="62" width="135" height="54"
              fill="white" stroke="${c}" stroke-width="1"
              data-section-id="sec-16-structure" data-path="1. Intro → 1.6 Structure"/>
        <text class="section-label" x="177" y="85" font-size="7">1.6 The structure of</text>
        <text class="section-label" x="177" y="93" font-size="7">this thesis</text>
      </g>
    </g>
  `;
}

function buildChapter2() {
  const c = CHAPTER_COLORS[2];
  // Chapter 2: Purple
  // Main: x=4, y=127.25, w=308, h=728.75
  // This chapter has a complex structure with 4 main sections and many subsections

  return `<g class="chapter-group" data-chapter="2">
    <g class="chapter-main-content">
      <rect class="chapter-rect" x="4" y="127.25" width="308" height="728.75" 
            fill="white" stroke="${c}" stroke-width="2"
            data-section-id="chapter-2" data-path="2. Literature review"/>
      <text class="chapter-title" x="10" y="145" font-size="11">2. Literature review</text>
    </g>
    
    <!-- 2.1 The problem of UTIs within women's health -->
    <g class="section-group">
      <rect class="section-rect" x="7.96" y="151.49" width="299.91" height="107.51"
            fill="white" stroke="${c}" stroke-width="1"
            data-section-id="sec-21-the-problem-of-utis-within-womens-health" 
            data-path="2. Literature review → 2.1 The problem of UTIs"/>
      <text class="section-label" x="15" y="168" font-size="9">2.1 The problem of UTIs</text>
      
      <!-- 2.1.1 UTI disease concerns -->
      <g class="section-group">
        <rect class="subsection-rect" x="15" y="178" width="285" height="24" 
              fill="white" stroke="${c}" stroke-width="0.5" 
              data-section-id="sec-211-uti-disease-concerns"
              data-path="2. Literature review → 2.1 → 2.1.1 Disease concerns"/>
        <text class="subsection-label" x="20" y="191" font-size="7">2.1.1 Disease concerns</text>
        
        <!-- Sub-subsections as shapes only -->
        <rect class="subsubsection-rect" x="20" y="196" width="85" height="4" fill="white" stroke="${c}" stroke-width="0.3"/>
        <rect class="subsubsection-rect" x="108" y="196" width="85" height="4" fill="white" stroke="${c}" stroke-width="0.3"/>
        <rect class="subsubsection-rect" x="196" y="196" width="85" height="4" fill="white" stroke="${c}" stroke-width="0.3"/>
      </g>
      
      <!-- 2.1.2 Feminist perspectives -->
      <g class="section-group">
        <rect class="subsection-rect" x="15" y="206" width="285" height="24" 
              fill="white" stroke="${c}" stroke-width="0.5" 
              data-section-id="sec-212-feminist-perspectives"
              data-path="2. Literature review → 2.1 → 2.1.2 Feminist perspectives"/>
        <text class="subsection-label" x="20" y="219" font-size="7">2.1.2 Feminist perspectives</text>
        
        <!-- Sub-subsections as shapes -->
        <rect class="subsubsection-rect" x="20" y="224" width="130" height="4" fill="white" stroke="${c}" stroke-width="0.3"/>
        <rect class="subsubsection-rect" x="154" y="224" width="127" height="4" fill="white" stroke="${c}" stroke-width="0.3"/>
      </g>
      
      <!-- 2.1.3 Positioning this research -->
      <g class="section-group">
        <rect class="subsection-rect" x="15" y="234" width="285" height="20" 
              fill="white" stroke="${c}" stroke-width="0.5" 
              data-section-id="sec-213-positioning"
              data-path="2. Literature review → 2.1 → 2.1.3 Positioning"/>
        <text class="subsection-label" x="20" y="246" font-size="7">2.1.3 Positioning</text>
      </g>
    </g>
    
    <!-- 2.2 Theoretical framing: Symptoms as physical indicators -->
    <g class="section-group">
      <rect class="section-rect" x="6.86" y="262.67" width="302.76" height="241.44"
            fill="white" stroke="${c}" stroke-width="1"
            data-section-id="sec-22-theoretical-framing" 
            data-path="2. Literature review → 2.2 Theoretical framing"/>
      <text class="section-label" x="15" y="278" font-size="9">2.2 Theoretical framing</text>
      
      <!-- 2.2.1 Symptoms as interpreted bodily signs -->
      <g class="section-group">
        <rect class="subsection-rect" x="12" y="288" width="93" height="207" 
              fill="white" stroke="${c}" stroke-width="0.5" 
              data-section-id="sec-221-symptoms-as-signs"
              data-path="2. Literature review → 2.2 → 2.2.1 Symptoms as signs"/>
        <text class="subsection-label" x="17" y="302" font-size="7">2.2.1 Symptoms</text>
        <text class="subsection-label" x="17" y="310" font-size="7">as signs</text>
        
        <!-- Sub-subsections: Introduction, Biosemiotics perspectives, Understanding indexes -->
        <rect class="subsubsection-rect" x="17" y="316" width="83" height="25" fill="white" stroke="${c}" stroke-width="0.3"/>
        <rect class="subsubsection-rect" x="17" y="344" width="83" height="75" fill="white" stroke="${c}" stroke-width="0.3"/>
        <rect class="subsubsection-rect" x="17" y="422" width="83" height="68" fill="white" stroke="${c}" stroke-width="0.3"/>
      </g>
      
      <!-- 2.2.2 Material traces within autographic design -->
      <g class="section-group">
        <rect class="subsection-rect" x="108" y="288" width="93" height="207" 
              fill="white" stroke="${c}" stroke-width="0.5" 
              data-section-id="sec-222-material-traces"
              data-path="2. Literature review → 2.2 → 2.2.2 Material traces"/>
        <text class="subsection-label" x="113" y="302" font-size="7">2.2.2 Material</text>
        <text class="subsection-label" x="113" y="310" font-size="7">traces</text>
        
        <!-- Sub-subsections: Introduction, Recognising traces, Enabling interpretation, Autographic to externalise -->
        <rect class="subsubsection-rect" x="113" y="316" width="83" height="48" fill="white" stroke="${c}" stroke-width="0.3"/>
        <rect class="subsubsection-rect" x="113" y="367" width="83" height="28" fill="white" stroke="${c}" stroke-width="0.3"/>
        <rect class="subsubsection-rect" x="113" y="398" width="83" height="55" fill="white" stroke="${c}" stroke-width="0.3"/>
        <rect class="subsubsection-rect" x="113" y="456" width="83" height="34" fill="white" stroke="${c}" stroke-width="0.3"/>
      </g>
      
      <!-- 2.2.3 Towards a material approach -->
      <g class="section-group">
        <rect class="subsection-rect" x="204" y="288" width="98" height="207" 
              fill="white" stroke="${c}" stroke-width="0.5" 
              data-section-id="sec-223-material-approach"
              data-path="2. Literature review → 2.2 → 2.2.3 Material approach"/>
        <text class="subsection-label" x="209" y="302" font-size="7">2.2.3 Material</text>
        <text class="subsection-label" x="209" y="310" font-size="7">approach</text>
        
        <!-- Single subsection (no children in JSON) -->
      </g>
    </g>
    
    <!-- 2.3 The methodological stance (Bottom Left) -->
    <g class="section-group">
      <rect class="section-rect" x="6.86" y="506.53" width="135.06" height="317.74"
            fill="white" stroke="${c}" stroke-width="1"
            data-section-id="sec-23-methodological" 
            data-path="2. Literature review → 2.3 Methodological stance"/>
      <text class="section-label" x="12" y="522" font-size="9">2.3 Methodological</text>
      <text class="section-label" x="12" y="532" font-size="9">stance</text>
      
      <!-- Sub-sections as shapes (too many to label) -->
      <rect class="subsection-rect" x="12" y="540" width="125" height="95" fill="white" stroke="${c}" stroke-width="0.5"/>
      <rect class="subsection-rect" x="12" y="640" width="125" height="175" fill="white" stroke="${c}" stroke-width="0.5"/>
    </g>
    
    <!-- 2.4 The approach: Participation and co-creation (Bottom Right) -->
    <g class="section-group">
      <rect class="section-rect" x="146.00" y="506.53" width="163.62" height="317.74"
            fill="white" stroke="${c}" stroke-width="1"
            data-section-id="sec-24-approach" 
            data-path="2. Literature review → 2.4 The approach"/>
      <text class="section-label" x="151" y="522" font-size="9">2.4 The approach</text>
      
      <!-- Sub-sections as shapes -->
      <rect class="subsection-rect" x="151" y="535" width="153" height="135" fill="white" stroke="${c}" stroke-width="0.5"/>
      <rect class="subsection-rect" x="151" y="675" width="153" height="140" fill="white" stroke="${c}" stroke-width="0.5"/>
    </g>
  </g>`;
}

function buildChapter3() {
  const c = CHAPTER_COLORS[3];
  // Main: x=317.50, y=4.00, w=636.50, h=255.00
  return `<g class="chapter-group" data-chapter="3">
    <g class="chapter-main-content">
      <rect class="chapter-rect" x="317.5" y="4" width="636.5" height="255" 
            fill="white" stroke="${c}" stroke-width="2"
            data-section-id="chapter-3" data-path="3. Methodology"/>
      <text class="chapter-title" x="330" y="30" font-size="12">3. Methodology</text>
    </g>
  </g>`;
}

function buildChapter4() {
  const c = CHAPTER_COLORS[4];
  // Main: x=318.81, y=266.19, w=635.00, h=590.00
  return `<g class="chapter-group" data-chapter="4">
    <g class="chapter-main-content">
      <rect class="chapter-rect" x="318.81" y="266.19" width="635" height="590" 
            fill="white" stroke="${c}" stroke-width="2"
            data-section-id="chapter-4" data-path="4. Analysis of results"/>
      <text class="chapter-title" x="330" y="290" font-size="12">4. Analysis of results</text>
    </g>
  </g>`;
}

function buildChapter5() {
  const c = CHAPTER_COLORS[5];
  // Main: x=961.00, y=4.00, w=319.00, h=285.00
  return `<g class="chapter-group" data-chapter="5">
    <g class="chapter-main-content">
      <rect class="chapter-rect" x="961" y="4" width="319" height="285" 
            fill="white" stroke="${c}" stroke-width="2"
            data-section-id="chapter-5" data-path="5. Assessment"/>
      <text class="chapter-title" x="975" y="30" font-size="12">5. Assessment</text>
    </g>
  </g>`;
}

function buildChapter6() {
  const c = CHAPTER_COLORS[6];
  // Main: x=1287.00, y=4.00, w=144.00, h=285.00
  return `<g class="chapter-group" data-chapter="6">
    <g class="chapter-main-content">
      <rect class="chapter-rect" x="1287" y="4" width="144" height="285" 
            fill="white" stroke="${c}" stroke-width="2"
            data-section-id="chapter-6" data-path="6. Discussion"/>
      <text class="chapter-title" x="1295" y="30" font-size="12">6. Discussion</text>
    </g>
  </g>`;
}

function buildChapter7() {
  const c = CHAPTER_COLORS[7];
  // Main: x=961.00, y=296.00, w=294.00, h=560.00
  return `<g class="chapter-group" data-chapter="7">
    <g class="chapter-main-content">
      <rect class="chapter-rect" x="961" y="296" width="294" height="560" 
            fill="white" stroke="${c}" stroke-width="2"
            data-section-id="chapter-7" data-path="7. Apparatus"/>
      <text class="chapter-title" x="975" y="320" font-size="12">7. Apparatus</text>
    </g>
  </g>`;
}

function buildChapter8() {
  const c = CHAPTER_COLORS[8];
  // Main: x=1262.00, y=296.00, w=169.00, h=560.00
  return `<g class="chapter-group" data-chapter="8">
    <g class="chapter-main-content">
      <rect class="chapter-rect" x="1262" y="296" width="169" height="560" 
            fill="white" stroke="${c}" stroke-width="2"
            data-section-id="chapter-8" data-path="8. Conclusion"/>
      <text class="chapter-title" x="1275" y="320" font-size="12">8. Conclusion</text>
    </g>
  </g>`;
}

// Add click handlers for all interactive elements
function addTreemapClickHandlers() {
  const groups = document.querySelectorAll('#treemap-svg .section-group, #treemap-svg .chapter-main-content');

  groups.forEach(group => {
    const rect = group.querySelector('rect');
    const texts = group.querySelectorAll('text');

    if (!rect) return;

    rect.style.cursor = 'pointer';

    // Click handler
    rect.addEventListener('click', function () {
      const sectionId = this.getAttribute('data-section-id');
      if (!sectionId) return;

      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const originalBg = el.style.backgroundColor;
        el.style.backgroundColor = "#ffffcc";
        setTimeout(() => (el.style.backgroundColor = originalBg), 2000);
      }
    });

    // Hover effect - fill rect with stroke color and change text to white
    rect.addEventListener('mouseenter', function () {
      const strokeColor = this.getAttribute('stroke');
      this.style.fill = strokeColor;

      // Change all text in this group to white
      texts.forEach(text => {
        text.style.fill = '#ffffff';
      });
    });

    rect.addEventListener('mouseleave', function () {
      this.style.fill = 'white';

      // Restore text to black
      texts.forEach(text => {
        text.style.fill = '#000';
      });
    });
  });
}

// Add tooltip handlers
function addTreemapTooltipHandlers() {
  const tooltip = document.getElementById('treemap-tooltip');
  if (!tooltip) return;

  const rects = document.querySelectorAll('#treemap-svg rect[data-path]');
  rects.forEach(rect => {
    rect.addEventListener('mouseenter', function (e) {
      const path = this.getAttribute('data-path');
      tooltip.innerHTML = path;
      tooltip.style.opacity = '1';
    });

    rect.addEventListener('mousemove', function (e) {
      tooltip.style.left = (e.clientX + 8) + 'px';
      tooltip.style.top = (e.clientY + 8) + 'px';
    });

    rect.addEventListener('mouseleave', function () {
      tooltip.style.opacity = '0';
    });
  });
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStaticTreemap);
} else {
  initStaticTreemap();
}
