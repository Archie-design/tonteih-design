import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ADMIN_COOKIE, verifyToken } from '@/lib/auth'
import LoginForm from './LoginForm'

export const metadata: Metadata = {
  title: '登入',
  robots: { index: false, follow: false },
}

export default async function LoginPage() {
  const c = await cookies()
  if (verifyToken(c.get(ADMIN_COOKIE)?.value)) {
    redirect('/admin')
  }

  return (
    <main id="main" className="min-h-screen flex items-center justify-center px-8 py-32 bg-[var(--color-surface)]">
      <div className="w-full max-w-md bg-[var(--color-surface-container-lowest)] p-10 rounded-xl shadow-[0_32px_64px_-16px_rgba(26,32,37,0.04)]">
        <h1 className="font-headline text-3xl font-bold text-[var(--color-primary)] mb-2">後台登入</h1>
        <p className="font-body text-sm text-[var(--color-on-surface-variant)] mb-8">
          請輸入管理密碼以查看諮詢記錄。
        </p>
        <LoginForm />
      </div>
    </main>
  )
}
