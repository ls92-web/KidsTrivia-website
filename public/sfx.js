// ─────────────────────────────────────────────────────────────────────────────
//  SPACEKIDS · SOUND SYSTEM
//  Synthesised entirely with the Web Audio API — no external files required.
//  All sounds are designed to match the game's space-adventure visual identity:
//  epic, premium, family-friendly, NOT cartoon or arcade.
// ─────────────────────────────────────────────────────────────────────────────

window.SFX = (() => {
  'use strict';

  // ── Audio context (lazy init, respects autoplay policy) ───────────────────
  let _ctx = null;
  function ac() {
    if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (_ctx.state === 'suspended') _ctx.resume();
    return _ctx;
  }

  // ── Master output bus ──────────────────────────────────────────────────────
  function bus(vol) {
    const g = ac().createGain();
    g.gain.value = Math.max(0, Math.min(1, vol));
    g.connect(ac().destination);
    return g;
  }

  // ── Oscillator tone helper ─────────────────────────────────────────────────
  // delay   : seconds from now before note starts
  // dur     : total duration in seconds
  // peak    : peak gain (0–1)
  // opts    : { freqEnd, detune, attack }
  function tone(type, freq, delay, dur, peak, dest, opts = {}) {
    const c      = ac();
    const now    = c.currentTime + delay;
    const attack = opts.attack ?? 0.005;

    const o = c.createOscillator();
    const g = c.createGain();

    o.type = type;
    o.frequency.setValueAtTime(freq, now);
    if (opts.freqEnd) o.frequency.exponentialRampToValueAtTime(opts.freqEnd, now + dur);
    if (opts.detune)  o.detune.setValueAtTime(opts.detune, now);

    g.gain.setValueAtTime(0.0001, now);
    g.gain.linearRampToValueAtTime(peak, now + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    o.connect(g);
    g.connect(dest);
    o.start(now);
    o.stop(now + dur + 0.05);
  }

  // ── White-noise burst helper ───────────────────────────────────────────────
  // filterType : 'bandpass' | 'lowpass' | 'highpass'
  function noise(delay, dur, fStart, fEnd, filterType, Q, peakGain, dest) {
    const c    = ac();
    const now  = c.currentTime + delay;
    const rate = c.sampleRate;
    const buf  = c.createBuffer(1, Math.ceil(rate * dur), rate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;

    const src  = c.createBufferSource();
    src.buffer = buf;

    const filt = c.createBiquadFilter();
    filt.type  = filterType || 'bandpass';
    filt.frequency.setValueAtTime(fStart, now);
    if (fEnd) filt.frequency.exponentialRampToValueAtTime(fEnd, now + dur);
    filt.Q.value = Q ?? 2;

    const g = c.createGain();
    g.gain.setValueAtTime(peakGain, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    src.connect(filt);
    filt.connect(g);
    g.connect(dest);
    src.start(now);
    src.stop(now + dur + 0.05);
  }

  // ── Sparkle ping (clean sine chime) ───────────────────────────────────────
  function ping(freq, delay, dur, vol, dest) {
    tone('sine', freq, delay, dur, vol, dest, { attack: 0.001 });
  }


  // ══════════════════════════════════════════════════════════════════════════
  //  1 · BUTTON CLICK
  //  Futuristic UI activation — engaging advanced space technology.
  //  Feel: sharp, quick, precise. Like pressing a holographic console key.
  // ══════════════════════════════════════════════════════════════════════════
  function btnClick() {
    const out = bus(0.52);

    // Downward frequency sweep — "system engaged"
    tone('sine',   1300, 0, 0.09, 0.28, out, { freqEnd: 580, attack: 0.001 });
    // Metallic overtone tick — hard contact feel
    tone('square', 3400, 0, 0.03, 0.06, out, { attack: 0.001 });
    // Low body thud — confirms the press
    tone('sine',   110,  0, 0.07, 0.18, out, { attack: 0.002 });
  }


  // ══════════════════════════════════════════════════════════════════════════
  //  2 · CORRECT ANSWER
  //  Ascending pentatonic chime arpeggio — discovering a new planet,
  //  collecting stardust, completing a space mission.
  //  Feel: bright, uplifting, genuinely rewarding.
  // ══════════════════════════════════════════════════════════════════════════
  function correct() {
    const out = bus(0.62);

    // Pentatonic arpeggio: C5 E5 G5 B5 D6 — hopeful, victorious
    const notes = [523.25, 659.25, 783.99, 987.77, 1174.66];
    notes.forEach((f, i) => {
      const d = i * 0.09;
      // Primary chime (sine = clean bell quality)
      tone('sine',     f,      d, 0.55 - i * 0.04, 0.30, out, { attack: 0.002 });
      // Body/warmth overtone
      tone('triangle', f * 2,  d, 0.28 - i * 0.02, 0.07, out, { attack: 0.003 });
      // Subtle detuned shimmer (spatial width)
      tone('sine',     f * 2.01, d, 0.20, 0.04, out, { attack: 0.002 });
    });

    // Stardust sparkle shower — cosmic achievement
    [1046.50, 1318.51, 1567.98, 2093.00].forEach((f, i) => {
      ping(f, 0.42 + i * 0.065, 0.40, 0.12, out);
    });

    // Ultra-high terminal twinkle — the final star
    ping(4186.01, 0.70, 0.28, 0.06, out);
    ping(3520.00, 0.76, 0.22, 0.04, out);
  }


  // ══════════════════════════════════════════════════════════════════════════
  //  3 · WRONG ANSWER / PASS
  //  Soft descending spaceship signal — missed target, friendly notification.
  //  Feel: warm, non-punishing, like a gentle sensor alert.
  //  Never harsh, never discouraging.
  // ══════════════════════════════════════════════════════════════════════════
  function wrong() {
    const out = bus(0.44);

    // Detuned pair for electronic "wub-down" character
    tone('sine', 560, 0, 0.46, 0.26, out, { freqEnd: 210, attack: 0.008 });
    tone('sine', 548, 0, 0.44, 0.13, out, { freqEnd: 202, attack: 0.008, detune: -10 });

    // Very soft lowpass noise puff (exhaust miss sound)
    noise(0, 0.22, 450, 120, 'lowpass', 1.2, 0.07, out);
  }


  // ══════════════════════════════════════════════════════════════════════════
  //  4 · CATEGORY / MISSION SELECTION
  //  Cosmic portal activation — opening a gateway to a new planet or mission.
  //  Feel: magical, energetic, "you've unlocked something big".
  // ══════════════════════════════════════════════════════════════════════════
  function categorySelect() {
    const out = bus(0.52);

    // Rising filtered noise whoosh — portal energy building
    noise(0, 0.68, 180, 5000, 'bandpass', 1.8, 0.32, out);

    // Rising fundamental tone — mission unlocked
    tone('sine', 160, 0,    0.68, 0.24, out, { freqEnd: 740, attack: 0.012 });
    // Harmonic layer (octave up, slight delay) — adds depth
    tone('sine', 320, 0.06, 0.58, 0.11, out, { freqEnd: 1480, attack: 0.012 });

    // Portal shimmer cascade — destination revealed
    [1046.50, 1318.51, 1567.98, 2093.00, 2637.02].forEach((f, i) => {
      ping(f, 0.48 + i * 0.055, 0.42, 0.13 - i * 0.015, out);
    });
  }


  // ══════════════════════════════════════════════════════════════════════════
  //  5 · MISSION COMPLETE
  //  Epic space-victory fanfare — rocket boosters, star chimes,
  //  futuristic triumph. Multi-layered and celebratory.
  //  Feel: "We did it — mission accomplished, galaxy saved."
  // ══════════════════════════════════════════════════════════════════════════
  function missionComplete() {
    const out = bus(0.68);

    // ① Rocket launch rumble (low noise burst — boosters igniting)
    noise(0,    0.50, 80,  700,  'lowpass',  1.0, 0.22, out);
    noise(0.05, 0.40, 300, 2500, 'bandpass', 1.5, 0.14, out);

    // ② Heroic major-7th chord: C4 E4 G4 B4 C5 — triumph
    const chord = [261.63, 329.63, 392.00, 493.88, 523.25];
    chord.forEach((f, i) => {
      tone('sine',     f, 0.10, 1.25, 0.28 / (1 + i * 0.22), out, { attack: 0.04 });
      tone('triangle', f, 0.10, 1.05, 0.10 / (1 + i * 0.22), out, { attack: 0.04 });
    });

    // ③ Ascending melodic line — rocket climbing through the atmosphere
    [392.00, 493.88, 587.33, 698.46, 783.99, 1046.50].forEach((f, i) => {
      tone('sine', f, 0.18 + i * 0.10, 0.50, 0.17, out, { attack: 0.006 });
    });

    // ④ Star chime cascade — cosmic celebration
    [1046.50, 1318.51, 1567.98, 2093.00, 2637.02, 3135.96].forEach((f, i) => {
      ping(f, 0.38 + i * 0.09, 0.55, 0.14 - i * 0.012, out);
    });

    // ⑤ Terminal twin sparkle — mission star earned
    ping(4186.01, 1.12, 0.38, 0.07, out);
    ping(3520.00, 1.20, 0.32, 0.05, out);
    ping(4186.01, 1.28, 0.28, 0.04, out);
  }


  // ══════════════════════════════════════════════════════════════════════════
  //  6 · TEAM TURN CHANGE
  //  Control passes to another spaceship crew.
  //  Feel: brief, directional — like a comms handoff between two ships.
  // ══════════════════════════════════════════════════════════════════════════
  function teamSwitch() {
    const out = bus(0.46);

    // Arc sweep: pitch dips then rises — "switching pilots"
    tone('sine', 720, 0,    0.18, 0.22, out, { freqEnd: 310, attack: 0.005 });
    tone('sine', 330, 0.14, 0.22, 0.20, out, { freqEnd: 640, attack: 0.005 });

    // Short transition noise whoosh — ship changing course
    noise(0, 0.30, 900, 200, 'bandpass', 2, 0.11, out);

    // Arrival confirmation ping — new crew is online
    ping(880.00,  0.30, 0.28, 0.14, out);
    ping(1108.73, 0.36, 0.22, 0.08, out);
  }


  // ══════════════════════════════════════════════════════════════════════════
  //  7 · ROCKET BOOSTER LAUNCH
  //  The "Launch Mission!" button. Sounds like igniting rocket engines —
  //  a powerful low rumble that builds, surges, and blasts off.
  // ══════════════════════════════════════════════════════════════════════════
  function rocketBoost() {
    const out = bus(0.72);

    // ① Engine ignition rumble — low noise building from nothing
    noise(0,    0.30, 60,  300,  'lowpass',  1.0, 0.18, out);
    noise(0.05, 0.45, 100, 800,  'lowpass',  0.8, 0.25, out);

    // ② Thrust surge — mid noise burst as boosters fire
    noise(0.18, 0.55, 250, 3500, 'bandpass', 1.4, 0.32, out);

    // ③ Deep bass pulse — the "boom" of engines igniting
    tone('sine', 55,  0,    0.55, 0.45, out, { freqEnd: 35,  attack: 0.015 });
    tone('sine', 80,  0.05, 0.50, 0.30, out, { freqEnd: 50,  attack: 0.010 });

    // ④ Rising engine whine — pitch climbing as thrust increases
    tone('sawtooth', 120, 0.10, 0.65, 0.12, out, { freqEnd: 480, attack: 0.02 });
    tone('sawtooth', 124, 0.12, 0.62, 0.06, out, { freqEnd: 490, attack: 0.02, detune: 12 });

    // ⑤ High-frequency exhaust hiss — air blast on liftoff
    noise(0.35, 0.45, 3000, 8000, 'highpass', 1.2, 0.14, out);

    // ⑥ Blast-off sparkle — light trail as the rocket clears the pad
    [1046.50, 1318.51, 2093.00].forEach((f, i) => {
      ping(f, 0.55 + i * 0.06, 0.30, 0.08, out);
    });
  }


  // ══════════════════════════════════════════════════════════════════════════
  //  PUBLIC API
  // ══════════════════════════════════════════════════════════════════════════
  return { btnClick, correct, wrong, categorySelect, missionComplete, teamSwitch, rocketBoost };
})();


// ── Global button click sound (capture phase — fires before React handlers) ──
document.addEventListener('click', function (e) {
  const btn = e.target.closest('button');
  if (!btn || !window.SFX) return;
  // Buttons with data-sfx="skip" handle their own sound
  if (btn.dataset.sfx === 'skip') return;
  window.SFX.btnClick();
}, true);
