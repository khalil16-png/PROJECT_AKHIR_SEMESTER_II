/**
 * ============================================================
 * KHALIL AL-KHAIRY — PORTFOLIO APP.JS
 * Main JavaScript: Theme, i18n, Typed.js, AOS, Nav, Form
 * ============================================================
 */

/* ============================================================
   TRANSLATIONS — i18n DATA
   ============================================================ */
const translations = {
  id: {
    /* Navigation */
    'nav.about':        'Tentang',
    'nav.skills':       'Keahlian',
    'nav.projects':     'Proyek',
    'nav.experience':   'Pengalaman',
    'nav.education':    'Pendidikan',
    'nav.certificates': 'Sertifikat',
    'nav.contact':      'Kontak',

    /* Hero */
    'hero.greeting':    'Hai, nama saya',
    'hero.bio':         'Membangun pengalaman digital yang bersih, fungsional, dan penuh tujuan. Mahasiswa Informatika sekaligus pendidik yang percaya bahwa teknologi dan nilai-nilai baik bisa berjalan beriringan.',
    'hero.cta_work':    'Lihat Karya',
    'hero.cta_contact': 'Hubungi Saya',

    /* About */
    'about.title':  'Tentang Saya',
    'about.p1':     'Halo! Saya <strong>Khalil</strong> — mahasiswa Informatika di Stikom El Rahma Sejahtera, Bogor. Saya memiliki ketertarikan mendalam pada <span class="highlight">pengembangan web</span>, <span class="highlight">desain UI/UX</span>, dan <span class="highlight">desain grafis</span>.',
    'about.p2':     'Di luar dunia digital, saya juga aktif sebagai <span class="highlight">Pengajar Al-Quran</span> dan Wali Kamar di Pondok Al Ihsan Baron Bogor — sebuah peran yang mengajarkan saya kepemimpinan, empati, dan kedisiplinan yang tinggi dalam kehidupan nyata.',
    'about.p3':     'Saya percaya bahwa karya terbaik lahir dari kombinasi antara keahlian teknis dan nilai-nilai yang kuat. Setiap proyek selalu saya dekati dengan dedikasi penuh dan rasa tanggung jawab yang tinggi.',
    'about.badge1': '🎓 Mahasiswa Informatika',
    'about.badge2': '📖 Pengajar Al-Quran',
    'about.badge3': '💻 Frontend Developer',
    'about.badge4': '🎨 Graphic Designer',

    /* Skills */
    'skills.title':     'Keahlian',
    'skills.hard':      'Hard Skills',
    'skills.soft':      'Soft Skills',
    'skills.learning':  'Sedang Dipelajari',
    'skill.intermediate': 'Menengah',
    'skill.beginner':   'Pemula',

    /* Soft Skills */
    'soft.leadership':      'Kepemimpinan',
    'soft.timemanagement':  'Manajemen Waktu',
    'soft.problemsolving':  'Problem Solving',
    'soft.adaptability':    'Adaptabilitas',
    'soft.empathy':         'Empati',
    'soft.eq':              'Kecerdasan Emosional',

    /* Projects */
    'projects.title':      'Proyek Pilihan',
    'projects.viewdemo':   'Lihat Demo',
    'projects.todo.desc':  'Aplikasi pengelola tugas digital yang membantu mengatur aktivitas harian berdasarkan prioritas, dengan antarmuka yang bersih dan responsif.',
    'projects.poster.name': 'Poster Ramadhan',
    'projects.poster.desc': 'Desain poster kompetisi bertema Ramadhan untuk menyemarakkan bulan suci dan meningkatkan antusiasme masyarakat dalam menyambut Ramadhan.',
    'projects.more':       'Lihat Lebih Banyak di GitHub',

    /* Experience */
    'experience.title':  'Pengalaman',
    'exp.present':       'Sekarang',
    'exp.quran.title':   'Pengajar Al-Quran & Wali Kamar',
    'exp.quran.desc':    'Membimbing ±20 santri dalam pembelajaran Al-Quran secara rutin dan berkelanjutan. Bertanggung jawab penuh sebagai wali kamar dalam pengawasan, pembinaan karakter, dan pengembangan diri para santri sehari-hari.',
    'exp.smelt.title':   'Divisi Humas',
    'exp.smelt.desc':    'Terjun langsung ke masyarakat dalam pengalokasian dan koordinasi acara organisasi. Menjalin komunikasi eksternal aktif dengan masjid-masjid sekitar untuk penyebaran informasi dan undangan kegiatan.',
    'tag.teaching':      'Pengajaran',
    'tag.leadership':    'Kepemimpinan',
    'tag.mentoring':     'Mentoring',
    'tag.pr':            'Public Relations',
    'tag.communication': 'Komunikasi',
    'tag.community':     'Komunitas',

    /* Education */
    'education.title':      'Pendidikan',
    'edu.present':          'Sekarang',
    'edu.stikom.school':    'Stikom El Rahma Sejahtera',
    'edu.stikom.major':     'S1 Informatika',
    'edu.stikom.desc':      'Semester 2 · Mempelajari dasar-dasar ilmu komputer, pemrograman web, algoritma, dan sistem informasi.',
    'edu.sma.school':       'SMA Tahfidz Anharul Ulum',
    'edu.sma.major':        'Ilmu Pengetahuan Sosial (IPS)',
    'edu.sma.desc':         'Menyelesaikan pendidikan menengah atas dengan fokus pada ilmu sosial di lingkungan sekolah berbasis Tahfidz Al-Quran.',
    'tag.active':           'Aktif',
    'tag.graduate':         'Lulus',

    /* Certificates */
    'certs.title':    'Sertifikat & Penghargaan',
    'cert1.name':     'Certificate of Appreciation',
    'cert2.name':     'Sertifikat Penghargaan',
    'cert2.context':  'Partisipasi aktif dalam Rangkaian Kegiatan Mabit Ramadhan',

    /* Contact */
    'contact.title':       'Hubungi Saya',
    'contact.intro':       'Punya pertanyaan, tawaran kolaborasi, atau sekadar ingin menyapa? Saya selalu terbuka untuk percakapan yang bermakna!',
    'contact.email_label':  'Email',
    'contact.wa_label':     'WhatsApp',
    'contact.name_label':   'Nama Anda',
    'contact.email_label2': 'Email Anda',
    'contact.message_label':'Pesan',
    'contact.send':         'Kirim Pesan',

    /* Footer */
    'footer.built': 'Dirancang &amp; Dibangun oleh <span class="highlight">Khalil Al-Khairy Abdul Hakim</span>',
  },

  en: {
    /* Navigation */
    'nav.about':        'About',
    'nav.skills':       'Skills',
    'nav.projects':     'Projects',
    'nav.experience':   'Experience',
    'nav.education':    'Education',
    'nav.certificates': 'Certificates',
    'nav.contact':      'Contact',

    /* Hero */
    'hero.greeting':    "Hi, my name is",
    'hero.bio':         'Building clean, functional, and purposeful digital experiences. An Informatics student and educator who believes that technology and strong values can walk side by side.',
    'hero.cta_work':    'View My Work',
    'hero.cta_contact': 'Contact Me',

    /* About */
    'about.title':  'About Me',
    'about.p1':     'Hello! I\'m <strong>Khalil</strong> — an Informatics student at Stikom El Rahma Sejahtera, Bogor. I have a deep passion for <span class="highlight">web development</span>, <span class="highlight">UI/UX design</span>, and <span class="highlight">graphic design</span>.',
    'about.p2':     'Beyond the digital world, I also serve as a <span class="highlight">Quranic Instructor</span> and Dormitory Supervisor at Pondok Al Ihsan Baron Bogor — a role that has taught me real-world leadership, empathy, and discipline.',
    'about.p3':     'I believe the best work emerges from the combination of technical skill and strong values. Every project I take on is approached with full dedication and a high sense of responsibility.',
    'about.badge1': '🎓 Informatics Student',
    'about.badge2': '📖 Quranic Instructor',
    'about.badge3': '💻 Frontend Developer',
    'about.badge4': '🎨 Graphic Designer',

    /* Skills */
    'skills.title':     'Skills',
    'skills.hard':      'Hard Skills',
    'skills.soft':      'Soft Skills',
    'skills.learning':  'Currently Learning',
    'skill.intermediate': 'Intermediate',
    'skill.beginner':   'Beginner',

    /* Soft Skills */
    'soft.leadership':      'Leadership',
    'soft.timemanagement':  'Time Management',
    'soft.problemsolving':  'Problem Solving',
    'soft.adaptability':    'Adaptability',
    'soft.empathy':         'Empathy',
    'soft.eq':              'Emotional Intelligence',

    /* Projects */
    'projects.title':      'Featured Projects',
    'projects.viewdemo':   'View Demo',
    'projects.todo.desc':  'A digital task management app that helps organize daily activities based on priority, with a clean and responsive interface.',
    'projects.poster.name': 'Ramadan Poster',
    'projects.poster.desc': 'Competition poster design with a Ramadan theme to celebrate the holy month and increase community enthusiasm in welcoming Ramadan.',
    'projects.more':       'View More on GitHub',

    /* Experience */
    'experience.title':  'Experience',
    'exp.present':       'Present',
    'exp.quran.title':   'Quranic Instructor & Dormitory Supervisor',
    'exp.quran.desc':    'Guiding ±20 students in regular and continuous Quranic learning. Fully responsible as dormitory supervisor for the daily supervision, character building, and self-development of the students.',
    'exp.smelt.title':   'Public Relations Division',
    'exp.smelt.desc':    'Directly engaged with the community in allocating and coordinating organizational events. Actively established external communication with surrounding mosques for information distribution and event invitations.',
    'tag.teaching':      'Teaching',
    'tag.leadership':    'Leadership',
    'tag.mentoring':     'Mentoring',
    'tag.pr':            'Public Relations',
    'tag.communication': 'Communication',
    'tag.community':     'Community',

    /* Education */
    'education.title':      'Education',
    'edu.present':          'Present',
    'edu.stikom.school':    'Stikom El Rahma Sejahtera',
    'edu.stikom.major':     'Bachelor of Informatics',
    'edu.stikom.desc':      'Semester 2 · Studying fundamentals of computer science, web programming, algorithms, and information systems.',
    'edu.sma.school':       'SMA Tahfidz Anharul Ulum',
    'edu.sma.major':        'Social Sciences (IPS)',
    'edu.sma.desc':         'Completed high school education with a focus on social studies in a Quran memorization-based school environment.',
    'tag.active':           'Active',
    'tag.graduate':         'Graduate',

    /* Certificates */
    'certs.title':    'Certificates & Awards',
    'cert1.name':     'Certificate of Appreciation',
    'cert2.name':     'Award Certificate',
    'cert2.context':  'Active participation in Ramadan Mabit Activity Series',

    /* Contact */
    'contact.title':       'Get In Touch',
    'contact.intro':       'Have a question, collaboration offer, or just want to say hi? I\'m always open to meaningful conversations!',
    'contact.email_label':  'Email',
    'contact.wa_label':     'WhatsApp',
    'contact.name_label':   'Your Name',
    'contact.email_label2': 'Your Email',
    'contact.message_label':'Message',
    'contact.send':         'Send Message',

    /* Footer */
    'footer.built': 'Designed &amp; Built by <span class="highlight">Khalil Al-Khairy Abdul Hakim</span>',
  }
};

