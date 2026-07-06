/**
 * HM Digital Work - Production Control Pipeline
 * Year: 2026
 */

document.addEventListener('DOMContentLoaded', () => {
    // Increment visitor count logs inside local node engine tracking logic
    let totalVisitors = parseInt(localStorage.getItem('hm_visitor_logs') || '142');
    localStorage.setItem('hm_visitor_logs', (totalVisitors + 1).toString());

    const initializeDataSyncNodes = () => {
        if (!localStorage.getItem('hm_skills')) {
            localStorage.setItem('hm_skills', JSON.stringify([
                { id: 1, name: "HTML5 / CSS3 / Responsive Layouts", level: 98 },
                { id: 2, name: "JavaScript ES6 Enterprise Matrix", level: 92 },
                { id: 3, name: "Data Science & Analytical Tracking", level: 85 },
                { id: 4, name: "AI Prompt Optimization Engineering", level: 95 }
            ]));
        }
        if (!localStorage.getItem('hm_projects')) {
            localStorage.setItem('hm_projects', JSON.stringify([
                { id: 1, title: "Luxury E-Commerce Interface Hub", desc: "Premium dark aesthetic storefront application layer.", cat: "Web Node Apps" },
                { id: 2, title: "Face Find Optimization Engine", desc: "Reverse image scanning framework built for global profiles.", cat: "AI Vision Portals" }
            ]));
        }
        if (!localStorage.getItem('hm_certs')) {
            localStorage.setItem('hm_certs', JSON.stringify([
                { id: 1, title: "Advanced Web Dev Professional Matrix", platform: "Coursera, Google" },
                { id: 2, title: "Information Technology Frameworks", platform: "HP LIFE" },
                { id: 3, title: "Computer Science Specialization Hub", platform: "Saylor Academy" }
            ]));
        }
        if (!localStorage.getItem('hm_reviews')) {
            localStorage.setItem('hm_reviews', JSON.stringify([
                { id: 1, name: "John Davis", role: "CEO, TechCorp", txt: "Superb execution Speed. Entire structure maps directly to our requirements." },
                { id: 2, name: "Sarah Jenkins", role: "Director, NexaStudio", txt: "The responsive interface runs smoothly across mobile platforms perfectly." }
            ]));
        }
        if (!localStorage.getItem('hm_socials')) {
            localStorage.setItem('hm_socials', JSON.stringify([
                { id: 1, platform: "WhatsApp", url: "https://wa.me/yournumber" },
                { id: 2, platform: "GitHub", url: "https://github.com" },
                { id: 3, platform: "LinkedIn", url: "https://linkedin.com" },
                { id: 4, platform: "Instagram", url: "https://instagram.com" },
                { id: 5, platform: "YouTube", url: "https://youtube.com" },
                { id: 6, platform: "TikTok", url: "https://tiktok.com" }
            ]));
        }
        if (!localStorage.getItem('hm_inbox')) {
            localStorage.setItem('hm_inbox', JSON.stringify([]));
        }
    };

    initializeDataSyncNodes();
    initUltraSidebar();
    initTypingEngine();
    initBackToTopEngine();
    renderLiveSkills();
    renderLiveProjects();
    renderLiveCerts();
    renderLiveReviews();
    syncGlobalSocialAnchors();
    initContactSystem();
});

function initUltraSidebar() {
    const trigger = document.getElementById('menu-trigger');
    const sidebar = document.getElementById('sidebar-node');
    const items = document.querySelectorAll('.nav-links li');

    trigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('active');
        const icon = trigger.querySelector('i');
        if(icon) icon.className = sidebar.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });

    document.addEventListener('click', (e) => {
        if(sidebar && sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== trigger) {
            sidebar.classList.remove('active');
            const icon = trigger?.querySelector('i');
            if(icon) icon.className = 'fas fa-bars';
        }
    });

    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            sidebar.classList.remove('active');
            const icon = trigger?.querySelector('i');
            if(icon) icon.className = 'fas fa-bars';
        });
    });
}

function initTypingEngine() {
    const words = ["Web Developer.", "UI/UX Designer.", "Data Specialist.", "AI Automation Architect."];
    let i = 0, j = 0, isDel = false;
    const target = document.getElementById('typing-engine');
    function run() {
        if(!target) return;
        const current = words[i];
        target.textContent = isDel ? current.substring(0, j - 1) : current.substring(0, j + 1);
        j = isDel ? j - 1 : j + 1;
        let speed = isDel ? 25 : 55;
        if(!isDel && j === current.length) { speed = 2000; isDel = true; }
        else if(isDel && j === 0) { isDel = false; i = (i + 1) % words.length; speed = 350; }
        setTimeout(run, speed);
    }
    run();
}

