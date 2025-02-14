export const state = () => ({
  show: false,
  message: '',
  type: 'success'
})

export const mutations = {
  setAlert (state, { message, type }) {
    state.show = true
    state.message = message
    state.type = type
  },
  hideAlert (state) {
    state.show = false
    state.message = ''
  }
}

export const actions = {
  triggerAlert ({ commit }, payload) {
    commit('setAlert', payload)

    setTimeout(() => {
      commit('hideAlert')
    }, 3000)
  }
}
