'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ADMIN_COOKIE, ADMIN_COOKIE_MAX_AGE, checkPassword, makeToken } from '@/lib/auth'

export async function login(formData: FormData): Promise<{ error?: string }> {
  const password = String(formData.get('password') ?? '')
  if (!checkPassword(password)) {
    return { error: '密碼錯誤' }
  }
  const c = await cookies()
  c.set(ADMIN_COOKIE, makeToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: ADMIN_COOKIE_MAX_AGE,
  })
  redirect('/admin')
}

export async function logout(): Promise<void> {
  const c = await cookies()
  c.delete(ADMIN_COOKIE)
  redirect('/admin/login')
}
