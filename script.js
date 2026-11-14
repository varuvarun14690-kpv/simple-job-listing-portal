const jobs = [
  {
    id: "product-designer",
    title: "Product Designer",
    company: "Northstar",
    initials: "N",
    logo: ["#e6f0df", "#41623b"],
    category: "Design",
    location: "New York, NY",
    type: "Full-time",
    workplace: "Hybrid",
    salary: "$110k – $145k",
    salaryValue: 145,
    posted: "2 days ago",
    description: "Help shape thoughtful digital experiences for a product used by teams around the world. You will work closely with product and engineering to turn complex problems into clear, useful interfaces.",
    responsibilities: ["Lead product design from early exploration through polished delivery.", "Partner with researchers and engineers to test and refine ideas.", "Build and maintain a consistent, accessible design system."],
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    company: "Goodside",
    initials: "g",
    logo: ["#f7e9d8", "#a55c2b"],
    category: "Engineering",
    location: "Remote",
    type: "Full-time",
    workplace: "Remote",
    salary: "$125k – $165k",
    salaryValue: 165,
    posted: "1 day ago",
    description: "Build fast, accessible interfaces that make everyday work feel a little easier. You will join a small, collaborative team that values craftsmanship and pragmatic problem-solving.",
    responsibilities: ["Ship user-facing features with a focus on quality and performance.", "Work across design and backend to deliver complete experiences.", "Help improve our frontend foundations and developer workflows."],
  },
  {
    id: "brand-marketer",
    title: "Brand Marketing Manager",
    company: "Daybreak",
    initials: "D",
    logo: ["#f9e9dc", "#bd7442"],
    category: "Marketing",
    location: "Austin, TX",
    type: "Full-time",
    workplace: "Hybrid",
    salary: "$90k – $120k",
    salaryValue: 120,
    posted: "3 days ago",
    description: "Tell a story people want to be part of. Shape our brand voice and bring it to life through campaigns, content, and moments that connect with our community.",
    responsibilities: ["Develop and deliver integrated brand campaigns.", "Collaborate with creative, product, and growth partners.", "Use research and performance insights to evolve our messaging."],
  },
  {
    id: "product-manager",
    title: "Senior Product Manager",
    company: "Commonplace",
    initials: "c",
    logo: ["#e7e5f5", "#5a5190"],
    category: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    workplace: "Hybrid",
    salary: "$140k – $180k",
    salaryValue: 180,
    posted: "4 days ago",
    description: "Own a meaningful product area from strategy to launch. Bring teams together around clear customer problems and help turn ambitious ideas into useful, measurable outcomes.",
    responsibilities: ["Set product direction and maintain a focused roadmap.", "Translate customer needs into clear opportunities and requirements.", "Partner with design, engineering, and go-to-market teams."],
  },
  {
    id: "people-ops",
    title: "People Operations Lead",
    company: "Morrow",
    initials: "M",
    logo: ["#f4e8f0", "#99527e"],
    category: "Operations",
    location: "Remote",
    type: "Full-time",
    workplace: "Remote",
    salary: "$95k – $125k",
    salaryValue: 125,
    posted: "5 days ago",
    description: "Create a welcoming, thoughtful employee experience as our team grows. This role brings together people programs, operations, and a healthy dose of care.",
    responsibilities: ["Build and improve people programs across the employee journey.", "Keep our people operations clear, consistent, and human.", "Partner with managers to strengthen a supportive team culture."],
  },
  {
    id: "visual-designer",
    title: "Visual Designer",
    company: "Fieldnotes",
    initials: "f",
    logo: ["#e6eef4", "#446b88"],
    category: "Design",
    location: "Chicago, IL",
    type: "Full-time",
    workplace: "On-site",
    salary: "$82k – $108k",
    salaryValue: 108,
    posted: "6 days ago",
    description: "Make the brand tangible across digital and physical touchpoints. We are looking for a curious visual thinker with a sharp eye and a love of simple, expressive design.",
    responsibilities: ["Create visual concepts and campaign assets across channels.", "Collaborate with writers and marketers on brand storytelling.", "Maintain quality and consistency across our visual identity."],
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    company: "Northstar",
    initials: "N",
    logo: ["#e6f0df", "#41623b"],
    category: "Engineering",
    location: "Remote",
    type: "Full-time",
    workplace: "Remote",
    salary: "$130k – $170k",
    salaryValue: 170,
    posted: "1 week ago",
    description: "Help build reliable, resilient services behind a product people depend on. You will tackle interesting scale challenges while keeping simplicity and maintainability in mind.",
    responsibilities: ["Design and operate dependable backend services and APIs.", "Work with product and infrastructure teams on system improvements.", "Contribute to code quality, observability, and engineering practices."],
  },
  {
    id: "growth-marketer",
    title: "Growth Marketing Associate",
    company: "Goodside",
    initials: "g",
    logo: ["#f7e9d8", "#a55c2b"],
    category: "Marketing",
    location: "Remote",
    type: "Full-time",
    workplace: "Remote",
    salary: "$72k – $96k",
    salaryValue: 96,
    posted: "1 week ago",
    description: "Help more of the right people discover a product they will love. Experiment across channels, learn quickly, and make growth feel helpful rather than noisy.",
    responsibilities: ["Plan and run experiments across acquisition channels.", "Analyze campaign results and share clear recommendations.", "Collaborate on content, launches, and lifecycle initiatives."],
  },
  {
    id: "product-analyst",
    title: "Product Analyst",
    company: "Commonplace",
    initials: "c",
    logo: ["#e7e5f5", "#5a5190"],
    category: "Product",
    location: "New York, NY",
    type: "Full-time",
    workplace: "Hybrid",
    salary: "$100k – $135k",
    salaryValue: 135,
    posted: "1 week ago",
    description: "Turn product data into a clearer picture of what people need. Your analysis will help teams make better decisions and build experiences that have a real impact.",
    responsibilities: ["Develop product metrics, dashboards, and useful analysis.", "Partner with teams to shape and evaluate experiments.", "Communicate findings in a clear, actionable way."],
  },
  {
    id: "operations-coordinator",
    title: "Operations Coordinator",
    company: "Daybreak",
    initials: "D",
    logo: ["#f9e9dc", "#bd7442"],
    category: "Operations",
    location: "Austin, TX",
    type: "Full-time",
    workplace: "On-site",
    salary: "$65k – $85k",
    salaryValue: 85,
    posted: "2 weeks ago",
    description: "Keep the details running smoothly so the whole team can do their best work. This is a hands-on role for an organized, resourceful, and people-minded operator.",
    responsibilities: ["Coordinate team operations and day-to-day logistics.", "Document and improve repeatable internal processes.", "Help create a warm, organized office and team experience."],
  },
  {
    id: "ux-researcher",
    title: "UX Researcher",
    company: "Fieldnotes",
    initials: "f",
    logo: ["#e6eef4", "#446b88"],
    category: "Design",
    location: "Remote",
    type: "Full-time",
    workplace: "Remote",
    salary: "$105k – $140k",
    salaryValue: 140,
    posted: "2 weeks ago",
    description: "Bring people’s real experiences into the room. Plan and conduct research that helps our teams ask better questions and make more confident product decisions.",
    responsibilities: ["Plan qualitative and quantitative research studies.", "Synthesize findings into memorable, practical insights.", "Partner with product and design throughout the product cycle."],
  },
  {
    id: "customer-success",
    title: "Customer Success Manager",
    company: "Morrow",
    initials: "M",
    logo: ["#f4e8f0", "#99527e"],
    category: "Operations",
    location: "Seattle, WA",
    type: "Full-time",
    workplace: "Hybrid",
    salary: "$88k – $115k",
    salaryValue: 115,
    posted: "2 weeks ago",
    description: "Build lasting partnerships with customers and help them get the most from the tools they use every day. Bring curiosity, follow-through, and a genuine care for their success.",
    responsibilities: ["Guide customers through onboarding and ongoing success plans.", "Understand customer goals and connect them with the right solutions.", "Share feedback with teams to continuously improve the experience."],
  },
];

