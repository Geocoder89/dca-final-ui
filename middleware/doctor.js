export default function({store, redirect}){
    
    if(store.state.auth.loggedIn){
        const role = store.state.auth.user.roles[0].name
        if(role !== "doctor"){
            return redirect('/')
        }
    }


}