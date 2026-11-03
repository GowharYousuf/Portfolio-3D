import { useCallback, useEffect, useRef, useState } from 'react';

// Original ambient electronic loop: soft pads, a pentatonic arpeggio and a subdued pulse.
function createSoundtrack() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) throw new Error('Web Audio unavailable');
  const context = new AudioContext();
  const master = context.createGain();
  master.gain.value = 0.18;
  master.connect(context.destination);
  const delay = context.createDelay(1);
  const feedback = context.createGain();
  const wet = context.createGain();
  delay.delayTime.value = 0.48; feedback.gain.value = 0.27; wet.gain.value = 0.22;
  delay.connect(feedback); feedback.connect(delay); delay.connect(wet); wet.connect(master);
  const note = (midi, time, duration, gain, type = 'sine', echo = false) => {
    const oscillator = context.createOscillator();
    const envelope = context.createGain();
    oscillator.type = type;
    oscillator.frequency.value = 440 * 2 ** ((midi - 69) / 12);
    envelope.gain.setValueAtTime(0, time);
    envelope.gain.linearRampToValueAtTime(gain, time + Math.min(0.08, duration / 4));
    envelope.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    oscillator.connect(envelope); envelope.connect(master);
    if (echo) envelope.connect(delay);
    oscillator.start(time); oscillator.stop(time + duration + 0.03);
    oscillator.onended = () => { oscillator.disconnect(); envelope.disconnect(); };
  };
  const chords = [[45, 52, 57, 60, 64], [41, 48, 53, 57, 60], [48, 55, 60, 64, 67], [43, 50, 55, 59, 62]];
  let step = 0, next = context.currentTime + 0.08;
  const beat = 60 / 94 / 2;
  const timer = setInterval(() => {
    if (context.state !== 'running') return;
    next = Math.max(next, context.currentTime + 0.01);
    while (next < context.currentTime + 0.2) {
      const chord = chords[Math.floor(step / 16) % chords.length];
      if (step % 16 === 0) chord.slice(1).forEach(n => note(n, next, beat * 17, 0.026, 'sine'));
      note(chord[[0, 2, 3, 4, 2, 1, 3, 2][step % 8]] + 12, next, beat * 2.4, 0.07, 'sine', true);
      if (step % 4 === 0) note(chord[0] - 12, next, beat * 2, 0.12, 'triangle');
      if (step % 8 === 0) {
        const kick = context.createOscillator(), amp = context.createGain();
        kick.frequency.setValueAtTime(110, next); kick.frequency.exponentialRampToValueAtTime(38, next + 0.18);
        amp.gain.setValueAtTime(0.18, next); amp.gain.exponentialRampToValueAtTime(0.0001, next + 0.26);
        kick.connect(amp); amp.connect(master); kick.start(next); kick.stop(next + 0.28);
        kick.onended = () => { kick.disconnect(); amp.disconnect(); };
      }
      step++; next += beat;
    }
  }, 80);
  const launch = (duration = 2.7) => {
    const time = context.currentTime + 0.02;
    const buffer = context.createBuffer(1, Math.ceil(context.sampleRate * duration), context.sampleRate);
    const samples = buffer.getChannelData(0);
    for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
    const noise = context.createBufferSource(), filter = context.createBiquadFilter(), amp = context.createGain();
    noise.buffer = buffer; filter.type = 'lowpass';
    filter.frequency.setValueAtTime(110, time);
    filter.frequency.exponentialRampToValueAtTime(1800, time + duration * 0.65);
    amp.gain.setValueAtTime(0.0001, time);
    amp.gain.exponentialRampToValueAtTime(0.65, time + duration * 0.3);
    amp.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    noise.connect(filter); filter.connect(amp); amp.connect(master);
    noise.start(time); noise.stop(time + duration);
    noise.onended = () => { noise.disconnect(); filter.disconnect(); amp.disconnect(); };
    note(33, time, duration, 0.12, 'triangle');
  };
  return { context, master, launch, dispose: () => { clearInterval(timer); context.close(); } };
}
export default function MusicPlayer() {
  const engine = useRef();
  const enabled = useRef(true);
  const volumeRef = useRef(18);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(18);
  const [error, setError] = useState('');
  const start = useCallback(() => {
    try {
      if (!engine.current) {
        engine.current = createSoundtrack();
        engine.current.master.gain.value = volumeRef.current / 100;
        engine.current.context.onstatechange = () => setPlaying(engine.current?.context.state === 'running');
      }
      setPlaying(engine.current.context.state === 'running');
      engine.current.context.resume().catch(() => setPlaying(false));
      setError('');
    } catch { setError('Audio is unavailable in this browser.'); setPlaying(false); }
  }, []);
  useEffect(() => {
    start();
    const enter = event => {
      enabled.current = event.detail.sound;
      if (enabled.current) start();
      else { engine.current?.context.suspend(); setPlaying(false); }
    };
    const visibility = () => {
      if (document.hidden) { engine.current?.context.suspend(); setPlaying(false); }
      else if (enabled.current) start();
    };
    const launch = event => {
      enabled.current = true;
      start();
      engine.current?.launch(event.detail?.reduced ? 0.45 : 2.7);
    };
    window.addEventListener('portfolio:launch', launch);
    window.addEventListener('portfolio:enter', enter);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      window.removeEventListener('portfolio:enter', enter);
      window.removeEventListener('portfolio:launch', launch);
      document.removeEventListener('visibilitychange', visibility);
      if (engine.current) { engine.current.context.onstatechange = null; engine.current.dispose(); engine.current = null; }
    };
  }, [start]);
  const toggle = () => {
    if (playing) { enabled.current = false; engine.current?.context.suspend(); setPlaying(false); }
    else { enabled.current = true; start(); }
  };
  return <aside className="music-player" aria-label="Ambient music player">
    <button type="button" onClick={toggle} aria-label={playing ? 'Pause music' : 'Play music'} aria-pressed={playing}>
      <span className={playing ? 'equalizer is-playing' : 'equalizer'} aria-hidden="true"><i /><i /><i /><i /></span>
      <span>{playing ? 'Sound on' : 'Play music'}<small>NEON CIRCUIT · AMBIENT</small></span>
    </button>
    <label><span className="sr-only">Music volume</span><input aria-label="Music volume" type="range" min="0" max="50" value={volume} onChange={e => { const value = Number(e.target.value); volumeRef.current = value; setVolume(value); if(engine.current) engine.current.master.gain.setTargetAtTime(value / 100, engine.current.context.currentTime, 0.08); }} /></label>
    {error && <p role="status">{error}</p>}
  </aside>;
}