const jobGrid = document.querySelector("#job-grid");
const searchInput = document.querySelector("#search-input");
const locationInput = document.querySelector("#location-input");
const resultsCount = document.querySelector("#results-count");
const emptyState = document.querySelector("#empty-state");
const savedCount = document.querySelector("#saved-count");
const sortSelect = document.querySelector("#sort-select");
const jobDialog = document.querySelector("#job-dialog");
const dialogContent = document.querySelector("#dialog-content");
const savedStorageKey = "workly-saved-jobs";

let activeCategory = "All roles";
let showSavedOnly = false;
let savedJobs = loadSavedJobs();

function loadSavedJobs() {
  try {
    const stored = JSON.parse(localStorage.getItem(savedStorageKey) || "[]");
    return Array.isArray(stored) ? stored.filter((id) => jobs.some((job) => job.id === id)) : [];
  } catch (error) {
    console.error("Could not read saved jobs from local storage.", error);
    return [];
  }
}

function saveJobs() {
  try {
    localStorage.setItem(savedStorageKey, JSON.stringify(savedJobs));
  } catch (error) {
    console.error("Could not save jobs to local storage.", error);
  }
}

function makeTag(text) {
  const tag = document.createElement("span");
  tag.className = "job-tag";
  tag.textContent = text;
  return tag;
}

