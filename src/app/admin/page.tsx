import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ADMIN_COOKIE, verifyToken } from '@/lib/auth'
import { getSql } from '@/lib/db'
import { logout } from './actions'

export const metadata: Metadata = {
  title: '諮詢記錄',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

type ContactRow = {
  id: number
  name: string
  phone: string
  property_type: string
  requirement: string
  budget: string
  detail: string
  created_at: string
}

function formatDate(value: string): string {
  const d = new Date(value)
  return d.toLocaleString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

export default async function AdminPage() {
  const c = await cookies()
  if (!verifyToken(c.get(ADMIN_COOKIE)?.value)) {
    redirect('/admin/login')
  }

  const sql = getSql()
  const rows = (await sql`
    SELECT id, name, phone, property_type, requirement, budget, detail, created_at
    FROM contacts
    ORDER BY created_at DESC
  `) as unknown as ContactRow[]

  return (
    <main id="main" className="min-h-screen pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <h1 className="font-headline text-4xl font-extrabold text-[var(--color-primary)] mb-2">諮詢記錄</h1>
          <p className="font-body text-[var(--color-on-surface-variant)]">
            共 <span className="font-bold text-[var(--color-primary)]">{rows.length}</span> 筆紀錄，依時間新到舊排列。
          </p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="font-label text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] border border-[var(--color-outline-variant)] px-4 py-2 rounded-lg min-h-[44px] inline-flex items-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-base">logout</span>
            登出
          </button>
        </form>
      </header>

      {rows.length === 0 ? (
        <div className="bg-[var(--color-surface-container-lowest)] rounded-xl p-16 text-center">
          <span className="material-symbols-outlined text-5xl text-[var(--color-outline)] block mb-4">
            mark_email_unread
          </span>
          <p className="font-body text-[var(--color-on-surface-variant)]">尚無諮詢記錄。</p>
        </div>
      ) : (
        <div className="bg-[var(--color-surface-container-lowest)] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[var(--color-surface-container-low)]">
                <tr className="text-left">
                  <th className="font-label text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] px-6 py-4 whitespace-nowrap">時間</th>
                  <th className="font-label text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] px-6 py-4 whitespace-nowrap">姓名</th>
                  <th className="font-label text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] px-6 py-4 whitespace-nowrap">電話</th>
                  <th className="font-label text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] px-6 py-4 whitespace-nowrap">物業</th>
                  <th className="font-label text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] px-6 py-4 whitespace-nowrap">需求</th>
                  <th className="font-label text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] px-6 py-4 whitespace-nowrap">預算</th>
                  <th className="font-label text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] px-6 py-4">備註</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-t border-[var(--color-outline-variant)]/40 align-top">
                    <td className="font-body text-[var(--color-on-surface-variant)] px-6 py-4 whitespace-nowrap tabular-nums">
                      {formatDate(row.created_at)}
                    </td>
                    <td className="font-body text-[var(--color-primary)] font-medium px-6 py-4 whitespace-nowrap">{row.name}</td>
                    <td className="font-body text-[var(--color-primary)] px-6 py-4 whitespace-nowrap">
                      <a href={`tel:${row.phone}`} className="hover:underline">{row.phone}</a>
                    </td>
                    <td className="font-body text-[var(--color-on-surface-variant)] px-6 py-4 whitespace-nowrap">{row.property_type}</td>
                    <td className="font-body text-[var(--color-on-surface-variant)] px-6 py-4 whitespace-nowrap">{row.requirement}</td>
                    <td className="font-body text-[var(--color-on-surface-variant)] px-6 py-4 whitespace-nowrap">{row.budget}</td>
                    <td className="font-body text-[var(--color-on-surface-variant)] px-6 py-4 max-w-md whitespace-pre-wrap">
                      {row.detail || <span className="text-[var(--color-outline)]">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  )
}
