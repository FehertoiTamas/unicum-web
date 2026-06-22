import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-unicum-dark border-t-2 border-gold py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-display font-black text-gold tracking-[0.25em] text-lg">UNICUM</span>
          <p className="font-ui text-[10px] text-unicum-muted mt-1">{t('footer.tagline')}</p>
        </div>
        <div className="text-center md:text-right">
          <p className="font-ui text-[10px] text-unicum-muted/60">
            {t('footer.distributed')} <span className="text-gold">IN-A Solutions S.A.C.</span>
          </p>
          <p className="font-ui text-[10px] text-unicum-muted/40 mt-1">
            © {new Date().getFullYear()} · {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
