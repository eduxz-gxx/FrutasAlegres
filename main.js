/* ===== RESET & BASE ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --white: #ffffff;
  --cream: #faf9f7;
  --black: #111110;
  --gray: #6b6b6b;
  --light: #e8e4de;
  --accent: #5a7a4a;
  --accent2: #c8a96e;
  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'Jost', sans-serif;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--white);
  color: var(--black);
  overflow-x: hidden;
}

/* ===== NAVBAR ===== */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--light);
  padding: 0 40px;
  height: 70px;
  display: flex;
  align-items: center;
}
.nav-inner {
  width: 100%; max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 40px;
}
.nav-logo {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--black);
  flex-shrink: 0;
}
.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
  flex: 1;
  justify-content: center;
}
.nav-links a {
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gray);
  transition: color 0.3s;
}
.nav-links a:hover { color: var(--black); }
.nav-cta {
  background: var(--black);
  color: var(--white);
  border: none;
  padding: 10px 24px;
  font-family: var(--font-body);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.3s;
}
.nav-cta:hover { background: var(--accent); }

/* ===== HERO ===== */
.hero {
  min-height: 100vh;
  padding-top: 70px;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  align-items: center;
  gap: 0;
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 60px;
  padding-right: 40px;
}
.hero-text {
  padding: 60px 0;
  animation: fadeUp 0.9s ease both;
}
.hero-tag {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gray);
  display: block;
  margin-bottom: 24px;
}
.hero-text h1 {
  font-family: var(--font-display);
  font-size: clamp(4rem, 7vw, 7rem);
  font-weight: 300;
  line-height: 1;
  color: var(--black);
  margin-bottom: 24px;
}
.hero-text h1 em {
  font-style: italic;
  color: var(--accent);
}
.hero-sub {
  font-size: 0.95rem;
  color: var(--gray);
  line-height: 1.7;
  margin-bottom: 40px;
  font-weight: 300;
}
.btn-primary {
  display: inline-block;
  background: var(--black);
  color: var(--white);
  text-decoration: none;
  padding: 16px 40px;
  font-family: var(--font-body);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: all 0.3s;
  border: 1px solid var(--black);
  cursor: pointer;
}
.btn-primary:hover {
  background: var(--white);
  color: var(--black);
}
.btn-full { width: 100%; text-align: center; }

/* Hero Grid */
.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  grid-template-rows: auto auto;
  gap: 10px;
  padding: 70px 0 40px;
  animation: fadeUp 1s 0.2s ease both;
  opacity: 0;
}
.hero-img {
  position: relative;
  overflow: hidden;
}
.hero-img img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}
.hero-img:hover img { transform: scale(1.04); }
.hero-img-1 {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  height: 440px;
}
.hero-img-2 { height: 210px; }
.hero-img-3 { height: 210px; }
.img-label {
  position: absolute;
  bottom: 14px; left: 14px;
  background: rgba(255,255,255,0.9);
  padding: 6px 14px;
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--black);
}

/* ===== MARQUEE ===== */
.marquee-wrap {
  background: var(--black);
  padding: 14px 0;
  overflow: hidden;
}
.marquee {
  display: flex;
  white-space: nowrap;
  animation: marquee 22s linear infinite;
}
.marquee span {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--white);
  padding-right: 40px;
  opacity: 0.8;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ===== SECTION TAGS ===== */
.section-tag {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  display: block;
  margin-bottom: 16px;
}

/* ===== ABOUT ===== */
.about {
  padding: 100px 60px;
  background: var(--cream);
}
.about-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.about-img-wrap {
  position: relative;
}
.about-img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  display: block;
}
.about-badge {
  position: absolute;
  bottom: -20px; right: -20px;
  width: 100px; height: 100px;
  background: var(--accent);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}
.badge-num {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1;
}
.badge-txt {
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.about-text h2 {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 3.5vw, 3rem);
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 24px;
}
.about-text h2 em { font-style: italic; color: var(--accent); }
.about-text p {
  font-size: 0.92rem;
  color: var(--gray);
  line-height: 1.8;
  margin-bottom: 16px;
  font-weight: 300;
}
.about-text strong { color: var(--black); font-weight: 500; }
.about-stats {
  display: flex;
  gap: 40px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--light);
}
.stat-num {
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 300;
  color: var(--black);
  display: block;
  line-height: 1;
}
.stat-label {
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gray);
  display: block;
  margin-top: 6px;
}

/* ===== PRODUCTS ===== */
.products {
  padding: 100px 60px;
  background: var(--white);
}
.products-header {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 60px;
}
.products-header h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 16px;
}
.products-header h2 em { font-style: italic; color: var(--accent); }
.products-header p {
  font-size: 0.9rem;
  color: var(--gray);
  font-weight: 300;
  line-height: 1.7;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  max-width: 1200px;
  margin: 0 auto;
}
.product-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: var(--cream);
}
.product-card img {
  width: 100%;
  height: 340px;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}
