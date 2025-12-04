import xml.etree.ElementTree as ET
import re

ns = {'svg': 'http://www.w3.org/2000/svg'}

def parse_svg(svg_path):
    with open(svg_path, 'r') as f:
        content = f.read()
        
    # Map colors to chapter numbers
    color_map = {
        '#0040ff': 1, # Blue
        '#ae00ff': 2, # Purple
        '#00ff99': 3, # Green
        '#0f9': 3,    # Green short
        '#f67375': 4, # Pink
        '#c5c500': 5, # Yellow
        '#f6dbff': 6, # Light Purple
        '#00c6d4': 7, # Cyan
        '#763267': 8  # Dark Purple
    }
    
    # Find classes for each color
    class_map = {} # class -> chapter_num
    
    # Regex to find .cls-X { ... stroke: #color ... }
    # CSS is multi-line, so we need to be careful
    # We'll look for blocks
    style_content = re.search(r'<style>(.*?)</style>', content, re.DOTALL).group(1)
    
    # Split by } to get blocks
    blocks = style_content.split('}')
    for block in blocks:
        for color, chapter in color_map.items():
            if color in block:
                # Find all classes in this block
                classes = re.findall(r'\.cls-(\d+)', block)
                for c in classes:
                    class_name = f"cls-{c}"
                    class_map[class_name] = chapter
                    
    print(f"Class mapping found: {len(class_map)} classes mapped to chapters")
    
    # Parse XML
    tree = ET.fromstring(content)
    
    chapter_rects = {i: [] for i in range(1, 9)}
    
    ns = {'svg': 'http://www.w3.org/2000/svg'}
    # Remove namespace for easier processing if needed, or use it
    # ElementTree usually keeps namespaces
    
    for elem in tree.iter():
        if elem.tag.endswith('rect'):
            cls_attr = elem.get('class', '')
            classes = cls_attr.split()
            
            chapter = None
            for c in classes:
                if c in class_map:
                    chapter = class_map[c]
                    break
            
            if chapter:
                try:
                    x = float(elem.get('x', 0))
                    y = float(elem.get('y', 0))
                    w = float(elem.get('width', 0))
                    h = float(elem.get('height', 0))
                    chapter_rects[chapter].append({'x': x, 'y': y, 'w': w, 'h': h, 'cls': cls_attr})
                except ValueError:
                    pass

    # Print results
    for i in range(1, 9):
        rects = chapter_rects[i]
        rects.sort(key=lambda r: r['w'] * r['h'], reverse=True)
        print(f"\n--- Chapter {i} ({len(rects)} rects) ---")
        if rects:
            # Main container is likely the largest
            main = rects[0]
            print(f"Main: x={main['x']:.2f}, y={main['y']:.2f}, w={main['w']:.2f}, h={main['h']:.2f}")
            # Subsections
            for r in rects[1:10]: # Top 10 largest subsections
                print(f"Sub:  x={r['x']:.2f}, y={r['y']:.2f}, w={r['w']:.2f}, h={r['h']:.2f}")

parse_svg('/Users/ginevra/Documents/GitHub/data-probes/TOC-treemap.svg')
