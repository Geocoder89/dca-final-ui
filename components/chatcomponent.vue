<template>
    <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6 col-12">
                <section class="card">
                   <div class="card-header p-2" style="background: #814BAA;color:#ffffff">
                       <ul class="card-header p-2 d-none" style="background: #814BAA;color:#ffffff">
                       
                       <nuxt-link
                              to="#"
                              class="btn btn-sm btn"
                              data-toggle="dropdown"
                              ><ion-icon 
                              size="large"
                              color="light"
                              style="width: 30px;height:30px;color:#fff;"
                              name="add-circle"></ion-icon>
                              <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right p-1">
                            <li class="dropdown-menu-header">
                                <nuxt-link to="/doctor/patients/patient"><span class="grey darken-2"> Update Case</span></nuxt-link>
                            </li>
                            <br>
                            <li class="dropdown-menu-header pb-1">
                                <nuxt-link to="/doctor/prescribe"><span class="grey darken-2"> Prescription</span></nuxt-link>
                            </li>
                            <li class="dropdown-menu-header pb-1">
                               <nuxt-link to="#"> <span class="grey darken-2"> Refer specialist</span></nuxt-link>
                            </li>
                            <li class="dropdown-menu-header pb-1">
                                <nuxt-link to="#"><span class="grey darken-2"> Refer nurse</span></nuxt-link>
                            </li>
                            <li class="dropdown-menu-header pb-1">
                                <nuxt-link to="#"><span class="grey darken-2"> Refer Nutritionist</span></nuxt-link>
                            </li>
                            <li class="dropdown-menu-header pb-1">
                                <nuxt-link to="#"><span class="grey darken-2"> Refer Pharmarcy</span></nuxt-link>
                            </li>
                            <li class="dropdown-menu-header pb-1">
                                <nuxt-link to="#"><span class="grey darken-2"> Close Case</span></nuxt-link>
                            </li>
                            <li class="dropdown-menu-header pb-1">
                                <nuxt-link to="#"><span class="grey darken-2"> Medical History</span></nuxt-link>
                            </li>
                            <li class="dropdown-menu-header pb-1">
                                <nuxt-link to="#"><span class="grey darken-2"> Read Cases</span></nuxt-link>
                            </li>
                        </ul>
                       </nuxt-link>
                    </ul>
                        <h4 class="card-title" style="color:#ffffff;">Dr Akinwunmi</h4>
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

                                    <div class="chat-app-window" style="height:450px;overflow-y:scroll">
                                        <div class="user-chats pr-0 pl-0">
                                            <div class="m-1"><small class="text-muted">July 15, 2020</small></div>
                                            <div class="chats">
                                                <div class="chat" v-for="ch in chats" :key="ch.id" :class="{'chat-left' : checkUserMsg(ch.receiver_id)}">
                                                    <!-- <div class="chat-avatar mt-50" v-if="checkUserMsg(ch.receiver_id)">
                                                        <a class="avatar m-0" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="">
                                                            <img src="~assets/img/portrait/small/avatar-s-5.jpg" alt="avatar" height="40" width="40" />
                                                        </a>
                                                    </div> -->
                                                    <div class="chat-body" :style="{'width: 80%;':checkUserMsg(ch.receiver_id)}" :class="{'pr-0 mr-0': !checkUserMsg(ch.receiver_id)}">
                                                        <div :class=" chatClass(ch.receiver_id)">
                                                            <p v-html="ch.body"></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- <div class="chat">
                                                    
                                                    <div class="chat-body pr-0 mr-0">
                                                        <div class="chat-content2">
                                                            <p>i'm fine and you</p>
                                                        </div>
                                                    </div>
                                                </div> -->
                                            </div>
                                        </div>

                                    </div>
                                    <hr>
                                    <div class="chat-footer mt-0">
                                            <div class="card-body d-flex justify-content-between pt-0">
                                                <a href="#" class="align-self-center"><i class="fa fa-paperclip btn-icon" style="font-size: 18px;"></i></a>
                                                <input type="text" class="form-control mr-50 ml-50" placeholder="Type your Message" v-model="chat" style="border-radius: 50px;">
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
        </div>
</template>
<script>
import { mapGetters } from 'vuex'


export default {
  name: 'chats',
  data() {
      return {
          chats:null,
          chat:'',
          log:'',
          disable:true
      }
  },
  
  computed:{
      ...mapGetters(["user"])
  },
  methods: {
      allChats() {
        this.$axios.get('cases/'+this.$route.params.caseid+'/messages').then(response => {
                this.chats = response.data.data
                console.log(this.chats)
            })
        },
        sendChat() {
            this.$axios.post(`cases/${this.$route.params.caseid}/messages`,{
                'body':this.chat
            }).then(() => {
                this.chat = ""
                this.allChats()
            })
        },
        checkUserMsg(id){
            return this.user.id === id 
        },
        chatClass(id){
            return this.user.id === id ? 'chat-content' : 'chat-content2'
        },
        loadChat(){
            this.log = setInterval(()=>{
                this.allChats()
            },3000)
        }
  },
  beforeDestroy(){
      clearInterval(this.log)
  },
  created(){
      this.loadChat()
  },
  mounted() {
      this.allChats();
    //   setInterval(function () {
    //     this.allChats();
    //     }, 1000); 
  },
 
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