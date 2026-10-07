/* ==========================================
   KL E-COMMERCE STORE - SCRIPT
========================================== */

/* ---------- USERS ---------- */
let users = JSON.parse(localStorage.getItem("users")) || [];

// Create demo customer accounts and one separate admin account.
const demoAccounts = [
    {
        name: "Akshaya",
        email: "gogulaakshaya1@gmail.com",
        password: "admin123",
        role: "user"
    },
    
    {
        name: "Admin",
        email: "admin@klecommerce.com",
        password: "admin123",
        role: "admin"
    }
];

demoAccounts.forEach(account => {

    const exists = users.some(
        user =>
            user.email.toLowerCase() ===
            account.email.toLowerCase()
    );

    if (!exists) {
        users.push(account);
    }
});

localStorage.setItem("users", JSON.stringify(users));


function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}


function getCurrentUser() {
    return JSON.parse(
        localStorage.getItem("currentUser")
    );
}


/* ==========================================
   PRODUCTS
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
        name: "Avocado Facial Cream",
        price: 749,
        category: "Skincare",
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
        category: "Dresses",
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

let currentCategory = {
    guest: "all",
    user: "all"
};


/* ==========================================
   PAGE NAVIGATION
========================================== */

function hideAllPages() {

    document
        .querySelectorAll(".page-section")
        .forEach(page => {

            page.style.display = "none";

        });
}


function showPage(page) {

    const currentUser = getCurrentUser();

    hideAllPages();


    /* HOME */

    if (page === "home") {

        if (currentUser) {

            if (currentUser.role === "admin") {

                window.location.hash = "admin";

                return;
            }

            showUserHome();

        } else {

            showGuestHome();

        }

        window.scrollTo(0, 0);

        return;
    }


    /* USER HOME */

    if (page === "user-home") {

        if (
            !currentUser ||
            currentUser.role !== "user"
        ) {

            showGuestHome();

            return;
        }

        showUserHome();

        window.location.hash = "home";

        return;
    }


    /* ADMIN */

    if (page === "admin") {

        if (
            !currentUser ||
            currentUser.role !== "admin"
        ) {

            showPage("admin-login");

            return;
        }

        document.getElementById(
            "admin-page"
        ).style.display = "block";

        loadAdminDashboard();

        window.scrollTo(0, 0);

        return;
    }


    const element =
        document.getElementById(
            page + "-page"
        );

    if (element) {

        element.style.display = "block";

    }

    window.scrollTo(0, 0);
}


/* ==========================================
   GUEST HOME
========================================== */

function showGuestHome() {

    hideAllPages();

    document.getElementById(
        "guest-home-page"
    ).style.display = "block";

    displayProducts(
        products,
        "guest"
    );

    window.scrollTo(0, 0);
}


/* ==========================================
   USER HOME
========================================== */

function showUserHome() {

    const user = getCurrentUser();

    if (
        !user ||
        user.role !== "user"
    ) {

        showGuestHome();

        return;
    }

    hideAllPages();

    document.getElementById(
        "user-home-page"
    ).style.display = "block";


    document.getElementById(
        "userWelcome"
    ).textContent =
        `Welcome back, ${user.name}!`;


    document.getElementById(
        "userNameDisplay"
    ).textContent =
        `👤 ${user.name}`;


    displayProducts(
        products,
        "user"
    );

    updateCart();

    window.scrollTo(0, 0);
}


/* ==========================================
   ROUTING
========================================== */

function routePage() {

    const route =
        window.location.hash
            .replace("#", "")
            .toLowerCase();

    const currentUser =
        getCurrentUser();


    if (route === "login") {

        showPage("login");

    }

    else if (route === "register") {

        showPage("register");

    }

    else if (route === "admin-login") {

        showPage("admin-login");

    }

    else if (route === "admin") {

        if (
            currentUser &&
            currentUser.role === "admin"
        ) {

            showPage("admin");

        } else {

            showPage("admin-login");

        }

    }

    else if (route === "forgot-password") {

        showPage("login");

        showForgotPassword();

    }

    else {

        showPage("home");

    }
}


window.addEventListener(
    "hashchange",
    routePage
);


/* ==========================================
   DISPLAY PRODUCTS
========================================== */

function displayProducts(list, type) {

    const container =
        document.getElementById(
            type === "guest"
                ? "guestProductContainer"
                : "userProductContainer"
        );


    if (!container) return;


    container.innerHTML = "";


    if (list.length === 0) {

        container.innerHTML = `
            <div class="empty">
                😔 No products found.
            </div>
        `;

        return;
    }


    list.forEach(product => {

        const action =
            type === "guest"

                ?

                `
                <button
                    class="login-to-buy"
                    onclick="showPage('login')">
                    Login to Buy
                </button>
                `

                :

                `
                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
                `;


        container.innerHTML += `

            <div class="product-card">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="
                        this.src=
                        'https://via.placeholder.com/500x500?text=Product'
                    "
                >

                <span class="category-tag">
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

                ${action}

            </div>

        `;
    });
}


