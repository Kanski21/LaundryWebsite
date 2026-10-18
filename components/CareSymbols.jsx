// Laundry care symbols (after ISO 3758), drawn as simple line icons.
// Decorative by default: the text next to each symbol carries the meaning.

function Svg({ children, className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      {children}
    </svg>
  )
}

export function WashSymbol(props) {
  return (
    <Svg {...props}>
      <path d="M3 8.5 5.4 19h13.2L21 8.5" />
      <path d="M3 8.5c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0 3-1.6 4.5 0 3 1.6 4.5 0" />
      <text x="12" y="16.6" textAnchor="middle" fontSize="6" fontFamily="system-ui, sans-serif" fill="currentColor" stroke="none">60</text>
    </Svg>
  )
}

export function TumbleDrySymbol(props) {
  return (
    <Svg {...props}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <circle cx="12" cy="12" r="5" />
    </Svg>
  )
}

export function IronSymbol(props) {
  return (
    <Svg {...props}>
      <path d="M3 17.5h18V13a3.5 3.5 0 0 0-3.5-3.5H10c-2.6 0-4.8 1.6-5.7 4L3 17.5Z" />
      <path d="M10.5 9.5c0-1.9 1.3-3 3-3h4" />
      <circle cx="11" cy="14" r=".6" fill="currentColor" />
      <circle cx="15" cy="14" r=".6" fill="currentColor" />
    </Svg>
  )
}

export function DryCleanSymbol(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8" />
      <text x="12" y="15.4" textAnchor="middle" fontSize="9" fontFamily="system-ui, sans-serif" fill="currentColor" stroke="none">P</text>
    </Svg>
  )
}

export function PackSymbol(props) {
  return (
    <Svg {...props}>
      <path d="M4 8.5 12 4.5l8 4v8L12 20.5l-8-4v-8Z" />
      <path d="M4 8.5 12 12.5l8-4M12 12.5v8" />
    </Svg>
  )
}

export function DoorSymbol(props) {
  return (
    <Svg {...props}>
      <path d="M2.5 16.5V7.5h11v9" />
      <path d="M13.5 10.5h4l3 3.2v2.8h-7" />
      <circle cx="6.5" cy="17" r="1.8" />
      <circle cx="17" cy="17" r="1.8" />
    </Svg>
  )
}
