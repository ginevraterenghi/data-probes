# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Commands

### Development
- **Run local server**: Use Python's built-in HTTP server to preview the site locally.
  ```bash
  python3 -m http.server
  ```

### Maintenance
- **Update Impressum/Footer**: The footer is loaded dynamically from `footer.html`.
  - Edit `footer.html` to update the footer content across all pages.

## Architecture

### High-Level Structure
This is a static website project consisting of an index page and multiple detail pages ("Data Probes").
- **Entry Point**: `index.html` serves as the main gallery/landing page.
- **Data Probes**: Individual pages named `dp-{number}.html` (e.g., `dp-1.html`, `dp-2.html`) represent specific data probes.
- **Assets**:
  - `css/`: Contains all stylesheets. `dp.css` and `menu.css` are shared across pages.
  - `main.js`: Handles shared UI logic like dynamic text coloring, menu behavior, image overlays, and footer injection.
  - `footer.html`: Contains the shared footer HTML.
  - `probes-img/`: Stores images for each probe, organized by probe ID (e.g., `dp1/`).

### Templating Strategy
There is no dynamic backend or frontend framework (like React or Jinja2).
- **Footer**: The footer content is centralized in `footer.html` and injected at runtime by `main.js`.
- **Navigation**: The navigation menu is shared but statically duplicated in HTML files.

### Key Components
- **Overlays**: The "Data Probe" pages use an overlay system for images (e.g., treatments, complexity, recurrences). These are toggled via buttons that interact with `toggleOverlay` in `main.js`.
- **Navigation**: The navigation menu is shared but statically duplicated in HTML files (or updated via scripts).
