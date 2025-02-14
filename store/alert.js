export const state = () => ({
    show: false,
    message: '',
    type: 'success'
})

export const mutations = {
    setAlert(state, { message, type }) {
        state.show = true
        state.message = message
        state.type = type
        
        setTimeout(() => {
            state.show = false
            state.message = ''
        }, 3000)
    }
}