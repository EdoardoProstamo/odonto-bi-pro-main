/**
 * SITE_THEME - Configurazione univoca del design
 * Sistema Anti-Clone per garantire unicità visiva
 */
export const SITE_THEME = {
  // Scelte design system
  palette: "elegant-navy", // bianco + blu notte + accento oro tenue
  heroStyle: "split-layout", // testo sinistra / immagine destra
  servicesPresentation: "vertical-cards", // cards verticali con immagini
  graphicElements: "soft-shadows", // ombre soft e stile "card"
  gradients: "cta-only", // gradienti solo su CTA
  sectionOrder: [
    "hero",
    "reviews",
    "services",
    "strengths",
    "faq",
    "contact",
  ],

  // Font di sistema (no Google Fonts)
  fonts: {
    heading: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  // Animazioni
  animations: {
    duration: "300ms",
    easing: "ease-out",
    types: ["fade-in", "slide-up"],
  },
} as const;

// Dati struttura
export const BUSINESS_INFO = {
  name: "Studio Dentistico Odonto Bi Srl",
  shortName: "Odonto Bi",
  category: "Studio Dentistico",
  address: {
    street: "Via G. Ugolini, 6",
    cap: "20900",
    city: "Monza",
    province: "MB",
    country: "Italia",
    full: "Via G. Ugolini, 6 – 20900 Monza (MB), Italia",
  },
  phone: "+39 039 231 0667",
  phoneDisplay: "039 231 0667",
  vatNumber: "DA INSERIRE", // Campo obbligatorio
  hours: "DA INSERIRE", // Placeholder se non disponibili
  googleMapsUrl: "https://maps.google.com/?q=Via+G.+Ugolini+6+Monza+MB+Italia",
  googleReviewsUrl: "DA INSERIRE", // URL recensioni Google
} as const;

// Servizi offerti
export const SERVICES = [
  {
    id: "igiene",
    title: "Igiene e Prevenzione",
    description: "Pulizia dentale professionale, trattamenti al fluoro e programmi di prevenzione personalizzati per mantenere il tuo sorriso sano.",
    icon: "sparkles",
  },
  {
    id: "conservativa",
    title: "Odontoiatria Conservativa",
    description: "Cura delle carie e restauro dei denti danneggiati con tecniche moderne e materiali di alta qualità.",
    icon: "shield",
  },
  {
    id: "protesi",
    title: "Protesi Dentarie",
    description: "Soluzioni protesiche fisse e mobili per ripristinare funzionalità ed estetica del tuo sorriso.",
    icon: "crown",
  },
  {
    id: "implantologia",
    title: "Implantologia",
    description: "Impianti dentali all'avanguardia per sostituire i denti mancanti con risultati naturali e duraturi.",
    icon: "target",
  },
  {
    id: "ortodonzia",
    title: "Ortodonzia",
    description: "Correzione delle malocclusioni e allineamento dentale per adulti e bambini con apparecchi moderni.",
    icon: "alignCenter",
  },
  {
    id: "estetica",
    title: "Estetica Dentale",
    description: "Sbiancamento professionale, faccette e trattamenti estetici per un sorriso luminoso e perfetto.",
    icon: "star",
  },
] as const;

// Punti di forza
export const STRENGTHS = [
  {
    title: "Esperienza Professionale",
    description: "Team qualificato con anni di esperienza nel settore odontoiatrico.",
  },
  {
    title: "Tecnologie Moderne",
    description: "Attrezzature all'avanguardia per diagnosi precise e trattamenti efficaci.",
  },
  {
    title: "Ambiente Confortevole",
    description: "Studio accogliente progettato per il massimo comfort del paziente.",
  },
  {
    title: "Approccio Personalizzato",
    description: "Piani di cura su misura per le esigenze di ogni paziente.",
  },
] as const;

// FAQ
export const FAQ_ITEMS = [
  {
    question: "Come posso prenotare un appuntamento?",
    answer: "Puoi prenotare un appuntamento chiamando il nostro studio al numero 039 231 0667 durante gli orari di apertura.",
  },
  {
    question: "Quali metodi di pagamento accettate?",
    answer: "Accettiamo pagamenti in contanti, bancomat, carte di credito e offriamo la possibilità di rateizzazione per i trattamenti più impegnativi.",
  },
  {
    question: "Trattate anche le emergenze dentali?",
    answer: "Sì, gestiamo le urgenze dentali. In caso di emergenza, contattaci telefonicamente per verificare la disponibilità più rapida.",
  },
  {
    question: "Effettuate trattamenti per bambini?",
    answer: "Certamente. Il nostro team è specializzato anche in odontoiatria pediatrica, con un approccio delicato pensato per i più piccoli.",
  },
] as const;

// Recensioni reali (da inserire manualmente)
export const REVIEWS = [
  {
    id: 1,
    author: "Utente Google",
    rating: 5,
    text: "DA INSERIRE - Recensione reale dalla pagina Google dell'attività",
    date: "DA INSERIRE",
  },
  {
    id: 2,
    author: "Utente Google",
    rating: 5,
    text: "DA INSERIRE - Recensione reale dalla pagina Google dell'attività",
    date: "DA INSERIRE",
  },
  {
    id: 3,
    author: "Utente Google",
    rating: 5,
    text: "DA INSERIRE - Recensione reale dalla pagina Google dell'attività",
    date: "DA INSERIRE",
  },
] as const;
