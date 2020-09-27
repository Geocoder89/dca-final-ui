<template>
  <div>
    <body class="vertical-layout 2-columns navbar-floating footer-static pace-done menu-hide" data-open="click" data-menu="vertical-menu-modern" data-col="2-columns" style="overflow: hidden;">

      <Header></Header>
      <Sidebar></Sidebar>

      <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
          <div class="content-header row justify-content-center">
            <div class="content-header-left col-md-6 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h4 class="content-header-title float-left mb-0">
                    Pending Prescription
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <div class="row justify-content-md-center">
              <div class="col-lg-6">
                <section class="card">
                  <div class="row ">
                    <!-- account start -->
                    <div class="col-12 col-md-12 col-lg-12 pb-0">
                      <div class="card">
                        <div class="card-header">
                          <!-- <div class="card-title">Case File</div> -->
                        </div>
                        <div class="card-body pb-0">
                          <div class="row pb-0">
                            <div
                              class="col-12 col-sm-12 col-md-12 col-lg-12 pb-0"
                            ></div>
                          </div>
                          <ul
                            id="myTab2"
                            class="nav nav-tabs nav-justified"
                            role="tablist"
                          >
                            <li class="nav-item">
                              <a
                                id="home-tab-justified"
                                class="nav-link active"
                                data-toggle="tab"
                                href="#"
                                role="tab"
                                aria-controls="home-just"
                                aria-selected="true"
                                style="font-size: 16px;"
                                >Prescription for {{dataObj.ailment | capitalize}}</a
                              >
                            </li>
                            <li class="nav-item">
                             
                            </li>
                          </ul>
                          <!-- Tab panes -->
                          <div class="mt-2 ml-1">
                              <h6 v-if="!doctor.first_name"><i>Loading...</i></h6>
                              <h6 v-else>Referred by Dr {{doctorFullName}}</h6>
                             
                            
                          </div>
                          <div class="tab-content pt-1">
                            <div
                              id="home-just"
                              class="tab-pane active"
                              role="tabpanel"
                              aria-labelledby="home-tab-justified"
                            >
                              <div class="col-lg-12 col-md-12 col-12">
                                <section class="mb-50">
                                    <div class="card">
                                  <div class="card-header pl-0 mb-1">
                                    <h6 class="card-title">Diagnosis</h6>
                                  </div>
                                  
                                    <div class="card-body" style="background:#F8F8F8;border-radius:20px;">
                                        <div v-if="casefile.doctor_observation">
                                            <p v-if="casefile.doctor_observation.length">
                                                {{casefile.doctor_observation | capitalize}}
                                            </p>
                                            <p v-else>
                                                <i>No Diagnosis</i>
                                            </p>
                                        </div>
                                        <div v-else>
                                            <p>
                                                <i>Loading...</i>
                                            </p>
                                        </div>
                                       
                                        
                                    </div>
                                  </div>
                                </section>
                              </div>
                              
                              <div class="col-lg-12 col-md-12 col-12">
                                <section class="mb-50">
                                    <div class="card">
                                  <div class="card-header pl-0 mb-1">
                                    <h6 class="card-title">Drugs</h6>
                                  </div>
                                  
                                    <div class="card-body" style="background:#F8F8F8;border-radius:20px;">
                                        <table class="table data-list-view" v-if="prescribed_drugs.length">
                                            <tbody>
                                                <tr v-for="(drug) in prescribed_drugs" :key="drug.id">
                                                    <td class="product-name">{{drug.name | capitalize}}</td>
                                                    <td class="product-name">{{drug.dosage}}</td>
                                                    <td class="product-name">‎₦{{drug.price_in_minor_unit}}.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="table data-list-view" v-else>
                                            <tbody>
                                                <tr>
                                                    <td class="product-name">No prescription</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                  </div>
                                </section>
                              </div>
                              <!-- <div class="col-12 d-flex justify-content-center">
                                  <a href="#" class="btn btn-primary mr-1" style="border-radius:40px;" data-toggle="modal" data-target="#costing">
                                    Yes, I have
                                  </a>
                                  <nuxt-link to="#" class="btn btn-outline-primary" style="border-radius:40px;">
                                    Not Available
                                  </nuxt-link>
                              </div> -->
                            </div>
                           
                          </div>
                        </div>
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
import Header from '~/components/pharmacy/header'
import Footer from '~/components/pharmacy/footer'
import Sidebar from '~/components/pharmacy/sidebar'

export default {
  name: 'Singlefile',
  data(){
      return{
          prescribed_drugs:'',
          casefile:'',
          doctor:'',
          dataObj:'',
          pharmacy_note:'' 

      }
  },
  components: {
    Header,
    Footer,
    Sidebar
  },
  filters: {
    capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed:{
      doctorFullName:function(){
          return `${this.doctor.first_name} ${this.doctor.last_name}`
      },
      doctorObservation:function(){
          return `${this.casefile.doctor_observation}`
      }
  },
  methods:{
     getCase(id){
       let self = this
         this.$axios.get(`cases/${id}`)
        .then(response => {
            let casefile = response.data.data
            let doctor = casefile.doctor
            self.casefile = casefile
            self.doctor = doctor
        })
        .catch(error => {
            console.log(error);
        })
        
        
      },
      getDrugs(){
        
        let prescriptionid = this.$route.params.id;
        
        this.$axios.get(`prescriptions/${prescriptionid}`)
        .then(response => {
                let data = response.data.data
                this.dataObj = data
                let drugs = response.data.data.drugs
       
                let casefile_id = data.case_file_id
                
                
                this.getCase(casefile_id)
                
                this.prescribed_drugs = drugs


                
        })
        .catch(error => {
            // console.log(error.response);
        })
      }
  },
  created(){
    this.getDrugs()
  }

}
</script>
<style scoped>
.va-btn{
  font-size:16px;
}
@media only screen and (max-width: 768px) {
    .va-btn {
      width: 120px;
      height: auto;
      font-size: 11px;
      line-height: 15px;
    }
    
}
</style>
