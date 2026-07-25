export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Clear&Shine</h3>
            <p className="text-blue-100">Професионално пране и химическо чистене</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#services" className="hover:text-white">Услуги</a></li>
              <li><a href="#pricing" className="hover:text-white">Ценова листа</a></li>
              <li><a href="#calculator" className="hover:text-white">Калкулатор</a></li>
              <li><a href="#testimonials" className="hover:text-white">Отзиви</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакти</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="tel:+359888004606" className="hover:text-white">📞 +359 888 004 606</a></li>
              <li><a href="mailto:info@clearshine.bg" className="hover:text-white">✉️ info@clearshine.bg</a></li>
              <li>Контакт: Georgi Neshev</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-blue-100">
              <li>✓ Професионално пране</li>
              <li>✓ Химическо чистене</li>
              <li>✓ Гладене и опаковане</li>
              <li>✓ Доставка до дома</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-400 pt-8 text-center text-blue-100">
          <p>&copy; 2024 Clear&Shine. Всички права запазени.</p>
          <p>Обществена пералня и Химическо чистене</p>
        </div>
      </div>
    </footer>
  )
}