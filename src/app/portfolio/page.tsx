import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '精選作品',
  description: '美東歐美室內設計精選工程案例，包含林口、桃園等地住宅翻新與新屋規劃實績。',
}

const projects = [
  {
    title: '林口花開富貴社區',
    style: '現代簡約',
    location: '新北市林口區',
    cls: 'masonry-tall',
    src: '/portfolio/huakai/678264011_122095708052539958_647630857255956300_n.jpg',
  },
  {
    title: '林口黃金印像社區',
    style: '歐風',
    location: '新北市林口區',
    cls: 'masonry-tall',
    src: '/portfolio/huangjin/677211103_122095708958539958_239775958878743562_n.jpg',
  },
  {
    title: '英堡日朗社區',
    style: '現代風',
    location: '桃園市',
    cls: 'masonry-short',
    src: '/portfolio/yingbao/675366444_122095714568539958_4407156118498389226_n.jpg',
  },
  {
    title: '林口花開富貴社區',
    style: '現代簡約',
    location: '新北市林口區',
    cls: 'masonry-short',
    src: '/portfolio/huakai/674532540_122095706186539958_5266315989758455802_n.jpg',
  },
  {
    title: '英堡日朗社區',
    style: '現代風',
    location: '桃園市',
    cls: 'masonry-short',
    src: '/portfolio/yingbao/677184522_122095714850539958_3058920516801447451_n.jpg',
  },
  {
    title: '林口黃金印像社區',
    style: '歐風',
    location: '新北市林口區',
    cls: 'masonry-short',
    src: '/portfolio/huangjin/678621224_122096446046539958_3925502297361094820_n.jpg',
  },
]

export default function PortfolioPage() {
  return (
    <main className="pt-32 pb-20">
      <header className="max-w-7xl mx-auto px-8 mb-16">
        <h1 className="font-headline font-extrabold text-5xl md:text-7xl tracking-tighter text-[var(--color-primary)] mb-4">精選作品</h1>
        <p className="font-body text-[var(--color-on-surface-variant)] text-xl max-w-2xl leading-relaxed italic">
          每個空間都承載著一個家庭的故事，我們以 30 年的經驗，讓每次施工都成為值得驕傲的作品。
        </p>
      </header>

      {/* Category Tags */}
      <section className="w-full bg-[var(--color-primary)] py-8 mb-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="space-y-3">
              <span className="font-label text-[10px] uppercase tracking-widest text-[var(--color-on-primary-container)] font-bold">類別</span>
              <div className="flex flex-wrap gap-3">
                <span className="font-label text-sm text-white border-b-2 border-[var(--color-secondary)] pb-1">住宅設計</span>
                <span className="font-label text-sm text-[var(--color-on-primary-container)] border-b-2 border-transparent pb-1">商業空間</span>
              </div>
            </div>
            <div className="space-y-3">
              <span className="font-label text-[10px] uppercase tracking-widest text-[var(--color-on-primary-container)] font-bold">類型</span>
              <div className="flex flex-wrap gap-3">
                <span className="font-label text-sm text-[var(--color-on-primary-container)] border-b-2 border-transparent pb-1">新屋規劃</span>
                <span className="font-label text-sm text-[var(--color-on-primary-container)] border-b-2 border-transparent pb-1">老屋翻新</span>
              </div>
            </div>
            <div className="space-y-3">
              <span className="font-label text-[10px] uppercase tracking-widest text-[var(--color-on-primary-container)] font-bold">美學風格</span>
              <div className="flex flex-wrap gap-3">
                <span className="font-label text-sm text-white border-b-2 border-[var(--color-secondary)] pb-1">現代簡約</span>
                <span className="font-label text-sm text-[var(--color-on-primary-container)] border-b-2 border-transparent pb-1">歐風</span>
                <span className="font-label text-sm text-[var(--color-on-primary-container)] border-b-2 border-transparent pb-1">現代風</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="portfolio-masonry">
          {projects.map((p, i) => (
            <div key={`${p.title}-${i}`} className={`${p.cls} relative group overflow-hidden bg-[var(--color-surface-container)] rounded-xl`}>
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt={`${p.title} ${p.style}室內設計`}
                src={p.src}
              />
              <div className="absolute inset-0 bg-[var(--color-primary)]/20 group-hover:bg-[var(--color-primary)]/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-headline text-lg font-bold text-white mb-1">{p.title}</h3>
                <p className="font-label text-xs text-white/80 uppercase tracking-widest">{p.style} · {p.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="font-body text-[var(--color-on-surface-variant)] italic text-lg mb-8">對您的下一個項目有初步構想嗎？</p>
          <Link href="/contact" className="px-10 py-4 bg-[var(--color-primary)] text-white rounded-lg font-label font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all inline-block">
            開啟對話
          </Link>
        </div>
      </div>
    </main>
  )
}
