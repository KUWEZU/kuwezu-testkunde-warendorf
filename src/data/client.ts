/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-03T18:30:39.531Z
 * Kundennummer: 20
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "Testkunde",
  branche: "KFZ / Autowerkstatt",
  ort: "Warendorf",
  slogan: "professionell & zuverlässig",
  adresse: "Teststraße",
  telefon: "0000 0000",
  email: "info@test.de",
  website: "",
  logo: "/logo.png",

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#90c030",
    secondary: "#787878",
    accent: "#a8a8a8",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/20/hero.webp",
    overlayOpacity: 0.55,
    ueberschrift: "KFZ / Autowerkstatt — professionell & zuverlässig",
    ueberschriftHighlight: "professionell & zuverlässig",
    untertext: "Ihr Partner für alle Belange rund um KFZ / Autowerkstatt in Warendorf und Umgebung.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/20/ueber-uns.webp",
    ueberschrift: "Testkunde — Ihr Partner in Warendorf",
    text1: "Als erfahrener KFZ / Autowerkstatt-Betrieb in Warendorf bieten wir unseren Kunden seit Jahren zuverlässigen Service und kompetente Beratung.",
    text2: "Wir setzen auf höchste Qualität, transparente Preise und persönlichen Service — damit Sie rundum zufrieden sind.",
    tags: ["Qualität", "Zuverlässigkeit", "Faire Preise", "Erfahrung"],
    stats: [
      { value: "10+",    label: "Jahre Erfahrung"   },
      { value: "1.000+", label: "Zufriedene Kunden" },
      { value: "5",      label: "Fachkräfte"        },
      { value: "5.000+", label: "Aufträge/Jahr"     },
    ],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/kunden/20/bremsen-1777833036976.webp",
      description: "Professionelle Bremsen — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/kunden/20/autoglas-1777833037687.webp",
      description: "Professionelle Autoglas — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    }
  ],

  // ── Karriere ───────────────────────────────────────────────────────────────
  karriere: {
    jobs: [
      { title: "Fachkraft (m/w/d)",       type: "Vollzeit",   experience: "Berufserfahrung erwünscht"  },
      { title: "Auszubildende (m/w/d)",    type: "Ausbildung", experience: "Schulabschluss erforderlich" },
    ],
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Mo–Fr 8:00–18:00", "Sa 9:00–13:00"],
    googleMapsUrl: "https://maps.google.com",
  },
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
