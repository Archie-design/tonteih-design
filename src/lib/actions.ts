'use server'

import { supabase, type ContactSubmission } from '@/lib/supabase'

export async function submitContact(
  data: Omit<ContactSubmission, 'id' | 'created_at'>
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from('contacts').insert([data])

  if (error) {
    console.error('Supabase insert error:', error)
    return { success: false, error: error.message }
  }

  return { success: true }
}
