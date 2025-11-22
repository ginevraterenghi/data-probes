import os
import re

# Define the new supervisor HTML block
supervisors_html = """
      <div class="supervisors">
        <span>Arthi Manohar</span>
        <span>Busayawan Lam</span>
        <span>Serena Cangiano</span>
      </div>"""

# Regex to match the impressum block in the footer
# It looks for <div class="impressum"> ... <span class="author">...</span> ... </div>
# We want to insert the supervisors block after the author span.
impressum_pattern = re.compile(r'(<div class="impressum">\s*<span class="author">.*?</span>)', re.DOTALL)

files = [f for f in os.listdir('.') if f.endswith('.html')]

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    # Check if supervisors are already added
    if 'class="supervisors"' in content:
        print(f"Skipping {file} (supervisors already present)")
        continue

    # Find the impressum block in the footer (not the one in header which should have been removed, but checking broadly)
    # We know we moved it to footer, so we look for the structure.
    if impressum_pattern.search(content):
        new_content = impressum_pattern.sub(r'\1' + supervisors_html, content)
        
        with open(file, 'w') as f:
            f.write(new_content)
        print(f"Updated {file}")
    else:
        print(f"Impressum structure not found in {file}")

