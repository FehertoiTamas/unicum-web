import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // TODO: replace with real API call (emailjs / formspree / supabase)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section id="contact" className="bg-unicum-black py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#2A1800_0%,#0E0A04_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-[2px] gold-line" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Logo mark */}
        <div className="w-16 h-16 rounded-full border-2 border-gold mx-auto mb-8 flex items-center justify-center">
          <span className="font-display font-black text-3xl text-gold leading-none">U</span>
        </div>

        <p className="font-ui text-[9px] font-medium tracking-[0.35em] uppercase text-gold mb-4">
          {t('contact.label')}
        </p>
        <h2 className="font-display font-black text-4xl text-white mb-4">
          {t('contact.title')}
        </h2>
        <p className="font-body text-lg text-unicum-cream/70 leading-relaxed mb-10 max-w-md mx-auto">
          {t('contact.subtitle')}
        </p>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto mb-4">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t('contact.placeholder')}
              required
              className="flex-1 bg-white/5 border border-gold/30 text-unicum-cream placeholder-unicum-muted px-5 py-3 font-ui text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gold text-unicum-black font-ui text-xs font-medium tracking-widest uppercase px-6 py-3 hover:bg-gold-light transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {loading ? '...' : t('contact.cta')}
            </button>
          </form>
        ) : (
          <div className="border border-gold/40 px-8 py-5 max-w-md mx-auto mb-4 bg-gold/5">
            <p className="font-body text-lg text-gold">{t('contact.success')}</p>
          </div>
        )}

        <p className="font-ui text-[10px] text-unicum-muted tracking-wide mb-16">
          {t('contact.disclaimer')}
        </p>

        {/* Company */}
        <div className="border-t border-gold/20 pt-10">
          <p className="font-ui text-[9px] tracking-[0.3em] uppercase text-gold/60 mb-2">
            {t('contact.company')}
          </p>
          <p className="font-display font-bold text-xl text-gold tracking-wide">
            IN-A Solutions S.A.C.
          </p>
          <p className="font-ui text-xs text-unicum-muted mt-1 tracking-wider">Lima, Perú</p>
          <p className="font-ui text-xs text-unicum-muted/60 mt-1">info@inasolutionssac.com

</p>
        </div>
      </div>
    </section>
  )
}
