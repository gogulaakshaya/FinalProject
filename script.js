/* ==========================================
   KL E-COMMERCE STORE
========================================== */

const products = [

    {
        id: 1,
        name: "Men's Henley T-Shirt",
        price: 499,
        category: "T-Shirts",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
    },

    {
        id: 2,
        name: "Women's V-Neck T-Shirt",
        price: 399,
        category: "T-Shirts",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500"
    },

    {
        id: 3,
        name: "Classic Casual Shirt",
        price: 699,
        category: "Shirts",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"
    },

    {
        id: 4,
        name: "Premium Denim Jeans",
        price: 999,
        category: "Jeans",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"
    },

    {
        id: 5,
        name: "Elegant Women's Handbag",
        price: 1299,
        category: "Accessories",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },

    {
        id: 6,
        name: "Stylish Casual Top",
        price: 599,
        category: "T-Shirts",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500"
    },

    {
        id: 7,
        name: "Gold Plated Ring",
        price: 899,
        category: "Accessories",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500"
    },

    {
        id: 8,
        name: "Cotton Casual Shirt",
        price: 749,
        category: "Shirts",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500"
    },

    {
        id: 9,
        name: "Oversized Graphic T-Shirt",
        price: 549,
        category: "T-Shirts",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500"
    },

    {
        id: 10,
        name: "Formal Office Shirt",
        price: 899,
        category: "Shirts",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=500"
    },

    {
        id: 11,
        name: "Slim Fit Blue Jeans",
        price: 1099,
        category: "Jeans",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=500"
    },

    {
        id: 12,
        name: "Black Skinny Jeans",
        price: 1199,
        category: "Jeans",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
    },

    {
        id: 13,
        name: "Fashion Sunglasses",
        price: 699,
        category: "Accessories",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    },

    {
        id: 14,
        name: "Classic Wrist Watch",
        price: 1499,
        category: "Accessories",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500"
    },

    {
        id: 15,
        name: "Women's Summer Dress",
        price: 999,
        category: "T-Shirts",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500"
    },

    {
        id: 16,
        name: "Men's Polo T-Shirt",
        price: 649,
        category: "T-Shirts",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500"
    },

    {
        id: 17,
        name: "Linen Casual Shirt",
        price: 799,
        category: "Shirts",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=500"
    },

    {
        id: 18,
        name: "Ripped Fashion Jeans",
        price: 1299,
        category: "Jeans",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"
    },

    {
        id: 19,
        name: "Leather Shoulder Bag",
        price: 1599,
        category: "Accessories",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
    },

    {
        id: 20,
        name: "Minimalist Backpack",
        price: 1199,
        category: "Accessories",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },

    {
        id: 21,
        name: "Printed Summer T-Shirt",
        price: 449,
        category: "T-Shirts",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500"
    },

    {
        id: 22,
        name: "Premium White Shirt",
        price: 849,
        category: "Shirts",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=500"
    },

    {
        id: 23,
        name: "High Waist Blue Jeans",
        price: 1149,
        category: "Jeans",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500"
    },

    {
        id: 24,
        name: "Stylish Crossbody Bag",
        price: 1399,
        category: "Accessories",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500"
    }
    


];

/* ==========================================
   CART
========================================== */

let cart = [];

let currentCategory = "all";


/* ==========================================
   DISPLAY PRODUCTS
========================================== */

function displayProducts(list) {

    const container =
        document.getElementById("productContainer");

    container.innerHTML = "";


    if (list.length === 0) {

        container.innerHTML = `
            <div class="empty">
                😔 No products found
            </div>
        `;

        return;
    }


    list.forEach(function(product) {

        container.innerHTML += `

            <div class="product">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                >

                <div class="image-fallback">
                    🛍️
                </div>


                <span class="category">
                    ${product.category}
                </span>


                <h3>
                    ${product.name}
                </h3>


                <div class="rating">
                    ⭐ ${product.rating}
                </div>


                <div class="price">
                    ₹${product.price}
                </div>


                <button
                    onclick="addToCart(${product.id})"
                    title="Add to Cart">

                    +

                </button>

            </div>

        `;

    });

}


/* ==========================================
   ADD TO CART
========================================== */

function addToCart(id) {

    const product =
        products.find(function(item) {

            return item.id === id;

        });


    if (!product) {
        return;
    }


    cart.push(product);

    updateCart();

}


/* ==========================================
   UPDATE CART
========================================== */

function updateCart() {

    const container =
        document.getElementById("cartContainer");


    const totalElement =
        document.getElementById("cartTotal");


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty">

                🛒

                <br><br>

                Your cart is empty.

            </div>

        `;

        totalElement.innerText = "0";

        return;
    }


    container.innerHTML = "";

    let total = 0;


    cart.forEach(function(product, index) {

        total += product.price;


        container.innerHTML += `

            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.style.display='none'"
                >


                <div class="cart-item-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <p>
                        ₹${product.price}
                    </p>

                </div>


                <button
                    class="remove-btn"
                    onclick="removeFromCart(${index})">

                    Remove

                </button>

            </div>

        `;

    });


    totalElement.innerText =
        total.toLocaleString("en-IN");

}


/* ==========================================
   REMOVE FROM CART
========================================== */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


/* ==========================================
   SEARCH
========================================== */

document
    .getElementById("searchBox")
    .addEventListener("input", function() {

        const text =
            this.value.toLowerCase().trim();


        let result =
            products.filter(function(product) {

                return (

                    product.name
                        .toLowerCase()
                        .includes(text)

                    ||

                    product.category
                        .toLowerCase()
                        .includes(text)

                );

            });


        if (currentCategory !== "all") {

            result =
                result.filter(function(product) {

                    return (
                        product.category ===
                        currentCategory
                    );

                });

        }


        displayProducts(result);

    });



/* ==========================================
   PLACE ORDER
========================================== */

function placeOrder() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    let total = 0;


    cart.forEach(function(product) {

        total += product.price;

    });


    const orderId =
        "KLE" +
        Math.floor(
            10000 + Math.random() * 90000
        );


    const orderContainer =
        document.getElementById(
            "orderContainer"
        );


    orderContainer.innerHTML = `

        <div class="order-card">

            <h3>
                🎉 Order Placed Successfully!
            </h3>

            <p>
                Order ID:
                <strong>${orderId}</strong>
            </p>

            <p>
                Total Amount:
                <strong>₹${total}</strong>
            </p>

            <p>
                Status:
                <strong>Order Confirmed</strong>
            </p>

            <p>
                🚚 Expected delivery:
                3–5 working days
            </p>

        </div>

    `;


    cart = [];

    updateCart();

}

/* ==========================================
   CATEGORY FILTER
========================================== */

function filterCategory(category) {

    currentCategory = category;


    if (category === "all") {

        displayProducts(products);

        return;
    }


    const result =
        products.filter(function(product) {

            return product.category === category;

        });


    displayProducts(result);

}



/* ==========================================
   START WEBSITE
========================================== */

displayProducts(products);

updateCart();

/* ==============================
   LOGIN
============================== */

function login() {

    const email = prompt("Enter your email:");

    if (email) {
        alert("Login successful! Welcome back ❤️");
    }

}


/* ==============================
   REGISTER
============================== */

function register() {

    const name = prompt("Enter your name:");

    if (!name) {
        return;
    }

    const email = prompt("Enter your email:");

    if (!email) {
        return;
    }

    alert(
        "Registration successful! 🎉\nWelcome " + name
    );

}