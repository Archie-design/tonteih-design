'use client'

import { useState } from 'react'
import { submitContact } from '@/lib/actions'

const budgetOptions = ['150萬以下', '150萬 - 450萬', '450萬 - 1500萬', '1500萬以上']
const propertyOptions = ['現代公寓', '透天別墅 / 聯排別墅', '商業辦公空間', '零售店面', '其他']
const requirementOptions = ['全屋翻修', '廚房設計', '室內風格規劃', '建築設計與施工']

const inputClass = 'w-full bg-[var(--color-surface-container-low)] border-0 border-b-2 border-[var(--color-outline-variant)] focus:border-[var(--color-secondary)] focus:bg-[var(--color-surface-container)] transition-all duration-200 font-body py-3 px-3 rounded-t-lg text-lg placeholder:text-[var(--color-outline)] outline-none focus:ring-0'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    property_type: propertyOptions[0],
    requirement: requirementOptions[0],
    budget: budgetOptions[0],
    detail: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    const result = await submitContact(form)
    if (result.success) {
      setStatus('success')
      setForm({ name: '', phone: '', property_type: propertyOptions[0], requirement: requirementOptions[0], budget: budgetOptions[0], detail: '' })
    } else {
      setStatus('error')
      setErrorMsg(result.error ?? '發生錯誤，請稍後再試。')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[var(--color-surface-container-lowest)] p-8 md:p-12 rounded-xl shadow-[0_32px_64px_-16px_rgba(26,32,37,0.04)] flex flex-col items-center justify-center gap-6 min-h-[400px] text-center">
        <span className="material-symbols-outlined text-6xl text-[var(--color-secondary)]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        <h3 className="font-headline text-2xl font-bold text-[var(--color-primary)]">諮詢表單已送出！</h3>
        <p className="font-body text-[var(--color-on-surface-variant)]">我們通常在一個工作日內回覆，感謝您的耐心等候。</p>
        <button onClick={() => setStatus('idle')} className="font-label text-sm text-[var(--color-secondary)] hover:underline">再次送出</button>
      </div>
    )
  }

  return (
    <div className="bg-[var(--color-surface-container-lowest)] p-8 md:p-12 rounded-xl shadow-[0_32px_64px_-16px_rgba(26,32,37,0.04)]">
      <h2 className="font-headline text-3xl font-bold text-[var(--color-primary)] mb-2">預約諮詢</h2>
      <p className="font-body text-[var(--color-on-surface-variant)] mb-10">請告訴我們您的項目詳情。我們通常會在一個工作日內回覆。</p>

      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <label className="font-label text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] group-focus-within:text-[var(--color-secondary)] transition-colors block mb-2">姓名</label>
            <input name="name" value={form.name} onChange={handleChange} required autoComplete="name" className={inputClass} placeholder="王小明" type="text" />
          </div>
          <div className="group">
            <label className="font-label text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] group-focus-within:text-[var(--color-secondary)] transition-colors block mb-2">聯絡電話</label>
            <input name="phone" value={form.phone} onChange={handleChange} required autoComplete="tel" pattern="[0-9+\-\s()]{7,20}" title="請輸入有效的電話號碼" className={inputClass} placeholder="0912-345-678" type="tel" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <label className="font-label text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] group-focus-within:text-[var(--color-secondary)] transition-colors block mb-2">物業類型</label>
            <select name="property_type" value={form.property_type} onChange={handleChange} className={inputClass}>
              {propertyOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="group">
            <label className="font-label text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] group-focus-within:text-[var(--color-secondary)] transition-colors block mb-2">服務需求</label>
            <select name="requirement" value={form.requirement} onChange={handleChange} className={inputClass}>
              {requirementOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        <div className="group">
          <label className="font-label text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] block mb-4">預算範圍</label>
          <div className="flex flex-wrap gap-3">
            {budgetOptions.map((b) => (
              <label key={b} className="cursor-pointer">
                <input
                  type="radio"
                  name="budget"
                  value={b}
                  checked={form.budget === b}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <span className="font-label px-4 py-2 border border-[var(--color-outline-variant)] rounded-full text-sm peer-checked:bg-[var(--color-primary-container)] peer-checked:text-white peer-checked:border-[var(--color-primary-container)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-[var(--color-secondary)] peer-focus-visible:outline-offset-2 transition-all duration-200 hover:bg-[var(--color-surface-container-high)] min-h-[44px] inline-flex items-center">
                  {b}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="group">
          <label className="font-label text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] group-focus-within:text-[var(--color-secondary)] transition-colors block mb-2">專案詳情</label>
          <textarea name="detail" value={form.detail} onChange={handleChange} className={inputClass} placeholder="簡短描述您的願景與需求..." rows={4} />
        </div>

        {status === 'error' && (
          <p className="text-[var(--color-error)] font-label text-sm">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-container)] text-white py-5 rounded-lg font-headline font-bold text-lg hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? '提交中...' : '提交諮詢'}
        </button>
      </form>
    </div>
  )
}
