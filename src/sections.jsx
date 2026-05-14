// Top sections: Announcement bar, Nav, Hero, Press marquee, Product feature

// Hook: scroll-triggered reveal
function useReveal(threshold = 0.15) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// =================================================================
// ANNOUNCEMENT BAR
// =================================================================
function AnnouncementBar() {
  const messages = [
    'FREE SHIPPING ON ORDERS OVER $40',
    'NEW: REFILL POUCHES — 60% LESS PLASTIC',
    'YOUR CAT WILL HATE THIS LESS THAN OTHER SHAMPOOS',
    'MADE IN PORTLAND. TESTED ON ANIMALS. THEY HATED IT EQUALLY.',
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % messages.length), 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{
      background: 'var(--ink)', color: 'var(--cream)', fontFamily: 'var(--mono)',
      fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
      padding: '10px 20px', textAlign: 'center', overflow: 'hidden', height: 36,
    }}>
      <div style={{ position: 'relative', height: 16 }}>
        {messages.map((m, idx) => (
          <div key={idx} style={{
            position: 'absolute', inset: 0, transition: 'transform .6s, opacity .6s',
            transform: `translateY(${(idx - i) * 100}%)`,
            opacity: idx === i ? 1 : 0,
          }}>{m}</div>
        ))}
      </div>
    </div>
  );
}

// =================================================================
// NAV
// =================================================================
function Nav({ brand, onCartOpen, cartCount }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [pulse, setPulse] = React.useState(false);
  const prevCount = React.useRef(cartCount);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // Pulse the bag badge when count grows
  React.useEffect(() => {
    if (cartCount > prevCount.current) {
      setPulse(true);
      const t = setTimeout(() => setPulse(false), 600);
      prevCount.current = cartCount;
      return () => clearTimeout(t);
    }
    prevCount.current = cartCount;
  }, [cartCount]);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: scrolled ? 'rgba(236, 230, 218, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'background .3s, border .3s',
    }}>
      <div className="container" style={{
        display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
        padding: '18px 32px',
      }}>
        <div style={{ display: 'flex', gap: 28, fontFamily: 'var(--mono)', fontSize: 11 }}>
          <a href="#shop" className="nav-link">SHOP</a>
          <a href="#why" className="nav-link">WHY</a>
          <a href="#science" className="nav-link">SCIENCE</a>
          <a href="#about" className="nav-link" style={{ opacity: 0.85 }}>ABOUT</a>
        </div>
        <a href="#" style={{
          fontFamily: 'var(--serif)', fontSize: 28, letterSpacing: '-0.02em',
          fontStyle: 'italic', textAlign: 'center',
        }}>
          {brand}<span style={{ fontSize: 12, verticalAlign: 'super' }}>™</span>
        </a>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'flex-end', fontFamily: 'var(--mono)', fontSize: 11, alignItems: 'center' }}>
          <a href="#" className="nav-link"><Icon.Search size={16} /></a>
          <a href="#" className="nav-link">ACCOUNT</a>
          <button onClick={onCartOpen} className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>BAG</span>
            <span style={{
              minWidth: 22, height: 22, padding: '0 6px',
              background: pulse ? 'var(--clay)' : 'var(--ink)', color: 'var(--cream)',
              borderRadius: 999, display: 'grid', placeItems: 'center',
              fontSize: 10, fontWeight: 600,
              transform: pulse ? 'scale(1.4)' : 'scale(1)',
              transition: 'transform .35s cubic-bezier(.34,1.56,.64,1), background .35s',
            }}>{cartCount}</span>
          </button>
        </div>
      </div>
      <style>{`
        .nav-link { transition: opacity .2s; cursor: pointer; }
        .nav-link:hover { opacity: 0.55; }
      `}</style>
    </nav>
  );
}

