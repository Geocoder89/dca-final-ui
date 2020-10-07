<template>
  <div>
    <body class="vertical-layout 2-columns navbar-floating footer-static pace-done menu-hide" data-open="click" data-menu="vertical-menu-modern" data-col="2-columns" style="overflow: auto;">
      <Header></Header>
      <side-bar></side-bar>

      <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
          <div class="content-header row justify-content-center">
            <div class="content-header-left col-md-5 col-lg-5 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-0">
                    Waiting Room
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <!-- Description -->
            <div class="row justify-content-center">
              <div class="col-lg-5 col-md-5 col-12">
                <section
                  id="description"
                  class="card d-flex pb-1 justify-content-center align-items-center text-center"
                  style=""
                >
                  <div class="card-header">
                    <!-- <h4 class="card-title">Description</h4> -->
                  </div>
                  <div class="card-content">
                    <div class="card-body">
                      <div class="card-text">
                        <!-- <h3>Welcome back,</h3> -->

                        <p id="title" v-html="title"></p>
                        <fieldset>
                        <input
                            id="basicInput"
                            type="text"
                            class="form-control mb-1"
                            style="border-radius:40px;"
                            :class="{'is-invalid': errors.initial_complain}"
                            v-model="message"
                            placeholder="briefly tell us what went wrong..."
                          />
                          <!-- <div class="invalid-feedback mb-1" v-if="err">
                              {{err}}
                          </div> -->
                          <div class="invalid-feedback mb-1" v-if="errors.initial_complain">
                              {{errors.initial_complain[0]}}
                          </div>
                        </fieldset>
                        <button
                          id="talkingbtn"
                          class="btn btn-outline-primary btn-inline"
                          style="border-radius:40px;"
                          :disabled="disable"
                          @click.prevent="submitCase"
                        >
                          Talk to a Doctor</button
                        ><br />
                        <img
                          v-if="showLoader"
                          id="loader"
                          src="~assets/img/portrait/small/30.gif"
                        />
                      </div>
                    </div>
                  </div>
                </section>
            </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Content-->

      <div class="sidenav-overlay"></div>
      <div class="drag-target"></div>

      <Footer></Footer>
    </body>
  </div>
</template>
<script>
import Header from '~/components/customer/header'
import Footer from '~/components/customer/footer'
import SideBar from '~/components/customer/sidebar'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    SideBar
  },
  data() {
    return {
      title: 'Your doctor is just a click away.',
      showLoader: false,
      message:'',
      chatStatus:null,
      caseid:'',
      disable:false
    }
  },
  methods: {
    loader() {
      
    },
    submitCase(){
        let vm = this;
        if(!this.message){
           alert('this field is required') 
           return false;
        }
        this.title = 'Your doctor will be with you shortly...'
        this.showLoader = true
        this.disable = !this.disable

        this.$axios.post('/cases', {
          initial_complain:this.message
        },{ headers:{
          "Access-Control-Allow-Origin":"*"
          }
        }).then(response => {
            console.log(response.data)
            vm.getStatus()
        }).catch(error => {
            console.log(error.response)
            this.title = 'Your doctor is just a click away.'
            this.disable = !this.disable
            this.showLoader = false
        })
    },
    getStatus(){
      let vm = this;
        this.$axios.get('cases')
        .then(response => {
           this.chatStatus = response.data.data.status
           this.caseid = response.data.data.id
          vm.$store.dispatch('chat/setStatus', this.chatStatus)
           vm.checkStatus()
        })
    },
    checkStatus(){
        if(this.chatStatus === "PENDING"){
            this.title = 'Your doctor will be with you shortly...'
            this.showLoader = true
            this.disable = !this.disable
        }
    }
    
  },
  mounted(){
    let vm = this;
    vm.getStatus()
    // setInterval(function () {
    //   vm.getStatus();
    // }, 30000); 
  },
  created(){

  },
  middleware:['auth','patientActiveCaseCheck','patient']
}
</script>
<style scoped>
  .content{
        margin-left:0;
    }
</style>