/* ============================================================
   STATE
   ============================================================ */
let currentLang  = localStorage.getItem('lang')  || 'id';
let currentTheme = localStorage.getItem('theme') || 'dark';
let typedInstance = null;

/* ============================================================
   TYPED.JS STRINGS
   ============================================================ */
const typedStrings = {
  id: [
    'Frontend Developer.',
    'Desainer Grafis.',
    'Pengajar Al-Quran.',
    'Mahasiswa Informatika.'
  ],
  en: [
    'Frontend Developer.',
    'Graphic Designer.',
    'Quranic Instructor.',
    'Informatics Student.'
  ]
};

/* ============================================================
   THEME TOGGLE
   ============================================================ */
function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const next = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(next);
}

/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Update lang attribute on html
  document.documentElement.setAttribute('lang', lang);

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang][key];
    if (val !== undefined) {
      el.innerHTML = val;
    }
  });

  // Update lang toggle labels
  const nextLabel = lang === 'id' ? 'EN' : 'ID';
  const desktopLabel = document.getElementById('langLabel');
  const mobileLabel  = document.getElementById('langLabelMobile');
  if (desktopLabel) desktopLabel.textContent = nextLabel;
  if (mobileLabel)  mobileLabel.textContent  = nextLabel;

  // Update Typed.js strings
  reinitTyped();
}

