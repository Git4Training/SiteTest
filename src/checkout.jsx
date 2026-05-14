// Checkout page — MoreFur
const PRODUCT_IMG = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&q=80';

// =================================================================
// HEADER
// =================================================================
function CheckoutHeader({ brand = 'MoreFur', step }) {
  const steps = ['Bag', 'Information', 'Shipping', 'Payment'];
  return (
    <header style={{
      borderBottom: '1px solid var(--line)', padding: '20px 0',
      background: 'var(--bg)', position: 'sticky', top: 0, zIndex: 10,
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 32px',
        display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
      }}>
        <a href="index.html" className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, justifySelf: 'start' }}>
          <Icon.Arrow size={12} dir="left" /> CONTINUE SHOPPING
        </a>
        <a href="index.html" style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 28,
          letterSpacing: '-0.02em',
        }}>
          {brand}<span style={{ fontSize: 12, verticalAlign: 'super' }}>™</span>
        </a>
        <div className="mono" style={{ justifySelf: 'end', color: 'var(--ink-soft)' }}>
          SECURE CHECKOUT · 256-BIT
        </div>
      </div>

      {/* Step indicator */}
      <div style={{
        maxWidth: 760, margin: '20px auto 0', padding: '0 32px',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8,
      }}>
        {steps.map((s, i) => (
          <div key={s} style={{
            paddingTop: 12, borderTop: `2px solid ${i <= step ? 'var(--ink)' : 'var(--line)'}`,
            transition: 'border-color .3s',
          }}>
            <div className="mono" style={{ fontSize: 10, color: i <= step ? 'var(--ink)' : 'var(--ink-soft)' }}>
              0{i + 1} · {s.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}

// =================================================================
// FORM CONTROLS
// =================================================================
function Field({ label, value, onChange, placeholder, type = 'text', error, hint, half, autoComplete }) {
  return (
    <label style={{ display: 'block', gridColumn: half ? 'span 1' : 'span 2' }}>
      <div className="mono" style={{
        fontSize: 10, marginBottom: 6, color: error ? 'var(--clay)' : 'var(--ink-soft)',
      }}>{label}{error && ' — ' + error}</div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={{
          width: '100%', padding: '14px 16px',
          background: 'var(--cream)',
          border: `1px solid ${error ? 'var(--clay)' : 'var(--line)'}`,
          fontFamily: 'var(--serif-body)', fontSize: 17,
          outline: 'none', transition: 'border-color .2s, background .2s',
          fontStyle: value ? 'normal' : 'italic',
        }}
        onFocus={(e) => e.currentTarget.style.borderColor = 'var(--ink)'}
        onBlur={(e) => e.currentTarget.style.borderColor = error ? 'var(--clay)' : 'var(--line)'}
      />
      {hint && <div className="mono" style={{ fontSize: 9, marginTop: 6, color: 'var(--ink-soft)', opacity: 0.7 }}>{hint}</div>}
    </label>
  );
}

function Radio({ checked, onChange, title, sub, right, badge }) {
  return (
    <label onClick={onChange} style={{
      display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 14,
      alignItems: 'center', padding: '18px 18px',
      border: `1px solid ${checked ? 'var(--ink)' : 'var(--line)'}`,
      background: checked ? 'var(--cream)' : 'transparent',
      cursor: 'pointer', transition: 'all .2s',
    }}>
      <div style={{
        width: 18, height: 18, borderRadius: 999,
        border: `1.5px solid ${checked ? 'var(--ink)' : 'var(--line)'}`,
        display: 'grid', placeItems: 'center', flexShrink: 0,
      }}>
        {checked && <div style={{ width: 9, height: 9, borderRadius: 999, background: 'var(--ink)' }} />}
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: 'var(--serif)', fontSize: 20, lineHeight: 1.1 }}>{title}</span>
          {badge && <span className="mono" style={{
            background: 'var(--moss-deep)', color: 'var(--cream)',
            padding: '3px 8px', fontSize: 9,
          }}>{badge}</span>}
        </div>
        {sub && <div style={{
          fontFamily: 'var(--serif-body)', fontStyle: 'italic',
          fontSize: 14, color: 'var(--ink-soft)', marginTop: 4,
        }}>{sub}</div>}
      </div>
      <div className="mono" style={{ fontSize: 12 }}>{right}</div>
    </label>
  );
}

function SectionTitle({ n, title, action, onAction }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      marginBottom: 20, marginTop: 40,
    }}>
      <h2 style={{
        fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 32,
        letterSpacing: '-0.015em', display: 'flex', alignItems: 'baseline', gap: 14,
      }}>
        <span className="mono" style={{ fontSize: 11, color: 'var(--clay)' }}>{n}</span>
        {title}
      </h2>
      {action && (
        <button onClick={onAction} className="mono" style={{
          fontSize: 10, textDecoration: 'underline', textUnderlineOffset: 4,
        }}>{action}</button>
      )}
    </div>
  );
}

