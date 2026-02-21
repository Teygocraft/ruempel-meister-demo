// siteconfig.js
// ============================================================
// ANTI-GRAVITY WEBSITE CLONE SYSTEM — Konfigurations-Hub
// ============================================================
// Alle firmen-spezifischen Daten befinden sich NUR in dieser Datei.
// Um eine neue Website zu klonen: Nur diese Datei anpassen, dann fertig.
// Felder mit (*) sind PFLICHTFELDER für ein funktionierendes Klon.

const locationData = {
    berlin: {
        businessName: "Rümpel Meister Berlin",
        heroHeadline: "Schnelle & diskrete Entrümpelungen in Berlin",
        heroSubheadline: "Top-bewerteter Räumungsservice. Wir kümmern uns um Wohnungsauflösungen, Kellerentrümpelungen und Sperrmüll – stressfrei und zum Festpreis im Umkreis von Berlin.",
        heroImage: "url('https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        featureImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80')",
        seoHeadline: "Professionelle Entrümpelung für Berlin & Umgebung",
        seoText: "Wir sind täglich in ganz Berlin und den angrenzenden Bezirken für Sie unterwegs. Ob Charlottenburg, Mitte, Spandau oder Köpenick – unser lokales Team ist schnell vor Ort und rümpelt Ihr Objekt besenrein."
    },
    hamburg: {
        businessName: "Rümpel Meister Hamburg",
        heroHeadline: "Schnelle & diskrete Entrümpelungen in Hamburg",
        heroSubheadline: "Top-bewerteter Räumungsservice. Wir kümmern uns um Wohnungsauflösungen, Kellerentrümpelungen und Sperrmüll – stressfrei und zum Festpreis im Umkreis von Hamburg.",
        heroImage: "url('https://images.unsplash.com/photo-1678026281235-e9725b0a1417?auto=format&fit=crop&w=1920&q=80')",
        featureImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1000&q=80')",
        seoHeadline: "Professionelle Entrümpelung für Hamburg & Umland",
        seoText: "Von Altona bis Wandsbek, von der HafenCity bis Harburg: Wir entrümpeln schnell und diskret in der gesamten Hansestadt Hamburg und dem Umland. Vertrauen Sie auf unser Hamburger Team."
    },
    muenchen: {
        businessName: "Rümpel Meister München",
        heroHeadline: "Schnelle & diskrete Entrümpelungen in München",
        heroSubheadline: "Top-bewerteter Räumungsservice. Wir kümmern uns um Wohnungsauflösungen, Kellerentrümpelungen und Sperrmüll – stressfrei und zum Festpreis im Umkreis von München.",
        heroImage: "url('https://images.unsplash.com/photo-1770749058027-095a1b116c4c?auto=format&fit=crop&w=1920&q=80')",
        featureImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80')",
        seoHeadline: "Professionelle Entrümpelung für München & Bayern",
        seoText: "Ihr verlässliches Räumungsteam für München. Wir kümmern uns um Entrümpelungen in Schwabing, Bogenhausen, Pasing und allen weiteren Stadtteilen sowie im Münchner Umland."
    },
    koeln: {
        businessName: "Rümpel Meister Köln",
        heroHeadline: "Schnelle & diskrete Entrümpelungen in Köln",
        heroSubheadline: "Top-bewerteter Räumungsservice. Wir kümmern uns um Wohnungsauflösungen, Kellerentrümpelungen und Sperrmüll – stressfrei und zum Festpreis im Umkreis von Köln.",
        heroImage: "url('https://images.unsplash.com/photo-1742507807370-72f0e599faea?auto=format&fit=crop&w=1920&q=80')",
        featureImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80')",
        seoHeadline: "Professionelle Entrümpelung für Köln & Rheinland",
        seoText: "Von Ehrenfeld bis Porz, vom Dom bis zum Rhein: Unser lokales Kölner Team entrümpelt schnell, diskret und besenrein in der ganzen Domstadt."
    },
    frankfurt: {
        businessName: "Rümpel Meister Frankfurt",
        heroHeadline: "Schnelle & diskrete Entrümpelungen in Frankfurt",
        heroSubheadline: "Top-bewerteter Räumungsservice. Wir kümmern uns um Wohnungsauflösungen, Kellerentrümpelungen und Sperrmüll – stressfrei und zum Festpreis im Umkreis von Frankfurt.",
        heroImage: "url('https://images.unsplash.com/photo-1626447637943-4c9d412fa8cf?auto=format&fit=crop&w=1920&q=80')",
        featureImage: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80')",
        seoHeadline: "Professionelle Entrümpelung für Frankfurt am Main",
        seoText: "Ihr verlässliches Räumungsteam für die Bankenmetropole. Egal ob Sachsenhausen, Westend oder Bornheim – wir sind in ganz Frankfurt und dem Rhein-Main-Gebiet für Sie da."
    },
    stuttgart: {
        businessName: "Rümpel Meister Stuttgart",
        heroHeadline: "Schnelle & diskrete Entrümpelungen in Stuttgart",
        heroSubheadline: "Top-bewerteter Räumungsservice. Wir kümmern uns um Wohnungsauflösungen, Kellerentrümpelungen und Sperrmüll – stressfrei und zum Festpreis im Umkreis von Stuttgart.",
        heroImage: "url('https://images.unsplash.com/photo-1611611158676-ab7d7f923af0?auto=format&fit=crop&w=1920&q=80')",
        featureImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80')",
        seoHeadline: "Professionelle Entrümpelung für Stuttgart & Region",
        seoText: "Vom Kessel bis auf die Höhen: Wir übernehmen Ihre Entrümpelung in Stuttgart Mitte, Bad Cannstatt, Degerloch und in der gesamten Schwabenmetropole."
    },
    duesseldorf: {
        businessName: "Rümpel Meister Düsseldorf",
        heroHeadline: "Schnelle & diskrete Entrümpelungen in Düsseldorf",
        heroSubheadline: "Top-bewerteter Räumungsservice. Wir kümmern uns um Wohnungsauflösungen, Kellerentrümpelungen und Sperrmüll – stressfrei und zum Festpreis im Umkreis von Düsseldorf.",
        heroImage: "url('https://images.unsplash.com/photo-1749765743457-d3025ab746b6?auto=format&fit=crop&w=1920&q=80')",
        featureImage: "url('https://images.unsplash.com/photo-1600573472556-e636c2acda9e?auto=format&fit=crop&w=1000&q=80')",
        seoHeadline: "Professionelle Entrümpelung für Düsseldorf",
        seoText: "Ihr Profiteam für die Landeshauptstadt am Rhein. Ob in Bilk, Flingern, Oberkassel oder am Medienhafen – wir räumen schnell und besenrein."
    },
    dortmund: {
        businessName: "Rümpel Meister Dortmund",
        heroHeadline: "Schnelle & diskrete Entrümpelungen in Dortmund",
        heroSubheadline: "Top-bewerteter Räumungsservice. Wir kümmern uns um Wohnungsauflösungen, Kellerentrümpelungen und Sperrmüll – stressfrei und zum Festpreis im Umkreis von Dortmund.",
        heroImage: "url('https://images.unsplash.com/photo-1646490855306-85b49cacae7a?auto=format&fit=crop&w=1920&q=80')",
        featureImage: "url('https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=80')",
        seoHeadline: "Professionelle Entrümpelung für Dortmund & Ruhrgebiet",
        seoText: "Von der Innenstadt bis nach Hörde und Hombruch: Unser Dortmunder Team garantiert schnelle und zuverlässige Räumungen im gesamten Stadtgebiet."
    },
    essen: {
        businessName: "Rümpel Meister Essen",
        heroHeadline: "Schnelle & diskrete Entrümpelungen in Essen",
        heroSubheadline: "Top-bewerteter Räumungsservice. Wir kümmern uns um Wohnungsauflösungen, Kellerentrümpelungen und Sperrmüll – stressfrei und zum Festpreis im Umkreis von Essen.",
        heroImage: "url('https://images.unsplash.com/photo-1610448300579-2ea96ca0f7ac?auto=format&fit=crop&w=1920&q=80')",
        featureImage: "url('https://images.unsplash.com/photo-1600566753086-00f18d816779?auto=format&fit=crop&w=1000&q=80')",
        seoHeadline: "Professionelle Entrümpelung für Essen",
        seoText: "Mitten im Herzen des Ruhrgebiets: Wir entrümpeln Rüttenscheid, Steele, Borbeck und alle anderen Essener Stadtteile mit höchster Zuverlässigkeit."
    },
    leipzig: {
        businessName: "Rümpel Meister Leipzig",
        heroHeadline: "Schnelle & diskrete Entrümpelungen in Leipzig",
        heroSubheadline: "Top-bewerteter Räumungsservice. Wir kümmern uns um Wohnungsauflösungen, Kellerentrümpelungen und Sperrmüll – stressfrei und zum Festpreis im Umkreis von Leipzig.",
        heroImage: "url('https://images.unsplash.com/photo-1682867372362-da9fb5f1201a?auto=format&fit=crop&w=1920&q=80')",
        featureImage: "url('https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=80')",
        seoHeadline: "Professionelle Entrümpelung für Leipzig",
        seoText: "Ihr Team für die Messestadt: Ob Plagwitz, Südvorstadt, Connewitz oder Zentrum. Wir sind schnell vor Ort und rümpeln stressfrei und kompetent."
    },
    default: {
        businessName: "Rümpel Meister",
        heroHeadline: "Schnelle & diskrete Entrümpelungen",
        heroSubheadline: "Top-bewerteter Räumungsservice. Wir kümmern uns um Wohnungsauflösungen, Kellerentrümpelungen und Sperrmüll bundesweit.",
        heroImage: "url('https://ruempelmeister.de/wordpress/wp-content/uploads/2020/12/ruempel-meister-im-einsatz.jpg')",
        featureImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80')",
        seoHeadline: "Bundesweiter Räumungsservice mit Festpreis",
        seoText: "Egal in welcher Stadt – wir arbeiten mit regionalen Teams deutschlandweit, um Ihnen stets einen schnellen und verlässlichen Service bieten zu können."
    }
};

