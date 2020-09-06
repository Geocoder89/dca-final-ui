export const state = () => ({
    status: "",
    chatSession: null
})


export const getters = {
    showStatus(state){
        return state.status;
    },
    getChatSession(state){
        return state.chatSession;
    }
} 

export const mutations = {
    SET_STATUS(state,status){
        state.status = status
    },
    UPD_CHATSESSION(state,chatSession){
        state.chatSession = chatSession
    }
} 


export const actions = {
    setStatus({commit}, status){
        commit('SET_STATUS',status)
    },

    setChatSession({commit}, chatSession){
        commit('UPD_CHATSESSION',chatSession)
    }
}