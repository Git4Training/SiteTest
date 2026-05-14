// 3 reasons, punchline, lifestyle grid, newsletter, footer
// =================================================================
// 3 REASONS
// =================================================================
function ThreeReasons() {
  const [ref, visible] = useReveal();
  const reasons = [
    {
      n: '01',
      icon: 'Nose',
      title: 'A cat\'s nose is 14× more sensitive than yours.',
      body: 'They smell at parts-per-trillion. Lavender shampoo, to a cat, is a chemical weapons attack you ordered for $19.99.',
      meta: 'Veterinary Sensory Sciences, 2023',
    },
    {
      n: '02',
      icon: 'Drop',
      title: 'Their skin runs at pH 6.2. Yours runs at 5.5.',
      body: 'Use human shampoo on a cat and you strip the acid mantle. The cat doesn\'t know what that is. The cat just knows it itches now.',
      meta: 'JAVMA, vol. 248',
    },
    {
      n: '03',
      icon: 'Leaf',
      title: 'Cats already shower 30% of their waking life.',
      body: 'They\'re professionals. You\'re a guest in their grooming routine. Behave accordingly. Use the wash only when chemistry has gone wrong.',
      meta: 'Cornell Feline Health Center',
    },
  ];

  return (
    <section id="science" ref={ref} style={{
      padding: '120px 0', background: 'var(--bg-alt)',
      borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
      opacity: visible ? 1 : 0, transition: 'opacity 1s',
    }}>
      <div className="container">
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: 64, flexWrap: 'wrap', gap: 16,
        }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 0.95,
            letterSpacing: '-0.02em', maxWidth: 720,
          }}>
            Three reasons we made <em>one</em> bottle<br />
            instead of <em>thirty.</em>
          </h2>
          <div className="mono" style={{ color: 'var(--ink-soft)' }}>§ THE SCIENCE</div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
          borderTop: '1px solid var(--ink)',
        }}>
          {reasons.map((r, i) => {
            const I = Icon[r.icon];
            return (
              <div key={i} className="reason-col" style={{
                padding: '40px 32px 48px',
                borderRight: i < 2 ? '1px solid var(--ink)' : 'none',
                borderBottom: '1px solid var(--ink)',
                position: 'relative',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity .8s ${i * 0.15 + 0.2}s, transform .8s ${i * 0.15 + 0.2}s`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
                  <div className="mono" style={{ fontSize: 12 }}>{r.n}</div>
                  <I size={36} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 30, lineHeight: 1.05,
                  letterSpacing: '-0.015em', marginBottom: 20,
                }}>{r.title}</h3>
                <p style={{
                  fontFamily: 'var(--serif-body)', fontSize: 16, lineHeight: 1.55,
                  color: 'var(--ink-soft)', marginBottom: 24, textWrap: 'pretty',
                }}>{r.body}</p>
                <div className="mono" style={{ fontSize: 9, color: 'var(--ink-soft)', opacity: 0.6 }}>
                  SOURCE — {r.meta}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .reason-col { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}

// =================================================================
// PUNCHLINE
// =================================================================
function Punchline() {
  const [ref, visible] = useReveal(0.3);
  return (
    <section id="why" ref={ref} style={{
      padding: '180px 0 200px', background: 'var(--ink)', color: 'var(--cream)',
      position: 'relative', overflow: 'hidden', textAlign: 'center',
    }}>
      {/* ambient claw marks */}
      <svg style={{ position: 'absolute', top: 60, left: 80, opacity: 0.08 }} width="220" height="320" viewBox="0 0 220 320">
        <path d="M20 0 Q 40 160 30 320" stroke="var(--cream)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M80 0 Q 100 160 90 320" stroke="var(--cream)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M140 0 Q 160 160 150 320" stroke="var(--cream)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M200 0 Q 220 160 210 320" stroke="var(--cream)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 60, right: 80, opacity: 0.08, transform: 'scaleX(-1)' }} width="220" height="320" viewBox="0 0 220 320">
        <path d="M20 0 Q 40 160 30 320" stroke="var(--cream)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M80 0 Q 100 160 90 320" stroke="var(--cream)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M140 0 Q 160 160 150 320" stroke="var(--cream)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>

      <div className="container" style={{
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 1.2s, transform 1.2s',
      }}>
        <div className="mono" style={{ color: 'var(--clay)', marginBottom: 40 }}>✦ THE BOTTOM LINE ✦</div>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(56px, 9vw, 140px)', lineHeight: 0.95,
          letterSpacing: '-0.025em', maxWidth: '12ch', margin: '0 auto',
        }}>
          Tested on animals.<br />
          <em style={{ color: 'var(--clay)' }}>They hated it.</em><br />
          Used it anyway.
        </h2>
        <p style={{
          fontFamily: 'var(--serif-body)', fontStyle: 'italic',
          fontSize: 22, marginTop: 40, opacity: 0.78, maxWidth: 540,
          margin: '40px auto 0', lineHeight: 1.4, textWrap: 'pretty',
        }}>
          (To be clear: vet-supervised tolerance trials with 64 cats. None were
          harmed. All were annoyed. That's just being a cat.)
        </p>
      </div>
    </section>
  );
}

// =================================================================
// LIFESTYLE GRID
// =================================================================
function LifestyleGrid() {
  const [ref, visible] = useReveal();
  const tiles = [
    { src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80', cap: 'mango. before.', span: 'tall' },
    { src: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&q=80', cap: '@persimmonpaws hates baths. tolerated this one.', span: '' },
    { src: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=800&q=80', cap: 'reluctant compliance.', span: 'wide' },
    { src: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&q=80', cap: 'a sink. a cat. a quiet revolution.', span: '' },
    { src: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=800&q=80', cap: 'before the betrayal.', span: '' },
    { src: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800&q=80', cap: 'no fragrance. just cat.', span: 'tall' },
    { src: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=800&q=80', cap: '8 minutes later. forgiveness.', span: '' },
    { src: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=800&q=80', cap: 'the wash dries clean.', span: 'wide' },
  ];
  return (
    <section ref={ref} style={{
      padding: '120px 0',
      opacity: visible ? 1 : 0, transition: 'opacity 1s',
    }}>
      <div className="container">
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: 56, flexWrap: 'wrap', gap: 16,
        }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(36px, 4.4vw, 56px)',
            lineHeight: 0.95, letterSpacing: '-0.02em',
          }}>
            <em>The clientele.</em>
          </h2>
          <a href="#" className="mono" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon.Instagram size={14} /> @MOREFUR
          </a>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '220px',
          gap: 12,
        }} className="lifestyle-grid">
          {tiles.map((t, i) => (
            <a key={i} href="#" className="tile" style={{
              gridRow: t.span === 'tall' ? 'span 2' : 'span 1',
              gridColumn: t.span === 'wide' ? 'span 2' : 'span 1',
              position: 'relative', overflow: 'hidden',
              background: 'var(--bg-alt)',
            }}>
              <img src={t.src} alt={t.cap}
                style={{ width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'saturate(0.85) contrast(1.02)',
                  transition: 'transform .6s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute', inset: 0, padding: 16,
                display: 'flex', alignItems: 'flex-end',
                background: 'linear-gradient(to top, rgba(31,27,20,0.6), transparent 50%)',
                color: 'var(--cream)',
                fontFamily: 'var(--serif-body)', fontSize: 14, fontStyle: 'italic',
              }}>
                {t.cap}
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .lifestyle-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

// =================================================================
// NEWSLETTER
// =================================================================
function Newsletter() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <section id="about" style={{
      padding: '120px 0', background: 'var(--moss-deep)', color: 'var(--cream)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="container" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
      }}>
        <div>
          <div className="mono" style={{ color: 'var(--clay)', marginBottom: 24 }}>✦ THE NEWSLETTER ✦</div>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(44px, 5.5vw, 72px)', lineHeight: 0.95,
            letterSpacing: '-0.02em',
          }}>
            We send <em>two</em> emails<br />a year.
          </h2>
          <p style={{
            fontFamily: 'var(--serif-body)', fontStyle: 'italic', fontSize: 19,
            marginTop: 24, maxWidth: 460, opacity: 0.85, lineHeight: 1.5, textWrap: 'pretty',
          }}>
            One when we restock. One when we have something to say. No "spring grooming guides."
            No 17 cat-themed holidays. We promise.
          </p>
        </div>
        <div>
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); if (email.includes('@')) setSubmitted(true); }} style={{
              display: 'flex', borderBottom: '1px solid var(--cream)', paddingBottom: 12,
            }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1, background: 'transparent', border: 'none',
                  color: 'var(--cream)', fontFamily: 'var(--serif)',
                  fontSize: 28, fontStyle: 'italic', outline: 'none',
                  padding: '8px 0',
                }}
              />
              <button type="submit" style={{
                fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--cream)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                SUBMIT <Icon.Arrow size={12} />
              </button>
            </form>
          ) : (
            <div style={{
              fontFamily: 'var(--serif)', fontSize: 28, fontStyle: 'italic',
              padding: '8px 0', borderBottom: '1px solid var(--cream)',
            }}>
              ✓ You're in. The cat says nothing.
            </div>
          )}
          <div className="mono" style={{ marginTop: 16, opacity: 0.6, fontSize: 10 }}>
            BY SUBSCRIBING, YOU AGREE TO RECEIVE TWO (2) EMAILS PER YEAR. UNSUBSCRIBE BY EXISTING.
          </div>
        </div>
      </div>
    </section>
  );
}

// =================================================================
// FOOTER
// =================================================================
function Footer({ brand }) {
  return (
    <footer style={{
      background: 'var(--ink)', color: 'var(--cream)', padding: '80px 0 32px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48,
          paddingBottom: 64, borderBottom: '1px solid rgba(244,239,227,0.18)',
        }} className="footer-grid">
          <div>
            <div style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic',
              fontSize: 56, letterSpacing: '-0.02em',
            }}>{brand}<span style={{ fontSize: 18, verticalAlign: 'super' }}>™</span></div>
            <p style={{
              fontFamily: 'var(--serif-body)', fontStyle: 'italic',
              fontSize: 18, marginTop: 16, opacity: 0.7, maxWidth: 380,
              lineHeight: 1.45, textWrap: 'pretty',
            }}>
              Shampoo for cats. Made for the rare moments they need it.
              Designed to be ignored otherwise.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
              <a href="#" className="social"><Icon.Instagram size={16} /></a>
              <a href="#" className="social"><Icon.Tiktok size={16} /></a>
            </div>
          </div>
          {[
            { h: 'Shop', items: ['The Wash', 'Refill Pouch', 'Gift Card', 'Bundle'] },
            { h: 'Learn', items: ['The Science', 'FAQ', 'Ingredients', 'Reviews'] },
            { h: 'Co.', items: ['About', 'Contact', 'Wholesale', 'Press'] },
          ].map((col, i) => (
            <div key={i}>
              <div className="mono" style={{ color: 'var(--clay)', marginBottom: 20 }}>{col.h}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.items.map((it) => (
                  <li key={it}><a href="#" style={{
                    fontFamily: 'var(--serif-body)', fontSize: 16,
                    transition: 'opacity .2s',
                  }} onMouseEnter={(e) => e.currentTarget.style.opacity = 0.55}
                     onMouseLeave={(e) => e.currentTarget.style.opacity = 1}>{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', paddingTop: 32,
          fontFamily: 'var(--mono)', fontSize: 10, opacity: 0.55, flexWrap: 'wrap', gap: 12,
        }}>
          <span>© 2026 {brand.toUpperCase()} CO. — PORTLAND, OREGON</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#">PRIVACY</a><a href="#">TERMS</a><a href="#">ACCESSIBILITY</a>
          </div>
          <span>SMELL NOTHING. FEEL CLEAN.</span>
        </div>
      </div>
      <style>{`
        .social {
          width: 36px; height: 36px; display: grid; place-items: center;
          border: 1px solid rgba(244,239,227,0.3); border-radius: 999px;
          transition: background .2s, color .2s;
        }
        .social:hover { background: var(--cream); color: var(--ink); }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

window.ThreeReasons = ThreeReasons;
window.Punchline = Punchline;
window.LifestyleGrid = LifestyleGrid;
window.Newsletter = Newsletter;
window.Footer = Footer;
