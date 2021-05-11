// DOM Elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const customButton = document.getElementById('custom-theme');
const body = document.body;


// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isCustom = localStorage.getItem('isCustom');

if (theme) {
  body.classList.add(theme);
  isCustom && body.classList.add('custom-theme');
}

// Button Event Handlers

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  body.classList.replace('custom-theme', 'dark');

  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');
  body.classList.replace('custom-theme', 'light');
  localStorage.setItem('theme', 'light');
};

customButton.onclick = () => {
  body.classList.replace('dark', 'custom-theme');
  body.classList.replace('light', 'custom-theme');
  localStorage.setItem('theme', 'custom-theme');
};
