export const state = () => ({
    status: "ACTIVE"
})

export const mutations = {
    SET_STATUS(state,status){
        state.status = status
    }
} 


export const actions = {
    setStatus({commit}, status){
        commit('SET_STATUS',status)
    }
}