// =================================================================
// CART ITEM ROW
// =================================================================
function CartRow({ it, onQty }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '80px 1fr auto',
      gap: 16, padding: '20px 0', borderBottom: '1px solid var(--line)',
      alignItems: 'center',
    }}>
      <div style={{ aspectRatio: '4/5', background: 'var(--bg-alt)', position: 'relative', overflow: 'hidden' }}>
        <img src={it.img} alt={it.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', top: -8, right: -8, width: 22, height: 22,
          background: 'var(--ink)', color: 'var(--cream)', borderRadius: 999,
          fontSize: 11, display: 'grid', placeItems: 'center',
          fontFamily: 'var(--mono)', fontWeight: 600,
        }}>{it.qty}</div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 20, lineHeight: 1.1 }}>{it.name}</div>
        <div className="mono" style={{ fontSize: 10, color: 'var(--ink-soft)', marginTop: 4 }}>{it.variant}</div>
        <div style={{
          display: 'inline-flex', marginTop: 10,
          border: '1px solid var(--ink)',
        }}>
          <button onClick={() => onQty(it.id, it.qty - 1)} style={{ padding: '4px 10px' }}><Icon.Minus size={11} /></button>
          <span className="mono" style={{ padding: '4px 12px', fontSize: 11, display: 'grid', placeItems: 'center' }}>{it.qty}</span>
          <button onClick={() => onQty(it.id, it.qty + 1)} style={{ padding: '4px 10px' }}><Icon.Plus size={11} /></button>
        </div>
      </div>
      <div className="mono" style={{ fontSize: 12 }}>${(it.price * it.qty).toFixed(2)}</div>
    </div>
  );
}