// =================================================================
// HERO
// =================================================================
function Hero({ brand, headline, sub, productImg }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingBottom: 60 }}>
      <div className="container" style={{ paddingTop: 24 }}>

        {/* Big editorial headline */}
        <h1 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(60px, 11vw, 180px)',
          lineHeight: 0.92, letterSpacing: '-0.025em',
          marginBottom: 24, position: 'relative', zIndex: 2,
        }}>
          {headline.split('\n').map((line, i) => (
            <span key={i} style={{
              display: 'block',
              fontStyle: i % 2 === 1 ? 'italic' : 'normal',
              paddingLeft: i === 1 ? '12%' : 0,
            }}>{line}</span>
          ))}
        </h1>

        {/* Hero stage */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.1fr 1fr',
          gap: 24, alignItems: 'end', marginTop: 40,
        }}>
          {/* Left: tagline + CTAs */}
          <div style={{ paddingBottom: 24 }}>
            <p style={{
              fontFamily: 'var(--serif-body)', fontSize: 21, lineHeight: 1.4,
              maxWidth: 320, color: 'var(--ink-soft)', textWrap: 'pretty',
            }}>
              {sub}
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <a href="#shop" className="btn-primary">
                Shop the wash <Icon.Arrow size={12} />
              </a>
              <a href="#science" className="btn-secondary">
                Why no fragrance?
              </a>
            </div>
          </div>

          {/* Center: hero photo */}
          <div style={{
            aspectRatio: '4/5', position: 'relative', overflow: 'hidden',
            background: 'var(--moss-deep)',
          }}>
            <img src={productImg}
              alt="Cat in wild"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.05) saturate(0.85)' }} />
            <div style={{
              position: 'absolute', bottom: 16, left: 16, right: 16,
              color: 'var(--cream)', fontFamily: 'var(--mono)', fontSize: 10,
              display: 'flex', justifyContent: 'space-between',
            }}>
              <span>FIG. 01 — APEX PREDATOR (1.4KG)</span>
              <span>UNTAMED</span>
            </div>
          </div>

          {/* Right: micro-stats + bottle */}
          <div style={{ paddingBottom: 24 }}>
            <div style={{
              border: '1px solid var(--ink)', padding: '16px 18px',
              fontFamily: 'var(--mono)', fontSize: 10, lineHeight: 1.7,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>FRAGRANCE</span><span>0.00%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>PH</span><span>6.2 — 6.5</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>INGREDIENTS</span><span>9</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>HUMAN-TESTED</span><span>NEVER</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>VET-TESTED</span><span>YES</span>
              </div>
            </div>
            <p className="serif-italic" style={{ fontSize: 18, marginTop: 20, lineHeight: 1.3, color: 'var(--ink-soft)' }}>
              "Your cat doesn't want to smell like lavender. Your cat wants to smell like a cat."
            </p>
            <div className="mono" style={{ marginTop: 10, fontSize: 10 }}>— Dr. M. Whiskers, DVM</div>
          </div>
        </div>
      </div>

      <style>{`
        .btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--ink); color: var(--cream);
          padding: 14px 24px; border-radius: 999px;
          font-family: var(--mono); font-size: 11px;
          letter-spacing: 0.1em; text-transform: uppercase;
          transition: transform .2s, background .2s;
        }
        .btn-primary:hover { background: var(--moss-deep); transform: translateY(-1px); }
        .btn-secondary {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 24px; border-radius: 999px;
          border: 1px solid var(--ink);
          font-family: var(--mono); font-size: 11px;
          letter-spacing: 0.1em; text-transform: uppercase;
          transition: background .2s, color .2s;
        }
        .btn-secondary:hover { background: var(--ink); color: var(--cream); }
      `}</style>
    </section>
  );
}

