import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: '聯絡我們',
  description: '預約免費諮詢，開始您的室內設計旅程。電話、Email、LINE 皆可聯繫。',
}

export default function ContactPage() {
  return (
    <main id="main" className="pt-32 pb-20 max-w-7xl mx-auto px-8">
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tight text-[var(--color-primary)] mb-6">實踐您的建築願景</h1>
        <p className="text-xl font-body text-[var(--color-on-surface-variant)] max-w-2xl italic">
          從最初的草圖到最終的結構樑柱，我們的工作室致力於為您的居家翻修帶來精準與溫暖。
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left: Contact Info */}
        <aside className="lg:col-span-5 space-y-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[var(--color-surface-container)] rounded-xl text-[var(--color-secondary)]">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="font-label font-bold text-sm uppercase tracking-widest text-[var(--color-secondary)] mb-1">諮詢專線</p>
                <p className="font-body text-xl text-[var(--color-primary)]">+886 (02) 2345-6789</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[var(--color-surface-container)] rounded-xl text-[var(--color-secondary)]">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="font-label font-bold text-sm uppercase tracking-widest text-[var(--color-secondary)] mb-1">電子郵件</p>
                <p className="font-body text-xl text-[var(--color-primary)]">hello@atelierdesign.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[var(--color-surface-container)] rounded-xl text-[var(--color-secondary)]">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="font-label font-bold text-sm uppercase tracking-widest text-[var(--color-secondary)] mb-1">工作室地址</p>
                <p className="font-body text-xl text-[var(--color-primary)]">海山中街 106-1 號<br />桃園市</p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-[var(--color-surface-container-low)] rounded-xl flex items-center gap-8 border border-[var(--color-outline-variant)]/10">
              <div className="w-32 h-32 bg-white p-2 rounded-lg shadow-sm flex items-center justify-center shrink-0">
                <img
                  alt="LINE QR Code"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKdajNwXi4_JmvOJy9Q6Wt9tV0BojcSCx4eBs8a3I_2zqdN5QgxDclASYFLw7W4Li8XJBMc3Udm8nyk3abDSsZDeKOrLcP57By9BX4YHiHb5MN3iKjP6qcEFQd9AO94LrWCs3FCVcz5sUfBgl2N0SB6NuoVdBDRYSfh7cTVt6vOsi01Eh6_8-4r5yMOKGlUYCgS8osaY4rl_vd-iXXQlzfhZWyZUaUV6QA4C2f3z7EUjS8N-DzMbn8BEB6JG8TnxPSugAKnhnMzww"
                />
              </div>
              <div>
                <p className="font-label font-bold text-[var(--color-primary)]">使用 LINE 聯繫</p>
                <p className="font-body text-sm text-[var(--color-on-surface-variant)]">掃描 QR Code 即可直接與我們的首席設計師聯繫，獲得即時解答。</p>
              </div>
            </div>
          </div>

          <div className="w-full aspect-video rounded-xl overflow-hidden bg-[var(--color-surface-container)] relative group">
            <img
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              alt="桃園市海山中街 106-1 號 地圖"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhYoHxa1L-7ATZKsORSHxLURkzzLDpQjD8RLatWxWd4j_BoS0G9e5z-Qi2MAq8FzDt1S7_NK_U_R8c9yEF7W_9arNRFpfeTj19jbiAMvp2te7nfsmAsskEh5LIje0d3erfBVKZbba4JSr9DsCTfn4PUdi13jjtWUQJhy-bSRMsZZPb3ZlNagZSCU6XCeygtePnCOVS9jI2n01CCdxTBf4Aotn9cmXIjWwA6SZ1UCzLKASfIFN1YwJLlHMxCM1uY-jmupoi21-z7ws"
            />
            <div className="absolute inset-0 bg-[var(--color-primary)]/5" />
            <div className="absolute bottom-4 left-4 bg-[var(--color-surface-container-lowest)] px-4 py-2 rounded shadow-sm font-label text-xs font-bold uppercase tracking-wider">
              查看互動地圖
            </div>
          </div>
        </aside>

        {/* Right: Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-32 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-[var(--color-primary)] mb-4">常見問題</h2>
          <p className="font-body text-[var(--color-on-surface-variant)] italic">為您解答與我們合作前的相關疑問。</p>
        </div>
        <div className="space-y-4">
          {[
            {
              q: '設計費用如何計算？',
              a: '我們採用透明的固定費用或建造成本百分比模式，具體取決於專案規模。在初步諮詢期間，我們會提供詳細的計畫書，列出建築圖面、室內採購和專案管理成本，確保過程公開透明無隱藏費用。',
            },
            {
              q: '典型的專案時程是多久？',
              a: '對於全屋翻修，設計階段通常需要 8-12 週，隨後是申請許可及為期 4-9 個月的施工期。我們會為每個專案提供自定義的甘特圖，讓您隨時掌握每週的進度。',
            },
            {
              q: '你們處理小坪數空間的專案嗎？',
              a: '當然可以。我們專精於城市空間的最佳化。無論是都市裡的小套房，還是精簡的主臥衛浴，我們的「Atelier Small」計畫都應用同樣精準的建築標準，在有限的坪數中極大化機能與奢華感。',
            },
          ].map(({ q, a }, i) => (
            <details key={q} className="group bg-[var(--color-surface-container-low)] rounded-xl" open={i === 0}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none min-h-[44px]">
                <span className="font-headline font-bold text-xl text-[var(--color-primary)]">{q}</span>
                <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4" aria-hidden="true">expand_more</span>
              </summary>
              <div className="px-6 pb-6 font-body text-[var(--color-on-surface-variant)] leading-relaxed">{a}</div>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
