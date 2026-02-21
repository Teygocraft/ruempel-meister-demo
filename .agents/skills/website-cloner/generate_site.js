#!/usr/bin/env node
/**
 * ============================================================
 * Anti-Gravity Website Clone Generator
 * ============================================================
 * Generiert einen vollständigen Website-Klon aus einer company.json.
 * 
 * Usage:
 *   node generate_site.js --config company.json --name "firmenname"
 *   node generate_site.js --config company.json --name "firmenname" --output "C:/pfad/zum/output"
 * 
 * Was das Script macht:
 *  1. company.json einlesen und validieren
 *  2. Template-Ordner in output/<name>/ kopieren
 *  3. Neue siteconfig.js generieren und im Klon-Ordner ablegen
 *  4. Fertig! Klon kann direkt auf Vercel deployed werden.
 */

const fs = require('fs');
const path = require('path');

// ── Konfiguration ─────────────────────────────────────────────────────────────
const TEMPLATE_DIR = path.resolve(__dirname, '../../..');  // Youtube_Versuch/
const OUTPUT_BASE = path.resolve(__dirname, '../../../../clones');

// Dateien die vom Template in den Klon kopiert werden
const FILES_TO_COPY = [
    'index.html',
    'styles.css',
    'agb.html',
    'impressum.html',
    'datenschutz.html',
    'vercel.json',
    'package.json',
    'server.js',
];

// ── CLI-Argumente parsen ──────────────────────────────────────────────────────
function parseArgs() {
    const args = process.argv.slice(2);
    const result = {};
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--config') result.config = args[i + 1];
        if (args[i] === '--name') result.name = args[i + 1];
        if (args[i] === '--output') result.output = args[i + 1];
    }
    return result;
}

// ── Validierung der Pflichtfelder ─────────────────────────────────────────────
const REQUIRED_FIELDS = [
    'businessName', 'tagline', 'logoUrl', 'faviconUrl',
    'phoneNumber', 'phoneNumberRaw', 'emailAddress', 'address',
    'primaryColor', 'aboutHeadline', 'aboutText', 'services'
];

function validate(config) {
    const missing = REQUIRED_FIELDS.filter(f => !config[f]);
    if (missing.length > 0) {
        console.error(`\n❌ Fehlende Pflichtfelder in company.json:\n   ${missing.join(', ')}\n`);
        process.exit(1);
    }
}