// =================================================================
// ORDER SUMMARY
// =================================================================
function OrderSummary({ items, setItems, shipping, discount, promo, setPromo, onApplyPromo, promoMsg }) {
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = subtotal + shipping - discount + tax;

  const setQty = (id, qty) => {
    setItems((arr) => arr.map((i) => i.id === id ? { ...i, qty: Math.max(0, qty) } : i).filter((i) => i.qty > 0));
  };

  return (
    <aside style={{
      background: 'var(--bg-alt)', padding: '32px 36px',
      position: 'sticky', top: 120, alignSelf: 'start',
      border: '1px solid var(--line)',
    }}>
      <div className="mono" style={{ marginBottom: 8, color: 'var(--clay)' }}>
        ✦ YOUR ORDER ({items.length})
      </div>

      <div style={{ borderTop: '1px solid var(--line)', marginTop: 20 }}>
        {items.map((it) => <CartRow key={it.id} it={it} onQty={setQty} />)}
      </div>

      {/* Promo */}
      <div style={{ marginTop: 24 }}>
        <div className="mono" style={{ marginBottom: 8, color: 'var(--ink-soft)', fontSize: 10 }}>PROMO CODE</div>
        <div style={{ display: 'flex', gap: 0 }}>
          <input
            value={promo}
            onChange={(e) => setPromo(e.target.value.toUpperCase())}
            placeholder="TINYPREDATOR"
            style={{
              flex: 1, padding: '12px 14px',
              background: 'var(--cream)', border: '1px solid var(--line)',
              fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em',
              outline: 'none',
            }}
          />
          <button onClick={onApplyPromo} className="mono" style={{
            background: 'var(--ink)', color: 'var(--cream)',
            padding: '12px 18px', fontSize: 10,
          }}>APPLY</button>
        </div>
        {promoMsg && <div className="mono" style={{
          marginTop: 8, fontSize: 10,
          color: promoMsg.startsWith('✓') ? 'var(--moss)' : 'var(--clay)',
        }}>{promoMsg}</div>}
      </div>

      {/* Totals */}
      <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <Row label="Subtotal" val={`$${subtotal.toFixed(2)}`} />
        <Row label="Shipping" val={shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`} />
        {discount > 0 && <Row label="Discount" val={`–$${discount.toFixed(2)}`} accent />}
        <Row label="Estimated tax" val={`$${tax.toFixed(2)}`} />
        <div style={{
          display: 'flex', justifyContent: 'space-between', marginTop: 20,
          paddingTop: 20, borderTop: '1px solid var(--line)',
          alignItems: 'baseline',
        }}>
          <span style={{ fontFamily: 'var(--serif)', fontSize: 28, fontStyle: 'italic' }}>Total</span>
          <span style={{ fontFamily: 'var(--serif)', fontSize: 32, letterSpacing: '-0.01em' }}>
            <span className="mono" style={{ fontSize: 11, marginRight: 6, opacity: 0.55 }}>USD</span>
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Aside aside */}
      <div style={{
        marginTop: 28, padding: '16px 18px',
        background: 'var(--cream)', border: '1px solid var(--line)',
        fontFamily: 'var(--serif-body)', fontStyle: 'italic', fontSize: 14,
        color: 'var(--ink-soft)', lineHeight: 1.4,
      }}>
        🐾 Ships in unbranded recycled cardboard. The cat will claim the box.
        You will get the bottle.
      </div>
    </aside>
  );
}

function Row({ label, val, accent }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', margin: '8px 0',
      fontFamily: 'var(--serif-body)', fontSize: 16,
      color: accent ? 'var(--clay)' : 'var(--ink-soft)',
    }}>
      <span>{label}</span>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 12 }}>{val}</span>
    </div>
  );
}

// =================================================================
// MAIN
// =================================================================
function Checkout() {
  const [items, setItems] = React.useState([
    { id: 'wash', name: 'The Wash', variant: '250ML · UNSCENTED', price: 26, qty: 2, img: PRODUCT_IMG },
  ]);

  // Form state
  const [contact, setContact] = React.useState({ email: '', subscribe: true });
  const [ship, setShip] = React.useState({
    first: '', last: '', address: '', apt: '', city: '', state: '', zip: '', country: 'United States',
  });
  const [shipMethod, setShipMethod] = React.useState('standard');
  const [payMethod, setPayMethod] = React.useState('card');
  const [card, setCard] = React.useState({ num: '', exp: '', cvc: '', name: '' });
  const [billingSame, setBillingSame] = React.useState(true);
  const [gift, setGift] = React.useState({ enabled: false, message: '' });
  const [promo, setPromo] = React.useState('');
  const [promoMsg, setPromoMsg] = React.useState('');
  const [discount, setDiscount] = React.useState(0);
  const [placing, setPlacing] = React.useState(false);
  const [placed, setPlaced] = React.useState(false);

  const shippingCost = shipMethod === 'express' ? 12 : shipMethod === 'standard' ? 0 : 0;

  const applyPromo = () => {
    const code = promo.trim().toUpperCase();
    if (!code) return;
    if (code === 'TINYPREDATOR') { setDiscount(5.20); setPromoMsg('✓ 20% off. Cat unimpressed.'); }
    else if (code === 'FERAL') { setDiscount(10); setPromoMsg('✓ $10 off — go feral.'); }
    else { setDiscount(0); setPromoMsg('× Code rejected. By the cat.'); }
  };

  const valid = contact.email.includes('@') && ship.first && ship.address && ship.city && ship.zip && card.num.length >= 13;

  const placeOrder = () => {
    if (!valid) return;
    setPlacing(true);
    setTimeout(() => { setPlacing(false); setPlaced(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }, 1600);
  };

  if (placed) return <Confirmation items={items} email={contact.email} />;

  return (
    <>
      <CheckoutHeader step={3} />
      <main style={{
        maxWidth: 1280, margin: '0 auto', padding: '40px 32px 120px',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64,
      }} className="checkout-grid">
        {/* LEFT: form */}
        <div>
          {/* Express */}
          <SectionTitle n="EXPRESS" title="Skip the typing." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            <ExpressBtn label="Shop Pay" />
            <ExpressBtn label="Apple Pay" />
            <ExpressBtn label="PayPal" />
          </div>
          <Divider />

          {/* Contact */}
          <SectionTitle n="01" title="Contact" action="Sign in" onAction={() => {}} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Field label="Email" placeholder="you@somewhere.com"
              value={contact.email} onChange={(v) => setContact({ ...contact, email: v })}
              autoComplete="email" />
            <label style={{
              gridColumn: 'span 2', display: 'flex', gap: 12, alignItems: 'flex-start',
              cursor: 'pointer', fontSize: 14, fontFamily: 'var(--serif-body)',
            }}>
              <input type="checkbox" checked={contact.subscribe}
                onChange={(e) => setContact({ ...contact, subscribe: e.target.checked })}
                style={{ marginTop: 4 }} />
              <span>Email me when the cat misbehaves and the wash restocks. <em style={{ color: 'var(--ink-soft)' }}>(2 emails / year.)</em></span>
            </label>
          </div>

          {/* Shipping address */}
          <SectionTitle n="02" title="Where it goes" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Field half label="First name" placeholder="Mango"
              value={ship.first} onChange={(v) => setShip({ ...ship, first: v })} autoComplete="given-name" />
            <Field half label="Last name" placeholder="Persimmon"
              value={ship.last} onChange={(v) => setShip({ ...ship, last: v })} autoComplete="family-name" />
            <Field label="Address" placeholder="221B Catnip Lane"
              value={ship.address} onChange={(v) => setShip({ ...ship, address: v })} autoComplete="address-line1" />
            <Field label="Apt / suite / etc." placeholder="(optional — the cat's office?)"
              value={ship.apt} onChange={(v) => setShip({ ...ship, apt: v })} autoComplete="address-line2" />
            <Field half label="City" placeholder="Portland"
              value={ship.city} onChange={(v) => setShip({ ...ship, city: v })} autoComplete="address-level2" />
            <Field half label="State" placeholder="OR"
              value={ship.state} onChange={(v) => setShip({ ...ship, state: v })} autoComplete="address-level1" />
            <Field half label="ZIP" placeholder="97214"
              value={ship.zip} onChange={(v) => setShip({ ...ship, zip: v })} autoComplete="postal-code" />
            <label style={{ display: 'block' }}>
              <div className="mono" style={{ fontSize: 10, marginBottom: 6, color: 'var(--ink-soft)' }}>COUNTRY</div>
              <select value={ship.country} onChange={(e) => setShip({ ...ship, country: e.target.value })}
                style={{
                  width: '100%', padding: '14px 16px', background: 'var(--cream)',
                  border: '1px solid var(--line)', fontFamily: 'var(--serif-body)', fontSize: 17,
                  outline: 'none', appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'><path d=\'M1 1l5 5 5-5\' stroke=\'%231F1B14\' stroke-width=\'1.5\' fill=\'none\' stroke-linecap=\'round\'/></svg>")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 18px center',
                }}>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Japan</option>
              </select>
            </label>
          </div>

          {/* Shipping method */}
          <SectionTitle n="03" title="How it gets there" />
          <div style={{ display: 'grid', gap: 10 }}>
            <Radio
              checked={shipMethod === 'standard'} onChange={() => setShipMethod('standard')}
              title="Standard" sub="3–5 business days. The cat will not notice the wait."
              right="Free" badge="MOST CHOSEN"
            />
            <Radio
              checked={shipMethod === 'express'} onChange={() => setShipMethod('express')}
              title="Express" sub="2 days. For emergencies. (Define emergency.)"
              right="$12.00"
            />
            <Radio
              checked={shipMethod === 'carrier'} onChange={() => setShipMethod('carrier')}
              title="Hand-delivered by a falconer" sub="Currently unavailable in your region."
              right="—"
            />
          </div>

          {/* Gift */}
          <div style={{ marginTop: 24 }}>
            <label style={{
              display: 'flex', gap: 12, alignItems: 'center', cursor: 'pointer',
              fontFamily: 'var(--serif-body)', fontSize: 16, fontStyle: 'italic',
            }}>
              <input type="checkbox" checked={gift.enabled}
                onChange={(e) => setGift({ ...gift, enabled: e.target.checked })} />
              <span>This is a gift. Add a note.</span>
            </label>
            {gift.enabled && (
              <textarea
                value={gift.message}
                onChange={(e) => setGift({ ...gift, message: e.target.value })}
                placeholder="Your cat smells. Use this. Love, me."
                rows={3}
                style={{
                  width: '100%', marginTop: 12, padding: '14px 16px',
                  background: 'var(--cream)', border: '1px solid var(--line)',
                  fontFamily: 'var(--serif-body)', fontStyle: 'italic', fontSize: 16,
                  resize: 'vertical', outline: 'none',
                }}
              />
            )}
          </div>

          {/* Payment */}
          <SectionTitle n="04" title="How you pay" />
          <div className="mono" style={{ marginBottom: 12, color: 'var(--ink-soft)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="12" height="14" viewBox="0 0 14 16" fill="none">
              <rect x="2" y="6" width="10" height="8" stroke="currentColor" strokeWidth="1.4" />
              <path d="M5 6V4a2 2 0 0 1 4 0v2" stroke="currentColor" strokeWidth="1.4" fill="none" />
            </svg>
            ENCRYPTED · NOT STORED · NOT SOLD
          </div>
          <div style={{ display: 'grid', gap: 0, border: '1px solid var(--line)' }}>
            <PayOption
              checked={payMethod === 'card'} onChange={() => setPayMethod('card')}
              title="Credit / Debit card"
              brands={['VISA', 'MC', 'AMEX', 'DISC']}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, padding: '4px 0 8px' }}>
                <div style={{ gridColumn: 'span 3' }}>
                  <Field label="Card number" placeholder="4242 4242 4242 4242"
                    value={card.num} onChange={(v) => setCard({ ...card, num: v.replace(/[^\d ]/g, '').slice(0, 19) })}
                    autoComplete="cc-number" />
                </div>
                <Field half label="Expiry" placeholder="MM / YY"
                  value={card.exp} onChange={(v) => setCard({ ...card, exp: v.slice(0, 7) })} autoComplete="cc-exp" />
                <Field half label="CVC" placeholder="•••"
                  value={card.cvc} onChange={(v) => setCard({ ...card, cvc: v.replace(/\D/g, '').slice(0, 4) })} autoComplete="cc-csc" />
                <Field half label="Name on card" placeholder="As it appears on the cat's allowance card"
                  value={card.name} onChange={(v) => setCard({ ...card, name: v })} autoComplete="cc-name" />
              </div>
            </PayOption>
            <PayOption
              checked={payMethod === 'klarna'} onChange={() => setPayMethod('klarna')}
              title="Klarna" sub="4 interest-free payments. Cat-approved." brands={['KLARNA']}
            />
            <PayOption
              checked={payMethod === 'paypal'} onChange={() => setPayMethod('paypal')}
              title="PayPal" brands={['PAYPAL']} last
            />
          </div>

          {/* Billing toggle */}
          <label style={{
            display: 'flex', gap: 12, alignItems: 'center', marginTop: 16, cursor: 'pointer',
            fontFamily: 'var(--serif-body)', fontSize: 16,
          }}>
            <input type="checkbox" checked={billingSame} onChange={(e) => setBillingSame(e.target.checked)} />
            <span>Billing address same as shipping.</span>
          </label>

          {/* Place order */}
          <button
            onClick={placeOrder}
            disabled={!valid || placing}
            style={{
              marginTop: 32, width: '100%',
              background: valid ? 'var(--ink)' : 'var(--bg-alt)',
              color: valid ? 'var(--cream)' : 'var(--ink-soft)',
              padding: '20px', borderRadius: 999,
              fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: '0.12em',
              cursor: valid && !placing ? 'pointer' : 'not-allowed',
              display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12,
              transition: 'background .2s',
            }}>
            {placing ? (
              <>
                <span className="spinner" /> CONSULTING THE CAT…
              </>
            ) : (
              <>PLACE ORDER &nbsp;·&nbsp; <Icon.Arrow size={13} /></>
            )}
          </button>

          <p style={{
            fontFamily: 'var(--serif-body)', fontStyle: 'italic',
            fontSize: 14, color: 'var(--ink-soft)', marginTop: 20, textAlign: 'center',
            textWrap: 'pretty',
          }}>
            By placing this order, you agree to our <a href="#" style={{ textDecoration: 'underline' }}>Terms</a> and confirm
            that no cat was consulted about the purchase, because that would have ended badly.
          </p>
        </div>

        {/* RIGHT */}
        <OrderSummary
          items={items} setItems={setItems}
          shipping={shippingCost} discount={discount}
          promo={promo} setPromo={setPromo} onApplyPromo={applyPromo} promoMsg={promoMsg}
        />
      </main>

      <CheckoutFooter />

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner {
          width: 14px; height: 14px; border-radius: 999px;
          border: 2px solid currentColor; border-top-color: transparent;
          animation: spin 0.8s linear infinite; display: inline-block;
        }
        @media (max-width: 980px) {
          .checkout-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </>
  );
}

function ExpressBtn({ label }) {
  const bg = {
    'Shop Pay': '#5A31F4', 'Apple Pay': '#000', 'PayPal': '#FFC439',
  }[label];
  const col = label === 'PayPal' ? '#003087' : '#fff';
  return (
    <button style={{
      padding: '14px', background: bg, color: col,
      fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em',
      borderRadius: 6, transition: 'transform .15s, opacity .15s',
    }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      {label.toUpperCase()}
    </button>
  );
}

function PayOption({ checked, onChange, title, sub, brands, children, last }) {
  return (
    <div style={{
      padding: '18px 20px',
      borderBottom: last ? 'none' : '1px solid var(--line)',
      background: checked ? 'var(--cream)' : 'transparent',
      transition: 'background .2s',
    }}>
      <label onClick={onChange} style={{
        display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 14,
        alignItems: 'center', cursor: 'pointer',
      }}>
        <div style={{
          width: 18, height: 18, borderRadius: 999,
          border: `1.5px solid ${checked ? 'var(--ink)' : 'var(--line)'}`,
          display: 'grid', placeItems: 'center',
        }}>
          {checked && <div style={{ width: 9, height: 9, borderRadius: 999, background: 'var(--ink)' }} />}
        </div>
        <div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 20, lineHeight: 1.1 }}>{title}</div>
          {sub && <div style={{ fontFamily: 'var(--serif-body)', fontStyle: 'italic', fontSize: 13, color: 'var(--ink-soft)', marginTop: 2 }}>{sub}</div>}
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {brands.map((b) => (
            <span key={b} className="mono" style={{
              padding: '4px 7px', fontSize: 9, background: 'var(--bg)',
              border: '1px solid var(--line)',
            }}>{b}</span>
          ))}
        </div>
      </label>
      {checked && children && <div style={{ marginTop: 16 }}>{children}</div>}
    </div>
  );
}

function Divider() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 16, margin: '32px 0 8px',
    }}>
      <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
      <span className="mono" style={{ color: 'var(--ink-soft)', fontSize: 10 }}>OR — TYPE IT OUT</span>
      <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
    </div>
  );
}

// =================================================================
// FOOTER
// =================================================================
function CheckoutFooter() {
  return (
    <footer style={{
      borderTop: '1px solid var(--line)', padding: '24px 0',
      background: 'var(--bg)',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 32px',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
        fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-soft)',
      }}>
        <div>© 2026 MOREFUR CO. — PORTLAND, OR</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="#">REFUNDS</a>
          <a href="#">SHIPPING</a>
          <a href="#">CONTACT</a>
          <a href="#">PRIVACY</a>
        </div>
        <div style={{ fontStyle: 'italic', fontFamily: 'var(--serif-body)', textTransform: 'none', letterSpacing: 0, fontSize: 13 }}>
          Smell nothing. Feel clean.
        </div>
      </div>
    </footer>
  );
}

// =================================================================
// CONFIRMATION
// =================================================================
function Confirmation({ items, email }) {
  const orderNum = React.useMemo(() => 'MFR-' + Math.floor(100000 + Math.random() * 900000), []);
  return (
    <>
      <CheckoutHeader step={3} />
      <main style={{
        maxWidth: 760, margin: '0 auto', padding: '80px 32px 120px', textAlign: 'center',
      }}>
        <div className="mono" style={{ color: 'var(--clay)', marginBottom: 24 }}>✦ ORDER {orderNum} ✦</div>
        <h1 style={{
          fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(56px, 8vw, 96px)',
          lineHeight: 0.95, letterSpacing: '-0.025em', marginBottom: 32,
        }}>
          The cat<br /><em>has been informed.</em>
        </h1>
        <p style={{
          fontFamily: 'var(--serif-body)', fontSize: 20, lineHeight: 1.5,
          color: 'var(--ink-soft)', maxWidth: 480, margin: '0 auto 48px', textWrap: 'pretty',
        }}>
          Confirmation sent to <strong style={{ color: 'var(--ink)' }}>{email}</strong>. Ships in 1–2 days.
          Track it from your inbox. The cat is unaware of any of this.
        </p>

        <div style={{
          background: 'var(--cream)', border: '1px solid var(--line)',
          padding: '32px', display: 'grid', gap: 12, textAlign: 'left',
          marginBottom: 40,
        }}>
          {items.map((it) => (
            <div key={it.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 20 }}>{it.name} <span className="mono" style={{ fontSize: 10, color: 'var(--ink-soft)' }}>×{it.qty}</span></span>
              <span className="mono" style={{ fontSize: 12 }}>${(it.price * it.qty).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <a href="index.html" className="mono" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'var(--ink)', color: 'var(--cream)',
          padding: '16px 28px', borderRadius: 999, fontSize: 11,
        }}>
          BACK TO MOREFUR <Icon.Arrow size={12} />
        </a>
      </main>
      <CheckoutFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<Checkout />);
