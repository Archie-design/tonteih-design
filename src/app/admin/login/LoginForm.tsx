'use client'

import { useState, useTransition } from 'react'
import { login } from '../actions'

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  return (
    <form
      action={(formData) => {
        setError(null)
        startTransition(async () => {
          const result = await login(formData)
          if (result?.error) setError(result.error)
        })
      }}
      className="space-y-6"
    >
      <div>
        <label htmlFor="password" className="font-label text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] block mb-2">
          管理密碼
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          className="w-full bg-[var(--color-surface-container-low)] border-0 border-b-2 border-[var(--color-outline-variant)] focus:border-[var(--color-secondary)] focus:bg-[var(--color-surface-container)] transition-all duration-200 font-body py-3 px-3 rounded-t-lg text-lg outline-none focus:ring-0"
        />
      </div>

      {error && (
        <p className="text-[var(--color-error)] font-label text-sm" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-container)] text-white py-4 rounded-lg font-headline font-bold hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? '驗證中…' : '登入'}
      </button>
    </form>
  )
}