function createJobCard(job) {
  const card = document.createElement("article");
  card.className = "job-card";

  const top = document.createElement("div");
  top.className = "card-top";
  const logo = document.createElement("div");
  logo.className = "company-logo";
  logo.textContent = job.initials;
  logo.style.backgroundColor = job.logo[0];
  logo.style.color = job.logo[1];
  const saveButton = document.createElement("button");
  saveButton.className = `save-button${savedJobs.includes(job.id) ? " saved" : ""}`;
  saveButton.type = "button";
  saveButton.setAttribute("aria-label", savedJobs.includes(job.id) ? `Remove ${job.title} from saved jobs` : `Save ${job.title}`);
  saveButton.setAttribute("aria-pressed", String(savedJobs.includes(job.id)));
  saveButton.textContent = savedJobs.includes(job.id) ? "♥" : "♡";
  saveButton.addEventListener("click", () => toggleSavedJob(job.id));
  top.append(logo, saveButton);

  const title = document.createElement("h3");
  title.textContent = job.title;
  const company = document.createElement("p");
  company.className = "company-name";
  company.textContent = job.company;
  const tags = document.createElement("div");
  tags.className = "job-tags";
  [job.category, job.location, job.workplace].forEach((tag) => tags.append(makeTag(tag)));
  const footer = document.createElement("div");
  footer.className = "card-footer";
  const salary = document.createElement("span");
  salary.className = "salary";
  salary.textContent = job.salary;
  const posted = document.createElement("span");
  posted.className = "posted";
  posted.textContent = job.posted;
  footer.append(salary, posted);

  const openButton = document.createElement("button");
  openButton.className = "view-job";
  openButton.type = "button";
  openButton.setAttribute("aria-label", `View ${job.title} at ${job.company}`);
  openButton.addEventListener("click", () => openJobDetails(job));
  card.append(top, title, company, tags, footer, openButton);
  return card;
}

function renderJobs() {
  const query = searchInput.value.trim().toLowerCase();
  const locationQuery = locationInput.value.trim().toLowerCase();
  let filteredJobs = jobs.filter((job) => {
    const matchesCategory = activeCategory === "All roles" || job.category === activeCategory;
    const matchesSaved = !showSavedOnly || savedJobs.includes(job.id);
    const searchable = `${job.title} ${job.company} ${job.category} ${job.location} ${job.workplace}`.toLowerCase();
    const matchesSearch = !query || searchable.includes(query);
    const matchesLocation = !locationQuery || `${job.location} ${job.workplace}`.toLowerCase().includes(locationQuery);
    return matchesCategory && matchesSaved && matchesSearch && matchesLocation;
  });

  if (sortSelect.value === "salary") {
    filteredJobs = [...filteredJobs].sort((a, b) => b.salaryValue - a.salaryValue);
  }

  jobGrid.replaceChildren(...filteredJobs.map(createJobCard));
  resultsCount.textContent = `Showing ${filteredJobs.length} ${filteredJobs.length === 1 ? "opportunity" : "opportunities"}${showSavedOnly ? " · saved" : ""}`;
  emptyState.hidden = filteredJobs.length > 0;
  jobGrid.hidden = filteredJobs.length === 0;
  savedCount.textContent = String(savedJobs.length);
  document.querySelector("#saved-toggle").setAttribute("aria-pressed", String(showSavedOnly));
  document.querySelector("#saved-toggle").classList.toggle("saved-active", showSavedOnly);
}

