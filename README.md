# AALA Pharma - Corporate Healthcare & Formulations Website

A modern, responsive, and trustworthy website for **AALA Pharma**, a pharmaceutical manufacturer based in Bareilly, Uttar Pradesh, specializing in WHO-GMP certified oral solid dosage forms, liquids, injectables, and topical formulations.

---

## 🌟 Overview & Key Features

* **Strict Tech Stack**:
  * **HTML5**: Pure semantic markup (`header`, `nav`, `main`, `section`, `article`, `footer`).
  * **CSS3**: Mobile-first responsive layout (360px, 768px, 1024px, 1440px), CSS custom properties/variables, Flexbox, Grid, transitions, and scroll reveal animations. No external UI frameworks.
  * **Vanilla JavaScript (ES6+)**: Zero dependencies or external libraries.
* **Interactive Product Catalogue**:
  * Filterable by dosage category: Tablets, Capsules, Syrups & Liquids, Injectables, and Ointments/Gels.
  * Real-time search by brand name, active molecule/composition, or therapeutic category.
  * Comprehensive Product Detail Modal with dosage form, packaging, indication, and storage conditions.
  * Pre-populated inquiry flow connecting directly to the contact module.
* **Animated Elements**:
  * IntersectionObserver-driven counter animations for key business milestones.
  * Auto-playing, touch-friendly testimonial slider/carousel with dot indicators and hover pause.
  * Scroll-reveal staggered animations for all content blocks.
* **Accessible Navigation & Sticky Header**:
  * Sticky top bar with contact details and quality badges.
  * Responsive mobile drawer navigation with animated hamburger trigger and backdrop dismissal.
  * Dynamic active-page nav link highlighting.
  * Floating Back-to-Top scroll controller.
* **Production-Ready Forms**:
  * Comprehensive client-side form validation (Full Name, Email, 10-digit Indian Mobile, Message length).
  * Accessible inline feedback and dynamic success confirmation banners.
  * Ready for seamless PHP/MySQL backend handling.

---

## 🏢 Corporate Information

* **Company Name**: AALA Pharma
* **Headquarters & Plant**: Quila, Aonla, Bareilly 243301, Uttar Pradesh, India
* **Telephone**: +91 98765 43211
* **Email**: [info@aalapharma.com](mailto:info@aalapharma.com)
* **Certifications**: WHO-GMP, ISO 9001:2015, GLP Compliant, DCGI Approved

---

## 📂 Site Structure

```
AALA Pharma/
├── index.html                   # Homepage (Hero, Stats, Therapeutics, Featured Products, Certs, Testimonials, News)
├── about.html                   # About Us (Story, Vision, Mission, Core Values, Heritage Timeline, Leadership)
├── products.html                # Products Catalogue (Filterable & Searchable Grid, Product Modal, PCD Callout)
├── quality.html                 # Manufacturing & Quality (Cleanrooms, QA/QC Protocols, HPLC, Pharmacovigilance)
├── rnd.html                     # Research & Development (Formulation R&D, AMDV, Stability Chambers, CTD Dossiers)
├── careers.html                 # Careers (Work Culture, Benefits, Live Job Vacancies, Application Form)
├── contact.html                 # Contact (Validated Enquiry Form, Plant Address, Phone, GPS Map Placeholder)
├── css/
│   └── style.css                # Pure CSS3 stylesheet with CSS variables and responsive breakpoints
├── js/
│   └── main.js                  # Vanilla ES6+ application logic and product database
└── README.md
```

---

## 🚀 Quick Start

1. **Direct Browser**: Double-click `index.html` to open in any modern web browser.
2. **Local HTTP Server**:
   ```bash
   python -m http.server 8000
   # Open http://localhost:8000 in your browser
   ```

---

## ⚖️ Legal & Medical Disclaimer

> **Important Notice**: Information presented on this website is intended solely for general educational and informational purposes and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified physician or healthcare provider regarding any medical condition or prescription drug.
