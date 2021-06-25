import { SET_MAJORS } from './types/majors.type'

export const namespaced = true

export const state = () => ({
  majors: [],
})

export const mutations = {
  [SET_MAJORS](state, payload) {
    state.majors = payload
  },
}
