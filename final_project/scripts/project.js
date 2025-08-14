
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const programsContainer = document.getElementById('programs-container');
if (programsContainer) {
  const programs = [
    { id: "beads", name: "Beads Making", image: "images/beads.jpg", category: "craft" },
    { id: "pastry", name: "Pastry Arts", image: "images/pastry.jpg", category: "culinary" },
    { id: "cctv", name: "CCTV Installation", image: "images/cctv.jpg", category: "tech" }
  ];

  window.filterPrograms = function(category) {
    programsContainer.innerHTML = '';
    const filtered = category === 'all'
      ? programs
      : programs.filter(p => p.category === category);

    filtered.forEach(p => {
      programsContainer.innerHTML += `
        <div class="card">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <h3>${p.name}</h3>
        </div>
      `;
      localStorage.setItem('lastViewedProgram', p.name);
    });
  };

  window.filterPrograms('all');
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const confirmation = document.getElementById('confirmation');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    localStorage.setItem('lastContactName', name);
    confirmation.textContent = `Thanks, ${name || 'guest'}! Your message has been sent.`;
    contactForm.reset();
  });
}

const menuButton = document.getElementById('menu');
const navLinks= document.querySelector('.nav-links');
menuButton.addEventListener('click',() => {
    navLinks.classList.toggle('open');
    menuButton.classList.toggle('open'); 
});