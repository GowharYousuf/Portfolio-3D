export default function Spaceship({ className = '' }) {
  return <svg className={className} viewBox="0 0 120 200" fill="none" aria-hidden="true">
    <defs><linearGradient id="ship-metal" x1="25" y1="30" x2="96" y2="160" gradientUnits="userSpaceOnUse"><stop stopColor="#fff2ff"/><stop offset=".5" stopColor="#c8b9f4"/><stop offset="1" stopColor="#626594"/></linearGradient><linearGradient id="ship-glass" x2="1" y2="1"><stop stopColor="#b2ffff"/><stop offset=".5" stopColor="#58abc7"/><stop offset="1" stopColor="#584997"/></linearGradient><linearGradient id="ship-flame" x2="0" y2="1"><stop stopColor="#fff8da"/><stop offset=".4" stopColor="#9ae6ff"/><stop offset="1" stopColor="#ad78ff" stopOpacity="0"/></linearGradient></defs>
    <path className="ship-exhaust" d="M43 149Q40 178 60 198Q80 178 77 149Z" fill="url(#ship-flame)"/>
    <path d="M39 97L13 131L8 159L43 142ZM81 97L107 131L112 159L77 142Z" fill="#8376b5" stroke="#d7c2f7" strokeWidth="2"/>
    <path d="M60 6C37 27 31 63 33 100L42 149H78L87 100C89 63 83 27 60 6Z" fill="url(#ship-metal)" stroke="#e6d3ff" strokeWidth="2"/>
    <path d="M60 6Q44 22 38 48H82Q76 22 60 6Z" fill="#9072c3"/>
    <ellipse cx="60" cy="77" rx="18" ry="23" fill="#363c66" stroke="#ebd9ff" strokeWidth="4"/><ellipse cx="60" cy="77" rx="13" ry="18" fill="url(#ship-glass)"/>
    <path d="M50 110H70M47 121H73" stroke="#706f9c" strokeWidth="3" strokeLinecap="round"/>
    <path d="M60 126L54 151H66Z" fill="#8d73bb"/><path d="M43 149H77L74 157H46Z" fill="#4b456c"/>
    <path d="M40 55Q35 80 40 97" stroke="white" strokeOpacity=".65" strokeWidth="3" strokeLinecap="round"/>
  </svg>;
}
