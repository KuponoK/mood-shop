const itemsContainer = document.getElementById("items");
import data from "./data.js";

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


const cart = [];

function addItem(name, price) {
  const item = { name: name, price: price, qty: 1 };

  cart.push(item);
}

function showItems() {
  console.log(`You have ${cart.length} items in your cart`);
}

addItem("Apple", 0.99);

showItems();