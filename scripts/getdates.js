const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
full.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;
