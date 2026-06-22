import { useTranslation } from 'react-i18next'

export default function Story() {
  const { t } = useTranslation()

  return (
    <section id="story" className="bg-unicum-warm py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Left: text */}
          <div className="flex-1">
            <p className="font-ui text-[9px] font-medium tracking-[0.35em] uppercase text-gold mb-3 flex items-center gap-3">
              {t('story.label')}
              <span className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
            </p>
            <h2 className="font-display font-black text-4xl text-unicum-charcoal leading-tight mb-8">
              {t('story.title')}
            </h2>
            <div className="space-y-4">
              <p className="font-body text-lg text-unicum-charcoal/80 leading-relaxed">{t('story.p1')}</p>
              <p className="font-body text-lg text-unicum-charcoal/80 leading-relaxed">{t('story.p2')}</p>
              <p className="font-body text-lg text-unicum-charcoal/80 leading-relaxed">{t('story.p3')}</p>
            </div>

            {/* Quote */}
            <div className="mt-10 border-l-4 border-gold pl-6 py-1">
              <blockquote className="font-body text-xl italic text-unicum-charcoal leading-relaxed mb-2">
                {t('story.quote')}
              </blockquote>
              <cite className="font-ui text-[10px] font-medium tracking-widest uppercase text-unicum-muted not-italic">
                — {t('story.quoteAuthor')}
              </cite>
            </div>
          </div>

          {/* Right: visual */}
          <div className="md:w-72 flex flex-col items-center">
            <div className="bg-unicum-dark p-8 flex flex-col items-center gap-1 border border-gold/20 w-full">
              <img
                src="https://zwackexport.hu/wp-content/uploads/2024/01/Unicum.jpg"
                alt="Unicum Original"
                className="h-64 object-contain drop-shadow-[0_8px_32px_rgba(200,150,42,0.5)] mb-4"
              />
              <p className="font-display font-bold text-gold text-lg tracking-widest">UNICUM</p>
              <p className="font-ui text-[9px] tracking-[0.3em] uppercase text-unicum-muted">Original · 1790</p>
            </div>

            {/* Timeline dots */}
            <div className="mt-8 w-full space-y-3">
              {[
                { year: '1790', text: 'Receta secreta creada' },
                { year: '1840', text: 'Primera producción comercial' },
                { year: '1948', text: 'Empresa nacionalizada' },
                { year: '1990', text: 'La familia Zwack recupera la marca' },
                { year: 'Hoy', text: 'Exportado a más de 40 países' },
              ].map(item => (
                <div key={item.year} className="flex items-start gap-3">
                  <div className="flex flex-col items-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <div className="w-px flex-1 bg-gold/20 mt-1 h-4" />
                  </div>
                  <div>
                    <span className="font-ui text-[10px] font-medium tracking-widest text-gold uppercase">{item.year}</span>
                    <p className="font-ui text-[11px] text-unicum-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