function toggleLanguage() {
  const next = currentLang === 'id' ? 'en' : 'id';
  setLanguage(next);
}

/* ============================================================
   TYPED.JS INITIALIZATION
   ============================================================ */
function initTyped() {
  const el = document.getElementById('typed-output');
  if (!el) return;

  if (typedInstance) {
    typedInstance.destroy();
  }

  typedInstance = new Typed('#typed-output', {
    strings: typedStrings[currentLang],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1800,
    startDelay: 400,
    loop: true,
    cursorChar: '|',
    smartBackspace: true
  });
}

function reinitTyped() {
  const el = document.getElementById('typed-output');
  if (!el) return;

  if (typedInstance) {
    typedInstance.destroy();
    el.textContent = '';
  }

  setTimeout(() => {
    typedInstance = new Typed('#typed-output', {
      strings: typedStrings[currentLang],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1800,
      startDelay: 200,
      loop: true,
      cursorChar: '|',
      smartBackspace: true
    });
  }, 100);
}

/* ============================================================
   AOS INITIALIZATION
   ============================================================ */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      delay: 0
    });
  }
}

/* ============================================================
   ACTIVE NAV — INTERSECTION OBSERVER
   ============================================================ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return;

  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        // Remove active from all
        navLinks.forEach(link => link.classList.remove('active'));

        // Add active to matching link
        const active = document.querySelector(`.nav-link[data-section="${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}

/* ============================================================
   SKILL BAR ANIMATION
   ============================================================ */
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');
  if (!fills.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const target = fill.getAttribute('data-width') + '%';
        // Small delay for stagger effect
        setTimeout(() => {
          fill.style.width = target;
        }, 200);
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.2 });

  fills.forEach(fill => {
    fill.style.width = '0%';
    observer.observe(fill);
  });
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const hamburger    = document.getElementById('hamburgerBtn');
  const mobileMenu   = document.getElementById('mobileMenu');
  const menuClose    = document.getElementById('menuClose');
  const menuOverlay  = document.getElementById('menuOverlay');
  const mobileLinks  = document.querySelectorAll('.mobile-nav-link');

  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('is-open');
    menuOverlay.classList.add('is-visible');
    hamburger.classList.add('is-active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    menuOverlay.classList.remove('is-visible');
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMenu);
  if (menuClose)   menuClose.addEventListener('click', closeMenu);
  if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

