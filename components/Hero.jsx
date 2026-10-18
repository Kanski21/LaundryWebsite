import { DryCleanSymbol, IronSymbol, TumbleDrySymbol, WashSymbol } from './CareSymbols'
import { PHONE_DISPLAY, PHONE_HREF } from './contact'

const LABEL_ROWS = [
  { Symbol: WashSymbol, text: 'Пране с хипоалергенни препарати, по изискванията на РЗИ' },
  { Symbol: TumbleDrySymbol, text: 'Професионално сушене' },
  { Symbol: IronSymbol, text: 'Гладене с каландър' },
  { Symbol: DryCleanSymbol, text: 'Химическо чистене' },
]

function CareLabel() {
  return (
    <div className="animate-hang relative mx-auto w-full max-w-[22rem] origin-top" style={{ transform: 'rotate(-2.5deg)' }}>
      {/* the folded seam the label is sewn into */}
      <div className="mx-6 h-5 rounded-t-md bg-[#E6EBF5]" aria-hidden="true" />
      <div className="rounded-b-md bg-white px-7 pb-8 pt-7 text-ink shadow-[0_1px_0_#D5DCEA,0_30px_60px_-30px_rgba(13,27,62,0.55)]">
        <div className="stitch h-[1.5px]" aria-hidden="true" />
        <p className="mt-5 text-center font-display text-2xl">Clear &amp; Shine</p>
        <p className="mt-1 text-center text-sm text-ink-muted">Обществена пералня и химическо чистене</p>
        <ul className="mt-6 space-y-4">
          {LABEL_ROWS.map(({ Symbol, text }) => (
            <li key={text} className="flex items-center gap-4">
              <Symbol className="h-8 w-8 shrink-0 text-bluing" />
              <span className="text-[0.95rem] leading-snug">{text}</span>
            </li>
          ))}
        </ul>
        <div className="stitch mt-7 h-[1.5px]" aria-hidden="true" />
        <p className="mt-5 text-center text-sm text-ink-muted">Взимане и връщане до врата, по заявка</p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="nachalo" className="on-bluing overflow-hidden bg-bluing text-white">
      <div className="mx-auto grid max-w-page items-center gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:pb-28 lg:pt-24">
        <div>
          <h1 className="max-w-[14ch] text-[2.75rem] sm:text-6xl lg:text-[4.5rem]">
            Бяло бельо за хотели, ресторанти и дома
          </h1>
          <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-white/85">
            Перем на професионални машини PRIMUS, гладим с каландър и опаковаме машинно. Взимаме прането от вратата ви и го връщаме готово.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#zapitvane" className="btn-white">Поискайте оферта</a>
            <a href={PHONE_HREF} className="btn-outline-white">Обадете се: {PHONE_DISPLAY}</a>
          </div>
        </div>
        <CareLabel />
      </div>
    </section>
  )
}
