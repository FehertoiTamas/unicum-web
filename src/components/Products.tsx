import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const PRODUCTS = [
  {
    key: 'original',
    abv: 40,
    img: 'https://zwackexport.hu/wp-content/uploads/2024/01/Unicum.jpg',
    accent: '#6B2020',
    accentLight: '#8B2A2A',
  },
  {
    key: 'szilva',
    abv: 32,
    img: 'https://zwackexport.hu/wp-content/uploads/2024/01/UNICUM-Szilva.jpg',
    accent: '#4A1942',
    accentLight: '#6B2A60',
  },
  {
    key: 'barista',
    abv: 32,
    img: 'https://zwackexport.hu/wp-content/uploads/2024/01/Unicum-Barista_1.jpg',
    accent: '#3D2010',
    accentLight: '#5C3018',
  },
  {
    key: 'orange',
    abv: 32,
    img: 'https://zwackexport.hu/wp-content/uploads/2026/04/Kep2.png',
    accent: '#8B3A10',
    accentLight: '#B04A18',
  },
  {
    key: 'riserva',
    abv: 40,
    img: 'https://zwackexport.hu/wp-content/uploads/2024/01/Riserva.jpg',
    accent: '#C8962A',
    accentLight: '#E8B84B',
    premium: true,
  },
]

export default function Products() {
  const { t } = useTranslation()
  const [active, setActive] = useState('original')

  const current = PRODUCTS.find(p => p.key === active)!
  const item = t(`products.items.${active}`, { returnObjects: true }) as any

  return (
    <section id="products" className="bg-unicum-charcoal py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-ui text-[9px] font-medium tracking-[0.35em] uppercase text-gold mb-3">
            {t('products.label')}
          </p>
          <h2 className="font-display font-black text-4xl text-unicum-cream">
            {t('products.title')}
          </h2>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {PRODUCTS.map(p => {
            const pItem = t(`products.items.${p.key}.name`, { returnObjects: false }) as string
            const isActive = active === p.key
            return (
              <button
                key={p.key}
                onClick={() => setActive(p.key)}
                className={`font-ui text-[10px] font-medium tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  isActive
                    ? 'text-unicum-black border-transparent'
                    : 'text-unicum-cream/50 border-unicum-cream/20 hover:border-gold/50 hover:text-gold'
                }`}
                style={isActive ? { backgroundColor: current.accent, borderColor: current.accent } : {}}
              >
                {pItem.replace('Unicum ', '')}
              </button>
            )
          })}
        </div>

        {/* Product detail */}
        <div key={active} className="grid md:grid-cols-5 gap-0 border border-gold/20 overflow-hidden">
          {/* Image col */}
          <div className="md:col-span-2 bg-unicum-dark flex items-center justify-center p-10 min-h-64"
            style={{ borderRight: `4px solid ${current.accent}` }}>
            <img
              src={current.img}
              alt={item.name}
              className="h-64 object-contain drop-shadow-[0_8px_32px_rgba(200,150,42,0.45)] hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content col */}
          <div className="md:col-span-3 bg-unicum-dark p-8 flex flex-col justify-between">
            <div>
              {/* Name + ABV */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-display font-bold text-2xl leading-tight"
                  style={{ color: current.premium ? current.accent : '#FAF6EE' }}>
                  {item.name}
                </h3>
                <span className="font-ui text-[10px] font-medium tracking-widest uppercase px-3 py-1 border whitespace-nowrap mt-1"
                  style={{ color: current.accent, borderColor: current.accent }}>
                  {current.abv}{t('products.abv')}
                </span>
              </div>

              {/* Tagline */}
              <p className="font-body italic text-sm mb-4 pb-4 border-b border-gold/20"
                style={{ color: current.premium ? current.accentLight : current.accentLight }}>
                {item.tagline}
              </p>

              {/* Desc */}
              <p className="font-body text-base text-unicum-cream/80 leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Traits */}
              <ul className="space-y-2 mb-6">
                {(item.traits as string[]).map((trait: string) => (
                  <li key={trait} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 text-xs flex-shrink-0">—</span>
                    <span className="font-ui text-xs text-unicum-cream/70 leading-relaxed">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perfect for */}
            <div className="flex items-center gap-3 pt-4 border-t border-gold/20">
              <span className="font-ui text-[9px] font-medium tracking-widest uppercase text-gold whitespace-nowrap">
                ✦ {t('products.perfect')}
              </span>
              <span className="font-ui text-xs text-unicum-cream/60">{item.perfect}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
