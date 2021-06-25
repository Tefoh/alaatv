import { SET_GENDERS } from './types/genders.type'

export const namespaced = true

export const state = () => ({
  genders: [],
})

export const mutations = {
  [SET_GENDERS](state, payload) {
    state.genders = payload
  },
}
