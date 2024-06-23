
const sweet = document.getElementById('sweet');
const vegan = document.getElementById('vegan');
const waffles = document.getElementById('waffles');
const hot = document.getElementById('hot');
const smoothies = document.getElementById('smoothies');


const itemShuffle = (menuObjects) => {

    const currentMenuItems = document.querySelectorAll(".menu-grid-item");

    let itemCount = 0;

    for (let item of currentMenuItems) {
        if (itemCount < menuObjects.length) {
            const img = item.children[0];
            img.src = menuObjects[itemCount]["image"];

            const name = item.children[1];
            name.textContent = menuObjects[itemCount]["name"];

            const price = item.children[2];
            price.textContent = menuObjects[itemCount]["price"];

            if (item.hasAttribute("hidden")) {
                item.removeAttribute("hidden");
            }
            itemCount++;
        }
        else {
            item.setAttribute("hidden", "");
        }
    }
}

sweet.addEventListener('click', () => {

    const sweetObjects = [{
        "image": "images/sweet-crepes/CafeCrepe3.jpg",
        "name": "Butterscotch-Crepes",
        "price": "$4.99"
    },
    {
        "image": "images/sweet-crepes/Coconut-Milk-Crepes-featured.jpg",
        "name": "Coconut-Milk-Crepe",
        "price": "$5.49"
    },
    {
        "image": "images/sweet-crepes/coffee-maple-crepes-2.jpg",
        "name": "Coffee-Maple-Crepes",
        "price": "$3.99"
    },
    {
        "image": "images/sweet-crepes/food-pancakes-crepes-honey-wallpaper-preview.jpg",
        "name": "Honey-Pancake-Crepe",
        "price": "$7.99"
    },
    {
        "image": "images/sweet-crepes/healthy-chocolate-crepes-honey.jpg",
        "name": "Chocolate-Honey-Crepe",
        "price": "$5.49"
    },
    {
        "image": "images/sweet-crepes/strawberry-crepes-2.jpg",
        "name": "Strawberry-Crepe",
        "price": "$5.49"
    },
    {
        "image": "images/sweet-crepes/the-best-healthy-crepes-3-1.jpg",
        "name": "Peach-wheat-Crepe",
        "price": "$6.49"
    },
    {
        "image": "images/sweet-crepes/why-crepes-are-becoming-popular-at-healthy-fast-food-restaurants.jpg",
        "name": "Whipped-Cream-Crepe",
        "price": "$4.49"
    }
    ]

    itemShuffle(sweetObjects);

})

vegan.addEventListener('click', () => {

    const veganObjects = [{
        "image": "images/vegan/healthy-whole-wheat-crepes-pic.jpg",
        "name": "Whole-wheat-crepe",
        "price": "$2.49"
    },
    {
        "image": "images/vegan/Vegan-Crepes-1-1.jpg",
        "name": "low-sugar-Vegan-Crepes",
        "price": "$3.99"
    },
    {
        "image": "images/vegan/vegancrepesrecipe-h1.jpg",
        "name": "Earth-Friendly Crepe",
        "price": "$5.49"
    },
    {
        "image": "images/vegan/vegancrepesrecipe-h3.jpg.jpeg",
        "name": "Plant-Based Crepe",
        "price": "$4.99"
    }
    ]

    itemShuffle(veganObjects);
})

waffles.addEventListener('click', () => {

    const waffleObjects = [{
        "image": "images/waffles/Basically-Waffles.webp",
        "name": "Very Berry Waffle",
        "price": "$2.49"
    },
    {
        "image": "images/waffles/icream-waffles.jpg",
        "name": "Icecream Waffle",
        "price": "$3.99"
    },
    {
        "image": "images/waffles/liege-waffles-nutella-side-scaled.jpg",
        "name": "Liege Waffle",
        "price": "$5.49"
    },
    {
        "image": "images/waffles/nutella-waffles.jpg",
        "name": "Nutella Waffle",
        "price": "$4.99"
    },
    {
        "image": "images/waffles/oreo-waffles-2.jpg",
        "name": "Oreo Waffle",
        "price": "$8.99"
    }
    ]

    itemShuffle(waffleObjects);
})

hot.addEventListener('click', () => {

    const waffleObjects = [{
        "image": "images/hot/French Hot Chocolate Recipe.jpg",
        "name": "French Vanilla Hot Chocolate",
        "price": "$2.49"
    },
    {
        "image": "images/hot/hot choclate.jpg",
        "name": "hot choclate",
        "price": "$5.49"
    },
    {
        "image": "images/hot/item_four.jpg",
        "name": "Cappuccino",
        "price": "$8.99"
    }
    ]

    itemShuffle(waffleObjects);
})

smoothies.addEventListener('click', () => {

    const waffleObjects = [{
        "image": "images/smoothie/French Toast Smoothie.jpg",
        "name": "French Toast Smoothie",
        "price": "$4.49"
    },
    {
        "image": "images/smoothie/French-Toast-Smoothie-2.webp",
        "name": "French-Toast",
        "price": "$3.99"
    },
    {
        "image": "images/smoothie/Green Smoothie - Un petit Oiseau dans la Cuisine.webp",
        "name": "Green Smoothie",
        "price": "$5.49"
    },
    {
        "image": "images/smoothie/Maple-Cinnamon-Blueberry-Smoothie-recipe-2038.jpg",
        "name": "Maple-Cinnamon-Blueberry",
        "price": "$7.99"
    },
    {
        "image": "images/smoothie/Strawberry Piña Colada Smoothie.jpg",
        "name": "Strawberry Piña Colada",
        "price": "$4.99"
    }
    ]

    itemShuffle(waffleObjects);
})


