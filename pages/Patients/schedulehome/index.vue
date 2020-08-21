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
                    Schedule Visit
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <section class="page-users-view">
              <div class="row justify-content-center">
                <!-- account start -->
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="card justify-content-center px-1 py-1">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12 pb-2">
                          <h4 class="font-weight-light">
                            Schedule home visit with a doctor.
                          </h4>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                          <form action="#">
                            <fieldset>
                              <div class="row">
                                <div class="col-xl-6 col-md-6 col-lg-6 col-12">
                                  <div class="form-group">
                                    <label for="accountTextarea">Date:</label>
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control pickadate"
                                      style="border-radius:40px;"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                                <div class="col-xl-6 col-md-6 col-lg-6 col-12">
                                  <div class="form-group">
                                    <label for="accountTextarea"
                                      >Time (00:00):</label
                                    >
                                    <input
                                      id="basicInput"
                                      type="text"
                                      class="form-control pickatime-format"
                                      style="border-radius:40px;"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="form-group">
                                    <label for="accountTextarea"
                                      >Complaint:</label
                                    >
                                    <textarea
                                      id="accountTextarea"
                                      class="form-control"
                                      style="border-radius:20px;"
                                      rows="3"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </form>
                        </div>

                        <div class="col-12 d-flex justify-content-start">
                          <nuxt-link
                            to="schedulemessage"
                            class="btn btn-primary"
                            style="border-radius:40px;"
                            ><i class="feather"></i> Schedule</nuxt-link
                          >
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
