import { SET_GRADES } from './types/grades.type'

export const namespaced = true

export const state = () => ({
  grades: [],
})

export const mutations = {
  [SET_GRADES](state, payload) {
    state.grades = payload
  },
}
