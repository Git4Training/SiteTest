// Main app
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "brand": "MoreFur",
  "headline1": "Smell",
  "headline2": "nothing.",
  "sub": "Cat shampoo for the rare moments your tiny predator actually needs one. No fragrance. No fluff. No opinions.",
  "theme": "feral",
  "bg": "#ECE6DA",
  "ink": "#1F1B14",
  "clay": "#A0512E",
  "mossDeep": "#2E3826",
  "serif": "'Instrument Serif', serif",
  "sans": "'DM Sans', sans-serif"
}/*EDITMODE-END*/;

// Real Unsplash cat photos
const HERO_IMG = 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=1200&q=80';
const PRODUCT_IMG = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=1200&q=80';

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [toast, setToast] = React.useState(false);

  // Apply theme preset when changed
  React.useEffect(() => {
    const preset = window.THEME_PRESETS[tweaks.theme];
    if (preset) {
      setTweak({
        bg: preset.bg, ink: preset.ink,
        clay: preset.clay, mossDeep: preset.mossDeep,
      });
    }
    // eslint-disable-next-line
  }, [tweaks.theme]);

  // Inject CSS variables based on tweaks
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--bg', tweaks.bg);
    r.style.setProperty('--ink', tweaks.ink);
    r.style.setProperty('--clay', tweaks.clay);
    r.style.setProperty('--moss-deep', tweaks.mossDeep);
    r.style.setProperty('--serif', tweaks.serif);
    r.style.setProperty('--sans', tweaks.sans);
    // derived
    const bgAlt = shadeHex(tweaks.bg, -8);
    const cream = shadeHex(tweaks.bg, 6);
    const inkSoft = shadeHex(tweaks.ink, 30);
    r.style.setProperty('--bg-alt', bgAlt);
    r.style.setProperty('--cream', cream);
    r.style.setProperty('--ink-soft', inkSoft);
    r.style.setProperty('--line', tweaks.ink + '2e');
  }, [tweaks]);

  const addToBag = () => {
    setItems((arr) => {
      const existing = arr.find((i) => i.id === 'wash');
      if (existing) return arr.map((i) => i.id === 'wash' ? { ...i, qty: i.qty + 1 } : i);
      return [...arr, {
        id: 'wash', name: 'The Wash', variant: '250ML · UNSCENTED',
        price: 26, qty: 1, img: PRODUCT_IMG,
      }];
    });
    setToast(true);
    setTimeout(() => setToast(false), 1200);
    // Pop the cart drawer open so the user sees what just happened
    setTimeout(() => setCartOpen(true), 350);
  };

  const cartCount = items.reduce((s, i) => s + i.qty, 0);
  const headline = `${tweaks.headline1}\n${tweaks.headline2}`;

  return (
    <>
      <AnnouncementBar />
      <Nav brand={tweaks.brand} onCartOpen={() => setCartOpen(true)} cartCount={cartCount} />
      <Hero
        brand={tweaks.brand}
        headline={headline}
        sub={tweaks.sub}
        productImg={HERO_IMG}
      />
      <PressMarquee />
      <ProductFeature onAddToBag={addToBag} productImg={PRODUCT_IMG} />
      <ThreeReasons />
      <Punchline />
      <LifestyleGrid />
      <Newsletter />
      <Footer brand={tweaks.brand} />

      <CartDrawer
        open={cartOpen} onClose={() => setCartOpen(false)}
        items={items} setItems={setItems} brand={tweaks.brand}
      />
      <AddedToast visible={toast} />
      <MoreFurTweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

// Tiny hex shade utility
function shadeHex(hex, percent) {
  const h = hex.replace('#', '');
  const num = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  let r = (num >> 16) + Math.round(255 * percent / 100);
  let g = ((num >> 8) & 0xff) + Math.round(255 * percent / 100);
  let b = (num & 0xff) + Math.round(255 * percent / 100);
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
