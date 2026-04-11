import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '精選作品',
  description: '精心策劃的建築敘事集，住宅設計與商業空間案例。',
}

const projects = [
  {
    title: '丸之閣樓 (The Maru Loft)',
    tag: '改造前後',
    style: '日系和風',
    location: '台灣，台北',
    cls: 'masonry-tall',
    beforeSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1Xo-KwIfX8Mgaqfc1TzMB4gahkg4431u3-p7K7pOA7jGqq8RFtKWh9zE853mswJUGZ3ZMVEf7xwhgtINiQ4dZBDL6YxdfAu4CgA2waYMNuvAGQnXDDC6woeriGo_Ujh6lM4ovwUJDD7ZfH5UBrM9OX7XnChfvntj3P42iqa_uZCzKyQ4s_m4LkXagTfKaaDeB0zW7Dr9Doa7t_cmjARTuF8wJJgGGbV6EacUzC6c6z4GgLcWazlpvNX8J0JX4A2dAgh5AVhkIWog',
    afterSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYCBQk9NzLMldS9zQdKFyNTde5UtiycEBti4JqzwFHPwAEpAcW_MLAs2O2MApP2ETj4vXMSl0y50PVtHt7KQHklQe2-pTmbo1iaWzZU9fD2DHwqLPpKfSTDBRdItxHbfrqUpLK41WxVH-C_QdKz9Dnxg1bYtNIsl8I19XjWnw5yB9_6-8WH404oZc9nSwaTTfQ6698rENwl368szlLvbr1nHZdxCTwY40KHDL56KxYO1beEhHbOH3cg4srtQQmd4yiWA_UePlrEjw',
    isBefore: true,
  },
  {
    title: '斯德哥爾摩寓所 (Stockholm Residence)',
    tag: '',
    style: '北歐風',
    location: '台灣，台中',
    cls: 'masonry-short',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGrPynBibj_opf1faHw4xc0N6Pb8s7MDM3MDMQtSSZvA95BIQNGgnG9_vTXAtnRN4UmW2jGfQy-riYt2xMjzL32YNMhJGoBQMSi40DAHmrVig3g2l65om2jOG8y0xS7mwtTSiKKpd_7bu2x2OMNkb11fuc6iQi5mz46yAv__4_b9mJ-A8-D6iWu_o7_t1Bdu5MTi4VeojMZIiVCdlaATzY1APlAXPJbpbt-FcVrzbZNP-U47ZDMWmIg8DLb8CqK66Hc9PaAW_Q7v8',
  },
  {
    title: '回聲谷別墅 (Echo Valley Villa)',
    tag: '',
    style: '現代風',
    location: '台灣，新竹',
    cls: 'masonry-tall',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3vo1_quib1KPVK4WUlzFk-p-GDBZLoF-bE_CIocLb3-FC1B06OeNlNIKT2PNsNskP5HUyugxR9YPLtALHnOCWzrD81FBz37zlYTllfhA5jLLzVjtRiECWbTkmsllH1v48OKyClQjTxp27IjGxd8EPOzCLwMt-ppsb_zue5UFC7X-NMIXpKFsbU9SGN3Qo-aJHZi5kNDNN_m2C-VP2858cMcq5iatFMaOTk_lxUEqW6OyhYUtXB9-n1Di7J9i9-qIo0tj-gaKfI7c',
  },
  {
    title: 'Canvas 總部',
    tag: '',
    style: '商業空間',
    location: '台灣，台北',
    cls: 'masonry-short',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHNtXNdWU7xTwBBZRaaFZicW_AXjbPXWPH_mn63-0K_Xd5uJF3FJorvy6ZnZBNo09RG48ma65fihPUM157Q4PGYra2dMzD7LBlURPl7c6RT-76hvl5hc5yUNHegV9ZzsruiAzZsiLVB1EHZb7f2estZ9ZG_HjBIy58Oh0odIf2NL5Wa7qR3v0DhHyV_MrC35GnfD8KB9rEzLEoBMIkPLOjUBjWvcWUlABYaICXm_EMgR0XfDAVy74W9ps9WVCEM94CzjtwX7fsTgU',
  },
  {
    title: '梅薩露台別墅 (Mesa Terrace)',
    tag: '',
    style: '現代風',
    location: '台灣，高雄',
    cls: 'masonry-short',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx3MveU0aF2mc_Z8X2pdVI04vSFc8kNsaMLkR-_wRt-U5-OxQfeANQ5gzLoTwTQwhpA90riFUCnfuix52Eeuj3czY7BB7WhrmWc8bFhc6Zfwzyhf215aS-LK9LoYAEwwc19ZV58Q1D8vch4ZOkRjp4Eo09b3oafSwenOtZA90Rqx9vt13-JtyPbBlT4RY-n7-zsbqPqych6QuHWozDUMq32Jpx_COihxMKx7ypGtcIyYry1656qubW8zb0MVAEkzW2kVghVOT03us',
  },
]

