export default function Services() {
  const services = [
    {title: "Пране и дозиране",subtitle: "Професионални машини PRIMUS",description: ["✓ Професионални перални PRIMUS","✓ Хипоалергенни препарати","✓ Пране съобразено с изискванията на РЗИ"]},
    {title: "Сушене и гладене",subtitle: "Шадящо гладене",description: ["✓ Шадящо гладене с професионални каландри","✓ Перфектна гладкост и мекота","✓ Финален резултат за лукс и комфорт"]},
    {title: "Машинно опаковане",subtitle: "Професионално опаковане",description: ["✓ Машинно опаковане за хигиена","✓ Ръчен контрол на качеството","✓ Безопасно опаковане"]},
    {title: "Цени и транспорт",subtitle: "Доставка по договаране",description: ["✓ По заявка","✓ Минимум пет артикула","✓ Обем и степен на замърсяване"]},
  ]
  const chemicalServices = [
    {title: "Химическо чистене",description: ["✓ Професионално почистване","✓ Ефективно обработване","✓ Премахване на петна"]},
    {title: "Клиентско пране",description: ["✓ Пране според указанията","✓ Хипоалергенни препарати","✓ Перфектна гладкост"]},
    {title: "Парно гладене",description: ["✓ Безупречна гладкост","✓ Прецизна обработка","✓ Гладене с пара"]},
    {title: "От врата до врата",description: ["✓ Взимане и връщане","✓ По заявка","✓ Минимум пет артикула"]},
  ]
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Наши услуги</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((s, i) => <div key={i} className="bg-white p-8 rounded-lg shadow-lg"><h3 className="text-2xl font-bold text-primary mb-2">{s.title}</h3><p className="text-secondary font-semibold mb-4">{s.subtitle}</p><ul className="space-y-2">{s.description.map((d, j) => <li key={j} className="text-gray-700">{d}</li>)}</ul></div>)}
        </div>
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Услуги химическо чистене</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {chemicalServices.map((s, i) => <div key={i} className="bg-white p-8 rounded-lg shadow-lg"><h3 className="text-2xl font-bold text-primary mb-4">{s.title}</h3><ul className="space-y-2">{s.description.map((d, j) => <li key={j} className="text-gray-700">{d}</li>)}</ul></div>)}
        </div>
      </div>
    </section>
  )
}