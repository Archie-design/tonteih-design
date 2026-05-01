'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMemo, useState } from 'react'

export type Project = {
  title: string
  style: string
  location: string
  cls: string
  src: string
}

const ALL = '全部'

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [activeStyle, setActiveStyle] = useState<string>(ALL)

  const styles = useMemo(
    () => [ALL, ...Array.from(new Set(projects.map((p) => p.style)))],
    [projects]
  )

  const filtered = activeStyle === ALL ? projects : projects.filter((p) => p.style === activeStyle)

  return (
    <>
      <section className="w-full bg-[var(--color-primary)] py-8 mb-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-3">
            <span className="font-label text-[10px] uppercase tracking-widest text-[var(--color-on-primary-container)] font-bold">
              美學風格
            </span>
            <div className="flex flex-wrap gap-4" role="group" aria-label="依美學風格篩選作品">
              {styles.map((s) => {
                const active = s === activeStyle
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setActiveStyle(s)}
                    aria-pressed={active}
                    className={
                      active
                        ? 'font-label text-sm text-white border-b-2 border-[var(--color-secondary)] pb-1 min-h-[44px] inline-flex items-center'
                        : 'font-label text-sm text-[var(--color-on-primary-container)] hover:text-white hover:border-[var(--color-secondary)] border-b-2 border-transparent pb-1 transition-colors duration-200 min-h-[44px] inline-flex items-center'
                    }
                  >
                    {s}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8">
        {filtered.length === 0 ? (
          <p className="text-center font-body text-[var(--color-on-surface-variant)] py-24">
            此風格暫無作品。
          </p>
        ) : (
          <div className="portfolio-masonry">
            {filtered.map((p, i) => (
              <div
                key={`${p.title}-${p.src}-${i}`}
                className={`${p.cls} relative group overflow-hidden bg-[var(--color-surface-container)] rounded-xl`}
              >
                <Image
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={`${p.title} ${p.style}室內設計`}
                  src={p.src}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-[var(--color-primary)]/20 group-hover:bg-[var(--color-primary)]/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-headline text-lg font-bold text-white mb-1">{p.title}</h3>
                  <p className="font-label text-xs text-white/80 uppercase tracking-widest">
                    {p.style} · {p.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-24 text-center">
          <p className="font-body text-[var(--color-on-surface-variant)] italic text-lg mb-8">
            對您的下一個項目有初步構想嗎？
          </p>
          <Link
            href="/contact"
            className="px-10 py-4 bg-[var(--color-primary)] text-white rounded-lg font-label font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all inline-block"
          >
            開啟對話
          </Link>
        </div>
      </div>
    </>
  )
}
