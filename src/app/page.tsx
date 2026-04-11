import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '首頁',
  description: '全方位室內統包設計服務。木作、水電、泥作、鐵件、軟裝一站完成。',
}

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="奢華極簡客廳，溫暖橡木地板，落地窗，柔和晨光"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxZAlN_QScfSr_fRasO4ajtlA_1NRDZ1EEjylDJoCwkBFiuKnW-7Ur3U2VceUvc2C5rx3W8qEfgRVaK5mnYgF8YG8iqBiFk0T2GMzuLPSX3rCbKzMRwZniINmtg63Uvm185V1GOphnTqojaWGzC2gXiDpglPPFDpLKw7_NLOM3AOF1y-9gnvsY1Dvn_m2bI5QPVNTOP0cNMg02W32HVKycz4jDQSWgcA3fP9Cr6iBrgajPt_tGdRJVoMYdhwnIZ_eBQ_oavVFPwZg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface)] via-[var(--color-surface)]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--color-primary)] leading-[1.1] mb-6 font-headline tracking-tight">
              成就理想居所，<br />
              <span className="text-[var(--color-secondary)] italic font-normal font-body">匠心打造經典</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] mb-10 leading-relaxed font-body">
              全方位的統包工程服務，為首次裝修的您提供最安心的旅程。從初步平面規劃到最終軟裝進場，我們以嚴謹的建築思維處理每一處細節。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-container)] text-white px-8 py-4 rounded-lg font-headline font-bold hover:opacity-90 transition-all active:scale-95 shadow-xl shadow-[var(--color-primary)]/10 text-center"
              >
                預約免費諮詢
              </Link>
              <Link
                href="/portfolio"
                className="bg-[var(--color-surface-container-lowest)] text-[var(--color-secondary)] px-8 py-4 rounded-lg font-headline font-bold hover:bg-[var(--color-surface-container-low)] transition-all active:scale-95 border border-[var(--color-outline-variant)]/20 text-center"
              >
                瀏覽作品集
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[var(--color-surface)] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-headline font-bold text-[var(--color-primary)] mb-4 tracking-tight">深耕多年，深得信賴</h2>
              <p className="text-[var(--color-on-surface-variant)]">我們擁有數十年高端住宅與商業空間的設計與施工經驗，致力於卓越品質。</p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-8">
              <div className="bg-[var(--color-surface-container-low)] p-10 rounded-xl flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-headline font-extrabold text-[var(--color-secondary)] mb-2">15+</span>
                <span className="text-sm font-label font-medium uppercase tracking-widest text-[var(--color-on-surface-variant)]">多年實務經驗</span>
              </div>
              <div className="bg-[var(--color-surface-container-high)] p-10 rounded-xl flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-headline font-extrabold text-[var(--color-primary)] mb-2">500+</span>
                <span className="text-sm font-label font-medium uppercase tracking-widest text-[var(--color-on-surface-variant)]">完工建案</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Bento Grid */}
      <section className="bg-[var(--color-surface-container-low)] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--color-secondary)] font-label font-bold tracking-widest uppercase text-xs">專業核心</span>
            <h2 className="text-4xl font-headline font-extrabold text-[var(--color-primary)] mt-2">一站式室內統包服務</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
            <div className="md:col-span-4 bg-[var(--color-surface-container-lowest)] rounded-xl p-8 flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6">
                <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]/30">carpenter</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-[var(--color-primary)] mb-2 relative z-10">精湛木作工程</h3>
              <p className="text-[var(--color-on-surface-variant)] relative z-10 text-sm">客製化櫃體與精緻木質收邊，定義空間的獨特個性。</p>
            </div>
            <div className="md:col-span-8 bg-[var(--color-primary)] text-white rounded-xl p-8 flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20">
                <img className="w-full h-full object-cover" alt="精緻建築技術細節" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmzD2sWjPo_1A71avyEgZYleaLTJA-M1hpRiPp28Yx7qDnF6GptuQ32FIAIEPrgLQTWL9fadoUWwEN5EmQK4obG314uuyBtMOISKAJ6HqsaRJl1dhrAnU_G5Wlug_rMPyCrTZm1QaPCakVcfBbkxVGSt8bglZwvlbteSpkqiVaEpcRNcla_LHD-rFBanXj0aXd25Sl6y48rGGS6oYPrDCpZy3oBB7d7a6DDL_CHefW4WTHHlwhznZvt0swLlYMf6NojwaDHlEBaT0" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-headline font-bold mb-2">基礎水電設施</h3>
                <p className="text-[var(--color-on-primary-container)] max-w-md text-sm">專業水電配置與機電整合，將隱蔽工程與設計美學完美連結。</p>
              </div>
            </div>
            <div className="md:col-span-5 bg-[var(--color-surface-container-highest)] rounded-xl p-8 flex flex-col relative overflow-hidden group">
              <h3 className="text-2xl font-headline font-bold text-[var(--color-primary)] mb-2">泥作與塗裝藝術</h3>
              <p className="text-[var(--color-on-surface-variant)] text-sm mb-6">資深泥作工法搭配精選配色漆料，為牆面賦予生命力與質感。</p>
              <div className="mt-auto">
                <img className="w-full h-40 object-cover rounded-lg" alt="高端威尼斯灰泥牆面質感" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwUGq5GeQU1Y1q6dgd-dNJgekKz8Ne_gBYGhkwI5mTFImkGQN3v4NNpuDEV-gjUYQgdSygiyQu4eY14xy3fVv5cHYEnxt4UG4QzpDnXmp1Em-QqNFPVP923NpCnbskvwWvjBydp84BvA0uNkpuBQrUI5w3RUaTdZPZskzr1BnfWa6oUE0f7HgB35XOexc94x8Iga6MrazYuaWsTK1o4UAmADjIg6HuwyIlz1_D9Jv7jMr1dh5Ao5ZeePEUaDxLsC-4BgnGVjVmMEY" />
              </div>
            </div>
            <div className="md:col-span-3 bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] rounded-xl p-8 flex flex-col justify-between">
              <span className="material-symbols-outlined text-4xl">grid_view</span>
              <div>
                <h3 className="text-xl font-headline font-bold mb-2">鐵件與玻璃</h3>
                <p className="text-sm opacity-80">客製鐵件結構與工藝級玻璃裝飾，營造通透且具層次感的空間質感。</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-[var(--color-surface-container-lowest)] rounded-xl p-8 flex flex-col justify-end">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)] mb-4">curtains</span>
              <h3 className="text-xl font-headline font-bold text-[var(--color-primary)] mb-2">極致軟裝飾品</h3>
              <p className="text-[var(--color-on-surface-variant)] text-sm">嚴選精品窗簾與家具配置，畫龍點睛地完成您對空間的最終憧憬。</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-[var(--color-secondary)] font-label font-semibold hover:underline">
              查看所有服務 <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-[var(--color-surface)] py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-headline font-extrabold text-[var(--color-primary)] mb-6">透明溝通，值得信賴</h2>
              <p className="text-lg text-[var(--color-on-surface-variant)]">我們獨有的四階段作業流程，確保您能掌握每個細節。設計與施工無縫接軌，讓工程進度精準執行。</p>
            </div>
            <div className="hidden md:block">
              <span className="material-symbols-outlined text-8xl text-[var(--color-secondary)]/10">architecture</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { num: '01', title: '需求探索', desc: '深入諮詢以瞭解您的生活型態、美學偏好以及工程預算規劃。', bg: 'bg-[var(--color-surface-container-lowest)]', mt: '' },
              { num: '02', title: '設計藍圖', desc: '提供專業室內設計圖面與建材建議，將抽象願景具體落實為施工準則。', bg: 'bg-[var(--color-surface-container-low)]', mt: 'md:mt-12 md:-ml-4' },
              { num: '03', title: '施工階段', desc: '由旗下資深工班進場施工，搭配專案經理每日現場監督與進度回報。', bg: 'bg-[var(--color-surface-container)]', mt: 'md:mt-24 md:-ml-4' },
              { num: '04', title: '完工交付', desc: '進行最後細部驗收與清潔，正式將專屬於您的夢想寓所交付到您手中。', bg: 'bg-[var(--color-surface-container-high)]', mt: 'md:mt-36 md:-ml-4' },
            ].map(({ num, title, desc, bg, mt }) => (
              <div key={num} className={`relative ${bg} p-10 border-l-4 border-[var(--color-secondary)] shadow-sm hover:-translate-y-2 transition-transform duration-300 ${mt}`} style={{ zIndex: parseInt(num) * 10 }}>
                <span className="text-[var(--color-secondary)] font-headline font-extrabold text-6xl opacity-20 absolute top-4 right-4">{num}</span>
                <h4 className="text-xl font-headline font-bold text-[var(--color-primary)] mb-4">{title}</h4>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[var(--color-primary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="material-symbols-outlined text-[var(--color-secondary)] text-5xl mb-8 block" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <p className="text-2xl md:text-4xl italic font-body max-w-4xl mx-auto leading-snug mb-10">
            「裝修過程中的透明度令人感到無比安心。美東歐美室內設計將我們老舊的寓所轉化為現代傑作，整個過程完全沒有壓力。」
          </p>
          <div className="flex flex-col items-center">
            <span className="font-headline font-bold text-lg">Elizabeth &amp; Mark Vance</span>
            <span className="font-label text-sm text-[var(--color-on-primary-container)] tracking-widest uppercase">切爾西頂層公寓 屋主</span>
          </div>
        </div>
      </section>
    </main>
  )
}
