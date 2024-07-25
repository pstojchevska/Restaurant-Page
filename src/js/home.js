import '../styles/home.css';
import { createMenuPage } from './menu.js';

export function createHome() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('tab-content');

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Green Haven Bistro';

    const p = document.createElement('p');
    p.textContent = 'At Green Haven Bistro, we believe in nourishing the body and soul. Our menu is crafted with the finest healthy ingredients, offering you a delightful dining experience. Come and savor our exquisite meals and drinks, made with love and care for your well-being.';

    const button = document.createElement('button');
    button.classList.add('discover-menu');
    button.textContent = 'Discover Our Menu';

    button.addEventListener('click', () => {

        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';

        const menuPage = createMenuPage();
        contentDiv.appendChild(menuPage);
    })

    homeDiv.appendChild(h1);
    homeDiv.appendChild(p);
    homeDiv.appendChild(button);

    return homeDiv;
}
