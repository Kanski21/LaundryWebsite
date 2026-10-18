import { CONTACT_PERSON, EMAIL, PHONE_DISPLAY, PHONE_HREF } from './contact'

export default function Footer() {
  return (
    <footer className="on-bluing bg-ink text-white">
      <div className="mx-auto max-w-page px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl">Clear &amp; Shine</p>
            <p className="mt-3 max-w-[22rem] text-white/70">Обществена пералня и химическо чистене. Професионално пране за хотели, ресторанти и домакинства.</p>
          </div>
          <div>
            <h2 className="font-sans text-sm font-medium text-white/60">Контакти</h2>
            <ul className="mt-4 space-y-2">
              <li><a href={PHONE_HREF} className="hover:underline">{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a></li>
              <li className="text-white/70">{CONTACT_PERSON}</li>
            </ul>
          </div>
          <div>
            <h2 className="font-sans text-sm font-medium text-white/60">На сайта</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#za-kogo" className="hover:underline">За кого</a></li>
              <li><a href="#proces" className="hover:underline">Как работим</a></li>
              <li><a href="#tekstili" className="hover:underline">Какво перем</a></li>
              <li><a href="#zapitvane" className="hover:underline">Запитване</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-14 border-t border-white/15 pt-6 text-sm text-white/60">© {new Date().getFullYear()} Clear &amp; Shine. Всички права запазени.</p>
      </div>
    </footer>
  )
}
