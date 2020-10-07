export default function({$axios, route, store, redirect}){
    
    let vm = this
    let caseId = route.params.caseid;
    
    return $axios.get(`cases/${caseId}`)
        .then(response => {
        console.log(response.data.data)
            if(response.data.data.status !== "ACTIVE"){
                redirect('/doctor/timeout')
            }
        })
        .catch(error => {
            
        })
    
}