/* ==========================================
   SEARCH / FILTER
========================================== */

function filterProducts(
    category,
    type
) {

    currentCategory[type] =
        category;

    const searchId =
        type === "guest"
            ? "guestSearchBox"
            : "userSearchBox";


    const text =
        document
            .getElementById(searchId)
            ?.value
            .toLowerCase() || "";


    applyFilter(
        type,
        text
    );
}


function searchProducts(type) {

    const searchId =
        type === "guest"
            ? "guestSearchBox"
            : "userSearchBox";


    const text =
        document
            .getElementById(searchId)
            ?.value
            .toLowerCase() || "";


    applyFilter(
        type,
        text
    );
}


function applyFilter(
    type,
    text
) {

    let result = products;

    const category =
        currentCategory[type];


    if (category !== "all") {

        result =
            result.filter(
                product =>
                    product.category ===
                    category
            );

    }


    if (text) {

        result =
            result.filter(product =>

                product.name
                    .toLowerCase()
                    .includes(text)

                ||

                product.category
                    .toLowerCase()
                    .includes(text)

            );

    }


    displayProducts(
        result,
        type
    );
}


/* ==========================================
   CART
========================================== */

function addToCart(id) {

    const user =
        getCurrentUser();


    if (
        !user ||
        user.role !== "user"
    ) {

        showPage("login");

        return;
    }


    const product =
        products.find(
            item =>
                item.id === id
        );


    if (!product) return;


    cart.push(product);

    updateCart();
}


function updateCart() {

    const container =
        document.getElementById(
            "cartContainer"
        );

    const totalElement =
        document.getElementById(
            "cartTotal"
        );


    if (
        !container ||
        !totalElement
    ) return;


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty">

                🛒

                <br><br>

                Your cart is empty.

            </div>

        `;

        totalElement.textContent =
            "0";

        return;
    }


    let total = 0;

    container.innerHTML = "";


    cart.forEach(
        (product, index) => {

            total += product.price;


            container.innerHTML += `

                <div class="cart-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div>

                        <h3>
                            ${product.name}
                        </h3>

                        <p>
                            ₹${product.price}
                        </p>

                    </div>

                    <button
                        onclick="
                            removeFromCart(${index})
                        ">

                        Remove

                    </button>

                </div>

            `;
        }
    );


    totalElement.textContent =
        total.toLocaleString(
            "en-IN"
        );
}


function removeFromCart(index) {

    cart.splice(
        index,
        1
    );

    updateCart();
}


/* ==========================================
   PLACE ORDER
========================================== */

function placeOrder() {

    const user =
        getCurrentUser();


    if (
        !user ||
        user.role !== "user"
    ) {

        showPage("login");

        return;
    }


    if (cart.length === 0) {

        alert(
            "Your cart is empty!"
        );

        return;
    }


    const total =
        cart.reduce(
            (
                sum,
                product
            ) =>
                sum + product.price,
            0
        );


    const orderId =
        "KLE" +
        Math.floor(
            10000 +
            Math.random() *
            90000
        );


    const order = {

        id: orderId,

        customer:
            user.name,

        email:
            user.email,

        total:
            total,

        status:
            "Order Confirmed",

        date:
            new Date()
                .toLocaleString()

    };


    const orders =
        JSON.parse(
            localStorage.getItem(
                "orders"
            )
        ) || [];


    orders.push(order);


    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );


    document.getElementById(
        "orderContainer"
    ).innerHTML = `

        <div class="order-card">

            <h3>
                🎉 Order Placed Successfully!
            </h3>

            <p>
                Order ID:
                <strong>
                    ${orderId}
                </strong>
            </p>

            <p>
                Total Amount:
                <strong>
                    ₹${total}
                </strong>
            </p>

            <p>
                Status:
                <strong>
                    Order Confirmed
                </strong>
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
   USER LOGIN
========================================== */

document
    .getElementById("loginForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document
                    .getElementById(
                        "email"
                    )
                    .value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById(
                        "password"
                    )
                    .value;


            const message =
                document.getElementById(
                    "loginMessage"
                );


            const allUsers =
                getUsers();


            const user =
                allUsers.find(
                    item =>
                        item.email
                            .toLowerCase() ===
                        email
                );


            if (!user) {

                message.textContent =
                    "❌ Email is not registered.";

                return;
            }


            if (user.role === "admin") {

                message.textContent =
                    "❌ This is an admin account. Use Admin Login.";

                return;
            }


            if (
                user.password !==
                password
            ) {

                message.textContent =
                    "❌ Incorrect password.";

                return;
            }


            localStorage.setItem(
                "currentUser",
                JSON.stringify({

                    name:
                        user.name,

                    email:
                        user.email,

                    role:
                        "user"

                })
            );


            this.reset();

            message.textContent =
                "";


            window.location.hash =
                "home";
        }
    );


