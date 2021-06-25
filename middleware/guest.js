import { getCookie } from '@/helpers'

export default async (context) => {
  const cookies = process.server ? context.req.headers.cookie : document.cookie
  const accessToken = getCookie(cookies, 'access_token')

  if (accessToken) {
    context.redirect({ name: 'index' })
  }

  try {
    await context.store.dispatch('getForm')
    context.redirect({ name: 'index' })
  } catch (error) {
    console.log(error)
  }
}
