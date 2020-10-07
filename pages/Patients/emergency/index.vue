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
            <div class="content-header-left col-md-6 col-12 mb-2">
              <div class="row breadcrumbs-top">
                <div class="col-12">
                  <h3 class="content-header-title float-left mb-0">
                    Request Ambulance
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <section class="page-users-view">
              <div class="row justify-content-center">
                <!-- account start -->
                <div class="col-12 col-md-6 col-lg-6 px-2">
                  <div class="card px-2 py-2 justify-content-center">
                    <div class="card-header pb-2">
                      <h4 class="font-weight-light">Enter Details</h4>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                          <form action="#">
                            <fieldset>
                              <div class="row">
                                <div class="col-xl-9 col-md-9 col-12 mb-0">
                                  <fieldset class="form-group">
                                    <select
                                      class="custom-select"
                                      id="customSelect"
                                      style="border-radius:40px;"
                                    >
                                      <option selected
                                        >Pickup Location..</option
                                      >
                                      <option value="IT">Lagos</option>
                                      <option value="Blade Runner">Yaba</option>
                                      <option value="Thor Ragnarok"
                                        >shomolu</option
                                      >
                                    </select>
                                  </fieldset>
                                  <fieldset class="form-group">
                                    <select
                                      class="custom-select"
                                      id="customSelect"
                                      style="border-radius:40px;"
                                    >
                                      <option selected
                                        >Select Hospital..</option
                                      >
                                      <option value="1">Hospital 1</option>
                                      <option value="2">Hospital 1</option>
                                    </select>
                                  </fieldset>
                                  <fieldset class="form-group">
                                    <select
                                      class="custom-select"
                                      id="customSelect"
                                      style="border-radius:40px;"
                                    >
                                      <option selected
                                        >Hospital Location..</option
                                      >
                                      <option value="1">Hospital loc1</option>
                                      <option value="2">Hospital loc2</option>
                                    </select>
                                  </fieldset>
                                </div>
                              </div>
                            </fieldset>
                          </form>
                        </div>

                        <div class="col-12 d-flex justify-content-start">
                          <nuxt-link
                            to="/patients/ambulancemessage"
                            class="btn btn-primary"
                            style="border-radius:40px;"
                            ><i class="feather"></i> Request Now
                          </nuxt-link>
                          <!--  <button class="btn btn-outline-danger"><i class="feather icon-"></i> Cancel</button> -->
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
  middleware:['auth','patient']
}
</script>
<style scoped>
@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    
    .content{
        margin-left:0;
    }
      
  }
</style>

