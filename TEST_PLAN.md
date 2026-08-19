# Test Plan — portfolio index.html fixes (PR #1)

Target: http://localhost:8000/ (python3 -m http.server 8000 already running, repo root)
Evidence base: index.html (scroll-margin-top:5rem L~52; skip-link L~57-64; @media 768px nav-links visible L~378-388; .section-label-center/.section-title-center L~345-346; contact links L~790-800)

## T1 — It should load with fonts and no console errors (desktop)
Steps: open http://localhost:8000/ maximized; screenshot hero; check console.
Pass: zero console errors; heading "Johannes Moleko" renders in Space Grotesk (geometric grotesque, not Arial/DejaVu) — verify via computed `document.fonts.check('1rem "Space Grotesk"')` === true AND visual; no horizontal scrollbar.

## T2 — It should scroll each nav link to a fully visible heading
Steps: click nav Skills, Experience, Education, Projects, Contact in turn; screenshot after each; then click `<JM />` logo.
Pass: after each click the section's `.section-title` (e.g. "Technical Skills", "Education") is fully visible below the fixed nav bar, not clipped/overlapped. Logo returns to hero (hero name visible, scrollY≈0).
Broken-state contrast: without scroll-margin-top the heading/label would sit under the nav.

## T3 — It should show a usable nav and single-column cards at 390x844 mobile
Steps: resize viewport to 390x844; screenshot top of page; tap "Education" nav link; scroll to Projects.
Pass: all 5 nav links + logo visible on screen (2 rows), hero name/title not covered by nav, tapping Education scrolls with heading visible; project cards one per row, no card wider than viewport; document.scrollingElement.scrollWidth <= 390 (no horizontal overflow). Repeat overflow check at 360px width.

## T4 — It should reveal a working skip link and visible focus outlines
Steps: reload at desktop, click page background top / press Tab once; screenshot; press Enter; then Tab through nav links; screenshot a focused nav link.
Pass: "Skip to content" chip visibly appears top-left on first Tab (screenshot shows it); Enter moves focus/anchor to #main (URL ends #main); focused nav link shows a cyan 2px outline in screenshot.

## T5 — It should have correct contact hrefs, new-tab LinkedIn, and centered contact heading
Steps: scroll to Contact; screenshot; hover/inspect hrefs via DOM read; click LinkedIn.
Pass: mailto:johannestekamoleko@gmail.com, tel:+27793724166, LinkedIn href with rel="noopener noreferrer" target=_blank and clicking opens a NEW tab (tab count increases); "Let's work together" label and "Get In Touch" heading horizontally centered in the screenshot (visually centered relative to page).

## T6 — Adversarial resize / long content
Steps: at 1440, 1024, 768, 500, 360 widths screenshot Skills + Projects + Contact; check scrollWidth vs innerWidth at each.
Pass: no overlap of nav over content, no clipped text, no horizontal overflow at any width.
