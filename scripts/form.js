// Footer Date
const year = document.querySelector("#year");
const full = document.querySelector("#full");
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
full.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat("en-US", {
  dateStyle: "full"
}).format(today)}</span>`;

// Populate Product Select
const products = [
  { id: "p001", name: "Smart Thermostat" },
  { id: "p002", name: "Security Camera" },
  { id: "p003", name: "Smart Light Bulb" }
];

const select = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  select.appendChild(option);
});