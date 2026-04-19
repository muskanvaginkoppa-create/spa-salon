import { useState, useEffect, useRef } from "react";

// ─── GOOGLE FONTS ────────────────────────────────────────────────────────────
const FontLoader = () => (
  <style>{`
    @import url(https://png.pngtree.com/thumb_back/fh260/background/20241116/pngtree-luxurious-spa-salon-interior-with-lush-greenery-image_16526373.jpg);

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --cream: #faf7f2;
      --ivory: #f5f0e8;
      --beige: #e8dfd0;
      --sand: #d4c4a8;
      --gold: #c9a96e;
      --gold-light: #e8d5a3;
      --gold-dark: #a07840;
      --sage: #8a9e8c;
      --sage-light: #b8c9ba;
      --blush: #e8cfc8;
      --stone: #7a6e62;
      --charcoal: #2c2620;
      --warm-gray: #9e9188;
      --white: #ffffff;
      --glass: rgba(255,255,255,0.15);
      --glass-border: rgba(201,169,110,0.2);
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Poppins', sans-serif;
      background: var(--cream);
      color: var(--charcoal);
      overflow-x: hidden;
    }

    h1, h2, h3, h4 { font-family: 'Playfair Display', serif; }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--ivory); }
    ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 3px; }

    /* Animations */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideLeft {
      from { opacity: 0; transform: translateX(-40px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes scaleIn {
      from { transform: scale(0.92); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    .animate-fadeUp { animation: fadeUp 0.7s ease forwards; }
    .animate-fadeIn { animation: fadeIn 0.6s ease forwards; }
    .animate-slideLeft { animation: slideLeft 0.7s ease forwards; }
    .animate-float { animation: float 4s ease-in-out infinite; }
    .animate-scaleIn { animation: scaleIn 0.5s ease forwards; }

    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
    .delay-600 { animation-delay: 0.6s; }

    /* Gold gradient text */
    .gold-text {
      background: linear-gradient(135deg, #c9a96e, #e8d5a3, #a07840);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .gold-shimmer {
      background: linear-gradient(90deg, #c9a96e 0%, #e8d5a3 40%, #c9a96e 60%, #a07840 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s linear infinite;
    }

    /* Gold divider */
    .gold-divider {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .gold-divider::before,
    .gold-divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--gold), transparent);
    }

    /* Glassmorphism */
    .glass-card {
      background: rgba(255,255,255,0.6);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(201,169,110,0.2);
    }

    /* Btn styles */
    .btn-gold {
      background: linear-gradient(135deg, var(--gold-dark), var(--gold));
      color: white;
      border: none;
      padding: 25px 50px;
      font-family: 'Poppins', sans-serif;
      font-size: 0.85rem;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.35s ease;
      position: relative;
      overflow: hidden;
      border-radius: 2px;
    }
    .btn-gold::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(160,120,64,0.4); }
    .btn-gold:hover::after { opacity: 1; }
    .btn-gold:active { transform: translateY(0); }

    .btn-outline-gold {
      background: transparent;
      color: var(--gold-dark);
      border: 1px solid var(--gold);
      padding: 0%;
      font-family: 'Poppins', sans-serif;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s ease;
      border-radius: 2px;
    }
    .btn-outline-gold:hover {
      background: var(--gold);
      color: white;
      transform: translateY(-2px);
    }

    /* Nav */
    .navbar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      transition: all 0.4s ease;
      padding: 0;
    }
    .navbar.scrolled {
      background: rgba(250,247,242,0.95);
      backdrop-filter: blur(20px);
      box-shadow: 0 2px 40px rgba(44,38,32,0.08);
      padding: 0;
    }
    .nav-link {
      color: var(--stone);
      text-decoration: none;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 0;
      position: relative;
      transition: color 0.3s;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px; left: 0;
      width: 0; height: 1px;
      background: var(--gold);
      transition: width 0.3s ease;
    }
    .nav-link:hover, .nav-link.active { color: var(--gold-dark); }
    .nav-link:hover::after, .nav-link.active::after { width: 100%; }

    /* Section headers */
    .section-label {
      font-family: 'Poppins', sans-serif;
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--gold);
    }
    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.8rem, 4vw, 3rem);
      font-weight: 400;
      color: var(--charcoal);
      line-height: 1.2;
    }

    /* Service card */
    .service-card {
      background: white;
      border-radius: 4px;
      overflow: hidden;
      transition: all 0.4s ease;
      border: 1px solid rgba(212,196,168,0.3);
    }
    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(44,38,32,0.12);
    }
    .service-card img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
    .service-card:hover img { transform: scale(1.05); }

    /* Team card */
    .team-card {
      background: white;
      border-radius: 4px;
      overflow: hidden;
      transition: all 0.4s ease;
      border: 1px solid rgba(212,196,168,0.3);
      cursor: pointer;
    }
    .team-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 50px rgba(44,38,32,0.1);
    }
    .team-card img {
      width: 100%;
      height: 280px;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
    .team-card:hover img { transform: scale(1.04); }

    /* Gallery grid */
    .gallery-item {
      overflow: hidden;
      border-radius: 4px;
      cursor: pointer;
      position: relative;
    }
    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
    .gallery-item:hover img { transform: scale(1.08); }
    .gallery-item .overlay {
      position: absolute;
      inset: 0;
      background: rgba(44,38,32,0);
      transition: background 0.4s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .gallery-item:hover .overlay { background: rgba(44,38,32,0.35); }

    /* Testimonial */
    .testimonial-slider { overflow: hidden; }

    /* Form inputs */
    .form-input, .form-select, .form-textarea {
      width: 100%;
      padding: 0%;
      border: 1px solid var(--beige);
      background: white;
      font-family: 'Poppins', sans-serif;
      font-size: 0.875rem;
      color: var(--charcoal);
      border-radius: 2px;
      transition: border-color 0.3s, box-shadow 0.3s;
      outline: none;
    }
    .form-input:focus, .form-select:focus, .form-textarea:focus {
      border-color: var(--gold);
      box-shadow: 0 0 0 3px rgba(201,169,110,0.1);
    }
    .form-label {
      display: block;
      font-size: 0.78rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--stone);
      margin-bottom: 8px;
    }

    /* Tab */
    .tab-btn {
      background: transparent;
      border: none;
      padding: 0%;
      font-family: 'Poppins', sans-serif;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      cursor: pointer;
      color: var(--warm-gray);
      position: relative;
      transition: color 0.3s;
    }
    .tab-btn::after {
      content: '';
      position: absolute;
      bottom: 0; left: 50%; right: 50%;
      height: 2px;
      background: var(--gold);
      transition: all 0.3s ease;
    }
    .tab-btn.active { color: var(--gold-dark); }
    .tab-btn.active::after { left: 0; right: 0; }
    .tab-btn:hover { color: var(--gold-dark); }

    /* Gift card */
    .gift-card-visual {
      background: linear-gradient(135deg, var(--charcoal) 0%, #3d3028 50%, var(--charcoal) 100%);
      border-radius: 16px;
      padding: 0%;
      position: relative;
      overflow: hidden;
      color: white;
    }
    .gift-card-visual::before {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 300px; height: 300px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 70%);
    }

    /* Hero */
    .hero-section {
      position: relative;
      height: 100vh;
      min-height: 680px;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    /* Category strip */
    .category-chip {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0%;
    }
    .category-chip:hover { transform: translateY(-4px); }
    .category-icon {
      width: 56px; height: 56px;
      border-radius: 50%;
      background: var(--ivory);
      border: 1px solid var(--gold-light);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      transition: all 0.3s ease;
    }
    .category-chip:hover .category-icon {
      background: var(--gold);
      border-color: var(--gold);
    }

    /* Loading */
    .loader-bar {
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--gold), transparent);
      animation: shimmer 1.5s linear infinite;
      background-size: 200% auto;
    }

    /* Marquee */
    .marquee-track {
      display: flex;
      animation: marquee 25s linear infinite;
      white-space: nowrap;
    }

    /* Utility */
    .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .section-pad { padding: 90px 0; }
    .img-cover { width: 100%; height: 100%; object-fit: cover; display: block; }

    /* Mobile menu */
    .mobile-menu {
      position: fixed;
      inset: 0;
      background: var(--cream);
      z-index: 999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
      transition: all 0.4s ease;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .desktop-nav { display: none; }
      .section-pad { padding: 60px 0; }
    }
    @media (min-width: 769px) {
      .mobile-nav-btn { display: none; }
    }
  `}</style>
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
const SERVICES = {
  Hair: [
    { id: "h1", name: "Luxe Blow-Dry & Style", desc: "Salon-perfect blowout tailored to your texture and desired finish.", price: "₹1,200", duration: "45 min", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&q=80", addons: ["Deep conditioning", "Scalp massage", "Argan oil treatment"] },
    { id: "h2", name: "Precision Cut & Style", desc: "Expert cut with customized styling for your face shape and lifestyle.", price: "₹1,800", duration: "60 min", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80", addons: ["Color consultation", "Glossing treatment"] },
    { id: "h3", name: "Keratin Smoothing", desc: "Eliminate frizz and restore silkiness with our premium keratin treatment.", price: "₹6,000", duration: "180 min", image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=500&q=80", addons: ["Post-treatment shampoo kit", "Follow-up blowout"] },
  ],
  Skin: [
    { id: "s1", name: "Hydra-Glow Facial", desc: "Deeply hydrating facial with hyaluronic acid and botanical extracts.", price: "₹2,500", duration: "75 min", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80", addons: ["LED therapy", "Eye contour mask"] },
    { id: "s2", name: "Gold Leaf Ritual", desc: "Signature 24k gold infusion facial for luminosity and anti-aging.", price: "₹4,800", duration: "90 min", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&q=80", addons: ["Gold sheet mask", "Collagen booster"] },
    { id: "s3", name: "Deep Pore Purifying", desc: "Charcoal and clay-based cleanse for congested, oily skin.", price: "₹2,200", duration: "60 min", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&q=80", addons: ["Extractions", "Calming peptide serum"] },
  ],
  Nails: [
    { id: "n1", name: "Signature Manicure", desc: "Classic manicure with cuticle care, shaping, and premium polish.", price: "₹900", duration: "45 min", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80", addons: ["Gel polish", "Nail art accent"] },
    { id: "n2", name: "Luxury Spa Pedicure", desc: "Foot soak, exfoliation, mask, massage, and polish application.", price: "₹1,500", duration: "75 min", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=500&q=80", addons: ["Paraffin wax dip", "Callus removal"] },
    { id: "n3", name: "Nail Artistry Session", desc: "Custom nail art designs from minimalist to intricate by our specialists.", price: "₹1,800", duration: "60 min", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80", addons: ["3D nail gems", "Chrome powder finish"] },
  ],
  Massage: [
    { id: "m1", name: "Swedish Relaxation", desc: "Long, flowing strokes to ease tension and melt away stress.", price: "₹2,800", duration: "60 min", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80", addons: ["Aromatherapy upgrade", "Hot towel wrap"] },
    { id: "m2", name: "Deep Tissue Therapy", desc: "Targeted pressure therapy for chronic muscle tension and soreness.", price: "₹3,200", duration: "75 min", image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&q=80", addons: ["Cupping therapy", "Heated stones"] },
    { id: "m3", name: "Hot Stone Ritual", desc: "Smooth volcanic stones melt tension while balancing energy flow.", price: "₹3,800", duration: "90 min", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&q=80", addons: ["Essential oil blend", "Scalp massage"] },
  ],
  "Body Treatments": [
    { id: "b1", name: "Coffee & Sugar Scrub", desc: "Invigorating full-body exfoliation with cold-press coffee and raw sugar.", price: "₹2,600", duration: "60 min", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&q=80", addons: ["Hydrating body wrap", "Moisturizing finish"] },
    { id: "b2", name: "Seaweed Detox Wrap", desc: "Marine algae wrap to detoxify, slim, and restore skin firmness.", price: "₹3,400", duration: "75 min", image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&q=80", addons: ["Lymphatic drainage", "Mineral mist"] },
  ],
};

const TEAM = [
  { name: "Ananya Krishnan", role: "Master Stylist", specialty: "Balayage & Color", exp: 9, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "Rohan Mehta", role: "Spa Therapist", specialty: "Deep Tissue & Ayurveda", exp: 7, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Priya Sharma", role: "Skin Specialist", specialty: "Anti-aging & Facials", exp: 11, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Deepa Nair", role: "Nail Artist", specialty: "Nail Art & Gel", exp: 5, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
  { name: "Vikram Singh", role: "Senior Therapist", specialty: "Hot Stone & Reiki", exp: 8, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Meera Rao", role: "Beauty Consultant", specialty: "Bridal & Makeup", exp: 6, image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
];

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80", span: "col-span-1" },
];

const TESTIMONIALS = [
  { name: "Preethi Venkat", role: "Regular Client", text: "Serenity Spa is an absolute haven. The Gold Leaf Facial left my skin glowing for weeks. The ambiance, the therapists, the attention to detail — truly world-class.", stars: 5 },
  { name: "Kavitha Sundaram", role: "Bridal Client", text: "I got my bridal prep done here and could not have asked for a more perfect experience. Ananya worked magic with my hair. Every detail was perfectly curated.", stars: 5 },
  { name: "Ramesh Iyer", role: "Monthly Member", text: "The Deep Tissue Massage with Vikram is the highlight of my month. I leave feeling completely renewed. The hot stone ritual is equally divine.", stars: 5 },
  { name: "Nithya Bhat", role: "Gift Card Recipient", text: "Received a gift card for my birthday — it was the most thoughtful gift I've ever gotten. I now come every week. The nail artistry team is phenomenal.", stars: 5 },
];

// ─── ROUTER (hash-based) ──────────────────────────────────────────────────────
const useRoute = () => {
  const [route, setRoute] = useState(window.location.hash || "#home");
  useEffect(() => {
    const handler = () => setRoute(window.location.hash || "#home");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  const navigate = (path) => { window.location.hash = path; window.scrollTo({ top: 0, behavior: "smooth" }); };
  return { route, navigate };
};

// ─── USE SCROLL REVEAL ────────────────────────────────────────────────────────
const useScrollReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      io.observe(el);
    });
    return () => io.disconnect();
  });
};

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
const Navbar = ({ route, navigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", hash: "#home" },
    { label: "Services", hash: "#services" },
    { label: "Our Team", hash: "#team" },
    { label: "Gallery", hash: "#gallery" },
    { label: "Gift Cards", hash: "#giftcards" },
    { label: "Contact", hash: "#contact" },
  ];

  const go = (hash) => { navigate(hash); setMobileOpen(false); };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div onClick={() => go("#home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.05em" }}>✦</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 600, color: "var(--charcoal)", lineHeight: 1 }}>Serenity</div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.55rem", letterSpacing: "0.35em", color: "var(--gold)", textTransform: "uppercase" }}>Spa & Salon</div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {links.map(l => (
              <a key={l.hash} onClick={e => { e.preventDefault(); go(l.hash); }} href={l.hash}
                className={`nav-link ${route === l.hash ? "active" : ""}`}>{l.label}</a>
            ))}
          </div>

          {/* Book + hamburger */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <button className="btn-gold desktop-nav" onClick={() => go("#contact")} style={{ padding: "10px 24px", fontSize: "0.72rem" }}>Book Now</button>
            <button className="mobile-nav-btn" onClick={() => setMobileOpen(true)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "flex", flexDirection: "column", gap: "5px" }}>
              {[0,1,2].map(i => <span key={i} style={{ display: "block", width: i === 1 ? "18px" : "24px", height: "1.5px", background: "var(--charcoal)", marginLeft: i === 1 ? "auto" : 0 }}/>)}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu" style={{ animation: "fadeIn 0.3s ease" }}>
          <button onClick={() => setMobileOpen(false)} style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "var(--stone)" }}>✕</button>
          {links.map(l => (
            <a key={l.hash} href={l.hash} onClick={e => { e.preventDefault(); go(l.hash); }}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "var(--charcoal)", textDecoration: "none", fontStyle: "italic" }}>{l.label}</a>
          ))}
          <button className="btn-gold" onClick={() => go("#contact")}>Book Appointment</button>
        </div>
      )}
    </>
  );
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const Footer = ({ navigate }) => (
  <footer style={{ background: "var(--charcoal)", color: "rgba(255,255,255,0.7)", paddingTop: 70, paddingBottom: 36 }}>
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, marginBottom: 56 }}>
        {/* Brand */}
        <div>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 500, color: "white", marginBottom: 4 }}>Serenity</div>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--gold)", textTransform: "uppercase" }}>Spa & Salon</div>
          </div>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", maxWidth: 240 }}>Where luxury meets wellness. Your sanctuary of calm and beauty in the heart of the city.</p>
          <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
            {["Instagram", "Facebook", "Pinterest", "YouTube"].map(s => (
              <a key={s} href="#" style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(201,169,110,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.55rem", color: "var(--gold)", textDecoration: "none", letterSpacing: "0.04em", transition: "all 0.3s" }}
                onMouseOver={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "white"; }}
                onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}>
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ color: "white", fontFamily: "'Poppins', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>Navigate</h4>
          {["Services", "Our Team", "Gallery", "Gift Cards", "Contact"].map(l => (
            <div key={l} style={{ marginBottom: 12 }}>
              <a href={`#${l.toLowerCase().replace(" ", "")}`} onClick={e => { e.preventDefault(); navigate(`#${l.toLowerCase().replace(" ", "")}`); }}
                style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.3s" }}
                onMouseOver={e => e.currentTarget.style.color = "var(--gold)"}
                onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>{l}</a>
            </div>
          ))}
        </div>

        {/* Hours */}
        <div>
          <h4 style={{ color: "white", fontFamily: "'Poppins', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>Hours</h4>
          {[["Mon – Fri", "9:00 AM – 8:00 PM"], ["Saturday", "8:00 AM – 9:00 PM"], ["Sunday", "10:00 AM – 6:00 PM"]].map(([d, t]) => (
            <div key={d} style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontSize: "0.85rem" }}>
              <span style={{ color: "rgba(255,255,255,0.5)" }}>{d}</span>
              <span style={{ color: "var(--gold-light)" }}>{t}</span>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: "white", fontFamily: "'Poppins', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>Contact</h4>
          {[
            ["📍", "12 MG Road, Mysuru, Karnataka 570001"],
            ["📞", "+91 821 234 5678"],
            ["✉", "hello@serenityspa.in"],
          ].map(([icon, text]) => (
            <div key={text} style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ fontSize: "0.85rem", marginTop: 1 }}>{icon}</span>
              <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>© 2025 Serenity Spa & Salon. All rights reserved.</p>
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>Crafted with care in Mysuru, India.</p>
      </div>
    </div>
  </footer>
);

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────
const ServiceCard = ({ service, onDetail }) => (
  <div className="service-card" data-reveal>
    <div style={{ overflow: "hidden" }}>
      <img src={service.image} alt={service.name} loading="lazy" />
    </div>
    <div style={{ padding: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 500, fontFamily: "'Playfair Display', serif", color: "var(--charcoal)", lineHeight: 1.3 }}>{service.name}</h3>
        <span className="gold-text" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 600, whiteSpace: "nowrap", marginLeft: 12 }}>{service.price}</span>
      </div>
      <p style={{ fontSize: "0.82rem", color: "var(--warm-gray)", lineHeight: 1.7, marginBottom: 16 }}>{service.desc}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.75rem", color: "var(--sage)", letterSpacing: "0.06em" }}>⏱ {service.duration}</span>
        <button className="btn-outline-gold" onClick={() => onDetail(service)} style={{ padding: "8px 20px", fontSize: "0.72rem" }}>View Details</button>
      </div>
    </div>
  </div>
);

// ─── TEAM CARD ────────────────────────────────────────────────────────────────
const TeamCard = ({ member }) => (
  <div className="team-card" data-reveal>
    <div style={{ overflow: "hidden" }}>
      <img src={member.image} alt={member.name} loading="lazy" />
    </div>
    <div style={{ padding: "20px 24px" }}>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 500, color: "var(--charcoal)", marginBottom: 4 }}>{member.name}</h3>
      <p style={{ fontSize: "0.75rem", color: "var(--warm-gray)", marginBottom: 12 }}>{member.role}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ background: "var(--ivory)", border: "1px solid var(--gold-light)", color: "var(--gold-dark)", fontSize: "0.7rem", padding: "4px 12px", borderRadius: "20px", letterSpacing: "0.05em" }}>{member.specialty}</span>
        <span style={{ fontSize: "0.75rem", color: "var(--stone)" }}>{member.exp} yrs</span>
      </div>
    </div>
  </div>
);

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
const HomePage = ({ navigate }) => {
  useScrollReveal();
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeTestimonial = (idx) => {
    setIsTransitioning(true);
    setTimeout(() => { setTestimonialIndex(idx); setIsTransitioning(false); }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (testimonialIndex + 1) % TESTIMONIALS.length;
      changeTestimonial(next);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonialIndex]);

  return (
    <div>
      {/* HERO */}
      <section className="hero-section">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="https://images.openai.com/static-rsc-4/a7ppFcbCBEkucoccDXVvmB3NWA7l2UrG2CKmdMRVOxe1IBzfkwz92PWUK5YQSwFemXqWJnRjHVLF9RjIsigQsn8UkErnTIoxLzexizNOp9R4gU4vfUDyc6o8G3tnK0_rRJjicPRxVhu9sSQdkEpIyShmXqPXG6Q-2D-yf1Z3XE0oROSDmCyFbkOrh1V12SLc?purpose=fullsize" alt="Spa" style={{ width: "100%", height: "100%",objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(44,38,32,0.75) 0%, rgba(44,38,32,0.45) 60%, transparent 100%)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 580 }}>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", color: "var(--gold-light)", textTransform: "uppercase", marginBottom: 18, opacity: 0, animation: "fadeIn 1s ease 0.2s forwards" }}>✦ Welcome to Serenity Spa</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem, 7vw, 5.2rem)", fontWeight: 400, color: "white", lineHeight: 1.1, marginBottom: 24, opacity: 0, animation: "fadeUp 1s ease 0.4s forwards" }}>
              Relax.<br /><em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Rejuvenate.</em><br />Renew.
            </h1>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: 420, marginBottom: 36, opacity: 0, animation: "fadeUp 1s ease 0.6s forwards" }}>
              Your sanctuary of calm. Experience the art of wellness with our curated rituals, expert therapists, and serene ambiance.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", opacity: 0, animation: "fadeUp 1s ease 0.8s forwards" }}>
              <button className="btn-gold" onClick={() => navigate("#contact")}>Book Appointment</button>
              <button className="btn-outline-gold" onClick={() => navigate("#services")} style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>Explore Services</button>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0, animation: "fadeIn 1s ease 1.2s forwards" }}>
          <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, transparent, var(--gold))" }} />
          <span style={{ fontSize: "0.6rem", color: "var(--gold-light)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div style={{ background: "var(--gold)", padding: "14px 0", overflow: "hidden" }}>
        <div className="marquee-track" style={{ display: "flex", gap: 0 }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: "flex", gap: "48px", paddingRight: "48px", whiteSpace: "nowrap" }}>
              {["Hair Treatments", "✦", "Skin Rituals", "✦", "Body Wraps", "✦", "Massage Therapy", "✦", "Nail Artistry", "✦", "Gift Cards", "✦", "Ayurveda", "✦"].map((t, j) => (
                <span key={j} style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "white", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORY STRIP */}
      <section style={{ background: "var(--ivory)", padding: "50px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 36 }} data-reveal>
            <span className="section-label">Our Specialties</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 8 }} data-reveal>
            {[
              { icon: "✂", label: "Hair" },
              { icon: "✨", label: "Skin" },
              { icon: "💆", label: "Massage" },
              { icon: "💅", label: "Nails" },
              { icon: "🌿", label: "Body Treatments" },
            ].map(c => (
              <div key={c.label} className="category-chip" onClick={() => navigate("#services")}>
                <div className="category-icon">{c.icon}</div>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--stone)" }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section-pad" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 60, alignItems: "center" }}>
            <div data-reveal>
              <div style={{ position: "relative" }}>
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20241116/pngtree-luxurious-spa-salon-interior-with-lush-greenery-image_16526373.jpg" alt="Spa interior" style={{ width: "100%", borderRadius: 4, height: 480, objectFit: "cover" }} />
                <div className="glass-card" style={{ position: "absolute", bottom: -24, right: -24, padding: "20px 28px", borderRadius: 4, textAlign: "center" }}>
                  <div className="gold-shimmer" style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 600 }}>12+</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--stone)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Years of Excellence</div>
                </div>
              </div>
            </div>
            <div data-reveal>
              <span className="section-label">About Serenity</span>
              <h2 className="section-title" style={{ margin: "12px 0 20px" }}>A Ritual Space<br /><em>for the Senses</em></h2>
              <p style={{ fontSize: "0.9rem", color: "var(--warm-gray)", lineHeight: 1.9, marginBottom: 16 }}>
                Nestled in the heart of Mysuru, Serenity Spa & Salon is an award-winning wellness destination where time slows and the self is restored. We blend ancient healing traditions with modern luxury techniques.
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--warm-gray)", lineHeight: 1.9, marginBottom: 32 }}>
                Each ritual is thoughtfully crafted, each ingredient ethically sourced, and each experience deeply personalised. Because true luxury is care without compromise.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 36 }}>
                {[["5,000+", "Happy Clients"], ["20+", "Expert Staff"], ["50+", "Signature Rituals"]].map(([n, l]) => (
                  <div key={l} style={{ textAlign: "center", padding: "16px", background: "var(--ivory)", borderRadius: 4, border: "1px solid var(--beige)" }}>
                    <div className="gold-text" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 600 }}>{n}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--stone)", letterSpacing: "0.07em", marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
              <button className="btn-gold" onClick={() => navigate("#services")}>Explore Rituals</button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-pad" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }} data-reveal>
            <span className="section-label">Our Space</span>
            <h2 className="section-title" style={{ margin: "12px 0 0" }}>A Glimpse of <em>Serenity</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "200px", gap: 12 }} data-reveal>
            {GALLERY_IMAGES.slice(0, 6).map((img, i) => (
              <div key={i} className="gallery-item" style={{ gridColumn: i === 0 ? "span 1" : i === 3 ? "span 2" : "span 1", gridRow: i === 0 ? "span 2" : "span 1" }}>
                <img src={img.src} alt={`Gallery ${i}`} loading="lazy" />
                <div className="overlay">
                  <span style={{ color: "white", fontSize: "1.5rem" }}>✦</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button className="btn-outline-gold" onClick={() => navigate("#gallery")}>View Full Gallery</button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad" style={{ background: "var(--charcoal)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label" style={{ color: "var(--gold)" }}>Testimonials</span>
            <h2 className="section-title" style={{ margin: "12px 0 0", color: "white" }}>Words from Our <em>Guests</em></h2>
          </div>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ opacity: isTransitioning ? 0 : 1, transition: "opacity 0.3s ease", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", color: "var(--gold)", lineHeight: 1, marginBottom: 20 }}>❝</div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontStyle: "italic", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: 32 }}>
                {TESTIMONIALS[testimonialIndex].text}
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 16 }}>
                {[...Array(TESTIMONIALS[testimonialIndex].stars)].map((_, i) => (
                  <span key={i} style={{ color: "var(--gold)", fontSize: "0.85rem" }}>★</span>
                ))}
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", color: "white", fontWeight: 500 }}>{TESTIMONIALS[testimonialIndex].name}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--gold)", letterSpacing: "0.1em", marginTop: 4 }}>{TESTIMONIALS[testimonialIndex].role}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 36 }}>
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => changeTestimonial(i)} style={{ width: i === testimonialIndex ? 28 : 8, height: 8, borderRadius: 4, background: i === testimonialIndex ? "var(--gold)" : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all 0.4s ease", padding: 0 }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: "var(--ivory)", padding: "70px 0" }}>
        <div className="container" style={{ textAlign: "center" }} data-reveal>
          <div className="gold-divider" style={{ marginBottom: 24 }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase" }}>Begin Your Journey</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>Ready to Experience<br /><em>Pure Bliss?</em></h2>
          <p style={{ fontSize: "0.9rem", color: "var(--warm-gray)", maxWidth: 420, margin: "0 auto 36px", lineHeight: 1.8 }}>
            Reserve your ritual today. Our expert team is ready to craft a personalised experience just for you.
          </p>
          <button className="btn-gold" onClick={() => navigate("#contact")}>Book Your Appointment</button>
        </div>
      </section>
    </div>
  );
};

// ─── SERVICES PAGE ────────────────────────────────────────────────────────────
const ServicesPage = ({ navigate }) => {
  useScrollReveal();
  const tabs = Object.keys(SERVICES);
  const [active, setActive] = useState(tabs[0]);
  const [detail, setDetail] = useState(null);

  if (detail) return <ServiceDetailPage service={detail} onBack={() => setDetail(null)} navigate={navigate} />;

  return (
    <div>
      {/* Hero */}
      <section style={{ background: "var(--charcoal)", paddingTop: 120, paddingBottom: 60, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20241116/pngtree-luxurious-spa-salon-interior-with-lush-greenery-image_16526373.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <span className="section-label" style={{ color: "var(--gold)" }}>What We Offer</span>
          <h1 className="section-title" style={{ color: "white", margin: "12px 0 16px" }}>Our <em>Signature Rituals</em></h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", maxWidth: 500, margin: "0 auto" }}>Each service is crafted with intention, using only the finest ingredients and most advanced techniques.</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 4, borderBottom: "1px solid var(--beige)", marginBottom: 48 }}>
            {tabs.map(t => (
              <button key={t} className={`tab-btn ${active === t ? "active" : ""}`} onClick={() => setActive(t)}>{t}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 28 }}>
            {SERVICES[active].map(s => <ServiceCard key={s.id} service={s} onDetail={setDetail} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

// ─── SERVICE DETAIL ───────────────────────────────────────────────────────────
const ServiceDetailPage = ({ service, onBack, navigate }) => (
  <div style={{ paddingTop: 0 }}>
    <div style={{ position: "relative", height: 400, overflow: "hidden" }}>
      <img src={service.image} alt={service.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(44,38,32,0.85))" }} />
      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", textAlign: "center", width: "100%" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "white", marginBottom: 8 }}>{service.name}</h1>
        <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
          <span style={{ color: "var(--gold-light)", fontSize: "0.85rem" }}>⏱ {service.duration}</span>
          <span style={{ color: "var(--gold-light)", fontSize: "0.85rem" }}>From {service.price}</span>
        </div>
      </div>
    </div>
    <div className="w-ful" style={{ padding: "0"}}>
      <button onClick={onBack} style={{ background: "none", border: "none", color: "var(--gold)", cursor: "pointer", fontSize: "0.8rem", letterSpacing: "0.1em", marginBottom: 36, display: "flex", alignItems: "center", gap: 8 }}>← Back to Services</button>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60 }}>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", marginBottom: 16, color: "var(--charcoal)" }}>About This Ritual</h2>
          <p style={{ color: "var(--warm-gray)", lineHeight: 1.9, fontSize: "0.9rem", marginBottom: 24 }}>{service.desc}</p>
          <p style={{ color: "var(--warm-gray)", lineHeight: 1.9, fontSize: "0.9rem" }}>This signature treatment has been carefully curated by our expert therapists to deliver the finest results. Using premium botanicals and advanced techniques, you will emerge feeling completely restored and radiant.</p>
          <div style={{ display: "flex", gap: 24, marginTop: 32, padding: "20px 24px", background: "var(--ivory)", borderRadius: 4, border: "1px solid var(--beige)" }}>
            <div style={{ textAlign: "center" }}>
              <div className="gold-text" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 600 }}>{service.duration}</div>
              <div style={{ fontSize: "0.68rem", color: "var(--stone)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Duration</div>
            </div>
            <div style={{ width: 1, background: "var(--beige)" }} />
            <div style={{ textAlign: "center" }}>
              <div className="gold-text" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 600 }}>{service.price}</div>
              <div style={{ fontSize: "0.68rem", color: "var(--stone)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Starting Price</div>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", marginBottom: 20, color: "var(--charcoal)" }}>Enhance Your Experience</h2>
          <p style={{ color: "var(--warm-gray)", fontSize: "0.85rem", marginBottom: 20 }}>Elevate your ritual with curated add-ons:</p>
          {service.addons.map(a => (
            <div key={a} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: "white", border: "1px solid var(--beige)", borderRadius: 4, marginBottom: 10, transition: "all 0.3s" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.background = "var(--ivory)"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "var(--beige)"; e.currentTarget.style.background = "white"; }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem", color: "var(--charcoal)" }}>{a}</span>
            </div>
          ))}
          <button className="btn-gold" onClick={() => navigate("#contact")} style={{ marginTop: 28, width: "100%", textAlign: "center" }}>Book This Ritual</button>
        </div>
      </div>
    </div>
  </div>
);

// ─── TEAM PAGE ────────────────────────────────────────────────────────────────
const TeamPage = () => {
  useScrollReveal();
  return (
    <div>
      <section style={{ background: "var(--charcoal)", paddingTop: 120, paddingBottom: 60, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.12 }}>
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20241116/pngtree-luxurious-spa-salon-interior-with-lush-greenery-image_16526373.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <span className="section-label" style={{ color: "var(--gold)" }}>The Artisans</span>
          <h1 className="section-title" style={{ color: "white", margin: "12px 0 16px" }}>Meet Our <em>Expert Team</em></h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", maxWidth: 480, margin: "0 auto" }}>A collective of passionate wellness artists, each bringing years of mastery and dedication to your experience.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="w-full min-h-screen">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 28 }}>
            {TEAM.map((m, i) => <TeamCard key={i} member={m} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

// ─── GALLERY PAGE ─────────────────────────────────────────────────────────────
const GalleryPage = () => {
  useScrollReveal();
  const ALL = [
    ...GALLERY_IMAGES,
    { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
    { src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80" },
    { src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80" },
    { src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80" },
  ];

  return (
    <div>
      <section style={{ background: "var(--charcoal)", paddingTop: 120, paddingBottom: 60, position: "relative" }}>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ color: "var(--gold)" }}>Our Sanctuary</span>
          <h1 className="section-title" style={{ color: "white", margin: "12px 0" }}>A Visual <em>Journey</em></h1>
        </div>
      </section>
      <section className="section-pad">
        <div className="w-full min-h-screen">
          <div data-reveal style={{ columns: "3 200px", gap: 14 }}>
            {ALL.map((img, i) => (
              <div key={i} className="gallery-item" style={{ marginBottom: 14, breakInside: "avoid" }}>
                <img src={img.src} alt={`Gallery ${i}`} loading="lazy" style={{ width: "100%", display: "block", borderRadius: 4 }} />
                <div className="overlay" style={{ borderRadius: 4 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "1rem", opacity: 0, transition: "opacity 0.3s" }} className="gallery-zoom-icon">+</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ─── GIFT CARDS PAGE ──────────────────────────────────────────────────────────
const GiftCardsPage = ({ navigate }) => {
  useScrollReveal();
  const [selected, setSelected] = useState(2000);
  const amounts = [1000, 2000, 5000, 10000];
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <section style={{ background: "var(--charcoal)", paddingTop: 120, paddingBottom: 60 }}>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ color: "var(--gold)" }}>The Gift of Wellness</span>
          <h1 className="section-title" style={{ color: "white", margin: "12px 0 16px" }}>Gift <em>Pure Luxury</em></h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", maxWidth: 460, margin: "0 auto" }}>Give someone you love the ultimate gift — an escape into total bliss. Perfect for every occasion.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="w-full min-h-screen">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "start" }}>
            {/* Configurator */}
            <div data-reveal>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: 24, color: "var(--charcoal)" }}>Personalise Your Gift</h2>
              <div style={{ marginBottom: 28 }}>
                <label className="form-label">Select Amount</label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                  {amounts.map(a => (
                    <button key={a} onClick={() => setSelected(a)} style={{ padding: "14px", border: `1px solid ${selected === a ? "var(--gold)" : "var(--beige)"}`, background: selected === a ? "var(--ivory)" : "white", borderRadius: 4, fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: selected === a ? "var(--gold-dark)" : "var(--stone)", cursor: "pointer", transition: "all 0.3s", fontWeight: selected === a ? 600 : 400 }}>₹{a.toLocaleString()}</button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label className="form-label">Recipient's Name</label>
                <input className="form-input" type="text" placeholder="Enter their name" value={recipientName} onChange={e => setRecipientName(e.target.value)} />
              </div>
              <div style={{ marginBottom: 28 }}>
                <label className="form-label">Personal Message</label>
                <textarea className="form-textarea" rows={3} placeholder="Write a heartfelt note…" value={message} onChange={e => setMessage(e.target.value)} style={{ resize: "vertical" }} />
              </div>
              <button className="btn-gold" style={{ width: "100%", textAlign: "center" }} onClick={() => navigate("#contact")}>Purchase Gift Card</button>
            </div>

            {/* Preview */}
            <div data-reveal>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: 24, color: "var(--charcoal)" }}>Card Preview</h2>
              <div className="w-full">
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "white", marginBottom: 2 }}>Serenity</div>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.5rem", letterSpacing: "0.4em", color: "var(--gold)", textTransform: "uppercase" }}>Spa & Salon</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", marginBottom: 4 }}>GIFT CARD</div>
                      <div className="gold-shimmer" style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 600 }}>₹{selected.toLocaleString()}</div>
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(201,169,110,0.2)", paddingTop: 20 }}>
                    <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", marginBottom: 6 }}>FOR</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "white", fontStyle: "italic", minHeight: 30 }}>{recipientName || "Your Loved One"}</div>
                    {message && <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", marginTop: 12, fontStyle: "italic", lineHeight: 1.7 }}>"{message}"</p>}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 24 }}>
                      <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>Valid for 12 months</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--gold)", letterSpacing: "0.1em" }}>✦ ✦ ✦</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 24, padding: "16px 20px", background: "var(--ivory)", borderRadius: 4, border: "1px solid var(--beige)" }}>
                <p style={{ fontSize: "0.8rem", color: "var(--stone)", lineHeight: 1.8 }}>
                  ✓ Redeemable for any service or product<br />
                  ✓ Valid for 12 months from purchase<br />
                  ✓ Can be used across multiple visits<br />
                  ✓ Digital delivery within minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
const ContactPage = () => {
  useScrollReveal();
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", service: "", date: "", time: "", notes: "" });
  };

  return (
    <div>
      <section style={{ background: "var(--charcoal)", paddingTop: 120, paddingBottom: 60, position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ color: "var(--gold)" }}>Reserve Your Ritual</span>
          <h1 className="section-title" style={{ color: "white", margin: "12px 0 16px" }}>Book an <em>Appointment</em></h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", maxWidth: 440, margin: "0 auto" }}>Select your preferred service and time. Our team will confirm within 2 hours.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="w-full min-h-screen">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60 }}>
            {/* Booking Form */}
            <div data-reveal>
              {submitted ? (
                <div style={{ padding: "40px", background: "var(--ivory)", borderRadius: 4, border: "1px solid var(--gold-light)", textAlign: "center", animation: "scaleIn 0.5s ease" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>✨</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "var(--charcoal)", marginBottom: 10 }}>Booking Received!</h3>
                  <p style={{ color: "var(--warm-gray)", fontSize: "0.875rem", lineHeight: 1.8 }}>Thank you for choosing Serenity Spa. We'll confirm your appointment within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: 28, color: "var(--charcoal)" }}>Your Details</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label className="form-label">Full Name</label>
                      <input className="form-input" required type="text" placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="form-label">Phone</label>
                      <input className="form-input" required type="tel" placeholder="+91 9876543210" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label className="form-label">Service</label>
                    <select className="form-select" required value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                      <option value="">Select a service…</option>
                      {Object.entries(SERVICES).map(([cat, svcs]) => (
                        <optgroup key={cat} label={cat}>
                          {svcs.map(s => <option key={s.id} value={s.name}>{s.name} — {s.price}</option>)}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label className="form-label">Date</label>
                      <input className="form-input" required type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
                    </div>
                    <div>
                      <label className="form-label">Time</label>
                      <select className="form-select" required value={form.time} onChange={e => setForm({...form, time: e.target.value})}>
                        <option value="">Select time…</option>
                        {["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"].map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label className="form-label">Special Requests</label>
                    <textarea className="form-textarea" rows={3} placeholder="Any preferences, allergies, or special requests…" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} style={{ resize: "vertical" }} />
                  </div>
                  <button type="submit" className="btn-gold" style={{ width: "100%", textAlign: "center" }}>Confirm Booking</button>
                </form>
              )}
            </div>

            {/* Info column */}
            <div data-reveal>
              {/* Hours */}
              <div style={{ background: "var(--ivory)", padding: "28px", borderRadius: 4, border: "1px solid var(--beige)", marginBottom: 24 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "var(--charcoal)", marginBottom: 20 }}>Working Hours</h3>
                {[["Monday – Friday", "9:00 AM – 8:00 PM"], ["Saturday", "8:00 AM – 9:00 PM"], ["Sunday", "10:00 AM – 6:00 PM"]].map(([day, time]) => (
                  <div key={day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--beige)" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--stone)" }}>{day}</span>
                    <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--charcoal)" }}>{time}</span>
                  </div>
                ))}
              </div>

              {/* Address & contact */}
              <div style={{ background: "var(--charcoal)", padding: "28px", borderRadius: 4, marginBottom: 24 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "white", marginBottom: 20 }}>Find Us</h3>
                {[
                  ["📍", "Address", "12 MG Road, Mysuru\nKarnataka 570001, India"],
                  ["📞", "Phone", "+91 821 234 5678"],
                  ["✉", "Email", "hello@serenityspa.in"],
                  ["💬", "WhatsApp", "+91 98765 43210"],
                ].map(([icon, label, val]) => (
                  <div key={label} style={{ display: "flex", gap: 14, marginBottom: 16, alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1rem", marginTop: 2 }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: "0.65rem", color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 3 }}>{label}</div>
                      <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", whiteSpace: "pre-line", lineHeight: 1.6 }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map embed */}
              <div style={{ borderRadius: 4, overflow: "hidden", border: "1px solid var(--beige)", height: 220 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15589.744965782696!2d76.63386!3d12.295810!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2b89ece8963df0de!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Serenity Spa Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ─── LOADING SCREEN ───────────────────────────────────────────────────────────
const LoadingScreen = ({ onDone }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, background: "var(--charcoal)", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", animation: "fadeIn 0.3s ease" }}>
      <div style={{ marginBottom: 24, animation: "float 2s ease-in-out infinite" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: "white", fontWeight: 400, textAlign: "center" }}>Serenity</div>
        <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.6rem", letterSpacing: "0.5em", color: "var(--gold)", textTransform: "uppercase", textAlign: "center", marginTop: 4 }}>Spa & Salon</div>
      </div>
      <div style={{ width: 180, height: 1, background: "rgba(255,255,255,0.1)", borderRadius: 1, overflow: "hidden" }}>
        <div style={{ height: "100%", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", backgroundSize: "200% auto", animation: "shimmer 1.5s linear infinite" }} />
      </div>
      <div style={{ marginTop: 16, fontSize: "0.68rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", fontFamily: "'Poppins', sans-serif" }}>Preparing your sanctuary…</div>
    </div>
  );
};

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const { route, navigate } = useRoute();
  const [loading, setLoading] = useState(true);

  if (loading) return (
    <>
      <FontLoader />
      <LoadingScreen onDone={() => setLoading(false)} />
    </>
  );

  const renderPage = () => {
    if (route === "#services") return <ServicesPage navigate={navigate} />;
    if (route === "#team") return <TeamPage />;
    if (route === "#gallery") return <GalleryPage />;
    if (route === "#giftcards") return <GiftCardsPage navigate={navigate} />;
    if (route === "#contact") return <ContactPage />;
    return <HomePage navigate={navigate} />;
  };

  return (
    <>
      <FontLoader />
      <div style={{ minHeight: "100vh" }}>
        <Navbar route={route} navigate={navigate} />
        <main style={{ paddingTop: route === "#home" ? 0 : 0 }}>
          <div key={route} style={{ animation: "fadeIn 0.4s ease" }}>
            {renderPage()}
          </div>
        </main>
        <Footer navigate={navigate} />
      </div>
    </>
  );
}