function toggleSavedJob(id) {
  savedJobs = savedJobs.includes(id) ? savedJobs.filter((savedId) => savedId !== id) : [...savedJobs, id];
  saveJobs();
  renderJobs();
}

function openJobDetails(job) {
  dialogContent.replaceChildren();
  const companyRow = document.createElement("div");
  companyRow.className = "dialog-company";
  const logo = document.createElement("div");
  logo.className = "company-logo";
  logo.textContent = job.initials;
  logo.style.backgroundColor = job.logo[0];
  logo.style.color = job.logo[1];
  const companyInfo = document.createElement("div");
  const companyName = document.createElement("strong");
  companyName.textContent = job.company;
  const location = document.createElement("p");
  location.textContent = `${job.location} · ${job.workplace}`;
  companyInfo.append(companyName, location);
  companyRow.append(logo, companyInfo);

  const title = document.createElement("h2");
  title.className = "dialog-title";
  title.id = "dialog-title";
  title.textContent = job.title;
  const tags = document.createElement("div");
  tags.className = "dialog-tags";
  [job.category, job.type, job.salary].forEach((tag) => tags.append(makeTag(tag)));
  const descriptionTitle = document.createElement("h3");
  descriptionTitle.className = "dialog-section-title";
  descriptionTitle.textContent = "About the role";
  const description = document.createElement("p");
  description.className = "dialog-description";
  description.textContent = job.description;
  const responsibilitiesTitle = document.createElement("h3");
  responsibilitiesTitle.className = "dialog-section-title";
  responsibilitiesTitle.textContent = "What you'll do";
  const list = document.createElement("ul");
  list.className = "dialog-description";
  job.responsibilities.forEach((responsibility) => {
    const item = document.createElement("li");
    item.textContent = responsibility;
    list.append(item);
  });
  const applyButton = document.createElement("button");
  applyButton.className = "button button-dark dialog-apply";
  applyButton.type = "button";
  applyButton.textContent = "Apply for this role ↗";
  applyButton.addEventListener("click", () => {
    applyButton.textContent = "Application interest noted ✓";
    applyButton.classList.add("confirmed");
    applyButton.disabled = true;
  });
  dialogContent.append(companyRow, title, tags, descriptionTitle, description, responsibilitiesTitle, list, applyButton);
  jobDialog.showModal();
}

document.querySelector("#search-button").addEventListener("click", renderJobs);
searchInput.addEventListener("input", renderJobs);
locationInput.addEventListener("input", renderJobs);
sortSelect.addEventListener("change", renderJobs);
document.querySelector("#saved-toggle").addEventListener("click", () => {
  showSavedOnly = !showSavedOnly;
  renderJobs();
  document.querySelector("#jobs").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#clear-filters").addEventListener("click", () => {
  searchInput.value = "";
  locationInput.value = "";
  activeCategory = "All roles";
  showSavedOnly = false;
  document.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.category === activeCategory));
  renderJobs();
});
document.querySelector("#empty-reset").addEventListener("click", () => {
  searchInput.value = "";
  locationInput.value = "";
  activeCategory = "All roles";
  showSavedOnly = false;
  document.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.category === activeCategory));
  renderJobs();
});
document.querySelector("#category-list").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-category]");
  if (!chip) return;
  activeCategory = chip.dataset.category;
  showSavedOnly = false;
  document.querySelectorAll(".category-chip").forEach((item) => item.classList.toggle("active", item === chip));
  renderJobs();
});
document.querySelectorAll(".hint-link").forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.query;
    locationInput.value = "";
    renderJobs();
    document.querySelector("#jobs").scrollIntoView({ behavior: "smooth" });
  });
});
document.querySelector("#dialog-close").addEventListener("click", () => jobDialog.close());
jobDialog.addEventListener("click", (event) => {
  if (event.target === jobDialog) jobDialog.close();
});
document.querySelector("#current-year").textContent = String(new Date().getFullYear());

renderJobs();
