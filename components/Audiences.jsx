import { PHONE_DISPLAY, PHONE_HREF } from './contact'

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m4.5 10.5 3.5 3.5 7.5-8" />
    </svg>
  )
}

const BUSINESS = [
  'Спално бельо, хавлии, покривки, салфетки и престилки',
  'Пране, съобразено с изискванията на РЗИ',
  'Взимане и доставка по уговорен график',
  'Цена според обема и степента на замърсяване',
]

const HOME = [
  'Обществена пералня',
  'Химическо чистене на костюми, палта и рокли',
  'Клиентско пране според указанията на етикета',
  'Гладене с пара',
]

export default function Audiences() {
  return (
    <section id="za-kogo" className="mx-auto max-w-page px-4 py-20 sm:px-6 lg:py-28">
      <h2 className="max-w-[20ch] text-4xl sm:text-5xl">Работим със заведения и с хора от квартала</h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        <div className="on-bluing rounded-2xl bg-ink p-8 text-white sm:p-10">
          <h3 className="text-3xl">За хотели, ресторанти и къщи за гости</h3>
          <ul className="mt-7 space-y-4 text-white/85">
            {BUSINESS.map((item) => (
              <li key={item} className="flex gap-3"><span className="text-sky"><Check /></span>{item}</li>
            ))}
          </ul>
          <a href="#zapitvane" className="btn-white mt-9">Поискайте оферта за заведение</a>
        </div>

        <div className="rounded-2xl border border-line bg-white p-8 sm:p-10">
          <h3 className="text-3xl">За вас и семейството</h3>
          <ul className="mt-7 space-y-4 text-ink-muted">
            {HOME.map((item) => (
              <li key={item} className="flex gap-3"><span className="text-bluing"><Check /></span>{item}</li>
            ))}
          </ul>
          <a href={PHONE_HREF} className="btn-outline mt-9">Обадете се: {PHONE_DISPLAY}</a>
        </div>
      </div>
    </section>
  )
}
