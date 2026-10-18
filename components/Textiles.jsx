export const TEXTILE_GROUPS = [
  { title: 'Спално бельо', items: ['Комплекти спално бельо', 'Чаршафи единични', 'Чаршафи двойни', 'Калъфки за възглавници'] },
  { title: 'Кухня', items: ['Кухненски кърпи', 'Престилки', 'Салфетки'] },
  { title: 'Маса', items: ['Покривки за маса', 'Салфетки за маса'] },
  { title: 'Химическо чистене', items: ['Костюми', 'Палта', 'Рокли', 'Други дрехи'] },
]

export default function Textiles() {
  return (
    <section id="tekstili" className="mx-auto max-w-page px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <h2 className="max-w-[12ch] text-4xl sm:text-5xl">Какво перем и чистим</h2>
          <p className="mt-6 max-w-[30rem] leading-relaxed text-ink-muted">
            Цената зависи от обема и от степента на замърсяване, затова изготвяме оферта за всяка поръчка. За заведения предлагаме договорни цени.
          </p>
          <a href="#zapitvane" className="btn-bluing mt-8">Поискайте оферта</a>
        </div>

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {TEXTILE_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="border-b border-ink pb-3 text-2xl">{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item} className="border-b border-line py-3 text-ink-muted">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
