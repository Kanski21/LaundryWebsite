import { useState } from 'react'
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from './contact'
import { TEXTILE_GROUPS } from './Textiles'

const MIN_ITEMS = 5
const ALL_ITEMS = TEXTILE_GROUPS.flatMap((g) => g.items)

function Stepper({ label, value, onChange }) {
  const id = `qty-${label}`
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line py-3">
      <label htmlFor={id} className="text-ink">{label}</label>
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => onChange(value - 1)} disabled={value === 0} aria-label={`По-малко: ${label}`} className="flex h-11 w-11 items-center justify-center rounded-full text-xl text-ink-muted transition-colors hover:bg-paper disabled:opacity-30">−</button>
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min="0"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value, 10) || 0)}
          className="h-11 w-14 rounded-lg border border-line text-center tabular-nums"
        />
        <button type="button" onClick={() => onChange(value + 1)} aria-label={`Повече: ${label}`} className="flex h-11 w-11 items-center justify-center rounded-full text-xl text-ink-muted transition-colors hover:bg-paper">+</button>
      </div>
    </div>
  )
}

export default function Inquiry() {
  const [quantities, setQuantities] = useState(() => Object.fromEntries(ALL_ITEMS.map((name) => [name, 0])))
  const [form, setForm] = useState({ name: '', company: '', phone: '', note: '' })
  const [errors, setErrors] = useState({})

  const total = Object.values(quantities).reduce((sum, n) => sum + n, 0)

  const clearError = (key) => errors[key] && setErrors({ ...errors, [key]: undefined })
  const setQuantity = (name, n) => {
    setQuantities({ ...quantities, [name]: Math.max(0, n) })
    clearError('items')
  }
  const setField = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    clearError(field)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Въведете име, за да знаем към кого да се обърнем.'
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) next.phone = 'Въведете телефон, например 0888 123 456.'
    if (total < MIN_ITEMS) next.items = `Добавете поне ${MIN_ITEMS} артикула. Сега са ${total}.`
    setErrors(next)
    if (Object.values(next).some(Boolean)) return

    const lines = ALL_ITEMS.filter((name) => quantities[name] > 0).map((name) => `- ${name}: ${quantities[name]} бр.`)
    const body = [
      'Здравейте,',
      '',
      'Искам оферта за следното пране:',
      ...lines,
      '',
      `Общо: ${total} артикула`,
      form.note.trim() ? `Бележка: ${form.note.trim()}` : null,
      '',
      `Име: ${form.name.trim()}`,
      form.company.trim() ? `Обект: ${form.company.trim()}` : null,
      `Телефон: ${form.phone.trim()}`,
    ].filter((line) => line !== null).join('\n')

    const subject = form.company.trim() ? `Запитване за пране – ${form.company.trim()}` : 'Запитване за пране'
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="zapitvane" className="border-t border-line bg-white">
      <div className="mx-auto max-w-page px-4 py-20 sm:px-6 lg:py-28">
        <h2 className="max-w-[18ch] text-4xl sm:text-5xl">Поискайте оферта</h2>
        <p className="mt-6 max-w-[36rem] leading-relaxed text-ink-muted">
          Изберете какво и колко искате да изперем. Ще ви се обадим с цена и удобен ден за взимане.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-12 grid gap-10 lg:grid-cols-[1.75fr_1fr] lg:gap-12">
          <fieldset aria-describedby={errors.items ? 'items-error' : undefined}>
            <legend className="sr-only">Артикули и брой</legend>
            <div className="grid gap-x-10 sm:grid-cols-2">
              {TEXTILE_GROUPS.map((group) => (
                <div key={group.title} className="mb-8">
                  <h3 className="mb-1 text-xl">{group.title}</h3>
                  {group.items.map((name) => (
                    <Stepper key={name} label={name} value={quantities[name]} onChange={(n) => setQuantity(name, n)} />
                  ))}
                </div>
              ))}
            </div>
          </fieldset>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl bg-paper p-7 sm:p-8">
              <p className="flex items-baseline justify-between border-b border-line pb-5">
                <span className="text-ink-muted">Избрани артикули</span>
                <span className="font-display text-4xl tabular-nums" aria-live="polite">{total}</span>
              </p>
              {errors.items
                ? <p id="items-error" className="mt-3 text-sm text-[#B42318]">{errors.items}</p>
                : <p className="mt-3 text-sm text-ink-muted">Минимум {MIN_ITEMS} артикула на поръчка.</p>}

              <div className="mt-6 space-y-5">
                <Field id="name" label="Име" value={form.name} onChange={setField('name')} error={errors.name} autoComplete="name" />
                <Field id="company" label="Хотел, ресторант или фирма" hint="По избор" value={form.company} onChange={setField('company')} autoComplete="organization" />
                <Field id="phone" label="Телефон" type="tel" value={form.phone} onChange={setField('phone')} error={errors.phone} autoComplete="tel" />
                <div>
                  <label htmlFor="note" className="text-sm font-medium">Бележка <span className="font-normal text-ink-muted">(по избор)</span></label>
                  <textarea id="note" rows="3" value={form.note} onChange={setField('note')} className="mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-3" />
                </div>
              </div>

              <button type="submit" className="btn-bluing mt-7 w-full">Изпратете запитване</button>
              <p className="mt-3 text-center text-sm text-ink-muted">Отваря имейла ви с готово запитване до {EMAIL}</p>
              <p className="mt-5 border-t border-line pt-5 text-center">
                Предпочитате разговор? <a href={PHONE_HREF} className="whitespace-nowrap font-medium text-bluing underline underline-offset-4">{PHONE_DISPLAY}</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

function Field({ id, label, hint, error, type = 'text', ...props }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label} {hint && <span className="font-normal text-ink-muted">({hint.toLowerCase()})</span>}
      </label>
      <input
        id={id}
        type={type}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-1.5 h-12 w-full rounded-lg border bg-white px-4 ${error ? 'border-[#B42318]' : 'border-line'}`}
        {...props}
      />
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-[#B42318]">{error}</p>}
    </div>
  )
}
