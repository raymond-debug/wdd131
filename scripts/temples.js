const year = document.querySelector("#year");
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
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show'); 
});