const siteConfig = {

    // ── MARKE & IDENTITÄT (*) ────────────────────────────────────
    businessName: "Rümpel Meister",
    tagline: "Ihre Sorgen, unser Job - besenrein.",
    logoUrl: "https://ruempelmeister.de/wordpress/wp-content/uploads/2020/12/ruempel-meister-logo.png",
    logoAlt: "Rümpel Meister Logo",
    faviconUrl: "https://ruempelmeister.de/wordpress/wp-content/uploads/2020/12/ruempel-meister-logo.png",

    // ── FARBEN (*) ───────────────────────────────────────────────
    primaryColor: "#2563eb",   // Haupt-Akzentfarbe (Buttons, Links)
    secondaryColor: "#eff6ff",   // Heller Hintergrund
    accentColor: "#f59e0b",   // Warm accent for CTAs

    // ── KONTAKT (*) ──────────────────────────────────────────────
    phoneNumber: "0800 8080 90333",       // Angezeigter Text
    phoneNumberRaw: "0800808090333",          // Für tel: href (keine Leerzeichen/Sonderzeichen)
    emailAddress: "kontakt@ruempelmeister-berlin.de",
    address: "Musterstraße 12, 10115 Berlin",

    // ── ÖFFNUNGSZEITEN ───────────────────────────────────────────
    openingHoursMoFr: "Mo-Fr: 08:00 - 18:00 Uhr",
    openingHoursSat: "Sa: 09:00 - 14:00 Uhr",
    openingHoursSun: "So: Geschlossen",

    // ── LANDING PAGE ─────────────────────────────────────────────
    landingHeroImage: "url('https://ruempelmeister.de/wordpress/wp-content/uploads/2020/12/ruempel-meister-im-einsatz.jpg')",
    landingTagline: "Bundesweite Experten",
    landingHeadline: "Wir räumen auf.<br><span style='color: var(--primary);'>In Ihrer Stadt.</span>",
    landingSubheadline: "Wählen Sie Ihren Standort für ein maßgeschneidertes, besenreines und stressfreies Festpreis-Angebot.",

    // ── TRUST & BEWERTUNGEN ──────────────────────────────────────
    reviewsCount: "+200",

    // ── ÜBER UNS ─────────────────────────────────────────────────
    aboutHeadline: "Unsere Geschichte – Aus Erfahrung gegründet",
    aboutText: "Rümpel Meister® wurde von Stefan Schinkel vor über zehn Jahren gegründet. Der Anstoß für die Gründung war die eigene Betroffenheit durch den Tod des Vaters und die Demenzerkrankung der Mutter. Als gelernter Sanitärinstallateur hat er am eigenen Leib erfahren, wie wichtig professionelle und einfühlsame Hilfe von Außenstehenden ist, wenn die Familie alleine nicht weiterkommt. Heute sind wir ein starkes, deutschlandweites Team, das mit Herz, Diskretion und höchsten Qualitätsstandards arbeitet.",

    // ── LEISTUNGEN ───────────────────────────────────────────────
    services: [
        { title: "Wohnungsauflösung", description: "Komplette Räumung und besenreine Übergabe von Wohnungen und Häusern." },
        { title: "Keller & Dachboden", description: "Schnelle Entsorgung von Altlasten in Kellern, Garagen und Dachböden." },
        { title: "Gewerbliche Räumung", description: "Professionelle Büro- und Betriebsauflösungen für Unternehmen." }
    ],

    // ── VORTEILE / FEATURES ──────────────────────────────────────
    features: [
        "Kostenlose Vorab-Besichtigung",
        "100% Festpreisgarantie",
        "Fachgerechte & zertifizierte Entsorgung",
        "Diskretes & schnelles Team"
    ]
};

