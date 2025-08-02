const year = document.querySelector("#year");
const full = document. querySelector("#full")
const today = new Date();
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
year.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
full.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;

hambutton.addEventListener('click',() => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open'); 
});
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated:"2004, January, 11",
    area:1626,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Copenhagan Denmark",
    location: "Copenhagen, Denmark",
    dedicated:"2004, May, 23",
    area:2323,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-16169-main.jpg"
  },
  {
    templeName: "Manhattan New York",
    location: "Manhatten, New York",
    dedicated: "2002, June, 13",
    area: 1917,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-40080-main.jpg"
  }
];
createTempleCard(temples);
function createTempleCard(temples){
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label"> Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class= "label"> Area:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt",`{temple.templeName} Temple`);
        img.setAttribute("loading","lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".grid").appendChild(card);
    });
}

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = link.getAttribute("data-filter");
    applyFilter(filter);
  });
});

function applyFilter(filter) {
  let filteredTemples = [];

  switch (filter) {
    case "old":
      filteredTemples = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year < 1900;
      });
      break;
    case "new":
      filteredTemples = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year >= 2000;
      });
      break;
    case "large":
      filteredTemples = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filteredTemples = temples.filter(t => t.area < 10000);
      break;
    default:
      filteredTemples = temples; 
  }

  updateTempleCards(filteredTemples);
}

function updateTempleCards(filteredTemples) {
  const grid = document.querySelector(".grid");
  grid.innerHTML = ""; // Clear existing cards
  createTempleCard(filteredTemples); // Reuse your card builder
}
document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
