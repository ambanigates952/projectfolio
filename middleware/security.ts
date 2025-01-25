import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Basic Security Headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  // CSRF Protection
  if (request.method === 'POST') {
    const csrfToken = request.cookies.get('csrf-token')
    const headerToken = request.headers.get('X-CSRF-Token')
    
    if (!csrfToken || !headerToken || csrfToken !== headerToken) {
      return new NextResponse('Invalid CSRF token', { status: 403 })
    }
  }

  // Rate Limiting
  const ip = request.ip ?? 'unknown'
  const rateLimit = request.headers.get('X-RateLimit-Remaining')
  
  if (rateLimit === '0') {
    return new NextResponse('Too Many Requests', { status: 429 })
  }

  return response
}

export const config = {
  matcher: [
    '/api/:path*',
    '/contact'
  ]
} 