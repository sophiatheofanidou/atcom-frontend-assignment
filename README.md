# ATCOM Front-End Assignment

This repository contains the implementation of the requested sections from the provided Figma file, as part of the ATCOM front-end assignment.

## Scope
The following sections were implemented:
- **See the Big Picture** (Features Carousel)
- **Why Choose Area** (Specifications Table)
- **Map Your Success** (How It Works)

No additional sections were developed beyond the assignment scope.

## Approach
The sections were implemented incrementally, starting from the HTML structure and followed by SCSS styling and responsive adjustments.

The work was organised in incremental steps:
- semantic HTML structure
- SCSS setup and design tokens
- section styling based on the desktop layout
- accessibility baseline checks
- responsive adaptations for tablet and mobile
- final stability and layout verification

Desktop layout was treated as the reference point from the Figma design, with responsive behavior applied through targeted overrides.

## Technical Notes
- Custom SCSS was used without a CSS framework.
- Semantic elements were used for structured content where needed.
- Responsive behavior preserves the desktop layout while adapting for smaller viewports.
- Basic accessibility considerations were applied (keyboard navigation, focus visibility, reduced motion).

## Project Structure
- `src/scss/` – SCSS source files
- `src/js/` – JavaScript logic
- `src/images/` – Assets
- `dist/css/main.css` – Compiled CSS output

## Usage
The project is delivered as a static HTML template.
Open `index.html` directly in a browser to view the result.
