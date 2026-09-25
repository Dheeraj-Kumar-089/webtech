document.write(`
  <header class="site-header">
    <div><p class="eyebrow">IIEST, Shibpur</p><h1>Computer Science &amp; Technology</h1></div>
    <button class="print-button" type="button" onclick="window.print()">Print Page</button>
  </header>
  <main>
    <section class="intro" aria-labelledby="directory-title"><div><p class="eyebrow">Faculty directory</p><h2 id="directory-title">Meet the department</h2><p class="intro-copy">Explore faculty profiles, research interests, and official contact information.</p></div><label class="search-box" for="faculty-search"><span>Search faculty</span><input id="faculty-search" type="search" placeholder="Type a name..." autocomplete="off"></label></section>
    <section class="directory" aria-live="polite" aria-label="CST faculty cards"><div id="faculty-grid" class="faculty-grid"></div><p id="empty-state" class="empty-state" hidden>No faculty matches that search.</p></section>
  </main>
  <footer class="site-footer"><span>Computer Science &amp; Technology, IIEST Shibpur</span><span>Official information source: iiests.ac.in</span></footer>
`);

const facultyGrid = document.querySelector("#faculty-grid");
const searchInput = document.querySelector("#faculty-search");
const emptyState = document.querySelector("#empty-state");
const toSlug = (name) => name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const getFacultyTitle = (faculty) => faculty.highestQualification.toLowerCase().includes("ph.d") ? "Dr." : "Mr.";
const getFacultyDisplayName = (faculty) => `${getFacultyTitle(faculty)} ${faculty.name}`;

const createFacultyCard = (faculty, index) => {
  const card = document.createElement("article");
  card.className = "faculty-card";
  card.style.setProperty("--card-delay", `${Math.min(index, 12) * 45}ms`);
  const displayName = getFacultyDisplayName(faculty);
  card.innerHTML = `<img class="faculty-photo" src="${faculty.photograph}" alt="Photograph of ${displayName}" loading="lazy"><div class="card-content"><p class="card-designation">${faculty.designation}</p><h3>${displayName}</h3><p class="card-research">${faculty.researchAreas}</p><a class="primary-button card-button" href="profile.html?faculty=${encodeURIComponent(toSlug(faculty.name))}" target="_blank" rel="noopener">View Profile</a></div>`;
  return card;
};

const renderFaculty = (query = "") => {
  const normalizedQuery = query.trim().toLowerCase();
  const matches = window.facultyData.filter((faculty) => faculty.name.toLowerCase().includes(normalizedQuery));
  facultyGrid.replaceChildren(...matches.map(createFacultyCard));
  emptyState.hidden = matches.length !== 0;
};

searchInput.addEventListener("input", (event) => renderFaculty(event.target.value));
renderFaculty();
