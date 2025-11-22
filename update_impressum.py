import os
import re

files = [f for f in os.listdir('.') if f.endswith('.html')]

# Regex to match the impressum div and its content, accounting for flexible whitespace/newlines
impressum_regex = re.compile(r'\s*<div class="impressum">\s*<span class="author">.*?</span>\s*<span class="uni-1">.*?</span>\s*<span class="uni-2">.*?</span>\s*<span class="year">.*?</span>\s*</div>', re.DOTALL)

new_footer = """
  <footer>
    <div class="impressum">
      <span class="author">Ginevra Terenghi</span>
      <div class="uni-wrapper">
        <span class="uni-1">School of Design, Brunel University London</span>
        <span class="uni-2">University of Applied Sciences and Arts of Southern Switzerland (SUPSI)</span>
      </div>
      <span class="year">April 2022 – TBD</span>
    </div>
  </footer>"""

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    # Check if already updated (contains uni-wrapper)
    if 'class="uni-wrapper"' in content:
        print(f"Skipping {file} (already updated)")
        continue

    # Remove impressum from header
    match = impressum_regex.search(content)
    if match:
        # Remove the match
        content = content.replace(match.group(0), '')
        print(f"Removed impressum from {file}")
    else:
        print(f"Impressum not found in {file}")
        # If not found, proceed to append only if we are sure it's not there.
        # For safety, if not found, we might skip to avoid duplication if the regex missed it but it exists.
        # But we checked for 'uni-wrapper'.
        # Let's assume if regex didn't match, it's either not there or different.
        # I'll skip appending if not found, to be safe.
        continue

    # Append footer before </body>
    if '</body>' in content:
        content = content.replace('</body>', new_footer + '\n</body>')
        print(f"Appended footer to {file}")
        
        with open(file, 'w') as f:
            f.write(content)
    else:
        print(f"Could not find </body> in {file}")

