const solutions = [
  {
    firstName: "Upper",
    lastName: "Creators",
    role: "Community Manager",
    tagline: "Contenido que detiene el scroll",
    description:
      "Estrategia, creatividad y producción audiovisual para redes sociales, marcas y eventos.",
    tags: ["Redes sociales", "Stop motion", "Video corporativo", "Estrategia"],
    colors: { c1: "#f5b544", c2: "#e2703a" },
    url: "https://uppercreators.com/",
    cta: "Visitar Upper Creators",
    socials: [
      { icon: "instagram", label: "Instagram", handle: "@uppercreators", url: "https://www.instagram.com/uppercreators" },
      { icon: "whatsapp", label: "WhatsApp", handle: "Cotizar", url: "https://wa.me/56942709831" },
    ],
  },
  {
    firstName: "Technology",
    lastName: "Group",
    role: "Ventas Online",
    tagline: "Catálogo digital y atención directa",
    description:
      "Tienda online de iluminación LED, material eléctrico y seguridad, con ventas por WhatsApp y envíos a toda Venezuela.",
    tags: ["E-commerce", "Catálogo", "WhatsApp", "Envíos"],
    colors: { c1: "#4cc9f0", c2: "#4361ee" },
    url: "https://technologygroup.vercel.app/",
    cta: "Visitar Technology Group",
    socials: [
      { icon: "instagram", label: "Instagram", handle: "@technologygroupac", url: "https://www.instagram.com/technologygroupac/" },
      { icon: "whatsapp", label: "WhatsApp", handle: "Asesoría", url: "https://wa.me/584226382165" },
      { icon: "web", label: "Sitio web", handle: "Catálogo", url: "https://technologygroup.vercel.app/" },
    ],
  },
  {
    firstName: "Nuestro",
    lastName: "Portafolio",
    role: "Diseño & Desarrollo",
    tagline: "Web · Apps · Tarjetas",
    description:
      "Próximamente: proyectos de páginas web, aplicaciones, diseño gráfico y tarjetas de presentación digitales.",
    tags: ["Páginas web", "Apps", "Diseño", "Tarjetas"],
    colors: { c1: "#b14aff", c2: "#e040fb" },
    url: "",
    cta: "Portafolio próximamente",
    socials: [
      { icon: "whatsapp", label: "WhatsApp", handle: "Contacto", url: "https://wa.me/584226382165" },
      { icon: "web", label: "Sitio web", handle: "Próximamente", url: "" },
    ],
  },
];

const ICONS = {
  instagram:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.6V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.4H7.7V13h2.6v8h3.2z"/></svg>',
  tiktok:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 2h-3v13.1a2.6 2.6 0 1 1-2.2-2.6v-3a5.6 5.6 0 1 0 5.2 5.6V8.9a6.6 6.6 0 0 0 3.6 1.1V7a3.7 3.7 0 0 1-3.6-3.7V2z"/></svg>',
  whatsapp:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm5.43 12.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"/></svg>',
  web:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>',
};

const menu = document.getElementById("menu");
const card = document.getElementById("card");
const backBtn = document.getElementById("backBtn");
const socialsEl = document.getElementById("socials");
const ctaBtn = document.getElementById("ctaBtn");
const ctaText = document.getElementById("ctaText");

const field = (n) => document.querySelector(`[data-field="${n}"]`);
const initials = (s) => (s.firstName[0] + s.lastName[0]).toUpperCase();

function buildMenu() {
  menu.innerHTML = solutions
    .map((s, i) => {
      const c1 = s.colors.c1, c2 = s.colors.c2;
      return `
      <button class="mnu-btn" data-index="${i}" style="--c1:${c1};--c2:${c2}">
        <span class="mnu-avatar">${initials(s)}</span>
        <div class="mnu-text">
          <span class="mnu-name">${s.firstName} ${s.lastName}</span>
          <span class="mnu-role">${s.role}</span>
        </div>
        <span class="mnu-arrow">→</span>
      </button>`;
    })
    .join("");
}

function renderBack(s) {
  document.documentElement.style.setProperty("--c1", s.colors.c1);
  document.documentElement.style.setProperty("--c2", s.colors.c2);

  field("role").textContent = s.role;
  field("avatar").textContent = initials(s);
  field("firstName").textContent = s.firstName;
  field("lastName").textContent = s.lastName;
  field("tagline").textContent = s.tagline;
  field("description").textContent = s.description;
  field("tags").innerHTML = s.tags.map(t => `<span>${t}</span>`).join("");

  socialsEl.innerHTML = s.socials
    .map(social => social.url
      ? `<li><a href="${social.url}" target="_blank" rel="noopener">
          ${ICONS[social.icon]}
          <span>${social.label}</span>
          <span class="handle">${social.handle}</span>
        </a></li>`
      : `<li><span class="social-off">
          ${ICONS[social.icon]}
          <span>${social.label}</span>
          <span class="handle">${social.handle}</span>
        </span></li>`)
    .join("");

  ctaText.textContent = s.cta;
  if (s.url) {
    ctaBtn.href = s.url;
    ctaBtn.classList.remove("is-disabled");
    ctaBtn.removeAttribute("aria-disabled");
    ctaBtn.setAttribute("target", "_blank");
  } else {
    ctaBtn.removeAttribute("href");
    ctaBtn.classList.add("is-disabled");
    ctaBtn.setAttribute("aria-disabled", "true");
  }
}

function showFront() {
  card.classList.remove("is-flipped");
}

function showBack(i) {
  renderBack(solutions[i]);
  card.classList.add("is-flipped");
}

menu.addEventListener("click", (e) => {
  if (card.classList.contains("is-flipped")) return;
  const btn = e.target.closest(".mnu-btn");
  if (!btn) return;
  showBack(Number(btn.dataset.index));
});

backBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  showFront();
});

card.addEventListener("click", (e) => {
  if (e.target.closest("a, button")) return;
  if (e.target.closest(".menu")) return;
  card.classList.toggle("is-flipped");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") showFront();
});

buildMenu();
renderBack(solutions[0]);
