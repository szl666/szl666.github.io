// ── Theme Toggle ─────────────────────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeLabel();

function updateThemeLabel() {
    const label = document.querySelector('.theme-label');
    if (label) {
        label.textContent = html.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.add('theme-transitioning');
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeLabel();
        setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 500);
    });
}

// ── Mobile Menu Toggle ───────────────────────────────────────────────────────
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');
if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

// ── Smooth Scroll ────────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') { e.preventDefault(); return; }
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ── Back to Top ──────────────────────────────────────────────────────────────
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ── Navbar Scroll Effect ─────────────────────────────────────────────────────
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ── Scroll Animations ────────────────────────────────────────────────────────
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
}

// ── Config Population ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    if (typeof USER_CONFIG === 'undefined') return;
    const cfg = USER_CONFIG;

    populateSimpleFields(cfg);
    populateHeroBio(cfg);
    populateHeroStats(cfg);
    populateHeroLinks(cfg);
    populateHonors(cfg);
    populatePublications(cfg);
    populateKeyResearch(cfg);
    populateTalks(cfg);
    populateExperience(cfg);
    populateExpertise(cfg);
    populateHobbies(cfg);
    populateContact(cfg);
    fetchScholarStats(cfg);
    initScrollAnimations();
});

function populateSimpleFields(cfg) {
    document.querySelectorAll('[data-config]').forEach(el => {
        const key = el.dataset.config;
        if (key === 'role_university') {
            el.textContent = `${cfg.role} at ${cfg.university}`;
        } else if (cfg[key] !== undefined) {
            el.textContent = cfg[key];
        }
    });
    if (cfg.name) document.title = `${cfg.name} | Academic Homepage`;
    if (cfg.photo) {
        const av = document.querySelector('.image-placeholder, .hero-photo');
        if (av) {
            av.innerHTML = `<img src="${cfg.photo}" alt="${cfg.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`;
        }
    }
}

function populateHeroBio(cfg) {
    const el = document.getElementById('hero-bio');
    if (!el) return;
    let bioHtml = `<p>${cfg.bio}</p>`;
    if (cfg.bioExtra) bioHtml += `<p>${cfg.bioExtra}</p>`;
    if (cfg.bioExtra2) bioHtml += `<p>${cfg.bioExtra2}</p>`;
    el.innerHTML = bioHtml;
}

function populateHeroStats(cfg) {
    const el = document.getElementById('hero-stats');
    if (!el || !cfg.stats) return;
    el.innerHTML = cfg.stats.map(s => `
        <div class="stat">
            <span class="stat-number" ${s.id ? `id="${s.id}"` : ''}>${s.value}</span>
            <span class="stat-label">${s.label}</span>
        </div>
    `).join('');
}

function populateHeroLinks(cfg) {
    const el = document.getElementById('hero-links');
    if (!el || !cfg.links) return;

    const iconMap = {
        scholar: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>`,
        github: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
        researchgate: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M19.586 0c-1.005 0-2.003.658-2.003 2.32 0 1.406.756 2.06 1.632 2.258v.046c-.876.198-1.252.872-1.252 1.69 0 1.544 1.085 2.186 2.175 2.186.324 0 .63-.044.887-.132v.044c-.257.088-.414.374-.414.704 0 .484.347.792.905.792h.456c1.047 0 1.852.572 1.852 1.474 0 1.034-1.05 1.618-2.85 1.618-1.584 0-2.574-.484-2.574-1.386 0-.616.396-1.012 1.012-1.232v-.044c-.396-.132-.66-.528-.66-1.012 0-.572.352-.968.88-1.1v-.044c-.748-.264-1.232-.924-1.232-1.804 0-1.364.968-2.32 2.387-2.32.352 0 .66.044.924.132h2.222V2.54h-1.408c.044-.22.066-.44.066-.66C22.79.658 21.793 0 20.788 0h-1.202zm-7.586 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zM4 8c-2.21 0-4 1.79-4 4s1.79 4 4 4v-2c-1.1 0-2-.9-2-2s.9-2 2-2V8z"/></svg>`,
        orcid: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.05-2.381 4.05-3.722 0-2.016-1.397-3.722-3.928-3.722h-2.419z"/></svg>`,
        steam: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M11.979 0C5.678 0 .511 4.86.022 10.959l6.432 2.658a3.387 3.387 0 0 1 1.912-.59c.064 0 .127.003.19.008l2.861-4.142V8.86a4.495 4.495 0 0 1 4.493-4.494 4.495 4.495 0 0 1 4.493 4.494 4.495 4.495 0 0 1-4.493 4.494h-.104l-4.078 2.907c0 .053.003.107.003.16a3.392 3.392 0 0 1-3.392 3.392 3.394 3.394 0 0 1-3.26-2.462L.718 14.085C1.926 19.955 7.168 24.42 13.442 24.42c7.476 0 13.537-6.061 13.537-13.537C26.979 3.407 20.917-.58 13.442-.58c-.492 0-.979.02-1.463.058V0z"/></svg>`,
    };

    const linkEntries = Object.entries(cfg.links).filter(([, v]) => v);
    el.innerHTML = linkEntries.map(([key, url]) => `
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="hero-link-item" title="${key}">
            ${iconMap[key] || ''}
            <span>${key.charAt(0).toUpperCase() + key.slice(1)}</span>
        </a>
    `).join('');
}

