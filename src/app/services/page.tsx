import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '服務項目',
  description: '全方位設計服務：精緻木工、水電工程、鐵工鋁門窗、泥作油漆、軟裝設計。透明化施工流程。',
}

export default function ServicesPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <header className="px-8 py-24 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-[var(--color-primary)] mb-8 max-w-4xl mx-auto leading-tight">
          全方位設計服務與透明化施工流程
        </h1>
        <p className="text-xl md:text-2xl text-[var(--color-on-surface-variant)] max-w-2xl mx-auto leading-relaxed italic">
          從建築結構到細膩織物，我們細心雕琢您居所的每一個角落。
        </p>
      </header>

      {/* Services Bento Grid */}
      <section className="px-8 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)]/15 aspect-video">
            <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="精緻胡桃木木工" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6E1NsDBFiyInb0DInidWlCdYYegLDTvUBHK-xcJcF4G2VyBDB1f9yxL69jAkYTt9F7f73xHqC1LPKDWZydjR5Q1jM2673ZnfhgPev4BISYhnwYg156QxvGdoDK6NOJaF0sPUllmT5MiXnykSmKyfOLNi0LFLITBid8X1wglC37999AFxt-mj1tscNMn23Kw7A5lil9FKv9SCSSk8vO94WwKJjiuLkv8EeR01C1fcJnBe6A1kVS9VVlxfd2V_7f0EaBvsol49cYoo" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="material-symbols-outlined text-[var(--color-secondary-container)] mb-4 block">carpenter</span>
              <h3 className="text-3xl font-headline font-bold text-white mb-2">精緻木工</h3>
              <p className="text-stone-200 mb-4 font-body max-w-md">由資深匠人打造的客製化櫃體與細木作，完美契合您的空間。</p>
            </div>
          </div>
          <div className="md:col-span-4 bg-[var(--color-surface-container-high)] p-8 rounded-xl flex flex-col justify-between border border-[var(--color-outline-variant)]/15">
            <div>
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-4xl mb-6 block">dynamic_form</span>
              <h3 className="text-2xl font-headline font-bold text-[var(--color-primary)] mb-3">水電工程</h3>
              <p className="text-[var(--color-on-surface-variant)] font-body">精密規劃的隱形基礎設施，結合安全性與美學的完美呈現。</p>
            </div>
          </div>
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-[var(--color-surface-container-low)] aspect-square border border-[var(--color-outline-variant)]/15">
            <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="現代工業風黑色鐵框玻璃門" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYW0jxNjZSIp8SjZx5IEp7Rq_saS9TIEteE41Vz4iMEBI7jybgzO33cTdmaFCokpE2jR_t4Hmk6MFigVGxm5ek88Ohgxd7ImaHVE1liZaCGRlZfeELtiwQpzYVSsbw3ziQ-YkqVUzSxCyCgwD5mdBW7esds177UEXMydxZC_nK7OGX1NPTBsq3a2-P-uul-KKybul_eGmNLdmNOCWkiVO50GUD8qgQ-UUcTsTlpp9AdROoudkAOmDOs1bQXF2OdCAU4Jq0a4M7T1o" />
            <div className="absolute inset-0 bg-[var(--color-primary)]/20 group-hover:bg-[var(--color-primary)]/40 transition-colors" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-headline font-bold text-white">鐵工鋁門窗</h3>
            </div>
          </div>
          <div className="md:col-span-4 bg-[var(--color-primary)] text-white p-8 rounded-xl flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-[var(--color-secondary-fixed)] text-4xl mb-6 block">foundation</span>
              <h3 className="text-2xl font-headline font-bold mb-3">泥作油漆</h3>
              <p className="text-stone-300 font-body">結構穩健性與頂級石材、磁磚及細膩漆面的質感結合。</p>
            </div>
          </div>
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-[var(--color-surface-container-low)] aspect-square border border-[var(--color-outline-variant)]/15">
            <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="極簡客廳室內設計" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNDZD7c9_P4xnhBZtIfiB90V9PXmv7T5XDbebT4UXTkbgfkbp2XOuNHLmVkxA_sXrti--I_n9RMdORY4JjGx-yO-e4sp4AdbLvK-ewwTj0VMHM2T6Ptbr80xLztVk_gwjY1zdZwKYtljLICAnz1v_xnCQNDfn5KjYu65BDyB51y98TchhVONchsIR33HHEXZ4DZKwn8USRtVU4CKB7oVACHzTGFt4P_iwkZAnVp1xxYI62dSK1cfEcyNZavwjFnqxTrvpnCUPj9Lo" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-secondary)]/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-headline font-bold text-white">軟裝設計</h3>
            </div>
          </div>
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {[
              { icon: 'curtains', title: '窗簾布藝', desc: '嚴選面料，營造空間靜謐氛圍與柔和視覺感。' },
              { icon: 'layers', title: '地板方案', desc: '從高級實木地熱地板到拋光微水泥塗料。' },
              { icon: 'texture', title: '壁紙與壁飾', desc: '獨家壁面覆蓋物與藝術塗裝技法。' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-[var(--color-surface-container-lowest)] p-8 rounded-xl border border-[var(--color-outline-variant)]/15">
                <span className="material-symbols-outlined text-[var(--color-secondary)] mb-4 block">{icon}</span>
                <h4 className="font-headline font-bold text-xl mb-2">{title}</h4>
                <p className="text-[var(--color-on-surface-variant)] text-sm font-body">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[var(--color-surface-container-low)] py-32 mt-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-[var(--color-primary)] mb-6">「一站式」服務流程</h2>
            <p className="text-[var(--color-on-surface-variant)] max-w-xl mx-auto font-body italic">從初步草圖到完工交屋，全程資訊透明。絕對無隱藏成本。</p>
          </div>
          <div className="relative space-y-4 md:space-y-0">
            {[
              { num: '01', title: '初步諮詢與溝通', desc: '我們在工作室或您的住所進行訪談，深入了解您的生活型態、審美偏好與功能需求。每一個細節都至關重要。', align: 'mr-auto', bg: 'bg-[var(--color-surface-container-lowest)]', mt: '' },
              { num: '02', title: '全方位現場勘測', desc: '我們的技術團隊會進行精密的空間測繪，在設計開始前找出結構潛力與限制因素。', align: 'ml-auto', bg: 'bg-[var(--color-surface-container-high)]', mt: 'md:-mt-12' },
              { num: '03', title: '方案設計與固定報價', desc: '我們提供 3D 視覺模擬圖，並附上詳盡的細項預算表。我們承諾的報價即是您的最終支付價格，絕不巧立名目。', align: 'mr-auto', bg: 'bg-[var(--color-surface-container-lowest)]', mt: 'md:-mt-12' },
              { num: '04', title: '職人精神施工執行', desc: '內部專案經理全程監製，統籌各項工程職人。您可以透過專屬客戶端，每週收到施工進度照片更新。', align: 'ml-auto', bg: 'bg-[var(--color-primary)]', mt: 'md:-mt-12', dark: true },
              { num: '05', title: '驗收交屋與保固', desc: '我們將與您逐項確認完工細節。所有工程均享有全方位的 5 年結構保固承諾。', align: 'mr-auto', bg: 'bg-[var(--color-surface-container-lowest)]', mt: 'md:-mt-12' },
            ].map(({ num, title, desc, align, bg, mt, dark }, i) => (
              <div key={num} className={`relative ${bg} p-10 md:p-16 rounded-xl border border-[var(--color-outline-variant)]/10 max-w-4xl ${align} ${mt} group`} style={{ zIndex: (i + 1) * 10 }}>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <span className={`text-6xl font-headline font-extrabold ${dark ? 'text-white/10' : 'text-[var(--color-secondary)]/20'}`}>{num}</span>
                  <div>
                    <h3 className={`text-2xl font-headline font-bold mb-4 ${dark ? 'text-white' : 'text-[var(--color-primary)]'}`}>{title}</h3>
                    <p className={`font-body leading-relaxed max-w-lg ${dark ? 'text-stone-300' : 'text-[var(--color-on-surface-variant)]'}`}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32 max-w-5xl mx-auto text-center">
        <div className="hero-gradient p-16 rounded-2xl">
          <h2 className="text-4xl font-headline font-bold text-white mb-8">準備好重新定義您的空間了嗎？</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-[var(--color-secondary)] text-white px-10 py-4 rounded-lg font-label font-bold tracking-wide hover:opacity-90 transition-all active:scale-95 shadow-lg">
              開始您的專案
            </Link>
            <Link href="/contact" className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-10 py-4 rounded-lg font-label font-bold tracking-wide hover:bg-white/20 transition-all active:scale-95">
              預約免費諮詢
            </Link>
          </div>
          <p className="mt-8 text-stone-400 font-body text-sm">已有超過 500 位屋主選擇信任 Atelier 專業流程。</p>
        </div>
      </section>
    </main>
  )
}