/* ==========================================
   ADMIN LOGIN
========================================== */

document
    .getElementById(
        "adminLoginForm"
    )
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document
                    .getElementById(
                        "adminEmail"
                    )
                    .value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById(
                        "adminPassword"
                    )
                    .value;


            const message =
                document.getElementById(
                    "adminLoginMessage"
                );


            const allUsers =
                getUsers();


            const user =
                allUsers.find(
                    item =>
                        item.email
                            .toLowerCase() ===
                        email
                );


            if (!user) {

                message.textContent =
                    "❌ Admin account not found.";

                return;
            }


            if (
                user.role !==
                "admin"
            ) {

                message.textContent =
                    "❌ This account is not an admin account.";

                return;
            }


            if (
                user.password !==
                password
            ) {

                message.textContent =
                    "❌ Incorrect admin password.";

                return;
            }


            localStorage.setItem(
                "currentUser",
                JSON.stringify({

                    name:
                        user.name,

                    email:
                        user.email,

                    role:
                        "admin"

                })
            );


            this.reset();

            message.textContent =
                "";


            window.location.hash =
                "admin";
        }
    );


/* ==========================================
   REGISTER
========================================== */

document
    .getElementById(
        "registerForm"
    )
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                    .getElementById(
                        "name"
                    )
                    .value
                    .trim();


            const email =
                document
                    .getElementById(
                        "regEmail"
                    )
                    .value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById(
                        "regPassword"
                    )
                    .value;


            const confirmPassword =
                document
                    .getElementById(
                        "confirmPassword"
                    )
                    .value;


            const message =
                document.getElementById(
                    "registerMessage"
                );


            if (
                password !==
                confirmPassword
            ) {

                message.textContent =
                    "❌ Passwords do not match.";

                return;
            }


            const allUsers =
                getUsers();


            if (
                allUsers.some(
                    user =>
                        user.email
                            .toLowerCase() ===
                        email
                )
            ) {

                message.textContent =
                    "❌ Email already registered.";

                return;
            }


            allUsers.push({

                name:
                    name,

                email:
                    email,

                password:
                    password,

                role:
                    "user"

            });


            localStorage.setItem(
                "users",
                JSON.stringify(allUsers)
            );


            alert(
                "Registration successful! Please login."
            );


            this.reset();

            message.textContent =
                "";


            window.location.hash =
                "login";
        }
    );


/* ==========================================
   FORGOT PASSWORD
========================================== */

function showForgotPassword() {

    document.querySelector(
        "#login-page .auth-card:not(.small-card)"
    ).style.display = "none";


    document.getElementById(
        "forgot-password"
    ).style.display = "block";
}


function showLogin() {

    document.querySelector(
        "#login-page .auth-card:not(.small-card)"
    ).style.display = "block";


    document.getElementById(
        "forgot-password"
    ).style.display = "none";
}


document
    .getElementById(
        "resetForm"
    )
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document
                    .getElementById(
                        "resetEmail"
                    )
                    .value
                    .trim()
                    .toLowerCase();


            const newPassword =
                document
                    .getElementById(
                        "newPassword"
                    )
                    .value;


            const confirmPassword =
                document
                    .getElementById(
                        "confirmResetPassword"
                    )
                    .value;


            const message =
                document.getElementById(
                    "resetMessage"
                );


            const allUsers =
                getUsers();


            if (
                newPassword !==
                confirmPassword
            ) {

                message.textContent =
                    "❌ Passwords do not match.";

                return;
            }


            const index =
                allUsers.findIndex(
                    user =>
                        user.email
                            .toLowerCase() ===
                        email
                );


            if (index === -1) {

                message.textContent =
                    "❌ Email is not registered.";

                return;
            }


            if (
                allUsers[index].role ===
                "admin"
            ) {

                message.textContent =
                    "❌ Admin password cannot be reset here.";

                return;
            }


            allUsers[index].password =
                newPassword;


            localStorage.setItem(
                "users",
                JSON.stringify(
                    allUsers
                )
            );


            message.textContent =
                "✅ Password reset successfully!";


            this.reset();
        }
    );


/* ==========================================
   SHOW / HIDE PASSWORD
========================================== */

function togglePassword() {

    const input =
        document.getElementById(
            "password"
        );


    input.type =
        input.type === "password"
            ? "text"
            : "password";
}


