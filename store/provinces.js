import { SET_PROVINCES } from './types/provinces.type'

export const namespaced = true

export const state = () => ({
  provinces: [],
})

export const mutations = {
  [SET_PROVINCES](state, payload) {
    state.provinces = payload
  },
}
