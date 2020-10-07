export default function({$axios, route, store, redirect}){
    
    
    
    return $axios.get('cases')
        .then(response => {
        let detail = response.data.data
            if(detail.status !== "ACTIVE"){
                redirect('/patients/waiting')
            }
        })
        .catch(error => {
            
        })
    
}