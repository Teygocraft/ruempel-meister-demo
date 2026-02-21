---
name: website-cloner
description: Automatisch neue Websites klonen — entweder aus einer Firmen-URL scrapen oder manuell eine company.json befüllen, dann generate_site.js ausführen und ein fertiger, deploybarer Klon entsteht.
---

# 🚀 Anti-Gravity Website Cloner Skill

Dieser Skill ermöglicht es, **vollständig neue Websites** für beliebige Unternehmen zu generieren — basierend auf der Rümpel-Meister-Vorlage. Ohne eine Zeile HTML anfassen zu müssen.

---

## 📋 Voraussetzungen

- Node.js installiert (v18+)
- Das Basis-Template liegt unter: `c:\Users\leozo\Desktop\antigravity\Youtube_Versuch\`
- Apify API Key (für automatisches Scraping, optional)

---

## Methode A: Automatisch (URL scrapen + Klon generieren)

### Schritt 1: Firmen-URL heraussuchen
Suche die Website des Ziel-Unternehmens. Zum Beispiel: `https://www.beispiel-entruempelung.de`

### Schritt 2: Daten scrapen mit Apify
Nutze den `apify/rag-web-browser` Actor, um die Firmen-Website zu scrapen:

```
Scrape die folgende Website und extrahiere folgende Informationen im JSON-Format:
- businessName: Firmenname
- tagline: Slogan/Kurzbeschreibung
- phoneNumber: Telefonnummer (lesbar, mit Leerzeichen)
- phoneNumberRaw: Telefonnummer (nur Ziffern + führendes +49 oder 0)
- emailAddress: E-Mail-Adresse
- address: Vollständige Adresse
- aboutText: "Über uns"-Text (max. 3 Sätze, zusammengefasst)
- services: Array mit [{title, description}] (max. 4 Leistungen)
- primaryColor: Hauptfarbe der Website als HEX (falls erkennbar, sonst "#2563eb")

URL: [FIRMEN-URL-HIER]
```

### Schritt 3: JSON speichern
Speichere die gescrapten Daten als `company.json` im Skill-Ordner.
Nutze `company_template.json` als Vorlage und befülle alle Felder.

### Schritt 4: Klon generieren
```powershell
cd c:\Users\leozo\Desktop\antigravity\Youtube_Versuch\.agents\skills\website-cloner
node generate_site.js --config company.json --name "firmenname"
```

Der Klon wird erstellt unter:
`c:\Users\leozo\Desktop\antigravity\clones\firmenname\`

---

## Methode B: Manuell (company.json direkt befüllen)

### Schritt 1: Template kopieren
```powershell
copy company_template.json company.json
```

### Schritt 2: company.json befüllen
Öffne `company.json` und fülle alle Pflichtfelder aus (mit `*` markiert).

### Schritt 3: Klon generieren
```powershell
node generate_site.js --config company.json --name "firmenname"
```

---

## 📁 Generierter Klon — Struktur

```
clones/firmenname/
├── index.html        ← Unverändert vom Template (keine Anpassung nötig!)
├── styles.css        ← Unverändert vom Template
├── siteconfig.js     ← ⭐ NUR DIESE DATEI ist firmen-spezifisch!
├── agb.html
├── impressum.html
├── datenschutz.html
└── vercel.json
```

## 🚀 Klon deployen (Vercel)

```powershell
cd c:\Users\leozo\Desktop\antigravity\clones\firmenname
npx vercel --prod
```

---

## 📌 Wichtige Felder in company.json

| Feld | Beschreibung | Pflicht |
|---|---|---|
| `businessName` | Vollständiger Firmenname | ✅ |
| `tagline` | Kurzer Slogan | ✅ |
| `logoUrl` | URL zum Firmen-Logo | ✅ |
| `faviconUrl` | URL zum Favicon (oft = logoUrl) | ✅ |
| `phoneNumber` | Lesbare Telefonnummer | ✅ |
| `phoneNumberRaw` | Nur Ziffern (für tel: Link) | ✅ |
| `emailAddress` | Kontakt E-Mail | ✅ |
| `address` | Vollständige Adresse | ✅ |
| `primaryColor` | Haupt-Akzentfarbe (HEX) | ✅ |
| `landingHeroImage` | CSS url('...') für Hero-Bild | ✅ |
| `services` | Array mit Leistungen | ✅ |
| `aboutText` | "Über uns"-Text | ✅ |
| `locationData` | Städte-spezifische Daten | Optional |

---

## 🔁 Workflow-Zusammenfassung

```
Firmen-URL  →  Apify Scraper  →  company.json  →  generate_site.js  →  Klon-Ordner  →  Vercel Deploy
```
