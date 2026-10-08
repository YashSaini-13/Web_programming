/*
  PitchWire — Dark theme switcher (vanilla JavaScript)

  How it works:
  1. styles.css defines every color as a CSS variable.
  2. The ".dark_mode" class on <body> swaps in the dark set of variables.
  3. This script toggles that class when the button is clicked.
  4. The choice is saved in localStorage so it survives reloads and new visits.
*/

// Find the toggle button in the page using the id from about.html.
let theme_toggler = document.querySelector('#theme_toggler');

/*
  Update the button label (and its aria-pressed state for screen readers)
  so it always describes what the button will do or what is active.
*/
function update_button() {
  let is_dark = document.body.classList.contains('dark_mode');
  theme_toggler.textContent = is_dark ? 'Change Theme' : 'Change Theme';
  theme_toggler.setAttribute('aria-pressed', is_dark);
}

/*
  Read the saved theme from localStorage and apply it to the page.
  localStorage.getItem returns null if nothing has been saved yet,
  in which case the default (light) theme stays in place.
*/
function retrieve_theme() {
  let theme = localStorage.getItem('website_theme');

  if (theme != null) {
    // Remove both classes first so only the saved one is applied.
    document.body.classList.remove('default', 'dark_mode');
    document.body.classList.add(theme);
  }

  update_button();
}

/*
  Click handler: switch the theme and save the new choice.
  classList.toggle adds "dark_mode" if it is missing and removes it if present.
*/
theme_toggler.addEventListener('click', function () {
  document.body.classList.toggle('dark_mode');

  // Save which theme is active so it can be restored on the next page load.
  if (document.body.classList.contains('dark_mode')) {
    localStorage.setItem('website_theme', 'dark_mode');
  } else {
    localStorage.setItem('website_theme', 'default');
  }

  update_button();
});

/*
  BONUS (from the tutorial): the "storage" event fires in other open tabs of
  this site when localStorage changes, so every tab switches theme together.
*/
window.addEventListener('storage', function () {
  retrieve_theme();
}, false);

// Apply the saved theme as soon as the page loads.
retrieve_theme();