/* ============================================================
   SMOOTH SCROLL FOR NAV LINKS
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const mobileHeaderH = window.innerWidth < 768
          ? parseInt(getComputedStyle(document.documentElement).getPropertyValue('--mobile-header-h')) || 64
          : 0;

        const top = target.getBoundingClientRect().top + window.scrollY - mobileHeaderH - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ============================================================
   MOBILE HEADER SHADOW ON SCROLL
   ============================================================ */
function initHeaderScroll() {
  const header = document.getElementById('mobileHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
      header.style.boxShadow = 'none';
    }
  }, { passive: true });
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nameEl    = document.getElementById('contactName');
    const emailEl   = document.getElementById('contactEmail');
    const messageEl = document.getElementById('contactMessage');
    const submitBtn = document.getElementById('submitBtn');

    if (!nameEl || !emailEl || !messageEl) return;

    const name    = nameEl.value.trim();
    const email   = emailEl.value.trim();
    const message = messageEl.value.trim();

    if (!name || !email || !message) return;

    // Build mailto link
    const subject = encodeURIComponent(`[Portfolio Contact] Pesan dari ${name}`);
    const body = encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
    );
    const mailto = `mailto:khalilalkhairyabdulhakim@gmail.com?subject=${subject}&body=${body}`;

    // Update button state
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>✓ Membuka Email...</span>';
    submitBtn.disabled = true;

    window.location.href = mailto;

    // Reset button after delay
    setTimeout(() => {
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
      form.reset();
    }, 2500);
  });
}

