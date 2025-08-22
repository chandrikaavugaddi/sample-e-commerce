let cart = [];
let total = 0;

// Function to add items to cart
function addToCart(product, price) {
  cart.push({ product, price });
  total += price;

  // Update cart count and total
  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("cart-total").innerText = total;

  // Update cart details
  displayCart();
}

function displayCart() {
  let cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price}`;
    
    // Add remove button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);

  // Update UI
  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("cart-total").innerText = total;
  displayCart();
}
let cart = [];
let total = 0;

// Function to add items to cart
function addToCart(product, price) {
  cart.push({ product, price });
  total += price;

  // Update cart count and total
  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("cart-total").innerText = total;

  // Update cart details
  displayCart();
}

function displayCart() {
  let cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price}`;
    
    // Add remove button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);

  // Update UI
  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("cart-total").innerText = total;
  displayCart();
}