function initBackToTopEngine() {
    const btn = document.getElementById('backToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 450) btn?.classList.add('show');
        else btn?.classList.remove('show');
    });
}

function renderLiveSkills() {
    const box = document.getElementById('embedded-skills-box');
    if(!box) return;
    box.innerHTML = '';
    JSON.parse(localStorage.getItem('hm_skills') || '[]').forEach(s => {
        box.innerHTML += `
            <div class="skill-card">
                <div style="display:flex; justify-content:space-between; font-weight:600; font-size:0.95rem;">
                    <span>${s.name}</span><span>${s.level}%</span>
                </div>
                <div class="progress-container"><div class="progress-fill" style="width:${s.level}%;"></div></div>
            </div>`;
    });
}

function renderLiveProjects() {
    const box = document.getElementById('embedded-projects-box');
    if(!box) return;
    box.innerHTML = '';
    JSON.parse(localStorage.getItem('hm_projects') || '[]').forEach(p => {
        box.innerHTML += `
            <div class="project-card">
                <span class="badge" style="margin-bottom:12px;">${p.cat}</span>
                <h3 style="margin-bottom:8px; font-weight:700;">${p.title}</h3>
                <p style="color:var(--text-secondary); font-size:0.9rem; line-height:1.5; margin-bottom:15px;">${p.desc}</p>
                <a href="#" style="color:var(--neon-cyan); text-decoration:none; font-weight:600; font-size:0.9rem;">Explore Project Node &rarr;</a>
            </div>`;
    });
}

function renderLiveCerts() {
    const box = document.getElementById('embedded-certs-box');
    if(!box) return;
    box.innerHTML = '';
    JSON.parse(localStorage.getItem('hm_certs') || '[]').forEach(c => {
        box.innerHTML += `
            <div class="project-card" style="border-left: 3px solid var(--neon-cyan);">
                <span class="badge" style="margin-bottom:12px; background:rgba(234,179,8,0.06); color:#eab308; border-color:rgba(234,179,8,0.15);"><i class="fas fa-ribbon"></i> Verified Archive</span>
                <h3 style="margin-bottom:6px; font-weight:700; font-size:1.15rem;">${c.title}</h3>
                <p style="color:var(--text-secondary); font-size:0.9rem;">Issuing Entity: <strong>${c.platform}</strong></p>
            </div>`;
    });
}

function renderLiveReviews() {
    const box = document.getElementById('embedded-reviews-box');
    if(!box) return;
    box.innerHTML = '';
    JSON.parse(localStorage.getItem('hm_reviews') || '[]').forEach(r => {
        box.innerHTML += `
            <div class="review-card">
                <p style="font-style:italic; color:var(--text-secondary); margin-bottom:15px; font-size:0.95rem;">"${r.txt}"</p>
                <strong style="display:block; color:#fff; font-size:0.95rem;">${r.name}</strong>
                <span style="font-size:0.8rem; color:var(--neon-cyan); font-weight:500;">${r.role}</span>
            </div>`;
    });
}

function syncGlobalSocialAnchors() {
    JSON.parse(localStorage.getItem('hm_socials') || '[]').forEach(s => {
        let platformKey = s.platform.toLowerCase();
        let elements = document.querySelectorAll(`.sl-${platformKey}`);
        if (platformKey === 'whatsapp') {
            elements = document.querySelectorAll('.sl-whatsapp, .whatsapp-floating-trigger');
        }
        elements.forEach(el => { if(el) el.setAttribute('href', s.url); });
    });
}

function initContactSystem() {
    const form = document.getElementById('main-contact-form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const msg = document.getElementById('form-msg').value.trim();
        if(!name || !email || !msg) return;

        const inbox = JSON.parse(localStorage.getItem('hm_inbox') || '[]');
        inbox.push({ id: Date.now(), name, email, msg, timestamp: new Date().toLocaleString() });
        localStorage.setItem('hm_inbox', JSON.stringify(inbox));

        alert('Transmission Matrix Complete. Message Log Injected Into Secure Admin Panel.');
        form.reset();
    });
}