// =================================================================
// PRESS MARQUEE
// =================================================================
function PressMarquee({ speed = 35 }) {
  const items = [
    'NEW YORK TIMES', 'VOGUE', 'MODERN CAT', 'GQ', 'THE STRATEGIST',
    'CONDÉ NAST TRAVELER', 'BON APPÉTIT', 'WALLPAPER*', 'CEREAL', 'DOMINO',
  ];
  const quotes = [
    '"Finally, a shampoo that respects the cat."',
    '"The most honest grooming brand on the internet."',
    '"It smells like nothing. That\'s the point."',
    '"Your cat will tolerate this. High praise."',
  ];
  return (
    <section style={{
      background: 'var(--ink)', color: 'var(--cream)',
      padding: '28px 0', overflow: 'hidden', borderTop: '1px solid var(--ink)',
      borderBottom: '1px solid var(--ink)',
    }}>
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{
          display: 'inline-flex', gap: 56,
          animation: `scroll-x ${speed}s linear infinite`,
          fontFamily: 'var(--serif)', fontSize: 26, fontStyle: 'italic',
        }}>
          {[...items, ...items, ...items].map((it, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 56 }}>
              {it}
              <span style={{ color: 'var(--clay)', fontStyle: 'normal' }}>✦</span>
            </span>
          ))}
        </div>
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        gap: 40, padding: '24px 32px 0', maxWidth: 1440, margin: '0 auto',
        fontFamily: 'var(--serif-body)', fontSize: 14, fontStyle: 'italic',
        color: 'rgba(244,239,227,0.72)', flexWrap: 'wrap',
      }}>
        {quotes.map((q, i) => <div key={i} style={{ flex: '1 1 220px', minWidth: 0 }}>{q}</div>)}
      </div>
      <style>{`
        @keyframes scroll-x {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}

// =================================================================
// PRODUCT FEATURE
// =================================================================
function ProductFeature({ onAddToBag, productImg }) {
  const [ref, visible] = useReveal();
  const [hover, setHover] = React.useState(false);
  return (
    <section id="shop" ref={ref} style={{
      padding: '120px 0', position: 'relative',
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'opacity 1s, transform 1s',
    }}>
      <div className="container" style={{
        display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 80, alignItems: 'center',
      }}>
        {/* Image stack */}
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ position: 'relative', aspectRatio: '4/5', background: 'var(--bg-alt)' }}
        >
          <img src={productImg}
            alt="MoreFur bottle"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              opacity: hover ? 0 : 1, transition: 'opacity .5s',
            }} />
          <div style={{
            position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
            background: 'var(--moss-deep)', color: 'var(--cream)',
            opacity: hover ? 1 : 0, transition: 'opacity .5s',
            padding: 40, textAlign: 'center',
          }}>
            <div>
              <div className="mono" style={{ marginBottom: 24, opacity: 0.7 }}>WHAT'S IN IT</div>
              <ul style={{ listStyle: 'none', fontFamily: 'var(--serif-body)', fontSize: 19, lineHeight: 2 }}>
                <li>Saponified coconut oil</li>
                <li>Aloe vera leaf</li>
                <li>Colloidal oatmeal</li>
                <li>Glycerin (vegetable)</li>
                <li>Allantoin</li>
                <li><em>+ 4 more boring things</em></li>
              </ul>
              <div className="mono" style={{ marginTop: 32, opacity: 0.7 }}>
                NOT IN IT: FRAGRANCE · DYES · SULFATES · PARABENS
              </div>
            </div>
          </div>
          <div style={{
            position: 'absolute', top: 16, left: 16,
            fontFamily: 'var(--mono)', fontSize: 10, color: hover ? 'var(--cream)' : 'var(--ink)',
            transition: 'color .5s',
          }}>HOVER →</div>
        </div>

        {/* Text */}
        <div>
          <div className="mono" style={{ marginBottom: 16, color: 'var(--clay)' }}>THE WASH · 250ML · $26</div>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 0.95,
            letterSpacing: '-0.02em', marginBottom: 24,
          }}>
            One bottle.<br/>
            <em>Nine ingredients.</em><br/>
            Zero opinions on<br/>
            how a cat<br/>
            should smell.
          </h2>
          <p style={{
            fontFamily: 'var(--serif-body)', fontSize: 19, lineHeight: 1.55,
            color: 'var(--ink-soft)', maxWidth: 480, marginBottom: 32, textWrap: 'pretty',
          }}>
            We made a shampoo for the 3% of times a cat actually needs one — got into something,
            came home worse for it, lost a fight with a hedge. The other 97% of the time, leave them alone.
            They've got it.
          </p>

          <div style={{
            display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap',
          }}>
            {[
              { k: 'pH-matched', v: 'Cat skin = 6.2' },
              { k: 'No fragrance', v: 'Cats hate it' },
              { k: 'Tearless', v: 'Their face wins' },
              { k: 'Vet-formulated', v: 'Real ones' },
            ].map((b, i) => (
              <div key={i} style={{
                border: '1px solid var(--line)', padding: '10px 14px',
                fontFamily: 'var(--mono)', fontSize: 10,
              }}>
                <div style={{ color: 'var(--clay)' }}>✦ {b.k.toUpperCase()}</div>
                <div style={{ marginTop: 4, color: 'var(--ink-soft)', textTransform: 'none', letterSpacing: 0, fontFamily: 'var(--serif-body)', fontStyle: 'italic', fontSize: 13 }}>{b.v}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={onAddToBag} className="btn-primary">
              Add to bag — $26
            </button>
            <a href="#science" className="btn-secondary">
              Read the ingredients
            </a>
          </div>

          <div style={{ display: 'flex', gap: 6, marginTop: 24, alignItems: 'center', color: 'var(--clay)' }}>
            {[1,2,3,4,5].map((i) => <Icon.Star key={i} size={14} />)}
            <span className="mono" style={{ marginLeft: 8, color: 'var(--ink-soft)' }}>4.9 · 2,847 REVIEWS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.AnnouncementBar = AnnouncementBar;
window.Nav = Nav;
window.Hero = Hero;
window.PressMarquee = PressMarquee;
window.ProductFeature = ProductFeature;
window.useReveal = useReveal;
