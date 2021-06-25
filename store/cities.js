import { SET_CITIES } from './types/cities.type'

export const namespaced = true

export const state = () => ({
  cities: [],
})

export const mutations = {
  [SET_CITIES](state, payload) {
    state.cities = payload
  },
}
