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
                    Pending Prescriptions
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
                                >Pending Prescriptions</a
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
                                          <button
                                            @click="checkin(prescription.id)"
                                            class="btn btn-sm btn-primary float-right"
                                            >View</button
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
      prescriptions:[]
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
      this.$axios.get(`prescriptions`)
      .then(response => {
        let prescriptions = response.data.data
        
        prescriptions.forEach((item) => {
            if(item.partners_id == this.$store.state.auth.user.partners[0].id){
              this.prescriptions.push(item)
            }
        })
      })
      .catch(error => {
          console.log(error);
      })
    },
    checkin(id){
      this.$router.push({
        path:`/pharmacy/prescription/pend/${id}`
      })
    }
  },
  mounted(){
    this.getPrescriptions();
    
  }
}
</script>

