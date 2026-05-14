// Cart drawer
function CartDrawer({ open, onClose, items, setItems, brand }) {
  // Lock body scroll when open
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const freeShip = 40;
  const remaining = Math.max(0, freeShip - subtotal);
  const pct = Math.min(100, (subtotal / freeShip) * 100);

  const setQty = (id, qty) => {
    setItems((arr) => arr
      .map((i) => i.id === id ? { ...i, qty: Math.max(0, qty) } : i)
      .filter((i) => i.qty > 0));
  };

  return (
    <>
      <div style={{
        position: 'fixed', inset: 0, background: 'rgba(31,27,20,0.5)',
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity .3s', zIndex: 60,
      }} onClick={onClose} />
      <aside style={{
        position: 'fixed', top: 0, right: 0, height: '100vh',
        width: 'min(440px, 100vw)', background: 'var(--cream)',
        zIndex: 70, transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform .4s cubic-bezier(.6,.05,.1,1)',
        display: 'flex', flexDirection: 'column',
        boxShadow: '-20px 0 60px rgba(0,0,0,0.15)',
      }}>
        {/* Header */}
        <div style={{
          padding: '24px 28px', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', borderBottom: '1px solid var(--line)',
        }}>
          <div className="mono" style={{ fontSize: 11 }}>YOUR BAG ({items.length})</div>
          <button onClick={onClose} aria-label="Close cart"><Icon.Close size={20} /></button>
        </div>

        {/* Free shipping bar */}
        <div style={{ padding: '16px 28px', borderBottom: '1px solid var(--line)' }}>
          <div className="mono" style={{ fontSize: 10, marginBottom: 8 }}>
            {remaining > 0
              ? `$${remaining.toFixed(0)} AWAY FROM FREE SHIPPING`
              : '✓ FREE SHIPPING UNLOCKED'}
          </div>
          <div style={{ height: 4, background: 'var(--bg-alt)', position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: 0, width: `${pct}%`,
              background: pct >= 100 ? 'var(--moss)' : 'var(--ink)',
              transition: 'width .4s',
            }} />
          </div>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 28px' }}>
          {items.length === 0 ? (
            <div style={{ padding: '60px 0', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 32, fontStyle: 'italic', marginBottom: 12 }}>
                Empty.
              </div>
              <div style={{ fontFamily: 'var(--serif-body)', fontStyle: 'italic', color: 'var(--ink-soft)' }}>
                The cat approves.
              </div>
            </div>
          ) : items.map((it) => (
            <div key={it.id} style={{
              display: 'grid', gridTemplateColumns: '80px 1fr auto',
              gap: 16, padding: '20px 0', borderBottom: '1px solid var(--line)',
            }}>
              <div style={{
                background: 'var(--bg-alt)', aspectRatio: '4/5',
                overflow: 'hidden',
              }}>
                <img src={it.img} alt={it.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, lineHeight: 1.1 }}>{it.name}</div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--ink-soft)', marginTop: 4 }}>{it.variant}</div>
                <div style={{
                  display: 'inline-flex', marginTop: 12,
                  border: '1px solid var(--ink)',
                }}>
                  <button onClick={() => setQty(it.id, it.qty - 1)} style={{ padding: '6px 10px' }}><Icon.Minus size={12} /></button>
                  <span className="mono" style={{ padding: '6px 12px', fontSize: 11, display: 'grid', placeItems: 'center' }}>{it.qty}</span>
                  <button onClick={() => setQty(it.id, it.qty + 1)} style={{ padding: '6px 10px' }}><Icon.Plus size={12} /></button>
                </div>
              </div>
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="mono" style={{ fontSize: 12 }}>${(it.price * it.qty).toFixed(0)}</div>
                <button onClick={() => setQty(it.id, 0)} style={{
                  fontFamily: 'var(--mono)', fontSize: 9, opacity: 0.55, textDecoration: 'underline',
                }}>REMOVE</button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '20px 28px', borderTop: '1px solid var(--line)' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontFamily: 'var(--serif)', fontSize: 24, marginBottom: 4,
            }}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="mono" style={{ fontSize: 9, opacity: 0.6, marginBottom: 16 }}>
              TAXES & SHIPPING CALCULATED AT CHECKOUT
            </div>
            <a href="checkout.html" className="btn-primary" style={{
              width: '100%', justifyContent: 'center', padding: '16px',
              textAlign: 'center', textDecoration: 'none',
            }}>CHECKOUT — ${subtotal.toFixed(2)}</a>
          </div>
        )}
      </aside>
    </>
  );
}

// Floating "Added to bag" toast
function AddedToast({ visible }) {
  return (
    <div style={{
      position: 'fixed', bottom: 24, left: '50%', transform: `translateX(-50%) translateY(${visible ? 0 : 20}px)`,
      background: 'var(--ink)', color: 'var(--cream)',
      padding: '14px 22px', fontFamily: 'var(--mono)', fontSize: 11,
      letterSpacing: '0.1em', zIndex: 80, opacity: visible ? 1 : 0,
      transition: 'opacity .3s, transform .3s', pointerEvents: 'none',
      borderRadius: 999, display: 'flex', alignItems: 'center', gap: 10,
    }}>
      ✓ ADDED TO BAG <span style={{ color: 'var(--clay)' }}>·</span> THE CAT IS NEUTRAL
    </div>
  );
}

window.CartDrawer = CartDrawer;
window.AddedToast = AddedToast;
