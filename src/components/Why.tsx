import { useTranslation } from 'react-i18next'

export default function Why() {
  const { t } = useTranslation()
  const items = t('why.items', { returnObjects: true }) as { icon: string; title: string; desc: string }[]

  return (
    <section id="why" className="bg-unicum-warm py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-ui text-[9px] font-medium tracking-[0.35em] uppercase text-gold mb-3">
            {t('why.label')}
          </p>
          <h2 className="font-display font-black text-4xl text-unicum-charcoal">
            {t('why.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-gold/10">
          {items.map((item) => (
            <div key={item.title} className="bg-unicum-warm p-8 flex gap-5 items-start group hover:bg-unicum-cream/50 transition-colors">
              <div className="w-10 h-10 flex-shrink-0 bg-unicum-dark border border-gold/40 flex items-center justify-center text-lg group-hover:border-gold transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="font-ui text-xs font-medium tracking-widest uppercase text-unicum-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="font-ui text-sm text-unicum-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
