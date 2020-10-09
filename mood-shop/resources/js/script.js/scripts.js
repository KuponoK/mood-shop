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
  console.log(img);
}