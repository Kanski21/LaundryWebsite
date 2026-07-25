export default function Testimonials() {
  const testimonials = [
    {name: "Hotel Sofia Palace",role: "Управител",text: "Отличен сервиз! Прането е винаги чисто и своевременно.",rating: 5},
    {name: "Restaurant Balkan",role: "Шеф",text: "Clear&Shine е част от нашия екип. Текстилите винаги са идеално чисти.",rating: 5},
    {name: "Guest House Mountain",role: "Администратор",text: "Професионално отношение и качество. Гостите забелязват разликата!",rating: 5},
    {name: "Cafe Espresso",role: "Собственик",text: "Доста доволен от услугата. Доставката е точна и дрехите са както ново.",rating: 5}
  ]
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Отзиви на клиентите</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => <div key={i} className="bg-gray-50 p-8 rounded-lg shadow-lg"><div className="flex mb-4">{[...Array(t.rating)].map((_, j) => <span key={j} className="text-yellow-400">★</span>)}</div><p className="text-gray-700 mb-6 italic">\"{t.text}\"</p><div className="border-t pt-4"><p className="font-bold text-primary">{t.name}</p><p className="text-sm text-gray-600">{t.role}</p></div></div>)}
        </div>
      </div>
    </section>
  )
}