import type { Metadata } from 'next'
import PortfolioGrid, { type Project } from '@/components/PortfolioGrid'

export const metadata: Metadata = {
  title: '精選作品',
  description: '東鐵工程精選工程案例，包含林口、桃園、龜山、青埔等地住宅翻新與新屋規劃實績。',
}

const projects: Project[] = [
  {
    title: '青埔亞昕喜徠登',
    style: '現代風',
    location: '桃園市青埔',
    cls: 'masonry-tall',
    src: '/portfolio/yaxin/682105801_122097014498539958_1825109131163425691_n.jpg',
  },
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
    title: '龜山 A7 大亮時代',
    style: '現代簡約',
    location: '桃園市龜山區',
    cls: 'masonry-short',
    src: '/portfolio/daliang/677953978_122095718174539958_4132240340751986471_n.jpg',
  },
  {
    title: '英堡日朗社區',
    style: '現代風',
    location: '桃園市',
    cls: 'masonry-short',
    src: '/portfolio/yingbao/675366444_122095714568539958_4407156118498389226_n.jpg',
  },
  {
    title: 'A7 大亮時代 II',
    style: '簡約風',
    location: '桃園市龜山區',
    cls: 'masonry-short',
    src: '/portfolio/daliang2/677190383_122096444804539958_8713207957365701263_n.jpg',
  },
  {
    title: '林口花開富貴社區',
    style: '現代簡約',
    location: '新北市林口區',
    cls: 'masonry-short',
    src: '/portfolio/huakai/674532540_122095706186539958_5266315989758455802_n.jpg',
  },
  {
    title: '青埔亞昕喜徠登',
    style: '現代風',
    location: '桃園市青埔',
    cls: 'masonry-short',
    src: '/portfolio/yaxin/682434917_122097014384539958_561842860895858000_n.jpg',
  },
  {
    title: '英堡日朗社區',
    style: '現代風',
    location: '桃園市',
    cls: 'masonry-short',
    src: '/portfolio/yingbao/677184522_122095714850539958_3058920516801447451_n.jpg',
  },
  {
    title: '龜山 A7 大亮時代',
    style: '現代簡約',
    location: '桃園市龜山區',
    cls: 'masonry-short',
    src: '/portfolio/daliang/678661116_122095718120539958_1471040914954784032_n.jpg',
  },
  {
    title: 'A7 大亮時代 II',
    style: '簡約風',
    location: '桃園市龜山區',
    cls: 'masonry-short',
    src: '/portfolio/daliang2/680461175_122096444744539958_6380865370221434057_n.jpg',
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
    <main id="main" className="pt-32 pb-20">
      <header className="max-w-7xl mx-auto px-8 mb-16">
        <h1 className="font-headline font-extrabold text-5xl md:text-7xl tracking-tighter text-[var(--color-primary)] mb-4">精選作品</h1>
        <p className="font-body text-[var(--color-on-surface-variant)] text-xl max-w-2xl leading-relaxed italic">
          每個空間都承載著一個家庭的故事，我們以 30 年的經驗，讓每次施工都成為值得驕傲的作品。
        </p>
      </header>

      <PortfolioGrid projects={projects} />
    </main>
  )
}
