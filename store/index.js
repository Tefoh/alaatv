import { CITIES_SET_CITIES } from './types/cities.type'
import { GENDERS_SET_GENDERS } from './types/genders.type'

export const actions = {
  async nuxtServerInit({ commit }, { req, redirect }) {
    const accessToken = getCookie(req.headers.cookie, 'access_token')

    this.$axios.setToken(accessToken, 'Bearer')

    try {
      const { data } = await this.$axios.get('megaroute/getUserFormData')
      commit(CITIES_SET_CITIES, data.data.cities)
      commit(GENDERS_SET_GENDERS, data.data.genders)
    } catch (error) {
      redirect({ name: 'login' })
    }
  },
}

function getCookie(cookies, name) {
  const value = `; ${cookies}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}
