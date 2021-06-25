import { SET_USER } from './types/user.type'

export const namespaced = true

export const state = () => ({
  user: null,
})

export const mutations = {
  [SET_USER](state, payload) {
    state.user = payload
  },
}
