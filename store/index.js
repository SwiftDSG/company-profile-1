export const state = () => {
  return {
    mode: 'desktop'
  }
}

export const getters = {
  mode(state) {
    return state.mode
  }
}

export const mutations = {
  CHANGE_MODE(state, mode) {
    state.mode = mode === 'mobile' ? 'mobile' : 'desktop'
  }
}

export const actions = {
  changeMode({ commit }, mode) {
    commit('CHANGE_MODE', mode)
  }
}