.product-card:hover img { transform: scale(1.05); }
.product-card-info {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: rgba(255,255,255,0.92);
  padding: 18px 20px;
  transform: translateY(0);
  transition: background 0.3s;
}
.product-card:hover .product-card-info { background: rgba(255,255,255,0.97); }
.product-card-name {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--black);
  display: block;
  margin-bottom: 2px;
}
.product-card-cat {
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gray);
}
.product-card-price {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 500;
  float: right;
  margin-top: -22px;
}

/* ===== MODAL ===== */
.modal-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 200;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.modal-overlay.active { display: flex; }
.modal {
  background: var(--white);
  max-width: 740px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  animation: modalIn 0.3s ease;
  max-height: 90vh;
  overflow-y: auto;
}
@keyframes modalIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
.modal-close {
  position: absolute;
  top: 14px; right: 14px;
  background: none; border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--gray);
  z-index: 10;
  line-height: 1;
}
.modal-img-wrap { overflow: hidden; }
.modal-img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  min-height: 360px;
}
.modal-body {
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.modal-tag {
  font-size: 0.62rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
}
.modal-body h3 {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 300;
}
.modal-body p {
  font-size: 0.85rem;
  color: var(--gray);
  line-height: 1.75;
  font-weight: 300;
}
.modal-benefits {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}
.benefit-tag {
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid var(--light);
  padding: 4px 12px;
  color: var(--gray);
}
.modal-price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}
.modal-price {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 300;
  color: var(--accent);
}
.modal-qty {
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid var(--light);
  padding: 8px 16px;
}
.qty-btn {
  background: none; border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--black);
  line-height: 1;
}
.qty-num { font-size: 0.95rem; font-weight: 500; min-width: 20px; text-align: center; }
.modal-note {
  font-size: 0.65rem;
  color: var(--light);
  color: #bbb;
  text-align: center;
  margin-top: 4px;
}

/* ===== TOAST ===== */
.cart-toast {
  position: fixed;
  bottom: 30px; right: 30px;
  background: var(--black);
  color: var(--white);
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  z-index: 300;
  transform: translateY(80px);
  opacity: 0;
  transition: all 0.4s ease;
}
.cart-toast.show {
  transform: translateY(0);
  opacity: 1;
}
.toast-icon { font-size: 1rem; }

/* ===== INFO ===== */
.info {
  padding: 100px 60px;
  background: var(--cream);
}
.info-inner {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}
.info-inner h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-weight: 300;
  margin-bottom: 60px;
}
.info-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
}
.info-card {
  background: var(--white);
  padding: 40px 28px;
  text-align: center;
  transition: transform 0.3s;
}
.info-card:hover { transform: translateY(-4px); }
.info-icon {
  font-size: 2rem;
  margin-bottom: 16px;
  display: block;
}
.info-card h4 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 12px;
}
.info-card p {
  font-size: 0.82rem;
  color: var(--gray);
  line-height: 1.75;
  font-weight: 300;
}

/* ===== JUICE BANNER ===== */
.juice-banner {
  padding: 0;
  background: var(--white);
}
.juice-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  min-height: 480px;
}
.juice-item { overflow: hidden; }
.juice-item img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s;
}
.juice-item:hover img { transform: scale(1.04); }
.juice-center {
  background: var(--black);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  text-align: center;
  gap: 20px;
}
.juice-center h2 {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 4vw, 3.5rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--white);
}
.juice-center h2 em {
  font-style: italic;
  color: var(--accent2);
}
.juice-center p {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.75;
  font-weight: 300;
}
.btn-outline {
  display: inline-block;
  border: 1px solid rgba(255,255,255,0.4);
  color: var(--white);
  text-decoration: none;
  padding: 12px 32px;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: all 0.3s;
}
.btn-outline:hover {
  background: var(--white);
  color: var(--black);
  border-color: var(--white);
}

/* ===== FOOTER ===== */
.footer {
  background: var(--cream);
  border-top: 1px solid var(--light);
  padding: 70px 60px 0;
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 60px;
  padding-bottom: 60px;
}
.footer-brand p {
  font-size: 0.85rem;
  color: var(--gray);
  line-height: 1.8;
  font-weight: 300;
  margin-top: 14px;
}
.footer-links, .footer-contact {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-links h5, .footer-contact h5 {
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--black);
  margin-bottom: 6px;
}
.footer-links a {
  text-decoration: none;
  font-size: 0.85rem;
  color: var(--gray);
  font-weight: 300;
  transition: color 0.3s;
}
.footer-links a:hover { color: var(--black); }
.footer-contact p {
  font-size: 0.85rem;
  color: var(--gray);
  font-weight: 300;
}
.footer-bottom {
  border-top: 1px solid var(--light);
  padding: 20px 0;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}
.footer-bottom p {
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #aaa;
}

/* ===== ANIMATIONS ===== */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero-grid { animation-fill-mode: both; }

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: none;
}
