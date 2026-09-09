# PitchWire — About Page

A simple About page built with HTML and an external CSS stylesheet for a
soccer news and schedule website concept.

## Files

- `about.html` — The About page content and structure.
- `styles.css` — External stylesheet: colors, fonts, and layout.

## How to View

1. Keep both files in the same folder (they're linked via a relative path).
2. Open `about.html` in any web browser.

No build tools, servers, or dependencies required — it's plain HTML/CSS.

## Color Palette

Defined at the top of `styles.css` and set as CSS variables in `:root`:

| Variable               | Hex       | Used for                          |
|------------------------|-----------|------------------------------------|
| `--color-chalk`        | `#F5F7F2` | Page background                    |
| `--color-charcoal`     | `#1E2A22` | Primary body text                  |
| `--color-pitch-green`  | `#2F6E42` | Headings, links, header background |
| `--color-pitch-dark`   | `#234F31` | Link hover state                   |
| `--color-goal-gold`    | `#E8A93B` | Highlight accent, social buttons   |
| `--color-grass-light`  | `#E3EDE1` | Card/section backgrounds           |
| `--color-muted`        | `#5C6B60` | Secondary/quiet text               |

## Fonts

- **Headings:** `Barlow Condensed` (bold, scoreboard-style feel)
- **Body:** `Inter` (clean, readable sans-serif)

Both are loaded via Google Fonts at the top of `styles.css`.

## Notes

- The social media links in `about.html` point to my personal social presence.
- Colors and fonts can be changed in one place by editing the `:root`
  variables in `styles.css`.
