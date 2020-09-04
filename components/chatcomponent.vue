<template>
    <div class="row justify-content-center">
                    
                     <!-- <div class="col-md-3 col-lg-3 col-12" :class="{'d-none': $nuxt.$route.name !== 'doctor-chats-caseid'}">
                        <div class="main-menu menu-fixed menu-light menu-accordion" data-scroll-to-active="true" style="height:300px !important;">
                            <div class="main-menu-content">
                            <ul
                            id="main-menu-navigation"
                            class="navigation navigation-main"
                            data-menu="menu-navigation"
                            >
                            
                            <li class=" nav-item">
                                <nuxt-link to="#"
                                ><ion-icon name="checkmark-done-outline" style="margin-right:1em;"></ion-icon>
                                <span class="menu-title" data-toggle="modal" data-target="#defaultSize">Update Case</span>
                                </nuxt-link>
                            </li>
                            <li class=" nav-item ">
                                <nuxt-link to="#"
                                ><ion-icon name="checkmark-outline" style="margin-right:1em;"></ion-icon>
                                <span class="menu-title">Prescription</span>
                                </nuxt-link>
                            </li>

                            <li class=" nav-item ">
                                <nuxt-link to="#"
                                ><ion-icon name="arrow-redo-outline" style="margin-right:1em;"></ion-icon>
                                <span class="menu-title">Refer Nurse</span>
                                </nuxt-link>
                            </li>
                            <li class=" nav-item ">
                                <nuxt-link to="#"
                                ><ion-icon name="arrow-redo-outline" style="margin-right:1em;"></ion-icon>
                                <span class="menu-title">Refer Pharmacy</span>
                                </nuxt-link>
                            </li>
                            <li class=" nav-item ">
                                <nuxt-link to="#"
                                ><ion-icon name="arrow-redo-outline" style="margin-right:1em;"></ion-icon>
                                <span class="menu-title">Refer Nutritionist</span>
                                </nuxt-link>
                            </li>
                            <li class=" nav-item ">
                                <nuxt-link to="#"
                                ><ion-icon name="book-outline" style="margin-right:1em;"></ion-icon>
                                <span class="menu-title">Read Case</span>
                                </nuxt-link>
                            </li>
                            <li class=" nav-item ">
                                <nuxt-link to="#"
                                ><ion-icon name="close-outline" style="margin-right:1em;"></ion-icon>
                                <span class="menu-title text-danger">Close Case</span>
                                </nuxt-link>
                            </li>
                            </ul>
                            </div>
                            
                    
                        </div>
                    </div>  -->
                    <div class="col-md-6 col-lg-6 col-12">
                <section class="card">
                  
                   <div class="card-header p-2" style="background: #814BAA;color:#ffffff">
                       
                        <h4 class="card-title" style="color:#ffffff;">{{receiver.first_name | capitalize}}</h4>
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

                                    <div class="chat-app-window" id="chat-frame" ref="chatBox" style="height:auto;overflow-y:scroll">
                                        <div class="user-chats pr-0 pl-0">
                                            <div class="m-1"><small class="text-muted">July 15, 2020</small></div>
                                            <div class="chats">
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
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control"
                                      placeholder=""
                                      v-model="receiver.doctor_observation"
                                      style="border-radius:40px;"
                                    />
                                  </fieldset>
                                </div>
                              </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" @click="updateCase" data-dismiss="modal">Save</button>
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
  data() {
      return {
        chats: null,
        chat: '',
        log: '',
        sender_id: this.$store.state.auth.user.id,
        receiver:'',
        modalShown:true,
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
      ...mapGetters(["user"])
  },
  methods: {
        
        lastMsgFocus(){
            
            this.$refs.chatBox.scrollTop += 100;
           
        },
        sendChat() {
            if(this.chat){
                let db = this.$fireStore
                db.collection("chats").add({
                    sender: this.sender_id,
                    caseid: this.$route.params.caseid,
                    body: this.chat,
                    createdAt: new Date()
                })
                .then(function(docRef) {
                   
                })
                .catch(function(error) {
                    
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
            if(role == "doctor"){
                let caseId = this.$route.params.caseid;
                this.$axios.get('case/'+caseId+'/patient')
                .then(response => {
                    this.receiver = response.data.data;
                })
                .catch(error => {
                    
                })
            }
            if(role == "patient"){
               let caseId = this.$route.params.caseid;
                
                this.$axios.get('case/'+caseId+'/doctor')
                .then(response => {
                    this.receiver = response.data.data;
                })
                .catch(error => {
                    
                }) 
            }
        },
        loadChat(){
            const db = this.$fireStore.collection('chats')
                db.where("caseid", '==', this.$route.params.caseid).orderBy("createdAt")
                .onSnapshot(querySnapshot => {
                    let messages = []
                    querySnapshot.forEach(doc => {
                        messages.push(doc.data())
                    })

                    this.chats = messages
                })
            
                    
        },
        getCase(){

        },
        updateCase(){
            
            if(!this.receiver.doctor_observation){
                alert("this feild is required");
                return false;
            }
           
            this.$axios.post('/case/'+this.$route.params.caseid+'/update',{
                doctor_observation : this.receiver.doctor_observation
            })
            .then(response => {
                console.log(response.data);
                 alert("Observation saved successfully!")
            })
            .catch(error => {
                console.log(error.response.data);
            }) 
        },
        closeCase(){

        }
  },
  beforeDestroy(){
      clearInterval(this.log)
  },
  created(){
      this.loadChat()
  },
  mounted() {
    this.getReceiver();
    
    
  },
  updated(){  
        var elem = this.$refs.chatBox
        
        elem.scrollTop = elem.scrollHeight;
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
    
@media only screen and (max-width: 768px) {
    .content{
        margin-left:0;
    }
}
</style>