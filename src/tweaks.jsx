// Tweaks panel content
function MoreFurTweaks({ tweaks, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Brand">
        <TweakText label="Brand name" value={tweaks.brand} onChange={(v) => setTweak('brand', v)} />
        <TweakText label="Hero line 1" value={tweaks.headline1} onChange={(v) => setTweak('headline1', v)} />
        <TweakText label="Hero line 2 (italic)" value={tweaks.headline2} onChange={(v) => setTweak('headline2', v)} />
        <TweakText label="Hero subline" value={tweaks.sub} onChange={(v) => setTweak('sub', v)} multiline />
      </TweakSection>

      <TweakSection title="Color palette">
        <TweakRadio
          label="Theme"
          value={tweaks.theme}
          onChange={(v) => setTweak('theme', v)}
          options={[
            { value: 'feral', label: 'Feral' },
            { value: 'cool', label: 'Clinical' },
            { value: 'wild', label: 'Wild' },
          ]}
        />
        <TweakColor label="Background" value={tweaks.bg} onChange={(v) => setTweak('bg', v)} />
        <TweakColor label="Ink" value={tweaks.ink} onChange={(v) => setTweak('ink', v)} />
        <TweakColor label="Accent" value={tweaks.clay} onChange={(v) => setTweak('clay', v)} />
        <TweakColor label="Deep" value={tweaks.mossDeep} onChange={(v) => setTweak('mossDeep', v)} />
      </TweakSection>

      <TweakSection title="Typography">
        <TweakSelect
          label="Headline serif"
          value={tweaks.serif}
          onChange={(v) => setTweak('serif', v)}
          options={[
            { value: "'Instrument Serif', serif", label: 'Instrument Serif' },
            { value: "'PT Serif', serif", label: 'PT Serif' },
            { value: "'Newsreader', serif", label: 'Newsreader' },
            { value: 'Georgia, serif', label: 'Georgia' },
          ]}
        />
        <TweakSelect
          label="Body sans"
          value={tweaks.sans}
          onChange={(v) => setTweak('sans', v)}
          options={[
            { value: "'DM Sans', sans-serif", label: 'DM Sans' },
            { value: "'Space Grotesk', sans-serif", label: 'Space Grotesk' },
            { value: "system-ui, sans-serif", label: 'System' },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

window.MoreFurTweaks = MoreFurTweaks;

// Theme presets
window.THEME_PRESETS = {
  feral: { bg: '#ECE6DA', ink: '#1F1B14', clay: '#A0512E', mossDeep: '#2E3826' },
  cool:  { bg: '#F1EFE9', ink: '#0F0F12', clay: '#5B6B7A', mossDeep: '#1B2530' },
  wild:  { bg: '#E8D9C2', ink: '#1A0D08', clay: '#B8431F', mossDeep: '#3D1F12' },
};
