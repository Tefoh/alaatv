import { getCookie } from '@/helpers'

import { CITIES_SET_CITIES } from './types/cities.type'
import { GENDERS_SET_GENDERS } from './types/genders.type'
import { GRADES_SET_GRADES } from './types/grades.type'
import { MAJORS_SET_MAJORS } from './types/majors.type'
import { PROVINCES_SET_PROVINCES } from './types/provinces.type'
import { USER_SET_USER } from './types/user.type'

export const actions = {
  nuxtServerInit({ dispatch, commit }, { req, redirect }) {
    const accessToken = getCookie(req.headers.cookie, 'access_token')
    const user = getCookie(req.headers.cookie, 'user')

    if (!accessToken || !user) redirect({ name: 'login' })

    commit(USER_SET_USER, JSON.parse(user || '{}'))

    this.$axios.setToken(accessToken, 'Bearer')

    try {
      dispatch('getForm')
    } catch (error) {
      this.$axios.setToken(false)
      redirect({ name: 'login' })
    }
  },
  async getForm({ commit }) {
    const { data } = await this.$axios.get('megaroute/getUserFormData')
    const { cities, genders, grades, majors, provinces } = data.data

    commit(CITIES_SET_CITIES, cities)
    commit(GENDERS_SET_GENDERS, genders)
    commit(GRADES_SET_GRADES, grades)
    commit(MAJORS_SET_MAJORS, majors)
    commit(PROVINCES_SET_PROVINCES, provinces)
  },
}
