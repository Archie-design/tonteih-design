'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const navLinks = [
  { href: '/', label: '首頁' },
  { href: '/services', label: '服務項目' },
  { href: '/portfolio', label: '作品集' },
  { href: '/about', label: '關於我們' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || !menuRef.current) return
      const focusables = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    const firstLink = menuRef.current?.querySelector<HTMLElement>('a[href]')
    firstLink?.focus()

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-200 ${
      scrolled
        ? 'bg-[var(--color-surface-container-lowest)]/95 border-[var(--color-outline-variant)]/30 shadow-sm'
        : 'bg-[var(--color-surface)]/80 border-transparent'
    }`}>
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center" aria-label="美東歐美室內設計 首頁">
          <Image src="/logo-v2.png" alt="美東歐美室內設計" width={56} height={56} priority />
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-secondary)] pb-1 font-label font-medium text-sm'
                  : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors duration-200 font-label font-medium text-sm'
              }
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-container)] text-white px-6 py-2.5 rounded-lg font-label font-medium text-sm hover:opacity-80 transition-all duration-300 active:scale-95"
          >
            免費諮詢
          </Link>
          <button
            id="hamburger"
            ref={hamburgerRef}
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[var(--color-on-surface)] rounded-lg hover:bg-[var(--color-surface-container)] transition-colors duration-200"
            aria-label={menuOpen ? '關閉選單' : '開啟選單'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="navigation"
          aria-label="行動版選單"
          className="bg-[var(--color-surface-container-lowest)]/95 backdrop-blur-xl px-8 py-6 flex flex-col gap-5 border-t border-[var(--color-outline-variant)]/20 md:hidden"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={
                pathname === href
                  ? 'font-label font-semibold text-[var(--color-primary)] text-base min-h-[44px] flex items-center'
                  : 'font-label font-medium text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] text-base min-h-[44px] flex items-center transition-colors duration-200'
              }
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-container)] text-white px-6 py-3 rounded-lg font-label text-sm font-medium text-center min-h-[44px] flex items-center justify-center"
          >
            免費諮詢
          </Link>
        </div>
      )}
    </nav>
  )
}
