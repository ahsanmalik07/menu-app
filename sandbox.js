var menu = [{
        name: "Fries",
        price: 15,
        details: "is really good",
        image: 'imgs/fries.jpg',
        category: "Breakfast"
    },

    {
        name: "Omlete",
        price: 30,
        details: "is really good",
        image: 'imgs/omlete.jpg',
        category: "Breakfast"
    },

    {
        name: "nihari",
        price: 50,
        details: "is really good",
        image: 'imgs/nihari.jpg',
        category: "Breakfast"
    },

    {
        name: "Club - Sandwich",
        price: 15,
        details: "is really good",
        image: 'imgs/images.jpg',
        category: "Breakfast"
    },

    {
        name: "Pizza",
        price: 15,
        details: "is really good",
        image: 'imgs/pizza.jpg',
        category: "Lunch"
    },

    {
        name: "nihari",
        price: 25,
        details: "is really good",
        image: 'imgs/nihari.jpg',
        category: "Dinner"
    },


    {
        name: "Biryani",
        price: 25,
        details: "is really good",
        image: 'imgs/Biryani.jpg',
        category: "Dinner"
    },

    {
        name: "Pizza",
        price: 15,
        details: "is really good",
        image: 'imgs/pizza.jpg',
        category: "Dinner"
    },

    {
        name: "roll-praths",
        price: 15,
        details: "is really good",
        image: 'imgs/pizza.jpeg',
        category: "Lunch"
    },

    {
        name: "Pizza",
        price: 15,
        details: "is really good",
        image: 'imgs/pizza.jpg',
        category: "Lunch"
    },

    {
        name: "chicken-karahi",
        price: 15,
        details: "is really good",
        image: 'imgs/chicken-karahi.jpg',
        category: "Lunch"
    },

    {
        name: "Mint Margarita",
        price: 15,
        details: "is really good",
        image: 'imgs/mint-marg.jpg',
        category: "Shakes"
    },

    {
        name: "Mango Shake",
        price: 15,
        details: "is really good",
        image: 'imgs/mango-shake.jpg',
        category: "Shakes"
    },

    {
        name: "Chocolate Shake",
        price: 15,
        details: "is really good",
        image: 'imgs/chock-shake.jpg',
        category: "Shakes"
    },

    {
        name: "Strawberry Shake",
        price: 100,
        details: "is really good",
        image: 'imgs/straw-shake.jpg',
        category: "Shakes"
    }


];

const allBtn = document.querySelector('#btn-1');
const btnPress = document.querySelectorAll('.btn-cat');
var menuItem = document.querySelector('.menu-container');

const addFoodItem = (item) => {

    const html = `
    <div class=" item-box container">
        <div class="row ">
            <div class="col-md-6 col-xs-6 text-right item-img">
                <img src=${item.image} alt="" class="rounded mx-auto d-block" style=" width: 200px; height: 200px; object-fit: cover;">
            </div>
            <div class="col-md-6 col-xs-6 item-info ">
                <h3>${item.name}</h3>
                <h4>${item.price}</h4>
                <p>${item.details}</p>
            </div>

        </div>
    </div>`;
    menuItem.innerHTML += html;
};


const getMenuItems = () => {
    menuItem.innerHTML = ``
    menu.forEach((item) => {
        addFoodItem(item)

    });
};

allBtn.addEventListener("click", (e) => {
    console.log(e)
    e.preventDefault();
    getMenuItems();
});

const loadCategory = (filterItem) => {
    console.log(filterItem)
    const xyz = menu.filter(food => food.category == filterItem)
    menuItem.innerHTML = ``
    xyz.forEach((item) => {
        addFoodItem(item)

    });
}

btnPress.forEach((btnPress) => {
        console.log(btnPress)
        btnPress.addEventListener("click", function(e) {
            console.log(e)
            loadCategory(e.target.textContent)

        })

    }


)