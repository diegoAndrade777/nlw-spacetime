import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'
import 'react-toastify/dist/ReactToastify.css'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')

  const redirectTo = request.cookies.get('redirectTo')?.value

  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data

  const redirectUrl = redirectTo ?? new URL('/', request.url)

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/;max-age=2592000`,
    },
  })
}
