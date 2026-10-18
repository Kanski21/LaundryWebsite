import { DoorSymbol, IronSymbol, PackSymbol, WashSymbol } from './CareSymbols'

const STEPS = [
  {
    Symbol: DoorSymbol,
    title: 'Взимаме',
    text: 'Идваме до вашия обект или дом в уговореното време. Минимум пет артикула на поръчка.',
  },
  {
    Symbol: WashSymbol,
    title: 'Перем',
    text: 'Професионални перални PRIMUS, точно дозиране и хипоалергенни препарати, по изискванията на РЗИ.',
  },
  {
    Symbol: IronSymbol,
    title: 'Сушим и гладим',
    text: 'Щадящо гладене с професионални каландри. Бельото остава гладко и меко.',
  },
  {
    Symbol: PackSymbol,
    title: 'Опаковаме',
    text: 'Машинно опаковане за хигиена и ръчен контрол на качеството на всяко парче.',
  },
  {
    Symbol: DoorSymbol,
    title: 'Връщаме',
    text: 'Доставяме чистото бельо обратно, готово за употреба.',
  },
]

export default function Process() {
  return (
    <section id="proces" className="border-y border-line bg-white">
      <div className="mx-auto max-w-page px-4 py-20 sm:px-6 lg:py-28">
        <h2 className="max-w-[18ch] text-4xl sm:text-5xl">От вашата врата и обратно в пет стъпки</h2>

        <ol className="relative mt-14 grid gap-10 lg:grid-cols-5 lg:gap-6">
          {/* the thread that runs through every step */}
          <div className="absolute bottom-0 left-[1.75rem] top-0 w-px bg-line lg:bottom-auto lg:left-0 lg:right-0 lg:top-[1.75rem] lg:h-px lg:w-auto" aria-hidden="true" />
          {STEPS.map(({ Symbol, title, text }, i) => (
            <li key={title} className="relative flex gap-5 lg:block">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-white text-bluing">
                <Symbol className="h-7 w-7" />
              </div>
              <div className="lg:mt-6">
                <p className="text-sm text-ink-muted">Стъпка {i + 1}</p>
                <h3 className="mt-1 text-2xl">{title}</h3>
                <p className="mt-2 text-[0.975rem] leading-relaxed text-ink-muted">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
