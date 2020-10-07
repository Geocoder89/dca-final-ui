<template>
  <div>
    <body class="vertical-layout 2-columns navbar-floating footer-static pace-done menu-hide" data-open="click" data-menu="vertical-menu-modern" data-col="2-columns" style="overflow: auto;">
      <Header></Header>
      <Sidebar></Sidebar>

      <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
          <div class="content-header row justify-content-center">
            <div class="content-header-left col-md-6 col-12 mb-6">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-2">
                    Available patients
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body" v-if="!patients.length">
            <!-- Data list view starts -->
            <section id="data-list-view" class="data-list-view-header">
              <div class="row justify-content-md-center">
                <div class="col-md-6 col-lg-6">
                  <!-- DataTable starts -->
                  <div class="card">
                    <table class="table data-list-view">
                      <tbody  >
                        <tr>
                          <td>No available patients</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="content-body" v-if="patients.length">
            <!-- Data list view starts -->
            <section id="data-list-view" class="data-list-view-header">
              <div class="row justify-content-md-center">
                <div class="col-md-6 col-lg-6">
                  <!-- DataTable starts -->
                  <div class="card">
                    <table class="table data-list-view">
                      <tbody  >
                        <tr v-for="patient in patients" :key="patient.id">
                          <td class="product-name p-2" style="font-size:0.9em;">1.   {{patient.patient.first_name}} {{patient.patient.last_name}}</td>
                          <td class="text-muted">{{patient.initial_complain}}</td>
                          <td>
                            <button
                              @click.prevent="checkin(patient.id)"
                              class="btn btn-sm btn-primary"
                              style="border-radius:40px;"
                              >Check In</button
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
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
import Header from '~/components/doctor/header'
import Footer from '~/components/doctor/footer'
import Sidebar from '~/components/doctor/sidebar'

export default {
  name: 'Patients',
  data() {
    return {
      patients:'',
    }
  },
  components: {
    Header,
    Footer,
    Sidebar
  },
  methods:{
    getPatients(){
      this.$axios.get('cases/waiting-room')
      .then(response => {
        this.patients = response.data.data
        console.log(response.data.data)
      })
    },
    checkin(id){
      this.$axios.patch('cases/'+id)
      .then(response =>{
        this.setDoctorCaseID()
        this.$router.push({
          path:'/doctor/chats/'+id
        })
      })
    },
    setDoctorCaseID(){
        this.$store.dispatch('chat/setChatSession', true)
        this.$store.dispatch('chat/setStatus', "ACTIVE")
    }
  },
  mounted(){
    this.getPatients()
  },
  middleware:['auth','doctor']
}
</script>
<style scoped>
.cbtn {
      width:58%;
      height:35px;
      line-height:8px;
      text-align:center;
      border-radius:40px;
  }
        
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .cbtn {
        width:100%;
        height:35px;
        font-size:12px;
        line-height:8px;
        text-align:center;
        border-radius:40px;
    }
      
  }
</style>
