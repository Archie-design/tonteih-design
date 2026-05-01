import { createHmac, timingSafeEqual } from 'crypto'

export const ADMIN_COOKIE = 'admin_auth'
export const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 24 * 7

function getPassword(): string {
  const p = process.env.ADMIN_PASSWORD
  if (!p) throw new Error('Missing ADMIN_PASSWORD env var')
  return p
}

export function makeToken(): string {
  return createHmac('sha256', getPassword()).update('admin').digest('hex')
}

export function verifyToken(token: string | undefined): boolean {
  if (!token) return false
  let expected: string
  try {
    expected = makeToken()
  } catch {
    return false
  }
  try {
    const a = Buffer.from(token, 'hex')
    const b = Buffer.from(expected, 'hex')
    if (a.length !== b.length) return false
    return timingSafeEqual(a, b)
  } catch {
    return false
  }
}

export function checkPassword(password: string): boolean {
  let expected: string
  try {
    expected = getPassword()
  } catch {
    return false
  }
  const a = Buffer.from(password)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}
