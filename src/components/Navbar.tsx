import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LANGS = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'hu', label: 'HU' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#products', label: t('nav.products') },
    { href: '#story', label: t('nav.story') },
    { href: '#why', label: t('nav.why') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-unicum-dark/95 backdrop-blur-sm shadow-lg shadow-black/30' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-display text-gold font-black text-xl tracking-[0.2em]">
          UNICUM
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              className="font-ui text-xs font-medium tracking-widest uppercase text-unicum-cream/70 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Language switcher + mobile menu */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {LANGS.map((lang, i) => (
              <span key={lang.code} className="flex items-center">
                <button
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`font-ui text-xs font-medium tracking-wider transition-colors px-1 ${
                    i18n.language === lang.code
                      ? 'text-gold'
                      : 'text-unicum-cream/40 hover:text-unicum-cream/70'
                  }`}
                >
                  {lang.label}
                </button>
                {i < LANGS.length - 1 && <span className="text-unicum-cream/20 text-xs">·</span>}
              </span>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gold ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-unicum-dark/98 border-t border-gold/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-ui text-xs font-medium tracking-widest uppercase text-unicum-cream/70 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
