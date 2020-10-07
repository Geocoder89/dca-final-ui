export default function({store, redirect}){
    
    if(store.state.auth.loggedIn){
        const role = store.state.auth.user.roles[0].code
        switch (role) {
        case 'ROLE003':
            return redirect('/patients/dashboard')
            break;
        case 'ROLE004':
            return redirect('/doctor/docboard')
            break;
        case 'ROLE008':
            return redirect('/pharmacy/dashboard')
            break;
        default:
            return redirect('/')
        }
    }


}