<template>
    <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6 col-12">
                <section class="card">
                  
                   <div class="card-header p-2" style="background: #814BAA;color:#ffffff">
                       <div class="d-flex justify-content-between" style="width:28%;">
                            <div class="d-flex justify-content-center align-items-center" style="width:40px;height:40px;background:#F8F8F8;border-radius:50%;">
                                <span style="color: #814BAA;"><i class="fa fa-user-circle"></i></span>
                            </div>
                            <h4 class="card-title align-self-center" style="color:#ffffff;">{{receiver.first_name | capitalize}}</h4>
                       </div>
                        <div style="color:#ffffff;">
                            <a href="#" style="color:#ffffff;"><span class="mr-75 feather icon-camera"></span></a>
                             <nuxt-link to="/patients/audio" style="color:#ffffff;"><span class="mr-75 feather icon-phone"></span></nuxt-link>
                             <nuxt-link to="/patients/video" style="color:#ffffff;"><span class="mr-75 feather icon-video"></span></nuxt-link>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="card-body p-0">
                            <div class="col-lg-12 col-md-12 col-12">
                                <div class="card chat-application">
                                    <!-- {{chatClose}} -->
                                    <div class="chat-app-window" id="chat-frame" ref="chatBox" style="height:auto;overflow-y:scroll">
                                        <div class="user-chats pr-0 pl-0">
                                            <!-- <div class="m-1"><small class="text-muted">July 15, 2020</small></div> -->
                                            <div class="chats">
                                                <div class="chat"  :class="{'chat-left' : !isPatient}">
                                                    <div class="chat-body" :style="{'width: 80%;': isPatient}" :class="{'pr-0 mr-0': isPatient}">
                                                        <div :class="initialComplainClass">
                                                            <p>{{caseFile.initial_complain}}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="chat" v-for="(ch,index) in chats" :key="index"  :class="{'chat-left' : !checkUserMsg(ch.sender)}">
                                                    <div class="chat-body" :style="{'width: 80%;': !checkUserMsg(ch.sender)}" :class="{'pr-0 mr-0': checkUserMsg(ch.sender)}">
                                                        <div :class="chatClass(ch.sender)">
                                                            <p v-html="ch.body"></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <hr>
                                    <div class="chat-footer mt-0">
                                        <!-- <button class="btn btn-primary" @click="changeChatClose">test</button> -->
                                            <div class="card-body d-flex justify-content-between pt-0">
                            <a href="#" class="align-self-center"><i class="fa fa-paperclip btn-icon" style="font-size: 18px;"></i></a>
                                                <input type="text" class="form-control mr-50 ml-50" @keyup.enter="sendChat" placeholder="Type your Message" v-model="chat" style="border-radius: 50px;">
                                                <!-- <button type="button" class="btn btn-icon btn-primary"><i class="feather icon-navigation"></i></button> -->
                                                <button @click.prevent="sendChat" class="btn btn-primary btn-sm align-self-center" style="border-radius:20px;"><i class="fa fa-paper-plane-o btn-icon" style="font-size: 18px;"></i></button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <!-- <button type="button" class="btn btn-icon btn-primary" data-toggle="modal" data-target="#defaultSize">
                <i class="feather icon-navigation"></i>
            </button> -->
            <!-- update case modal -->
           <div class="modal fade text-left" id="defaultSize" tabindex="-1" role="dialog" aria-labelledby="myModalLabel18" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel18">Observation</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="#">
                              <div class="row">
                                <div class="col-12 mb-0">
                                  <fieldset class="form-group">
                                    <label for="basicInput">Obesrvation:</label>
                                    <textarea id="" cols="20" class="form-control" style="resize:none;" v-model="caseFile.doctor_observation"></textarea>
                                
                                  </fieldset>
                                </div>
                              </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" style="border-radius:40px;" @click="updateCase" data-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
    
        <!-- prescription -->
            <div class="modal fade text-left" id="prescription" tabindex="-1" role="dialog" aria-labelledby="myModalLabel18" aria-hidden="true" data-backdrop="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel18">Prescription</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="#">
                              <div class="row">
                                <div class="col-6 mb-0">
                                  <fieldset class="form-group" v-if="!havePrescription">
                                    <label for="basicInput">Ailment:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="prescription.ailment.name"
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                  <label for="basicInput" class="mb-2" v-if="havePrescription">Ailment: <strong>{{prescription.ailment.drug_name | capitalize}} </strong></label>
                                </div>
                                <div class="col-12"></div>
                                <div class="col-6 mb-0">
                                  <fieldset class="form-group" v-if="havePrescription">
                                    <label for="basicInput">Drug Name:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="prescription.drug_name"
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                                <div class="col-6 mb-0">
                                  <fieldset class="form-group" v-if="havePrescription">
                                    <label for="basicInput">Dosage:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="prescription.dosage"
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                              </div>
                            </form>
                            <div class="row">
                                <div class="col-12 mb-0">
                                    <h6>Prescribed Drugs</h6>
                                    <small v-if="!prescription.ailment.items.length"><em>No drug prescribed yet...</em></small>
                                    <table class="table table-striped" v-if="prescription.ailment.items.length">
                                        <thead>
                                            <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Dosage</th>
                                            <th scope="col">action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in prescription.ailment.items" :key="item.id">
                                            <td>{{item.name}}</td>
                                            <td>{{item.dosage}}</td>
                                            <td><a href="#" @click="deleteDrug($event,item.id)" class="btn btn-default" style="color:red;"><i class="fa fa-trash"></i></a></td>
                                            </tr>
                                        </tbody>
                                        </table>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" style="border-radius:40px;" @click="savePrescription" data-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  name: 'chats',
  props:['chatClose'],
  data() {
      return {
        chats: null,
        chat: '',
        sender_id: this.$store.state.auth.user.id,
        receiver:'',
        modalShown:true,
        prescription:{
            ailment:{
                name:'',
                items:[],                
            },
            id:'',
            drug_name:'',
            dosage:'',
            setPrescription:false,
        },
        caseFile:'',
        disable:true
      }
  },
  filters: {
    capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed:{
      ...mapGetters(["user"]),
      isPatient:function(){
          return this.user.id == this.caseFile.patient_id 
      },
      initialComplainClass:function(){
           return this.user.id == this.caseFile.patient_id  ? 'chat-content2' : 'chat-content'
      },
      havePrescription:function(){
          return this.prescription.setPrescription
      }
  },
  methods: {
        lastMsgFocus(){
            this.$refs.chatBox.scrollTop += 100;
        },
        sendChat() {
            // console.log(this.chat);
            if(this.chat){
                let db = this.$fireStore
                db.collection("chats").add({
                    sender: this.sender_id,
                    caseid: this.$route.params.caseid,
                    body: this.chat,
                    active:true,
                    createdAt: new Date()
                })
                .then(function(docRef) {
                   console.log(docRef);
                })
                .catch(function(error) {
                   console.log(error);
                    
                });
               
                this.chat = "";
            }
        },
        checkUserMsg(id){
            return this.user.id === id 
        },
        chatClass(id){
            return this.user.id === id ? 'chat-content2' : 'chat-content'
        },
        
        getReceiver(){
            const role = this.$store.state.auth.user.roles[0].name
            let caseId = this.$route.params.caseid;
                this.$axios.get(`cases/${caseId}`)
                .then(response => {
                    if(role == "doctor"){
                        let caseObj = response.data.data
                        this.receiver = caseObj.patient
                        const {patient, doctor, ...caseFile} = caseObj;
                        this.caseFile = caseFile
                    }
                    if(role == "patient"){
                        let caseObj = response.data.data
                        this.receiver = caseObj.doctor
                        const {patient, doctor, ...caseFile} = caseObj;
                        this.caseFile = caseFile
                    }
                })
                .catch(error => {
                    console.log(error.response);
                })
        },
        loadChat(){
            // window.location.reload();
            let vm = this;
            let caseId = this.$route.params.caseid;
            console.log(caseId);
            const role = this.$store.state.auth.user.roles[0].name
            const db = this.$fireStore.collection('chats')
            db.where("caseid", '==', this.$route.params.caseid).orderBy("createdAt")
            .onSnapshot(querySnapshot => {
                let messages = []
                querySnapshot.forEach(doc => {
                    // console.log(doc.data().active)
                    if(doc.data().active == false && doc.data().caseid === caseId){
                        if(role == "patient"){
                            // vm.$store.dispatch('chat/setChatSession', false)
                            vm.$router.push({path:'/patients/review'})
                            return false;
                        }
                    }
                    messages.push(doc.data())
                })

                this.chats = messages
            })   
        },
        closeCase(){
            let vm = this
            this.$dialog
            .confirm('Are you sure you want to close this case')
            .then(function(dialog) {
                vm.mainAlert();
            })
            .catch(function() {
                vm.chatClose = false 
            });
        },
        mainAlert(){
             let vm = this
            //firbase call
                let caseId = this.$route.params.caseid;
                let db = this.$fireStore
                db.collection("chats").add({
                    sender: this.sender_id,
                    caseid: caseId,
                    body: "end session",
                    active:false,
                    createdAt: new Date()
                })
                .then(function(docRef) {
                
                })
                .catch(function(error) {
                    console.log(error.response)
                });

                //axios call
                this.$axios.patch(`cases/${caseId}/close`)
                .then(response => {
                    vm.receiver = ''
                    vm.prescription.ailment.name = ''
                    vm.prescription.items = []
                    vm.caseFile = ''
                    // vm.$store.dispatch('chat/setChatSession', false)
                    // vm.$store.dispatch('chat/setStatus', "COMPLETED")
                    vm.$noty.success("Case closed succesfully.")
                    vm.$router.push({path:'/doctor/docboard'})
                })
                .catch(error => {
                    
                }) 
        },
        updateCase(){
            
            if(!this.caseFile.doctor_observation){
                this.$noty.error("This feild is required.");
                return false;
            }
           
            this.$axios.patch(`cases/${this.$route.params.caseid}/observations`,{
                doctor_observation : this.caseFile.doctor_observation
            })
            .then(response => {
            
                 this.$noty.success("Observation saved successfully.")
            })
            .catch(error => {
                console.log(error.response.data);
            }) 
        },
        getPrecriptionDrugs(id){
            this.$axios.get(`prescriptions/${id}`)
                .then(response => {
                    let items = response.data.data.drugs
                    this.prescription.ailment.items = items
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.log(error.response);
                })
        },
        getPrescription(){
            let caseId = this.$route.params.caseid;
            this.$axios.get(`cases/${caseId}/prescriptions`)
                .then(response => {
                    let prescription = response.data.data
                    if(!Object.keys(prescription).length){

                        this.prescription.setPrescription = false;
                        return false;
                    }

                    this.prescription.setPrescription = true;
                    this.prescription.ailment.drug_name = prescription.ailment
                    this.prescription.id = prescription.id
                    this.getPrecriptionDrugs(prescription.id);
                })
                .catch(error => {
                    console.log(error.response);
                })
        },
        savePrescription(){
            
            if(!this.prescription.id){
                if(!this.prescription.ailment.name){
                    this.$noty.error("All feild are required!");
                    return false;
                }
                this.$axios.post('prescriptions',{
                    case_file_id : this.$route.params.caseid,
                    details:"a simple description",
                    ailment : this.prescription.ailment.name
                })
                .then(response => {
                    this.getPrescription();

                    this.$noty.success("Prescription saved successfully.")
                })
                .catch(error => {
                    console.log(error.response.data);
                }) 
                return true;
            }
            this.$axios.post(`prescriptions/${this.prescription.id}/drugs`,{
                name : this.prescription.drug_name,
                dosage : this.prescription.dosage
            })
            .then(response => {
                this.prescription.drug_name = ""
                this.prescription.dosage = ""
                this.getPrescription();
                this.$noty.success("item added to precsription successfully.")
            })
            .catch(error => {
                console.log(error.response.data);
            }) 
            
        },
        deleteDrug(e,id){
            e.preventDefault();
            // alert(id);
            this.$axios.delete(`prescriptions/${this.prescription.id}/drugs/${id}`)
                .then(response => {
                    this.getPrescription();

                    this.$noty.success("Drug deleted successfully.")
                })
                .catch(error => {
                    console.log(error.response.data);
                }) 
        }
  },
  created(){
      this.loadChat()
  },
  mounted() {
    this.getReceiver();
    this.getPrescription();
    
  },
  updated(){  
        var elem = this.$refs.chatBox
        elem.scrollTop = elem.scrollHeight;
  },
  watch:{
      'chatClose':{
        handler:function(newVal, oldVal){
            if(newVal == true){
                this.closeCase()
                //   deep:true
            }
        },
        deep:true
      }
  }
 
}
</script>
<style scoped>
    *{
        scrollbar-width: thin;
    }
    body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
    }
    body::-webkit-scrollbar {
        width: 3px;
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: blue;
        border-radius: 10px;
        border: 3px solid orange;
    }
    body::-webkit-scrollbar-thumb:hover {
        background: #b30000; 
    }
    .dg-btn--ok {
        border-color: #814BAA !important;
    }
    .dg-btn--cancel{
        background: #814BAA !important;
    }
    
@media only screen and (max-width: 768px) {
    .content{
        margin-left:0;
    }
}
</style>