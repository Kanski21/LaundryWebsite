export default function Pricing() {
  const pricingData = [
    {category: "Пране на заведения",items: [{name: "Кръглоден комплект",price: "По договаране"},{name: "Чаршаф-единичен",price: "По договаране"},{name: "Чаршаф-двойна",price: "По договаране"},{name: "Възглавници",price: "По договаране"}]},
    {category: "Кухненски текстили",items: [{name: "Кухненски кърпи",price: "По договаране"},{name: "Престилки",price: "По договаране"},{name: "Салфетки",price: "По договаране"}]},
    {category: "Гостилнически текстили",items: [{name: "Скатерти",price: "По договаране"},{name: "Салфетки за маса",price: "По договаране"}]},
    {category: "Химическо чистене",items: [{name: "Костюми",price: "По договаране"},{name: "Палта",price: "По договаране"},{name: "Рокли",price: "По договаране"},{name: "Други парчета",price: "По договаране"}]},
  ]
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Ценова листа</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {pricingData.map((c, i) => <div key={i} className="bg-gray-50 p-8 rounded-lg"><h3 className="text-2xl font-bold text-primary mb-6 pb-4 border-b-2 border-secondary">{c.category}</h3><div className="space-y-4">{c.items.map((item, j) => <div key={j} className="flex justify-between"><span className="text-gray-700">{item.name}</span><span className="font-semibold text-primary">{item.price}</span></div>)}</div></div>)}
        </div>
        <div className="mt-12 bg-blue-50 p-8 rounded-lg border-l-4 border-primary text-center">
          <p className="text-gray-700 mb-4"><strong>За конкретни цени и специални оферти:</strong></p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="tel:+359888004606" className="bg-primary text-white px-6 py-2 rounded-lg">📞 +359 888 004 606</a>
            <a href="mailto:info@clearshine.bg" className="bg-primary text-white px-6 py-2 rounded-lg">✉️ info@clearshine.bg</a>
          </div>
        </div>
      </div>
    </section>
  )
}