// ── siteconfig.js generieren ──────────────────────────────────────────────────
function generateSiteConfig(config) {
    // locationData: entweder aus company.json oder leer (kein Stadtwahlmodus)
    const locationData = config.locationData || {};
    // Standard-Eintrag generieren wenn keine locationData vorhanden
    if (Object.keys(locationData).filter(k => k !== '_comment').length === 0) {
        locationData.default = {
            businessName: config.businessName,
            heroHeadline: config.landingHeadline || config.tagline,
            heroSubheadline: config.landingSubheadline || '',
            heroImage: config.landingHeroImage || "url('')",
            featureImage: config.landingHeroImage || "url('')",
            seoHeadline: config.aboutHeadline,
            seoText: config.aboutText
        };
    }

    // locationData bereinigen (_comment entfernen)
    const cleanLocationData = Object.fromEntries(
        Object.entries(locationData).filter(([k]) => k !== '_comment')
    );

    return `// siteconfig.js
// ============================================================
// ANTI-GRAVITY WEBSITE CLONE SYSTEM — Konfigurations-Hub
// ============================================================
// Generiert von: generate_site.js am ${new Date().toLocaleDateString('de-DE')}
// Unternehmen: ${config.businessName}
// ============================================================

const locationData = ${JSON.stringify(cleanLocationData, null, 4)};

const siteConfig = {

    // ── MARKE & IDENTITÄT ────────────────────────────────────────
    businessName:      ${JSON.stringify(config.businessName)},
    tagline:           ${JSON.stringify(config.tagline || '')},
    logoUrl:           ${JSON.stringify(config.logoUrl || '')},
    logoAlt:           ${JSON.stringify(config.logoAlt || config.businessName)},
    faviconUrl:        ${JSON.stringify(config.faviconUrl || config.logoUrl || '')},

    // ── FARBEN ───────────────────────────────────────────────────
    primaryColor:      ${JSON.stringify(config.primaryColor || '#2563eb')},
    secondaryColor:    ${JSON.stringify(config.secondaryColor || '#eff6ff')},
    accentColor:       ${JSON.stringify(config.accentColor || '#f59e0b')},

    // ── KONTAKT ──────────────────────────────────────────────────
    phoneNumber:       ${JSON.stringify(config.phoneNumber || '')},
    phoneNumberRaw:    ${JSON.stringify(config.phoneNumberRaw || '')},
    emailAddress:      ${JSON.stringify(config.emailAddress || '')},
    address:           ${JSON.stringify(config.address || '')},

    // ── ÖFFNUNGSZEITEN ───────────────────────────────────────────
    openingHoursMoFr:  ${JSON.stringify(config.openingHoursMoFr || 'Mo-Fr: 08:00 - 18:00 Uhr')},
    openingHoursSat:   ${JSON.stringify(config.openingHoursSat || 'Sa: 09:00 - 14:00 Uhr')},
    openingHoursSun:   ${JSON.stringify(config.openingHoursSun || 'So: Geschlossen')},

    // ── LANDING PAGE ─────────────────────────────────────────────
    landingHeroImage:    ${JSON.stringify(config.landingHeroImage || "url('')")},
    landingTagline:      ${JSON.stringify(config.landingTagline || 'Lokale Experten')},
    landingHeadline:     ${JSON.stringify(config.landingHeadline || config.tagline || '')},
    landingSubheadline:  ${JSON.stringify(config.landingSubheadline || '')},

    // ── TRUST & BEWERTUNGEN ──────────────────────────────────────
    reviewsCount:      ${JSON.stringify(config.reviewsCount || '+100')},

    // ── ÜBER UNS ─────────────────────────────────────────────────
    aboutHeadline:     ${JSON.stringify(config.aboutHeadline || '')},
    aboutText:         ${JSON.stringify(config.aboutText || '')},

    // ── LEISTUNGEN ───────────────────────────────────────────────
    services: ${JSON.stringify(config.services || [], null, 8)},

    // ── VORTEILE / FEATURES ──────────────────────────────────────
    features: ${JSON.stringify(config.features || [], null, 8)}
};

${applyConfigFunctionCode()}

${helperFunctionCode()}

document.addEventListener('DOMContentLoaded', () => {
    applyConfig();
    populateCityGrid();
    showLandingView();
});
`;
}

// ── applyConfig() Funktion Code ───────────────────────────────────────────────
function applyConfigFunctionCode() {
    return `function applyConfig() {
    document.documentElement.style.setProperty('--primary', siteConfig.primaryColor);
    document.documentElement.style.setProperty('--secondary', siteConfig.secondaryColor);
    document.documentElement.style.setProperty('--accent', siteConfig.accentColor);

    const logoImg = document.getElementById('site-logo');
    if (logoImg) { logoImg.src = siteConfig.logoUrl; logoImg.alt = siteConfig.logoAlt || siteConfig.businessName; }

    const favicon = document.getElementById('site-favicon');
    if (favicon && siteConfig.faviconUrl) favicon.href = siteConfig.faviconUrl;

    const phoneHref = document.getElementById('nav-phone-href');
    if (phoneHref) phoneHref.href = 'tel:' + siteConfig.phoneNumberRaw;

    const landingHero = document.getElementById('landing-hero-section');
    if (landingHero) {
        landingHero.style.background = \`linear-gradient(rgba(248, 250, 252, 0.5), rgba(248, 250, 252, 0.8)), \${siteConfig.landingHeroImage} center/cover\`;
    }

    const landingTaglineEl = document.getElementById('landing-tagline');
    if (landingTaglineEl) landingTaglineEl.textContent = siteConfig.landingTagline;
    const landingHeadlineEl = document.getElementById('landing-headline');
    if (landingHeadlineEl) landingHeadlineEl.innerHTML = siteConfig.landingHeadline;
    const landingSubEl = document.getElementById('landing-subheadline');
    if (landingSubEl) landingSubEl.textContent = siteConfig.landingSubheadline;

    document.querySelectorAll('[data-bind]').forEach(el => {
        const key = el.getAttribute('data-bind');
        if (siteConfig[key] !== undefined) el.textContent = siteConfig[key];
    });

    const grid = document.getElementById('services-grid');
    if (grid && siteConfig.services) {
        const defaultIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>\`;
        siteConfig.services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = \`<div class="service-icon">\${defaultIcon}</div><h3>\${service.title}</h3><p>\${service.description}</p>\`;
            grid.appendChild(card);
        });
    }

    const featureList = document.getElementById('feature-list');
    if (featureList && siteConfig.features) {
        siteConfig.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = \`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>\${feature}</span>\`;
            featureList.appendChild(li);
        });
    }
}`;
}

