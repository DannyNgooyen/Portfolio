
// Toggle Menu
let navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
} 

function hideMenu(){
    navLinks.style.right = "-200px";
} 

// color palettes of themes
function setTheme(theme){
    if (theme == "green"){
        document.documentElement.style.setProperty('--background', '#ccfccb');
        document.documentElement.style.setProperty('--background-transparent', 'rgba(226, 0, 0, 0.7)');
        document.documentElement.style.setProperty('--footer-background', '#568259');

        document.documentElement.style.setProperty('--p-text', '#464e47');
        document.documentElement.style.setProperty('--h3-text', '#464e47');
        document.documentElement.style.setProperty('--h1-text', '#1a936f');

        document.documentElement.style.setProperty('--links-hover', '#1a936f');
        document.documentElement.style.setProperty('--links-text', '#ccfccb');
        document.documentElement.style.setProperty('--text-box', '#f1fffa');

        document.documentElement.style.setProperty('--button', '#88d498');
        document.documentElement.style.setProperty('--button-hover', '#1a936f');
        document.documentElement.style.setProperty('--button-text', '#114b5f');
    }

    else if (theme == "gamer"){
        document.documentElement.style.setProperty('--background', '#4361ee');
        document.documentElement.style.setProperty('--background-transparent', 'rgba(247, 37, 133, 0.7)');
        document.documentElement.style.setProperty('--footer-background', '#3a0ca3');

        document.documentElement.style.setProperty('--p-text', '#4cc9f0');
        document.documentElement.style.setProperty('--h3-text', '#4cc9f0');
        document.documentElement.style.setProperty('--h1-text', '#3a0ca3');
        
        document.documentElement.style.setProperty('--links-hover', '#7209b7');
        document.documentElement.style.setProperty('--links-text', '#f72585');
        document.documentElement.style.setProperty('--text-box', '#7209b7');

        document.documentElement.style.setProperty('--button', '#f72585');
        document.documentElement.style.setProperty('--button-hover', '#7209b7');
        document.documentElement.style.setProperty('--button-text', '#3a0ca3');
    }

    // default to possum theme
    else {
        document.documentElement.style.setProperty('--background', '#3d3b3c');
        document.documentElement.style.setProperty('--background-transparent', 'rgba(95, 91, 107, 0.7)');
        document.documentElement.style.setProperty('--footer-background', '#323031');

        document.documentElement.style.setProperty('--p-text', '#c1bdb3');
        document.documentElement.style.setProperty('--h3-text', '#c1bdb3');
        document.documentElement.style.setProperty('--h1-text', '#5f5b6b');
        
        document.documentElement.style.setProperty('--links-hover', '#7f7979');
        document.documentElement.style.setProperty('--links-text', '#c1bdb3');
        document.documentElement.style.setProperty('--text-box', '#7f7979');

        document.documentElement.style.setProperty('--button', '#c1bdb3');
        document.documentElement.style.setProperty('--button-hover', '#5f5b6b');
        document.documentElement.style.setProperty('--button-text', '#323031');
    }
}

// Toggle Theme
function toggleTheme(){
    let clicks = parseInt(sessionStorage.getItem('clickCount')) || 0;
    clicks += 1;
    clicks %= 3;

    // Save the updated click count back to session storage
    sessionStorage.setItem('clickCount', clicks);

    if (clicks == 1) {
        setTheme("green");
    }

    else if (clicks == 2) {
        setTheme("gamer");
    }

    else {
        setTheme("possum");
    }
}

// update the theme on load using saved session theme preferences
document.addEventListener('DOMContentLoaded', (event) => {
    let savedClickCount = parseInt(sessionStorage.getItem('clickCount')) || 0;

    console.log(savedClickCount);

    if (savedClickCount == 1) {
        setTheme("green");
    }

    else if (savedClickCount == 2) {
        setTheme("gamer");
    }

    else {
        setTheme("possum");
    }
})