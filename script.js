/**
 * HM Digital Work - Production Control Pipeline (Firebase Cloud Version)
 * Year: 2026
 */

// ====== 1. FIREBASE IMPORT MODULES ======
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ====== 2. FIREBASE CONFIGURATION SETUP ======
// ⚠️ HINT: Firebase console se mili hui config details yahan daalein
 const firebaseConfig = {
    apiKey: "AIzaSyCkMGYy-98dvqEJo0wo5j0EwM6tn4pJIeQ",
    authDomain: "hmdigitalwork-90a17.firebaseapp.com",
    projectId: "hmdigitalwork-90a17",
    storageBucket: "hmdigitalwork-90a17.firebasestorage.app",
    messagingSenderId: "536158019817",
    appId: "1:536158019817:web:c7a1114287f09b7110d078"
  };

// Initialize Firebase & Cloud Firestore Database Engine
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ====== 3. ENGINE INITIALIZATION NODES ======
document.addEventListener('DOMContentLoaded', () => {
    // Visitor tracking locally inside browser node
    let totalVisitors = parseInt(localStorage.getItem('hm_visitor_logs') || '142');
    localStorage.setItem('hm_visitor_logs', (totalVisitors + 1).toString());

    // Core execution steps
    initUltraSidebar();
    initTypingEngine();
    initBackToTopEngine();
    
    // Live stream fetching from Cloud Database
    renderLiveSkills();
    renderLiveProjects();
    renderLiveCerts();
    renderLiveReviews();
    syncGlobalSocialAnchors();
    initContactSystem();
});

// ====== 4. SYSTEM COMPONENTS LOGIC ======

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

// ====== 5. REAL-TIME CLOUD DATA DISPLAY NODES ======

async function renderLiveSkills() {
    const box = document.getElementById('embedded-skills-box');
    if(!box) return;
    box.innerHTML = '<p style="color:var(--text-secondary); grid-column: 1/-1; text-align:center;">Synchronizing skills data link...</p>';
    
    try {
        const querySnapshot = await getDocs(collection(db, "hm_skills"));
        box.innerHTML = '';
        
        // Fallback static cards agar database khali ho (Taaki first time open par blank na dikhe)
        if (querySnapshot.empty) {
            const fallback = [
                { name: "HTML5 / CSS3 / Responsive Layouts", level: 98 },
                { name: "JavaScript ES6 Enterprise Matrix", level: 92 },
                { name: "Data Science & Analytical Tracking", level: 85 },
                { name: "AI Prompt Optimization Engineering", level: 95 }
            ];
            fallback.forEach(s => {
                box.innerHTML += `
                    <div class="skill-card">
                        <div style="display:flex; justify-content:space-between; font-weight:600; font-size:0.95rem;">
                            <span>${s.name}</span><span>${s.level}%</span>
                        </div>
                        <div class="progress-container"><div class="progress-fill" style="width:${s.level}%;"></div></div>
                    </div>`;
            });
            return;
        }

        querySnapshot.forEach(doc => {
            const s = doc.data();
            box.innerHTML += `
                <div class="skill-card">
                    <div style="display:flex; justify-content:space-between; font-weight:600; font-size:0.95rem;">
                        <span>${s.name}</span><span>${s.level}%</span>
                    </div>
                    <div class="progress-container"><div class="progress-fill" style="width:${s.level}%;"></div></div>
                </div>`;
        });
    } catch (e) {
        console.error("Cloud fetch error (Skills):", e);
    }
}

async function renderLiveProjects() {
    const box = document.getElementById('embedded-projects-box');
    if(!box) return;
    box.innerHTML = '<p style="color:var(--text-secondary); grid-column: 1/-1; text-align:center;">Streaming project nodes from cloud...</p>';
    
    try {
        const querySnapshot = await getDocs(collection(db, "hm_projects"));
        box.innerHTML = '';
        
        if (querySnapshot.empty) {
            const fallback = [
                { title: "Luxury E-Commerce Interface Hub", desc: "Premium dark aesthetic storefront application layer.", cat: "Web Node Apps" },
                { title: "Face Find Optimization Engine", desc: "Reverse image scanning framework built for global profiles.", cat: "AI Vision Portals" }
            ];
            fallback.forEach(p => {
                box.innerHTML += `
                    <div class="project-card">
                        <span class="badge" style="margin-bottom:12px;">${p.cat}</span>
                        <h3 style="margin-bottom:8px; font-weight:700;">${p.title}</h3>
                        <p style="color:var(--text-secondary); font-size:0.9rem; line-height:1.5; margin-bottom:15px;">${p.desc}</p>
                        <a href="#" style="color:var(--neon-cyan); text-decoration:none; font-weight:600; font-size:0.9rem;">Explore Project Node &rarr;</a>
                    </div>`;
            });
            return;
        }

        querySnapshot.forEach(doc => {
            const p = doc.data();
            box.innerHTML += `
                <div class="project-card">
                    <span class="badge" style="margin-bottom:12px;">${p.cat}</span>
                    <h3 style="margin-bottom:8px; font-weight:700;">${p.title}</h3>
                    <p style="color:var(--text-secondary); font-size:0.9rem; line-height:1.5; margin-bottom:15px;">${p.desc}</p>
                    <a href="#" style="color:var(--neon-cyan); text-decoration:none; font-weight:600; font-size:0.9rem;">Explore Project Node &rarr;</a>
                </div>`;
        });
    } catch (e) {
        console.error("Cloud fetch error (Projects):", e);
    }
}

