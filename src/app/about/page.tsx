import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '關於我們',
  description: '30年房屋設計與空間規劃經驗，專精歐風、工業風、海洋風，量身打造專屬空間。桃園市。',
}

export default function AboutPage() {
  return (
    <main id="main" className="pt-32">
      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] text-xs font-bold uppercase tracking-widest mb-8">
              傳承與遠見
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-[var(--color-primary)] leading-[1.1] mb-8 tracking-tight">
              深植於品質與信任的基石。
            </h1>
            <div className="space-y-6">
              <p className="font-body text-xl text-[var(--color-on-surface-variant)] leading-relaxed">
                我們擁有 30 年房屋設計與空間規劃經驗，一路走來，陪伴無數家庭從新屋規劃到老屋翻新，實現對理想生活的想像。三十年的累積，不只是經驗的增加，更是對空間比例、生活動線與施工細節的深刻理解與堅持。
              </p>
              <blockquote className="font-body italic text-2xl border-l-4 border-[var(--color-secondary)] pl-8 py-4 text-[var(--color-secondary)] my-12">
                「家不應該只是好看，而是要真正適合居住者的生活方式。」
              </blockquote>
              <p className="font-body text-xl text-[var(--color-on-surface-variant)] leading-relaxed">
                我們擅長多元風格設計，無論是優雅細膩的歐風、個性俐落的工業風，還是清新療癒的海洋風，都能依照屋主的生活習慣與喜好，量身打造專屬空間。
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow">
              <img
                alt="高級建築工作室內部"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnzgee8dxZOZhLNQAUHTlp-UteqvQNmaDlyjrhfhskapeZxyw0ZBh9VCJbOXIfYyWjnEVaIopSD7FDScRoPq0ZZCcLK72NK1Tr6dGEhZ-y2VNayoIh_9--2u01K5LjgawmYr5rCejb87vHq62VQfu8GVh7WEvBPiXzq7IowkmUG7diBlJP6kt5JtNtEf9nWuoPUrfn5udlkt2qZA-22epCY2T9qZgNE-YvgDw2wNCqNWvGxWhB-9_eEvcKgQn4LCPYkbK0cmdtkUY"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[var(--color-surface-container-lowest)] p-8 rounded-xl editorial-shadow max-w-[280px] hidden md:block">
              <div className="flex items-center gap-4 mb-4 text-[var(--color-secondary)]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="font-headline font-bold text-sm tracking-wide">30 年專業經驗</span>
              </div>
              <p className="font-label text-sm text-[var(--color-on-surface-variant)] leading-snug">陪伴無數家庭從新屋規劃到老屋翻新，實現理想生活。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl font-extrabold text-[var(--color-primary)] mb-4">業界榮譽與專業認證</h2>
              <p className="font-body text-lg text-[var(--color-on-surface-variant)]">我們對卓越的承諾已獲得業界多家權威機構的肯定。</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-px w-32 bg-[var(--color-outline-variant)]/30 hidden lg:block" />
              <span className="font-label text-xs font-bold tracking-widest text-[var(--color-secondary)] uppercase">卓越工藝之選</span>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 items-center">
            {[
              { icon: 'architecture', label: '2023 建築文摘' },
              { icon: 'verified_user', label: '認證大師級建商' },
              { icon: 'eco', label: '綠色設計大獎' },
              { icon: 'foundation', label: '國家信託基金會認證' },
              { icon: 'workspace_premium', label: '2022 室內設計優越獎' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex justify-center flex-col items-center gap-4 text-center">
                <span className="material-symbols-outlined text-5xl text-[var(--color-primary)]">{icon}</span>
                <span className="font-headline font-bold text-xs uppercase tracking-tighter text-[var(--color-on-surface-variant)]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Letter */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="bg-[var(--color-primary-container)] rounded-xl overflow-hidden relative">
          <div className="relative p-12 lg:p-20 max-w-3xl mx-auto">
            <span className="text-[var(--color-secondary-fixed-dim)] font-headline font-bold text-xs tracking-widest uppercase mb-6 block">創辦人之信</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-8 leading-snug">致裝修新手：我們將是您最可靠的夥伴。</h2>
            <div className="font-body text-[var(--color-on-primary-container)] text-lg leading-relaxed space-y-6">
              <p>三十年前，我第一次踏入工地現場，深刻體會到裝修對屋主的壓力——無數的選擇、繁複的工序、對超預算的恐懼。正是這份初心，促使我們成立東鐵工程，陪伴每一個家庭走過這段旅程。</p>
              <p>歐風的細膩、工業風的俐落、海洋風的療癒——無論您心中的家是什麼模樣，我們都有能力讓它成真。30 年的經驗，是我們給您最踏實的承諾。</p>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="w-16 h-0.5 bg-[var(--color-secondary)]" />
              <p className="text-[var(--color-secondary)] text-sm font-medium uppercase tracking-wider">東鐵工程 創辦人</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
