export default function({store, redirect}){
    if(store.state.status === "ACTIVE"){
        return redirect('/patients/dashboard')
    }
}

