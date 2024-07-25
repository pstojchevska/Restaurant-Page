import '../styles/menu.css';

export function createMenuPage() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('tab-content');

    const h1 = document.createElement('h1');
    h1.textContent = 'Our Menu';

    menuDiv.appendChild(h1);

    // Create sections
    const sections = [
        { title: 'Breakfast', items: breakfastItems },
        { title: 'Lunch/Dinner', items: lunchDinnerItems },
        { title: 'Snacks', items: snacksItems },
        { title: 'Desserts', items: dessertsItems },
        { title: 'Smoothies', items: smoothiesItems },
        { title: 'Drinks', items: drinksItems }
    ];

    sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('menu-section');

        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section.title;
        sectionDiv.appendChild(sectionTitle);

        section.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title;

            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('menu-item-details');

            const title = document.createElement('h3');
            title.textContent = item.title;

            const ingredients = document.createElement('ul');
            item.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredients.appendChild(li);
            });

            const price = document.createElement('span');
            price.classList.add('price');
            price.textContent = item.price;

            detailsDiv.appendChild(title);
            detailsDiv.appendChild(ingredients);
            detailsDiv.appendChild(price);

            itemDiv.appendChild(img);
            itemDiv.appendChild(detailsDiv);

            sectionDiv.appendChild(itemDiv);
        });

        menuDiv.appendChild(sectionDiv);
    });

    return menuDiv;
}

const breakfastItems = [
    {
        title: 'Avocado Toast',
        image: require('../assets/images/avocado-toast.jpg'),
        ingredients: ['Avocado', 'Egg', 'Whole Grain Bread', 'Olive Oil', 'Salt', 'Pepper'],
        price: '$4.99'
    },
    {
        title: 'Chocolate Protein Pancakes',
        image: require('../assets/images/chocolate-protein-pancakes.jpg'),
        ingredients: ['Oat Flour', 'Chocolate Flavored Whey Protein', 'Egg', 'Blueberries', 'Almond Milk'],
        price: '$6.99'
    },
    {
        title: 'Greek Yogurt with Chia Seeds',
        image: require('../assets/images/greek-yogurt-chia-seeds.jpg'),
        ingredients: ['Greek Yogurt 0%', 'Chia Seeds', 'Raspberries', 'Banana', 'Whey Protein Chocolate (optional)'],
        price: '$6.99'
    },
];

const lunchDinnerItems = [
    {
        title: 'Chicken Salad',
        image: require('../assets/images/chicken-salad.jpg'),
        ingredients: ['Chicken', 'Lettuce', 'Tomatoes', 'Cucumbers', 'Dressing'],
        price: '$13.99'
    },
    {
        title: 'Tuna Salad',
        image: require('../assets/images/tuna-salad.jpg'),
        ingredients: ['Tuna', 'Lettuce', 'Egg', 'Cucumber', 'Cherry Tomato', 'Avocado', 'Celery', 'Olive Oil'],
        price: '$12.99'
    },
    {
        title: 'Buddha Bowl',
        image: require('../assets/images/buddha-bowl.jpg'),
        ingredients: ['Sweet Potatoes', 'Watermelon Radish', 'Carrots', 'Red Cabbage', 'Kale', 'Chickpeas', 'Quinoa', 'Lettuce', 'Cherry Tomatoes', 'Avocado'],
        price: '$12.99'
    }
];

const snacksItems = [
    {
        title: 'Mixed Nuts',
        image: require('../assets/images/mixed-nuts.jpg'),
        ingredients: ['Almonds', 'Walnuts', 'Cashews', 'Pecans'],
        price: '$4.99'
    },
    {
        title: 'Pear Slices with Almond Butter',
        image: require('../assets/images/pear-almond-butter.jpg'),
        ingredients: ['Pear', 'Almond Butter'],
        price: '3.99'
    }
];

const dessertsItems = [
    {
        title: 'Fruit Parfait',
        image: require('../assets/images/fruit-parfait.jpg'),
        ingredients: ['Yogurt', 'Mixed Berries', 'Granola', 'Banana'],
        price: '$6.99'
    },
    {
        title: 'Raw Chocolate Cake',
        image: require('../assets/images/raw-chocolate-cake.jpg'),
        ingredients: ['Walnuts', 'Hazelnuts', 'Cocoa', 'Cashew', 'Dates', 'Dark Chocolate'],
        price: '$5.99'
    },
];

const smoothiesItems = [
    {
        title: 'Berry Blast Smoothie',
        image: require('../assets/images/berry-blast-smoothie.jpg'),
        ingredients: ['Berries', 'Banana', 'Almond Milk', 'Chia Seeds'],
        price: '$7.99'
    },
    {
        title: 'Green Detox Smoothie',
        image: require('../assets/images/green-detox-smoothie.jpg'),
        ingredients: ['Spinach', 'Kale', 'Green Apple', 'Cucumber'],
        price: '$7.99'
    },
    {
        title: 'Tropical Mango Smoothie',
        image: require('../assets/images/tropical-mango-smoothie.jpg'),
        ingredients: ['Mango', 'Pineapple', 'Almond Milk', 'Flax Seeds'],
        price: '$7.99'
    },
    {
        title: 'Protein Power Smoothie',
        image: require('../assets/images/protein-power-smoothie.jpg'),
        ingredients: ['Protein Powder', 'Banana', 'Almond Milk', 'Peanut Butter'],
        price: '$7.99'
    }
];

const drinksItems = [
    {
        title: 'Fresh Lemonade',
        image: require('../assets/images/fresh-lemonade.jpg'),
        ingredients: ['Lemon'],
        price: '$2.99'
    },
    {
        title: 'Orange Juice',
        image: require('../assets/images/orange-juice.jpg'),
        ingredients: ['Orange'],
        price: '$2.99'
    },
    {
        title: 'Iced Green Tea',
        image: require('../assets/images/iced-green-tea.jpg'),
        ingredients: ['Green Tea'],
        price: '$3.99'
    }
];