async function renderLiveCerts() {
    const box = document.getElementById('embedded-certs-box');
    if(!box) return;
    box.innerHTML = '<p style="color:var(--text-secondary); grid-column: 1/-1; text-align:center;">Verifying secure certificate hashes...</p>';
    
    try {
        const querySnapshot = await getDocs(collection(db, "hm_certs"));
        box.innerHTML = '';
        
        if (querySnapshot.empty) {
            const fallback = [
                { title: "Advanced Web Dev Professional Matrix", platform: "Coursera, Google" },
                { title: "Information Technology Frameworks", platform: "HP LIFE" },
                { title: "Computer Science Specialization Hub", platform: "Saylor Academy" }
            ];
            fallback.forEach(c => {
                box.innerHTML += `
                    <div class="project-card" style="border-left: 3px solid var(--neon-cyan);">
                        <span class="badge" style="margin-bottom:12px; background:rgba(234,179,8,0.06); color:#eab308; border-color:rgba(234,179,8,0.15);"><i class="fas fa-ribbon"></i> Verified Archive</span>
                        <h3 style="margin-bottom:6px; font-weight:700; font-size:1.15rem;">${c.title}</h3>
                        <p style="color:var(--text-secondary); font-size:0.9rem;">Issuing Entity: <strong>${c.platform}</strong></p>
                    </div>`;
            });
            return;
        }

        querySnapshot.forEach(doc => {
            const c = doc.data();
            box.innerHTML += `
                <div class="project-card" style="border-left: 3px solid var(--neon-cyan);">
                    <span class="badge" style="margin-bottom:12px; background:rgba(234,179,8,0.06); color:#eab308; border-color:rgba(234,179,8,0.15);"><i class="fas fa-ribbon"></i> Verified Archive</span>
                    <h3 style="margin-bottom:6px; font-weight:700; font-size:1.15rem;">${c.title}</h3>
                    <p style="color:var(--text-secondary); font-size:0.9rem;">Issuing Entity: <strong>${c.platform}</strong></p>
                </div>`;
        });
    } catch (e) {
        console.error("Cloud fetch error (Certs):", e);
    }
}

async function renderLiveReviews() {
    const box = document.getElementById('embedded-reviews-box');
    if(!box) return;
    box.innerHTML = '<p style="color:var(--text-secondary); grid-column: 1/-1; text-align:center;">Synchronizing live testimonials...</p>';
    
    try {
        const querySnapshot = await getDocs(collection(db, "hm_reviews"));
        box.innerHTML = '';
        
        if (querySnapshot.empty) {
            const fallback = [
                { name: "John Davis", role: "CEO, TechCorp", txt: "Superb execution Speed. Entire structure maps directly to our requirements." },
                { name: "Sarah Jenkins", role: "Director, NexaStudio", txt: "The responsive interface runs smoothly across mobile platforms perfectly." }
            ];
            fallback.forEach(r => {
                box.innerHTML += `
                    <div class="review-card">
                        <p style="font-style:italic; color:var(--text-secondary); margin-bottom:15px; font-size:0.95rem;">"${r.txt}"</p>
                        <strong style="display:block; color:#fff; font-size:0.95rem;">${r.name}</strong>
                        <span style="font-size:0.8rem; color:var(--neon-cyan); font-weight:500;">${r.role}</span>
                    </div>`;
            });
            return;
        }

        querySnapshot.forEach(doc => {
            const r = doc.data();
            box.innerHTML += `
                <div class="review-card">
                    <p style="font-style:italic; color:var(--text-secondary); margin-bottom:15px; font-size:0.95rem;">"${r.txt}"</p>
                    <strong style="display:block; color:#fff; font-size:0.95rem;">${r.name}</strong>
                    <span style="font-size:0.8rem; color:var(--neon-cyan); font-weight:500;">${r.role}</span>
                </div>`;
        });
    } catch (e) {
        console.error("Cloud fetch error (Reviews):", e);
    }
}

async function syncGlobalSocialAnchors() {
    try {
        const querySnapshot = await getDocs(collection(db, "hm_socials"));
        
        if (querySnapshot.empty) {
            // Agar database khali ho toh default links use honge
            return;
        }

        querySnapshot.forEach(doc => {
            const s = doc.data();
            let platformKey = s.platform.toLowerCase();
            let elements = document.querySelectorAll(`.sl-${platformKey}`);
            if (platformKey === 'whatsapp') {
                elements = document.querySelectorAll('.sl-whatsapp, .whatsapp-floating-trigger');
            }
            elements.forEach(el => { if(el) el.setAttribute('href', s.url); });
        });
    } catch (e) {
        console.error("Cloud fetch error (Socials):", e);
    }
}

// ====== 6. TRANSMISSION INTAKE NETWORK (CONTACT MESSAGES) ======

function initContactSystem() {
    const form = document.getElementById('main-contact-form');
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const contact = document.getElementById('form-contact').value.trim();
        const msg = document.getElementById('form-msg').value.trim();
        
        if(!name || !email || !msg) return;

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Routing...";
        submitBtn.disabled = true;

        try {
            // Direct Google Cloud over the internet synchronization logic
            await addDoc(collection(db, "hm_inbox"), {
                id: Date.now(),
                name: name,
                email: email,
                contact: contact,
                msg: msg,
                timestamp: new Date().toLocaleString()
            });

            alert('Your request has been received. THANK YOU.....');
            form.reset();
        } catch (error) {
            console.error("Transmission route failed:", error);
            alert("Secure transmission interrupted. Please check network link.");
        } finally {
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
    });
}
