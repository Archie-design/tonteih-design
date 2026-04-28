'use server'

import { supabase, type ContactSubmission } from '@/lib/supabase'

const FIELD_LIMITS = {
  name: 50,
  phone: 20,
  property_type: 40,
  requirement: 40,
  budget: 40,
  detail: 1000,
} as const

type ContactInput = Omit<ContactSubmission, 'id' | 'created_at'>

function validate(data: ContactInput): string | null {
  if (!data.name?.trim()) return '請填寫姓名'
  if (!data.phone?.trim()) return '請填寫聯絡電話'
  if (!/^[0-9+\-\s()]{7,20}$/.test(data.phone.trim())) return '電話格式不正確'

  for (const [key, limit] of Object.entries(FIELD_LIMITS)) {
    const value = data[key as keyof ContactInput]
    if (typeof value === 'string' && value.length > limit) {
      return '輸入內容過長，請縮短後再試'
    }
  }
  return null
}

export async function submitContact(
  data: ContactInput
): Promise<{ success: boolean; error?: string }> {
  const validationError = validate(data)
  if (validationError) {
    return { success: false, error: validationError }
  }

  const payload: ContactInput = {
    name: data.name.trim(),
    phone: data.phone.trim(),
    property_type: data.property_type,
    requirement: data.requirement,
    budget: data.budget,
    detail: data.detail.trim(),
  }

  const { error } = await supabase.from('contacts').insert([payload])

  if (error) {
    console.error('Supabase insert error:', error)
    return { success: false, error: '系統忙線中，請稍後再試。' }
  }

  return { success: true }
}