/* ============================================================
   THEME & LANG BUTTON EVENT LISTENERS
   ============================================================ */
function initControls() {
  // Desktop theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

  // Mobile theme toggle
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

  // Desktop lang toggle
  const langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.addEventListener('click', toggleLanguage);

  // Mobile lang toggle
  const langToggleMobile = document.getElementById('langToggleMobile');
  if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLanguage);
}

/* ============================================================
   ENTRANCE ANIMATION — Left Column
   ============================================================ */
function initEntranceAnimation() {
  const leftCol = document.getElementById('leftCol');
  if (leftCol) {
    leftCol.style.opacity = '0';
    leftCol.style.transform = 'translateX(-20px)';
    leftCol.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    setTimeout(() => {
      leftCol.style.opacity = '1';
      leftCol.style.transform = 'translateX(0)';
    }, 100);
  }
}

/* ============================================================
   PROFILE IMAGE — Graceful Fallback
   ============================================================ */
function initProfileImage() {
  const img = document.getElementById('profileImg');
  const placeholder = document.getElementById('photoPlaceholder');
  if (!img || !placeholder) return;

  img.addEventListener('error', () => {
    img.style.display = 'none';
    placeholder.style.display = 'flex';
  });

  // If image loaded successfully (cached), hide placeholder
  img.addEventListener('load', () => {
    placeholder.style.display = 'none';
    img.style.display = 'block';
  });
}

/* ============================================================
   INIT — DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Apply saved theme immediately
  setTheme(currentTheme);

  // 2. Apply saved language
  setLanguage(currentLang);

  // 3. Initialize all modules
  initControls();
  initMobileMenu();
  initSmoothScroll();
  initHeaderScroll();
  initContactForm();
  initProfileImage();
  initEntranceAnimation();

  // 4. Initialize AOS (scroll animations)
  initAOS();

  // 5. Initialize Typed.js
  if (typeof Typed !== 'undefined') {
    initTyped();
  }

  // 6. Initialize skill bars (with small delay for AOS)
  setTimeout(() => {
    initSkillBars();
  }, 300);

  // 7. Initialize active nav observer
  initActiveNav();

  // 8. Sync icon moon/sun visibility on load
  updateThemeIcons();
});

/* ============================================================
   THEME ICON SYNC
   ============================================================ */
function updateThemeIcons() {
  // Already handled by CSS via [data-theme] attribute selectors
  // This is a no-op but kept for extensibility
}

/* ============================================================
   WINDOW LOAD — Refresh AOS after all assets loaded
   ============================================================ */
window.addEventListener('load', () => {
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
});
