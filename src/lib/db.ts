import { neon, type NeonQueryFunction } from '@neondatabase/serverless'

let _sql: NeonQueryFunction<false, false> | null = null

export function getSql(): NeonQueryFunction<false, false> {
  if (_sql) return _sql
  const url = process.env.DATABASE_URL
  if (!url) {
    throw new Error('Missing DATABASE_URL env var')
  }
  _sql = neon(url)
  return _sql
}

export type ContactSubmission = {
  id?: number
  name: string
  phone: string
  property_type: string
  requirement: string
  budget: string
  detail: string
  created_at?: string
}
