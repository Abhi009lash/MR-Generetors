import React from 'react';

interface GeneratorIllustrationProps {
  model: 'hero' | '82.5' | '500' | '125' | '250' | '57';
  className?: string;
}

export const GeneratorIllustration: React.FC<GeneratorIllustrationProps> = ({
  model,
  className = '',
}) => {
  const getAccentColor = () => {
    switch (model) {
      case '500':
        return '#D32F2F'; // Red heavy duty
      case '250':
        return '#0F3B8A'; // Navy deep
      case '125':
        return '#0284C7'; // Cyan/Blue
      case '57':
        return '#059669'; // Green efficient
      default:
        return '#D97706'; // Amber Greaves
    }
  };

  const accent = getAccentColor();

  return (
    <div
      className={`w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/90 select-none ${className}`}
    >
      <svg
        viewBox="0 0 400 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-60 object-contain p-2 drop-shadow-md"
      >
        {/* Base Skid / Heavy Channel Steel */}
        <rect x="35" y="195" width="330" height="20" rx="3" fill="#1E293B" />
        <rect x="60" y="200" width="35" height="10" rx="2" fill="#0F172A" />
        <rect x="305" y="200" width="35" height="10" rx="2" fill="#0F172A" />

        {/* Acoustic Soundproof Enclosure Body */}
        <rect
          x="45"
          y="65"
          width="310"
          height="132"
          rx="6"
          fill="#F1F5F9"
          stroke="#CBD5E1"
          strokeWidth="3"
        />

        {/* Roof Cap with rain runoff */}
        <path
          d="M40 67 L65 52 L335 52 L360 67 Z"
          fill="#E2E8F0"
          stroke="#94A3B8"
          strokeWidth="2"
        />

        {/* Silencer / Exhaust Pipe */}
        <rect x="85" y="32" width="22" height="22" rx="3" fill="#334155" />
        <rect x="80" y="26" width="32" height="7" rx="2" fill="#1E293B" />
        <circle cx="96" cy="29" r="2.5" fill="#D97706" />

        {/* Lifting Lugs */}
        <rect x="75" y="47" width="16" height="8" rx="2" fill="#475569" />
        <rect x="309" y="47" width="16" height="8" rx="2" fill="#475569" />

        {/* Brand Accent Top Stripe */}
        <rect x="47" y="67" width="306" height="12" fill={accent} />

        {/* Access Doors */}
        <rect
          x="60"
          y="86"
          width="80"
          height="102"
          rx="3"
          fill="#FFFFFF"
          stroke="#94A3B8"
          strokeWidth="1.5"
        />
        <rect
          x="150"
          y="86"
          width="100"
          height="102"
          rx="3"
          fill="#FFFFFF"
          stroke="#94A3B8"
          strokeWidth="1.5"
        />
        <rect
          x="260"
          y="86"
          width="80"
          height="102"
          rx="3"
          fill="#FFFFFF"
          stroke="#94A3B8"
          strokeWidth="1.5"
        />

        {/* Heavy Duty Door Latches */}
        <rect x="130" y="130" width="6" height="14" rx="1.5" fill="#334155" />
        <rect x="240" y="130" width="6" height="14" rx="1.5" fill="#334155" />
        <rect x="330" y="130" width="6" height="14" rx="1.5" fill="#334155" />

        {/* Acoustic Ventilation Louvers */}
        <g stroke="#94A3B8" strokeWidth="2" strokeLinecap="round">
          <line x1="70" y1="102" x2="130" y2="102" />
          <line x1="70" y1="112" x2="130" y2="112" />
          <line x1="70" y1="122" x2="130" y2="122" />
          <line x1="70" y1="132" x2="130" y2="132" />
          <line x1="70" y1="142" x2="130" y2="142" />
          <line x1="70" y1="152" x2="130" y2="152" />
          <line x1="70" y1="162" x2="130" y2="162" />
          <line x1="70" y1="172" x2="130" y2="172" />
        </g>

        {/* Digital Microprocessor Control Panel */}
        <rect
          x="165"
          y="98"
          width="70"
          height="45"
          rx="2"
          fill="#0F172A"
          stroke="#334155"
          strokeWidth="2"
        />
        {/* LCD Screen Glow */}
        <rect x="172" y="104" width="40" height="20" rx="1" fill="#0284C7" />
        <line x1="175" y1="110" x2="205" y2="110" stroke="#E0F2FE" strokeWidth="1.5" />
        <line x1="175" y1="115" x2="198" y2="115" stroke="#E0F2FE" strokeWidth="1.5" />
        <line x1="175" y1="120" x2="202" y2="120" stroke="#38BDF8" strokeWidth="1.5" />

        {/* Emergency Stop Pushbutton */}
        <circle cx="223" cy="114" r="5" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
        <rect x="172" y="130" width="56" height="6" rx="1" fill="#1E293B" />

        {/* Secondary Ventilation Louvers */}
        <g stroke="#94A3B8" strokeWidth="2" strokeLinecap="round">
          <line x1="270" y1="112" x2="330" y2="112" />
          <line x1="270" y1="124" x2="330" y2="124" />
          <line x1="270" y1="136" x2="330" y2="136" />
          <line x1="270" y1="148" x2="330" y2="148" />
          <line x1="270" y1="160" x2="330" y2="160" />
        </g>

        {/* Greaves Power Badge Brand Plate */}
        <rect x="165" y="155" width="70" height="24" rx="2" fill="#00163D" />
        <text
          x="200"
          y="166"
          fill="#FFFFFF"
          fontSize="7"
          fontFamily="Rubik, sans-serif"
          fontWeight="bold"
          textAnchor="middle"
        >
          GREAVES POWER
        </text>
        <text
          x="200"
          y="174"
          fill="#F59E0B"
          fontSize="5.5"
          fontFamily="Karla, sans-serif"
          fontWeight="bold"
          textAnchor="middle"
        >
          CPCB IV+ COMPLIANT
        </text>
      </svg>
    </div>
  );
};
