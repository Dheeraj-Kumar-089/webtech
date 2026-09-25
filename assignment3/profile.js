const toSlug = (name) => name
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const slug = new URLSearchParams(window.location.search).get("faculty");
const faculty = window.facultyData.find((entry) => toSlug(entry.name) === slug);
const profileCard = document.querySelector("#profile-card");
const status = document.querySelector("#profile-status");
const getFacultyTitle = (entry) => entry.highestQualification.toLowerCase().includes("ph.d") ? "Dr." : "Mr.";
const getFacultyDisplayName = (entry) => `${getFacultyTitle(entry)} ${entry.name}`;


if (!faculty) {
  status.hidden = false;
  document.title = "Profile not found | CST IIEST";
} else {
  const displayName = getFacultyDisplayName(faculty);
  const photo = document.querySelector("#profile-photo");
  photo.src = faculty.photograph;
  photo.alt = `Photograph of ${displayName}`;
  document.querySelector("#profile-name").textContent = displayName;
  document.querySelector("#profile-designation").textContent = faculty.designation;

  const email = document.querySelector("#profile-email");
  email.href = `mailto:${faculty.email}`;
  email.textContent = faculty.email;

  document.querySelector("#profile-qualification").textContent = faculty.highestQualification;
  document.querySelector("#profile-subjects").textContent = faculty.subjectsTeachingCurrentSemester;
  document.querySelector("#profile-research").textContent = faculty.researchAreas;

  const officialProfile = document.querySelector("#official-profile");
  officialProfile.href = faculty.officialProfile;
  document.title = `${displayName} | CST IIEST`;
  profileCard.hidden = false;
}