function populateHonors(cfg) {
    const el = document.getElementById('cfg-honors');
    if (!el || !cfg.honors) return;
    el.innerHTML = cfg.honors.map(h => `
        <div class="honor-item scroll-animate">
            <span class="honor-date">${h.date}</span>
            <div class="honor-content">
                <span class="honor-badge">Award</span>
                <div>
                    <div class="honor-title">${h.title}</div>
                    <div class="honor-detail">${h.detail}</div>
                </div>
            </div>
        </div>
    `).join('');
}

function populatePublications(cfg) {
    const container = document.getElementById('cfg-publications');
    const summary = document.getElementById('pub-summary');
    if (!container || !cfg.publications) return;

    const pubs = cfg.publications;
    const totalCount = (pubs.firstAuthor?.length || 0) + (pubs.coFirstAuthor?.length || 0) +
                       (pubs.coAuthor?.length || 0) + (pubs.conference?.length || 0);

    if (summary) {
        summary.innerHTML = `
            <p class="pub-summary-text">
                Total: <strong>${totalCount} papers</strong> |
                <a href="https://scholar.google.com/citations?user=${cfg.scholarId}&hl" target="_blank" rel="noopener">Google Scholar Profile</a> |
                Citations: <strong><span id="pub-citations">---</span></strong> |
                h-index: <strong><span id="pub-hindex">---</span></strong>
            </p>
        `;
    }

    function renderGroup(title, papers, count) {
        if (!papers || papers.length === 0) return '';
        return `
            <div class="pub-group scroll-animate">
                <h3 class="pub-group-title">${title} (${count})</h3>
                <div class="publications-list">
                    ${papers.map(p => `
                        <article class="pub-card" data-year="${p.year}">
                            <div class="pub-num">${p.num}.</div>
                            <div class="pub-content">
                                <p class="pub-text">${p.text} <a href="${p.url}" target="_blank" rel="noopener"><strong><em>${p.venue}</em></strong>, ${p.venueDetail}</a>.${p.note ? ` <span class="pub-note">(${p.note})</span>` : ''}</p>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </div>
        `;
    }

    container.innerHTML =
        renderGroup('First Author Papers', pubs.firstAuthor, `${pubs.firstAuthor?.length || 0} published + 2 preprints`) +
        renderGroup('Co-first Author Papers', pubs.coFirstAuthor, pubs.coFirstAuthor?.length || 0) +
        renderGroup('Co-author Papers', pubs.coAuthor, pubs.coAuthor?.length || 0) +
        renderGroup('Conference Papers', pubs.conference, pubs.conference?.length || 0);
}

function populateKeyResearch(cfg) {
    const el = document.getElementById('cfg-key-research');
    if (!el || !cfg.keyResearch) return;
    el.innerHTML = cfg.keyResearch.map(r => `
        <div class="research-card scroll-animate">
            <div class="research-card-image">
                <div class="research-badge">${r.badge}</div>
                <img src="${r.image}" alt="${r.title}" loading="lazy">
            </div>
            <div class="research-card-body">
                <h3 class="research-title"><a href="${r.url}" target="_blank" rel="noopener">${r.title}</a></h3>
                <p class="research-authors">${r.authors}</p>
                <details class="research-abstract">
                    <summary>Abstract</summary>
                    <p>${r.abstract}</p>
                </details>
            </div>
        </div>
    `).join('');
}

function populateTalks(cfg) {
    const el = document.getElementById('cfg-talks');
    if (!el || !cfg.talks) return;
    el.innerHTML = cfg.talks.map(t => `
        <div class="talk-item scroll-animate">
            <div class="talk-photo">
                <img src="${t.photo}" alt="${t.title}" loading="lazy">
            </div>
            <div class="talk-info">
                <span class="talk-date">${t.date}</span>
                <h3 class="talk-title">${t.title}</h3>
                <p class="talk-location">${t.location}</p>
                <div class="talk-links">
                    <a href="${t.photo}" target="_blank" class="pub-link">Photo</a>
                    <a href="${t.abstract}" target="_blank" class="pub-link">Abstract</a>
                </div>
            </div>
        </div>
    `).join('');
}

function populateExperience(cfg) {
    const el = document.getElementById('cfg-experience');
    if (!el) return;
    const edu = cfg.education || [];
    const exp = cfg.experience || [];
    let content = '';

    if (exp.length) {
        content += `<div class="exp-column"><div class="exp-category"><h3>Work Experience</h3></div>${exp.map(e => `
            <div class="exp-item scroll-animate">
                <div class="exp-period">${e.period}</div>
                <div class="exp-details">
                    <h4 class="exp-title">${e.role}</h4>
                    <p class="exp-org">${e.institution}</p>
                </div>
            </div>
        `).join('')}</div>`;
    }

    if (edu.length) {
        content += `<div class="exp-column"><div class="exp-category"><h3>Education</h3></div>${edu.map(e => `
            <div class="exp-item scroll-animate">
                <div class="exp-period">${e.period}</div>
                <div class="exp-details">
                    <h4 class="exp-title">${e.degree}</h4>
                    <p class="exp-org">${e.institution}</p>
                </div>
            </div>
        `).join('')}</div>`;
    }

    el.innerHTML = content;
}

function populateExpertise(cfg) {
    const el = document.getElementById('cfg-expertise');
    if (!el || !cfg.expertise) return;
    el.innerHTML = cfg.expertise.map(cat => `
        <div class="expertise-category scroll-animate">
            <h3 class="expertise-cat-title">${cat.category}</h3>
            <div class="expertise-items">
                ${cat.items.map(item => `
                    <div class="expertise-item">
                        <h4 class="expertise-label">${item.label}</h4>
                        <p class="expertise-desc">${item.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function populateHobbies(cfg) {
    const el = document.getElementById('cfg-hobbies');
    if (!el || !cfg.hobbies) return;

    const iconMap = {
        car: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32"><path d="M5 17h2m10 0h2M3 11l2-6h14l2 6M3 11v6h18v-6M3 11h18"/><circle cx="7" cy="17" r="1"/><circle cx="17" cy="17" r="1"/></svg>`,
        cue: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>`,
        badminton: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32"><path d="M12 2L4 7l8 5 8-5-8-5zM12 12v10M8 9.5v7M16 9.5v7"/></svg>`,
    };

    el.innerHTML = cfg.hobbies.map(h => `
        <div class="hobby-card scroll-animate">
            <div class="hobby-icon">${iconMap[h.icon] || ''}</div>
            <h3 class="hobby-name">${h.name}</h3>
            <div class="hobby-desc">${h.description}</div>
        </div>
    `).join('');
}

function populateContact(cfg) {
    const el = document.getElementById('contact-links');
    if (!el) return;

    const emailSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;

    let links = '';
    if (cfg.emails) {
        links += cfg.emails.map(em => `
            <a href="mailto:${em}" class="contact-item">${emailSvg}<span>${em}</span></a>
        `).join('');
    }

    const linkIcons = {
        scholar: 'Google Scholar',
        github: 'GitHub',
        researchgate: 'ResearchGate',
        orcid: 'ORCID',
        steam: 'Steam',
    };

    if (cfg.links) {
        Object.entries(cfg.links).forEach(([key, url]) => {
            if (!url) return;
            const linkSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
            links += `<a href="${url}" target="_blank" rel="noopener noreferrer" class="contact-item">${linkSvg}<span>${linkIcons[key] || key}</span></a>`;
        });
    }

    el.innerHTML = links;
}

// ── Google Scholar Stats ─────────────────────────────────────────────────────
function fetchScholarStats(cfg) {
    if (!cfg.scholarStatsUrl) return;

    fetch(cfg.scholarStatsUrl)
        .then(res => res.json())
        .then(data => {
            const citations = data.citedby || data.citations || 0;
            const hIndex = data.hindex || data.h_index || 0;

            // Update hero stats
            const citEl = document.getElementById('stat-citations');
            if (citEl) citEl.textContent = citations;

            const hEl = document.getElementById('stat-hindex');
            if (hEl) hEl.textContent = hIndex;

            // Update bio inline
            const bioCit = document.getElementById('total_citations_bio');
            if (bioCit) bioCit.textContent = `${citations} citations`;

            const bioH = document.getElementById('h_index_intro');
            if (bioH) bioH.textContent = hIndex;

            // Update publications summary
            const pubCit = document.getElementById('pub-citations');
            if (pubCit) pubCit.textContent = citations;

            const pubH = document.getElementById('pub-hindex');
            if (pubH) pubH.textContent = hIndex;
        })
        .catch(err => {
            // Silently fail - static fallback values remain
        });
}