/* ==========================================
   ADMIN DASHBOARD
========================================== */

function loadAdminDashboard() {

    const admin =
        getCurrentUser();


    if (
        !admin ||
        admin.role !== "admin"
    ) {

        window.location.hash =
            "admin-login";

        return;
    }


    document.getElementById(
        "adminWelcome"
    ).textContent =
        `Welcome, ${admin.name} (${admin.email})`;


    /* USERS */

    const allUsers =
        getUsers().filter(
            user =>
                user.role === "user"
        );


    const usersList =
        document.getElementById(
            "usersList"
        );


    usersList.innerHTML =
        allUsers.length
            ? ""
            : `
                <div class="empty">
                    No registered users yet.
                </div>
            `;


    allUsers.forEach(
        user => {

            usersList.innerHTML += `

                <div class="admin-item">

                    <strong>
                        ${user.name}
                    </strong>

                    <br>

                    Email:
                    ${user.email}

                </div>

            `;
        }
    );


    /* ORDERS */

    const orders =
        JSON.parse(
            localStorage.getItem(
                "orders"
            )
        ) || [];


    const ordersList =
        document.getElementById(
            "ordersList"
        );


    ordersList.innerHTML =
        orders.length
            ? ""
            : `
                <div class="empty">
                    No customer orders yet.
                </div>
            `;


    orders.forEach(
        order => {

            ordersList.innerHTML += `

                <div class="admin-item">

                    <strong>
                        Order ID:
                        ${order.id}
                    </strong>

                    <br>

                    Customer:
                    ${order.customer}

                    <br>

                    Email:
                    ${order.email}

                    <br>

                    Total:
                    ₹${order.total}

                    <br>

                    Status:
                    ${order.status}

                    <br>

                    Date:
                    ${order.date}

                </div>

            `;
        }
    );
}


/* ==========================================
   PAGE NAVIGATION
========================================== */

function hideAllPages() {

    document
        .querySelectorAll(".page-section")
        .forEach(page => {
            page.style.display = "none";
        });
}


function showPage(page) {

    const currentUser = getCurrentUser();

    hideAllPages();


    /* ---------- GUEST / HOME ---------- */

    if (page === "home") {

        if (
            currentUser &&
            currentUser.role === "user"
        ) {
            showUserHome();
            return;
        }

        if (
            currentUser &&
            currentUser.role === "admin"
        ) {
            showPage("admin");
            return;
        }

        showGuestHome();

        return;
    }


    /* ---------- USER HOME ---------- */

    if (page === "user-home") {

        if (
            !currentUser ||
            currentUser.role !== "user"
        ) {
            showGuestHome();
            return;
        }

        showUserHome();

        return;
    }


    /* ---------- ADMIN ---------- */

    if (page === "admin") {

        if (
            !currentUser ||
            currentUser.role !== "admin"
        ) {
            showPage("admin-login");
            return;
        }

        document.getElementById(
            "admin-page"
        ).style.display = "block";

        loadAdminDashboard();

        window.scrollTo(0, 0);

        return;
    }


    /* ---------- OTHER PAGES ---------- */

    const element =
        document.getElementById(
            page + "-page"
        );

    if (element) {

        element.style.display = "block";

    }

    window.scrollTo(0, 0);
}


/* ==========================================
   USER HOME
========================================== */

function showUserHome() {

    const user = getCurrentUser();

    if (
        !user ||
        user.role !== "user"
    ) {
        showGuestHome();
        return;
    }

    hideAllPages();

    document.getElementById(
        "user-home-page"
    ).style.display = "block";


    const welcome =
        document.getElementById(
            "userWelcome"
        );

    if (welcome) {

        welcome.textContent =
            `Welcome back, ${user.name}!`;

    }


    const userName =
        document.getElementById(
            "userNameDisplay"
        );

    if (userName) {

        userName.textContent =
            `👤 ${user.name}`;

    }


    displayProducts(
        products,
        "user"
    );

    updateCart();

    window.scrollTo(0, 0);
}


/* ==========================================
   GUEST HOME
========================================== */

function showGuestHome() {

    hideAllPages();

    document.getElementById(
        "guest-home-page"
    ).style.display = "block";

    displayProducts(
        products,
        "guest"
    );

    window.scrollTo(0, 0);
}


/* ==========================================
   LOGOUT
========================================== */

function logout() {

    // Remove the logged-in account
    localStorage.removeItem(
        "currentUser"
    );

    // Empty user's cart
    cart = [];

    // Immediately show guest home
    showGuestHome();

    // Change URL without triggering
    // the old login state again
    history.replaceState(
        null,
        "",
        "#home"
    );

    window.scrollTo(0, 0);
}


/* ==========================================
   START WEBSITE
========================================== */

routePage();