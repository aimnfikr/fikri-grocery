// Sample data for products
const products = {
  DIARY: [
    { name: "Milk", price: 3 },
    { name: "Eggs", price: 2 },
    { name: "Butter", price: 3 },
    { name: "Cheese", price: 4 },
    { name: "Yogurt", price: 1 },
  ],
  "MEAT/PROTEIN": [
    { name: "Tofu", price: 2 },
    { name: "Oily fish", price: 8 },
    { name: "Chicken", price: 3 },
    { name: "White fish", price: 5 },
  ],
  PRODUCE: [
    { name: "Carrots", price: 1 },
    { name: "Onions", price: 1 },
    { name: "Garlic", price: 0.5 },
  ],
  "CANNED & DRIED PRODUCE": [
    { name: "Soup", price: 1 },
    { name: "Pulses", price: 1 },
  ],
  BAKING: [
    { name: "Sugar", price: 2 },
    { name: "Baking powder", price: 2 },
    { name: "Flour", price: 2 },
    { name: "Vanilla extract", price: 3 },
  ],
  "CONDIMENTS/PRESERVES": [
    { name: "Salt", price: 1 },
    { name: "Pepper", price: 2 },
    { name: "Vinegar", price: 2 },
    { name: "Honey", price: 5 },
    { name: "Basil", price: 2 },
    { name: "Cinnamon", price: 2 },
    { name: "Ginger", price: 3 },
    { name: "Nutmeg", price: 4 },
  ],
  FREEZER: [
    { name: "Peas", price: 1 },
    { name: "Mixed vegetables", price: 2 },
    { name: "Fish fingers", price: 4 },
  ],
  "BREAD/PASTA/GRAINS": [
    { name: "Pasta", price: 1 },
    { name: "Rice", price: 2 },
    { name: "Bread", price: 2 },
    { name: "Cereal", price: 3 },
  ],
};


// Get references to form elements and the cart items list
const addToCartForm = document.getElementById("add-to-cart-form");
const categorySelect = document.getElementById("category");
const productSelect = document.getElementById("product");
const cartItemsList = document.getElementById("cart-items");
const checkoutButton = document.getElementById("checkout-button");

// Populate the products select based on the selected category
categorySelect.addEventListener("change", () => {
  const selectedCategory = categorySelect.value;
  const selectedProducts = products[selectedCategory];

  // Clear previous options
  productSelect.innerHTML = "";

  // Add new options based on the selected category
  selectedProducts.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = `${product.name} - $${product.price}`;
    productSelect.appendChild(option);
  });
});

// Initialize cartItems array
let cartItems = [];

// Function to handle adding items to the cart
function addToCart() {
  const selectedProduct = productSelect.value;
  const selectedCategory = categorySelect.value;
  const productPrice = products[selectedCategory].find(
    (product) => product.name === selectedProduct
  ).price;

  cartItems.push({ name: selectedProduct, price: productPrice });
  updateCartDisplay();
  updateTotalPrice();
}

// Function to update the cart display
function updateCartDisplay() {
  cartItemsList.innerHTML = "";
  cartItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(listItem);
  });
}

// Function to update the total price
function updateTotalPrice() {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  document.getElementById("total").textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to handle the checkout process
function checkout() {
  alert("Thank you for your purchase!");
  cartItems = [];
  updateCartDisplay();
  updateTotalPrice();
}

// Event listener for the "Add to Cart" button
document.getElementById("add-to-cart-button").addEventListener("click", addToCart);

// Event listener for the "Checkout" button
checkoutButton.addEventListener("click", checkout);
