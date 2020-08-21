export default function({store, redirect}){
    
    if(store.state.auth.loggedIn){
        const role = store.state.auth.user.roles[0].name
        switch (role) {
        case 'patient':
            return redirect('/patients/dashboard')
            break;
        case 'doctor':
            return redirect('/doctor/docboard')
            break;
        default:
            return redirect('/')
        }
    }


}