const itemsContainer = document.getElementById("items");
import data from "./data.js";

const itemList = document.getElementById("item-list");
const cartQty = document.getElementById("cart-qty");
const cartTotal = document.getElementById("cart-total");

for (let i = 0; i < data.length; ++i) {
  let newDiv = document.createElement("div");
  newDiv.className = "item";

  let img = document.createElement("img");

  img.src = data[i].image;
  img.width = 300;
  img.width = 300;

  newDiv.appendChild(img);

  let desc = document.createElement("p");
  desc.innerText = data[i].desc;
  newDiv.appendChild(desc);

  let price = document.createElement("p");
  price.innerText = data[i].price;
  newDiv.appendChild(price);

  let button = document.createElement("button");
  button.innerText = data[i].name;

  button.dataset.price = data[i].price;
  button.innerHTML = "Add to Cart";
  newDiv.appendChild(button);

  itemsContainer.appendChild(newDiv);
}

const all_items_button = Array.from(document.querySelectorAll("button"));

all_items_button.forEach((elt) =>
  elt.addEventListener("click", () => {
    addItem(elt.getAttribute("id"), elt.getAttribute("data-price"));
    showItems();
  })
);

const cart = [];

function addItem(name, price) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].qty++;
      return;
    }
  }

  const item = { name, price, qty: 1 };
  cart.push(item);
}

function showItems() {
  const qty = getQty();
  cartQty.innerHTML = `You have ${qty} items in your cart`;

  let itemStr = "";
  for (let i = 0; i < cart.length; i++) {
    const { name, price, qty } = cart[i];
    itemStr += `<li>${name} $${price} x ${qty} = ${qty * price}
      </li>`;
  }
  itemList.innerHTML = itemStr;

  const total = getTotal();
  cartTotal.innerHTML = `Total in cart: $${total}`;
}

function getQty() {
  let qty = 0;
  for (let i = 0; i < cart.length; i++) {
    qty += cart[i].qty;
  }
  return qty;
}

function getTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].qty;
  }
  return total.toFixed(2);
}

function removeItem(name, qty = 0) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      if (qty > 0) {
        cart[i].qty -= qty;
      }
      if (cart[i].qty < 1 || qty === 0) {
        cart.splice(i, 1);
      }
      return;
    }
  }
}

showItems();