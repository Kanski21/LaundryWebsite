import { useState } from 'react'
import { PHONE_DISPLAY, PHONE_HREF } from './contact'

const NAV = [
  { href: '#za-kogo', label: 'За кого' },
  { href: '#proces', label: 'Как работим' },
  { href: '#tekstili', label: 'Какво перем' },
  { href: '#zapitvane', label: 'Запитване' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-page items-center justify-between px-4 sm:px-6">
        <a href="#nachalo" className="flex items-center gap-3" aria-label="Clear & Shine – към началото">
          <img src="/logo.png" alt="" width="68" height="48" className="h-12 w-auto" />
        </a>

        <nav aria-label="Основна навигация" className="hidden md:block">
          <ul className="flex gap-8 text-[0.95rem]">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-ink-muted transition-colors duration-200 hover:text-ink">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={PHONE_HREF} className="btn-bluing hidden md:inline-flex">{PHONE_DISPLAY}</a>

        <button
          type="button"
          className="-mr-2 flex h-12 w-12 items-center justify-center rounded-full md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Затвори менюто' : 'Отвори менюто'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Мобилна навигация" className="border-t border-line bg-white px-4 pb-6 md:hidden">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)} className="flex min-h-[48px] items-center border-b border-line text-lg">{item.label}</a>
              </li>
            ))}
          </ul>
          <a href={PHONE_HREF} className="btn-bluing mt-5 w-full">Обадете се: {PHONE_DISPLAY}</a>
        </nav>
      )}
    </header>
  )
}
