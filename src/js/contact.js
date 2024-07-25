import '../styles/contact.css';

export function createContactPage() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('tab-content');

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Green Haven Street, Healthy City';

    const phone = document.createElement('p');
    phone.textContent = 'Phone: (123) 456-7890';

    const email = document.createElement('p');
    email.textContent = 'Email: contact@greenhavenbistro.com';

    contactDiv.appendChild(h1);
    contactDiv.appendChild(address);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(email);

    return contactDiv;
}
