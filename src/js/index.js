import '../styles/styles.css';

import { createHome } from './home.js';
import { createMenuPage } from './menu.js';
import { createContactPage } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

    // Function to change content
    function changeContent(createPageFunc) {
        contentDiv.innerHTML = ''; // Clear current content
        contentDiv.appendChild(createPageFunc());
    }

    // Initial home page load
    changeContent(createHome);

    // Get buttons
    const homeButton = document.querySelector('nav button:nth-of-type(1)');
    const menuButton = document.querySelector('nav button:nth-of-type(2)');
    const contactButton = document.querySelector('nav button:nth-of-type(3)');

    // Event listeners for tab buttons
    homeButton.addEventListener('click', () => changeContent(createHome));
    menuButton.addEventListener('click', () => changeContent(createMenuPage));
    contactButton.addEventListener('click', () => changeContent(createContactPage));
});