export default function PortfolioPage() {
  return (
    <main className="pt-32 pb-20">
      <header className="max-w-7xl mx-auto px-8 mb-16">
        <h1 className="font-headline font-extrabold text-5xl md:text-7xl tracking-tighter text-[var(--color-primary)] mb-4">精選作品</h1>
        <p className="font-body text-[var(--color-on-surface-variant)] text-xl max-w-2xl leading-relaxed italic">
          精心策劃的建築敘事集，每個空間都在訴說著精準與材質真誠的故事。
        </p>
      </header>

      {/* Filter Bar */}
      <section className="w-full bg-[var(--color-primary)] py-8 mb-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <div className="space-y-3">
                <span className="font-label text-[10px] uppercase tracking-widest text-[var(--color-on-primary-container)] font-bold">類別</span>
                <div className="flex gap-4">
                  <button className="font-label text-sm text-white border-b-2 border-[var(--color-secondary)] pb-1 min-h-[44px] inline-flex items-center">住宅設計</button>
                  <button className="font-label text-sm text-[var(--color-on-primary-container)] hover:text-white hover:border-[var(--color-secondary)] border-b-2 border-transparent pb-1 transition-colors duration-200 min-h-[44px] inline-flex items-center">商業空間</button>
                </div>
              </div>
              <div className="space-y-3">
                <span className="font-label text-[10px] uppercase tracking-widest text-[var(--color-on-primary-container)] font-bold">規模</span>
                <div className="flex gap-4">
                  <button className="font-label text-sm text-[var(--color-on-primary-container)] hover:text-white hover:border-[var(--color-secondary)] border-b-2 border-transparent pb-1 transition-colors duration-200 min-h-[44px] inline-flex items-center">小型規模</button>
                  <button className="font-label text-sm text-[var(--color-on-primary-container)] hover:text-white hover:border-[var(--color-secondary)] border-b-2 border-transparent pb-1 transition-colors duration-200 min-h-[44px] inline-flex items-center">大型規模</button>
                </div>
              </div>
              <div className="space-y-3">
                <span className="font-label text-[10px] uppercase tracking-widest text-[var(--color-on-primary-container)] font-bold">美學風格</span>
                <div className="flex gap-4">
                  <button className="font-label text-sm text-white border-b-2 border-[var(--color-secondary)] pb-1 min-h-[44px] inline-flex items-center">北歐風</button>
                  <button className="font-label text-sm text-[var(--color-on-primary-container)] hover:text-white hover:border-[var(--color-secondary)] border-b-2 border-transparent pb-1 transition-colors duration-200 min-h-[44px] inline-flex items-center">現代風</button>
                  <button className="font-label text-sm text-[var(--color-on-primary-container)] hover:text-white hover:border-[var(--color-secondary)] border-b-2 border-transparent pb-1 transition-colors duration-200 min-h-[44px] inline-flex items-center">日系和風</button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[var(--color-secondary)] font-label text-sm">
              <span className="material-symbols-outlined">tune</span>
              <span>進階篩選</span>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="portfolio-masonry">
          {projects.map((p) =>
            p.isBefore ? (
              <div key={p.title} className={`${p.cls} relative group overflow-hidden bg-[var(--color-surface-container)] rounded-xl`}>
                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between pointer-events-none">
                  <span className="self-start px-3 py-1 bg-[var(--color-secondary)] text-white font-label text-[10px] uppercase tracking-widest font-bold rounded-full">{p.tag}</span>
                  <div className="bg-gradient-to-t from-[var(--color-primary)]/80 to-transparent p-6 -m-6 pointer-events-auto">
                    <h3 className="font-body text-2xl text-white mb-1 italic">{p.title}</h3>
                    <div className="flex justify-between items-center text-white/80 font-label text-xs">
                      <span>{p.style}</span>
                      <span>{p.location}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 h-full border-r border-white/20 overflow-hidden">
                    <img className="w-full h-full object-cover grayscale transition-transform duration-300 group-hover:scale-105" alt="改造前" src={p.beforeSrc} />
                  </div>
                  <div className="w-1/2 h-full overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="改造後" src={p.afterSrc} />
                  </div>
                </div>
              </div>
            ) : (
              <div key={p.title} className={`${p.cls} relative group overflow-hidden bg-[var(--color-surface-container)] rounded-xl`}>
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" alt={p.title} src={p.src} />
                <div className="absolute inset-0 bg-[var(--color-primary)]/20 group-hover:bg-[var(--color-primary)]/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-body text-xl text-white italic mb-1">{p.title}</h3>
                  <p className="font-label text-xs text-white/70 uppercase tracking-widest">{p.style} • {p.location}</p>
                </div>
              </div>
            )
          )}
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
