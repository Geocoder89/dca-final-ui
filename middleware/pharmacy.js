export default function({store, redirect}){
    
    if(store.state.auth.loggedIn){
        const role = store.state.auth.user.roles[0].code
        if(role !== "ROLE008"){
            return redirect('/')
        }
    }


}