// ── Helper-Funktionen Code ────────────────────────────────────────────────────
function helperFunctionCode() {
    // Liest die originale siteconfig.js und extrahiert nur die Helper-Funktionen
    // Alternativ: direkt hier definieren (robuster)
    return `function changeLocation(cityKey) {
    const data = locationData[cityKey] || { ...locationData.default, businessName: siteConfig.businessName + ' ' + cityKey.charAt(0).toUpperCase() + cityKey.slice(1) };

    // Firmen-spezifische Felder in siteConfig schreiben damit data-bind sie aufnimmt
    siteConfig.businessName    = data.businessName    || siteConfig.businessName;
    siteConfig.heroHeadline    = data.heroHeadline    || siteConfig.heroHeadline;
    siteConfig.heroSubheadline = data.heroSubheadline || siteConfig.heroSubheadline;

    document.querySelectorAll('[data-bind]').forEach(el => {
        const key = el.getAttribute('data-bind');
        if (siteConfig[key] !== undefined) el.textContent = siteConfig[key];
    });

    const heroSection = document.getElementById('hero-section');
    if (heroSection) heroSection.style.backgroundImage = \`linear-gradient(rgba(248, 250, 252, 0.75), rgba(248, 250, 252, 0.85)), \${data.heroImage || siteConfig.landingHeroImage}\`;
    document.documentElement.style.setProperty('--feature-bg', data.featureImage || siteConfig.landingHeroImage);

    const localHeadline = document.getElementById('local-headline');
    if (localHeadline) localHeadline.textContent = data.seoHeadline || '';
    const localTextObj = document.getElementById('local-text');
    if (localTextObj) localTextObj.textContent = data.seoText || '';
}

function toggleMenu() {
    const navActions = document.getElementById('navActions');
    if (navActions) navActions.classList.toggle('active');
}

function populateCityGrid() {
    const grid = document.getElementById('landing-city-grid');
    if (!grid) return;
    const cities = Object.keys(locationData).filter(key => key !== 'default');
    if (cities.length === 0) {
        // Kein Stadtmodus: Direkt zur einzigen Stadtansicht
        showCityView('default');
        return;
    }
    cities.forEach(cityKey => {
        const data = locationData[cityKey];
        const card = document.createElement('div');
        card.className = 'city-card';
        card.onclick = () => showCityView(cityKey);
        card.style.background = \`linear-gradient(to top, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.2)), \${data.heroImage}\`;
        card.style.setProperty('background-size', 'cover', 'important');
        card.style.setProperty('background-position', 'center', 'important');
        const displayName = cityKey.charAt(0).toUpperCase() + cityKey.slice(1);
        card.innerHTML = \`<h3>\${displayName}</h3><span class="city-card-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>\`;
        grid.appendChild(card);
    });
}

function showLandingView() {
    const hasCities = Object.keys(locationData).filter(k => k !== 'default').length > 0;
    if (!hasCities) { showCityView('default'); return; }
    document.getElementById('landing-view').style.display = 'block';
    document.getElementById('city-view').style.display = 'none';
    document.getElementById('btn-back-landing').style.display = 'none';
    document.querySelectorAll('.logo-text').forEach(el => { el.textContent = siteConfig.businessName; });
    const navActions = document.getElementById('navActions');
    if (navActions && navActions.classList.contains('active')) navActions.classList.remove('active');
    const bookingBtn = document.getElementById('nav-booking-btn');
    if (bookingBtn) bookingBtn.style.display = 'none';
    const phoneBtn = document.getElementById('nav-phone-href');
    if (phoneBtn) phoneBtn.style.display = 'none';
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) mobileMenuBtn.style.display = 'none';
    const openingHoursCol = document.getElementById('footer-opening-hours');
    if (openingHoursCol) openingHoursCol.style.display = 'none';
    window.scrollTo(0, 0);
}

function showCityView(cityKey) {
    changeLocation(cityKey);
    document.getElementById('landing-view').style.display = 'none';
    document.getElementById('city-view').style.display = 'block';
    document.getElementById('btn-back-landing').style.display = 'flex';
    const bookingBtn = document.getElementById('nav-booking-btn');
    if (bookingBtn) bookingBtn.style.display = 'inline-flex';
    const phoneBtn = document.getElementById('nav-phone-href');
    if (phoneBtn) phoneBtn.style.display = 'flex';
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) mobileMenuBtn.style.display = '';
    const openingHoursCol = document.getElementById('footer-opening-hours');
    if (openingHoursCol) openingHoursCol.style.display = 'block';
    window.scrollTo(0, 0);
}`;
}

