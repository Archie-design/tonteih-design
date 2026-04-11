import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-[var(--color-surface-container-low)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="col-span-1">
          <Link href="/" className="inline-block mb-2" aria-label="美東歐美室內設計 首頁">
            <Image src="/logo.png" alt="美東歐美室內設計" width={80} height={80} />
          </Link>
          <p className="font-body text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
            以專業與熱忱，構築跨越世代的建築美學。
          </p>
        </div>
        <div>
          <h4 className="font-headline font-semibold text-[var(--color-on-surface)] mb-6">服務項目</h4>
          <ul className="space-y-4">
            <li><Link className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-all font-body text-sm" href="/services">住宅設計與裝修</Link></li>
            <li><Link className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-all font-body text-sm" href="/services">商空規劃設計</Link></li>
            <li><Link className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-all font-body text-sm" href="/services">室內設計諮詢</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-semibold text-[var(--color-on-surface)] mb-6">關於公司</h4>
          <ul className="space-y-4">
            <li><Link className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-all font-body text-sm" href="/about">關於我們</Link></li>
            <li><Link className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-all font-body text-sm" href="/portfolio">精選作品</Link></li>
            <li><Link className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-all font-body text-sm" href="/contact">聯絡我們</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-semibold text-[var(--color-on-surface)] mb-6">社群連結</h4>
          <ul className="space-y-4">
            <li><a className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-all font-body text-sm" href="#">Instagram</a></li>
            <li><a className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-all font-body text-sm" href="#">Facebook</a></li>
            <li><a className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-all font-body text-sm" href="#">LINE</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-[var(--color-outline-variant)]/40 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs text-[var(--color-on-surface-variant)] font-label">© 2024 美東歐美室內設計 版權所有</span>
        <div className="flex gap-8">
          <a className="text-xs text-[var(--color-on-surface-variant)] hover:underline" href="#">隱私權政策</a>
          <a className="text-xs text-[var(--color-on-surface-variant)] hover:underline" href="#">服務條款</a>
        </div>
      </div>
    </footer>
  )
}
