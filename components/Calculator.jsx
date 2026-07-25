import { useState } from 'react'

export default function Calculator() {
  const [items, setItems] = useState([
    {id: 1,name: 'Чаршаф - единичен',quantity: 0,price: 0.5},
    {id: 2,name: 'Чаршаф - двойна',quantity: 0,price: 0.8},
    {id: 3,name: 'Възглавници',quantity: 0,price: 0.3},
    {id: 4,name: 'Кухненски кърпи',quantity: 0,price: 0.2},
    {id: 5,name: 'Престилки',quantity: 0,price: 0.3},
    {id: 6,name: 'Скатерти',quantity: 0,price: 1.0},
    {id: 7,name: 'Костюми',quantity: 0,price: 2.0},
    {id: 8,name: 'Палта',quantity: 0,price: 3.0},
  ])

  const handleQuantityChange = (id, newQuantity) => {
    setItems(items.map(item => item.id === id ? {...item, quantity: Math.max(0, newQuantity)} : item))
  }

  const total = items.reduce((sum, item) => sum + (item.quantity * item.price), 0)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">Калкулатор на цена</h2>
        <p className="text-center text-gray-600 mb-12">Приблизителна цена за вашата поръчка</p>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between pb-4 border-b">
                    <div>
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">~ {item.price.toFixed(2)} BGN</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="bg-gray-200 px-3 py-1 rounded">−</button>
                      <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)} className="w-12 text-center border border-gray-300 rounded py-1" />
                      <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="bg-gray-200 px-3 py-1 rounded">+</button>
                      <span className="w-20 text-right font-semibold text-primary">{(item.quantity * item.price).toFixed(2)} BGN</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-primary text-white rounded-lg shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Обобщение</h3>
              <div className="space-y-4 pb-6 border-b border-blue-300">
                <div className="flex justify-between">
                  <span>Брой артикули:</span>
                  <span className="font-bold text-xl">{totalItems}</span>
                </div>
                <div className="flex justify-between">
                  <span>Приблизителна цена:</span>
                  <span className="font-bold text-2xl">{total.toFixed(2)} BGN</span>
                </div>
              </div>
              <p className="text-sm mt-6 mb-6 opacity-90">* Приблизителна цена. За точна оценка се свържете.</p>
              <a href="mailto:info@clearshine.bg" className="block w-full bg-white text-primary px-4 py-3 rounded font-bold text-center hover:bg-gray-100">Изпрати запитване</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}