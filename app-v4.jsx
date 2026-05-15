/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

/* ============ Icons ============ */
const I = {
  Star: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l2.7 6.6L22 9.6l-5.2 4.9L18.5 22 12 18.2 5.5 22l1.7-7.5L2 9.6l7.3-1z"/></svg>,
  Truck: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M3 7h12v10H3zM15 10h4l2 3v4h-6zM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>,
  Lock: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="4" y="11" width="16" height="10" rx="1"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>,
  Return: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M4 10h11a5 5 0 0 1 0 10H8M4 10l4-4M4 10l4 4"/></svg>,
  Shield: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>,
  Cart: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M3 4h2l2.5 12h12l1.8-8H6"/></svg>,
  Sparkle: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/></svg>,
  Check: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" {...p}><path d="M4 12l5 5L20 6"/></svg>,
};

/* ============ Announce ============ */
function Announce() {
  return (
    <div className="ann">
      Free shipping on every order
      <span className="ann__sep" />
      <strong>30-day money-back guarantee</strong>
      <span className="ann__sep" />
      Results in 14 days or it's free
    </div>
  );
}

/* ============ Nav ============ */
function Nav({ cartCount, onCartClick }) {
  return (
    <nav className="nv">
      <div className="nv__menu">
        <a href="#science">Science</a>
        <a href="#ingredients">Ingredients</a>
        <a href="#results">Results</a>
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQ</a>
      </div>
      <a href="#top" className="nv__brand">
        Vellur<em>é</em>
        <span className="acc">vel · lu · ré</span>
      </a>
      <div className="nv__right">
        <span>Account</span>
        <button className="nv__cart" onClick={onCartClick}>
          <I.Cart /> Cart
          <span className="bub">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}

/* ============ Hero ============ */
function Hero({ onAdd, onScrollScience }) {
  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__left">
          <span className="hero__eyb">
            <span className="dot" />
            Multi-Peptide + Copper Peptides 1%
          </span>
          <h1 className="hero__title">
            Radiant Skin,<br/><em>Powered by Science.</em>
          </h1>
          <p className="hero__sub">
            Your skin has the ability to rebuild itself. It just needs the right
            signal. Velluré's clinical-grade peptide serum activates collagen
            repair, firms loose texture, and restores the glass-skin luminosity
            that time quietly takes away — from home.
          </p>

          <div className="hero__cta-row">
            <button className="btn btn--primary btn--big" onClick={() => onAdd({ price: 29 })}>
              Get Started Today <span className="ar">→</span>
            </button>
            <button className="btn btn--ghost btn--big" onClick={onScrollScience}>
              See the Science
            </button>
          </div>

          <div className="hero__rating-row">
            <span className="hero__rating-stars">★★★★★</span>
            <span className="hero__rating-text"><strong>4.9</strong> · 2,847 verified reviews</span>
            <span className="hero__rating-divider" />
            <span className="hero__rating-derms"><strong>96%</strong> reorder rate</span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__stamp">
            Peptide Serum
            <strong>30 ML · 1% Cu-GHK</strong>
          </div>
          <img src="assets/hoygi-set.png" alt="Velluré Peptide Serum" />
          <div className="hero__chip hero__chip--a">
            <span className="hero__chip-dot">α</span>
            Copper 1%
          </div>
          <div className="hero__chip hero__chip--b">
            <span className="hero__chip-dot">β</span>
            Multi-Peptide
          </div>
          <div className="hero__chip hero__chip--c">
            <span className="hero__chip-dot">γ</span>
            Hyaluronic ×3
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Trust Marquee ============ */
function Trust() {
  const items = [
    "Copper Peptides 1% Clinically Active",
    "Dermatologist Tested",
    "Science-Backed Beauty",
    "Fragrance-Free Formula",
    "Cruelty-Free & Vegan",
    "All Skin Types",
    "30-Day Guarantee",
  ];
  const all = [...items, ...items, ...items];
  return (
    <div className="trust">
      <div className="trust__track">
        {all.map((it, i) => (
          <span key={i}>
            {it}
            <span className="trust__sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============ Science triptych ============ */
function Science() {
  const items = [
    { num: "01", sub: "Key Active", name: "Copper Peptides GHK-Cu", desc: "Signals skin cells to produce collagen and elastin. Reduces inflammation. Clinically proven at 1% concentration — the threshold where results actually happen." },
    { num: "02", sub: "Wrinkle Relaxer", name: "Multi-Peptide Complex", desc: "Matrixyl 3000 + Argireline + Leuphasyl working in synergy to visibly plump fine lines and relax facial tension. The closest thing to botox in a bottle." },
    { num: "03", sub: "72h Hydration", name: "Triple Hyaluronic Acid", desc: "Three molecular weights penetrating different skin depths simultaneously for 72-hour hydration retention and visible plumpness from within." },
  ];
  return (
    <section className="s" id="science">
      <div className="s__head">
        <div className="eyb eyb--center">Beauty backed by science</div>
        <h2 className="s__h">Ingredients that<br/><em>actually do something.</em></h2>
        <p className="s__lede">
          Velluré is built around one mission: harness the most researched
          anti-aging molecules in dermatology and put them in one serum at
          clinically active concentrations. No fillers. No marketing fluff.
          Just what works.
        </p>
      </div>
      <div className="sci3">
        {items.map((s, i) => (
          <div className="sci3__card" key={i}>
            <span className="sci3__corner">FIG. {s.num}</span>
            <div className="sci3__num">{s.num}</div>
            <div className="sci3__sub">{s.sub}</div>
            <h3 className="sci3__name">{s.name}</h3>
            <p className="sci3__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ Press marquee ============ */
function Press() {
  const items = ["Vogue", "ELLE", "Allure", "Byrdie", "Harper's Bazaar", "Glamour", "InStyle"];
  const all = [...items, ...items, ...items];
  return (
    <div className="press2">
      <div className="press2__lbl">As seen in</div>
      <div className="press2__track">
        {all.map((m, i) => (
          <span key={i}>{m}<span className="dot" style={{margin: "0 28px"}} /></span>
        ))}
      </div>
    </div>
  );
}

/* ============ Transformations ============ */
function Transformations({ onAdd }) {
  const cards = [
    { name: "María G.", age: "47 · Miami, FL", quote: "After 3 weeks my husband noticed.", stats: [{k:"−42%", v:"Lines"}, {k:"+68%", v:"Firmness"}], imgBefore: "assets/result-1-before.png", imgAfter: "assets/result-1-after.png" },
    { name: "Linda T.",  age: "52 · Los Angeles", quote: "Skin is noticeably smoother. I've reordered twice.", stats: [{k:"−51%", v:"Lines"}, {k:"+72%", v:"Glow"}], imgBefore: "assets/result-2-before.png", imgAfter: "assets/result-2-after.png" },
    { name: "Sofia R.",  age: "34 · Houston, TX", quote: "Zero reaction. Just smooth, glowing skin.", stats: [{k:"+88%", v:"Texture"}, {k:"0", v:"Irritation"}], imgBefore: "assets/result-3-before.png", imgAfter: "assets/result-3-after.png" },
  ];
  return (
    <section className="s s--bone" id="results">
      <div className="s__in">
        <div className="s__head">
          <div className="eyb eyb--center">Real results</div>
          <h2 className="s__h">Customer<br/><em>Transformations.</em></h2>
          <p className="s__lede">
            2,847 women. Real results. No filters.
          </p>
        </div>

        <div className="trans">
          {cards.map((c, i) => (
            <div className="trans__card" key={i}>
              <div className="trans__split">
                <div className="trans__half trans__half--before">
                  <img src={c.imgBefore} alt={`${c.name} before`} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
                  <span className="trans__lbl">Day 0</span>
                </div>
                <div className="trans__half trans__half--after">
                  <img src={c.imgAfter} alt={`${c.name} after`} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
                  <span className="trans__lbl trans__lbl--after">Day 28</span>
                </div>
                <div className="trans__divider" />
              </div>
              <div className="trans__caption">
                <div className="trans__caption-row">
                  <span className="trans__name">{c.name}</span>
                  <span className="trans__age">{c.age}</span>
                </div>
                <p className="trans__quote">"{c.quote}"</p>
                <div className="trans__stats">
                  {c.stats.map((s, j) => (
                    <span key={j}><strong>{s.k}</strong>&nbsp;{s.v}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="trans__cta">
          <button className="btn btn--primary btn--big" onClick={() => onAdd({ price: 29 })}>
            Start Your 28-Day Transformation <span className="ar">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============ Product Feature ============ */
function Product({ onAdd }) {
  return (
    <section className="s" id="product">
      <div className="prod">
        <div className="prod__visual">
          <img src="assets/hoygi-set.png" alt="Velluré Peptide Serum" />
        </div>
        <div className="prod__copy">
          <div className="eyb">Hero product</div>
          <div className="prod__sub">Multi-Peptide + Copper Peptides 1%</div>
          <h2 className="prod__hd">Velluré <em>Peptide Serum</em>.</h2>
          <p className="prod__desc">
            Professional-grade peptide technology designed to rebuild what time
            takes away. Firms loose skin, smooths fine lines, and restores
            glass-skin luminosity — clinically active from day one.
          </p>

          <div className="prod__meta">
            <div className="prod__meta-cell">
              <div className="k">Volume</div>
              <div className="v">30 ML / 1 FL OZ</div>
            </div>
            <div className="prod__meta-cell">
              <div className="k">Lasts</div>
              <div className="v">60 days</div>
            </div>
          </div>

          <div className="prod__price-row">
            <span className="prod__price">$29</span>
            <span className="prod__price-was">$58</span>
            <span className="prod__price-save">SAVE 50%</span>
          </div>

          <button className="btn btn--primary btn--big" onClick={() => onAdd({ price: 29 })}>
            Shop Now — $29 <span className="ar">→</span>
          </button>
          <div style={{marginTop:16, fontSize:12, color:"var(--muted)", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:600}}>
            <I.Truck /> &nbsp;Free shipping · <I.Lock /> &nbsp;Secure checkout
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Doctor Feature ============ */
function Doctor() {
  return (
    <section className="s s--ink" id="expert">
      <div className="s__in">
        <div className="doc">
          <div className="doc__visual">
            <img
              src="assets/doctor.jpg"
              alt="Dr. Sarah Kim, MD"
              style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}
            />
            <div className="doc__visual-stamp">
              <span className="k">Board-Certified</span>
              <span className="v">Dermatologist</span>
            </div>
          </div>
          <div className="doc__copy">
            <div className="eyb">Visible results</div>
            <h2 className="s__h" style={{margin:"12px 0 0", fontSize:"clamp(40px,5vw,72px)"}}>
              Results Backed<br/><em>by Dermatologists.</em>
            </h2>
            <p className="doc__quote">
              Copper peptides at 1% active concentration is one of the most
              validated anti-aging molecules in modern dermatology. I've seen
              consistent improvement in skin firmness and texture in patients
              using this class of ingredient daily. It's one of the few things I
              confidently recommend for at-home use.
            </p>
            <div className="doc__author">
              <span className="doc__author-avatar">SK</span>
              <div>
                <div className="doc__author-name">Dr. Sarah Kim, MD</div>
                <div className="doc__author-cred">Board-Certified Dermatologist · New York</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Ingredients deep dive ============ */
function Ingredients() {
  const ings = [
    { num: "01", title: "Copper Peptides", em: "GHK-Cu", sub: "Key Active · 1% Concentration", desc: "One of the most researched anti-aging molecules. Binds copper ions and signals fibroblasts to produce collagen and elastin. Reduces inflammation and accelerates skin repair at the cellular level.", statN: "1%", statL: "Clinically active concentration" },
    { num: "02", title: "Multi-Peptide", em: "Complex", sub: "Matrixyl 3000 + Argireline + Leuphasyl", desc: "Three peptides working in synergy to relax facial tension, stimulate new collagen synthesis, and visibly plump fine lines. No needles required.", statN: "+68%", statL: "Firmness improvement at 28 days" },
    { num: "03", title: "Triple Hyaluronic", em: "Acid", sub: "3 Molecular Weights", desc: "High, medium, and low molecular weight HA penetrating different skin depths simultaneously. 72-hour hydration retention after one application.", statN: "72h", statL: "Hydration retention" },
    { num: "04", title: "Niacinamide 5%", em: "Vitamin B3", sub: "Pore + Tone + Barrier", desc: "Minimizes pores, evens skin tone, reduces redness, and strengthens the skin barrier — working in perfect synergy with the peptide complex.", statN: "5%", statL: "Active concentration for visible results" },
  ];
  return (
    <section className="s" id="ingredients">
      <div className="s__head">
        <div className="eyb eyb--center">The formula</div>
        <h2 className="s__h">What's inside<br/><em>every bottle.</em></h2>
        <p className="s__lede">
          We don't hide behind proprietary blends. Every active ingredient, at
          every concentration, listed here.
        </p>
      </div>

      <div className="ing-list">
        {ings.map((i) => (
          <div className="ing-row" key={i.num}>
            <div className="ing-row__num">{i.num}</div>
            <div>
              <h3 className="ing-row__title">{i.title} <em>{i.em}</em></h3>
              <div className="ing-row__sub">{i.sub}</div>
              <p className="ing-row__desc">{i.desc}</p>
            </div>
            <div className="ing-row__stat">
              <div className="ing-row__stat-num">{i.statN}</div>
              <div className="ing-row__stat-lbl">{i.statL}</div>
            </div>
            <div className="ing-row__icon"><I.Sparkle /></div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ How it works ============ */
function HowItWorks() {
  const steps = [
    { n: "01", time: "AM + PM · 30 sec", title: "Cleanse",          desc: "Apply to clean, dry skin. The peptides absorb best into skin that isn't wet from toner or other products. Pat — don't rub." },
    { n: "02", time: "Apply · 60 sec",   title: "Apply 3–4 Drops",  desc: "Dispense onto fingertips and press gently into face, neck, and décolletage. The formula melts in within 60 seconds. No rubbing required." },
    { n: "03", time: "Finish · 30 sec",  title: "Follow & Protect", desc: "Layer your moisturizer and SPF on top. Velluré works beneath everything else, actively repairing while you go about your day." },
  ];
  return (
    <section className="s s--bone" id="how">
      <div className="s__in">
        <div className="s__head">
          <div className="eyb eyb--center">How to use</div>
          <h2 className="s__h">Three steps.<br/><em>Sixty seconds. Every morning.</em></h2>
        </div>

        <div className="how">
          {steps.map(s => (
            <div className="how__step" key={s.n}>
              <div className="how__num">{s.n}</div>
              <div className="how__time">{s.time}</div>
              <h3 className="how__title">{s.title}</h3>
              <p className="how__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Reviews ============ */
function Reviews() {
  const reviews = [
    { stars: 5, initial: "M", name: "María G.", meta: "Age 47 · Miami, FL", quote: "I've tried everything — retinol, vitamin C, the fancy stuff. Nothing worked like this. After 3 weeks my husband noticed without me saying anything. That's when you know it's real.", tags: ["Firmer skin", "Fine lines", "Glow"] },
    { stars: 5, initial: "L", name: "Linda T.", meta: "Age 52 · Los Angeles, CA", quote: "I'm a nurse and I read every ingredient label. The copper peptide concentration here is real — not a marketing trick. Skin is noticeably smoother. I've reordered twice already.", tags: ["Texture", "Clinical concentration"] },
    { stars: 5, initial: "S", name: "Sofia R.", meta: "Age 34 · Houston, TX", quote: "I have sensitive skin and I was terrified to try a peptide serum. Zero reaction. Just smooth, glowing skin by week two. I sent the link to my mom and sister immediately.", tags: ["Sensitive skin", "Brightening"] },
  ];
  const bars = [{s:5, p:94},{s:4, p:5},{s:3, p:1},{s:2, p:0},{s:1, p:0}];
  return (
    <section className="s" id="reviews">
      <div className="s__head s__head--left" style={{textAlign:"left", margin:"0 0 64px"}}>
        <div className="eyb">Customer reviews</div>
        <h2 className="s__h">Join Our<br/><em>Glowing Customers.</em></h2>
      </div>

      <div className="rv-wrap">
        <div className="rv-summary">
          <div className="rv-summary__big">4.9</div>
          <div className="rv-summary__stars">★★★★★</div>
          <div className="rv-summary__meta">Based on 2,847 verified reviews</div>
          <div className="rv-summary__bars">
            {bars.map(b => (
              <div className="rv-bar" key={b.s}>
                <span className="rv-bar__star">{b.s} ★</span>
                <div className="rv-bar__track"><div className="rv-bar__fill" style={{width: b.p + "%"}} /></div>
                <span className="rv-bar__pct">{b.p}%</span>
              </div>
            ))}
          </div>
          <div style={{marginTop:32, fontSize:12, fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--ok)", display:"flex", alignItems:"center", gap:8}}>
            <I.Check /> 96% would buy again
          </div>
        </div>

        <div className="rv-list">
          {reviews.map((r, i) => (
            <div className="rv-card" key={i}>
              <div className="rv-card__head">
                <div className="rv-card__avatar">{r.initial}</div>
                <div className="rv-card__author">
                  <div className="rv-card__name">{r.name}</div>
                  <div className="rv-card__meta">{r.meta}</div>
                </div>
                <span className="rv-card__verified">✓ Verified</span>
              </div>
              <div className="rv-card__stars">{"★".repeat(r.stars)}</div>
              <blockquote className="rv-card__quote">"{r.quote}"</blockquote>
              <div className="rv-card__tags">
                {r.tags.map((t, j) => <span className="rv-card__tag" key={j}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rv-cta">
        <button className="btn btn--ghost">Read all 2,847 reviews</button>
      </div>
    </section>
  );
}

/* ============ Guarantee ============ */
function Guarantee({ onAdd }) {
  return (
    <section className="guar" id="guarantee">
      <div className="guar__inner">
        <div className="guar__eyb">Our promise</div>
        <h2 className="guar__h">
          If you don't see results<br/>in 30 days,<br/><em>you pay nothing.</em>
        </h2>
        <p className="guar__lede">
          We believe in this formula. If your skin doesn't look visibly firmer,
          smoother, or more luminous in 30 days, email us and we'll refund every
          penny — no questions, no return required. You have nothing to lose
          except the fine lines.
        </p>
        <button className="btn btn--cream btn--big" onClick={() => onAdd({ price: 29 })}>
          Try Velluré Risk-Free — $29 <span className="ar">→</span>
        </button>
        <div className="guar__badges">
          <span><I.Lock />Secure Payment</span>
          <span><I.Return />30-Day Returns</span>
          <span><I.Truck />Free Shipping</span>
          <span><I.Shield />Derm-Tested</span>
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
function FAQ() {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "How quickly will I see results?", a: "Most customers report improved texture and radiance within 7–14 days. Visible firming typically occurs at 3–4 weeks. For deeper structural changes, we recommend a full 60-day cycle." },
    { q: "Can I use this with retinol or vitamin C?", a: "Yes. Apply Velluré first on clean skin, then follow with vitamin C or retinol. If using retinol at night, alternate: Velluré in the morning, retinol at night." },
    { q: "Is this suitable for sensitive skin?", a: "Absolutely. Fragrance-free, alcohol-free, hypoallergenic. Formulated to be tolerated by sensitive and reactive skin. We recommend a patch test on the inner arm first if you have extremely reactive skin." },
    { q: "How long does one bottle last?", a: "Each 30ml bottle = approximately 60 days at 3–4 drops daily. Less than $0.50 per day — significantly less than any in-office treatment." },
    { q: "What is your refund policy?", a: "Full 30-day money-back guarantee. Not satisfied for any reason? Email us within 30 days of receiving your order and we'll process a full refund — no return required, no questions asked." },
  ];
  return (
    <section className="s" id="faq">
      <div className="s__head">
        <div className="eyb eyb--center">Frequently asked</div>
        <h2 className="s__h"><em>Everything</em><br/>you need to know.</h2>
      </div>
      <div className="faq">
        {faqs.map((f, i) => (
          <div className={`faq__item ${open === i ? "is-open" : ""}`} key={i} onClick={() => setOpen(open === i ? -1 : i)}>
            <div className="faq__q">
              <span>{f.q}</span>
              <span className="faq__icon">+</span>
            </div>
            <div className="faq__a">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ Final CTA ============ */
function Final({ onAdd }) {
  return (
    <section className="fin">
      <div className="fin__inner">
        <div className="eyb eyb--center" style={{display:"inline-flex"}}>Ready when you are</div>
        <h1 className="fin__h">Your skin's next<br/>chapter starts <em>today</em>.</h1>
        <p className="fin__lede">
          Join 2,847 women who stopped settling for surface-level skincare. Your
          30-day trial starts the moment your order ships.
        </p>
        <button className="btn btn--primary btn--big" onClick={() => onAdd({ price: 29 })}>
          Get Velluré — $29 <span className="ar">→</span>
        </button>
        <div className="fin__sub">
          Free shipping · 30-day guarantee · Results in 14 days
        </div>
      </div>
      <div className="fin__brand-mark">Velluré</div>
    </section>
  );
}

/* ============ Footer ============ */
function Footer() {
  return (
    <footer className="ft">
      <div className="ft__top">
        <div className="ft__brand-block">
          <div className="b">Vellur<em>é</em></div>
          <div className="tag">science your skin can feel</div>
          <p>Clinical-grade peptide skincare. We believe in transparent ingredients, honest claims, and results you can measure in the mirror.</p>
        </div>
        <div className="ft__col">
          <h5>Shop</h5>
          <ul>
            <li><a href="#">Peptide Serum</a></li>
            <li><a href="#">Subscribe & Save</a></li>
            <li><a href="#">Gift cards</a></li>
            <li><a href="#">The Duo</a></li>
          </ul>
        </div>
        <div className="ft__col">
          <h5>Help</h5>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div className="ft__col">
          <h5>Company</h5>
          <ul>
            <li><a href="#">Our Science</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Journal</a></li>
          </ul>
        </div>
      </div>
      <div className="ft__bottom">
        <span>© 2026 Velluré Skin · Made in Switzerland</span>
        <span>EN / USD · Ships to 24 countries</span>
        <span>Privacy · Terms · Cookies</span>
      </div>
    </footer>
  );
}

/* ============ Sticky cart ============ */
function StickyCart({ visible, onAdd }) {
  return (
    <div className={`sk ${visible ? "is-visible" : ""}`}>
      <div className="sk__img"><img src="assets/hoygi-set.png" alt="" /></div>
      <div className="sk__info">
        <div className="sk__name">Vellur<em>é</em> Peptide Serum</div>
        <div className="sk__price">
          <span className="sk__rating">★★★★★</span> 4.9 · <strong>$29</strong> &nbsp;<span style={{color:"var(--muted)", textDecoration:"line-through"}}>$58</span>
        </div>
      </div>
      <button className="btn btn--blue" onClick={() => onAdd({ price: 29 })}>
        Add to Cart <span className="ar">→</span>
      </button>
    </div>
  );
}

/* ============ Cart Drawer ============ */
function Cart({ open, onClose, items, setItems }) {
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const inc = (idx) => setItems(items.map((it, i) => i === idx ? { ...it, qty: it.qty + 1 } : it));
  const dec = (idx) => setItems(items.map((it, i) => i === idx ? { ...it, qty: Math.max(1, it.qty - 1) } : it));
  const rm  = (idx) => setItems(items.filter((_, i) => i !== idx));

  return (
    <>
      <div className={`drback ${open ? "is-open" : ""}`} onClick={onClose} />
      <aside className={`dr ${open ? "is-open" : ""}`}>
        <div className="dr__head">
          <h4>Your <em>cart</em> ({items.length})</h4>
          <button className="dr__close" onClick={onClose}>×</button>
        </div>

        {items.length === 0 ? (
          <div className="dr__empty">
            <p>Your cart is <em>empty</em>.</p>
            <button className="btn btn--primary" onClick={onClose}>Continue shopping →</button>
          </div>
        ) : (
          <>
            <div className="dr__progress">
              <div className="dr__progress-text">
                <strong>FREE shipping</strong> included on every order ✓
              </div>
              <div className="dr__progress-bar">
                <div className="dr__progress-fill" style={{width: "100%"}} />
              </div>
            </div>

            <div className="dr__items">
              {items.map((it, i) => (
                <div className="dr__item" key={i}>
                  <div className="dr__item-img"><img src="assets/hoygi-set.png" alt="" /></div>
                  <div>
                    <div className="dr__item-name">Velluré Peptide Serum</div>
                    <div className="dr__item-variant">30 ML · One-time</div>
                    <div className="dr__item-qty">
                      <button onClick={() => dec(i)}>−</button>
                      {it.qty}
                      <button onClick={() => inc(i)}>+</button>
                    </div>
                  </div>
                  <div className="dr__item-price">
                    <span className="p">${(it.price * it.qty).toFixed(2)}</span>
                    <button onClick={() => rm(i)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="dr__foot">
              <div className="dr__total">
                <span className="l">Subtotal</span>
                <span className="v">${subtotal.toFixed(2)}</span>
              </div>
              <button className="btn btn--primary" style={{width:"100%"}}>Checkout · ${subtotal.toFixed(2)}</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

/* ============ App ============ */
function App() {
  const [cartOpen, setCartOpen]   = useState(false);
  const [items, setItems]         = useState([]);
  const [stickyVisible, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroBottom = document.querySelector("#top")?.getBoundingClientRect().bottom || 0;
      const finTop     = document.querySelector(".fin")?.getBoundingClientRect().top || 9999;
      setSticky(heroBottom < 0 && finTop > window.innerHeight - 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const addItem = (cfg) => {
    setItems(prev => {
      if (prev.length > 0) {
        return prev.map((p, i) => i === 0 ? { ...p, qty: p.qty + 1 } : p);
      }
      return [{ ...cfg, qty: 1 }];
    });
    setCartOpen(true);
  };

  const onScrollScience = () => {
    document.querySelector("#science")?.getBoundingClientRect && window.scrollTo({
      top: document.querySelector("#science").offsetTop - 80,
      behavior: "smooth"
    });
  };

  return (
    <>
      <Announce />
      <Nav cartCount={items.reduce((s,i)=>s+i.qty,0)} onCartClick={() => setCartOpen(true)} />
      <Hero onAdd={addItem} onScrollScience={onScrollScience} />
      <Trust />
      <Science />
      <Press />
      <Transformations onAdd={addItem} />
      <Product onAdd={addItem} />
      <Doctor />
      <Ingredients />
      <HowItWorks />
      <Reviews />
      <Guarantee onAdd={addItem} />
      <FAQ />
      <Final onAdd={addItem} />
      <Footer />
      <StickyCart visible={stickyVisible} onAdd={addItem} />
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} items={items} setItems={setItems} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