// ── Ordner kopieren ───────────────────────────────────────────────────────────
function copyTemplateFiles(outputDir) {
    FILES_TO_COPY.forEach(file => {
        const src = path.join(TEMPLATE_DIR, file);
        const dest = path.join(outputDir, file);
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, dest);
            console.log(`   ✅ Kopiert: ${file}`);
        } else {
            console.log(`   ⚠️  Nicht gefunden (übersprungen): ${file}`);
        }
    });
}

// ── Hauptprozess ──────────────────────────────────────────────────────────────
function main() {
    const args = parseArgs();

    if (!args.config) {
        console.error('\n❌ Fehler: --config <company.json> ist erforderlich.\n');
        console.log('Beispiel: node generate_site.js --config company.json --name "meine-firma"\n');
        process.exit(1);
    }

    if (!args.name) {
        console.error('\n❌ Fehler: --name <firmenname> ist erforderlich.\n');
        process.exit(1);
    }

    // 1. Config einlesen
    const configPath = path.resolve(process.cwd(), args.config);
    if (!fs.existsSync(configPath)) {
        console.error(`\n❌ Config-Datei nicht gefunden: ${configPath}\n`);
        process.exit(1);
    }

    let config;
    try {
        const raw = fs.readFileSync(configPath, 'utf-8');
        config = JSON.parse(raw);
    } catch (e) {
        console.error(`\n❌ Fehler beim Parsen der JSON-Datei: ${e.message}\n`);
        process.exit(1);
    }

    // 2. Validieren
    validate(config);

    // 3. Output-Ordner bestimmen
    const outputBase = args.output ? path.resolve(args.output) : OUTPUT_BASE;
    const safeName = args.name.toLowerCase().replace(/[^a-z0-9-_]/g, '-');
    const outputDir = path.join(outputBase, safeName);

    // 4. Output-Ordner erstellen
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`\n🚀 Anti-Gravity Website Clone Generator`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`📂 Klon-Ordner: ${outputDir}`);
    console.log(`🏢 Unternehmen: ${config.businessName}`);
    console.log(`\n📋 Kopiere Template-Dateien...`);

    // 5. Template-Dateien kopieren
    copyTemplateFiles(outputDir);

    // 6. siteconfig.js generieren
    const siteconfigContent = generateSiteConfig(config);
    const siteconfigPath = path.join(outputDir, 'siteconfig.js');
    fs.writeFileSync(siteconfigPath, siteconfigContent, 'utf-8');
    console.log(`   ✅ Generiert: siteconfig.js`);

    // 7. Fertig!
    console.log(`\n✨ Klon erfolgreich erstellt!\n`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`📁 Ort:    ${outputDir}`);
    console.log(`\n🌐 Lokal testen:`);
    console.log(`   cd "${outputDir}"`);
    console.log(`   npx serve .`);
    console.log(`\n🚀 Auf Vercel deployen:`);
    console.log(`   cd "${outputDir}"`);
    console.log(`   npx vercel --prod\n`);
}

main();
