import { useTranslation } from 'react-i18next'

const BOTTLE_IMGS = [
  { src: 'https://zwackexport.hu/wp-content/uploads/2024/01/UNICUM-Szilva.jpg', alt: 'Szilva' },
  { src: 'https://zwackexport.hu/wp-content/uploads/2024/01/Unicum-Barista_1.jpg', alt: 'Barista' },
  { src: 'https://zwackexport.hu/wp-content/uploads/2024/01/Unicum.jpg', alt: 'Original', center: true },
  { src: 'https://zwackexport.hu/wp-content/uploads/2026/04/Kep2.png', alt: 'Orange' },
  { src: 'https://zwackexport.hu/wp-content/uploads/2024/01/Riserva.jpg', alt: 'Riserva' },
]

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen bg-unicum-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,#3A2800_0%,#1A1000_40%,#0A0800_100%)]" />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] gold-line" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16">
        {/* Eyebrow */}
        <p className="font-ui text-[10px] font-medium tracking-[0.35em] uppercase text-gold mb-8 animate-fade-in">
          {t('hero.eyebrow')}
        </p>

        {/* Bottles */}
        <div className="flex items-end justify-center gap-3 mb-10 h-48">
          {BOTTLE_IMGS.map((b) => (
            <div key={b.alt} className={`flex flex-col items-center transition-transform duration-500 hover:-translate-y-2 ${b.center ? '' : ''}`}>
              <img
                src={b.src}
                alt={b.alt}
                className={`object-contain drop-shadow-[0_8px_24px_rgba(200,150,42,0.4)] ${
                  b.center ? 'h-48' : 'h-36'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Title */}
        <div className="mb-6">
          <p className="font-display text-unicum-cream/60 text-xl md:text-2xl font-normal italic mb-1">
            {t('hero.title')}
          </p>
          <h1 className="font-display font-black text-6xl md:text-8xl text-white tracking-[0.15em] text-shadow-gold">
            {t('hero.titleBrand')}
          </h1>
        </div>

        {/* Gold divider */}
        <div className="w-24 h-px gold-line mb-6" />

        {/* Subtitle */}
        <p className="font-body text-lg md:text-xl text-unicum-cream/75 max-w-xl leading-relaxed mb-10">
          {t('hero.subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a href="#products"
            className="font-ui text-xs font-medium tracking-[0.2em] uppercase px-8 py-3 bg-gold text-unicum-black hover:bg-gold-light transition-colors">
            {t('hero.cta')}
          </a>
          <a href="#contact"
            className="font-ui text-xs font-medium tracking-[0.2em] uppercase px-8 py-3 border border-gold/50 text-gold hover:border-gold hover:bg-gold/10 transition-colors">
            {t('hero.ctaContact')}
          </a>
        </div>

        {/* Since */}
        <p className="font-ui text-[10px] font-light tracking-[0.4em] uppercase text-unicum-muted">
          {t('hero.since')}
        </p>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 w-full border-t border-gold/20 bg-unicum-dark/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-4 divide-x divide-gold/20">
          {[
            { num: '1790', label: t('stats.year') },
            { num: '40+', label: t('stats.herbs') },
            { num: '230+', label: t('stats.tradition') },
            { num: '5', label: t('stats.variants') },
          ].map(s => (
            <div key={s.num} className="py-5 text-center">
              <div className="font-display font-black text-2xl text-gold leading-none mb-1">{s.num}</div>
              <div className="font-ui text-[9px] font-medium tracking-[0.2em] uppercase text-unicum-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
