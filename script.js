const toggleSwitch = document.querySelector("input[type='checkbox']");

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