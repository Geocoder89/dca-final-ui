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
                    New Prescriptions
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
                                href="#home-just"
                                role="tab"
                                aria-controls="home-just"
                                aria-selected="true"
                                style="font-size: 16px;"
                                >New Prescriptions</a
                              >
                            </li>
                            <li class="nav-item">
                              
                            </li>
                          </ul>
                          <!-- Tab panes -->
                          <div class="tab-content pt-1">
                            <div
                              id="home-just"
                              class="tab-pane active"
                              role="tabpanel"
                              aria-labelledby="home-tab-justified"
                            >
                              <div class="col-lg-12 col-md-12 col-12">
                                <section class="mb-50">
                                  <div class="card-header">
                                  </div>
                                  <div class="card">
                                    <table class="table data-list-view" v-if="prescriptions.length">
                                    <tbody>
                                      <tr v-for="(prescription,index) in prescriptions" :key="prescription.id">
                                        <td class="product-name">{{index + 1}}. Prescriptions for {{prescription.ailment}}.</td>
                                        <td>
                                          <a href="#" data-toggle="modal" data-target="#drugs"
                                            @click="previewDrugs(prescription.id),event => event.preventDefault()"
                                            class="btn btn-sm btn-primary float-right"
                                            >preview</a
                                          >
                                        </td>
                                        <td>
                                          <button
                                            @click="checkin(prescription.id),event => event.preventDefault()"
                                            class="btn btn-sm btn-primary float-right"
                                            >Accept</button
                                          >
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table class="table data-list-view" v-else>
                                    <tbody>
                                      <tr>
                                        <td class="product-name">No prescription found.</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  </div>
                                  <i style="color:red;" v-if="prescriptions.length">please note: accepting either of these prescriptions means you have the drugs associated with it.</i>
                                </section>

                                 <!-- <section class="mb-50">
                                  <div class="card-header">
                                  </div>
                                    <div class="card">
                                        <ul class="list-group list-group-flush">
                                          <li class="list-group-item" v-for="drug in drugs" :key="drug.id">{{drug.name}} | {{drug.dosage}}</li>
                                        </ul>
                                    </div>
                                </section> -->
                              </div>
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
<!-- prescription -->
            <div class="modal fade text-left" id="drugs" tabindex="-1" role="dialog" aria-labelledby="myModalLabel18" aria-hidden="true" data-backdrop="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable  modal-sm" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel18">Drugs</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p v-if="!drugs.length">
                              <i>Loading Drugs...</i>
                            </p>
                          <table class="table table-striped" v-else>
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Dosage</th>
                                
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(drug,index) in drugs" :key="drug.id">
                                  <th scope="row">{{index + 1}}</th>
                                  <td>{{drug.name}}</td>
                                  <td>{{drug.dosage}}</td>
                                  
                                </tr>
                              </tbody>
                            </table>
                              
                            
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-primary" style="border-radius:40px;" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
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
  name: 'Pending',
  data(){
    return{
      prescriptions:'',
      drugs:"",
      showDrugs:false
    }
  },
  middleware:['auth','pharmacy'],
  components: {
    Header,
    Footer,
    Sidebar
  },
  methods:{
    getPrescriptions(){
      this.$axios.get(`prescriptions?q=not-picked`)
      .then(response => {
        let prescriptions = response.data.data
        console.log(prescriptions)
        this.prescriptions = prescriptions;
          
      })
      .catch(error => {
          console.log(error);
      })
    },
    checkin(id){
      this.$axios.patch(`prescriptions/${id}/pharmacies`,{
          partners_id : this.$store.state.auth.user.partners[0].id
      })
      .then(response => {
          this.$noty.success("Prescription accepted successfuly.")
          this.$router.push({
            path:`/pharmacy/prescription/${id}`
          })
      })
      .catch(error => {
          console.log(error.response.data);
      }) 
        
    },
    previewDrugs(id){
        
        
        this.$axios.get(`prescriptions/${id}`)
        .then(response => {
                
                let drugs = response.data.data.drugs
       
                this.drugs = drugs
                
        })
        .catch(error => {
            console.log(error);
        })
      }
  },
  mounted(){
    this.getPrescriptions();
  }
}
</script>