function applyConfig() {
    // ── 1. CSS-Variablen (Farben) ────────────────────────────────
    document.documentElement.style.setProperty('--primary', siteConfig.primaryColor);
    document.documentElement.style.setProperty('--secondary', siteConfig.secondaryColor);
    document.documentElement.style.setProperty('--accent', siteConfig.accentColor);

    // ── 2. Logo ──────────────────────────────────────────────────
    const logoImg = document.getElementById('site-logo');
    if (logoImg) {
        logoImg.src = siteConfig.logoUrl;
        logoImg.alt = siteConfig.logoAlt || siteConfig.businessName;
    }

    // ── 3. Favicon ───────────────────────────────────────────────
    const favicon = document.getElementById('site-favicon');
    if (favicon) favicon.href = siteConfig.faviconUrl;

    // ── 4. Telefon-Link (href) ───────────────────────────────────
    const phoneHref = document.getElementById('nav-phone-href');
    if (phoneHref) phoneHref.href = 'tel:' + siteConfig.phoneNumberRaw;

    // ── 5. Landing Hero Hintergrundbild ──────────────────────────
    const landingHero = document.getElementById('landing-hero-section');
    if (landingHero) {
        landingHero.style.background = `linear-gradient(rgba(248, 250, 252, 0.5), rgba(248, 250, 252, 0.8)), ${siteConfig.landingHeroImage} center/cover`;
    }

    // ── 6. Landing Page Texte ────────────────────────────────────
    const landingTaglineEl = document.getElementById('landing-tagline');
    if (landingTaglineEl) landingTaglineEl.textContent = siteConfig.landingTagline;
    const landingHeadlineEl = document.getElementById('landing-headline');
    if (landingHeadlineEl) landingHeadlineEl.innerHTML = siteConfig.landingHeadline;
    const landingSubEl = document.getElementById('landing-subheadline');
    if (landingSubEl) landingSubEl.textContent = siteConfig.landingSubheadline;

    // ── 7. data-bind Felder (Text) ───────────────────────────────
    const dataBindings = document.querySelectorAll('[data-bind]');
    dataBindings.forEach(el => {
        const key = el.getAttribute('data-bind');
        if (siteConfig[key] !== undefined) {
            el.textContent = siteConfig[key];
        }
    });

    // ── 8. Leistungen (Services) ──────────────────────────────────
    const grid = document.getElementById('services-grid');
    if (grid && siteConfig.services) {
        const serviceIcons = {
            'Wohnungsauflösung': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
            'Keller & Dachboden': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 2v5"/><path d="M8 2v5"/><path d="M2 12h20"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>`,
            'Gewerbliche Räumung': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`
        };
        const defaultIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`;

        siteConfig.services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';
            const icon = serviceIcons[service.title] || defaultIcon;
            card.innerHTML = `
                <div class="service-icon">
                    ${icon}
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            `;
            grid.appendChild(card);
        });
    }

    // ── 9. Vorteile / Features ────────────────────────────────────
    const featureList = document.getElementById('feature-list');
    if (featureList && siteConfig.features) {
        siteConfig.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${feature}</span>
            `;
            featureList.appendChild(li);
        });
    }
}

function changeLocation(cityKey) {
    const data = locationData[cityKey] || { ...locationData.default, businessName: "Rümpel Meister " + cityKey.charAt(0).toUpperCase() + cityKey.slice(1) };

    // Firmen-spezifische Felder in siteConfig schreiben damit data-bind sie korrekt aufnimmt
    siteConfig.businessName = data.businessName || siteConfig.businessName;
    siteConfig.heroHeadline = data.heroHeadline || siteConfig.heroHeadline;
    siteConfig.heroSubheadline = data.heroSubheadline || siteConfig.heroSubheadline;
    const heroImage = data.heroImage || locationData.default.heroImage;
    const seoHeadline = data.seoHeadline || locationData.default.seoHeadline;
    const seoText = data.seoText || locationData.default.seoText;

    // Update standard bindings
    const dataBindings = document.querySelectorAll('[data-bind]');
    dataBindings.forEach(el => {
        const key = el.getAttribute('data-bind');
        if (siteConfig[key]) {
            el.textContent = siteConfig[key];
        }
    });

    // Update specific DOM Elements
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
        heroSection.style.backgroundImage = `linear-gradient(rgba(248, 250, 252, 0.75), rgba(248, 250, 252, 0.85)), ${heroImage}`;
    }

    // Update feature image per city
    const featureImage = data.featureImage || locationData.default.featureImage;
    document.documentElement.style.setProperty('--feature-bg', featureImage);

    const localHeadline = document.getElementById('local-headline');
    if (localHeadline) localHeadline.textContent = seoHeadline;

    const localTextObj = document.getElementById('local-text');
    if (localTextObj) localTextObj.textContent = seoText;
}

function toggleMenu() {
    const navActions = document.getElementById('navActions');
    if (navActions) {
        navActions.classList.toggle('active');
    }
}

function populateCityGrid() {
    const grid = document.getElementById('landing-city-grid');
    if (!grid) return;

    const cityNames = {
        berlin: "Berlin",
        hamburg: "Hamburg",
        muenchen: "München",
        koeln: "Köln",
        frankfurt: "Frankfurt am Main",
        stuttgart: "Stuttgart",
        duesseldorf: "Düsseldorf",
        dortmund: "Dortmund",
        essen: "Essen",
        leipzig: "Leipzig"
    };

    const cities = Object.keys(locationData).filter(key => key !== 'default');

    cities.forEach(cityKey => {
        const data = locationData[cityKey];
        const card = document.createElement('div');
        card.className = 'city-card';
        card.onclick = () => showCityView(cityKey);

        card.style.background = `linear-gradient(to top, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.2)), ${data.heroImage}`;
        card.style.setProperty('background-size', 'cover', 'important');
        card.style.setProperty('background-position', 'center', 'important');

        const displayName = cityNames[cityKey] || (cityKey.charAt(0).toUpperCase() + cityKey.slice(1));

        card.innerHTML = `
            <h3>${displayName}</h3>
            <span class="city-card-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
        `;
        grid.appendChild(card);
    });
}

function showLandingView() {
    document.getElementById('landing-view').style.display = 'block';
    document.getElementById('city-view').style.display = 'none';
    document.getElementById('btn-back-landing').style.display = 'none';

    document.querySelectorAll('.logo-text').forEach(el => {
        el.textContent = 'Rümpel Meister';
    });

    const navActions = document.getElementById('navActions');
    if (navActions && navActions.classList.contains('active')) {
        navActions.classList.remove('active');
    }

    // Hide contact actions on landing view
    const bookingBtn = document.getElementById('nav-booking-btn');
    if (bookingBtn) bookingBtn.style.display = 'none';

    const phoneBtn = document.getElementById('nav-phone-btn');
    if (phoneBtn) phoneBtn.style.display = 'none';

    // Hide mobile hamburger menu on landing view
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) mobileMenuBtn.style.display = 'none';

    // Hide opening hours on landing view
    const openingHoursCol = document.getElementById('footer-opening-hours');
    if (openingHoursCol) {
        openingHoursCol.style.display = 'none';
    }

    window.scrollTo(0, 0);
}

function showCityView(cityKey) {
    changeLocation(cityKey);
    document.getElementById('landing-view').style.display = 'none';
    document.getElementById('city-view').style.display = 'block';
    document.getElementById('btn-back-landing').style.display = 'flex';

    // Show contact actions on city view
    const bookingBtn = document.getElementById('nav-booking-btn');
    if (bookingBtn) bookingBtn.style.display = 'inline-flex';

    const phoneBtn = document.getElementById('nav-phone-btn');
    if (phoneBtn) phoneBtn.style.display = 'flex';

    // Show mobile hamburger menu on city view
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) mobileMenuBtn.style.display = '';

    // Show opening hours on city view
    const openingHoursCol = document.getElementById('footer-opening-hours');
    if (openingHoursCol) {
        openingHoursCol.style.display = 'block';
    }

    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    applyConfig();
    populateCityGrid();
    showLandingView(); // Always start on landing view
});
