const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textbox = document.getElementById('textbox');

// Swithc Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        // If checked, Dark Mode
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        // Else, Light Mode
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);