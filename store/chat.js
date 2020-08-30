export const state = () => ({
    status: "ACTIVE",
    receiver: ""
})


export const getters = {
    showStatus(state){
        return state.status;
    },
    showReceiver(state){
        return state.receiver;
    }
} 

export const mutations = {
    SET_STATUS(state,status){
        state.status = status
    },
    UPD_RECEIVER(state,receiver){
        state.receiver = receiver
    }
} 


export const actions = {
    setStatus({commit}, status){
        commit('SET_STATUS',status)
    },

    setReceiver({commit}, receiver){
        commit('UPD_RECEIVER',receiver)
    }
}