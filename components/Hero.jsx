export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Clear&Shine</h2>
        <p className="text-xl md:text-2xl mb-8">Обществена пералня и Химическо чистене</p>
        <p className="text-lg mb-8">Професионално пране с гаранция за хигиена!</p>
        <p className="text-md mb-8">Специализирани услуги за хотели, гостилници и ресторанти</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="tel:+359888004606" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">📞 +359 888 004 606</a>
          <a href="mailto:info@clearshine.bg" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">✉️ info@clearshine.bg</a>
        </div>
      </div>
    </section>
  )
}